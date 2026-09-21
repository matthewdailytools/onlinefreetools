# Direction

Direction A: a concrete file-processing task. Extract text from a scanned PDF.

Existing neighbor `batch-convert-scanned-pdf-to-word-with-ocr` supplies reusable browser processing but has a different primary output or lacks a batch report. Keep that URL intact. This implementation is explicitly user requested, not justified by invented search volume.

PDF → raster → OCR → editable UTF-8 TXT; one PDF, 12 MiB, selected range up to 20 pages; English, simplified Chinese, Japanese, Arabic OCR. Page errors skip with visible report.

Reference: https://github.com/naptha/tesseract.js
