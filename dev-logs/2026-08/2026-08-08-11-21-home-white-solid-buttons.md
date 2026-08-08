Date: 2026-08-08 11:21
Summary: Homepage buttons use white solid style as the primary pattern.

[question]
首页按钮以白色实心按钮为主

[try to solve]
首页按钮统一为白色实心（`btn-primary`）：

- **Hero**：两个 CTA 均为 `btn-primary`（深底白字实心）
- **推荐/分类卡片**与「查看全部」：由 outline 改为 `btn-primary`
- **CSS**：`.home-wrap .home-main .btn-primary` 浅底白字实心 + 细边框/阴影；移除 hero 区 outline 幽灵按钮样式

已运行 `npm run build:site` 更新静态首页。

[actions]
- scripts/site/components/content-home.mjs
- public/styles/site.css
- public/_pages/*/index.html（build 输出）
