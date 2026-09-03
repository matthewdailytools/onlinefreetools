Date: 2026-09-03 19:29
Summary: Visiting /en/ then clicking a Tools mega link lands on /zh/tools/... because English tool hrefs are unprefixed and Accept-Language re-negotiates.
Visibility: people

[question]
为什么选择了 http://localhost:8788/en/ 后，点击页面的tools，会跳转到http://localhost:8788/zh/tools/bulk-compress-product-photos

[try to solve]
## Context
A user opened the explicit English home (`/en/`), then used the nav Tools mega menu and ended on a Chinese tool URL (`/zh/tools/bulk-compress-product-photos`) instead of staying in English.

## Process
1. Inspected `public/en/index.html`: Tools mega links for tools use **unprefixed** paths such as `href="/tools/bulk-compress-product-photos"` (English is the default SEO language; canonical tool URLs omit `/en/`).
2. Read Worker middleware in `src/index.ts` (`app.use("/*", ...)`): for HTML GET requests **without** an explicit lang segment, it runs `pickLang(Accept-Language)` and, if the pick is not the default (`en`), issues a **302** to `withLangPrefix(picked, pathname)`.
3. Confirmed with curl (GET, not HEAD — HEAD skips the redirect because the middleware only runs for `GET`):
   - `GET /tools/bulk-compress-product-photos` + `Accept-Language: zh-CN` → `302 Location: /zh/tools/bulk-compress-product-photos`
   - `GET /en/` stays on English (explicit prefix bypasses negotiation)
   - `GET /en/tools/...` also stays English (explicit prefix)

## Root cause / analysis
Two intentional design pieces collide for Chinese-browser users who manually chose English:

1. **Default-lang URLs are unprefixed** (`withLangPrefix` returns `/tools/...` for `en`). So the `/en/` home still emits English-canonical hrefs without `/en/`.
2. **Accept-Language negotiation only looks at the request path + browser header**, not “user already chose `/en/`”. Leaving `/en/` for an unprefixed tool link drops the explicit choice and re-applies `zh` from the browser.

`/topics`, `/about`, etc. are excluded from this middleware; **`/tools/...` is not**, so tool clicks are affected.

Note: `curl -I` (HEAD) will not reproduce the 302; use GET.

## Solution
No code change in this Q&A — behavior is explained as designed today.

If we want “stay on English after visiting `/en/`”, options (product decision):
- Remember explicit lang in a cookie / `localStorage` and skip or override Accept-Language when set
- On `/en/` pages, emit `/en/tools/...` hrefs for in-site navigation (SEO can keep unprefixed as canonical)
- Prefer Referer `/en/...` when deciding whether to negotiate

Workaround for local QA: open `/en/tools/bulk-compress-product-photos` directly, or temporarily use an English `Accept-Language`.

## Notes / boundaries
- Relevant code: `src/index.ts` (middleware ~380–441), `src/site/lang.ts` (`pickLang`, `withLangPrefix`)
- Home route `/` also negotiates; only explicit `/{lang}/` home skips it
- This is UX friction for bilingual testers, not a wrong href pointing at `/zh/...` in the English HTML

[actions]
- Diagnosed via HTML inspection + GET curl against localhost:8788; no product code changed
