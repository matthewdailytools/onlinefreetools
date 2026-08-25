Date: 2026-08-20 20:46
Summary: Confirmed strategy: prioritize existing tools CTR/ranking over new tools; outlined P0 absorb cluster from GSC 2026-08-12.

[question]
目前有展现很少点击，优先优化现有工具的排名和点击

[try to solve]
Agreed: the phase is “broad coverage, some impressions, near-zero clicks,” so prioritize absorb/enrichment of existing tools and defer new builds.

Diagnosis (GSC 2026-08-12, 24h): ~302 impressions, 0 clicks, weighted position ~70. The gap is deep SERP position plus title/description not aligned to primary query terms—not missing URLs.

This week’s execution priority (CTR meta only; no URL splits):
1. ru image-merge (top impressions) — title aligned to объединить/склеить фото онлайн
2. en schema-jsonld-generator — front-load JSON-LD / Schema generator
3. es how-to-calculate-volume — front-load calcular volumen
4. en how-to-calculate-npv — align how to calculate npv (deep rank; meta first)
5. es square-feet — already ~position 18; if still 0 clicks over a longer window, tweak the first 30 characters

In parallel: index noise (robots `/api`, devlogs noindex, info-page trailing slash); export ≥28 days of data before judging CTR.

Explicitly not doing: daily new tools, cutting locales, or shotgun page edits for unindexed URLs.

[actions]
- Read-only comparison of docs/seo/reviews/2026-08-12 vs current titles on high-impression pages; no code changes
