Date: 2026-09-05 21:07
Summary: Audited 37 PDF-related tools and corrected misleading capability claims, unsafe HTML previews, template-polluted localization, missing How steps, and stale keyword decisions.
Visibility: people

[question]
对 pdf工具 进行 review和修正

[try to solve]
## Context

The site had 37 PDF-related tools: 36 under the `pdf-docs` primary topic plus `images-to-pdf`. Existing mechanical SEO checks were green, but that did not establish that visible claims matched implementation, examples matched `loadSample()`, localized copy was natural, or similar URLs had distinct jobs.

The review therefore compared catalog metadata, page implementations, English and sampled localized shards, How/Rules/Example/FAQ sections, keyword records, and generated output. It also checked high-trust terms such as PDF/A compliance, digital signatures, and DWG conversion against what the browser code actually produced.

## Process

1. Inventoried all 37 PDF-related catalog entries, page modules, i18n shards, generated files, briefs, and keyword records.
2. Reviewed the implementations for local-processing claims, sample behavior, output types, error paths, unsafe DOM writes, and feature overlap.
3. Audited the ten-tool PDF scene batch for repeated How steps, OCR FAQs copied onto unrelated tools, mixed-language description fragments, and generic examples.
4. Compared high-risk titles with actual outputs:
   - The PDF/A page performed raw-byte heuristics, not ISO 19005 validation.
   - The “digital signature” page drew a visible SHA-256 mark, not a PKCS#7/PAdES signature.
   - The “DWG” page exported ASCII DXF text and page-border lines, not proprietary DWG.
   - The flipbook page rendered one canvas page at a time and downloaded the original PDF.
5. Ran page wiring, coverage, SEO, full-site generation, and single-tool verification gates. When removal of template padding exposed description-length and example-keyword failures, the descriptions were expanded with real inputs, outputs, steps, and limitations instead of restoring SEO filler.

## Root cause / analysis

The main content defect came from the one-shot PDF scene generator. It emitted one generic structure across unrelated jobs:

- “Click the main action button” instead of the actual CTA.
- An OCR/scanned-PDF failure FAQ even for tools that never extract text.
- Mixed Spanish fragments such as `El ejemplo al entrar` and `un resultado real` inside other locales.
- English descriptions that mentioned libraries and announced that the page contained a process or example instead of explaining the user outcome.

The SEO validator checked description length and selected words, but did not validate `how_item_*`, Example-to-sample consistency, localization quality, or whether a compliance-oriented title was supported by the implementation. Consequently, keyword padding could make the mechanical gate green while substantive information gain remained weak.

Three keyword intents also required a strict capability distinction. A visible integrity mark is not certificate signing; five raw-byte indicators are not PDF/A validation; and an ASCII DXF text export is not a DWG converter. These jobs remain deferred in the keyword funnel even though adjacent helper pages exist.

## Solution

### Capability and trust corrections

- Renamed the PDF/A experience to “Inspect PDF/A indicators” across ten locales.
- Replaced Pass/Fail with Found/Not found and added a prominent non-certification warning.
- Replaced the counter-intuitive linearization check with five explicit indicators: PDF header, uncompressed `pdfaid` XMP marker, `GTS_PDFA1` output intent, embedded-font stream marker, and absence of `/Encrypt`.
- Replaced the OCR FAQ because the indicator screen does not require a text layer.
- Linked to veraPDF validation and the PDF Association instead of presenting a PDF library as authority.
- Fixed the PDF/A sample and clear buttons, which had passed the wrong arguments to the HTML escaping helper and could render language codes instead of labels.
- Changed all locale H1s for the digital-signature page to describe a visible integrity mark while retaining the PKI/PAdES disclaimer.
- Changed all locale H1s for the DWG page to describe PDF text export to AutoCAD-readable DXF.

### Flipbook product correction

- Added a short CSS page-turn animation to the live canvas preview.
- Changed Download from the original PDF to a standalone `pdf-flipbook.html`.
- Embedded the source PDF bytes in the HTML export and included Previous/Next rendering controls.
- Documented that the exported HTML needs network access to load PDF.js, while the PDF content itself is not uploaded.
- Rewrote the English How, Rules, Example, and FAQ around the actual output and removed the false scanned-PDF failure claim in all locales.

### Security and implementation corrections

- Sanitized pasted HTML with DOMPurify before it enters the HTML-to-PDF preview and renderer.
- Sanitized Mammoth-generated DOCX HTML before preview and PDF conversion.
- Escaped ampersands and angle brackets in extracted PDF text before building the comparison diff HTML.
- Routed add-text initialization, sample, and clear behavior through the literal `loadSample()` entry point used by page wiring checks.
- Updated stale Protect PDF copy that said Unlock PDF had not shipped.

### Duplicate-intent correction

- `turn-pdf-into-editable-document` and `edit-pdf-text-online` previously used nearly the same extraction-and-rebuild flow, and one FAQ admitted that the main difference was labels.
- The editable-document tool now produces a separate editable UTF-8 `.txt` file and keeps rebuilt PDF as an optional secondary output.
- Its H1 and FAQ were updated across all ten locales to emphasize an editable text document. The edit-text page remains focused on changing wording and returning a rebuilt PDF.

### Information gain and localization

- Removed mixed-language description pollution from 81 PDF scene locale shards.
- Replaced false OCR FAQ pairs in 70 locale/tool combinations that do not depend on text extraction.
- Replaced generic “main action button” steps with each page's actual localized CTA.
- Added four localized ordered How steps to 11 older PDF tools that previously rendered only a paragraph.
- Rewrote eight English scene-tool metadata sets around actual input, output, example, and boundary.
- Expanded Chinese and Japanese descriptions with concrete workflow, sample, and limitation details so they pass the same content gate without keyword padding.

### Planning and documentation alignment

- Corrected the four high-risk tool briefs and locale review records.
- Reconciled PDF keyword-pool N1–N22 entries:
  - N1–N11, N13–N16, and N18–N21 now absorb into implemented tools.
  - N12 certificate signing, N17 standards-based PDF/A validation, and N22 proprietary DWG/vector conversion remain deferred.
- Updated the keyword tracker and bilingual README labels to match the corrected capabilities.

## Verification

- All 37 PDF-related pages passed `lint:tool-page --require-html`.
- Global `lint:seo` passed after merging the final i18n shards.
- Coverage gates passed for the four high-risk tools.
- `npm run build:site` completed, rebuilding all 205 tools across ten languages and the sitemap.
- `verify:tool` passed for `make-pdf-flipbook`, including coverage, page wiring, full build, HTML smoke, SEO, vendor, and isolation checks.
- IDE lint reported no errors in the modified page and i18n sources.

## Notes / boundaries

- `check-pdf-a-compliance` keeps its existing URL for continuity, but the visible product is intentionally an indicator screen. It must not be marked as covering standards validation.
- `add-digital-signature-to-pdf` keeps its URL but does not cover certificate signing, legal e-signatures, CMS, PKCS#7, or PAdES.
- `convert-pdf-to-dwg` keeps its URL but produces `.dxf` containing text entities and page-border lines only.
- The HTML flipbook is a portable client-side viewer, not a hosted publishing or analytics platform.
- The full-site build also refreshes shared generated outputs. Unrelated existing working-tree changes were not reverted.

[actions]
- Corrected PDF page implementations, catalog timestamps, and ten-locale i18n shards.
- Updated four high-risk briefs and locale review histories.
- Reconciled PDF keyword-pool and tracker decisions.
- Updated bilingual README tool labels.
- Rebuilt merged tool data, localized pages, home pages, and sitemap.
