Date: 2026-08-13 21:00
Summary: Analyzed Google Keyword Planner magnets batch (~700 keywords) into the intent pool; primary build candidate magnet-pull-force-calculator; no work-tasks created.

[question]
按 keyword-to-tool-funnel 分析“Keyword Planner 08-13-2026 at 12-51-05.csv”这批词，写入 serp-batches + keyword-daily-pool，更新 tracker；先 absorb 优先。不要自动建 work-tasks。

[try to solve]
Completed the full batch via the keyword-to-tool-funnel skill (pool only — no pages, no work-tasks):

1. Batch summary: `docs/seo/serp-batches/2026-08-13-keyword-planner-magnets.md`
   - Source: Google Keyword Planner bulk export (~700 keywords, en/us); includes volume ranges / competition / suggested bids
   - Intent clusters: magnet strength/pull, grades, material comparison, sizes/specs, magnet-type knowledge, how-it-works education, use lists, buy channels, custom/fridge magnets, brands/makers, product specs

2. Appended 10 pool rows (`keyword-daily-pool.tsv`, source_batch=2026-08-13-keyword-planner-magnets):
   - build ×4: magnet strength calculator (primary tool candidate; suggested slug magnet-pull-force-calculator), magnet grades, neodymium vs regular, magnet sizes — fold the last three into the primary tool (grades/materials/sizes); do not split near-duplicate URLs
   - defer ×2: types of magnets, different magnetic materials (knowledge intent; absorb into How/FAQ after the primary tool ships)
   - drop ×4: how do magnets work, everyday uses of magnets (pure education/lists), buy magnets online (commercial buy intent), custom magnets (custom product intent)

3. Tracker update (`keyword-to-tool-tracker.md`): snapshot recent batch / in-pool build candidates += magnet-pull-force-calculator; check off this batch’s P0; decision log +2 rows (primary candidate rationale + one-page multi-scenario ban on doorway splits).

Key points:
- Catalog has no physics-magnet slug to absorb (`magnet-link-decoder` is BitTorrent magnet URI, not physical magnets)
- ~90% of the batch is commercial buy / product-spec / brand-nav → drop; interactive gap centers on pull/strength/grade/size
- SERP competitors for magnet pull calculators are magnet-shop widgets (K&J etc.); generic tool sites are blank; IG gaps: estimate formula + error bounds, N-grade table, material compare, inch↔mm, safety notes
- No work-tasks created

[actions]
- docs/seo/serp-batches/2026-08-13-keyword-planner-magnets.md (new batch summary)
- docs/seo/keyword-daily-pool.tsv (10 candidate rows with verdict)
- docs/seo/keyword-to-tool-tracker.md (snapshot + P0 + 2 decision-log rows)
