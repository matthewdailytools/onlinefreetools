Date: 2026-08-08 20:06
Summary: Implemented full pdf-to-jpg tool with ten locales and all gates green.

[question]
Implement the full `pdf-to-jpg` tool in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: pdf-to-jpg, category: **image** (not pdf), inventory #54
- work-tasks at work-tasks/pdf-to-jpg/ already ready with 0b passed
- Title en: "PDF to JPG — Convert Pages to Images in Your Browser"
- Tech: CDN pdfjs-dist@4.10.38 lazy import (same as compress-pdf), Canvas toBlob image/jpeg quality 0.92, scale default 2. Multi-page → fflate@0.8.2 UMD ZIP (like split-pdf). Single page → direct JPG download.
- related: ["images-to-pdf", "image-format-converter"] (or compress-pdf if format-converter missing — check catalog)
- loadSample(): 2-page mini PDF (can use pdf-lib to generate) → convert → ZIP download enabled
- Soft 25MB warn; encrypted error mapping
- Privacy phrasing: device + not uploaded

## Create
1. src/site/tool-catalog.d/pdf-to-jpg.json
2. public/icons/tools/pdf-to-jpg.svg
3. src/pages/pdfToJpgPage.ts (renderPdfToJpgPage) with full Chinese comments
4. Ten locale shards under src/site/i18n/tools/pdf-to-jpg/ — independent rewrites, full SEO keys (title/desc/description/article/how/rules×4/faq×5/usecases×3/example/buttons/errors/status/stats)

## Update
- work-tasks/pdf-to-jpg 02=implemented, 03=i18n-done with 1b+2b (2b must mention en,zh,es,ja)
- inventory #54 → 已上线
- README zh+en bullets

## Run until green
```
npm run merge:tools
npm run coverage:gate -- --slug=pdf-to-jpg --phase=all
npm run build:site
npm run lint:seo
CROSS_TOOL_UPDATE=1 TOOL_SLUG=pdf-to-jpg npm run lint:tool-isolation
```

Do NOT edit plan file. Do NOT commit. Reply 中文 brief with pass confirmation.

Reference patterns: src/pages/compressPdfPage.ts (pdfjs), src/pages/splitPdfPage.ts (fflate ZIP), src/pages/organizePdfPage.ts (page shell).

[try to solve]
`pdf-to-jpg` fully implemented and gated:

- **Page**: `src/pages/pdfToJpgPage.ts` — lazy pdf.js @4.10.38, scale=2, JPEG 0.92; single page direct JPG, multi-page fflate ZIP; on enter 2-page sample auto-converts and is downloadable; 25MB soft warn and encrypted/corrupt error mapping.
- **Config**: catalog shard category=`image`, related=`images-to-pdf` + `image-format-converter`; ten-locale i18n shards complete.
- **Docs**: work-tasks 02→`implemented`, 03→`i18n-done` (with 1b/2b); inventory #54→live; README zh+en entries added.

**All gates green**: `merge:tools`, `coverage:gate --phase=all`, `build:site`, `lint:seo`, `lint:tool-isolation` (`CROSS_TOOL_UPDATE=1`).

[actions]
- src/site/tool-catalog.d/pdf-to-jpg.json
- public/icons/tools/pdf-to-jpg.svg
- src/pages/pdfToJpgPage.ts
- src/site/i18n/tools/pdf-to-jpg/*.ts (10 locales)
- work-tasks/pdf-to-jpg/02-tool-info.md, 03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md
- README.md
