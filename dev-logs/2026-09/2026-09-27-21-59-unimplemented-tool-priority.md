Date: 2026-09-27 21:59
Summary: Catalog now has 278 tools; the next unimplemented jobs to build are a searchable scanned PDF, then batch PDF password protect and unlock.

[question]
列出目前未实现的工具，并给出实现优先级

[try to solve]
## Context
The 2026-09-21 backlog review counted 274 catalog tools and treated four cross-theme jobs as the next build queue. The keyword tracker still described some of those jobs as unimplemented. This pass rechecked every named draft slug against `src/site/tool-catalog.d/` so the priority list matches the current catalog, not the older snapshot.

## Process
1. Read the keyword-to-tool funnel skill and `docs/seo/keyword-to-tool-tracker.md`, including the 2026-09-21 snapshot that points at `docs/seo/reviews/2026-09-21/tool-backlog-priority.md`.
2. Loaded all catalog shard slugs (278). Compared them with the sound F1–F13 draft list, the bulk-batch independent URLs, OCR N1–N5, text-converter T4/T5/T8, and the older defer slugs (paste cleaner, token counter, VLSM).
3. Spot-checked pages that exist but were previously marked as not fulfilling the original job: digital signature, PDF/A check, and PDF to DWG.

## Root cause / analysis
Page registration and capability are different questions. Four jobs called out as the cross-theme P1 on 2026-09-21 are now registered: `extract-text-from-a-scanned-pdf`, `bulk-strip-photo-exif`, `batch-watermark-pdf-drafts`, and `bulk-optimize-svg-icon-set`. Counting `build`/`defer` rows in the keyword pool would overstate the backlog, because many of those rows already have live slugs and stale verdicts.

What remains unimplemented is a set of named draft slugs that are still absent from the catalog. Priority follows three filters already used by the funnel: the job is a different control from a live neighbor, it can run in the browser by reusing an existing engine, and it is not a head-term attack. Model, database, and licensed-asset jobs stay later.

`add-digital-signature-to-pdf`, `check-pdf-a-compliance`, and `convert-pdf-to-dwg` are registered, so they are not new URLs. Their source comments still limit them to a visible SHA-256 stamp, a five-indicator screen, and ASCII DXF. Those original jobs (PKI/PAdES, profile-aware PDF/A, proprietary DWG) are unfinished capabilities on existing pages.

## Solution
Next implementation order, one or two tools per week:

1. `make-a-scanned-pdf-searchable` — scanned PDF in, searchable PDF out. Reuses the raster-plus-OCR path already used by scanned PDF to text and scanned PDF to Word. Must write a real transparent text layer; exporting the original pages again is not this job.
2. `batch-password-protect-pdfs` — same password on many owned PDFs, ZIP out. Neighbor is the live single-file `protect-pdf`.
3. `batch-unlock-owned-pdfs` — known password, owned files only, per-file wrong-password skip. Neighbor is live `unlock-pdf`. Needs an ownership statement.
4. If the next slot is audio rather than documents: `detect-bpm-of-a-song`, with candidate BPM, half/double-time notes, and tap correction. Lower-cost alternative: `tap-a-metronome-in-the-browser`.

Second wave: `batch-rotate-scanned-pdfs`, `bulk-resize-amazon-main-images`, `extract-text-from-a-word-document` (mammoth is already vendored), `convert-html-or-a-web-page-to-plain-text`, then `play-white-pink-or-brown-noise` and `tune-a-guitar-with-the-microphone`.

Hold: AVIF batch, hero WASM batch, grayscale/crop/page-number/folder-metadata batches, table-photo CSV, VLSM, PowerPoint to text, paste cleaner, and token counter. Sound jobs that need a model, a music database, or licensed beds (stems, vocal removal, TTS, song ID, voice clone) stay deferred until the dependency is named.

Do not open a second editor or a second transcription URL. File transcription and the audio hub need a capability check on the pages that already exist.

## Notes / boundaries
This is a planning readout. It does not change keyword-pool verdicts, open `work-tasks/`, or claim a `long_gap`. No SERP was refreshed in this pass. Weekly new-tool cap remains 1–2, each with at least three information-gain points versus its live neighbor.

[actions]
- Compared draft slugs in the 2026-09-21 backlog, bulk-batch split, OCR planner, and text-converter planner against `src/site/tool-catalog.d/`
