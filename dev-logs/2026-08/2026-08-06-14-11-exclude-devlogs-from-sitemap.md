Date: 2026-08-06 14:11
Summary: Removed devlogs URLs from sitemap generation; sitemap now has 110 tool/site URLs only.

[question]
sitemap不要放开发日志链接

[try to solve]
已从 `scripts/build-site.mjs` 的 `buildSitemap()` 中移除 `/devlogs/` 索引及全部单篇 devlog URL。开发日志页面仍可通过站内导航访问，但不提交给搜索引擎 sitemap。

已运行 `npm run build:site`，`public/sitemap.xml` 现为 110 条 URL（无 devlogs）。

[actions]
- scripts/build-site.mjs
- public/sitemap.xml
