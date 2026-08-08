Date: 2026-08-08 19:12
Summary: Rebuilt static homepage so /zh/ lists tools 18–24.

[question]
http://localhost:8788/zh/没有显示

[try to solve]
原因：新增七个工具后只跑了 `merge:tools`，未跑 `build:site`，静态首页 `public/_pages/zh/index.html` 仍是旧版，故 `/zh/` 推荐/全部工具区看不到新工具。工具页本身（如 `/tools/jwt-decoder`）已可访问。

处理：执行 `npm run build:site` 重建各语首页与 sitemap。验证 `/zh/` 已包含 jwt-decoder、file-hash、base64、uuid-generator、password-generator、unix-timestamp、timezone-converter。请硬刷新浏览器缓存后查看。

[actions]
- npm run build:site
- 验证 http://127.0.0.1:8788/zh/ 含七个新工具链接
