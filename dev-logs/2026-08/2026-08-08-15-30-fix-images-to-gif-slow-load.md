Date: 2026-08-08 15:30
Summary: Fix slow images-to-gif enter by vendoring gifenc locally instead of jsDelivr.

[question]
加载http://localhost:8788/zh/tools/images-to-gif很慢，分析修正

[try to solve]
Root cause: on enter, auto `loadSample()` → `build()` called `import('https://cdn.jsdelivr.net/npm/gifenc@1.0.3/+esm')`. HTML itself returned in tens of ms, but the CDN timed out or failed on local/restricted networks, so the page felt stuck for a long time.

Fix:
1. Copy `gifenc@1.0.3` ESM (~9KB) to `/vendor/gifenc/gifenc.esm.js` (`copy-image-optimizer-vendor.mjs` / `build:site`)
2. Page uses same-origin lazy load + `modulepreload`
3. Smaller sample frames; run sample after first paint; pass `repeat` via gifenc first-frame options

Check: HTML + local gifenc critical path ~20ms; page no longer embeds a jsDelivr gifenc URL.

[actions]
- src/pages/imagesToGifPage.ts
- scripts/copy-image-optimizer-vendor.mjs
- package.json / package-lock.json (gifenc dependency)
- .gitignore (public/vendor/gifenc/)
- node scripts/copy-image-optimizer-vendor.mjs
