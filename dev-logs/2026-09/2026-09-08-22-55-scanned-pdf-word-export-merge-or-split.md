Date: 2026-09-08 22:55
Summary: Added merge-vs-per-file Word export on the scanned-PDF OCR tool — default stays one document; several per-file Word files download as a ZIP.
Visibility: people

[question]
提供功能：分别按输入文件导出word还是合并在一个word导出

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-scanned-pdf-to-word-with-ocr
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-scanned-pdf-to-word-with-ocr

[try to solve]
## Context
The shipped N4 page always packed every successful PDF into one DOCX. Users also need one Word file per input PDF without a second URL.

## Process
1. Added a Word-export fieldset next to the language chips (not on the Convert/Download row): default “one Word for the batch”; optional “one Word per PDF”.
2. Refactored packing: `buildDocxFromRows` builds one DOCX from a list of files; `packOutputs` either merges or builds one DOCX per file. Two or more per-file successes load same-origin fflate and download a ZIP of `.docx` names derived from the PDF filenames. One success still uses Download Word.
3. Switching the radio or the page-image checkbox after OCR rebuilds the blob without re-running Tesseract.
4. How gained a fifth step; FAQ q10 explains the two modes. Ten-locale keys stayed in parity (105 keys).
5. `verify:tool` site/SEO/HTML smoke passed. Isolation needs `CROSS_TOOL_UPDATE=1` only because unrelated neighbor files remain dirty in the working tree.

## Root cause / analysis
Merge vs split is the same OCR job and the same queue. Splitting it into two URLs would be a doorway. The extra Information Gain is the export radio plus ZIP-when-several, with How labels matching Download Word / Download ZIP.

## Solution
Keep the locked default (one Word). Per-file mode is a visible choice; the download button label follows the mode and the number of successful PDFs.

## Notes / boundaries
- Caps unchanged: 5 PDFs, 20 pages, 12 MB.
- Per-file ZIP is Word files, not TXT.
- Live multi-file ZIP click was not run in a browser this session; prerendered HTML shows the radios and default Download Word.

[actions]
- Updated `src/pages/batchConvertScannedPdfToWordWithOcrPage.ts` and `src/site/i18n/tools/batch-convert-scanned-pdf-to-word-with-ocr/*`
- Updated `work-tasks/batch-convert-scanned-pdf-to-word-with-ocr/02-tool-info.md`
- `npm run tool:touch -- --slug=batch-convert-scanned-pdf-to-word-with-ocr`
- `npm run verify:tool -- --slug=batch-convert-scanned-pdf-to-word-with-ocr` (isolation re-run with CROSS_TOOL_UPDATE=1)
