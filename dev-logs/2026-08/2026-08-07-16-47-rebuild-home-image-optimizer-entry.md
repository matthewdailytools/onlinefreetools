Date: 2026-08-07 16:47
Summary: Rebuild home pages so image-optimizer appears in nav and cards

[question]
首页页面没有对应入口

[try to solve]
原因是首页来自静态 `public/_pages/{lang}/index.html`，catalog 已登记但未跑 `build:site`。已执行 `npm run build:site`，en/zh 首页导航下拉、Featured、All tools 与 sitemap 均已出现 Image Optimizer / 图片优化。刷新本地首页即可看到。

[actions]
- 运行 `npm run build:site`（刷新 `_pages` 与 sitemap）
