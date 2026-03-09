"""
Tests for the Gymnasium environment.
"""
import pytest

gymnasium = pytest.importorskip("gymnasium")

from ppbench import load_dataset  # noqa: E402
from ppbench.gym_env import PuzzleEnv  # noqa: E402


class TestGymEnv:
    """Test that the gym env works end-to-end."""

    def test_step_solves_puzzle(self):
        """Reset env, apply solution moves via step, get terminated=True."""
        records = load_dataset("golden")
        record = records[0]

        env = PuzzleEnv(puzzle_url=record["puzzlink_url"])
        obs, info = env.reset()

        assert not info["is_complete"]

        for move in record["solution"]["moves_full"]:
            obs, reward, terminated, truncated, info = env.step(move)
            if terminated:
                break

        assert terminated
        assert info["is_complete"]
        assert reward == 1.0
