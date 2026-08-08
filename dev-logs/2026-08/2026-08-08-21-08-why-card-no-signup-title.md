Date: 2026-08-08 21:08
Summary: Second home why-card title is now “No signup”; “open and use” moved into the body.

[question]
第二个卡片，标题改为：无需注册，打开即用放在描述里面

[try to solve]
十语更新 `home_why_2_title` / `home_why_2_body`：中文标题「无需注册」，描述以「打开即用…」开头；英文等对应 No signup / open and use in body。已 `build:site`。

[actions]
- `scripts/site/i18n.mjs`
- `npm run build:site`
