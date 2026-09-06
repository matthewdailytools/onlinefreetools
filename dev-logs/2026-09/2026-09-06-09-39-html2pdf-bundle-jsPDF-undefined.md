Date: 2026-09-06 09:39
Summary: HTML→PDF (and Word→PDF) sample conversion crashed because html2pdf.min.js needs global jsPDF; switched to the self-contained bundle.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/convert-html-to-pdf 出现 ”处理失败，请重试。“

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
- https://onlinefreetools.org/tools/convert-word-document-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Opening `/zh/tools/convert-html-to-pdf` on the local preview (`http://127.0.0.1:8788`) showed the generic Chinese error「处理失败，请重试。」on page entry. The tool auto-runs `loadSample()`, so the failure was the default conversion path, not a bad user file. The same error string is the i18n fallback `tool_convert_html_to_pdf_err_convert`; the real exception was swallowed in the click handler.

The 2026-09-06 Chinese auto-QA pass had already recorded this slug (and `convert-word-document-to-pdf`) as a wiring bug, not a flaky CDN: the script returned HTTP 200, then `typeof html2pdf === 'undefined'`, with a console error `Cannot read properties of undefined (reading 'jsPDF')`.

## Process
1. Confirmed the visible string maps to `tool_convert_html_to_pdf_err_convert` in the zh shard.
2. Read `src/pages/convertHtmlToPdfPage.ts`. The extra-body scripts loaded:
   - `pdf-lib.min.js` (unused leftover from the PDF-scene generator)
   - DOMPurify
   - `https://cdn.jsdelivr.net/npm/html2pdf.js@0.10.2/dist/html2pdf.min.js`
3. Fetched that min file from jsDelivr. The UMD wrapper is:

   `e.html2pdf = o(e.jspdf, e.html2canvas)`

   So `html2pdf.min.js` is the *library-only* build. It expects `window.jspdf` and `window.html2canvas` already on the page. The factory then reads `jspdf.jsPDF`. When `window.jspdf` is missing, evaluation throws `Cannot read properties of undefined (reading 'jsPDF')` and never assigns `window.html2pdf`.
4. Compared file sizes: `html2pdf.min.js` ≈ 72 KB vs `html2pdf.bundle.min.js` ≈ 885 KB. The bundle does **not** use the peer UMD factory; it inlines jsPDF and html2canvas.
5. `convert-word-document-to-pdf` loaded the same non-bundle URL after mammoth, so the sample `.docx` path failed the same way (often shown as「无法读取该 .docx。」because the catch maps `html2pdf` to `err_load`).
6. Switched both pages to `html2pdf.bundle.min.js@0.10.2`, added a `typeof html2pdf === 'undefined'` guard on the HTML page, and mapped `html2pdf` / `dompurify` to the load-fail copy instead of the generic convert-fail string.
7. Bumped `PAGES_CACHE_VERSION` 4.14 → 4.15 so local Cache API would not keep serving the old HTML (`s-maxage` is 86400 seconds). Prerendered both slugs, gzipped, uploaded to the local R2 bucket, restarted wrangler on 8788 with `--no-build --no-seed-r2`.
8. Playwright (headless Chrome) against `http://127.0.0.1:8788/zh/tools/convert-html-to-pdf`: `typeof html2pdf === 'function'`, no pageerror, no danger text, status「完成」, download button enabled. The Word page passed the same check.

## Root cause / analysis
html2pdf.js publishes two browser builds:

| File | Role |
| --- | --- |
| `dist/html2pdf.min.js` | UMD that *requires* global `jspdf` + `html2canvas` |
| `dist/html2pdf.bundle.min.js` | Same API, dependencies bundled |

The PDF-scene page generator wired the smaller file without loading the peers. The network looked healthy (jsDelivr 200), so this was easy to misread as a conversion bug. jsPDF 2.x also attaches as `window.jspdf.jsPDF`, not `window.jsPDF`; even loading a wrong jsPDF global would still throw. The bundle avoids that namespace dance.

## Solution
Use `html2pdf.bundle.min.js` on both HTML→PDF and Word→PDF. Keep the version pin at `0.10.2`. After deploy, production still needs the usual `upload:r2` + git push so R2 HTML and Worker `PAGES_CACHE_VERSION` 4.15 ship together.

Local verification (Playwright, ~8s after `domcontentloaded`):

- `/zh/tools/convert-html-to-pdf` — status 完成, download enabled, no `jsPDF` exception
- `/zh/tools/convert-word-document-to-pdf` — same

## Notes / boundaries
- Complex print CSS, remote fonts, and cross-origin images can still render poorly; html2canvas snapshots the preview DOM. The tool does not fetch a live URL.
- Chinese How / FAQ still carry PDF-scene template leftovers (「选择 PDF 或粘贴内容」, OCR FAQ). Those are copy issues, not this crash.
- `pdf-lib` remains loaded on the HTML page but is unused; left in place to keep this fix scoped to the jsPDF crash.
- Production visitors will keep the old script until R2 HTML is uploaded and `PAGES_CACHE_VERSION` 4.15 is live.

## Follow-up: other PDF tools
A full `src/pages/*Page.ts` scan shows **only these two pages import html2pdf.js**. The rest of the PDF cluster loads `pdf-lib@1.17.1` (self-contained UMD) or `pdf-lib-with-encrypt@1.2.1` for protect/unlock. They never touch `window.jspdf`, so they cannot hit this crash.

The 2026-09-06 auto-QA still lists three other sample failures (`unlock-pdf`, `add-digital-signature-to-pdf`, `turn-pdf-into-word-document`). Those are different pipelines (encryption sample, integrity-mark hash, pdf.js text extract), not a missing jsPDF global.

[actions]
- `src/pages/convertHtmlToPdfPage.ts`: load `html2pdf.bundle.min.js`; guard missing `html2pdf` / DOMPurify
- `src/pages/convertWordDocumentToPdfPage.ts`: same bundle URL
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.14 → 4.15
- catalog `updatedAt` via `tool:touch` for both slugs; prerender + gzip + local R2 upload
