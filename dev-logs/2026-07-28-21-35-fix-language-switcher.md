Date: 2026-07-28 21:35
Summary: Fix language switcher broken by /en 301 and Accept-Language conflict

[question]
语言无法切换，分析原因和修正

[try to solve]
根因（与 2026-01-11 同类问题）：SEO 方案把默认语显式前缀 `/en`、`/en/tools/*`、`/en/about` 301 到无前缀规范 URL，同时语言切换链接改为 `withLangPath`。用户点 English 落到 `/` 或 `/tools/...` 后，服务端 Accept-Language 与客户端协商脚本又按浏览器偏好（如 zh）302/replace 回 `/zh/`，表现为「语言切换无效」。

修复：恢复显式前缀供导航与语言切换（`/en/` 等返回 200，不再 301）；语言下拉、首页工具卡片、brand/footer/About 导航改回 `withExplicitLangPath`。SEO canonical / hreflang / sitemap 仍使用无前缀规范 URL，互不冲突。

[actions]
- 修改：`src/index.ts`（撤销默认语 301，显式 `/en/`、`/en/about/` 正常提供页面）
- 修改：`src/site/toolRegistrar.ts`（撤销默认语工具页 301）
- 修改：`scripts/build-site.mjs`、`scripts/site/components/content-home.mjs`、`header` 相关 brand/alternates
- 修改：`scripts/site/pages/home.mjs`、`about.mjs`、`footer.mjs`、`src/pages/site/footer.ts`
- 执行：`npm run build:site`
