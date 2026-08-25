Date: 2026-08-08 20:20
Summary: Implemented full pdf-page-numbers tool (#57) with pdf-lib, 10-locale i18n, and all quality gates green.

[question]
Implement full `pdf-page-numbers` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: pdf-page-numbers, category: pdf, #57
- work-tasks ready. Title: "Add Page Numbers to PDF — In Your Browser"
- Tech: pdf-lib CDN. drawText page numbers on every page. Controls: position (bottom-center default, four corners + bottom/top center), start-at number (default 1), margin pt (default 24), font size (default 12). Format: just the number (or optional "Page N" if easy).
- related: ["pdf-watermark","organize-pdf"]
- After shipping, also update pdf-watermark related to include pdf-page-numbers if still pointing only to rotate-pdf
- loadSample(): 3-page sample → bottom-center numbers from 1 → numbered.pdf downloadable
- Privacy, 25MB, encrypted errors

## Create catalog, icon, pdfPageNumbersPage.ts, 10 i18n (full independent keys).

## Update 02/03 with 1b+2b (en,zh,es,ja), inventory #57, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=pdf-page-numbers --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=pdf-page-numbers npm run lint:tool-isolation

No plan/commit. 中文 brief. Chinese comments.

[try to solve]
Shipped full `pdf-page-numbers` (inventory #57); all gates passed.

**Behavior**
- `src/pages/pdfPageNumbersPage.ts`: pdf-lib CDN; `drawText` page numbers on every page
- Controls: position (bottom-center default, four corners, top/bottom center), start number (default 1), margin pt (default 24), font size (default 12), format (digits only / Page N)
- `loadSample()`: 3-page sample → bottom-center numbering from 1 → downloadable `numbered.pdf`
- 25 MB soft warn, readable encrypted/corrupt errors, privacy FAQ

**Deliverables**
- `src/site/tool-catalog.d/pdf-page-numbers.json` + `public/icons/tools/pdf-page-numbers.svg`
- Ten-locale i18n: `src/site/i18n/tools/pdf-page-numbers/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- `pdf-watermark` related updated to `["add-watermark","pdf-page-numbers"]`
- `work-tasks/pdf-page-numbers/02` → implemented; `03` with 1b/2b rows
- `docs/2026-08-08-tool-inventory-table.md` #57 → shipped
- `README.md` EN/ZH entries added

**Gates (all green)**
- `coverage:gate --phase=all`
- `build:site` (52 tools, sitemap 570 URLs)
- `lint:seo`
- `CROSS_TOOL_UPDATE=1 lint:tool-isolation`

[actions]
- src/site/tool-catalog.d/pdf-page-numbers.json, pdf-watermark.json
- src/pages/pdfPageNumbersPage.ts
- public/icons/tools/pdf-page-numbers.svg
- src/site/i18n/tools/pdf-page-numbers/*.ts (10 locales)
- work-tasks/pdf-page-numbers/02-tool-info.md, 03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md, README.md
