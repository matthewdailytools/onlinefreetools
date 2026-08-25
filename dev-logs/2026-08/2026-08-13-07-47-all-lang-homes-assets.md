Date: 2026-08-13 07:47
Summary: Confirm all language homes already use Assets; add a build assert.

[question]
其他语言的首页也需要走asset

[try to solve]
All ten language homes already go through Assets: `public/index.html` plus `public/{lang}/index.html`. Worker `serveHomeHtml` reads Assets first for `/` and each `/{lang}/`. This change adds `assertLangHomeAssets` (build fails if any language is missing) and clarifies comments. Ship must commit every `public/*/index.html` (not only English); after git push, CF picks them up as Static Assets.

[actions]
- Updated `scripts/build-site.mjs`, `src/site/r2Pages.ts` comments + assert
