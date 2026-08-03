Date: 2026-08-03 20:48
Summary: Add Google Search Console site verification meta to homepage head

[question]
复制下面的元标记，并将其粘贴至网站的首页中。它应该位于第一个 <body> 部分之前的 <head> 部分中。
<meta name="google-site-verification" content="DRJRq9AI8KKITkdiZbdd7zu4LxrIc38CPOd9OeK15FM" />

[try to solve]
在站点构建配置中保存 Google 站点验证码，并在构建各语言首页时通过 `extraHeadHtml` 注入到 `<head>`（位于第一个 `<body>` 之前），避免把验证标签加到工具页等非首页。

[actions]
- 更新：`scripts/site/config.mjs`（新增 `googleSiteVerification`）
- 更新：`scripts/build-site.mjs`（首页 `extraHeadHtml` 注入 meta）
- 重建：各语言 `public/_pages/*/index.html`
- 本日志：`dev-logs/2026-08-03-20-48-add-google-site-verification-meta.md`
