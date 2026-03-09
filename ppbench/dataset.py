"""
Dataset loading utilities.
"""
import base64
import json
from pathlib import Path
from typing import Dict, Iterator, List, Optional

from .puzzle import Puzzle

_XOR_KEY = b"ppbench"


def _decrypt_solution(enc: str) -> dict:
    """Decode XOR+base64 encoded solution field."""
    raw = base64.b64decode(enc)
    decrypted = bytes(b ^ _XOR_KEY[i % len(_XOR_KEY)] for i, b in enumerate(raw))
    return json.loads(decrypted)

# Bundled data (ships with pip install)
_BUNDLED_DIR = Path(__file__).parent / "bundled"
# External data directory (for HuggingFace dataset clone)
_DATA_DIR = Path(__file__).parent / "data"


def _load_jsonl(path: Path) -> List[Dict]:
    """Load a JSONL file, transparently decrypting solution fields."""
    records = []
    with open(path) as f:
        for line in f:
            if line.strip():
                record = json.loads(line)
                if "solution_enc" in record:
                    record["solution"] = _decrypt_solution(record.pop("solution_enc"))
                records.append(record)
    return records


def load_dataset(name: str = "golden") -> List[Dict]:
    """
    Load a puzzle dataset.

    Args:
        name: Dataset name. Options:
            - "golden": 300 curated puzzles (alias for golden_300)
            - "golden_300": 300 puzzles for cheap strategies
            - "golden_30": 30 puzzles for expensive/agentic strategies
            - "full": 62k puzzles (downloads from HuggingFace)

    Returns:
        List of puzzle records with keys:
            - puzzlink_url: URL for the puzzle
            - pid: Puzzle type (e.g., "sudoku", "slither")
            - number_required_moves: Minimum moves to solve
            - solution_moves: List of moves that solve the puzzle
    """
    # Map dataset names to files
    dataset_files = {
        "golden": "golden_300.jsonl",
        "golden_300": "golden_300.jsonl",
        "golden_30": "golden_30.jsonl",
    }

    if name in dataset_files:
        # Bundled datasets ship with the package
        path = _BUNDLED_DIR / dataset_files[name]
        if not path.exists():
            raise FileNotFoundError(
                f"Dataset not found at {path}. "
                "Reinstall the package or check your installation."
            )
        return _load_jsonl(path)

    elif name == "full":
        # Full dataset loaded from external data directory (HuggingFace clone)
        path = _DATA_DIR / "full_dataset.jsonl"
        if not path.exists():
            raise FileNotFoundError(
                f"Full dataset not found at {path}.\n\n"
                "To use the full dataset, download it from HuggingFace:\n"
                "  huggingface-cli download bluecoconut/pencil-puzzle-bench "
                "full_dataset.jsonl --repo-type dataset --local-dir ppbench/data\n\n"
                "Or use load_dataset('golden') for the bundled 300-puzzle benchmark set."
            )
        return _load_jsonl(path)

    else:
        raise ValueError(f"Unknown dataset: {name}. Use 'golden', 'golden_300', 'golden_30', or 'full'.")


def list_puzzles(dataset: str = "golden") -> List[str]:
    """List puzzle IDs in a dataset."""
    records = load_dataset(dataset)
    return [f"{r['pid']}_{r['puzzlink_url'][-8:]}" for r in records]


def iter_puzzles(dataset: str = "golden") -> Iterator[Puzzle]:
    """Iterate over puzzles in a dataset, yielding Puzzle objects."""
    for record in load_dataset(dataset):
        yield Puzzle.from_url(record["puzzlink_url"])


def get_puzzle(puzzle_id: str, dataset: str = "golden") -> Optional[Puzzle]:
    """Get a specific puzzle by ID."""
    for record in load_dataset(dataset):
        pid = f"{record['pid']}_{record['puzzlink_url'][-8:]}"
        if pid == puzzle_id or record["puzzlink_url"].endswith(puzzle_id):
            return Puzzle.from_url(record["puzzlink_url"])
    return None
