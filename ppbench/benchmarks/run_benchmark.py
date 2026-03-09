"""
Example: run the benchmark on a model.

Usage:
    uv run python -m ppbench.benchmarks.run_benchmark
"""

import asyncio

from ppbench.benchmarks import BasicAgenticSolve, DirectAskStrategy, run

results = asyncio.run(run(
    models=["anthropic/claude-sonnet-4-6"],
    strategies=[DirectAskStrategy, BasicAgenticSolve],
    dataset="golden_30",
    n_puzzles=3,
))
