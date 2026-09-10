Date: 2026-09-10 14:10
Summary: Analyze the 7-day GSC Performance export and turn “impressions without clicks” into a harvest-first SEO plan.
Visibility: people

[question]
分析 @docs/seo/reviews 2026-09-10 GSC 数据，给出seo优化方案

[try to solve]
## Context

The 2026-09-10 folder holds a Google Search Console **Performance** export only: Web search, **past 7 days**, chart dates 2026-09-01 through 2026-09-07. There is no Coverage report in this batch, so index conclusions stay with the 2026-09-07 crawled-not-indexed sample.

Earlier reviews used shorter windows (four days on 2026-08-08, 24 hours on 2026-08-12) and still asked for a 28-day export. This 7-day file is the first window long enough to show **repeatable clicks**, but it is still not the 28-day gate.

The site is a multilingual toolbox (about 210 tools × 10 locales). The standing SEO rule is people-first pages, no doorway URLs, and no chasing FAQ rich results (retired in May 2026). Head terms that already rank on competitor tools get CTR harvesting, not a new URL.

## Process

1. Read the filter, chart, query, page, country, device, and search-appearance CSVs.
2. Sum the chart for site totals (clicks, impressions, weighted position). Cross-check devices (19 clicks / 4314 impressions) against the chart.
3. Cluster queries (IP, compare-files, square-feet, ROI, LinkedIn, Cursor settings, Russian slab calculators) and aggregate pages by slug and locale.
4. Split pages into two lists: **already in the top 10–15 with zero clicks** versus **high impressions still around position 70–90**.
5. Open the live i18n titles for those URLs and compare them to the query strings.
6. Check `robots.txt` (`Disallow: /api/` present; `/devlogs/` allowed) and the two high-impression Cursor logs (People visibility, intentionally indexable).
7. Write `docs/seo/reviews/2026-09-10/01-analysis-review.md`, `02-next-strategy.md`, `03-todo.md`, and append the absorb/drop verdicts to `docs/seo/keyword-to-tool-tracker.md`.

GSC quirks that change the reading:

- The **query** table is capped at 1000 rows, shows **zero clicks**, and only 1949 impressions. That is privacy anonymization, not “nobody clicked any query.” Real clicks live on the **page / chart / country / device** tables.
- Page impressions (4530) and chart impressions (4314) differ by about 5%. Use the chart for totals.

## Root cause / analysis

The site left the “almost zero clicks” phase. Seven-day totals: **19 clicks, 4314 impressions, CTR 0.44%, weighted position 37.4**. Daily impressions roughly doubled versus the 2026-08-12 ~300/day snapshot. 9 September 7 was the best day (7 clicks, 760 impressions, position 31).

When a URL actually sits in the top 10 on a matching query, CTR is healthy. The magnet-link decoder is the proof: position 5.8, **7.14% CTR**. File-hash, unzip, website-headers, and several thin-volume calculator pages in positions 1–6 also converted. The problem is not “this domain never earns clicks.”

Three things dilute CTR:

1. **Position mix.** In the attributable query sample, about 85% of impressions are still beyond position 40. Deep-rank title tweaks (German IP at position 90 with 265 impressions, English compare-two-text-files at 73, French ROI at 73) cannot manufacture clicks. Those titles were already aligned in August.
2. **Top-10 pages that still have zero clicks.** Spanish aspect-ratio (84 impressions, position 9), a cluster of Chinese calculators (concrete, payback, percentage change, debt payoff — several in positions 5–8), Indonesian LinkedIn banner (query `ukuran banner linkedin` at 9.5), and `sitemap xml checker` at **position 1** with no clicks. Some titles miss a confirmatory token (`checker`, `1584×396`, 计算器). Some Chinese descriptions paste the same YMYL disclaimer twice, which can poison the snippet. Japanese marginal revenue already contains 求め方 in the H1 from the August pass — another H1 edit is the wrong lever.
3. **Two People-indexed Cursor logs** take **564 impressions at position ~6.4 and zero clicks** (~14% of all page-level impressions). They match real queries (`cursor.general.disableHttp2`, `http.proxy`, settings.json). Hiding them with `Visibility: project` would throw away useful pages. The titles do not lead with those keys, and the domain does not look like Cursor documentation, so users skip the result.

Chinese calculator pages ranking in the top 10 are a **new L1 surface**; they were almost absent in the August 12 sample. Indonesian LinkedIn is a new locale signal. US (1001 impressions, 0 clicks) is mostly Cursor logs plus English compare/IP-depth queries. Mobile still ranks better than desktop (position 21 vs 42) and has a higher CTR, so the first 30–40 title characters remain the snippet budget.

Russian queries about floor-slab layout (`раскладка плит перекрытия`) are **not** concrete-volume intent. Absorbing them into `how-to-calculate-concrete` would be a mismatch and sits next to structural YMYL. That cluster is drop/defer, not a new tool this week.

This batch contains **no Coverage data**, so the 2026-09-07 finding still stands: Google is crawling more URLs than it will index (PDF / prompt / calculator lookalikes, leftover `/en/` paths). Do not noindex tool locales to “fix” that list.

## Solution

Harvest first, then change lever on deep-rank pages, and do not build new URLs from this export.

**P0 — harvest (this week)**

- Rewrite the two Cursor log HTML titles so the JSON keys sit in the first 40 characters; keep them People-indexable; IndexNow only those two URLs after `build:logs`.
- Spanish aspect-ratio: inspect the live snippet; consider 16:9 / 1920×1080 in the first half of the title.
- Chinese percentage-change title: add 计算器 (the German locale of the same slug already earned clicks).
- Chinese payback and debt-payoff: strip duplicated disclaimer text from `description`.
- Indonesian and Russian LinkedIn banner titles: add **1584×396**.
- English sitemap tool title: add **checker** (the query already ranks #1).
- Japanese square-feet title: drop the `⇔` character.
- Japanese marginal revenue: **do not change the H1**. Open the live SERP and see whether Google rewrote the snippet.

**P1 — different lever, not a fourth title**

- German IP: FAQ/Example for IPv6 and VPN exit IP (`meine ipv6 adresse` is the top IP query). Leave the H1.
- Compare-two-text-files and square-feet: keep one URL; add near-synonyms to FAQ/Use cases if needed.
- French/Spanish ROI: no third meta-only pass.

**Do not**

- Split compare / sqft / ROI / IP into doorway URLs.
- noindex the Cursor logs to cosmetic-improve CTR.
- Treat the query table’s 0% CTR as evidence that every query failed.
- Open `work-tasks/` from this GSC batch (zero `build` candidates).

**Next export**

Past **28 days** plus Coverage, around 2026-09-24 to 2026-10-08. Decision gates: Cursor-log CTR after the title change; at least one of {es aspect-ratio, a Chinese top-10 calculator, id LinkedIn} earning a click; ja MR still judged by snippet, not another H1; German IP success = IPv6 subquery leaving the 80s, not “must enter the top 20.”

Full numbers, page tables, and checkboxes: `docs/seo/reviews/2026-09-10/`.

## Notes / boundaries

- Window is 7 days, not 28. Do not close the August 20 meta experiment (schema, es volume, en NPV, ru image-merge) from this file alone — those slugs were not the top impression pages this week.
- Search appearance CSV is empty: expected after FAQ rich results retired in May 2026. Do not add FAQPage schema to chase a SERP feature that no longer exists.
- IndexNow after copy changes should be incremental (`--since-git` or the touched URLs), never a 10-locale sitewide push.
- `lint:seo` and `build:site` remain the ship gates if the remaining title edits ship in a follow-up session.

## Follow-up (2026-09-10 15:11)

The August “impressions + zero clicks → only rewrite title” playbook did **not** produce clicks on the pages it targeted (German IP, ROI, Spanish sqft, Japanese MR). Repeating that playbook on any URL whose title already contains the query is forbidden.

Keep title edits only when all three hold: average position ≤15, the live title is **missing** the scan-word, and that URL has not had this pass yet. That leaves sitemap `checker`, Chinese 计算器 on percentage-change, Cursor log keys, stripping `⇔`, and duplicated zh disclaimers (quality, not the old pattern). Spanish aspect-ratio, Chinese concrete, and LinkedIn banners are the same failure class as Japanese MR — observe or FAQ, do not retitle.

[actions]
- Wrote `docs/seo/reviews/2026-09-10/01-analysis-review.md`, `02-next-strategy.md`, `03-todo.md`
- Updated `docs/seo/reviews/README.md` batch table
- Appended absorb/drop verdicts to `docs/seo/keyword-to-tool-tracker.md`
- Tightened `02`/`03` so the failed title-only pattern is not reused on already-aligned pages
