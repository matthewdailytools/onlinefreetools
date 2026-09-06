Date: 2026-09-06 01:25
Summary: Diagnosed start:dev timeout when port 8787 is held by another project and hardened Ready detection for empty wrangler logs.
Visibility: people

[question]
@terminals/1.txt — Dev server failed to become ready within timeout (wrangler-dev.log empty); also tried --port 8788.

[try to solve]
## Context
`npm run start:dev` (and a retry with `--port 8788`) exited after waiting for Ready, pointing at an empty `.run/wrangler-dev.log`.

## Process
1. Confirmed default port **8787** is LISTEN by another repo’s wrangler (`seoontest/funnyT`, workerd PID holding `localhost:8787`).
2. Manually ran wrangler on **8788** with the same `--local -c .cache/wrangler.no-ai.json` args — Ready appeared in ~20s and HTTP `/` returned 200.
3. Reproduced `start:dev --no-build --port 8788 --no-ops-ui` successfully; tool-page smoke passed.
4. Hardened `waitForDevReady` to accept `127.0.0.1` / `localhost` Ready lines and to treat consecutive HTTP health checks as ready when the log stays empty; improved empty-log error hints in `start-dev.mjs`.

## Root cause / analysis
- **8787 conflict**: another project already runs wrangler on the default port; this repo must use `--port 8788` (or free 8787).
- **Empty log + timeout**: the Ready gate previously required a log substring. If the detached child’s stdout never flushed to `.run/wrangler-dev.log`, the waiter waited the full 90s even when (or after) the process was unhealthy/gone — a brittle coupling to log I/O.

## Solution
- Use `npm run start:dev -- --port 8788` while 8787 is foreign-owned (server verified up at `http://127.0.0.1:8788/`).
- `ops/lib/dev-process.mjs`: Ready needles for both hostnames + HTTP health streak fallback.
- `ops/dev/start-dev.mjs`: clearer empty-log diagnostics mentioning foreign 8787.

## Notes / boundaries
- Do not kill the foreign 8787 process from this repo’s `stop:dev` (by design).
- Full `build:site` before start is still slow; `--no-build` is fine when `_pages` + local R2 are already seeded.

[actions]
- Updated `ops/lib/dev-process.mjs`, `ops/dev/start-dev.mjs`
- Started local dev on port 8788 for verification
