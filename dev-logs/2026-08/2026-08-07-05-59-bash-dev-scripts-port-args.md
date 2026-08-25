Date: 2026-08-07 05:59
Summary: Added --port / -p / bare-port args to the bash start/stop/status-dev scripts.

[question]
在 bash增加端口参数

[try to solve]
Port parsing was added to the macOS/Linux bash start/stop scripts, and docs were updated.

**Usage**
```bash
./ops/dev/start-dev.sh --port 8788
./ops/dev/start-dev.sh -p 8788
./ops/dev/start-dev.sh 8788
./ops/dev/start-dev.sh --no-build -p 8788
./ops/dev/status-dev.sh -p 8788
./ops/dev/stop-dev.sh --port 8788
```

Also added `ops/dev/status-dev.sh`; `ops/README.md` now includes examples.

[actions]
- Updated `ops/dev/start-dev.sh`, `ops/dev/stop-dev.sh`
- Added `ops/dev/status-dev.sh`
- Updated `ops/README.md`
