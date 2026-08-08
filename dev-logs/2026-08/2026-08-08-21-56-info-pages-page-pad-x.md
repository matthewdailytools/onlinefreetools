Date: 2026-08-08 21:56
Summary: Align about/privacy/terms/contact horizontal padding with the home page --page-pad-x.

[question]
privacy，条款，联系，关于，和主页一样，增加左右margin，

[try to solve]
信息页改用 `body.is-info-page`，左右 padding 使用与首页相同的 `--page-pad-x`，并限制最大宽度对齐 `--home-max`；不再误用首页的 `padding: 0`。已 `build:site`。

[actions]
- scripts/site/layout.mjs（bodyClass）
- scripts/build-site.mjs（info 页 bodyClass=is-info-page）
- public/styles/site.css
- npm run build:site
