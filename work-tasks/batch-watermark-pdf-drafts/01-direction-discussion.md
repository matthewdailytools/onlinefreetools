# Direction

Direction A: a concrete file-processing task. Batch watermark PDF drafts.

Existing neighbor `pdf-watermark` supplies reusable browser processing but has a different primary output or lacks a batch report. Keep that URL intact. This implementation is explicitly user requested, not justified by invented search volume.

Shared text stamp rendered as transparent PNG, centered and scaled to each page crop box. Rotation incorporates page rotation; text, opacity, angle and relative width settings. 20 PDFs, 25 MiB each, 100 MiB total, 200 pages each; encrypted/broken files skipped. ZIP and CSV.

Reference: https://pdf-lib.js.org/docs/api/classes/pdfpage
