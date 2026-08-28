Date: 2026-08-28 17:05
Summary: Realigned CIDR tool IA to the intent-cluster table, prioritized long-tail slugs, and validated candidates with CloakBrowser Bing SERP.

[question]
1、意图聚类为主修正独立工具表。2、长尾优先（如 ipv6 cidr → 独立 ipv6 工具）。3、关键词选长尾。4、用 serp bing 脚本爬取分析。

[try to solve]
Rewrote `2026-08-28-cidr-keyword-planner.md` so intent clusters are authoritative and map to `/tools/{slug}` (no hub). P0 long-tail builds: `terraform-cidrsubnet`, `ip-range-to-cidr`, `private-cidr-ranges`. Dedicated `ipv6-cidr` for IPv6 searches (P1, mid_covered—needs nibble IG). Absorbed overlap/expander/mask into `cidr-host-range`; chart → `cidr-prefix-chart`. Ran `ops/seo/bing_serp` on 12 long-tails (`2026-08-28-cidr-longtail-serp`) and human-corrected draft tiers into the pool.

[actions]
- Updated `docs/seo/serp-batches/2026-08-28-cidr-keyword-planner.md` and `2026-08-28-cidr-longtail-serp.md`
- Replaced CIDR rows in `docs/seo/keyword-daily-pool.tsv`
- Updated `docs/seo/keyword-to-tool-tracker.md`
