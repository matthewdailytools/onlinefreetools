Date: 2026-08-08 16:35
Summary: Shipped four brand themes with navbar switcher, link≠accent roles, and localStorage persistence.

[question]
4套颜色都做一套方案，然后在网站上可以自选主题进行切换

[try to solve]
已落地四套 `data-theme`（teal/green/amber/navy）覆盖 `--accent*`；默认青石蓝。全局链接改为 `--link`（正文色）；侧栏选中为 soft 底 + 深字 + 左边线。顶栏「主题」下拉可切换，`localStorage oft-theme` 持久化，head 内联防 FOUC，`/js/theme.js` 处理点击。十语 i18n 主题名已加；`build:site` 已跑。硬刷新 /zh/ 右上角试切换。

[actions]
- public/styles/site.css, public/js/theme.js
- src/pages/site/{header,layout}.ts, scripts/site/{layout.mjs,components/header.mjs,i18n.mjs}
- src/site/i18n/core/*.ts (+ merge)
- npm run build:site
