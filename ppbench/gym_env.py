"""
Gymnasium environment for pencil puzzles.

Example:
    import gymnasium as gym
    from ppbench.gym_env import PuzzleEnv

    env = PuzzleEnv(puzzle_url="https://puzz.link/p?sudoku/9/9/...")
    obs, info = env.reset()
    obs, reward, terminated, truncated, info = env.step("mouse,left,3,5")
"""
from typing import Any, Dict, Optional, Tuple

try:
    import gymnasium as gym
    from gymnasium import spaces
except ImportError:
    raise ImportError(
        "gymnasium is required for the gym environment. "
        "Install with: pip install gymnasium"
    )

from .puzzle import Puzzle


class PuzzleEnv(gym.Env):
    """
    Gymnasium environment for a pencil puzzle.

    Observation: Text representation of the board state
    Action: Move string (e.g., "mouse,left,3,5")
    Reward: 1.0 on completion, 0.0 otherwise
    """

    metadata = {"render_modes": ["human", "ansi", "rgb_array"]}

    def __init__(
        self,
        puzzle_url: Optional[str] = None,
        puzzle: Optional[Puzzle] = None,
        render_mode: Optional[str] = None,
        max_steps: int = 1000,
    ):
        """
        Initialize the environment.

        Args:
            puzzle_url: URL to create puzzle from (mutually exclusive with puzzle)
            puzzle: Existing Puzzle object (mutually exclusive with puzzle_url)
            render_mode: How to render ("human", "ansi", "rgb_array")
            max_steps: Maximum steps before truncation
        """
        super().__init__()

        if puzzle_url and puzzle:
            raise ValueError("Provide either puzzle_url or puzzle, not both")
        if not puzzle_url and not puzzle:
            raise ValueError("Must provide either puzzle_url or puzzle")

        self._puzzle_url = puzzle_url
        self._initial_puzzle = puzzle
        self.puzzle: Optional[Puzzle] = None
        self.render_mode = render_mode
        self.max_steps = max_steps
        self._step_count = 0

        # Gymnasium spaces
        self.action_space = spaces.Text(max_length=100)
        self.observation_space = spaces.Text(max_length=50000)

    def reset(
        self,
        seed: Optional[int] = None,
        options: Optional[Dict] = None,
    ) -> Tuple[str, Dict[str, Any]]:
        """Reset the environment to initial state."""
        super().reset(seed=seed)

        if self._puzzle_url:
            self.puzzle = Puzzle.from_url(self._puzzle_url)
        else:
            # Re-create from URL to get fresh state
            self.puzzle = Puzzle.from_url(self._initial_puzzle.url)

        self._step_count = 0
        obs = self.puzzle.get_state()
        info = {
            "violations": [],
            "is_valid": True,
            "is_complete": False,
            "puzzle_type": self.puzzle.pid,
        }
        return obs, info

    def step(self, action: str) -> Tuple[str, float, bool, bool, Dict[str, Any]]:
        """
        Execute a move.

        Args:
            action: Move string (e.g., "mouse,left,3,5")

        Returns:
            observation: New board state
            reward: 1.0 if solved, 0.0 otherwise
            terminated: True if puzzle is complete
            truncated: True if max_steps exceeded
            info: Additional information including violations
        """
        self._step_count += 1

        # Apply the move
        self.puzzle.send_move(action)

        # Check state
        violations = self.puzzle.check()
        is_complete = self.puzzle.is_complete()

        obs = self.puzzle.get_state()
        reward = 1.0 if is_complete else 0.0
        terminated = is_complete
        truncated = self._step_count >= self.max_steps

        info = {
            "violations": violations,
            "is_valid": len(violations) == 0,
            "is_complete": is_complete,
            "step_count": self._step_count,
        }

        return obs, reward, terminated, truncated, info

    def render(self) -> Optional[str]:
        """Render the current state."""
        if self.puzzle is None:
            return None

        if self.render_mode == "ansi":
            return self.puzzle.get_state()
        elif self.render_mode == "human":
            print(self.puzzle.get_state())
            return None
        elif self.render_mode == "rgb_array":
            # Return SVG (could convert to image array)
            return self.puzzle.svg()
        return None

    def close(self):
        """Clean up."""
        self.puzzle = None
