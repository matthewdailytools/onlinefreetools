Date: 2026-09-26 14:05
Summary: Rebuilt all prerendered pages and re-uploaded R2 after a stale local `_pages` overwrite; bumped cache to 4.78.
Visibility: people

[question]
重建和重新上传

[try to solve]
## Context
A prior `npm run upload:r2` ran against a stale local `public/_pages` tree (about 2026-09-12, ~221 EN tool gz files vs 278 in catalog). Hash-delta mode saw every object differ from R2 meta and re-uploaded 2690 files, overwriting overlapping taxonomy/info/tool HTML while leaving newer-only keys intact.

## Process
1. Bumped `PAGES_CACHE_VERSION` in `wrangler.jsonc` from `4.77` → `4.78` so edge Cache API keys invalidate.
2. Ran `npm run build:site` (full): 278 tools × 10 langs, gzip wrote 3260 `.html.gz`.
3. Ran `npm run upload:r2` (`--changed-only`): `files=3260 upload=3260 skipped=0` (expected after full rebuild vs previous meta).
4. Confirmed R2: `_meta/pages-build.json` version `4.78`, `fileCount=3260`; sample tools and `/zh/topics/health-body` objects updated today.

## Root cause / analysis
Incremental upload is correct: it compares **this machine’s** gz hashes to R2 meta. It cannot know the local tree is behind production. Worker-only fixes must not call `upload:r2` unless `_pages` was freshly built from current sources.

## Solution
Full rebuild + R2 re-upload + cache bump. Deploy Worker (`git:deploy`) so production reads `PAGES_CACHE_VERSION=4.78`.

## Notes / boundaries
- Before any remote `upload:r2`: ensure `public/_pages` was produced by a recent `build:site` on this checkout (tool gz count ≈ catalog size).
- Prefer `npm run upload:r2 -- --dry-run` and check `upload=` / `skipped=` when unsure.
- Sitemap locs did not need trailing-slash edits for the earlier GSC redirect fix; this rebuild refreshed lastmod/state as a side effect of `build:site`.

[actions]
- `wrangler.jsonc`: PAGES_CACHE_VERSION 4.78
- `npm run build:site` then `npm run upload:r2` (3260 objects)
- Commit sitemap / lastmod state + git:deploy for Worker version
