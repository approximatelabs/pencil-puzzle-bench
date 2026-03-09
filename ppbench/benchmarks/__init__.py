"""
Benchmark harness for evaluating LLM puzzle-solving.

Quick start — write a script like:

    import asyncio
    from ppbench.benchmarks import run, DirectAskStrategy, BasicAgenticSolve

    results = asyncio.run(run(
        models=["anthropic/claude-sonnet-4-6"],
        strategies=[DirectAskStrategy],
        dataset="golden_30",
        n_puzzles=5,
    ))

Or run the included example:

    uv run python -m ppbench.benchmarks.run_benchmark
"""

import asyncio
import random
import time
from typing import Type

from ppbench import Puzzle, load_dataset

from .harness import run_strategy
from .model_list import get_model, supports_tools
from .strategies import BasicAgenticSolve, DirectAskStrategy
from .strategy import AgentConfig, Strategy, StrategyResult
from .utils import (
    DetailedRunResult,
    RunResult,
    StorageManager,
    TaskPool,
    TokenUsage,
)


async def run(
    models: list[str],
    strategies: list[Type[Strategy]],
    dataset: str = "golden_30",
    puzzles: list[str] | None = None,
    puzzle_types: list[str] | None = None,
    n_puzzles: int | None = None,
    concurrency: int = 10,
    output_dir: str = "output/runs",
    seed: int | None = None,
) -> list[DetailedRunResult]:
    """
    Run the benchmark.

    Args:
        models: List of model identifiers (e.g., ["anthropic/claude-sonnet-4-6", "openai/gpt-4o"])
        strategies: List of strategy classes to evaluate
        dataset: Which puzzle dataset to use ("golden_30", "golden_300", "golden")
        puzzles: Specific puzzle URLs or puzzle IDs (e.g., "tapa_p0n0zzzx") to run (overrides dataset/n_puzzles)
        puzzle_types: Filter to specific puzzle types (e.g., ["tapa", "lits"])
        n_puzzles: Number of puzzles to use (None = use all). Applied after puzzle_types filter.
        concurrency: Max concurrent tasks
        output_dir: Where to save results
        seed: Random seed for puzzle sampling (applied before n_puzzles slicing)

    Returns:
        List of DetailedRunResult for each (model, strategy, puzzle) combination
    """
    # Load puzzles
    if puzzles is not None:
        # Resolve each entry: could be a full URL or a puzzle ID like "tapa_p0n0zzzx"
        records = []
        all_records = None  # lazy-load dataset only if needed
        for p in puzzles:
            if "://" in p:
                # Full URL
                pid = p.split("?")[1].split("/")[0] if "?" in p else "unknown"
                records.append({"puzzlink_url": p, "pid": pid})
            else:
                # Puzzle ID — look it up across datasets
                if all_records is None:
                    all_records = {}
                    for ds in dict.fromkeys([dataset, "golden_300", "golden"]):
                        try:
                            for r in load_dataset(ds):
                                rid = f"{r['pid']}_{r['puzzlink_url'][-8:]}"
                                all_records[rid] = r
                        except Exception:
                            continue
                if p in all_records:
                    records.append(all_records[p])
                else:
                    print(f"  Warning: puzzle '{p}' not found, skipping")
    else:
        records = load_dataset(dataset)
        if puzzle_types is not None:
            records = [r for r in records if r["pid"] in puzzle_types]
        if seed is not None:
            rng = random.Random(seed)
            records = list(records)
            rng.shuffle(records)
        if n_puzzles is not None:
            records = records[:n_puzzles]

    source = "explicit URLs" if puzzles is not None else f"'{dataset}'"
    print(f"Loaded {len(records)} puzzles from {source}")
    print(f"Models: {models}")
    print(f"Strategies: {[s.__name__ for s in strategies]}")
    print(f"Total tasks: {len(records) * len(models) * len(strategies)}")
    print()

    # Setup
    storage = StorageManager(base_dir=output_dir)
    strategy_instances = {cls.__name__: cls() for cls in strategies}
    all_results: list[DetailedRunResult] = []
    start = time.time()

    # Build tasks
    tasks = []
    for model_name in models:
        model_obj = get_model(model_name)
        has_tools = supports_tools(model_name)

        for strat_name, strategy in strategy_instances.items():
            if strategy.requires_tools and not has_tools:
                print(f"  Skipping {strat_name} for {model_name} (no tool support)")
                continue

            for record in records:
                tasks.append((strat_name, strategy, model_name, model_obj, record))

    # Run with concurrency
    sem = asyncio.Semaphore(concurrency)
    done_count = 0

    async def run_one(strat_name, strategy, model_name, model_obj, record):
        nonlocal done_count
        url = record["puzzlink_url"]
        pid = record["pid"]
        puzzle = Puzzle.from_url(url)
        puzzle_id = f"{puzzle.pid}_{puzzle.id}"

        # Skip if already completed
        cached = storage.lookup(strategy.strategy_id, model_name, puzzle_id)
        if cached == "completed":
            done_count += 1
            elapsed = time.time() - start
            print(
                f"  [{done_count}/{len(tasks)}] SKIP | {model_name} | {strat_name} | "
                f"{pid} | cached | [{elapsed:.0f}s elapsed]"
            )
            return None

        async with sem:
            result = await run_strategy(
                strategy=strategy,
                puzzle=puzzle,
                model_obj=model_obj,
                model_name=model_name,
                storage=storage,
            )
            done_count += 1
            s = result.summary
            status = "PASS" if s.is_success else ("ERR" if s.error_type else "FAIL")
            elapsed = time.time() - start
            print(
                f"  [{done_count}/{len(tasks)}] {status} | {model_name} | {strat_name} | "
                f"{pid} | {s.duration_seconds:.1f}s | {s.total_requests} reqs | "
                f"{len(s.parsed_moves)} moves | [{elapsed:.0f}s elapsed]"
            )
            return result

    results = await asyncio.gather(
        *(run_one(*t) for t in tasks),
        return_exceptions=True,
    )

    # Collect results (filter out exceptions)
    for r in results:
        if isinstance(r, DetailedRunResult):
            all_results.append(r)
        elif isinstance(r, Exception):
            print(f"  Task failed with: {type(r).__name__}: {r}")

    # Summary
    elapsed = time.time() - start
    passed = sum(1 for r in all_results if r.summary.is_success)
    print(f"\nDone in {elapsed:.1f}s — {passed}/{len(all_results)} passed")

    return all_results


__all__ = [
    "run",
    "run_strategy",
    "Strategy",
    "AgentConfig",
    "StrategyResult",
    "RunResult",
    "DetailedRunResult",
    "TokenUsage",
    "StorageManager",
    "TaskPool",
    "DirectAskStrategy",
    "BasicAgenticSolve",
    "get_model",
    "supports_tools",
]
