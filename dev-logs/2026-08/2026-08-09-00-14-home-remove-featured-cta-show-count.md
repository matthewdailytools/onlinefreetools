Date: 2026-08-09 00:14
Summary: Removed home nav Featured and hero Featured CTA; replaced Browse tools link with tool count text.

[question]
将顶部菜单“推荐”以及why卡片上方的“推荐工具”删除，“浏览全部工具”剔除链接，显示工具数量xxx

[try to solve]
已改首页构建：

1. 顶栏去掉「推荐」：`buildHomeNavItems` 仅保留分类下拉（`scripts/site/nav.mjs`）。
2. Hero 去掉「推荐工具」按钮（原 `home_cta_featured` → `#featured`）。
3. 「浏览全部工具」改为非链接文案：按 catalog 显示数量，如 zh `59 个工具`、en `59 tools`（键 `home_tools_count: '{n} …'`，十语已加）。

`npm run build:site` 已刷新 `public/_pages/*/index.html`。下方 Featured 工具卡片区仍保留（仅去掉入口按钮与顶栏项）。

[actions]
- 更新 `scripts/site/nav.mjs`、`scripts/site/components/content-home.mjs`、`scripts/site/i18n.mjs`、`public/styles/site.css`
- `npm run build:site`
