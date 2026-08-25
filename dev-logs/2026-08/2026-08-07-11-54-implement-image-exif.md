Date: 2026-08-07 11:54
Summary: Implemented image-exif viewer/stripper with ten-locale copy.

[question]
按工作任务实现

[try to solve]
Shipped `/tools/image-exif` from `work-tasks/image-exif/`.

- Read: CDN `exifr`; GPS / camera / time / other groups; highlight privacy fields  
- Strip: normalize Orientation → Canvas `toBlob` → download; re-read to verify GPS gone  
- catalog `image`; Related cross-links with `image-format-converter`  
- Ten locales + README; `lint:seo` / `build:site` passed  
- `02` → `implemented`; `03` → `i18n-done`

Local: `/tools/image-exif` (or `/zh/tools/image-exif`).

[actions]
- Added src/pages/imageExifPage.ts, public/icons/tools/image-exif.svg
- Updated tool-catalog.json, index.ts, README.md, i18n (10 langs + home)
- Updated work-tasks/image-exif/02 + 03
- Ran npm run lint:seo && npm run build:site
