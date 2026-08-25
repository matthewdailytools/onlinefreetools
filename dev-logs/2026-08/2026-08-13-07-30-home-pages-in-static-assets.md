Date: 2026-08-13 07:30
Summary: Serve language home pages from Static Assets after build.

[question]
build的时候首页存放asset

[try to solve]
After `build:site` / `buildHome` writes `public/_pages/{lang}/index.html`, language homes are opt-in to the repo and Workers Static Assets via `.assetsignore` / `.gitignore` exceptions; other `_pages` content (tools, etc.) still goes only to R2. Worker adds `serveHomeHtml`: Cache → Assets → R2 fallback. Ship requires committing the ten-language `index.html` files and git push (CF deploys Assets); R2 may still upload homes as fallback.

[actions]
- Updated `public/.assetsignore`, `.gitignore`, `src/site/r2Pages.ts`, `src/index.ts`, `scripts/build-site.mjs`
- Updated `docs/worker+R2架构/design.md`, `ops/worker-r2-ops.md`, `.cursor/rules/cloudflare-workflow.mdc`, `wrangler.jsonc`, `work-todos/2026-08/2026-08-13.md`
