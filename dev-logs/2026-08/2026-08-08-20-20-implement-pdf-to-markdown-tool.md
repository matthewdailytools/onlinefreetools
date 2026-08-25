Date: 2026-08-08 20:20
Summary: Implemented full pdf-to-markdown tool with pdf.js text extraction, 10-locale i18n, and all gates green.

[question]
Implement full `pdf-to-markdown` in /Users/xuli/vscodeai/onlinefreetools.

## Spec
- slug: pdf-to-markdown, category: pdf, #58
- work-tasks ready. Title: "PDF to Markdown — Extract Text for Notes Locally"
- Tech: pdfjs-dist@4.10.38 lazy import (copy pattern from compressPdfPage.ts / pdfToJpgPage.ts). getTextContent per page; group items by approximate y into lines; join with spaces; pages separated by `\n\n---\n\n`. Download .md. NO OCR — if extracted text (trimmed) is empty, hard fail with clear message.
- Also load pdf-lib only for sample generation OR generate sample text PDF with pdf-lib then extract.
- related: ["markdown-to-html","pdf-to-jpg"] (verify slugs exist in catalog)
- loadSample(): 1-page PDF with Helvetica text "Hello PDF to Markdown sample." → auto convert → Download .md enabled showing that text
- Privacy, 25MB soft warn

## Create catalog, icon, pdfToMarkdownPage.ts, 10 i18n independent full keys.

## Update 02/03 1b+2b (en,zh,es,ja), inventory #58, README

## Gates until green:
npm run merge:tools && npm run coverage:gate -- --slug=pdf-to-markdown --phase=all && npm run build:site && npm run lint:seo && CROSS_TOOL_UPDATE=1 TOOL_SLUG=pdf-to-markdown npm run lint:tool-isolation

No plan/commit. 中文 brief. Chinese comments on functions.

[try to solve]
Shipped full `pdf-to-markdown`:

**Core** (`src/pages/pdfToMarkdownPage.ts`)
- Lazy pdfjs-dist@4.10.38; per-page `getTextContent`, group by y tolerance into lines, join with spaces; pages separated by `\n\n---\n\n`
- Empty trimmed text hard-fails (`err_notext`; no OCR)
- pdf-lib builds a 1-page Helvetica sample “Hello PDF to Markdown sample.”; on-enter `loadSample()` auto-converts and enables Download .md
- 25 MB soft warn; Markdown preview; privacy FAQ

**Added/updated**
- `src/site/tool-catalog.d/pdf-to-markdown.json` (category: pdf; related: markdown-to-html, pdf-to-jpg)
- `public/icons/tools/pdf-to-markdown.svg`
- Ten-locale shards `src/site/i18n/tools/pdf-to-markdown/*.ts`
- `work-tasks/pdf-to-markdown/03-locale-briefs.md` 1b+2b rows and search-coverage note
- `docs/2026-08-08-tool-inventory-table.md` #58 → shipped
- `README.md` EN/ZH inventory lines

**Gates**: `merge:tools`, `coverage:gate` all, `build:site`, `lint:seo`, `lint:tool-isolation` all passed.

[actions]
- src/pages/pdfToMarkdownPage.ts
- src/site/tool-catalog.d/pdf-to-markdown.json
- public/icons/tools/pdf-to-markdown.svg
- src/site/i18n/tools/pdf-to-markdown/*.ts (10 locales)
- work-tasks/pdf-to-markdown/03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md
- README.md
