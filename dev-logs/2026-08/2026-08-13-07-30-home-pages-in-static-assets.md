Date: 2026-08-13 07:30
Summary: Serve language home pages from Static Assets after build.

[question]
build的时候首页存放asset

[try to solve]
各语言首页在 `build:site` / `buildHome` 写入 `public/_pages/{lang}/index.html` 后，经 `.assetsignore` 与 `.gitignore` 反选进仓库与 Workers Static Assets；工具等其它 `_pages` 仍只走 R2。Worker 新增 `serveHomeHtml`：Cache → Assets → R2 兜底。上线须 commit 十语 `index.html` 并 git push（CF 部署 Assets）；R2 仍可继续上传首页作兜底。

[actions]
- Updated `public/.assetsignore`, `.gitignore`, `src/site/r2Pages.ts`, `src/index.ts`, `scripts/build-site.mjs`
- Updated `docs/worker+R2架构/design.md`, `ops/worker-r2-ops.md`, `.cursor/rules/cloudflare-workflow.mdc`, `wrangler.jsonc`, `work-todos/2026-08/2026-08-13.md`
