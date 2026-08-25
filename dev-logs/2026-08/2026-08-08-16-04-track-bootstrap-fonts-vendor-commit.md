Date: 2026-08-08 16:04
Summary: Track bootstrap/fonts in git, rebuild static pages, commit 29ac93e.

[question]
直接改 .gitignore（去掉 bootstrap/fonts 两行），并把本地 vendor 加进仓库,然后重跑静态页面，commit

[try to solve]
Removed `public/vendor/bootstrap/` and `public/vendor/fonts/` from `.gitignore`; ran `vendor:site-chrome` + `build:site`; committed `29ac93e` (gitignore, vendor chrome assets, ten-locale static pages, sitemap). Not pushed. jsquash/gifenc/wasm-feature-detect remain ignored.

[actions]
- .gitignore
- public/vendor/bootstrap/*, public/vendor/fonts/*
- public/_pages/*/index|about|contact|privacy|terms.html, public/sitemap.xml
- npm run vendor:site-chrome && npm run build:site
- git commit 29ac93e
