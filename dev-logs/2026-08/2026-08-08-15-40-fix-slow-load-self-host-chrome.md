Date: 2026-08-08 15:40
Summary: Fix slow home/tool loads by self-hosting Bootstrap/fonts and deferring analytics.

[question]
http://localhost:8788/zh/tools/images-to-gif 还是很缓慢，解决这个问题，首页也很缓慢http://localhost:8788/zh/

[try to solve]
Server HTML itself is fast (~10–20ms). Slowness came from first-paint-blocking third-party assets: cdnjs Bootstrap, fonts.googleapis, and Clarity/Baidu analytics timing out on local/restricted networks.

Fix:
1. `scripts/copy-site-chrome-vendor.mjs` copies Bootstrap 5.3.3 and Plus Jakarta Sans woff2 into `/vendor/`
2. `layout.ts` / `layout.mjs` use same-origin CSS/JS/fonts; Bootstrap loads with `defer`
3. Clarity/Baidu inject after `load` + `requestIdleCallback`
4. Sidebar/home secondary card icons use `loading="lazy"`; gifenc was already same-origin
5. `build:site` / `start:dev --no-build` run the vendor copy

Check: home/tool HTML no longer references cdnjs/fonts.googleapis; critical same-origin assets load in parallel ~16ms.

[actions]
- scripts/copy-site-chrome-vendor.mjs
- scripts/build-site.mjs
- scripts/site/layout.mjs
- scripts/site/tracking.mjs
- scripts/site/components/content-home.mjs
- src/pages/site/layout.ts
- src/pages/site/sidebar.ts
- ops/dev/start-dev.mjs
- package.json (bootstrap, @fontsource/plus-jakarta-sans, vendor:site-chrome)
- .gitignore
- npm run build:site
