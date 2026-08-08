Date: 2026-08-08 11:02
Summary: Unify homepage button variants to primary/outline-primary system.

[question]
首页按钮的样式一致

[try to solve]
统一首页按钮体系：
- Hero 两个 CTA 均改为 `btn-primary btn-lg`，共用白色实心 hero 样式（不再一实心一描边）。
- 分类区工具卡片与推荐区一致，均为 `btn-primary btn-sm`。
- 「查看全部」改为 `btn-outline-primary btn-sm`（与站点主色 secondary 操作一致，替代 gray outline-secondary）。
- `.home-main .btn-sm` 统一内边距与字重。

[actions]
- scripts/site/components/content-home.mjs
- public/styles/site.css
- public/_pages/*/index.html（build:site）
