Date: 2026-09-06 16:29
Summary: Edit PDF text now paints replacements onto the original pages, so photos, graphics, and unedited lines stay.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/edit-pdf-text-online  pdf编辑应该保留格式和图片

## Tool links (English)
- https://onlinefreetools.org/tools/edit-pdf-text-online
Chinese: https://onlinefreetools.org/zh/tools/edit-pdf-text-online

[try to solve]
## Context
The Edit PDF text online tool extracted the text layer into a textarea, then on Apply created a brand-new blank PDF and reflowed the wording with a simple Helvetica/system-font layout. Photos, graphics, page size, and original coordinates disappeared. Users who only needed to fix a word still lost the rest of the page.

## Process
1. Confirmed Apply called `rebuildPdfFromText`, which `PDFDocument.create()`d empty A4 pages and `drawPageText`d every line from the top margin.
2. The original brief already described a pdf-lib overlay, not a rebuild. The implementation had drifted.
3. Replaced the rebuild with: load the source PDF, keep every original page, cover only changed lines with a white rectangle at the extracted pdf.js bbox, then draw the new string at the same x/y/size. Unchanged lines are skipped so original glyphs stay. Large x-gaps on the same baseline are split so a two-column gap (or a photo sitting between columns) is not painted over.
4. Sample PDF now embeds a blue/gold color-block PNG beside two Helvetica lines. `loadSample` changes `sample.` to `edited.` before Apply, so the demo is an edit that must keep the picture.
5. Ten-locale copy that said “simple rebuild / fonts and columns are not kept” was rewritten to match the overlay behavior. Cache version 4.50 so local/production HTML Cache API drops the old script.

## Root cause / analysis
pdf-lib cannot rewrite individual glyphs inside an existing content stream. The previous workaround—throw the page away and typeset a new one—was simple but destroyed everything that was not text. Overlaying on `PDFDocument.load` keeps XObjects (images), vector art, and page boxes. Covering only changed line boxes is a visual edit, not true in-place font editing: replacement text may use Helvetica or a rasterized system font, and a much longer replacement wraps inside the original line width so it is less likely to run into a nearby photo.

## Solution
- `src/pages/editPdfTextOnlinePage.ts`: extract line geometry from pdf.js `getTextContent`; Apply uses `applyEditsOnOriginalPdf`.
- Sample includes a 96×96 color-block image; local Chrome check after Apply: status「完成」, download enabled, editor contains `edited.`, canvas **9216** blue `#1A6FB5` pixels and **5184** gold `#F4D35E` pixels (the full 120×120 CSS-scaled photo), no `pageerror`.
- i18n shards for all ten locales plus README one-liners updated so the page no longer claims a blank-page rebuild.

## Notes / boundaries
- Scanned PDFs with no text layer still fail (no OCR). Encrypted files still error.
- This is not Acrobat-style glyph editing. Unedited text stays selectable; replaced lines are covered and redrawn.
- Very long replacements wrap downward and may overlap the line below. Colored backgrounds behind text become a white patch.
- `PAGES_CACHE_VERSION` is 4.50. Production still needs R2 upload of the new HTML.

[actions]
- `src/pages/editPdfTextOnlinePage.ts`: overlay edits on original pages; sample PDF with photo
- `src/site/i18n/tools/edit-pdf-text-online/{en,zh,es,ja,de,fr,pt,ru,id,ar}.ts`: copy matches overlay behavior
- `README.md`: zh/en tool list lines
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.49 → 4.50
- `npm run tool:touch -- --slug=edit-pdf-text-online`
