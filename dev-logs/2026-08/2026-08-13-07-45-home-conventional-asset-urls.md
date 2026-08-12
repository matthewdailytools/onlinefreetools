Date: 2026-08-13 07:45
Summary: Home pages at conventional Asset URLs with Worker-first language negotiation.

[question]
需要首页在asset起作用，且按常规url访问

[try to solve]
`buildHome` 写入常规路径：`public/index.html`（默认语 `/`）、`public/{lang}/index.html`（含 `/en/`），并仍写 `_pages/{lang}/index.html` 供 R2 兜底。Worker `serveHomeHtml` 按常规路径读 Assets。`run_worker_first` 增加 `/` 与各语前缀，避免 Assets 抢先出默认首页而跳过 Accept-Language。`.assetsignore` 恢复整树排除 `_pages`。上线：`build:site` → commit `public/index.html` 与 `public/*/index.html` → git push。

[actions]
- Updated `scripts/build-site.mjs`, `src/site/r2Pages.ts`, `src/index.ts`, `wrangler.jsonc`
- Updated `.assetsignore`, `.gitignore`, design/ops/cloudflare-workflow docs
