"""
Run a model across the golden_30 dataset (30 puzzles, mixed types).

Usage:
    uv run python -u examples/dataset_sweep.py
"""

import asyncio

from ppbench.benchmarks import DirectAskStrategy, run

asyncio.run(run(
    models=["openai/gpt-4.1"],
    strategies=[DirectAskStrategy],
    dataset="golden_30",
    concurrency=10,
))
