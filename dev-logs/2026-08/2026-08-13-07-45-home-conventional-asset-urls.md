Date: 2026-08-13 07:45
Summary: Home pages use conventional Asset URLs with Worker-first language negotiation.

[question]
需要首页在asset起作用，且按常规url访问

[try to solve]
`buildHome` writes conventional paths: `public/index.html` (default language `/`), `public/{lang}/index.html` (including `/en/`), and still writes `_pages/{lang}/index.html` for R2 fallback. Worker `serveHomeHtml` reads Assets at those conventional paths. `run_worker_first` covers `/` and each language prefix so Assets cannot serve the default home before Accept-Language runs. `.assetsignore` again excludes the whole `_pages` tree. Ship: `build:site` → commit `public/index.html` and `public/*/index.html` → git push.

[actions]
- Updated `scripts/build-site.mjs`, `src/site/r2Pages.ts`, `src/index.ts`, `wrangler.jsonc`
- Updated `.assetsignore`, `.gitignore`, design/ops/cloudflare-workflow docs
