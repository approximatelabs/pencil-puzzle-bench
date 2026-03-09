# Project Instructions

- **NEVER use `python3` directly** - always use `uv run` instead
- Example: `uv run python -c "..."` or `uv run pytest`

## Running Benchmarks

1. Set API keys as environment variables (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, etc.)
2. Run: `uv run python -u -m benchmarks.run_benchmark`
3. Results saved to `output/runs/`

## Adding a New Model

1. Add pricing to `MODEL_PRICING` in `benchmarks/model_list.py`
2. Add model entry to the `models` dict (follow existing patterns)
3. Run the benchmark — cache automatically skips already-run combos
