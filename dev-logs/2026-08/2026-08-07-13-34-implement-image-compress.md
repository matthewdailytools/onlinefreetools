Date: 2026-08-07 13:34
Summary: Implement local image compressor tool (image-compress) with ten-locale i18n.

[question]
实现

[try to solve]
已上线 `/tools/image-compress`（catalog `image`）：

- Tier 0 Canvas：最长边缩放、质量、可选目标 KB（质量二分）、输出 WebP/JPEG/PNG、JPEG 底色、前后体积对照；达不到目标时诚实警告
- Related 互链：`image-format-converter` ↔ `image-exif` ↔ `image-compress`
- 十语 i18n + 首页卡片 + README；`lint:seo` OK；`build:site`（sitemap 200 URLs）
- work-tasks：`02` → `implemented`，`03` → `i18n-done`

[actions]
- Added `src/pages/imageCompressPage.ts`, icon, catalog, `src/index.ts` route
- Updated ten `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, README, related tools
- Updated `work-tasks/image-compress/02`–`03`; ran `lint:seo` + `build:site`
