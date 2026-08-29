Date: 2026-08-29 12:07
Summary: Restored homepage topic dropdowns; fixed tool-page Tools mega menu hover by dropping Bootstrap dropdown in favor of CSS :hover.

[question]
首页不要改，只改动slug工具页，分主题的菜单收起在工具菜单中，鼠标悬停展开这个没有实现。

[try to solve]
Homepage `buildHomeNavItems` again uses 16 topic dropdowns + topics / where2use / tool-type / devlogs (multirow CSS under `body.is-home-page` only). Tool slug pages keep Home → Tools mega → Tool topics → Tool types → Dev logs.

Hover failed because Bootstrap `data-bs-toggle="dropdown"` owned `display`. Replaced mega markup with `.tools-mega-panel` (no Bootstrap dropdown); desktop show via `:hover` / `:focus-within` with `display: grid !important`; mobile click toggles `.is-open`. Rebuilt site; verified home has no mega panel and 16 dropdowns; tool page has mega panel without `data-bs-toggle`.

[actions]
- scripts/site/nav.mjs, src/pages/site/nav.ts, header(s), layout(s), site.css
- npm run build:site
