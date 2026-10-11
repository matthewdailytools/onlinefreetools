Date: 2026-10-11 18:43
Summary: Google kept crawling /en/... URLs because every non-English page linked to them through the language switcher; the header now links the default language to prefix-free canonical URLs.
Visibility: people

[question]
为什么：https://onlinefreetools.org/en/tools/image-to-base64 这样的链接还会被google 抓到？

[try to solve]
## Context

English is the default language and has no URL prefix: the canonical address is `/tools/image-to-base64`. The Worker 301-redirects `/en`, `/en/` and `/en/...` to the prefix-free URL (and sets the `oft_lang=en` cookie). Canonical tags, hreflang and the sitemap already use prefix-free URLs. Even so, Google kept requesting `/en/tools/...` URLs.

## Process

1. `curl -H 'Accept: text/html' https://onlinefreetools.org/en/tools/image-to-base64` returned `301` to `/tools/image-to-base64`. The redirect itself was correct.
2. The sitemap contained zero `/en/` URLs, and hreflang `en` / `x-default` on the Chinese page pointed to the prefix-free URL.
3. Searched the built HTML for `href="/en/`. It appeared on 3,353 pages:
   - Every page in the nine non-default languages (367 per language): the language switcher's "English" item linked to `/en/tools/<slug>`, `/en/topics/<id>` and similar.
   - The brand logo on every language home and on the English topic pages linked to `/en/`.
4. Traced the source. Tool pages build switcher links with `withExplicitLangPrefix`, and `scripts/build-site.mjs` uses `withExplicitLangPath` for homes and hubs. The explicit prefix dates from a July 2026 fix: back then `/en/...` returned 200, and the prefix was needed to escape Accept-Language auto-redirects.
5. Checked that the prefix no longer does anything. Production `/` and `/tools/...` return 200 even with `Cookie: oft_lang=zh` and a Chinese `Accept-Language`, so there is no server-side language redirect. The client-side `navigator.languages` redirect was removed in September 2026, and the switcher's click handler already writes `oft_lang` in the browser.

## Root cause / analysis

Googlebot follows internal links. Thousands of pages linked to `/en/...`, so Googlebot rediscovered those URLs on every crawl and then followed the 301. This is not an indexing problem: the URLs show as "Page with redirect" in Search Console and the signals consolidate on the canonical URL. It does waste crawl budget, though, and Google recommends linking internally to canonical URLs. Separately, Google keeps revisiting redirect URLs it already knows (some were 200 before July 2026) for months, even after the links are gone. That tail decays on its own.

## Solution

Instead of editing about 300 tool page files, the fix normalises links where they are rendered:

- `src/pages/site/header.ts` (prerendered tool pages) and `scripts/site/components/header.mjs` (homes, hubs, info pages) gained `toCanonicalHref`. It rewrites `/en` and `/en/` to `/`, and `/en/<path>` to `/<path>`. It is applied to every language-switcher link and to the brand link.
- The server-side 301 from `/en/...` stays, so Google's known legacy URLs and old external links still land on the canonical page.
- `PAGES_CACHE_VERSION` was bumped so cached HTML is refreshed.

Verification:

- Full `npm run build:site` passed (3,670 pages).
- Built HTML in `public/_pages` and the language homes now contains 0 `href="/en..."` links; before the fix there were 3,353 pages with them.
- On `/zh/tools/image-to-base64`, the English item is now `href="/tools/image-to-base64"`. The Chinese home's English item is `/`, and the brand link on English pages is `/`.
- `npm run lint:seo` passed.

## Notes / boundaries

- Switching to English still sticks: the click handler sets `oft_lang=en` before navigation, and neither the server nor the client redirects by language anymore. Opening the English link in a new tab, which skips the click handler, also lands on English because there is no language redirect.
- Two old dev-log articles mention `/en/` URLs in their body text. That is historical content, not navigation, and was left unchanged.
- Expect `/en/...` requests in server logs and Search Console to fall gradually over the following weeks rather than stop immediately.

[actions]
- `src/pages/site/header.ts`, `scripts/site/components/header.mjs`: added `toCanonicalHref` for switcher and brand links.
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` bumped.
- `npm run build:site`, `npm run lint:seo`.
