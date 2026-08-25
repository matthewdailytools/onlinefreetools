Date: 2026-08-20 22:24
Summary: Adopted long-tail gap SEO strategy: avoid head terms owned by traffic sites; documented execution plan and aligned funnel.

[question]
修改策略：不能与其他已经获取流量的站抢已有大词的流量，需要抢他们没有覆盖的长尾词。基于次，制定seo优化执行方案和策略文档

[try to solve]
Core strategy is now written into the execution chain: do not head-on compete for head terms already owned by stable-traffic sites; prioritize long-tail and locale gaps that SERP leaves uncovered or very thin; for head terms where this site already has GSC impressions, only harvest CTR/meta (defense)—do not open offensive new-tool briefs.

Primary doc: `docs/seo/2026-08-20-long-tail-gap-strategy.md` (defines head / mid_covered / long_gap / locale_gap, decision flow, weekly selection priority, sourcing/capacity/acceptance/KPI, and explicit non-goals).

Synced:
- Funnel `keyword-to-tool-funnel.md`: competitor-coverage three questions, build gate #5, new pool columns
- Skill / rule / ops / serp-batches templates / README / tracker decision log
- Keyword pool TSV columns `competition_tier`, `gap_notes`
- Cross-links in Omni benchmarking and Google SEO implementation docs

Execution notes: seeds may include head terms, but pooling should expand downward into long-tail (aim ≥6/10 gap-class per batch); weekly build ≤1–2 and only for long_gap/locale_gap; same-cluster long-tails stay one-tool multi-scenario—no doorway splits.

[actions]
- docs/seo/2026-08-20-long-tail-gap-strategy.md (new)
- docs/seo/keyword-to-tool-funnel.md
- docs/seo/keyword-daily-pool.tsv
- docs/seo/keyword-to-tool-tracker.md
- docs/seo/README.md
- docs/seo/serp-batches/README.md
- docs/2026-08-08-omnicalculator-seo-traffic-strategy.md
- docs/2026-07-28-google-seo-strategy-implementation.md
- .cursor/skills/keyword-to-tool-funnel/SKILL.md
- .cursor/rules/keyword-to-tool-funnel.mdc
- ops/seo/keyword-to-tool-ops.md
