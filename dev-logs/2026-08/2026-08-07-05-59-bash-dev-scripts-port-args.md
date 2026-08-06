Date: 2026-08-07 05:59
Summary: Added --port / -p / bare-port args to bash start/stop/status-dev scripts.

[question]
在 bash增加端口参数

[try to solve]
已为 macOS/Linux bash 启停脚本增加端口参数解析，并同步文档。

**用法**
```bash
./ops/dev/start-dev.sh --port 8788
./ops/dev/start-dev.sh -p 8788
./ops/dev/start-dev.sh 8788
./ops/dev/start-dev.sh --no-build -p 8788
./ops/dev/status-dev.sh -p 8788
./ops/dev/stop-dev.sh --port 8788
```

新增 `ops/dev/status-dev.sh`；`ops/README.md` 已补充示例。

[actions]
- Updated `ops/dev/start-dev.sh`, `ops/dev/stop-dev.sh`
- Added `ops/dev/status-dev.sh`
- Updated `ops/README.md`
