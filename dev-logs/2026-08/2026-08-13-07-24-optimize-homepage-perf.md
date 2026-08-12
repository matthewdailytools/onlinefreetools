Date: 2026-08-13 07:24
Summary: Optimize homepage: collapse categories, content-visibility, eager first icons.

[question]
进行优化

[try to solve]
首页优化已落地：1) 分类改为 `<details>`，默认只展开第一类（全部工具链接仍在 HTML，利于 SEO）；2) `.home-cat` 加 `content-visibility:auto`；3) 首屏最多 12 个图标 `loading=eager`+`fetchpriority=high`，其余 lazy；4) 去掉 layout 里无效的 CSS preload 双写；5) 侧栏锚点点击/hash 自动展开对应分类。HTML 体积接近（~193KB），主要收益是首屏布局与图标请求减少。上线需 `gzip:pages`/`upload:r2` + push。

[actions]
- Updated `scripts/site/components/content-home.mjs`, `content-tool-cards.mjs`, `layout.mjs`, `build-site.mjs`
- Updated `public/styles/site.css`, `src/pages/site/layout.ts`
- Updated `work-todos/2026-08/2026-08-13.md`
