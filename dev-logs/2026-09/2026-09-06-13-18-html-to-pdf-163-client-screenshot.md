Date: 2026-09-06 13:18
Summary: 163.com HTML-to-PDF on Cloudflare is a client screenshot (html2canvas in the tab); the Worker only fetches HTML and optionally proxies images.
Visibility: people

[question]
对于部署在cloudflare，目前这个https://www.163.com的截图是怎么实现，服务端还是客户端

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
Need a precise split of server vs client when converting a live URL such as https://www.163.com on the Cloudflare deployment.

## Process
Traced `loadFromUrl` → `GET /api/tools/convert-html-to-pdf?url=` → sanitize into a sandboxed iframe → optional `GET /api/tools/convert-html-to-pdf/asset` → `html2pdf().from(documentElement)` with html2canvas.

## Root cause / analysis
There is no Cloudflare Browser Rendering / Puppeteer step. The Worker never paints pixels. html2canvas runs in the visitor’s browser against the iframe DOM (`sandbox="allow-same-origin"` without `allow-scripts`, so 163.com’s own JS does not run).

## Solution
Call it a **hybrid fetch + client screenshot**: server gets HTML (and some images); client draws the PDF.

## Notes / boundaries
Scripts, login walls, and JS-only modules on 163.com stay empty in both preview and PDF.

[actions]
- Analysis only
