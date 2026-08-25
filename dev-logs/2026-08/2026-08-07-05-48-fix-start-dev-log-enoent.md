Date: 2026-08-07 05:48
Summary: Fixed start-dev ENOENT when .run/wrangler-dev.log did not exist yet.

[question]
bash ./ops/dev/start-dev.sh failed with ENOENT on .run/wrangler-dev.log (truncateSync before file exists).

[try to solve]
Root cause: `spawnWrangler` called `truncateSync(logFilePath, 0)` before the log file existed, and Node threw ENOENT.

Fix: `openSync(logFilePath, 'a')` first to create/open the file, then `ftruncateSync(logFd, 0)` to clear it. Re-run:

```bash
bash ./ops/dev/start-dev.sh
```

or `npm run start:dev`.

[actions]
- Updated `ops/dev/start-dev.mjs` spawnWrangler log initialization.
