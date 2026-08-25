Date: 2026-08-07 13:34
Summary: Shipped the local image-compress tool with Canvas controls and ten-locale i18n.

[question]
实现

[try to solve]
Shipped `/tools/image-compress` (catalog category `image`):

- Tier 0 Canvas: max-edge resize, quality, optional target KB (quality binary search), WebP/JPEG/PNG output, JPEG background color, before/after size compare; honest warning when the target cannot be met
- Related links: `image-format-converter` ↔ `image-exif` ↔ `image-compress`
- Ten-locale i18n + home card + README; `lint:seo` OK; `build:site` (sitemap 200 URLs)
- work-tasks: `02` → `implemented`, `03` → `i18n-done`

[actions]
- Added `src/pages/imageCompressPage.ts`, icon, catalog, `src/index.ts` route
- Updated ten `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, README, related tools
- Updated `work-tasks/image-compress/02`–`03`; ran `lint:seo` + `build:site`
