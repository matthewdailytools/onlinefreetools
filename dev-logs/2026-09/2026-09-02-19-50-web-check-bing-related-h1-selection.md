Date: 2026-09-02 19:50
Summary: Clarified CloakBrowser was used for Bing Related H1 picking; Related empty so organic titles drove slug choices.
Visibility: project

[question]
为什么没用cloakbrowser跑？ / 建议方向的工具：采用 serp bing的结果页面边上关联的长尾关键词分析来决定采用哪个长尾关键词

[try to solve]
## Context
User asked to pick long-tail H1/slug for web-check implement queue from Bing SERP side Related searches, then asked why CloakBrowser was not used.

## Process
1. Ran CloakBrowser via `ops/seo/bing_serp/run_bing_serp.py` for 5 head seeds (batch related-longtail) — succeeded; Related empty.
2. First expand attempt failed (parallel debug launch / Chromium SIGABRT) — looked like “not run”.
3. Retried expand×20 with CloakBrowser — succeeded; Related still empty.
4. Applied P0 fallback: organic title task phrases + §3.3 H/G → selection doc.

## Root cause / analysis
CN Bing international SERP repeatedly ships with no Related/PAA blocks for these tool queries. CloakBrowser was always the collector; the gap was empty Related UI, not a missing browser.

## Solution
Authoritative selection: `docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`. Pool + tracker updated. No work-tasks opened.

## Notes / boundaries
- Opening work-tasks still requires explicit user naming per slug.

[actions]
- CloakBrowser Bing×5 + ×20 under `.cache/serp/bing/`
- Added related-longtail-selection.md; updated README, keyword-daily-pool.tsv, keyword-to-tool-tracker.md
