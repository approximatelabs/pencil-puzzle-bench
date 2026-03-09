"""
Test a local model (LM Studio, ollama, vLLM, etc.) on a single puzzle.

Usage:
    # Default: http://127.0.0.1:1234/v1
    uv run python -u examples/local_model_test.py

    # Custom endpoint:
    LOCAL_API_BASE=http://127.0.0.1:11434/v1 uv run python -u examples/local_model_test.py
"""

import asyncio

from ppbench.benchmarks import DirectAskStrategy, run

asyncio.run(run(
    models=["local/qwen/qwen3.5-35b-a3b"],
    strategies=[DirectAskStrategy],
    puzzles=["tapa_p0n0zzzx"],
))
