Date: 2026-08-08 16:35
Summary: Shipped four brand themes with navbar switcher, link≠accent roles, and localStorage persistence.

[question]
4套颜色都做一套方案，然后在网站上可以自选主题进行切换

[try to solve]
Landed four `data-theme` sets (teal/green/amber/navy) covering `--accent*`; default slate teal. Global links use `--link` (body color); sidebar active uses soft background + dark text + left border. Navbar Theme dropdown switches themes; `localStorage oft-theme` persists; inline head script prevents FOUC; `/js/theme.js` handles clicks. Ten-locale theme name i18n added; `build:site` ran. Hard-refresh /zh/ and try the top-right switcher.

[actions]
- public/styles/site.css, public/js/theme.js
- src/pages/site/{header,layout}.ts, scripts/site/{layout.mjs,components/header.mjs,i18n.mjs}
- src/site/i18n/core/*.ts (+ merge)
- npm run build:site
