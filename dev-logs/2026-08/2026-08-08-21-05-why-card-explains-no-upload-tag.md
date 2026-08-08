Date: 2026-08-08 21:05
Summary: Local-first why card now shows and explains the No-upload badge.

[question]
本地优先卡片对不上传标签进行说明

[try to solve]
首页「本地优先 / Local-first」卡片内展示「不上传」标签样例（链到 privacy#local），并更新十语 `home_why_1_body`：说明标签含义、可点开隐私说明，以及边缘工具不挂标签。已 `build:site`。

[actions]
- `scripts/site/components/content-home.mjs`、`scripts/site/i18n.mjs`、`public/styles/site.css`
- `npm run build:site`
