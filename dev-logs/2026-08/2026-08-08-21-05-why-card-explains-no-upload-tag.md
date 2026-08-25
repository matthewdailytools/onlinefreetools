Date: 2026-08-08 21:05
Summary: Local-first why card now shows and explains the No-upload badge.

[question]
本地优先卡片对不上传标签进行说明

[try to solve]
The home “Local-first” why card now shows a sample “No upload” badge (linked to privacy#local) and updates ten-locale `home_why_1_body` to explain the badge, that it opens the privacy note, and that edge tools omit the badge. Ran `build:site`.

[actions]
- `scripts/site/components/content-home.mjs`, `scripts/site/i18n.mjs`, `public/styles/site.css`
- `npm run build:site`
