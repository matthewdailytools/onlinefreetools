Date: 2026-09-07 21:46
Summary: Hao123.com Convert failed because the apex host only returns a meta-refresh stub; the fetch API now follows that hop to www.hao123.com.
Visibility: people

[question]
本地测试：https://hao123.com 点击转换还是失败

## Tool links (English)
- https://onlinefreetools.org/tools/convert-html-web-pages-to-word-document
Chinese: https://onlinefreetools.org/zh/tools/convert-html-web-pages-to-word-document

[try to solve]
## Context
Local Convert on the HTML-to-Word URL tab with https://hao123.com still showed the generic convert error after the sanitize/Packer hardening. https://www.hao123.com on the same page succeeded.

## Process
Called `GET /api/tools/convert-html-to-pdf?url=https://hao123.com` on wrangler at 127.0.0.1:8788. The Worker followed HTTP redirects to `https://img.hao123.com/manual_res_2023/redict/to_www.html` and returned 160 bytes: a `<meta http-equiv="refresh" content="0.5;url= https://www.hao123.com?from=offline_host ">`. No article text. `htmlToBlocks` then threw `empty`.

The same API for `https://www.hao123.com` returned ~528 KB with `<title>hao123_上网从这里开始</title>`. Playwright Convert of that URL enabled Download in 1.8s. Playwright Convert of the apex URL failed in 387ms with `Error: empty`.

Browsers follow that meta refresh; `fetchHtmlFollowingRedirects` only follows HTTP 3xx. The www homepage also contains a *noscript* refresh to `/?__noscript__-=1`; blindly following every refresh would fetch the noscript variant of the real site.

## Root cause / analysis
hao123’s bare domain is an interstitial, not the portal. Mapping the interstitial is correctly “no blocks,” but that is the wrong document. Follow refresh only when the HTML is a small stub (≤8 KB and almost no visible text), delay ≤ 2s, target is http(s) and not a blocked host, and noscript tags are stripped first so the real homepage is left alone.

## Solution
`handleConvertHtmlToPdfFetchApi` now loops up to three extra hops through such stubs, then absolutizes the final page. The Word page also follows one client hop if the API still returns a stub. After the Worker reload, the API for https://hao123.com returned `finalUrl=https://www.hao123.com/?from=offline_host` (~527 KB). Playwright Convert of https://hao123.com then enabled Download (~3s).

## Notes / boundaries
This is the shared webpage-fetch API used by HTML-to-PDF and the batch webpage converters, so they pick up the same hop. CSS layout is still not mapped. Login walls and JS-only apps still fail. Cache version 4.58 is for the Word HTML that contains the client follow.

[actions]
- Updated `src/tools/convertHtmlToPdf.ts` to follow short meta-refresh stubs.
- Updated `src/pages/convertHtmlWebPagesToWordDocumentPage.ts` fetch to retry one refresh hop.
- Prerendered/gzipped this slug; local R2 seed; wrangler cache 4.58.
