Date: 2026-08-08 15:41
Summary: Remove Baidu Analytics; keep Microsoft Clarity via clarity.ms.

[question]
Clarity保持服务器链接，百度统计删除

[try to solve]
已从 `scripts/site/tracking.mjs` 移除百度统计（hm.baidu.com）；保留 Microsoft Clarity，仍从官方 `https://www.clarity.ms/tag/` 加载（工具页 layout 同）。隐私页十语文案去掉 Baidu/百度表述。已 `build:site`；首页/隐私/工具页 HTML 无百度脚本。

[actions]
- scripts/site/tracking.mjs
- scripts/site/i18n-site-pages.mjs
- npm run build:site
