Date: 2026-08-08 11:12
Summary: Fix hero CTA buttons with dedicated home-hero-btn class for white solid style.

[question]
按钮格式并没有：同款白色实心

[try to solve]
Hero 按钮仍带 `btn-primary`，会被全站青绿 `.btn-primary { background: var(--accent) !important }` 覆盖，导致无法呈现预期的同款白底实心。

修复：去掉 Hero 上的 `btn-primary`，改用专用类 `home-hero-btn`（白底、深字、统一 hover/active）。两个 CTA 类名完全一致：`btn btn-lg home-hero-btn`。

[actions]
- scripts/site/components/content-home.mjs
- public/styles/site.css
- public/_pages/*/index.html（build:site）
