"""Shared helper functions for puzzle strategies."""

from ppbench.puzzle import Puzzle, split_moves_required_and_hint
from ppbench.pzprjs import lookup_errorcode


def get_rules_for_puzzle(puzzle: Puzzle) -> str:
    """Get rules and failure examples for a puzzle type."""
    defined_rules = str(puzzle.puzzle_info.rules)
    failure_examples = "\nExamples of failures (board state -> test-case-failure)"
    for failcode, boardstate, *_ in puzzle.puzzle_info.debugData.failcheck:
        failstrings = lookup_errorcode(puzzle.jspuzzle.info.pid, failcode)
        failure_examples += str(boardstate) + " --> " + str(failstrings) + "\n\n"
    return defined_rules + failure_examples


def example_of_inputs(puzzle: Puzzle) -> str:
    """Get example inputs and solution moves for a puzzle type."""
    result = f"Example puzzle in inputs: {puzzle.puzzle_info.url}\n"
    if puzzle.debug_puzzle_solution_moves:
        result += "Here's a full set of moves that solve a debug puzzle of the same type\n"
        result += f"For puzzle: {puzzle.fully_qualified_debug_url()} \n\n (repr) \n"
        debug_puzzle = Puzzle.from_url(
            puzzle.fully_qualified_debug_url(), solve=False
        )
        result += debug_puzzle.get_string_repr()
        result += (
            "SOLUTION SET OF MOVES: "
            + str(puzzle.debug_puzzle_solution_moves)
            + "\n"
        )
        required, hint = split_moves_required_and_hint(
            puzzle.fully_qualified_debug_url(), puzzle.debug_puzzle_solution_moves
        )
        result += "REQUIERD MOVES (from above): " + str(required) + "\n"
        result += "HINT MOVES (from above): " + str(hint) + "\n"
        result += "... -- now for some other example inputs -- ..."
    if puzzle.puzzle_info.debugData.inputs is None:
        result += (
            "No input tests given -- infer actions by trying `mouse,` etc. moves"
        )
    else:
        for stage in puzzle.puzzle_info.debugData.inputs:
            result += f"Label/Action:{stage.label} \n [ \n"
            for input_string in stage.input:
                if input_string.startswith("mouse"):
                    result += f"  '{input_string}',\n"
                else:
                    result += "  [REDACTED],\n"
            result += "]\n"
            result += f"Result: {stage.result}\n\n"
    return result


def get_example_move_context(puzzle: Puzzle) -> str:
    """Get example of applying a move (before/after board state)."""
    try:
        pd = Puzzle.from_url(puzzle.fully_qualified_debug_url())
        if pd.debug_puzzle_solution_moves:
            pd_move = pd.debug_puzzle_solution_moves[
                len(pd.debug_puzzle_solution_moves) // 2
            ]
            result = f"Here is an example board:\n{pd.get_string_repr()}\n"
            result += f"Now, applying the move: {pd_move}\n"
            pd.send_move(pd_move)
            result += f"Here's the result after that move:\n{pd.get_string_repr()}\n"
            return result
    except Exception:
        pass
    return ""
