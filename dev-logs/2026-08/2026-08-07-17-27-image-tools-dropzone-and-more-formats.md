Date: 2026-08-07 17:27
Summary: Enlarged image-tool drop zones with copy below, and expanded format converter to BMP/GIF/ICO/SVG.

[question]
1. 工具页首屏：更大的拖放/选择区，文案后置；2、增加多种图片格式转换

[try to solve]
1) Added site-wide `.tool-dropzone`. Five image tool pages now follow H1 → large drop zone → controls/options → preview → `.tool-lead` copy moved below.
2) `image-format-converter` target formats expanded to PNG/JPEG/WebP/AVIF + BMP/GIF/ICO/SVG; added `public/tools/image-format-converter/extra-formats.js` for local encoding; synced ten-locale copy and rules/FAQ; FAQ collect cap raised to 8; `lint:seo` passed.

[actions]
- public/styles/site.css
- public/tools/image-format-converter/extra-formats.js
- src/pages/imageFormatConverterPage.ts and compress/crop/exif/optimizer
- src/pages/site/toolContent.ts
- src/site/i18n/*.ts
- work-tasks/image-format-converter/02-tool-info.md
