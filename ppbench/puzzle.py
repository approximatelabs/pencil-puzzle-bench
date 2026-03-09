"""
Core Puzzle class - Python wrapper for pzpr.js puzzles.
"""
from hashlib import md5
from typing import List

from .pzprjs import all_rules_and_tests, execinput, get_js_puzzle, lookup_errorcode


class Puzzle:
    """
    A pencil puzzle instance with move execution and verification.

    Example:
        puzzle = Puzzle.from_url("https://puzz.link/p?sudoku/9/9/...")
        puzzle.send_move("mouse,left,3,5")
        violations = puzzle.check()  # [] if valid
        if puzzle.is_complete():
            print("Solved!")
    """

    def __init__(self, url: str, solve: bool = False):
        self.url = url
        self._js = get_js_puzzle(url)
        self.jspuzzle = self._js  # Alias for compatibility
        self.pid = self._js.info.pid
        self.puzzle_info = all_rules_and_tests.get(self.pid, {})
        self.id = f"{self.pid}_{md5(url.encode()).hexdigest()[:8]}"

        # Load debug solution moves from puzzle_info if available
        self.debug_puzzle_solution_moves = None

        # Some puzzle types need an initial click to reset state
        if self.pid in ("tontonbeya",):
            self.send_move("mouse,left,0,0")

    @classmethod
    def from_url(cls, url: str, solve: bool = False) -> "Puzzle":
        """Create a puzzle from a puzz.link URL."""
        return cls(url, solve=solve)

    def get_state(self) -> str:
        """Get the current board state as a string."""
        return self._js.getFileData()

    def get_string_repr(self) -> str:
        """Get the current board state as a string (alias for get_state)."""
        return self._js.getFileData()

    def fully_qualified_debug_url(self) -> str:
        """Get the debug puzzle URL for this puzzle type."""
        if hasattr(self.puzzle_info, 'debugData') and self.puzzle_info.debugData:
            return f"https://puzz.link/p?{self.pid}/{self.puzzle_info.debugData.url}"
        return self.url

    def send_move(self, move: str) -> None:
        """
        Apply a move to the puzzle.

        Move format examples:
            "mouse,left,3,5"       - left click at (3,5)
            "mouse,right,2,4"      - right click at (2,4)
            "mouse,left,1,1,1,5"   - drag from (1,1) to (1,5)
            "mouse,leftx2,3,5"     - double click at (3,5)
            "key,1"                - press key '1'
        """
        for action in move.split(";"):
            execinput(self._js, action)

    def check(self) -> List[str]:
        """
        Check for rule violations.

        Returns:
            List of violation messages (empty if valid).
        """
        result = self._js.check(True)
        messages = lookup_errorcode(self.pid, result.lastcode)
        self._js.board.errclear()
        return list(messages) if result.lastcode else []

    def is_complete(self) -> bool:
        """Check if the puzzle is solved."""
        return self._js.check(False).complete

    def isComplete(self) -> bool:
        """Check if the puzzle is solved (alias for is_complete)."""
        return self._js.check(False).complete

    def svg(self, show_errors: bool = False) -> str:
        """Render the puzzle as SVG."""
        if show_errors:
            self._js.check(True)
        else:
            self._js.board.errclear()
        result = self._js.toBuffer("svg")
        self._js.board.errclear()
        return result

    def png(self, show_errors: bool = False, scale: float = 2.0) -> bytes:
        """Render the puzzle as a PNG image.

        Args:
            show_errors: If True, highlight constraint violations.
            scale: Scale factor for rasterization (default 2.0 for retina).

        Returns:
            PNG image as bytes.

        Raises:
            RuntimeError: If neither cairosvg nor rsvg-convert is available.
        """
        svg_data = self.svg(show_errors=show_errors)
        try:
            import cairosvg
            return cairosvg.svg2png(bytestring=svg_data.encode("utf-8"), scale=scale)
        except (ImportError, OSError):
            pass

        import shutil
        import subprocess
        if shutil.which("rsvg-convert"):
            result = subprocess.run(
                ["rsvg-convert", "--zoom", str(scale), "--format", "png"],
                input=svg_data.encode("utf-8"),
                capture_output=True,
            )
            if result.returncode == 0:
                return result.stdout

        raise RuntimeError(
            "PNG rendering requires either cairosvg (pip install cairosvg) "
            "or rsvg-convert (brew install librsvg / apt install librsvg2-bin)"
        )

    def reset(self) -> None:
        """Reset the puzzle to initial state."""
        self._js.ansclear()
        if self.pid in ("tontonbeya",):
            self.send_move("mouse,left,0,0")

    def enter_trial(self) -> None:
        """Enter trial mode (for speculative moves)."""
        self._js.enterTrial()

    def enterTrial(self) -> None:
        """Enter trial mode (alias for enter_trial)."""
        self._js.enterTrial()

    def reject_trial(self) -> None:
        """Reject current trial and revert."""
        self._js.rejectCurrentTrial()

    def rejectCurrentTrial(self) -> None:
        """Reject current trial (alias for reject_trial)."""
        self._js.rejectCurrentTrial()

    def get_rules_text(self) -> str:
        """Get human-readable rules for this puzzle type."""
        if hasattr(self.puzzle_info, 'rules'):
            return str(self.puzzle_info.rules)
        return ''

    def __repr__(self) -> str:
        return f"Puzzle({self.pid}, id={self.id})"


def split_moves_required_and_hint(puzzle_url: str, moves: List[str]) -> tuple:
    """
    Split moves into required (necessary for solution) and hint (redundant) moves.

    Returns:
        (required_moves, hint_moves)
    """
    import random

    pz = Puzzle.from_url(puzzle_url)
    pz.enter_trial()
    for move in moves:
        pz.send_move(move)
    assert pz.is_complete(), "Moves don't solve puzzle"
    pz.reject_trial()

    # Verify order doesn't matter
    pz.enter_trial()
    for move in random.sample(list(moves), len(moves)):
        pz.send_move(move)
    assert pz.is_complete(), "Shuffled moves don't solve puzzle"
    pz.reject_trial()

    required_moves = []
    hint_moves = []
    for i, candidate in enumerate(moves):
        subset = list(moves[:i]) + list(moves[i + 1:])
        pz.enter_trial()
        for move in subset:
            pz.send_move(move)
        if pz.is_complete():
            hint_moves.append(candidate)
        else:
            required_moves.append(candidate)
        pz.reject_trial()

    return required_moves, hint_moves
