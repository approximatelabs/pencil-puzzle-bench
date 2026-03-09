import asyncio
import json
import os
import time
from collections import defaultdict
from dataclasses import asdict, dataclass, field
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Callable, Dict, Hashable, List, Literal, Optional


@dataclass
class LogEntry:
    """A single log message with timestamp."""

    timestamp: float
    message: str
    level: str = "info"


class StrategyLogger:
    """
    Thin logging wrapper that collects messages for storage in detail_data.
    """

    def __init__(self):
        self.entries: List[LogEntry] = []
        self._start_time = time.time()

    def _log(self, message: str, level: str = "info"):
        elapsed = time.time() - self._start_time
        entry = LogEntry(timestamp=elapsed, message=message, level=level)
        self.entries.append(entry)

    def info(self, message: str):
        self._log(message, "info")

    def debug(self, message: str):
        self._log(message, "debug")

    def warn(self, message: str):
        self._log(message, "warn")

    def error(self, message: str):
        self._log(message, "error")

    def to_list(self) -> List[Dict[str, Any]]:
        """Export logs as list of dicts for storage."""
        return [asdict(e) for e in self.entries]


@dataclass
class TokenUsage:
    """Standardized usage container."""

    input_tokens: int = 0
    output_tokens: int = 0
    details: Dict[str, int] = field(default_factory=dict)


@dataclass
class RunResult:
    """Lightweight Index Entry"""

    strategy_id: str
    model_name: str
    puzzle_id: str
    puzzle_url: str

    is_success: bool
    duration_seconds: float
    total_requests: int

    parsed_moves: List[str] = field(default_factory=list)

    timestamp: str = field(
        default_factory=lambda: datetime.now(timezone.utc).isoformat()
    )
    error_type: Optional[str] = None
    exception_traceback: Optional[str] = None


@dataclass
class DetailedRunResult:
    """Heavy Artifact"""

    summary: RunResult

    request_usages: List[TokenUsage] = field(default_factory=list)
    full_history: List[Dict[str, Any]] = field(default_factory=list)
    logs: List[Dict[str, Any]] = field(default_factory=list)

    detail_data: Dict[str, Any] = field(default_factory=dict)

    def to_json(self) -> str:
        return json.dumps(asdict(self), default=str)


class TaskPool:
    """
    Simple async task pool with per-group stats tracking.
    Handles semaphore, flight/pass/fail/done counts, and completion callbacks.
    """

    def __init__(self, concurrency: int = 50, on_complete: Optional[Callable] = None):
        self.sem = asyncio.Semaphore(concurrency)
        self.on_complete = on_complete
        self.stats: Dict[Hashable, Dict[str, int]] = defaultdict(
            lambda: {"pass": 0, "fail": 0, "flight": 0, "done": 0}
        )
        self._tasks: List[tuple] = []  # (group, coro_fn, args)

    def submit(self, group: Hashable, coro_fn: Callable, *args):
        """Queue a task. coro_fn(*args) should return bool (success) or raise."""
        self._tasks.append((group, coro_fn, args))

    async def run(self):
        """Run all submitted tasks concurrently."""

        async def wrapped(group, coro_fn, args):
            s = self.stats[group]
            async with self.sem:
                s["flight"] += 1
                try:
                    success = await coro_fn(*args)
                    s["pass" if success else "fail"] += 1
                except Exception:
                    s["fail"] += 1
                    raise
                finally:
                    s["flight"] -= 1
                    s["done"] += 1
                    if self.on_complete:
                        self.on_complete()

        await asyncio.gather(
            *(wrapped(g, fn, a) for g, fn, a in self._tasks),
            return_exceptions=True,
        )


class StorageManager:
    def __init__(self, base_dir: str = "run_output"):
        self.base_dir = Path(base_dir)
        self.index_path = self.base_dir / "runs.jsonl"
        self.artifacts_dir = self.base_dir / "artifacts"

        self._lock = asyncio.Lock()

        self._cache: Dict[tuple, str] = {}
        self._error_types: Dict[tuple, str] = {}
        self._tracebacks: Dict[tuple, str] = {}

        self._initialize_storage()

    def _initialize_storage(self):
        """Creates dirs and hydrates memory cache from existing jsonl."""
        self.base_dir.mkdir(parents=True, exist_ok=True)
        self.artifacts_dir.mkdir(parents=True, exist_ok=True)

        if self.index_path.exists():
            print(f"Hydrating cache from {self.index_path}...")
            with open(self.index_path, "r") as f:
                for line in f:
                    try:
                        data = json.loads(line)
                        key = (
                            data["strategy_id"],
                            data["model_name"],
                            data["puzzle_id"],
                        )

                        if data.get("is_success"):
                            status = "completed"
                        elif data.get("error_type"):
                            status = "error"
                            self._error_types[key] = data.get("error_type", "")
                            self._tracebacks[key] = data.get("exception_traceback", "")
                        else:
                            status = "failed"

                        self._cache[key] = status
                    except (json.JSONDecodeError, KeyError):
                        continue
            print(f"Cache hydrated with {len(self._cache)} runs.")

    def lookup(
        self, strategy_id: str, model_name: str, puzzle_id: str
    ) -> Literal["completed", "failed", "error", "missing"]:
        key = (strategy_id, model_name, puzzle_id)
        return self._cache.get(key, "missing")

    def get_error_type(
        self, strategy_id: str, model_name: str, puzzle_id: str
    ) -> str | None:
        """Get the error type for a run, if it was an error."""
        key = (strategy_id, model_name, puzzle_id)
        return self._error_types.get(key)

    def is_retriable_error(
        self, strategy_id: str, model_name: str, puzzle_id: str
    ) -> bool:
        """Check if a run's error is retriable (network-level failure)."""
        key = (strategy_id, model_name, puzzle_id)
        tb = self._tracebacks.get(key, "")
        return "httpcore.ConnectError" in tb

    async def save(self, result: DetailedRunResult):
        """
        Writes the heavy artifact to disk and appends the summary to the index.
        Thread-safe execution using asyncio.Lock.
        """
        summary = result.summary

        safe_model = summary.model_name.replace("/", "_").replace("@", "_")
        target_dir = self.artifacts_dir / summary.strategy_id / safe_model

        key = (summary.strategy_id, summary.model_name, summary.puzzle_id)

        if summary.is_success:
            self._cache[key] = "completed"
        elif summary.error_type:
            self._cache[key] = "error"
        else:
            self._cache[key] = "failed"

        async with self._lock:
            target_dir.mkdir(parents=True, exist_ok=True)

            filename = f"{summary.puzzle_id}.json"
            file_path = target_dir / filename
            temp_path = file_path.with_suffix(".tmp")

            with open(temp_path, "w") as f:
                f.write(result.to_json())
            os.replace(temp_path, file_path)

            with open(self.index_path, "a") as f:
                f.write(json.dumps(asdict(summary), default=str) + "\n")

            # Clean up any partial file for this run
            self._cleanup_partial(summary.strategy_id, summary.model_name, summary.puzzle_id)

    def save_partial(
        self,
        strategy_id: str,
        model_name: str,
        puzzle_id: str,
        input_tokens: int = 0,
        output_tokens: int = 0,
        requests: int = 0,
        moves: List[str] = None,
        elapsed_seconds: float = 0,
        status: str = "running",
    ):
        """
        Write live progress to a separate .live directory.
        Called during runs to show tokens used, moves made, etc.
        Non-async for simplicity (small writes).
        """
        live_dir = self.base_dir / ".live"
        live_dir.mkdir(parents=True, exist_ok=True)

        safe_model = model_name.replace("/", "_").replace("@", "_")
        filename = f"{strategy_id}_{safe_model}_{puzzle_id}.json"
        file_path = live_dir / filename

        data = {
            "strategy_id": strategy_id,
            "model_name": model_name,
            "puzzle_id": puzzle_id,
            "input_tokens": input_tokens,
            "output_tokens": output_tokens,
            "requests": requests,
            "moves": moves or [],
            "elapsed_seconds": round(elapsed_seconds, 1),
            "status": status,
            "updated_at": datetime.now(timezone.utc).isoformat(),
        }

        # Atomic write
        temp_path = file_path.with_suffix(".tmp")
        with open(temp_path, "w") as f:
            json.dump(data, f)
        os.replace(temp_path, file_path)

    def _cleanup_partial(self, strategy_id: str, model_name: str, puzzle_id: str):
        """Remove partial file after run completes."""
        live_dir = self.base_dir / ".live"
        safe_model = model_name.replace("/", "_").replace("@", "_")
        filename = f"{strategy_id}_{safe_model}_{puzzle_id}.json"
        file_path = live_dir / filename
        try:
            file_path.unlink(missing_ok=True)
        except Exception:
            pass
