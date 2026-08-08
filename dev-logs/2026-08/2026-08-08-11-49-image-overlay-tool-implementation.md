Date: 2026-08-08 11:49
Summary: Implemented image-overlay tool page, catalog, i18n (10 langs), icon, and README; lint:seo OK.

[question]
Implement the `image-overlay` tool following image-merge/color-from-image patterns; full i18n, catalog, icon, README; run lint:seo.

[try to solve]
Created `src/pages/imageOverlayPage.ts` with local two-layer Canvas compositing (opacity, scale, x/y, 9-grid position, six blend modes, drag on preview, JPEG/WebP/PNG export). Registered in `src/index.ts` after image-merge; added catalog entry and updated image-merge related to include image-overlay. Added `public/icons/tools/image-overlay.svg` (#1c83a8). Completed `tool_image_overlay_*` keys in all 10 `src/site/i18n/*.ts` files and home keys in `scripts/site/i18n.mjs`. Updated README zh/en tool lists. Marked work-tasks 02 → implemented, 03 → i18n-done. `npm run lint:seo` passed.

[actions]
- src/pages/imageOverlayPage.ts (new)
- src/index.ts, src/site/tool-catalog.json
- public/icons/tools/image-overlay.svg (new)
- src/site/i18n/*.ts (10 files)
- scripts/site/i18n.mjs, README.md
- work-tasks/image-overlay/02-tool-info.md, 03-locale-briefs.md
