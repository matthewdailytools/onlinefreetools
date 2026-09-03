Date: 2026-09-04 07:40
Summary: Shipped the remaining twelve PDF scene tools (Word/form/sign/edit/PDF-A/DWG) with catalog, ten-locale i18n, pages, and full site build.
Visibility: people

[question]
完成剩余12个新slug

[try to solve]
## Context
After the first ten PDF scene tools shipped, twelve planner slugs still had `work-tasks` briefs (`ready` / `briefs-ready`) but no catalog shards, pages, or i18n. The user asked to finish those twelve so the PDF keyword planner build set is complete.

Remaining slugs: `convert-word-document-to-pdf`, `turn-pdf-into-word-document`, `edit-pdf-text-online`, `edit-pdf-form-fields`, `fill-out-pdf-form`, `make-pdf-fillable`, `create-pdf-form`, `sign-pdf-document`, `add-digital-signature-to-pdf`, `turn-pdf-into-editable-document`, `convert-pdf-to-pdf-a`, `convert-pdf-to-dwg`.

## Process
1. Confirmed `coverage:gate --phase=0b` green for all twelve (coverage tables + intent review already in `02` / `03`).
2. Implemented in three parallel batches (forms; Word/sign; edit/PDF-A/DWG): each got catalog `page.style: opts`, icon SVG, `*Page.ts` with `loadSample()`, and ten locale shards.
3. Merged catalog (185 → **197** tools), fixed YMYL refs on `sign-pdf-document` (≥2 references), and added reverse `related` edges so new slugs are not orphans.
4. Appended all twenty-two PDF scene tools to README (zh + en).
5. Ran `build:site` (197 × 10 prerender), `lint:tool-page --require-html` for each of the twelve, and `lint:seo` (link fails cleared).

## Root cause / analysis
Client-side honesty mattered more than pretending full desktop parity:
- Word↔PDF uses mammoth / text→OOXML, not perfect layout or OCR.
- Form tools use pdf-lib AcroForm APIs.
- Sign is appearance stamp; “digital signature” is SHA-256 + visible mark, not PKCS#7.
- PDF/A is best-effort metadata/fonts, not veraPDF.
- “DWG” exports ASCII DXF AutoCAD can open.

Doorway risk is avoided by keeping one distinct task per slug (planner N2–N12, N15–N16, N22).

## Solution
All twelve tools are live in catalog, homepage cards, prerendered HTML, and README. Coverage phases 0b/2/4 pass; HTML smoke passes; SEO link validator OK for these tools.

## Notes / boundaries
- Scanned PDFs without a text layer fail on extract/edit/editable/Word paths (no OCR).
- Digital-signature page must not be marketed as certificate PKI; disclaimer is YMYL.
- Reverse related edits touched existing PDF shards (`convert-html-to-pdf`, `extract-text-from-pdf`, `check-pdf-a-compliance`, `write-pdf-document-online`, `pdf-to-jpg`, `add-text-to-pdf-file`) — use `CROSS_TOOL_UPDATE=1` for isolation checks.
- Local verify: open `/tools/convert-word-document-to-pdf` and `/zh/tools/fill-out-pdf-form` after `start:dev`.

[actions]
- Added 12 catalog shards, icons, pages, and 120 i18n shards under `src/site/i18n/tools/{slug}/`
- Updated related edges on six existing PDF tools; fixed sign-pdf references
- Updated README Tools List (zh/en) for 22 PDF scene tools
- `npm run merge:tools`; `npm run build:site`; lint:tool-page --require-html ×12; lint:seo
- Marked `03-locale-briefs.md` status `i18n-done` for the twelve slugs
