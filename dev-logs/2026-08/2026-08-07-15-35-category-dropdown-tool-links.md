Date: 2026-08-07 15:35
Summary: Header nav now shows category names with per-category tool links in each dropdown.

[question]
直接写分类名，然后下拉就是工具名和链接

[try to solve]
Replaced the single “Categories” dropdown with three side-by-side dropdowns. Labels are the category names (image editing / developer / calculators); children are each tool’s name + link to `/tools/{slug}` from the catalog.

- `buildCategoryNavDropdowns`: `src/pages/site/nav.ts` (runtime tool pages), `scripts/site/nav.mjs` (static home)
- Tool pages and home rebuilt; image editing still first

[actions]
- `src/pages/site/nav.ts`, `scripts/site/nav.mjs`
- `npm run build:site` → `public/_pages/*/index.html`
