Date: 2026-08-12 22:30
Summary: Implemented Worker+R2 architecture: prerender HTML to `_pages/{lang}/**/*.html.gz`, Cache→R2 serve, Worker bundle ~83KB gzip.

[question]
根据”docs/worker+R2架构/初始思路.md“进行项目架构重构，要求不要影响现在的用户体验和seo（索引和原来构建的seo体系）
（确认 R2 key：`_pages/{lang}/tools/text-diff.html.gz` 模式）

[try to solve]
Shipped Worker + R2 three-layer cache per plan; public URLs / sitemap / hreflang / verification files / language negotiation unchanged.

Highlights:
- R2 key: `_pages/{lang}/…/*.html.gz` (including tool pages)
- Worker: `Cache API → R2 gzip → ASSETS plaintext fallback`; gzip via `encodeBody: manual`; ASSETS fallback returns identity only to avoid double compression
- Tool pages prerendered at build (esbuild); Worker only uses `toolSlugs.generated.ts` for slug validation
- Worker upload size: ~**415 KiB / gzip 83 KiB** (was ~9.8MB)
- Scripts: `prerender:tools`, `gzip:pages`, `upload:r2` / `upload:r2:local`; `start:dev` seeds local bucket by default (`--no-seed-r2` to skip)
- Docs: `docs/worker+R2架构/design.md`
- Regression: home/tools/sitemap/robots/GSC/IndexNow/language 302/API/lint:seo/lint:vendor passed

Production release still needs creating the R2 bucket and running `npm run upload:r2`.

[actions]
- docs/worker+R2架构/design.md (new); 初始思路.md links to design
- wrangler.jsonc: PAGES_BUCKET, PAGES_CACHE_VERSION
- src/site/r2Pages.ts, toolRegistrar.ts, toolSlugs.generated.ts; src/index.ts serves prerender
- scripts: prerender-tool-pages*.mjs/ts, gzip-pages.mjs, upload-r2-pages.mjs; build-site.mjs / merge-all.mjs / package.json
- ops/dev/start-dev.mjs: local R2 seed; .gitignore tool HTML and .html.gz; rules synced
