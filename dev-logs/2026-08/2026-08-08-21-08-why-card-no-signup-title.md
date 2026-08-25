Date: 2026-08-08 21:08
Summary: Second home why-card title is now “No signup”; “open and use” moved into the body.

[question]
第二个卡片，标题改为：无需注册，打开即用放在描述里面

[try to solve]
Updated ten-locale `home_why_2_title` / `home_why_2_body`: Chinese title is “No signup” wording; body leads with “open and use…”; English and other locales map the same split (No signup in title / open and use in body). Ran `build:site`.

[actions]
- `scripts/site/i18n.mjs`
- `npm run build:site`
