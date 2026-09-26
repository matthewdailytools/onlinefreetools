Date: 2026-09-26 13:50
Summary: Fixed non-default-locale trailing-slash 308s that caused GSC “Page with redirect” on sitemap/canonical URLs.
Visibility: people

[question]
@docs/seo/reviews/2026-09-26/ 文件夹中是 GSC "网页会自动重定向 此类网页未编入索引或不会显示在 Google 搜索结果中",分析修正

[try to solve]
## Context
GSC Coverage exported 435 URLs under “Page with redirect” (Chinese: 网页会自动重定向). Those source URLs are not indexed; Google follows the redirect and credits the destination when it chooses to.

## Process
1. Classified the CSV: 134 `/en/...` URLs vs ~301 non-English taxonomy/info URLs (`topics`, `where-to-use-tools`, `tool-type`, about/privacy/terms/contact).
2. Probed production with `Accept: text/html`:
   - `/en/tools/...` → **301** to unprefixed `/tools/...` (intended).
   - `/zh/topics/health-body` → **308** to `/zh/topics/health-body/` (then 200).
3. Compared signals: sitemap `loc`, `rel=canonical`, and `hreflang` all use **no** trailing slash for those pages (`withLangPath`). English unprefixed routes already serve no-slash as 200 and 301 away from slash.
4. Confirmed tool pages `/{lang}/tools/{slug}` already return 200 without a slash — they were absent from this GSC bucket for the right reason.

## Root cause / analysis
Two different redirect stories were mixed in one GSC report:

1. **`/en/...` 301** — Product design since 2026-09-03: strip default-lang prefix, set `oft_lang=en`. Correct; leave as-is. Google will keep listing them while old `/en/` links exist.
2. **Non-en trailing-slash 308** — Bug/inconsistency. Worker treated **with** slash as canonical for non-default locales, while sitemap/canonical/internal links advertised **without** slash. Google fetched the advertised URL, got a permanent redirect, and filed “Page with redirect”. The HTML on the slash URL still pointed canonical back to the no-slash URL, which is a classic self-fight.

Lang homes `/{lang}/` correctly use a trailing slash (matching sitemap) and were not the fix target.

## Solution
Updated `src/index.ts` so non-default locale info + taxonomy hub/leaf routes match English:

- No trailing slash → **200** HTML
- With trailing slash → **301** to no slash
- Legacy `use-cases` / `subjects` redirects now target no-slash paths
- `/{lang}` → `/{lang}/` kept (301) for language homes only

Documented the breakdown in `docs/seo/reviews/2026-09-26/01-analysis-redirects.md`.

**Deploy required:** this is Worker routing only; after `git:deploy` (or emergency `deploy:worker-only`), verify:

```bash
curl -sSI -H 'Accept: text/html' 'https://onlinefreetools.org/zh/topics/health-body'
# expect HTTP/2 200
curl -sSI -H 'Accept: text/html' 'https://onlinefreetools.org/zh/topics/health-body/'
# expect HTTP/2 301 Location: .../zh/topics/health-body
```

In GSC, optionally “Validate fix” on a few high-value no-slash URLs; the non-en share of this issue should fall over re-crawls. `/en/...` counts may remain.

## Notes / boundaries
- Do not remove `/en/` → unprefixed 301 to “clear” the report.
- No sitemap or prerender HTML rebuild required for this routing fix.
- Related earlier note: `docs/seo/reviews/2026-09-07/04-crawled-not-indexed.md` already flagged `/zh/...` 308 vs canonical mismatch.

[actions]
- Fixed trailing-slash policy in `src/index.ts` for non-default locale info/taxonomy routes
- Added `docs/seo/reviews/2026-09-26/01-analysis-redirects.md`
