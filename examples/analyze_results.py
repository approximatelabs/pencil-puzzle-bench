"""
Analyze benchmark results from a completed run.

Shows how to load results from the index and artifact files,
and extract useful information like token usage, move traces, etc.

Usage:
    uv run python examples/analyze_results.py
"""

import json
from pathlib import Path

RUNS_DIR = Path("output/runs")


def load_index():
    """Load all run summaries from the JSONL index."""
    index_path = RUNS_DIR / "runs.jsonl"
    if not index_path.exists():
        print(f"No results found at {index_path}")
        print("Run an example first: uv run python -u examples/quick_test.py")
        return []
    with open(index_path) as f:
        return [json.loads(line) for line in f]


def load_artifact(strategy_id, model_name, puzzle_id):
    """Load the detailed artifact for a specific run."""
    safe_model = model_name.replace("/", "_").replace("@", "_")
    path = RUNS_DIR / "artifacts" / strategy_id / safe_model / f"{puzzle_id}.json"
    if not path.exists():
        return None
    with open(path) as f:
        return json.load(f)


def main():
    runs = load_index()
    if not runs:
        return

    # --- Summary table ---
    print(f"{'Strategy':<35} {'Model':<20} {'Result':<6} {'Time':>6} {'Reqs':>5} {'Moves':>6}")
    print("-" * 85)
    for r in runs:
        status = "PASS" if r["is_success"] else ("ERR" if r.get("error_type") else "FAIL")
        print(
            f"{r['strategy_id']:<35} {r['model_name']:<20} {status:<6} "
            f"{r['duration_seconds']:>5.1f}s {r['total_requests']:>5} {len(r['parsed_moves']):>6}"
        )

    # --- Detailed analysis of a passing run ---
    passing = [r for r in runs if r["is_success"]]
    if not passing:
        print("\nNo passing runs to analyze.")
        return

    run = passing[-1]  # most recent pass
    artifact = load_artifact(run["strategy_id"], run["model_name"], run["puzzle_id"])
    if not artifact:
        print(f"\nArtifact not found for {run['strategy_id']}")
        return

    print(f"\n{'=' * 85}")
    print(f"Detailed analysis: {run['strategy_id']} | {run['model_name']} | {run['puzzle_id']}")
    print(f"{'=' * 85}")

    # Token usage
    usages = artifact["request_usages"]
    total_input = sum(u["input_tokens"] for u in usages)
    total_output = sum(u["output_tokens"] for u in usages)
    print(f"\nToken usage: {total_input:,} input + {total_output:,} output = {total_input + total_output:,} total")
    print(f"Requests: {len(usages)}")
    print(f"Duration: {run['duration_seconds']:.1f}s")

    # Move trace (from strategy logs)
    logs = artifact.get("logs", [])
    if logs:
        print(f"\nMove trace ({len(logs)} log entries):")
        for entry in logs:
            t = entry["timestamp"]
            print(f"  [{t:6.1f}s] {entry['message']}")

    # Parsed moves
    moves = run["parsed_moves"]
    if moves:
        print(f"\nFinal moves ({len(moves)}):")
        for i, move in enumerate(moves, 1):
            print(f"  {i:3d}. {move}")


if __name__ == "__main__":
    main()
