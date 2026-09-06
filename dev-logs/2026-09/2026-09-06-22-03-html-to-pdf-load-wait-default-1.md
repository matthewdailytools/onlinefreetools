Date: 2026-09-06 22:03
Summary: Change Convert HTML to PDF load-wait default from 3 seconds to 1 second.
Visibility: project

[question]
https://onlinefreetools.org/tools/convert-html-to-pdf  load wait sec设置为1秒

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
The HTML-to-PDF page had a **Load wait (sec)** control defaulting to 3. The request is to make the on-page default 1 second.

## Process
1. Set `defaultLoadWaitSec` from 3 to 1 in `src/pages/convertHtmlToPdfPage.ts` (input `value` and `DEFAULT_LOAD_WAIT_SEC`).
2. Updated `tool_convert_html_to_pdf_wait_hint` in all ten locale shards so the visible hint matches the new default.
3. Bumped catalog `updatedAt`, ran `build:site`, `lint:tool-page --require-html`.
4. Playwright on prerendered EN HTML: input value `"1"`, hint “Default is 1”.

## Root cause / analysis
The wait field already existed (range 0–30). Only the default and hint copy were wrong relative to the new product choice. Users can still raise the number when remote images stay blank.

## Solution
Default load wait is 1 second. Hint copy in en/zh/es/ar/pt/id/fr/ja/ru/de now says 1.

## Notes / boundaries
- Capture still waits for images plus the chosen extra seconds; 0 still skips the extra pause.
- Production cache may serve the old HTML until the next deploy / cache bump.

[actions]
- `src/pages/convertHtmlToPdfPage.ts`: `defaultLoadWaitSec = 1`
- `src/site/i18n/tools/convert-html-to-pdf/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`: wait_hint default 1
- `src/site/tool-catalog.d/convert-html-to-pdf.json`: `updatedAt`
- `npm run build:site`; `npm run lint:tool-page -- --slug=convert-html-to-pdf --require-html`
