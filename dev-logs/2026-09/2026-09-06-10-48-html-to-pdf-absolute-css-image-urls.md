Date: 2026-09-06 10:48
Summary: URL fetch for convert-html-to-pdf now rewrites CSS and image references to absolute http(s) URLs instead of inlining file bodies.
Visibility: people

[question]
css和图片返回完全链接引用即可

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
The previous direction was to fetch CSS/JS and embed their bodies in the returned HTML. The user then asked to keep CSS and images as **complete URL references** only—no inlining.

## Process
Removed the extra Worker fetches that pulled stylesheet and script bytes. The HTML API still: (1) GET the page with SSRF guards, (2) inject `<base href>` as a fallback, (3) walk the HTML with HTMLRewriter and rewrite `link[href]`, `img[src]/srcset`, `source`, `video[poster]`, SVG `image`, `input[type=image]`, inline `style` `url()`, and `<style>` `url()`/`@import` to absolute http(s) URLs resolved against the final page URL. `data:`, `blob:`, hash, and blocked hosts are left unchanged.

## Root cause / analysis
Inlining CSS/JS costs Worker subrequests and still does not make html2canvas see cross-origin fonts/images. Absolute URLs are enough for the browser (and `<base>`) to request assets from the origin site. Scripts remain stripped in the tab before PDF.

## Solution
`src/tools/convertHtmlToPdf.ts` returns one HTML document whose CSS/image refs are absolute. Copy in ten locales states that rewrite. Local wrangler must be restarted so the new Worker handler is live.

## Notes / boundaries
External CSS files are not downloaded, so `url()` *inside* those files is unchanged (the file is still requested from the original host). Cross-origin images can still fail html2canvas without CORS. JS is not executed.

[actions]
- Replaced CSS/JS body inlining with absolute URL rewrite for CSS and images
- Updated ten-locale url_hint / faq_a6; PAGES_CACHE_VERSION 4.19
