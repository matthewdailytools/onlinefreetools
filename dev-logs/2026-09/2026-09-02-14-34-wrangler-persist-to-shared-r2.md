Date: 2026-09-02 14:34
Summary: Local wrangler is up on 8787 after pinning `--persist-to` to the repo `.wrangler/state` so tool HTML from the mock R2 bucket is found.
Visibility: people

[question]
还是无法打开

[try to solve]
## Context

Nothing was listening on 8787. The last user `start-dev` died on the missing `src/index.ts` path. After that path rebase, a later start reached Ready but then **exited and killed wrangler** because `/zh/tools/writing-prompt-generator` returned 404.

## Process

1. Confirmed home `GET /` with `Accept: text/html` was 200 (Assets) while tool URLs 404’d (R2).
2. Mock bucket already had 2081 objects under `.wrangler/state/v3/r2/onlinefreetools-pages-preview`.
3. `wrangler dev -c .cache/wrangler.no-ai.json` was not reading that persist dir (empty bucket from the Worker’s view).
4. Passed `--persist-to <repo>/.wrangler/state` and aligned `getPlatformProxy` persist to `.../state/v3`.
5. `node ops/dev/start-dev.mjs --no-build --no-seed-r2` then: Ready, tool smoke 200, Ops UI on 8791.

## Root cause / analysis

Two separate failures stacked: (1) no process after a failed start; (2) after the entry-point fix, `-c` in `.cache/` used a **different persist root**, so start-dev’s tool-page gate 404’d and **tore down** the healthy home server.

## Solution

Explicit shared persist path. Open http://127.0.0.1:8787/ in a browser (not a probe without HTML Accept). Stop with `npm run stop:dev`.

## Notes / boundaries

`GET /` without `Accept: text/html` still 404 by Worker design.

[actions]
- `spawnWrangler` now always passes `--persist-to` repo `.wrangler/state`; local proxy persist path matches.
