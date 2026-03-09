"""
Run multiple models on a puzzle, comparing direct-ask vs agentic strategies.

Usage:
    uv run python -u examples/multi_model.py
"""

import asyncio

from ppbench.benchmarks import BasicAgenticSolve, DirectAskStrategy, run

asyncio.run(run(
    models=[
        "google/gemini-3-flash@minimal",
        "openai/gpt-5.2@medium",
        "anthropic/claude-sonnet-4-6",
    ],
    strategies=[DirectAskStrategy, BasicAgenticSolve],
    puzzles=["lits_00004030"],  # 16-move lits
    concurrency=10,
))
