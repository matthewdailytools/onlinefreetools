Date: 2026-08-28 14:55
Summary: Grouped Bing CIDR Keyword Planner terms into a /cidr theme hub plus a few algorithm-distinct child tools; kept head calculator terms off the weekly build queue.

[question]
分析 @docs/seo/keywords/cidr/Cidr_KeywordPlanner_bing.csv ，进行用户意图分组和对应关键词整理，分析以Cidr为主题的主题页面以及Cidr主题业下的工具。按照 /主题/工具slug的模式，先给出方案

[try to solve]
Bing Planner export: 345 rows. Two head terms (`cidr calculator`, `cidr notation`) stay `defer`/`head`. Veterinary CIDR homonyms (cattle/sheep protocol) are dropped with a one-line disambiguation on the hub.

Public URL scheme (not shipped): `/cidr` hub with an interactive prefix chart (chart/cheat-sheet/notation/what-is absorb here; not an empty directory); `/cidr/calculator` for one IP+prefix (IPv6, mask, visual, contains, capped expand — do not split those into extra URLs); `/cidr/ip-range` for start–end or IP-list summarization; `/cidr/cidrsubnet` for Terraform functions. Optional later: `/cidr/vpc` for cloud AZ allocation. Default: no `/cidr/vlsm` page (tab on calculator).

Existing `ip-address` is public-IP lookup only; do not absorb CIDR math into it. Current Worker/prerender still hardcodes `/tools/{slug}`, so nested theme paths need a catalog.path change before any CIDR page can go live. No work-tasks opened.

[actions]
- Added `docs/seo/serp-batches/2026-08-28-cidr-keyword-planner.md`
- Appended 10 rows to `docs/seo/keyword-daily-pool.tsv` (`source_batch=2026-08-28-cidr-keyword-planner`)
- Updated `docs/seo/keyword-to-tool-tracker.md` snapshot and decision log
