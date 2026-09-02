Date: 2026-09-02 13:05
Summary: Restored the missing `npm run build:site` script so `start-dev` and `predeploy` work again after it was overwritten by `build:topic-ig`.
Visibility: people

[question]
@terminals/1.txt:911-936 start-dev failed with Missing script: "build:site"

[try to solve]
## Context

`.\ops\dev\start-dev.ps1` runs `ops/dev/start-dev.mjs`, which by default executes `npm run build:site` before wrangler. npm exited with `Missing script: "build:site"`. The same alias is required by `predeploy`, `verify`, rules, and ops docs.

## Process

1. Confirmed `package.json` had `build:site:full` / `build:site:changed` but no `build:site`.
2. Diff against HEAD showed the uncommitted topic-IG work **replaced** the `build:site` line with `build:topic-ig` instead of inserting a new script.
3. Restored `"build:site": "npm run merge:tools && node scripts/build-site.mjs --full"` next to `build:topic-ig`.
4. `npm run` lists `build:site` again.

## Root cause / analysis

npm scripts are a flat map. Adding `build:topic-ig` on the same line as `build:site` deleted the canonical name. `start-dev` still used that name; `:full` is only an explicit alias, not a fallback.

JSON has no comments, so there is no in-file reminder. The guard is: never replace `build:site`; add sibling keys.

## Solution

Keep both:

- `build:topic-ig` — flatten topic IG copy
- `build:site` — full site build (same command as `build:site:full`)

Re-run `.\ops\dev\start-dev.ps1` after the restore. First start still takes a full site build.

## Notes / boundaries

- Did not start wrangler in this pass (user’s terminal).
- `build:site:changed` remains a full build (`--full`), matching the current “builds are always full” policy.

[actions]
- Restored `build:site` in `package.json`; left `build:topic-ig` in place.
