Date: 2026-09-06 11:57
Summary: Remote WebP (and AVIF/SVG/ICO) images are same-origin proxied and rasterized to PNG before html2canvas, so the HTML preview and A4 PDF share the same pixels.
Visibility: people

[question]
需要一致，有没有办法解决远程webp

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
html2canvas throws `Unsupported image type` on WebP/AVIF/SVG backgrounds, so Convert HTML to PDF used to strip those assets. The iframe preview still showed them, so 163.com and other remote pages looked different from the downloaded PDF. Direct browser `drawImage` of a cross-origin `<img>` also taints the canvas (no CORS on typical CDNs).

## Process
1. Added `GET /api/tools/convert-html-to-pdf/asset?url=` on the Worker: SSRF checks (same private-host block as HTML fetch), 8s timeout, 1.5 MB cap, magic-byte sniff so HTML cannot be proxied as an image. Returns the original bytes with a sniffed `Content-Type`.
2. After the preview iframe loads, the parent walks `<img>` and computed `background-image` URLs (max 80, concurrency 4). Each remote file is fetched through the proxy. WebP/AVIF/SVG/ICO are decoded with `createImageBitmap` (fallback `Image`) and written as `data:image/png`. PNG/JPEG/GIF become data URLs via `FileReader`. Failures are ignored per asset.
3. The iframe DOM is rewritten in place, then html2canvas snapshots that same document. `onclone` still drops leftovers that are not png/jpeg/gif/data/blob so one bad URL cannot fail the whole PDF.
4. Capture uses `document.documentElement` and `windowWidth`/`width` equal to the iframe client width so pagination is closer to the preview pane.
5. Local checks: proxy returns gstatic WebP (`RIFF/WEBP`, 200); localhost is blocked; a page with `https://www.gstatic.com/webp/gallery/1.webp` ends with `data:image/png` in the iframe, status「完成」, download enabled, no pageerror. Sample HTML still converts.

## Root cause / analysis
html2canvas inspects the URL/MIME, not the decoded bitmap, so a displayed WebP is still illegal for capture. The browser *can* decode WebP if the bytes are same-origin. The Worker proxy supplies those bytes; canvas → PNG data URL is a type html2canvas already supports. Mutating the preview DOM (not only the clone) keeps the two views aligned.

## Solution
Proxy + rasterize before capture. Preview and PDF now share PNG data URLs for previously unsupported remote images. Scripts still do not run, so JS-built modules on 163.com stay empty in both views. Cap of 80 images avoids hanging on huge homepages.

## Notes / boundaries
- Do not set `allow-scripts` on the preview iframe.
- Private/localhost image URLs stay blocked.
- html2canvas still cannot match every CSS feature of a live desktop tab.

[actions]
- `src/tools/convertHtmlToPdf.ts`: `handleConvertHtmlToPdfAssetApi`, magic-byte sniff
- `src/index.ts`: `GET /api/tools/convert-html-to-pdf/asset`
- `src/pages/convertHtmlToPdfPage.ts`: `prepareDocumentImages` before html2pdf
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.27
- `src/site/tool-catalog.d/convert-html-to-pdf.json`: `updatedAt`
