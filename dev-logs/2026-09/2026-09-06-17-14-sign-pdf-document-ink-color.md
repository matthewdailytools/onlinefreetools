Date: 2026-09-06 17:14
Summary: Sign PDF Document now lets you pick ink color for typed names and handwritten strokes, including black/navy/blue/red swatches.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/sign-pdf-document  增加签名颜色

## Tool links (English)
- https://onlinefreetools.org/tools/sign-pdf-document
Chinese: https://onlinefreetools.org/zh/tools/sign-pdf-document

[try to solve]
## Context
The Sign a PDF document tool stamped a PNG of a typed name or a pad drawing onto a page. Ink was hardcoded to navy `#1a237e` in both the canvas stroke and the typed-name `fillStyle`, so users could not match a blue ballpoint, black ink, or a red mark.

## Process
1. Confirmed the page UI in `src/pages/signPdfDocumentPage.ts`: type/draw radios, name field, pad, X/Y/page, then `embedPng`.
2. Added a labeled color picker (`#signPdfColor`) next to the name field, an `Aa` live preview, and four common ink swatches (black `#111111`, navy `#1a237e`, blue `#1565c0`, red `#c62828`).
3. Wired `getInkColor()` / `applyInkColor()` so:
   - new pad strokes use the current picker value;
   - typed-name PNG uses the same value at stamp time;
   - swatches sync `aria-pressed` and the preview color.
4. Added `tool_sign_pdf_document_color_label` in all ten locales and updated How step 2 so the visible procedure matches the new control.
5. Ran `tool:touch`, `lint:tool-page` (source + `--require-html`), `merge:tools`, prerender + gzip for this slug, and `upload:r2:local`. Local Cache API still served the previous HTML until `PAGES_CACHE_VERSION` moved to `4.54` and wrangler reloaded.
6. Browser check on `http://127.0.0.1:8788/zh/tools/sign-pdf-document`: label 签名颜色, default `#1a237e`, red swatch → `#c62828`, Stamp & preview succeeded, PDF preview contained red signature pixels.

## Root cause / analysis
Color was never a catalog option; it was two magic hex literals. Typed and draw modes share one PNG pipeline, so one control is enough. Existing pad pixels stay as drawn (changing color mid-stroke only affects new ink), which matches typical signature-pad behavior and avoids storing path history.

Local 8788 can look unchanged after prerender because tool HTML is Cache API → R2 gzip, not the Assets file on disk. A query-string cache miss showed the new markup while the canonical URL still served the old body until the cache version changed.

## Solution
- UI: `签名颜色` / `Ink color` picker + swatches + `Aa` preview.
- Runtime: `getInkColor()` returns `#rrggbb` or falls back to `#1a237e`.
- Draw: `strokeStyle` is applied in `bindPad()` and again on pointer down.
- Type: `typedSigPng()` uses `fillStyle = getInkColor()`.
- Default navy is unchanged, so the auto-loaded sample still looks like the previous stamp unless the user picks another color.

## Notes / boundaries
- This is a visible appearance stamp, not a certificate signature. Color does not add PKI, locking, or legal weight.
- Changing ink after drawing does not recolor old strokes; clear the pad or draw again.
- `lint:tool-isolation` for this slug still fails on a dirty working tree from unrelated files; this change only edits the sign-pdf-document page, its i18n shards, catalog `updatedAt`, and the local cache version.

[actions]
- Added ink color picker, swatches, and color application in `src/pages/signPdfDocumentPage.ts`
- Added `color_label` and How step 2 updates in all ten `src/site/i18n/tools/sign-pdf-document/*.ts` shards
- Bumped catalog `updatedAt`; merged, prerendered, gzipped, and seeded local R2 for `sign-pdf-document`
- Set `PAGES_CACHE_VERSION` to `4.54` so local 8788 served the new HTML
