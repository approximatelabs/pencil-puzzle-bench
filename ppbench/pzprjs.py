"""
pzprjs wrapper - Python bindings for the pzpr.js puzzle engine.
"""
import os

from javascript import eval_js, require

_VENDOR_PATH = os.path.join(os.path.dirname(__file__), 'vendor/pzprjs')

# Load pzpr.js
pzpr = require(f'{_VENDOR_PATH}/dist/js/pzpr.js')

# Load puzzle rules and test data from sample files
def _load_sample(sample_path):
    with open(sample_path) as f:
        code = f.read()
    js_code = """
var result = {};
var ui = {debug: {
    addRules: function(name, rules) { result['name'] = name; result['rules'] = rules; },
    addDebugData: function(name, debugData) { result['debugData'] = debugData; }
}};
""" + code + "\nreturn result;\n"
    return eval_js(js_code)

_samples_dir = f'{_VENDOR_PATH}/dist/js/pzpr-samples/'
all_rules_and_tests = {}
for fname in os.listdir(_samples_dir):
    if fname.endswith('.map'):
        continue
    sample = _load_sample(os.path.join(_samples_dir, fname))
    all_rules_and_tests[sample['name']] = sample

# Input execution - handles mouse, keyboard, and other commands
execinput = eval_js("""
function execmouse(puzzle, strs) {
    var buttons = strs[1].split("+");
    var button = buttons[buttons.length - 1];
    var btnmatch = button.match(/(left|right)(.*)/);
    if (!btnmatch) { return; }  // invalid mouse button, ignore
    var matches = (btnmatch[2] || "").match(/x([0-9]+)/);
    var repeat = matches ? +matches[1] : 1;
    var args = [];

    if (button.substr(0, 4) === "left") { args.push("left"); }
    else if (button.substr(0, 5) === "right") { args.push("right"); }

    for (var i = 2; i < strs.length; i++) {
        if (strs[i] === "bank") {
            var idx = +strs[++i];
            var piece = puzzle.board.bank.pieces[idx];
            var r = puzzle.painter.bankratio;
            var off = puzzle.painter.bankVerticalOffset;
            args.push((piece.x + piece.w / 2) * r * 2);
            args.push((piece.y + piece.h / 2) * r * 2 + puzzle.board.maxby + off);
        } else {
            args.push(+strs[i]);
        }
    }

    if (buttons.indexOf("alt") >= 0) { puzzle.key.isALT = true; }
    for (var t = 0; t < repeat; t++) {
        puzzle.mouse.inputPath.apply(puzzle.mouse, args);
    }
    if (buttons.indexOf("alt") >= 0) { puzzle.key.isALT = false; }
}

function execinput(puzzle, str) {
    var strs = str.split(/,/);
    switch (strs[0]) {
        case "newboard":
            var urls = [puzzle.pid, strs[1], strs[2]];
            if (puzzle.pid === "tawa") { urls.push(strs[3]); }
            else if (strs[3]) { urls.push("//" + strs[3]); }
            puzzle.open(urls.join("/"));
            break;
        case "clear": puzzle.clear(); break;
        case "ansclear": puzzle.ansclear(); break;
        case "subclear": puzzle.subclear(); break;
        case "playmode":
        case "editmode":
            puzzle.setMode(strs[0]);
            if (strs.length > 1) { puzzle.mouse.setInputMode(strs[1]); }
            break;
        case "setconfig":
            if (strs[2] === "true") { puzzle.setConfig(strs[1], true); }
            else if (strs[2] === "false") { puzzle.setConfig(strs[1], false); }
            else { puzzle.setConfig(strs[1], strs[2]); }
            break;
        case "key":
            strs.shift();
            puzzle.key.inputKeys.apply(puzzle.key, strs);
            break;
        case "cursor":
            if (strs[1] === "bank") {
                puzzle.cursor.bankpiece = strs[2] === "null" ? null : +strs[2];
            } else {
                puzzle.cursor.init(+strs[1], +strs[2]);
            }
            break;
        case "mouse": execmouse(puzzle, strs); break;
        case "flushexcell": puzzle.board.flushexcell(); break;
    }
}
return execinput;
""")


def get_js_puzzle(url: str):
    """Create a new puzzle instance from a puzz.link URL."""
    # Re-require to make pzpr available in eval_js global scope
    pzpr = require(f'{_VENDOR_PATH}/dist/js/pzpr.js')  # noqa: F841  — side effect: loads pzpr into JS scope
    return eval_js(f"""
var puzzle = new pzpr.Puzzle().open('{url}');
puzzle.setMode("play");
return puzzle;
""")


def lookup_errorcode(pid: str, failcode):
    """Convert a failure code to human-readable error messages."""
    if failcode is None:
        return "Complete!", "正解です！"

    en = pzpr.failcodes.en[f"{failcode}.{pid}"] or pzpr.failcodes.en[failcode]
    ja = pzpr.failcodes.ja[f"{failcode}.{pid}"] or pzpr.failcodes.ja[failcode]
    return en, ja
