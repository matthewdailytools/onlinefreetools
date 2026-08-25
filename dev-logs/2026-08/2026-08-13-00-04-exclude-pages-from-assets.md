Date: 2026-08-13 00:04
Summary: Exclude public/_pages from Cloudflare Assets; HTML only via R2.

[question]
“ASSETS public/_pages/*.html — 本地/未 upload 回退 ” 不应该上传 public/_pages/*.html 到云flare

[try to solve]
Done: `public/.assetsignore` excludes `_pages/` and `*.html.gz`, so prerendered HTML is no longer uploaded to Cloudflare Static Assets. Worker path is Cache → R2; miss returns 404 (no ASSETS `_pages` fallback). Locally use `upload:r2:local` / `start:dev` to seed the bucket; production must use `npm run deploy` (includes upload). Docs synced (design.md, worker-r2-ops.md, ops/README, start-dev hints).

[actions]
- Added `public/.assetsignore`
- Updated `src/site/r2Pages.ts`, `src/index.ts`, `wrangler.jsonc`
- Updated `ops/worker-r2-ops.md`, `ops/README.md`, `ops/dev/start-dev.mjs`, `ops/lib/dev-process.mjs`, `docs/worker+R2架构/design.md`
