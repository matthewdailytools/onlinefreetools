Date: 2026-08-07 05:48
Summary: Fixed start-dev ENOENT when .run/wrangler-dev.log did not exist yet.

[question]
bash ./ops/dev/start-dev.sh failed with ENOENT on .run/wrangler-dev.log (truncateSync before file exists).

[try to solve]
根因：`spawnWrangler` 在日志文件尚未创建时对路径调用 `truncateSync(logFilePath, 0)`，Node 会抛 ENOENT。

修复：先 `openSync(logFilePath, 'a')` 创建/打开文件，再 `ftruncateSync(logFd, 0)` 清空。请重新运行：

```bash
bash ./ops/dev/start-dev.sh
```

或 `npm run start:dev`。

[actions]
- Updated `ops/dev/start-dev.mjs` spawnWrangler log initialization.
