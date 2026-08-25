Date: 2026-08-08 10:25
Summary: Analyzed GSC CSV in docs/seo/2026-08-08 and optimized title/description for top-impression locales.

[question]
根据seo文档下按日期存储了谷歌seo数据，根据数据分析，优化seo

[try to solve]
Read GSC exports under `docs/seo/2026-08-08/` (performance 8/2–8/5; indexing 8/5). Snapshot: **~283 impressions, 1 click, CTR ≈ 0.35%** — very early stage. Bottleneck is **SERP title/snippet alignment with queries** and the indexing pipeline, not cutting locales.

### Data highlights
- High-impression pages: `/es/tools/square-feet` (42), `/de/tools/ip-address` (39), `/es|pt/tools/how-to-calculate-roi`
- Decent rank, zero clicks: `/ja/tools/how-to-calculate-marginal-revenue` ~rank 8.8; Japanese query for how to find marginal revenue ~rank 9.2
- Indexing: 150 indexed / 80 not indexed; devlogs still showed impressions → rely on the noindex deploy already added
- Mobile ranks better than desktop, but both get no clicks → put query terms first in titles

### Shipped
- Added `docs/seo/README.md`, `docs/seo/2026-08-08-gsc-analysis-and-actions.md`
- Optimized title/description from GSC queries: `en/ja` marginal revenue, `es` square feet + ROI, `de` IP, `pt` ROI
- Synced home-card titles in `scripts/site/i18n.mjs`; added a GSC archive step to `SEO_PUBLISH_CHECKLIST`

### Follow-up
Deploy → `npm run indexnow:sitemap` → re-import CSV in 2–4 weeks and compare CTR

[actions]
- docs/seo/README.md, docs/seo/2026-08-08-gsc-analysis-and-actions.md
- src/site/i18n/{en,ja,es,de,pt}.ts
- scripts/site/i18n.mjs
- docs/SEO_PUBLISH_CHECKLIST.md
