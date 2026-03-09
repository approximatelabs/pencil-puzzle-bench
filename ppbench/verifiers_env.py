"""
Prime Intellect Verifiers environment for pencil-puzzle-bench.

This provides a MultiTurnEnv compatible with the verifiers library for GRPO training.
See: https://github.com/PrimeIntellect-ai/verifiers
"""
from typing import Any

from .dataset import load_dataset
from .puzzle import Puzzle


def make_puzzle_tools(puzzle: Puzzle):
    """Create tool functions for a puzzle instance."""

    def make_move(move: str) -> str:
        """Execute a move on the puzzle. Format: 'mouse,left,x,y' or 'key,value'."""
        puzzle.send_move(move)
        violations = puzzle.check()
        if puzzle.is_complete():
            return "Move executed. Puzzle is COMPLETE!"
        elif violations:
            return f"Move executed. Violations: {violations}"
        else:
            return "Move executed. No violations."

    def check_board() -> str:
        """Check the current board state for rule violations."""
        violations = puzzle.check()
        if puzzle.is_complete():
            return "Puzzle is COMPLETE!"
        elif violations:
            return f"Violations found: {violations}"
        else:
            return "No violations currently, but puzzle is not complete."

    def get_state() -> str:
        """Get the current board state as a string."""
        return puzzle.get_state()

    def reset() -> str:
        """Reset the puzzle to initial state."""
        puzzle.reset()
        return "Puzzle reset to initial state."

    def get_rules() -> str:
        """Get the rules for this puzzle type."""
        return puzzle.get_rules()

    return {
        "make_move": make_move,
        "check_board": check_board,
        "get_state": get_state,
        "reset": reset,
        "get_rules": get_rules,
    }


def load_environment(dataset_name: str = "golden"):
    """
    Load a verifiers-compatible environment for puzzle solving.

    Usage:
        import verifiers as vf
        from ppbench.verifiers_env import load_environment

        env = load_environment("golden")
        # Use with GRPO training

    Args:
        dataset_name: Which dataset to use ("golden" for 300 puzzles)

    Returns:
        A verifiers MultiTurnEnv configured for puzzle solving
    """
    try:
        import verifiers as vf
    except ImportError:
        raise ImportError(
            "verifiers package required. Install with: pip install verifiers"
        )

    # Load puzzle dataset
    records = load_dataset(dataset_name)

    # Format as verifiers dataset
    dataset = []
    for record in records:
        puzzle = Puzzle.from_url(record["puzzlink_url"])
        dataset.append({
            "prompt": f"Solve this {record['pid']} puzzle:\n\n{puzzle.get_state()}\n\nRules:\n{puzzle.get_rules()}",
            "answer": record.get("solution", {}).get("moves_full", []),
            "info": {
                "pid": record["pid"],
                "puzzle_id": puzzle.id,
                "puzzle_url": record["puzzlink_url"],
                "required_moves": record["number_required_moves"],
            },
        })

    # Scoring function
    async def score(completion: list[dict], answer: Any, info: dict) -> float:
        """Score based on puzzle completion."""
        # Reconstruct puzzle from info
        puzzle = Puzzle.from_url(info["puzzle_url"])

        # Apply all moves from completion
        for msg in completion:
            if msg.get("role") == "assistant" and msg.get("tool_calls"):
                for tc in msg["tool_calls"]:
                    if tc["function"]["name"] == "make_move":
                        move = tc["function"]["arguments"].get("move", "")
                        puzzle.send_move(move)

        # Score 1.0 if complete, 0.0 otherwise
        return 1.0 if puzzle.is_complete() else 0.0

    rubric = vf.Rubric(funcs=[score])

    # Define tools for the environment
    tools = [
        vf.Tool(
            name="make_move",
            description="Execute a move on the puzzle",
            parameters={
                "type": "object",
                "properties": {
                    "move": {
                        "type": "string",
                        "description": "Move in format 'mouse,left,x,y' or 'key,value'",
                    }
                },
                "required": ["move"],
            },
        ),
        vf.Tool(
            name="check_board",
            description="Check current board for rule violations",
            parameters={"type": "object", "properties": {}},
        ),
        vf.Tool(
            name="get_state",
            description="Get the current board state as text",
            parameters={"type": "object", "properties": {}},
        ),
        vf.Tool(
            name="reset",
            description="Reset puzzle to initial state",
            parameters={"type": "object", "properties": {}},
        ),
        vf.Tool(
            name="get_rules",
            description="Get the rules for this puzzle type",
            parameters={"type": "object", "properties": {}},
        ),
    ]

    env = vf.MultiTurnEnv(
        dataset=dataset,
        rubric=rubric,
        tools=tools,
        max_turns=100,
    )

    return env
