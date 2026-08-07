Date: 2026-08-07 14:56
Summary: Implemented image-crop tool with local Canvas selection, presets, ten-locale i18n.

[question]
开始实现

[try to solve]
已实现 `/tools/image-crop`（分类 `image`）：

- 页面：`src/pages/imageCropPage.ts` — 选区舞台、比例锁、常用像素预设、裁剪/整图改尺寸（contain/cover）、默认不放大、JPEG/WebP/PNG 导出、自动样例
- 注册：`tool-catalog.json` + `src/index.ts`；related 与 compress/format-converter 互链
- 十语 i18n（`src/site/i18n/*.ts`）+ 首页 `scripts/site/i18n.mjs`；图标 `public/icons/tools/image-crop.svg`
- README 中英清单；`02`/`03` 状态 shipped；`npm run build:site` + `lint:seo` 通过

[actions]
- Added `src/pages/imageCropPage.ts`, `public/icons/tools/image-crop.svg`
- Updated `src/site/tool-catalog.json`, `src/index.ts`, `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, `README.md`, `work-tasks/image-crop/02-tool-info.md`, `03-locale-briefs.md`
- Ran `npm run build:site`, `npm run lint:seo`
