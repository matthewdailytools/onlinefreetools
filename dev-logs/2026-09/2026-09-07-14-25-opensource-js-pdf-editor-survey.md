Date: 2026-09-07 14:25
Summary: Survey of open-source JavaScript PDF editors: no Acrobat-class true text editing; three viable layers are programmatic mutation, annotation editors, and overlay WYSIWYG.
Visibility: people

[question]
调研，目前开源的js pdf editor

[try to solve]
## Context
The question is a landscape survey of open-source JavaScript PDF editors, not a request to ship a new tool. The site already vendors `pdf-lib`, `@cantoo/pdf-lib`, and PDF.js, and already ships overlay-style tools such as `edit-pdf-text-online` (cover-and-replace) and `add-text-to-pdf-file`.

## Process
Compared GitHub/npm projects that search engines label as “JS PDF editor”: Mozilla PDF.js (including `AnnotationEditorLayer` and `saveDocument()`), Hopding `pdf-lib` vs the Cantoo fork, EmbedPDF (PDFium WASM), pdfme, ngx-extended-pdf-viewer, Stirling-PDF, GigaPDF, freePDF/EditoraPDF, plus commercial SDKs that are often mixed into the same lists (Nutrient, Apryse, PDF.js Express).

Checked what each project actually writes back into a PDF: content-stream text, annotation objects, form fields, or a new overlay drawn on export.

## Root cause / analysis
PDF is a page-description format. Existing text is encoded in content streams with subset fonts and custom encodings. No mature open-source browser library rewrites that stream the way Word edits a paragraph.

What exists instead:

1. **Programmatic mutation** — `pdf-lib` (MIT, last official release 1.17.1 on 2021-11-06, ~8.6k stars, effectively unmaintained) and `@cantoo/pdf-lib` (active MIT fork with SVG). Merge, split, rotate, draw text/images, fill/flatten forms. No viewer UI.
2. **Annotation editors** — PDF.js (Apache-2.0, ~53.8k stars, `pdfjs-dist` 6.x) supports FreeText / Ink / Stamp / Highlight and `PDFDocumentProxy.saveDocument()`. EmbedPDF (MIT wrapper + Apache-2.0 PDFium WASM ~4.4MB, ~4.5k stars) adds richer annotations and true redaction. Stirling-PDF (~89k stars) is a self-hosted product whose frontend now uses `@embedpdf`; it is not a drop-in JS SDK.
3. **Overlay WYSIWYG** — render with PDF.js, place Konva/Fabric overlays, export with pdf-lib by covering and redrawing. This is the stack used by freePDF, EditoraPDF, and GigaPDF (AGPL-3.0). Stars are low; licenses and maturity vary.

True content-stream edit remains unsolved in portable JS. Node libraries such as HummusJS/Muhammara can touch streams but still fail on subset fonts and reflow. Commercial SDKs (Nutrient/PSPDFKit, Apryse/WebViewer, PDF.js Express) sell the remaining gap.

pdfme (~4.8k stars, MIT) is a template designer/generator, not a general editor of arbitrary PDFs.

## Solution
For this site: keep pdf-lib + PDF.js for page ops, stamps, form fill, and cover-and-replace text. Do not promise Acrobat-style in-place text editing. Evaluate EmbedPDF only if a future tool needs true redaction or annotation objects persisted into the PDF, and only if the ~4.4MB WASM binary can be vendored into `public/vendor/`. Do not depend on GigaPDF (AGPL) or one-star overlay apps.

## Notes / boundaries
Snapshot date: 2026-09-07. Star counts and npm versions move. Nutrient comparison articles overstate PDF.js save unreliability: current `saveDocument()` does serialize FreeText/Ink/Stamp/Highlight as PDF annotation objects. Overlay editors still do not rewrite original glyphs.

[actions]
- Documented the landscape for later tool decisions; no catalog or page code changed.
