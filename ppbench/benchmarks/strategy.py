"""Strategy base class and data types.

A strategy defines WHAT to do: how to build an agent, how to interpret results,
and optional runtime hooks (compactification, self-modifying context, etc.).

A strategy does NOT: run the agent, track usage, handle errors, serialize results,
or interact with storage. That's the harness's job.
"""

import hashlib
import inspect
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import Any


@dataclass
class AgentConfig:
    """Everything the harness needs to run an agent. Returned by Strategy.build_agent()."""
    agent: Any              # pydantic-ai Agent instance
    prompt: str             # User prompt to send
    deps: Any = None        # Dependencies passed to agent (strategy-specific context)
    usage_limits: Any = None  # pydantic-ai UsageLimits


@dataclass
class StrategyResult:
    """Domain-specific output from a completed run. Returned by Strategy.extract_result()."""
    is_success: bool
    parsed_moves: list[str] = field(default_factory=list)
    raw_output: str = ""
    detail_data: dict = field(default_factory=dict)


class Strategy(ABC):
    """Base class for puzzle-solving strategies.

    Subclasses implement three things:
      1. build_agent() — create the agent, prompt, and deps
      2. extract_result() — interpret a run's output (parse moves, check success)
      3. on_node() — optional per-step hook for runtime behavior

    The strategy_id is auto-computed from the source of these three methods.
    Harness changes (retry logic, usage tracking, error handling) never affect it.
    """

    requires_tools: bool = False

    # If this strategy is functionally equivalent to older strategy IDs
    # (e.g. after a harness-only refactor), list them here so the cache
    # can match existing results under those IDs.
    cache_aliases: list[str] = []

    @property
    def strategy_id(self) -> str:
        """Hash of the strategy's own methods — not the harness, not the base class.

        Hashes: build_agent, extract_result, on_node, plus any helper methods
        defined on the subclass. Changes to harness code don't change this hash.
        """
        cls = self.__class__
        parts = [cls.__name__]

        # Hash all methods defined on the subclass (not inherited from Strategy)
        for name in sorted(dir(cls)):
            if name.startswith("_"):
                continue
            attr = getattr(cls, name, None)
            if attr is None or not callable(attr):
                continue
            # Only hash methods defined on this class, not inherited
            if name in ("strategy_id",):
                continue
            defining_class = None
            for klass in cls.__mro__:
                if name in klass.__dict__:
                    defining_class = klass
                    break
            if defining_class is cls:
                try:
                    parts.append(inspect.getsource(attr))
                except OSError:
                    parts.append(name)

        identifier = "\n".join(parts)
        src_hash = hashlib.md5(identifier.encode("utf-8")).hexdigest()[:8]
        return f"{cls.__name__}_{src_hash}"

    @abstractmethod
    def build_agent(self, puzzle: Any, model_obj: Any, model_name: str) -> AgentConfig:
        """Create the agent, prompt, and deps for this puzzle.

        This is pure setup — no execution happens here.
        """

    @abstractmethod
    def extract_result(self, puzzle: Any, deps: Any, output: str) -> StrategyResult:
        """Interpret a completed run.

        Called after the agent finishes (successfully). Parse moves from deps
        or output, replay them, check if puzzle is solved.

        Args:
            puzzle: The original puzzle (unmodified — replay moves on a fresh copy).
            deps: The deps object from build_agent(), potentially mutated during the run.
            output: The agent's final text output.
        """

    def on_node(self, node: Any, ctx: Any) -> None:
        """Optional hook called per agent node during execution.

        Override this for runtime behavior like:
          - Token-count monitoring → compactification
          - Dynamic tool mutation
          - Self-modifying context / meta-cognition
          - Progress tracking

        Args:
            node: The current pydantic-ai agent node.
            ctx: The run context (has .state, .deps, etc.).
        """
        pass

    def extract_logs(self, deps: Any) -> list:
        """Extract structured logs from deps after a run.

        Override in strategies that use StrategyLogger for move-by-move tracing.
        The harness calls this to populate the logs field of DetailedRunResult.
        """
        return []
