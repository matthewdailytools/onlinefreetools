Date: 2026-08-08 21:14
Summary: Update homepage document titles to free tools / no upload / no signup messaging.

[question]
首页标题：免费在线工具，不上传数据，无需注册 | OnlineFreeTools.org

[try to solve]
Set ten-locale `home_title` to free / no-upload / no-signup messaging + `| OnlineFreeTools.org` (Chinese keeps the user’s wording; other locales equivalent localization). Ran `build:site`.

[actions]
- scripts/site/i18n.mjs (home_title ×10)
- npm run build:site
