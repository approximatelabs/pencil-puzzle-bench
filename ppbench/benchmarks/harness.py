"""Harness: runs strategies and owns all operational concerns.

The harness is responsible for:
  - Running the agent (streaming, retries, timeouts)
  - Extracting usage from messages (always, including errors)
  - Error classification and traceback capture
  - Building DetailedRunResult
  - Saving to storage

The harness NEVER touches puzzle logic, prompts, or tool definitions.
"""

import asyncio
import json
import time
import traceback
from typing import Any, Optional

from pydantic_ai import Agent as PydanticAgent
from pydantic_ai.messages import ModelResponse

from .strategy import Strategy, StrategyResult
from .utils import (
    DetailedRunResult,
    RunResult,
    StorageManager,
    TokenUsage,
)


def _extract_usages(messages: list) -> list[TokenUsage]:
    """Extract token usage from a list of pydantic-ai messages."""
    usages = []
    for msg in messages:
        if isinstance(msg, ModelResponse) and msg.usage:
            usages.append(TokenUsage(
                input_tokens=msg.usage.input_tokens,
                output_tokens=msg.usage.output_tokens,
                details=msg.usage.details or {},
            ))
    return usages


def _serialize_messages(messages: list) -> list[dict]:
    """Serialize pydantic-ai messages to JSON-safe dicts."""
    try:
        from pydantic_ai.messages import ModelMessagesTypeAdapter
        raw = ModelMessagesTypeAdapter.dump_json(messages).decode()
        return json.loads(raw)
    except Exception:
        return []


async def run_strategy(
    strategy: Strategy,
    puzzle: Any,
    model_obj: Any,
    model_name: str,
    storage: Optional[StorageManager] = None,
    max_retries: int = 3,
    request_timeout: float = 12 * 60 * 60,
) -> DetailedRunResult:
    """Run a strategy against a puzzle. Handles all operational concerns.

    Returns a DetailedRunResult with usage data populated in ALL cases
    (success, failure, and error).
    """
    import httpx
    import openai
    from pydantic_ai.exceptions import ModelHTTPError, UnexpectedModelBehavior

    # Optional timeout error types
    retryable_types = [
        openai.APIError,
        openai.APIConnectionError,
        httpx.RemoteProtocolError,
        httpx.ReadTimeout,
        TimeoutError,
    ]
    try:
        from ppbench.benchmarks.connection_logger import ChunkTimeoutError, TTFBTimeoutError
        retryable_types.extend([TTFBTimeoutError, ChunkTimeoutError])
    except ImportError:
        pass
    retryable = tuple(retryable_types)

    start_time = time.time()
    config = strategy.build_agent(puzzle, model_obj, model_name)
    puzzle_id = f"{puzzle.pid}_{puzzle.id}"

    context_too_long_patterns = (
        "maximum context length",
        "maximum prompt length",
        "prompt is too long",
        "too many tokens",
    )

    def is_retryable(e: Exception) -> bool:
        if isinstance(e, retryable):
            return True
        if isinstance(e, ModelHTTPError):
            body_str = str(e.body).lower() if e.body else ""
            if any(p in body_str for p in context_too_long_patterns):
                return False
            if e.status_code == 429:
                return True
            if e.status_code == 400:
                if "reasoning" in body_str and "without its required" in body_str:
                    return True
        if isinstance(e, UnexpectedModelBehavior):
            return True
        return False

    def get_backoff(e: Exception, attempt: int) -> float:
        import random
        import re
        base = 2 ** attempt
        jitter = random.uniform(0, 1)
        if isinstance(e, ModelHTTPError) and e.status_code == 429:
            body_str = str(e.body) if e.body else ""
            match = re.search(r'retry.*?(\d+(?:\.\d+)?)\s*s', body_str, re.IGNORECASE)
            if match:
                return min(float(match.group(1)) + jitter, 300)
            return min(10 * (2 ** attempt) + jitter, 120)
        return min(base + jitter, 60)

    # --- Execute ---

    last_run = [None]
    messages = []       # Accumulated messages (partial or full)
    raw_output = ""
    error_type = None
    trace = None

    agent_kwargs = dict(deps=config.deps)
    if config.usage_limits:
        agent_kwargs["usage_limits"] = config.usage_limits

    async def do_run():
        async with config.agent.iter(config.prompt, **agent_kwargs) as run:
            last_run[0] = run
            async for node in run:
                # Strategy hook — compactification, context mutation, etc.
                strategy.on_node(node, run.ctx)

                if PydanticAgent.is_model_request_node(node):
                    async with node.stream(run.ctx) as stream:
                        async for _ in stream:
                            pass
        return run.result

    last_error = None
    for attempt in range(max_retries):
        try:
            async with asyncio.timeout(request_timeout):
                result = await do_run()

            # Success — extract everything
            messages = result.all_messages()
            raw_output = result.output
            break

        except Exception as e:
            if not is_retryable(e):
                # Non-retryable: capture what we can and stop
                error_type = str(type(e))
                trace = traceback.format_exc()
                if last_run[0]:
                    try:
                        messages = last_run[0].all_messages()
                    except Exception:
                        pass
                break

            last_error = e
            if attempt < max_retries - 1:
                await asyncio.sleep(get_backoff(e, attempt))
    else:
        # All retries exhausted
        error_type = str(type(last_error))
        trace = traceback.format_exc()
        if last_run[0]:
            try:
                messages = last_run[0].all_messages()
            except Exception:
                pass

    # --- Extract usage (harness concern — always, regardless of outcome) ---

    request_usages = _extract_usages(messages)
    full_history = _serialize_messages(messages)

    # --- Extract domain result (strategy concern) ---

    strategy_result = StrategyResult(is_success=False)
    if error_type is None:
        try:
            strategy_result = strategy.extract_result(puzzle, config.deps, raw_output)
        except Exception as e:
            error_type = str(type(e))
            trace = traceback.format_exc()

    # --- Extract logs (strategy concern — move-by-move tracing) ---

    try:
        logs = strategy.extract_logs(config.deps)
    except Exception:
        logs = []

    # --- Build and save ---

    duration = time.time() - start_time

    detailed = DetailedRunResult(
        summary=RunResult(
            strategy_id=strategy.strategy_id,
            model_name=model_name,
            puzzle_id=puzzle_id,
            puzzle_url=puzzle.url,
            is_success=strategy_result.is_success,
            duration_seconds=duration,
            total_requests=len(request_usages),
            parsed_moves=strategy_result.parsed_moves,
            error_type=error_type,
            exception_traceback=trace,
        ),
        request_usages=request_usages,
        full_history=full_history,
        logs=logs,
        detail_data={
            "raw_output": strategy_result.raw_output,
            **strategy_result.detail_data,
        },
    )

    if storage:
        await storage.save(detailed)

    return detailed
