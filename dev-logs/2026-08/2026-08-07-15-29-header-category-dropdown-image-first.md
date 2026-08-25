Date: 2026-08-07 15:29
Summary: Added a top category dropdown and put image-editing tools first in nav order.

[question]
顶部增加分类下拉菜单，调整分类顺序，图片编辑工具放在首位

[try to solve]
Implemented a site-wide header “Categories” Bootstrap dropdown linking to home category anchors. Category order is unified as Image editing → Developer → Calculators.

Key changes:
- Added `src/site/categories.ts` and `scripts/site/categories.mjs` as the single source of category order
- Header `renderHeader` (runtime + static build) supports `type: 'dropdown'` nav items
- Home header, sidebar, and `#all-tools` sections all render in the new order
- All tool pages use `buildToolPageNavItems` (includes the category dropdown)
- Ten-locale `nav_categories`; Chinese category label set to the image-editing-tools phrase
- Ran `npm run build:site` to refresh `public/_pages/*/index.html`

[actions]
- `src/site/categories.ts`, `src/pages/site/nav.ts`, `src/pages/site/header.ts`
- `scripts/site/categories.mjs`, `scripts/site/nav.mjs`, `scripts/site/components/header.mjs`
- `scripts/site/pages/home.mjs`, `scripts/site/components/content-home.mjs`
- `scripts/site/i18n.mjs`, `src/site/i18n/*.ts`, `src/pages/*Page.ts`
- `public/_pages/*/index.html` (build output)
