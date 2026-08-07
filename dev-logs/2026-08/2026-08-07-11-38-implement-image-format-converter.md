Date: 2026-08-07 11:38
Summary: Implement image-format-converter (PNG/JPEG/WebP/AVIF) with ten-locale copy

[question]
按brief实现

[try to solve]
已按 `work-tasks/image-format-converter/` brief 落地工具页（尚未要求 commit）。

**路径**：`/tools/image-format-converter`  
**技术**：Tier 0 Canvas `toBlob`；本地不上传；探测 WebP/AVIF 编码；校验 `blob.type`；JPEG 可选底色；单文件 + 透明样例。

**工程**：`imageFormatConverterPage.ts`、catalog、`index.ts` 注册、十语 i18n、首页 `i18n.mjs`、图标、README；`lint:seo` 与 `build:site` 通过。

**IG**：Rules 对照表、透明→JPEG、编码回退检测、隐私 FAQ、Related（占位 markdown-to-html / yaml-json）。  
`02` → `implemented`；`03` → `i18n-done`（≥3 轮）。

本地可开 `npm run start:dev` 访问 `/tools/image-format-converter`。

[actions]
- Added src/pages/imageFormatConverterPage.ts
- Added public/icons/tools/image-format-converter.svg
- Updated src/site/tool-catalog.json, src/index.ts, README.md
- Updated src/site/i18n/*.ts (10 langs) + scripts/site/i18n.mjs
- Updated work-tasks/image-format-converter/02-tool-info.md, 03-locale-briefs.md
- Ran npm run lint:seo && npm run build:site
