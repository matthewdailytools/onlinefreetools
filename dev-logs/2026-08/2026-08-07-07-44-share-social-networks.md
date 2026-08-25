Date: 2026-08-07 07:44
Summary: Extended the tool share module with X, Facebook, LinkedIn, Reddit, WhatsApp, and Telegram links.

[question]
分享模块提供一些常用的分享路径，例如x，facebook等

[try to solve]
Added common social outbound links on the tool-page share module (open in a new window): X, Facebook, LinkedIn, Reddit, WhatsApp, and Telegram; kept copy-link and system share. Added `tool_share_networks_label` across ten locales and updated the hint; styled as a light button group.

[actions]
- `src/pages/site/toolContent.ts` — `buildSocialShareLinks`
- `public/styles/site.css` — `.tool-share-networks` / `.tool-share-net`
- `src/site/i18n/*.ts` — share copy updates
