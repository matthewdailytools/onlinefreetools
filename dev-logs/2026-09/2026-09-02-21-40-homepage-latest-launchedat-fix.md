Date: 2026-09-02 21:40
Summary: Homepage Newest omitted web-check tools because launchedAt 12:00Z lost to prompt pack 17:00Z; corrected timestamps and reseeded local R2.
Visibility: project

[question]
首页为什么没有列出最新工具

[try to solve]
## Context
After shipping five web-check tools, the homepage Newest section still showed the prompt-builder cluster.

## Process
1. Confirmed `public/index.html` already contained the five slugs in all-tools/nav.
2. Newest uses `getLatestTools(8)` sorted by `launchedAt`.
3. Web-check shards had `launchedAt=2026-09-02T12:00:00.000Z`; prompt pack had `17:00:00.000Z` → web-check fell out of top 8.
4. Corrected launchedAt to ship evening `21:00–21:04Z`, rebuild + `upload:r2:local`.

## Root cause / analysis
Wrong first-publish stamp from brief scaffold noon, not missing build:site.

## Solution
launchedAt bumped; Newest now lists the five checkers first. Hard-refresh `/` and `/zh/` if Cache HIT persists.

## Notes / boundaries
launchedAt is first-publish only; do not routinely bump via tool:touch.

[actions]
- Updated five catalog launchedAt values; merge:tools; build:site; upload:r2:local
