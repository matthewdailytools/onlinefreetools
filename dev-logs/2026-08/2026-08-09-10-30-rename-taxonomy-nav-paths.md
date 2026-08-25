Date: 2026-08-09 10:30
Summary: Moved taxonomy nav to the end; renamed paths to /where-to-use-tools and /tool-type; subject label is tool type.

[question]
将应用场景和操作对象菜单移到最后面；需改应用场景链接为where-to-use-tools,操作对象名称修改为"工具类型“,链接为：tool-type

[try to solve]
Top-nav “use cases” and “tool type” entries now sit after the category dropdown. Paths are `/where-to-use-tools` and `/tool-type`; Chinese nav copy uses the requested “tool type” wording. Old `/use-cases` and `/subjects` 301 in the Worker to the new paths; stale static directories are cleared on build; sitemap updated.

[actions]
- Updated nav order/paths in scripts/site/nav.mjs and src/pages/site/nav.ts
- Renamed hub paths in taxonomy build, Worker routes, sitemap, i18n
- npm run build:site + lint:taxonomy
