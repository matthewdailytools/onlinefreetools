Date: 2026-08-07 11:58
Summary: Rename site brand in titles and chrome from Online Free Tools to OnlineFreeTools.org.

[question]
修改历史页面和模板：title上的Online Free Tools修改为OnlineFreeTools.org，以及首页logo边上的Online Free Tools

[try to solve]
站点展示名已统一为 **OnlineFreeTools.org**：

- **模板/源码**：十语 `brand`、`scripts/site/i18n.mjs`、`scripts/site/config.mjs`；顶栏 `header` 与首页 hero 均读 `t(lang,'brand')`。
- **构建产物**：`npm run build:site` / `build:logs` 后，首页与 `public/devlogs/` 的 title、navbar logo 旁文案、页脚均为新品牌。
- **遗留静态页**：9 篇旧版 `public/devlogs/*.html`（无 logo 的 `navbar-brand fw-semibold`）的 title/顶栏/页脚已手工替换。
- **源目录模板**：`dev-logs/index.html`、`dev-logs/viewer.html` 的 title/meta/JSON-LD 等已改为 OnlineFreeTools.org。
- 日志正文里作为历史用户原问出现的 “Online Free Tools” 未改写。

[actions]
- Updated i18n/config brand strings; rebuilt site/logs earlier in session
- Patched 9 legacy `public/devlogs/*.html` chrome (title, navbar, footer)
- Patched `dev-logs/index.html`, `dev-logs/viewer.html`
