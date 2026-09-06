Date: 2026-09-06 17:18
Summary: Sign PDF Document gained corner/center position radios with editable X/Y (bottom-right default) and a page dropdown that lists every page plus all pages.
Visibility: people

[question]
增加中间，左上角，左下角，右上角，右下角的快捷复选和对应可编辑的坐标，默认右下角选中。页码提供所有页码的选择。

## Tool links (English)
- https://onlinefreetools.org/tools/sign-pdf-document
Chinese: https://onlinefreetools.org/zh/tools/sign-pdf-document

[try to solve]
## Context
The stamp controls were three number fields: X, Y, and page. Default X=72, Y=72 sits near the PDF origin (bottom-left in PDF points), which is easy to miss and tedious to aim at a corner. Page was a free number, so it did not list the real pages of the loaded file or offer “all pages”.

## Process
1. Mapped five mutually exclusive position radios onto the page in a spatial grid: top-left, top-right, center, bottom-left, bottom-right. Bottom-right is checked by default.
2. Kept X and Y as editable point fields. Choosing a radio fills them from the current page size, signature stamp size (160 pt wide, pad aspect), and a 36 pt margin. Editing X or Y by hand clears the radio so the typed numbers are what get stamped.
3. Replaced the page number input with a `<select>`: “All pages” plus one option per page (`第 {n} 页` / `Page {n}`), rebuilt when a PDF loads.
4. `stampPng` loops the selected indexes. With a preset still selected, each target page computes its own corner/center from that page’s width/height (needed when page sizes differ). With custom coordinates, the same X/Y apply to every chosen page.
5. Sample load and file accept both call `refreshPageMeta` before preview/stamp so the dropdown and coordinates match the document. Browser check on the local Chinese URL: default bottom-right (224, 36) on the 420×300 sample; top-left and center fill different numbers; apply succeeds; editing X unchecks the radio.

## Root cause / analysis
PDF user space origin is bottom-left, so “top” means a larger Y. Shortcuts must use page size, not a fixed 72,72. Radios (not independent checkboxes) because one stamp has one anchor. “所有页码的选择” is implemented as a real page list plus an all-pages option, not a numeric spinner.

## Solution
- Position radios: 中间 / 左上角 / 左下角 / 右上角 / 右下角 (default 右下角).
- Editable X/Y stay in sync with the selected shortcut until the user types a custom value.
- Page select: 全部页, then every page of the loaded PDF.
- How step 3 and the example copy in ten locales mention the new controls.

## Notes / boundaries
- Coordinates are PDF points, origin bottom-left, same as pdf-lib `drawImage`.
- Changing page in the dropdown while a preset is selected recalculates X/Y for that page.
- All-pages + a preset stamps each page’s own corner; mixed page sizes will not share one raw X/Y.
- This remains a visible PNG stamp, not a certificate signature.

[actions]
- Added position radios, per-page coordinate math, and all-pages select in `src/pages/signPdfDocumentPage.ts`
- Added position/page i18n keys and updated How/example in all ten `src/site/i18n/tools/sign-pdf-document/` shards
- Bumped catalog `updatedAt`; merged, prerendered, gzipped, and seeded local R2
