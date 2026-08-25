Date: 2026-08-07 16:37
Summary: Implemented the image-optimizer page with Tier 2 jSquash codecs.

[question]
实现

[try to solve]
Implemented `/tools/image-optimizer`: after click-to-load engine, lazily loads MozJPEG/WebP/AVIF/OxiPNG (`@jsquash/*` vendor + `engine.mjs`), slider compare, AVIF cancellable. Wired ten-locale i18n, catalog, home short labels, README, and related links. `npm run lint:seo` passed; wrangler dry-run passed. WASM vendor copied via `npm run vendor:image-optimizer` / `build:site` and gitignored.

[actions]
- Added `src/pages/imageOptimizerPage.ts`, `public/tools/image-optimizer/engine.mjs`, `scripts/copy-image-optimizer-vendor.mjs`
- Added ten-locale `tool_image_optimizer_*` (`src/site/i18n/*.ts`) and `scripts/site/i18n.mjs` home short labels
- Updated `tool-catalog.json`, `src/index.ts`, `README.md`, `package.json`, `.gitignore`, `scripts/build-site.mjs`
- Installed `@jsquash/jpeg|webp|avif|oxipng`; FAQ collection expanded to q6
- `work-tasks/image-optimizer/02` → implemented; `03` briefs-ready
