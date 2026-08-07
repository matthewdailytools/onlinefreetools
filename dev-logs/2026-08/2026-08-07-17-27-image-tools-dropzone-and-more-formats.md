Date: 2026-08-07 17:27
Summary: Enlarged image-tool drop zones with copy below, and expanded format converter to BMP/GIF/ICO/SVG.

[question]
1. 工具页首屏：更大的拖放/选择区，文案后置；2、增加多种图片格式转换

[try to solve]
1) 全站增加 .tool-dropzone；五个图片工具页改为 H1 → 大拖放区 → 操作/选项 → 预览 → .tool-lead 说明后置。
2) image-format-converter 目标格式扩展为 PNG/JPEG/WebP/AVIF + BMP/GIF/ICO/SVG；新增 public/tools/image-format-converter/extra-formats.js 本地编码；十语文案与 rules/FAQ 同步；FAQ 收集上限调到 8；lint:seo 通过。

[actions]
- public/styles/site.css
- public/tools/image-format-converter/extra-formats.js
- src/pages/imageFormatConverterPage.ts 及 compress/crop/exif/optimizer
- src/pages/site/toolContent.ts
- src/site/i18n/*.ts
- work-tasks/image-format-converter/02-tool-info.md
