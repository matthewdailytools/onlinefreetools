Date: 2026-08-08 15:59
Summary: Production /zh/ looks broken because self-hosted Bootstrap/font vendor assets 404 after upload.

[question]
为什么上传后，https://onlinefreetools.org/zh/  样式错位了

[try to solve]
根因：今日把布局从 CDN 改为同域 `/vendor/bootstrap/`、`/vendor/fonts/` 后，线上 HTML 已引用这些路径，但生产上这两个资源返回 **404**；`/styles/site.css` 仍 200。缺少 Bootstrap 栅格/组件样式就会表现为首页错位。本地 `public/vendor/bootstrap/`、`public/vendor/fonts/` 由 `build:site` / `vendor:site-chrome` 生成，且在 `.gitignore` 中，若只上传 HTML/页面、或部署未跑 vendor 复制，就不会带上这些文件。

修复：部署前执行 `npm run build:site`（或至少 `npm run vendor:site-chrome`），再 `npm run deploy` / 完整上传含 `public/vendor/bootstrap/` 与 `public/vendor/fonts/` 的 assets。

[actions]
- Verified live: bootstrap.min.css / plus-jakarta-sans.css → 404; site.css → 200
