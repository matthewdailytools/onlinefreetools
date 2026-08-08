Date: 2026-08-08 21:14
Summary: Update homepage document titles to free tools / no upload / no signup messaging.

[question]
首页标题：免费在线工具，不上传数据，无需注册 | OnlineFreeTools.org

[try to solve]
将十语 `home_title` 改为「免费/不上传/无需注册」卖点 + `| OnlineFreeTools.org`（中文用用户原文；其余语言同等义本地化）。已 `build:site`。

[actions]
- scripts/site/i18n.mjs（home_title ×10）
- npm run build:site
