Date: 2026-08-13 00:04
Summary: Exclude public/_pages from Cloudflare Assets; HTML only via R2.

[question]
“ASSETS public/_pages/*.html — 本地/未 upload 回退 ” 不应该上传 public/_pages/*.html 到云flare

[try to solve]
已落实：`public/.assetsignore` 排除 `_pages/` 与 `*.html.gz`，预渲染 HTML 不再上传到 Cloudflare Static Assets。Worker 链路改为 Cache → R2，未命中直接 404（去掉 ASSETS `_pages` 回退）。本地须 `upload:r2:local` / `start:dev` 灌桶；生产须 `npm run deploy`（含 upload）。文档已同步（design.md、worker-r2-ops.md、ops/README、start-dev 提示）。

[actions]
- Added `public/.assetsignore`
- Updated `src/site/r2Pages.ts`, `src/index.ts`, `wrangler.jsonc`
- Updated `ops/worker-r2-ops.md`, `ops/README.md`, `ops/dev/start-dev.mjs`, `ops/lib/dev-process.mjs`, `docs/worker+R2架构/design.md`
