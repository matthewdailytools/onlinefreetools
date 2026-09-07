Date: 2026-09-07 22:07
Summary: HTML-to-Word gained an Advanced-settings Plain text checkbox: default stays structured Word; on, headings/tables/links/images flatten to editable paragraphs.
Visibility: people

[question]
能否实现，可以根据用户选择是否纯文字

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document

[try to solve]
## Context
After explaining that this tool maps HTML structure (not CSS layout) into Word, the user asked for a choice: keep that structured mapping, or export **plain text** only. The job is still one `.docx` download, not a `.txt` file and not a screenshot.

Default Convert (Advanced closed) had to stay the structured path: headings, lists, tables, hyperlinks, optional images. The new mode is opt-in inside the collapsed Advanced settings, same pattern as Include images.

## Process
Added checkbox `#chwPlain` (unchecked) under Include images in `convertHtmlWebPagesToWordDocumentPage.ts`. Checking it disables the images control so the two switches cannot fight.

`htmlToBlocks` now takes `plainText`. When it is on:

- `h1`–`h6` become ordinary paragraphs (no Word heading style).
- `ul`/`ol` items become paragraphs without `•` / `1.` prefixes.
- `table` is flattened with `flattenTablePlain`: each row is a paragraph, cells joined by tabs — no `docx.Table`.
- `img` is alt text only; Convert also forces `includeImgs` off.
- `inlineRuns(..., plain)` drops bold/italic and writes links as `label (https://…)`.

Ten-locale UI keys `plain_label` / `plain_hint` were written independently (zh 纯文字, en Plain text, es Solo texto, ja プレーンテキスト, …), and How / opts / rules mention the switch. Catalog `updatedAt` touched; this slug prerendered and gzipped.

Playwright against the new HTML: sample Convert produced `w:tbl`, `Heading1`, and `w:hyperlink`. After checking Plain text, Convert succeeded again: no table, no Heading1, no hyperlink object, and the sample link became `the help article (https://example.com/help)`.

## Root cause / analysis
“Plain text” here means **no Word objects for structure**, not “strip tags then dump one run.” Lawyers still get paragraphs they can copy; they do not get a Word table they have to delete, or Heading 1 they have to restyle. Putting the control in Advanced keeps the FreeConvert-style converter chrome: one Convert button, settings collapsed, sensible default.

A CSS-to-Word engine is still out of scope (see the previous CSS note). Plain text does not restore layout; it only opts out of structure mapping.

## Solution
Use **高级设置 → 纯文字** (English: Advanced settings → Plain text) when you want a draft of copy. Leave it off when you want editable headings and tables. Include images is ignored while Plain text is on.

Local Cache API still keys HTML by `PAGES_CACHE_VERSION` (now `4.59`). Restart the local Worker after that bump, or the pretty `/zh/tools/…` URL can keep serving the previous HTML without the checkbox.

## Notes / boundaries
- Output is still `.docx`, not `.txt`.
- Lists lose their list style; numbering is not reconstructed.
- Nested tables flatten one row at a time; inner tables are not pretty-printed.
- Isolation lint flags `wrangler.jsonc` (cache version) plus earlier shared fetch work in `src/tools/convertHtmlToPdf.ts`; set `CROSS_TOOL_UPDATE=1` if that gate must pass in the same working tree.

[actions]
- `src/pages/convertHtmlWebPagesToWordDocumentPage.ts`: `#chwPlain`, `flattenTablePlain`, `plainText` through `htmlToBlocks` / `inlineRuns` / Convert
- Ten-locale shards: `plain_label`, `plain_hint`; How / opts / rules mention the option
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.59
- Catalog touch, `merge:tools`, prerender + gzip this slug
