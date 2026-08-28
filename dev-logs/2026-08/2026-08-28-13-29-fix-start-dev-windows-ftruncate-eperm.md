Date: 2026-08-28 13:29
Summary: Fixed Windows start-dev EPERM by opening wrangler/ops-ui logs with write mode instead of append-plus-ftruncate.

[question]
@c:\Users\matth\.cursor\projects\c-Users-matth-onlinefreetools\terminals\1.txt:580-593
(npm run start:dev failed after upload:r2 with EPERM ftruncate in spawnWrangler)

[try to solve]
`build:site` and local R2 seed succeeded. Failure was in `spawnWrangler` when clearing `.run/wrangler-dev.log`.

Root cause: the 2026-08-07 ENOENT fix opened the log with `'a'` then called `ftruncateSync(fd, 0)`. On Windows, an append handle does not have truncate rights, so Node throws `EPERM: operation not permitted, ftruncate`. Reproduced independently: append+ftruncate → EPERM; `openSync(path, 'w')` → OK.

Fix: `openTruncatedLogFd()` uses `'w'` (create + truncate in one open). If the old process still locks the file (`EPERM`/`EACCES`/`EBUSY`), unlink then reopen `'w'`. Same helper is used for Ops UI logs.

Verified: `npm run start:dev -- --no-build --no-seed-r2` reached ready at `http://127.0.0.1:8787/` and Ops UI at `http://127.0.0.1:8791/`.

[actions]
- Updated `ops/dev/start-dev.mjs` (`openTruncatedLogFd` for wrangler and Ops UI logs)
