Date: 2026-09-06 10:32
Summary: URL-to-PDF cannot faithfully replay a live page by proxying JS; CSS/image/font URL rewriting through the Worker can reduce html2canvas CORS gaps, while JS-heavy pages need a headless browser instead.
Visibility: people

[question]
有没有办法页面的js和css通过代理实现解决跨域问题

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
After adding URL fetch on convert-html-to-pdf, the Worker returns HTML (with `<base href>`) and the tab sanitizes then snapshots with html2canvas/html2pdf. Users asked whether proxying the page’s JS and CSS would fix remaining cross-origin gaps (missing styles, blank images, empty SPAs).

## Process
Compared three layers: (1) what the browser applies in the preview DOM, (2) what html2canvas can read into a canvas, (3) what executing third-party JS would do on this origin.

## Root cause / analysis
Cross-origin `<link rel="stylesheet">` usually **applies** in the preview, but html2canvas often cannot clone those sheets, and `<img>` / `@font-face` / CSS `url()` need CORS or they taint / drop. `useCORS: true` only helps when the **origin site** sends `Access-Control-Allow-Origin`.

Proxying **files** to same-origin can fix that for CSS/images/fonts: rewrite `href`/`src`/`url()` to a Worker asset route, fetch with the existing SSRF guards, return CORS-open bytes. Worker subrequest and size limits still cap how complete that tree can be.

Proxying **JS** does not recreate the live page. Scripts would run as onlinefreetools.org (XSS), would not see the source site’s cookies, and their `fetch` to the original APIs would still be CORS-blocked unless we became an open reverse proxy. DOMPurify currently strips scripts for that reason. A real match for SPAs is headless Chromium (e.g. Cloudflare Browser Rendering), not in-tab html2pdf.

## Solution
Recommendation recorded, not implemented this round: do not execute proxied JS in the tool tab. If visual fidelity of static pages matters, a bounded CSS/image/font rewrite+proxy is the next incremental step. JS-rendered apps stay out of scope for this architecture.

## Notes / boundaries
Current sanitizer removes scripts and most event handlers before html2canvas. An asset proxy would still be unauthenticated (no user cookies to the target site).

[actions]
- No code change; architecture note for convert-html-to-pdf URL mode
