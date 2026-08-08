Date: 2026-08-08 15:30
Summary: Fix slow images-to-gif enter by vendoring gifenc locally instead of jsDelivr.

[question]
加载http://localhost:8788/zh/tools/images-to-gif很慢，分析修正

[try to solve]
根因：进页自动 `loadSample()` → `build()` 会 `import('https://cdn.jsdelivr.net/npm/gifenc@1.0.3/+esm')`；HTML 本身约几十毫秒，但 CDN 在本地/受限网络下超时或失败，导致页面“卡住很久”。

修正：
1. 将 `gifenc@1.0.3` ESM（约 9KB）复制到 `/vendor/gifenc/gifenc.esm.js`（`copy-image-optimizer-vendor.mjs` / `build:site`）
2. 页面改为同域懒加载 + `modulepreload`
3. 样例帧缩小；首屏 paint 后再跑样例；`repeat` 经 gifenc 首帧 options 传入

验证：HTML + local gifenc 关键路径约 20ms，页面不再含 jsDelivr gifenc URL。

[actions]
- src/pages/imagesToGifPage.ts
- scripts/copy-image-optimizer-vendor.mjs
- package.json / package-lock.json（依赖 gifenc）
- .gitignore（public/vendor/gifenc/）
- node scripts/copy-image-optimizer-vendor.mjs
