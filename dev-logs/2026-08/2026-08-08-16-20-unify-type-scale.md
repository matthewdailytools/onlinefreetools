Date: 2026-08-08 16:20
Summary: Unified site type scale tokens and home card classes; rebuilt static pages.

[question]
统一修改

[try to solve]
Added a `--fs-*` ladder in `site.css` (Hero → section → category → subtitle/featured card → card → body → muted). Home/header/sidebar/tool H1·lead·section H2 now use tokens. Removed Bootstrap `h5/h6/small` on cards in favor of `home-card-title` / `--featured` and `home-card-desc` / `--sm`. Fixed invalid font-weights 750/650. Ran `build:site`. Refresh http://localhost:8788/zh/ (or `/_pages/zh/index.html`) to review.

[actions]
- public/styles/site.css
- scripts/site/components/content-home.mjs
- public/_pages/*/index.html (via build:site)
