Date: 2026-08-09 17:29
Summary: Add ops handbook tab to local Sitemap/Ops UI with whitelist Markdown rendering.

[question]
将在ops UI中增加运维手册的展示

[try to solve]
在现有 `sitemap:ui` 增加「运维手册」页签：登录后可读渲染 `ops/README.md` 与入站清单（白名单）；`GET /api/handbook`；别名 `npm run ops:ui`。API 冒烟通过。若本机 8791 仍是旧进程需重启。

[actions]
- ops/seo/sitemap-ui.mjs、sitemap-ui.html
- package.json `ops:ui`；ops/README 说明
