Date: 2026-09-06 10:28
Summary: convert-html-to-pdf can load a page URL: the Worker fetches HTML once (SSRF-guarded), the tab sanitizes it, then html2pdf exports A4 in-browser.
Visibility: people

[question]
http://127.0.0.1:8788/zh/tools/convert-html-to-pdf  增加输入url载入html

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-to-pdf
Chinese: https://onlinefreetools.org/zh/tools/convert-html-to-pdf

[try to solve]
## Context
The tool already converted pasted HTML to PDF in the tab (html2pdf.bundle + DOMPurify). The brief and some locale copy mentioned URL preview, but the page only had a textarea. Chinese copy even said the tool does not fetch URLs. The browser cannot read cross-origin HTML (CORS), so a same-origin Worker GET is required, following on-page-seo / open-graph-preview.

## Process
1. Added `GET /api/tools/convert-html-to-pdf?url=` in `src/tools/convertHtmlToPdf.ts`, registered in `src/index.ts`. Reused `parseHttpUrlOrThrow` (adds `https://` when missing), `isBlockedHostname`, and `fetchHtmlFollowingRedirects` (per-hop private/localhost block, 10s abort, 2 MB cap). Success JSON: `{ html, finalUrl, status, inputUrl }`. Inject `<base href="finalUrl">` unless a `<base>` already exists so relative assets resolve against the source site.
2. Tool page: URL field + Load URL button; Enter submits. After a successful fetch, fill the textarea and call `runConvert()` (do not `click()` a disabled Convert button — browsers do not dispatch that). Sample still uses inline HTML, not a URL. Clear also clears the URL field.
3. Catalog `localProcessing` is `false` (honest: one edge fetch). Ten-locale copy updated so FAQ / How / Rules no longer claim “never fetched.” FAQ 6 covers scripts stripped, print CSS, logins, and JS-rendered SPAs.
4. Prerender + gzip + local R2 upload; `PAGES_CACHE_VERSION` 4.16 → 4.18; wrangler on 8788 restarted so the new route and HTML cache key apply.

## Root cause / analysis
Paste-only HTML cannot satisfy “load this live page.” A naive `fetch(url)` from the tab fails CORS. A Worker fetch must not follow redirects blindly (`redirect: 'follow'` only checks the first hop). After fetch, converting by clicking Convert while `setBusy` had disabled the button left the textarea filled and status stuck on “Fetching…”.

## Solution
- Worker: SSRF-guarded GET, HTML/XML or body starting with `<`, base href injection, no storage.
- Tab: sanitize (DOMPurify, allow `<base href>`), html2pdf.bundle, same A4 export as paste.
- Verify (local 8788): empty URL → 「请先填写网页地址。」; `http://127.0.0.1/` → blocked copy; `https://example.com/` fills source (including `<base>`), preview shows Example Domain, download enabled, status 「完成」. Sample on entry still succeeds.

## Notes / boundaries
- Scripts are stripped; login walls and client-rendered apps will not match the live page. Cross-origin images still depend on html2canvas `useCORS`.
- Homepage “processed on device / not uploaded” chips need `build:site` to pick up `localProcessing: false`; this pass only refreshed the tool HTML.
- Production still needs `upload:r2` + deploy; this session did not commit or push.

[actions]
- Added `src/tools/convertHtmlToPdf.ts` and `GET /api/tools/convert-html-to-pdf`
- Updated `src/pages/convertHtmlToPdfPage.ts` and ten `src/site/i18n/tools/convert-html-to-pdf/*.ts`
- Set catalog `localProcessing: false`; bumped `PAGES_CACHE_VERSION` to 4.18
