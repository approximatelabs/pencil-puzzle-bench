"""Basic Agentic strategy — tool-calling approach with retries.

This strategy builds an agent with move/reset/check tools and lets it
solve the puzzle through iterative tool calls. The strategy only defines
agent setup and result interpretation — the harness handles execution.
"""

from dataclasses import dataclass, field
from typing import Any, List

from pydantic_ai import Agent, RunContext, UsageLimits
from pydantic_ai.exceptions import ModelRetry

from ppbench.puzzle import Puzzle

from ..strategy import AgentConfig, Strategy, StrategyResult
from ..utils import StrategyLogger
from ._helpers import example_of_inputs, get_example_move_context, get_rules_for_puzzle


@dataclass
class AgenticContext:
    """Mutable state carried through the agent run."""
    puzzle: Puzzle
    log: StrategyLogger = field(default_factory=StrategyLogger)
    list_of_moves: list[str] = field(default_factory=list)
    gave_up: bool = False


class BasicAgenticSolve(Strategy):
    requires_tools = True
    MAX_MOVES = 5000

    def build_agent(self, puzzle: Any, model_obj: Any, model_name: str) -> AgentConfig:
        ticks = "```"
        pre_post = get_example_move_context(puzzle)

        system_prompt = "Solve the puzzle!!\nIt is known to be solvable, and you can figure it out. This is a logic deduction benchmark.\nYou are graded on both how many steps you take (number of tool calls), how many moves it takes (puzzle moves), and ultimately if you can solve the puzzle. This puzzle is solvable. If you need to, you may reset the puzzle and keep trying."

        prompt = f"""
Puzzle Type: {puzzle.pid}
Puzzle Rules:
{ticks}
{get_rules_for_puzzle(puzzle)}
{ticks}

Here is an example of inputs / a solved puzzle (lots of context for you)
{ticks}
{example_of_inputs(puzzle)}
{ticks}
Here's some more:
{pre_post}
Note specifically how the coordinate systems work (for the puzzle vs. the inputs).
For the puzzle you are working on, ensure you fully understand from the example of input above, that the move is exactly where you expect.
==== ==== ==== ==== ====
Here is the puzzle you are to solve:\n{puzzle.get_string_repr()}\n
==== ==== ==== ==== ====
Please now solve it.
"""

        deps = AgenticContext(puzzle=puzzle)

        agent = Agent(
            model_obj,
            deps_type=AgenticContext,
            output_retries=self.MAX_MOVES,
            system_prompt=system_prompt,
            retries=2,
        )

        @agent.output_validator
        async def keep_going_until_done(ctx: RunContext, out: str) -> str:
            ctx.deps.log.debug(
                f"Final message: {out[:50]} ...{out[-50:]} --> {len(ctx.deps.list_of_moves)} moves, complete={ctx.deps.puzzle.isComplete()}"
            )
            if ctx.deps.gave_up:
                return out
            if len(ctx.deps.list_of_moves) < self.MAX_MOVES and not ctx.deps.puzzle.isComplete():
                raise ModelRetry(
                    "Not done yet, keep going!! Puzzle isn't complete. (Note: this puzzle has been verified to be solvable, its up to you to solve.). If you think I'm saying this unfairly, then try something different (make a random move, etc.), it might be you need to explore more."
                )
            ctx.deps.log.info("done.")
            return out

        @agent.tool
        async def make_move(ctx: RunContext[AgenticContext], movestring: str) -> str:
            """make a move, shows the board after the move is applied"""
            ctx.deps.log.info(f"Move made: {movestring}")
            try:
                ctx.deps.puzzle.send_move(movestring)
                ctx.deps.list_of_moves.append(movestring)
            except Exception as e:
                raise ModelRetry(str(e))
            return f"Move submitted. new board state::{ctx.deps.puzzle.get_string_repr()}"

        @agent.tool
        async def make_multi_move(ctx: RunContext[AgenticContext], movelist: List[str]) -> str:
            """make a series of moves, shows the board after the move is applied"""
            ctx.deps.log.info(f"Moves made: {movelist}")
            try:
                for move in movelist:
                    ctx.deps.puzzle.send_move(move)
                    ctx.deps.list_of_moves.append(move)
            except Exception as e:
                raise ModelRetry(str(e))
            return f"Move submitted. new board state::{ctx.deps.puzzle.get_string_repr()}"

        @agent.tool
        async def check_board_for_completeness(ctx: RunContext[AgenticContext]) -> str:
            """Check the current state of the board against the rules of the puzzle, see if its complete or if errors exist"""
            return str(ctx.deps.puzzle.check())

        @agent.tool
        async def render_board_as_svg(ctx: RunContext[AgenticContext]) -> str:
            """Shows the full detail SVG of the board (useful if you want more information / are worried about your view into errors)"""
            return str(ctx.deps.puzzle.svg(True))

        @agent.tool
        async def get_rules(ctx: RunContext[AgenticContext]) -> str:
            """Gets all the rules for the puzzle"""
            return str(get_rules_for_puzzle(puzzle))

        @agent.tool
        async def reset_puzzle(ctx: RunContext[AgenticContext]) -> str:
            """Fully reset the puzzle (erase all moves, go back to a blank slate). Use this instead of giving up if you want another attempt."""
            ctx.deps.puzzle = Puzzle.from_url(ctx.deps.puzzle.url)
            ctx.deps.list_of_moves = []
            return f"Puzzle Reset! new board state::{ctx.deps.puzzle.get_string_repr()}"

        @agent.tool
        async def give_up(ctx: RunContext[AgenticContext]) -> str:
            """Even though this puzzle is fully solvable with the tools availble to you, you chose to give up. By calling give up, you forefeit your benchmark score / this counts as a failure. Note: dont give up if you can reset and try again. Your goal is to get the solution no matter how many retries it takes. Giving up is if you are emotionally defeated and just want out."""
            ctx.deps.gave_up = True
            return "Thats sad, but fine, i'll let you exit now. Now just tell me why you wanted to give up"

        return AgentConfig(
            agent=agent,
            prompt=prompt,
            deps=deps,
            usage_limits=UsageLimits(
                request_limit=1e9,
                tool_calls_limit=1e9,
                input_tokens_limit=1e9,
                output_tokens_limit=1e9,
                total_tokens_limit=1e9,
            ),
        )

    def extract_logs(self, deps: Any) -> list:
        """Return structured move-by-move logs for tracing/videos."""
        return deps.log.to_list()

    def extract_result(self, puzzle: Any, deps: Any, output: str) -> StrategyResult:
        """Replay moves on a fresh puzzle to verify success."""
        moves = deps.list_of_moves
        fresh = Puzzle.from_url(puzzle.url)
        for move in moves:
            fresh.send_move(move)

        return StrategyResult(
            is_success=fresh.isComplete(),
            parsed_moves=moves,
            raw_output=output,
        )
