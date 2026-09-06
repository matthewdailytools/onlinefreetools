Date: 2026-09-06 23:30
Summary: Baidu and 163.com failed in batch URL-to-PDF because the no-script capture iframe followed Baidu’s noscript refresh and because huge homepages overflow the canvas; the same fetch API already ran in URL order.
Visibility: people

[question]
输入：https://www.baidu.com 和 https://www.163.com ,显示不能转化为pdf，分析原因，给出解决方案。为什么不能按url顺序实现 convert-html-to-pdf ？

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-pdf
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-pdf

[try to solve]
## Context
Pasting `https://www.baidu.com` then `https://www.163.com` into Batch convert web pages to PDF marked both rows as “could not be turned into a PDF”. The question is also why the batch tool does not just call Convert HTML to PDF once per URL, in list order.

## Process
1. Called production `GET /api/tools/convert-html-to-pdf?url=` for both addresses. Both returned HTTP 200 with HTML (Baidu ~703 KB, 163.com ~245 KB, `status: 200`). The Worker fetch is not the failure.
2. Compared batch vs Convert HTML to PDF: batch already fetches that same API **serially, in paste order**, then runs an inlined copy of the neighbor’s html2pdf capture (isolation does not allow a shared `src/pages/site/*.ts` helper owned by one new slug). It cannot open the neighbor **page** in a loop — that UI is one textarea + one preview, not a queue.
3. Reproduced capture in headless Chrome with the fetched Baidu HTML in a `sandbox="allow-same-origin"` iframe (no `allow-scripts`, same as production). Within two seconds the **top window** was at `https://www.baidu.com/baidu.html?from=noscript`. Baidu’s HTML contains `<noscript><meta http-equiv="refresh" content="0; url=http://www.baidu.com/baidu.html?from=noscript" /></noscript>`. Capture never runs page JS, so the noscript refresh fires. The first URL in the user’s list is Baidu, so it can wreck the tab before 163.com starts.
4. 163.com HTML has no refresh. Remaining risks after a surviving tab: missing `phone` on `<html>` in the batch sanitizer (163 CSS keys off `html[phone=1]`), and full-height html2canvas at `scale: 2` exceeding the browser canvas edge (~8192–16384 px) on a news homepage.

## Root cause / analysis
Failure is **screenshot / navigation**, not “batch forgot to use convert-html-to-pdf”. URL order was already implemented. Baidu’s noscript refresh is lethal in a no-script iframe; a portal homepage can still OOM or throw on an uncapped canvas. Scripts stay off on purpose (XSS). The PDF cannot match a live logged-in desktop tab.

## Solution
- Strip `<noscript>…</noscript>` and `meta http-equiv=refresh` before DOMPurify; forbid `noscript`. Applied on **both** tool pages so Load URL on Convert HTML to PDF does not jump away either.
- Keep `phone` on the batch sanitizer so 163.com’s `html[phone=1]` rules still apply.
- Cap capture edge at 8192 px and lower scale; html2canvas `timeout` 30s; keep the capture iframe in the layout at `opacity: 0` instead of `left: -9999px`.
- Product limit remains: no third-party JS, so Baidu/163 PDFs are the static HTML+CSS shell, not the infinite-scroll app.

## Notes / boundaries
- Live Convert all against these two hosts was not re-run in a headed tab after the strip (production HTML API was checked; noscript refresh was confirmed in the fetched Baidu document).
- Combining many PDFs into one file is still `combine-files-into-one-pdf`.
- Headless Browser Rendering is out of scope on the Cloudflare Free CPU budget.

[actions]
- `src/pages/batchConvertWebPagesToPdfPage.ts` (strip refresh, `phone` attr, canvas cap, on-screen iframe)
- `src/pages/convertHtmlToPdfPage.ts` (same noscript/refresh strip)
- `npm run tool:touch -- --slug=batch-convert-web-pages-to-pdf,convert-html-to-pdf`
- `npm run merge:tools`
- `node scripts/prerender-tool-pages.mjs --slug=batch-convert-web-pages-to-pdf,convert-html-to-pdf`
- `npm run lint:tool-page -- --slug=batch-convert-web-pages-to-pdf --require-html`
- `npm run lint:tool-page -- --slug=convert-html-to-pdf --require-html`
