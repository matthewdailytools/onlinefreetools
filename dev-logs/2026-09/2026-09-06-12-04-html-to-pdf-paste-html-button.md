Date: 2026-09-06 12:04
Summary: Added a Paste HTML button beside Load URL that reads the clipboard (preferring text/html) into the source box and converts.
Visibility: people

[question]
Load URL 边上 增加一个 Paste Html 按钮，实现黏贴功能

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Convert HTML to PDF already had a URL fetch button and a textarea you could paste into by hand. The request was a dedicated Paste HTML control next to Load URL so clipboard content can be dropped in with one click.

## Process
1. Inserted `#htmlConvertBtnPasteHtml` after Load URL in the URL row (`btn-outline-secondary` so it stays distinct from Load URL).
2. On click, `navigator.clipboard.read()` prefers `text/html` (markup copied from a webpage), then `text/plain`, then `readText()`. Empty clipboard uses the existing empty error; permission failures show a new paste error and focus the textarea so Ctrl+V still works.
3. A successful paste writes the HTML source box and calls `runConvert()`, matching Load URL.
4. Ten-locale chrome strings: `tool_convert_html_to_pdf_html_paste` and `_err_paste`. English “Paste HTML”; Chinese 「粘贴 HTML」.
5. Bumped `PAGES_CACHE_VERSION` 4.27 → 4.28, merged i18n, prerendered the slug, gzipped, uploaded local R2, restarted wrangler on 8788.

## Root cause / analysis
The textarea already accepted paste, but the URL row had no clipboard action. Clipboard HTML MIME is more useful than plain text when the user copied a rendered selection from a browser.

## Solution
Button + clipboard read + convert. Scripts are still stripped by DOMPurify before preview/PDF. If the browser blocks clipboard read (HTTP, denied permission), the error tells the user to paste into the box.

## Notes / boundaries
- Requires a secure context (HTTPS or localhost) and a user gesture.
- Does not fetch a URL; that remains Load URL.

[actions]
- `src/pages/convertHtmlToPdfPage.ts`: Paste HTML button and clipboard helpers
- `src/site/i18n/tools/convert-html-to-pdf/{lang}.ts`: `html_paste`, `err_paste`
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.28
- `src/site/tool-catalog.d/convert-html-to-pdf.json`: `updatedAt` via tool:touch
