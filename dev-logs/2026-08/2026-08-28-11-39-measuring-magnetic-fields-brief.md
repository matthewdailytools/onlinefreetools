Date: 2026-08-28 11:39
Summary: Opened a ready work-tasks brief for measuring-magnetic-fields, replacing the deferred magnet-pull-force-calculator slug and putting measuring magnetic fields in the H1.

[question]
用"measuring magnetic fields"替换“magnet-pull-force-calculator” slug和作为主打关键词，开始立项 “measuring magnetic fields” 工具

[try to solve]
User-confirmed tool creation (not funnel auto-brief). Slug is `measuring-magnetic-fields`; English H1 is **Measuring Magnetic Fields — Convert tesla and gauss readings**. Direction C: convert a Hall-probe / gaussmeter / phone-magnetometer reading (sample 200 G → 0.02 T), show typical field magnitudes and instrument-range limits, and keep N-grade axial estimate plus pull-force relation as same-URL secondary modules so magnet-shop pull-force SERPs are not the H1.

`npm run coverage:gate -- --slug=measuring-magnetic-fields --phase=0b` passed. Status: `02=ready`, `03=briefs-ready`. No page/i18n yet — implement only after an explicit build request, then coverage phases 2 and 4.

Pull-force / grades / sizes keywords in the daily pool now `absorb` into this slug; a new pool row marks the head query `build` with `long_gap` for the interactive convert-and-interpret task.

[actions]
- Added `work-tasks/measuring-magnetic-fields/` (00–03, notes)
- Updated `docs/seo/keyword-to-tool-tracker.md`, `docs/seo/keyword-daily-pool.tsv`, `docs/seo/serp-batches/2026-08-13-keyword-planner-magnets.md`
- Ran `npm run coverage:gate -- --slug=measuring-magnetic-fields --phase=0b`
