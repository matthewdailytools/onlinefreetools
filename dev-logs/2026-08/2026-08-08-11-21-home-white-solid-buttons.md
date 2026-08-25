Date: 2026-08-08 11:21
Summary: Homepage buttons use white solid style as the primary pattern.

[question]
首页按钮以白色实心按钮为主

[try to solve]
Unified homepage buttons to white solid (`btn-primary`):

- **Hero**: both CTAs use `btn-primary` (solid dark-on-white / white-on-dark as styled)
- **Featured/category cards** and “View all”: outline → `btn-primary`
- **CSS**: `.home-wrap .home-main .btn-primary` as light-ground white solid with thin border/shadow; removed hero outline/ghost button styles

Ran `npm run build:site` to refresh static home pages.

[actions]
- scripts/site/components/content-home.mjs
- public/styles/site.css
- public/_pages/*/index.html (build output)
