Date: 2026-08-07 07:11
Summary: Added explicit IndexNow sitemap flags for local/remote sources, filters, and npm shortcuts.

[question]
增加支持根据sitemap 提交的参数

[try to solve]
在 `ops/seo/submit-indexnow.mjs` 增加按 sitemap 提交的专用参数：`--sitemap [path|url]`、`--sitemap-url`、`--remote-sitemap`、`--sitemap-only`（保留 `--from-sitemap`）。支持本地文件与远程 URL，以及 sitemapindex 递归；npm 增加 `indexnow:sitemap` / `indexnow:remote-sitemap`。文档已同步。

[actions]
- ops/seo/submit-indexnow.mjs
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
