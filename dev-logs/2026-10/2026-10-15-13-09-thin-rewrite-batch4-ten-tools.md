Date: 2026-10-15 13:09
Summary: Rewrote thin-queue calculators #31–#40 (IRR to velocity) with deeper modes, worked steps and verified samples in ten locales, then ran an incremental R2 upload and deploy for batch 4.
Visibility: people

[question]
按顺序逐一处理工具直到处理完成，每处理10个工具完毕，进行增量deploy和upload r2

## Tool links (English)
- https://onlinefreetools.org/tools/how-to-calculate-heart-rate
- https://onlinefreetools.org/tools/how-to-calculate-inflation
- https://onlinefreetools.org/tools/how-to-calculate-irr
- https://onlinefreetools.org/tools/how-to-calculate-logarithm
- https://onlinefreetools.org/tools/how-to-calculate-median
- https://onlinefreetools.org/tools/how-to-calculate-present-value
- https://onlinefreetools.org/tools/how-to-calculate-profit-margin
- https://onlinefreetools.org/tools/how-to-calculate-slope
- https://onlinefreetools.org/tools/how-to-calculate-tip
- https://onlinefreetools.org/tools/how-to-calculate-velocity

[try to solve]
## Context
The 2026-10-13 SEO review put 87 thin tool pages into `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md` for people-first rewrites. They are worked in queue order. After every 10 finished slugs, an incremental build, `upload:r2` and `git:deploy` run. This log covers batch 4, rows #31–#40. All ten are `how-to-calculate-*` calculators.

## Process
1. For each slug:
   - Compare the page with what a searcher needs to finish the task.
   - Rewrite `src/pages/*Page.ts` where the calculator stopped short.
   - Write the English master, catalog `related`, and `work-tasks/{slug}/02-tool-info.md` plus `03-locale-briefs.md`. The briefs carry local titles, local terms and fixed sample numbers for each language.
   - Three locale subagents (zh/ja/ar, es/pt/fr, de/ru/id) rewrite the copy around local search wording rather than translating it.
2. Gates for every slug:
   - Matching key sets in all 10 locales; descriptions at least 120 characters.
   - Placeholder check: every `{x}` in English exists in each locale.
   - Title parameter-list heuristic (`isParamEnumTitle`).
   - `bump-tool-updated-at`, then `validate-tool-coverage-rounds --phase=all`.
   - `verify-tool` with `CROSS_TOOL_UPDATE=1`: SEO validator, page wiring, isolation.
   - Prerender.
   - Browser checks on English, zh and de (decimal comma, thousands separators, localized units): every rotating sample, invalid input, and Clear.
3. Batch deploy:
   - `node scripts/build-site.mjs --slug=<10 slugs>` wrote and gzipped 100 tool HTML files.
   - `npm run upload:r2` (changed-only) uploaded 100 of 3,670 objects in 23.1 s, wrote `_meta/pages-build.json` (pagesCacheVersion 4.93) and exited 0.
   - Commit, then `npm run git:deploy`.

## Root cause / analysis
These pages were thin because each calculator answered only the first half of the question. What each one now adds:
- **how-to-calculate-irr**: yearly, quarterly or monthly cash flows. Shows the trial-and-error interpolation, a table proving NPV = 0 at the IRR, NPV and MIRR at a required return, and a warning when sign changes allow more than one IRR.
- **how-to-calculate-median**: plain lists or grouped frequency tables. Shows the sorted list with the middle values highlighted, how odd and even counts differ, every mode (or "no mode"), and the grouped formula L + (N/2 − cf) ÷ f × h worked out.
- **how-to-calculate-present-value**: present or future value of a lump sum, regular payments, or both, under annual, monthly, daily or continuous compounding. Payments can fall at the start or end of each period. Also shows the effective annual rate, a ±1% rate sensitivity check and a year-by-year balance.
- **how-to-calculate-slope**: from two points, or one point plus a slope. Fractions stay exact. Output includes slope-intercept, point-slope and standard form, both intercepts, the angle, percent grade, perpendicular slope, distance and midpoint.
- **how-to-calculate-tip**: tip and split where the cents are shared out so every share adds up exactly to the total. Can tip on the pre-tax amount, round up the tip, the total or each share, back-solve what percentage a tip was, and compare 10–25% side by side.
- **how-to-calculate-heart-rate**: maximum heart rate from 220 − age, Tanaka, Gulati (women) or a measured value. Gives five training zones, the AHA moderate and vigorous ranges, beats to count in 30 seconds, and Karvonen zones when resting heart rate is entered. Marked YMYL, with a disclaimer.
- **how-to-calculate-logarithm**: log₁₀, ln, log₂, any base, or the antilog, for decimals, fractions and powers. Shows exact values (log₄ 8 = 3/2), change of base step by step, and the characteristic and mantissa.
- **how-to-calculate-inflation**: built-in US CPI-U annual averages for 1913–2025 from the Minneapolis Fed table. Shows the worked ratio with the actual index values, purchasing power, and the highest and lowest yearly rates in the chosen range. An optional "actual amount" field answers "did my pay keep up?". A fixed-rate mode works for any currency and adds doubling time and a year-by-year table.
- **how-to-calculate-profit-margin**: from revenue, COGS, operating expenses and other items, gives gross, operating and net margin with each division written out, plus a common-size table per 100 of sales. A pricing mode solves price = cost ÷ (1 − margin). It also shows the common mistake: adding the margin to cost as a markup gives 50 instead of 53.33, which is only a 20% margin.
- **how-to-calculate-velocity**: solves for speed, distance or time, in m/s, km/h, mph, ft/s or knots. Mixed units are converted, with the step shown (90 min = 1.5 h). A multi-leg mode gives the true average speed, how far the simple average of speeds overshoots, and, with an optional straight-line distance, the displacement-based average velocity.

## Solution
All ten slugs are marked `done 2026-10-15` in the queue file. Each passed every gate above. Some of the browser results:
- **Inflation**:
  - 100 dollars in 2000 = 186.93 in 2025 (100 × 321.9 ÷ 172.2), +86.93% overall, 2.53% a year on average.
  - Salary sample: 50,000 in 2015 needs 67,911.39 in 2025; at 62,000 that is +24% nominal but −8.70% real.
  - de input `1.234,5` from 1990 gives 3.040,44.
  - Choosing the same year twice, or a non-integer number of years, shows a specific message.
- **Profit margin**:
  - The statement sample gives 40% / 16% / 11.20%, with a 66.67% markup.
  - The loss sample gives −3.75%.
  - de: cost `1.234,5` at a 12,5 % target gives a price of 1.410,86 and a 14,29 % markup.
  - A 100% target is rejected with an explanation.
- **Velocity**:
  - Bolt's 100 m in 9.58 s = 10.44 m/s = 37.58 km/h = 23.35 mph = 20.29 kn.
  - A marathon at 12 km/h takes 3:30:58.5.
  - 65 mph for 2.5 h covers 162.5 mi = 261.52 km.
  - Legs of 60 km at 60 km/h and 60 km at 40 km/h average 48 km/h, not 50. Displacement-based velocity is 0.
  - Knots render as 节 in zh and kn in de; nautical miles render as sm in de.
- **Fact check**: the inflation FAQ grouped the 1921 price fall with the Great Depression. 1921 was the slump after World War I; only 1932 belongs to the Depression. The English and Spanish copy were corrected before shipping.
- **Terminology**: the ja brief now uses マークアップ率（原価基準） for markup. In Japanese retail, 値入率 is usually calculated on the selling price, so it means margin rather than markup.

## Notes / boundaries
- Skills applied for every slug: `tool-coverage-pass` and `tool-token-efficiency`. No converter skills applied, since none of these tools is a converter.
- Copy rule learned this batch: the merge step strips backslashes. Shard values must use literal characters (“ ” « » 「」), never `\u…` escapes. Otherwise the page renders "u201c".
- `upload:r2` can keep running for a while after printing `done`, because idle keep-alive sockets hold it open. Judge success by the `done` line and the exit code, not by wall-clock time.
- Pre-existing site-wide gap, not specific to these tools: on ja, de and ar pages the shared headings "Frequently asked questions", "Related tools", "References" and "Important notice", plus the "References:" prefix, still render in English, because the core dictionaries lack those keys. This needs a separate decision.
- `Disallow: /devlogs/` stays deferred until Search Console confirms the logs are out of the index.
- Next: queue #41 onward. The next deploy follows #50.

[actions]
- Rewrote pages, i18n shards, catalog `related` and work-tasks for queue #31–#40
- Updated statuses in `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`
- `node scripts/build-site.mjs --slug=<batch4>`
- `npm run upload:r2`
- Commit + `npm run git:deploy`
