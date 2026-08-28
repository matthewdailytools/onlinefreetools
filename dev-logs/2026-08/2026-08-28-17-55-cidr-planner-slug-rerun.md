Date: 2026-08-28 17:55
Summary: Re-ran CIDR Keyword Planner selection under §3.3 G; renamed harvest slug to cidr-to-ip-range and chart to cidr-cheat-sheet.

[question]
重新跑 cidr keyword Planner的选词和slug

[try to solve]
Rebuilt `docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md` with volume buckets, drop noise, and title_gap scoring on the `cidr calculator` cluster. Primary harvest long-tail is Planner `cidr to ip range` → slug/H1 `cidr-to-ip-range` / CIDR to IP range (replaces cidr-host-range). Chart primary aligns to `cidr-cheat-sheet`. VPC slug `aws-vpc-cidr-planner`. P0 unchanged: terraform-cidrsubnet, ip-range-to-cidr, private-cidr-ranges. Synced README, pool, tracker, longtail absorb targets. No work-tasks opened.

[actions]
- Rewrote cidr-keyword-planner.md + README
- Updated keyword-daily-pool.tsv, tracker, longtail-serp absorb slugs
