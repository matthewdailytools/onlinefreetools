Date: 2026-08-08 15:41
Summary: Remove Baidu Analytics; keep Microsoft Clarity via clarity.ms.

[question]
Clarity保持服务器链接，百度统计删除

[try to solve]
Removed Baidu Analytics (hm.baidu.com) from `scripts/site/tracking.mjs`; kept Microsoft Clarity loading from official `https://www.clarity.ms/tag/` (same for tool-page layout). Privacy page ten-locale copy no longer mentions Baidu. Ran `build:site`; home/privacy/tool HTML has no Baidu script.

[actions]
- scripts/site/tracking.mjs
- scripts/site/i18n-site-pages.mjs
- npm run build:site
