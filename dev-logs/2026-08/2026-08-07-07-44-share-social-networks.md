Date: 2026-08-07 07:44
Summary: Extended the tool share module with X, Facebook, LinkedIn, Reddit, WhatsApp, and Telegram links.

[question]
分享模块提供一些常用的分享路径，例如x，facebook等

[try to solve]
在工具页分享模块中增加常用社交外链（新窗口打开）：X、Facebook、LinkedIn、Reddit、WhatsApp、Telegram；保留复制链接与系统分享。十语文案补充 `tool_share_networks_label` 并更新 hint；样式为轻量按钮组。

[actions]
- `src/pages/site/toolContent.ts` — `buildSocialShareLinks`
- `public/styles/site.css` — `.tool-share-networks` / `.tool-share-net`
- `src/site/i18n/*.ts` — 分享文案更新
