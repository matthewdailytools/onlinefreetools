Date: 2026-09-04 00:52
Summary: Scene PDF tools now show button busy state, a progress bar while work runs, and a pdf.js canvas preview of the result.
Visibility: people

[question]
点击按钮没交互效果，操作pdf增加交互效果和进度过程，同时增加pdf预览

[try to solve]
## Context
The newly shipped scene PDF tools completed work in the browser but gave almost no click feedback. Primary actions often stayed enabled, status text was easy to miss, and tools that emitted a PDF only offered Download—no on-page preview of the result. Fast jobs felt like “the button did nothing.”

## Process
1. Compared mature PDF pages (`merge-pdf`, `compress-pdf`) with the new scene set. Mature pages disable the primary button and write status text; they still lack a result canvas. New pages such as combine / add-text / write / html-to-pdf often skipped even that.
2. Reused existing patterns: Bootstrap progress from `file-hash`, pdf.js canvas paging from `open-pdf-in-browser` / `make-pdf-flipbook`.
3. Added a shared helper `src/pages/site/pdfWorkUi.ts` so ten pages do not copy-paste pdf.js loaders. It injects CSS, progress markup, optional canvas + prev/next, and `window.OftPdfWork` (`ensurePdfJs`, `yieldUi`, `bind`).
4. Core i18n (ten locales) got short chrome labels: preview, progress, page template, previous, next.
5. Wired each new scene tool: disable actions + spinner on the primary button, show progress (indeterminate, then determinate when a step count exists), yield a frame so the UI paints before heavy work, then preview result bytes (or source PDF where the tool does not emit a new file). Print and flipbook already had a viewer; they received progress and busy state instead of a second canvas.

## Root cause / analysis
Two gaps stacked. First, many click handlers started `pdf-lib` / `html2pdf` immediately with no `disabled` / `aria-busy` / spinner, so a 50ms job never painted a working state. Second, success was a download button only—users could not see that a PDF had been produced. Status strings existed in i18n (`status_working`) but were easy to ignore without a bar and preview.

Shared helper vs per-page copy: a helper keeps pdf.js CDN/version in one place and lets compare bind two previews plus one progress bar. Labels live in core i18n so we do not add ten keys × ten tools.

## Solution
- Click: primary spinner, `aria-busy`, disable the action cluster until `finally`.
- Progress: striped bar; `null` = indeterminate; file/page loops report `done/total`.
- Preview: pdf.js canvas of result (or source) bytes with page prev/next. Print keeps the iframe viewer.
- `yieldUi()` (rAF + 40ms) so the busy/progress paint before CPU work.

Verified: `npm run merge:tools`; `lint:tool-page --require-html` for all ten slugs after targeted prerender.

## Notes / boundaries
- Applies to the ten scene slugs, not every live PDF tool (`merge-pdf`, `compress-pdf`, …). Same helper can be reused later.
- Preview is a raster of the PDF page, not an editor. Compare still diffs text; canvases show files A and B.
- `html2pdf.js` conversion can still take seconds on large HTML; the bar stays indeterminate until bytes exist.
- PDF/A check remains a heuristic, not veraPDF; preview is the uploaded/sample file.
- Shared chrome: core i18n + `pdfWorkUi.ts`. Isolation lint needs `CROSS_TOOL_UPDATE=1` if run per slug.

[actions]
- Added `src/pages/site/pdfWorkUi.ts` (progress + pdf.js preview + busy helpers)
- Added `pdf_work_*` labels in `src/site/i18n/core/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated ten page modules: combine, add-text, write, html-to-pdf, check PDF/A, compare, print, flipbook, extract-text, open-in-browser
- `npm run tool:touch` for those slugs; `merge:tools`; prerender those slugs
