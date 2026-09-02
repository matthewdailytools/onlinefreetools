Date: 2026-09-02 14:22
Summary: Fixed start-dev wrangler timeout: generated `.cache/wrangler.no-ai.json` now rebases `main` and assets paths so the CLI finds `src/index.ts`.
Visibility: people

[question]
start-dev: upload:r2:local succeeded, then “Dev server failed to become ready within timeout”

[try to solve]
## Context

Local R2 seed finished 2080/2080. Wrangler then exited the wait loop after 90s. `.run/wrangler-dev.log` showed: `The entry-point file at "src\index.ts" was not found.`

## Process

1. `start:dev` passes `-c .cache/wrangler.no-ai.json`. Wrangler CLI resolves `main` relative to **the config file directory**, not the repo root, so it looked for `.cache/src/index.ts`.
2. `getPlatformProxy` (seed) uses cwd, which is why the bucket fill still worked.
3. Rebased `main` → `../src/index.ts` and `assets.directory` → `../public` when writing the cache config. Seed stub `main` is `../scripts/lib/r2-seed-worker.mjs`.
4. Added log fatal needles `was not found` / `entry-point file` so a missing entry fails fast instead of waiting 90s.
5. Verified `npx wrangler dev --local -c .cache/wrangler.no-ai.json --port 8799` prints `Ready on http://127.0.0.1:8799`.

## Root cause / analysis

Path base for wrangler CLI `-c` is the config file’s folder. Copying `wrangler.jsonc` into `.cache/` without rewriting relative paths breaks `main`.

## Solution

`rebaseToConfigDir` in `scripts/lib/local-r2-platform-proxy.mjs`. Retry with `-NoBuild` (and `-NoSeedR2` if the mock bucket is already filled).

## Notes / boundaries

`GET /` without `Accept: text/html` still 404 by design; open the URL in a browser.

[actions]
- Rebased generated wrangler paths; added fatal log needles for missing entry-point.
