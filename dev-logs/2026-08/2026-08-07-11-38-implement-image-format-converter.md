Date: 2026-08-07 11:38
Summary: Implemented image-format-converter (PNG/JPEG/WebP/AVIF) with ten-locale copy.

[question]
按brief实现

[try to solve]
Shipped the tool page from `work-tasks/image-format-converter/` (commit not requested).

**Path**: `/tools/image-format-converter`  
**Tech**: Tier 0 Canvas `toBlob`; local-only; detect WebP/AVIF encode support; validate `blob.type`; optional JPEG background; single file + transparent sample.

**Engineering**: `imageFormatConverterPage.ts`, catalog, `index.ts` registration, ten-locale i18n, home `i18n.mjs`, icon, README; `lint:seo` and `build:site` passed.

**IG**: Rules comparison table, transparency→JPEG, encode fallback detection, privacy FAQ, Related (placeholders markdown-to-html / yaml-json).  
`02` → `implemented`; `03` → `i18n-done` (≥3 rounds).

Local check: `npm run start:dev` → `/tools/image-format-converter`.

[actions]
- Added src/pages/imageFormatConverterPage.ts
- Added public/icons/tools/image-format-converter.svg
- Updated src/site/tool-catalog.json, src/index.ts, README.md
- Updated src/site/i18n/*.ts (10 langs) + scripts/site/i18n.mjs
- Updated work-tasks/image-format-converter/02-tool-info.md, 03-locale-briefs.md
- Ran npm run lint:seo && npm run build:site
