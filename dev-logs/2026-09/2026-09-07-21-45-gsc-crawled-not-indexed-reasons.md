Date: 2026-09-07 21:45
Summary: Classified 92 GSC “Crawled — currently not indexed” URLs from 2026-09-07; the pages are crawlable, Google is choosing not to index most of them.
Visibility: people

[question]
@docs/seo/ 的2026-09-07是谷歌已经抓取，尚未索引的链接数据，分析可能的原因

[try to solve]
## Context

`docs/seo/reviews/2026-09-07/` holds a Google Search Console Coverage drilldown export: problem name **已抓取 - 尚未编入索引** (Crawled — currently not indexed), sitemap filter “all known pages”, **92 URLs** plus a `状态` column (`失败` 64 / `待定` 28). The folder has no Performance report and no Coverage totals. The previous comparable snapshot is 2026-08-12 (110 URLs, mostly image-tool locales).

The official meaning of this GSC bucket: Google **fetched** the URL and **did not select it for the index**. It may be indexed later. Resubmitting or clicking “Validate fix” does not turn a selection decision into a technical bug.

## Process

1. Parsed `表格.csv` (URL, last crawl, status) and `元数据.csv`.
2. Classified every path: tool locale, default-English tool, `/en/` prefix, devlogs, topics/hubs, API.
3. Clustered tool slugs (PDF / image / prompt / how-to-calculate / other) and compared overlap with the 2026-08-12 drilldown.
4. Cross-checked live responses with `Accept: text/html` and a Googlebot user-agent (HEAD without that Accept returns 404 because the Worker only serves HTML to HTML clients).
5. Checked `robots.txt`, sitemap `/en/` presence, catalog size (210 tools × 10 languages), PDF/prompt/calculator slug counts, and when `/en/` 301 landed (`src/index.ts`, 2026-09-03).

## Root cause / analysis

**Not a crawl block on tool pages.** Live checks: `/tools/merge-pdf`, `/ru/tools/split-pdf`, `/tools/how-to-calculate-mean`, `/topics/pdf-docs` return 200, self-canonical, tool pages have no `noindex` (only `max-image-preview:large`), hreflang present.

**Primary cause: discovery outruns index selection.** About 2100 tool URLs plus hubs and logs, versus 267 indexed pages on 2026-08-07. Google will crawl new locale variants; it will not index all of them. All 64 `失败` rows were recrawled on 2026-09-04–06 and still not chosen — that is a fresh “no”, not a queue that never got a fetch.

**Secondary: near-duplicate families.** This sample is 34 PDF tool URLs, 11 prompt-builder URLs (all `失败`), 8 how-to-calculate URLs, 13 image/size/watermark URLs. The site has ~38 PDF slugs, 9 prompt slugs, and 60 `how-to-calculate-*` slugs, each × 10 locales. Same chrome and IG skeleton; Google’s scaled-content / helpful-content systems are method-agnostic and reduce selection rate when similar URLs ship in bursts. Russian PDF tools were crawled as a batch (2026-08-10–09-01) and remain pending — same selective-locale pattern as `ru/image-merge` in August.

**Technical duplicates that inflate the bucket:**

- **20 `/en/...` URLs.** English canonicals have no prefix. The language switcher still emits `/en/`; the Worker 301s those to the unprefixed URL since 2026-09-03. Crawls on 2026-09-01 likely saw 200 duplicate English HTML. Later crawls should be redirects; GSC can keep them in this report until it recategorizes. Sitemap does not list `/en/`. Seven **unprefixed** `/tools/{slug}` URLs are also `失败`, so canonicalization alone does not explain the English tools.
- **`/api/tools/ip-address`:** JSON 200, last crawl 2026-07-05, still in the list (also in August). `Disallow: /api/` stops recrawl; it does not remove an already-crawled URL. No `X-Robots-Tag: noindex`.
- **10 devlogs:** robots now allow `/devlogs/`. Sampled People logs have no `noindex`, but titles are engineering summaries. Duplicate: `.../how-to-calculate-gradient` is 404 vs `.html` 200. Chinese filename 307s from unescaped to percent-encoded; crawled 2026-09-05 as `失败`.
- **Hubs:** `/en/tool-type/number` should 301; `/zh/where-to-use-tools/seo` 308s to a trailing slash while canonical has none.

Overlap with 2026-08-12 is **5 URLs**, all noise (API + old logs). The image-tool majority rotated out of this sample; that is **not** proof those URLs are now indexed.

## Solution

Diagnosis only this round (no product code change). Archive: `docs/seo/reviews/2026-09-07/01-analysis-review.md` and `04-crawled-not-indexed.md`.

Practical response if the next Coverage total stays high:

1. Do not validate-fix or IndexNow the 92 URLs as a set.
2. Leave `/en/` 301 in place; wait for GSC to move them to “Page with redirect”.
3. Clear API / extensionless log / encoding duplicates so they stop occupying the sample.
4. Point internal links from indexed locales at the same slug in missing locales; do not drop languages; do not split more near-synonym PDF/prompt/calculator URLs.
5. Next GSC export must include Coverage **counts** plus a ≥28-day Performance window, or the 92-vs-110 comparison stays invalid.

## Notes / boundaries

- GSC drilldowns are examples. 92 is not the site-wide crawled-not-indexed total.
- Worker 404 on non-HTML Accept is expected; Googlebot HTML GET is 200.
- People-first logs remain eligible for indexing by policy; Google still may skip them when the rest of the site is a large tool grid.

[actions]
- Wrote `docs/seo/reviews/2026-09-07/01-analysis-review.md` and `04-crawled-not-indexed.md`
- Updated `docs/seo/reviews/README.md` batch table
