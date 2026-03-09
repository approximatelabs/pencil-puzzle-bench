"""
Quick sanity check: 1 easy puzzle, 1 cheap model, both strategies.

Usage:
    uv run python -u examples/quick_test.py
"""

import asyncio

from ppbench.benchmarks import BasicAgenticSolve, DirectAskStrategy, run

asyncio.run(run(
    models=["openai/gpt-4.1"],
    strategies=[DirectAskStrategy, BasicAgenticSolve],
    puzzles=["tapa_p0n0zzzx"],  # 1-move tapa, easiest in golden_300
))
