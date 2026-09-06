Date: 2026-09-06 09:30
Summary: Auto-tested 84 pending Chinese tool pages against the manual QA checklist and recorded five stable sample failures plus template-copy warnings.
Visibility: project

[question]
自动根据 @docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md 清单，进行工具的功能测试，并出具测试报告，有问题或者可能出错的特别注明需要手动

[try to solve]
## Context
The pending list covers 84 Chinese tool pages touched since 2026-09-04. The user asked for automated functional checks against the five checklist items, plus an explicit “needs manual” call-out where automation cannot prove the path.

## Process
- Parsed slugs from the markdown list.
- Static-scanned `src/site/i18n/tools/{slug}/zh.ts` for `how_item_*`, OCR FAQ / `err_notext` template strings, and duplicated FAQ q2 / rules_item_3.
- Ran Playwright (system Chrome, headless) against `http://127.0.0.1:8788/zh/tools/{slug}`: HTTP status, H1, `#how ol`, Load sample / primary button, pageerror.
- Isolated-retried the six initial failures with a fresh browser context and ~6s CDN wait; traced script tags and `typeof html2pdf` / `PDFLib` / `JSZip`.

## Root cause / analysis
- `convert-html-to-pdf` and `convert-word-document-to-pdf` load `html2pdf.min.js` (peer-depends on global jsPDF). The 200 response still leaves `html2pdf` undefined and throws `Cannot read properties of undefined (reading 'jsPDF')`. This is a product wiring bug, not a flaky network.
- `unlock-pdf` sample encrypts with `doc.encrypt({ userPassword: 'sample' })` then unlocks; the UI stably shows unlock failure. Copy promises a working `sample` password. Real encrypted files from “Protect PDF” still need a human check.
- `add-digital-signature-to-pdf` and `turn-pdf-into-word-document` show generic convert-fail after libraries are present; pdf.js ESM import itself succeeds. Treat as broken sample pipelines until a human upload works.
- `markdown-to-html` 45s navigation timeout did not reproduce in isolation.
- Several PDF scene pages still share the OCR FAQ “需要 OCR 或可选择的 PDF 文本吗？” and the How step “选择 PDF 或粘贴内容”, including tools that never extract text (print, flipbook, open-in-browser, HTML→PDF). `images-to-pdf` and `pdf-to-jpg` have no `how_item_*`.

## Solution
Wrote:
- `docs/manual-qa/2026-09-06-zh-tool-auto-qa-report.md` (Chinese, action-first)
- `docs/manual-qa/2026-09-06-zh-tool-auto-qa-results.json`
- `scripts/qa/run-zh-pending-tool-qa.mjs` (repeatable runner)
- Pointer on the original checklist file

Did not change tool pages in this pass; the request was a test report.

## Notes / boundaries
English `/tools/{slug}` pages were not clicked one-by-one. Optional AI expand buttons were not clicked. Print was stubbed. Real user PDFs / ChatGPT exports / printers were not used.

[actions]
- Added `scripts/qa/run-zh-pending-tool-qa.mjs` and the report/JSON under `docs/manual-qa/`
- Linked the report from `docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md`
