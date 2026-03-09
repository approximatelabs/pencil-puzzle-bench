"""
Pencil Puzzle Bench - A benchmark for LLM reasoning with verifiable logic puzzles.

Quick start:
    from ppbench import Puzzle

    puzzle = Puzzle.from_url("https://puzz.link/p?sudoku/9/9/...")
    puzzle.send_move("mouse,left,3,5")
    print(puzzle.check())      # [] if valid
    print(puzzle.is_complete())  # True when solved
"""

from .dataset import list_puzzles, load_dataset
from .puzzle import Puzzle

__version__ = "0.1.0"
__all__ = ["Puzzle", "load_dataset", "list_puzzles", "PuzzleEnv"]

from .gym_env import PuzzleEnv  # noqa: F401

# Optional: Verifiers environment (requires verifiers)
try:
    from .verifiers_env import load_environment  # noqa: F401
    __all__.append("load_environment")
except ImportError:
    pass
