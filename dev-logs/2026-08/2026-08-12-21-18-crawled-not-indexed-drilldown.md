Date: 2026-08-12 21:18
Summary: Classified GSC crawled-not-indexed drilldown (110 URLs) and updated SEO review docs.

[question]
“https___onlinefreetools.org_-Coverage-Drilldown-2026-08-12已抓取未索引 ”数据提供

[try to solve]
Read the drilldown (110 URLs), wrote the classification doc, and synced 01/02/03.

**Breakdown**: tools 84 · info pages 21 · devlogs 4 · `/api/tools/ip-address` 1.  
**Tools**: mostly multilingual image cluster (image-merge/border/watermark, etc.); `ru/image-merge` has impressions and is not on the not-indexed list → selective indexing; other locales are still digesting — do not cut locales.  
**Must fix**: `Disallow: /api/` (robots currently only has `/devlogs/`); confirm live noindex; 301 five info-page trailing-slash duplicates.

Output: `docs/seo/reviews/2026-08-12/04-crawled-not-indexed-sample.md`; sampling todo checked off.

[actions]
- docs/seo/reviews/2026-08-12/04-crawled-not-indexed-sample.md (new)
- docs/seo/reviews/2026-08-12/01-analysis-review.md (§5.1)
- docs/seo/reviews/2026-08-12/02-next-strategy.md (P0 classification)
- docs/seo/reviews/2026-08-12/03-todo.md (checked + split noise-fix items)
