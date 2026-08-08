Date: 2026-08-08 15:40
Summary: Fix slow home/tool loads by self-hosting Bootstrap/fonts and deferring analytics.

[question]
http://localhost:8788/zh/tools/images-to-gif 还是很缓慢，解决这个问题，首页也很缓慢http://localhost:8788/zh/

[try to solve]
服务端 HTML 本身很快（约 10–20ms）；缓慢来自首屏阻塞外网资源：cdnjs Bootstrap、fonts.googleapis、Clarity/百度统计在本地/受限网络超时。

修正：
1. `scripts/copy-site-chrome-vendor.mjs` 将 Bootstrap 5.3.3 与 Plus Jakarta Sans woff2 复制到 `/vendor/`
2. `layout.ts` / `layout.mjs` 改为同域 CSS/JS/字体；Bootstrap `defer`
3. Clarity/百度统计改为 `load` + `requestIdleCallback` 后注入
4. 侧栏/首页次级卡片图标 `loading="lazy"`；gifenc 此前已同域化
5. `build:site` / `start:dev --no-build` 会跑 vendor 复制

验证：首页/工具页 HTML 不再含 cdnjs/fonts.googleapis；关键同域资源并行约 16ms。

[actions]
- scripts/copy-site-chrome-vendor.mjs
- scripts/build-site.mjs
- scripts/site/layout.mjs
- scripts/site/tracking.mjs
- scripts/site/components/content-home.mjs
- src/pages/site/layout.ts
- src/pages/site/sidebar.ts
- ops/dev/start-dev.mjs
- package.json（bootstrap、@fontsource/plus-jakarta-sans、vendor:site-chrome）
- .gitignore
- npm run build:site
