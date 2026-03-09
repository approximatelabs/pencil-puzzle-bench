"""
Tests for puzzle move handling.
"""
from ppbench.puzzle import Puzzle


class TestPuzzleMoves:
    """Test puzzle move handling."""

    def test_invalid_mouse_button_does_not_crash(self):
        """Invalid mouse buttons (up/down/bottom) should be ignored, not crash."""
        puzzle = Puzzle.from_url('https://puzz.link/p?dbchoco/10/10/0fam8nfj3ja1qlqhrno0q9zsbu3zx')

        # Valid mouse buttons should work
        puzzle.send_move('mouse,left,1,2')
        puzzle.send_move('mouse,right,2,2')

        # Invalid mouse buttons should NOT crash (just be ignored)
        puzzle.send_move('mouse,up,1,2')
        puzzle.send_move('mouse,down,1,2')
        puzzle.send_move('mouse,bottom,1,2')
