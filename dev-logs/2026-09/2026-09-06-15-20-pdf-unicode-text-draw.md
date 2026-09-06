Date: 2026-09-06 15:20
Summary: PDF tools that stamp or write user text now draw CJK, Cyrillic, and Arabic via the browser font stack instead of Helvetica/WinAnsi.
Visibility: people

[question]
增加中文出错，要适应所有语言.并查看其他工具是否有类似问题，统一修正

## Tool links (English)
- https://onlinefreetools.org/tools/add-text-to-pdf-file
- https://onlinefreetools.org/tools/add-digital-signature-to-pdf
- https://onlinefreetools.org/tools/edit-pdf-form-fields
- https://onlinefreetools.org/tools/edit-pdf-text-online
- https://onlinefreetools.org/tools/fill-out-pdf-form
- https://onlinefreetools.org/tools/pdf-page-numbers
- https://onlinefreetools.org/tools/pdf-watermark
- https://onlinefreetools.org/tools/turn-pdf-into-editable-document
- https://onlinefreetools.org/tools/write-pdf-document-online
Chinese: https://onlinefreetools.org/zh/tools/write-pdf-document-online

[try to solve]
## Context
Typing Chinese (or Japanese, Russian, Arabic) into Write a PDF / Add text to a PDF failed. pdf-lib’s built-in Helvetica only encodes WinAnsi (roughly Latin-1). `drawText('中文')` throws, and the UI showed a generic processing error. The same pattern existed on every tool that stamps user- or locale-supplied strings with Helvetica.

## Process
1. Confirmed Helvetica `embedFont` + `drawText` on `write-pdf-document-online` and `add-text-to-pdf-file`.
2. Listed other `drawText` / `setText` call sites. User-facing ones: write PDF, add text, watermark, edit PDF text, make PDF editable, page numbers (`第 {n} 页` on zh), digital-signature appearance title, fill-out form appearances.
3. Rejected vendoring Noto Sans SC (~8MB) plus JP/Arabic extras. If the user can type the characters, the OS already has a font the Canvas API can use.
4. Added shared helpers on `window.OftPdfWork`: `canWinAnsiEncode`, `measureTextWidth`, `wrapTextLines`, `drawPageText`. WinAnsi stays on Helvetica; anything else is rasterized at 2× with a CJK/Arabic/system font stack, then `embedPng`.
5. Watermark and page-numbers did not previously load `pdfWorkUiClientScript`; calling `drawPageText` there threw until that script was injected.

## Root cause / analysis
pdf-lib standard fonts cannot encode code points above Latin-1. Locale UI strings (zh page-number template, zh “digitally marked” title) hit the same encoder as user input. Canvas `fillText` uses the browser’s shaper, so CJK and Arabic joining work without shipping a pan-Unicode TTF.

## Solution
- `src/pages/site/pdfWorkUi.ts`: Unicode draw/measure/wrap helpers.
- Switched the user-text PDF tools above to `drawPageText`. Fill-out form still `setText`s, but if appearance update fails on CJK it overlays the field widget with the same helper.
- Local check (`PAGES_CACHE_VERSION` 4.46): write-pdf with mixed 中文/日本語/Привет/مرحبا → status「完成」, ~2000 dark pixels, no pageerror. Add-text「机密 CONFIDENTIAL」same. Watermark「草稿」and page numbers format「第 N 页」download enabled.

## Notes / boundaries
- Rasterized glyphs are not selectable/searchable in the PDF. English-only stamps remain real Helvetica text.
- Image tools that already `fillText` on canvas (photo watermark, typed signature) did not need this change.
- Sample PDFs that must stay extractable (PDF→Word) still fall back to ASCII for Helvetica; that is extractability, not the write/stamp path.
- Production needs R2 upload plus Worker `PAGES_CACHE_VERSION` 4.46 (or later).

[actions]
- `src/pages/site/pdfWorkUi.ts`: Unicode text helpers
- User-text PDF pages listed in Tool links
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.44 → 4.46
