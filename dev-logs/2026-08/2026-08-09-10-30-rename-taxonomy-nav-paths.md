Date: 2026-08-09 10:30
Summary: Moved taxonomy nav to the end; renamed paths to /where-to-use-tools and /tool-type; subject label is 工具类型.

[question]
将应用场景和操作对象菜单移到最后面；需改应用场景链接为where-to-use-tools,操作对象名称修改为"工具类型“,链接为：tool-type

[try to solve]
顶栏「应用场景」「工具类型」已移到分类下拉之后。路径改为 `/where-to-use-tools` 与 `/tool-type`；中文导航文案为「工具类型」。旧 `/use-cases`、`/subjects` 在 Worker 中 301 到新路径；静态旧目录在 build 时清除；sitemap 已更新。

[actions]
- Updated nav order/paths in scripts/site/nav.mjs and src/pages/site/nav.ts
- Renamed hub paths in taxonomy build, Worker routes, sitemap, i18n
- npm run build:site + lint:taxonomy
