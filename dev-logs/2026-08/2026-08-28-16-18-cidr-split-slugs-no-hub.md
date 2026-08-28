Date: 2026-08-28 16:18
Summary: Dropped the CIDR theme hub; mapped long-tail intents to eleven `/tools/{slug}` candidates, each with a distinct H1 and at least three Information Gain items.

[question]
1、还是按照原来的路由设置url。不再做主题页。2、按照意图重新尽量拆分长尾关键词为slug和title，但是需要增加足够的info gain

[try to solve]
Keep existing tool URLs: `/{lang}/tools/{slug}` only. No `/cidr` hub.

Split only where the job, algorithm, or failure modes differ enough to fill IG without doorway clones. Proposed slugs and English H1s: `cidr-to-host-range` (IPv4 CIDR to host range), `subnet-mask-to-cidr`, `cidr-prefix-chart`, `ip-range-to-cidr`, `cidr-to-ip-list`, `ipv6-cidr-calculator`, `vlsm-subnet-calculator`, `cidr-overlap-checker`, `terraform-cidrsubnet`, `vpc-cidr-planner`, `private-cidr-checker`. Head terms `cidr calculator` / `cidr notation` stay secondary copy, not sole H1s. Inverse range conversion, Terraform helper functions, AWS vs Azure, and per-prefix pages stay merged. Weekly `build` still prefers long-gap slugs (terraform, list summarization, overlap, IPv6, IP list, private checker, VPC planner). No work-tasks opened.

[actions]
- Appended revision section to `docs/seo/serp-batches/2026-08-28-cidr-keyword-planner.md`
- Updated CIDR rows in `docs/seo/keyword-daily-pool.tsv` (paths `/tools/{slug}`)
- Appended decision in `docs/seo/keyword-to-tool-tracker.md`
