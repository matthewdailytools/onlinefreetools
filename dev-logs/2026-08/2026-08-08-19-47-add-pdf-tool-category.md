Date: 2026-08-08 19:47
Summary: Added catalog category `pdf` and moved merge-pdf / split-pdf into it; rebuilt site.

[question]
新建pdf工具分类

[try to solve]
Wired new `ToolCategory` value `pdf` (order: image → design → pdf → developer → calculator; anchor `#cat-pdf`). Ten-locale `tool_category_pdf` + `home_cat_pdf*`. JSON-LD breadcrumb uses `tool_category_pdf` / `cat-pdf` (UtilitiesApplication). Moved `merge-pdf` and `split-pdf` catalog category from `developer` to `pdf`; left `images-to-pdf` under `image`. Updated inventory §4 planned PDF rows to `pdf`. Ran `merge:tools` + `build:site` + `lint:seo`.

[actions]
- src/site/tools.ts, categories.ts; scripts/site/categories.mjs
- src/pages/site/toolContent.ts
- src/site/i18n/core/*.ts; scripts/site/i18n.mjs
- src/site/tool-catalog.d/{merge,split}-pdf.json
- docs/2026-08-08-tool-inventory-table.md; work-tasks briefs
- npm run merge:tools / build:site / lint:seo
