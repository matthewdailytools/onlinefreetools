Date: 2026-08-08 10:16
Summary: Added meta robots noindex to generated devlog HTML pages and index.

[question]
devlog的生成的html 增加noindex

[try to solve]
已在 devlog 构建链路为全部生成页加入 `<meta name="robots" content="noindex" />`：

1. **`scripts/site/layout.mjs`** — `renderLayout` 新增可选参数 `robotsNoindex`（默认 `false`）。
2. **`scripts/build-site.mjs`** — `buildDevLogs()` 对单篇与索引页均传 `robotsNoindex: true`。
3. **`.cursor/rules/seo-html-defaults.mdc`** — 索引说明同步为 devlogs 使用 noindex meta。

与既有策略一致：`robots.txt` 已 `Disallow: /devlogs/`，sitemap 不含 devlogs；noindex 用于已发现/曾收录 URL 的额外信号。

已运行 `npm run build:logs` 刷新 `public/devlogs/` 全部 HTML。

[actions]
- scripts/site/layout.mjs
- scripts/build-site.mjs
- .cursor/rules/seo-html-defaults.mdc
- public/devlogs/*.html（build:logs 重建）
