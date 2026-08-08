Date: 2026-08-08 16:20
Summary: Unified site type scale tokens and home card classes; rebuilt static pages.

[question]
统一修改

[try to solve]
在 `site.css` 增加 `--fs-*` 阶梯（Hero→区块→分类→副标/推荐卡→卡片→正文→次要），首页/顶栏/侧栏/工具页 H1·lead·区块 H2 改用 token；去掉卡片 Bootstrap `h5/h6/small`，改为 `home-card-title` / `--featured` 与 `home-card-desc` / `--sm`；修正无效字重 750/650；已 `build:site`。刷新 http://localhost:8788/zh/（或 `/_pages/zh/index.html`）查看。

[actions]
- public/styles/site.css
- scripts/site/components/content-home.mjs
- public/_pages/*/index.html (via build:site)
