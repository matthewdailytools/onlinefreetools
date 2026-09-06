Date: 2026-09-07 00:41
Summary: Explained why start:dev on 8799 timed out with an empty wrangler log, hardened spawn against fd exhaustion and inspector-port 9229 clashes, and brought the local server up on 8799.
Visibility: people

[question]
@terminals/1.txt — Dev server failed to become ready within timeout (wrangler-dev.log empty); npm run stop:dev then printed “No dev server or Ops UI process found.”

[try to solve]
## Context
`npm run start:dev -- --port 8799` finished `build:site` and local R2 seed, spawned wrangler (PID 52741), then exited after the Ready wait. `.run/wrangler-dev.log` was empty. `npm run stop:dev` (no `--port`) reported nothing to stop.

## Process
1. Confirmed default **8787** is still held by other repos (`seoontest/funnyT` and `ttuk/web` wrangler/workerd). **8799** itself was free — this was not a bind conflict on the port the user chose.
2. `stop:dev` without `--port` looked at **8787** only. The failed start had already called `cleanupDevServer(8799)`, so PID 52741 was gone. “No process found” was expected, not a second failure.
3. Default DevTools inspector port **9229** was LISTEN by another project’s workerd. Wrangler 4.58 can stall before printing Ready when that port is taken, and a detached non-TTY child often does not flush stdout — empty log plus 90s timeout.
4. macOS GUI/Cursor terminals commonly inherit `launchctl limit maxfiles` **soft 256**. Wrangler watches `public/`; `EMFILE` plus an interactive “report this error?” prompt (stdin is `ignore`) can hang with no bytes on the log fd.
5. Reproduced a clean detached spawn on a free port with a raised nofile limit: Ready in ~2s and HTTP `/` 200. Hardened `start:dev` then started successfully on 8799.

## Root cause / analysis
- **Empty log + timeout** means wrangler never became healthy on 8799 within 90s, not that the log path was wrong. `waitForDevReady` already treats consecutive HTTP 2xx/3xx as ready; so the child never bound the HTTP port.
- Typical local pile-up on this machine: foreign wrangler on 8787, workerd on **9229**, and a **256** fd soft limit. Any of those can stall wrangler before the first flushed line.
- **`stop:dev` looked at the wrong port** after a `--port 8799` start. There was no pid/port file left because the failed start cleaned up.

## Solution
- Unix spawn now runs `ulimit -n 65536` then `exec` wrangler so the child keeps the same PID.
- Always pass `--inspector-port 0` so DevTools does not fight over 9229.
- Set `CI=1` and `WRANGLER_SEND_METRICS=false` so wrangler does not wait on an error-report prompt with stdin ignored.
- Write `.run/wrangler-dev.port`; `stop:dev` / `status:dev` without `--port` reuse that port.
- Strip `observability` from the local no-AI config so `--local` does not open a Cloudflare session.
- `lsof` port lookup now uses `-i :PORT` so `localhost` / `::1` listeners are not missed.
- Verified: `http://127.0.0.1:8799/` 200; Chinese tool pages 200; Ops UI at `http://127.0.0.1:8791/`.

## Notes / boundaries
- Keep using `--port 8799` (or 8788) while 8787 belongs to another repo. Do not kill the foreign 8787 process from this repo’s `stop:dev`.
- After a **failed** start, the spawned wrangler is already stopped. After a **successful** start on a non-default port, `npm run stop:dev` now follows the saved port file.
- `--no-build` is enough to restart when `_pages` and the local R2 seed are already current.

[actions]
- Updated `ops/dev/start-dev.mjs`, `ops/dev/stop-dev.mjs`, `ops/dev/status-dev.mjs`, `ops/lib/dev-process.mjs`, `scripts/lib/local-r2-platform-proxy.mjs`
- Started local wrangler on port 8799 and Ops UI on 8791
