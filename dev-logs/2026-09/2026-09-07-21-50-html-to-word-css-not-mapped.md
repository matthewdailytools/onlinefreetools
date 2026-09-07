Date: 2026-09-07 21:50
Summary: HTML-to-Word ignores author CSS on purpose: it maps structure (headings, lists, tables, links) into editable Word styles, not a laid-out screenshot.
Visibility: people

[question]
为什么css样式不起作用

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document
Related: https://onlinefreetools.org/tools/convert-html-to-pdf

[try to solve]
## Context
After a successful Convert of a live page (for example hao123.com), the downloaded .docx did not look like the website. The user asked why CSS had no effect.

## Process
Checked `inlineRuns` / `htmlToBlocks` in `convertHtmlWebPagesToWordDocumentPage.ts`. The walker maps tags, not stylesheets: `h1`–`h6` become Word heading styles; `ul`/`ol` become prefixed list paragraphs; `table` becomes a Word table; `a[href^=http]` becomes `ExternalHyperlink`; `strong`/`em` set bold/italics on `TextRun`. It never reads `class`, `style`, `<link rel=stylesheet>`, flex/grid, colors, or webfonts.

That matches the tool contract in `work-tasks/convert-html-web-pages-to-word-document/02-tool-info.md` and the zh FAQ: this page is editable Word, not an A4 print PDF and not a screenshot. Neighbor **将 HTML 转换为 PDF** still loads CSS in an iframe and paints with html2canvas.

## Root cause / analysis
Word OOXML is not a CSS viewport. Applying a site’s stylesheets would mean either (1) a raster stuffed into Word (same job as PNG/JPG/PDF capture) or (2) a large, lossy CSS-to-Word style engine (fonts, floats, position:absolute, media queries). Both fight the information gain of this slug: a lawyer can edit a heading that is still a heading. Hao123’s portal look lives in CSS and images; stripping CSS is expected, not a missed `<link>`.

`<style>` is in the skip list so stylesheet text does not become body paragraphs. That is intentional.

## Solution
No mapper change for this question. Use HTML-to-Word when the job is editable structure. Use HTML-to-PDF or batch webpage PNG/JPG when the job is “looks like the page.” Page copy already states CSS will not be pixel-perfect.

## Notes / boundaries
Inline `style="color:…"` / `font-size` is also ignored today; only tag-level bold/italic. Mapping a small set of inline properties would still not restore a portal layout.

[actions]
- None (explanation only; no code change).
