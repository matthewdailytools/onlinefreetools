Date: 2026-08-07 14:56
Summary: Implemented image-crop with local Canvas selection, presets, and ten-locale i18n.

[question]
开始实现

[try to solve]
Implemented `/tools/image-crop` (category `image`):

- Page: `src/pages/imageCropPage.ts` — selection stage, aspect lock, common pixel presets, crop / full-image resize (contain/cover), no upscale by default, JPEG/WebP/PNG export, auto sample
- Registration: `tool-catalog.json` + `src/index.ts`; related links with compress / format-converter
- Ten-locale i18n (`src/site/i18n/*.ts`) + home `scripts/site/i18n.mjs`; icon `public/icons/tools/image-crop.svg`
- README EN/ZH lists; `02`/`03` marked shipped; `npm run build:site` + `lint:seo` passed

[actions]
- Added `src/pages/imageCropPage.ts`, `public/icons/tools/image-crop.svg`
- Updated `src/site/tool-catalog.json`, `src/index.ts`, `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, `README.md`, `work-tasks/image-crop/02-tool-info.md`, `03-locale-briefs.md`
- Ran `npm run build:site`, `npm run lint:seo`
