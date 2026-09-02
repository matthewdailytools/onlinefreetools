Date: 2026-09-02 21:59
Summary: Robots checker “Network connection lost” came from auto-sample google.com outbound failure; switched sample to github.com/search and mapped upstream fetch errors.
Visibility: project

[question]
http://localhost:8788/zh/tools/check-robots-txt-url-blocked 的 错误：Network connection lost.

[try to solve]
## Context
Page auto-runs loadSample on load; API returned 502 with workerd message Network connection lost.

## Process
1. Reproduced: `?url=https://www.google.com/` → Network connection lost; example.com OK; github.com/search OK and Disallow:/search$ demo.
2. Wikipedia/Google often timeout from this network; Bing/Cloudflare/GitHub reachable.
3. Sample → https://github.com/search; fetchWithTimeout maps timeout/network to clearer JSON error.

## Root cause / analysis
Not a broken route—outbound fetch to google.com fails in local workerd; UI surfaces raw Error.message.

## Solution
Sample switched to `https://www.bing.com/search` (Disallow:/search, reachable here). Upstream errors mapped to “Could not reach…” / “Timeout…”. Gzip + R2 + `PAGES_CACHE_VERSION` 4.9 so local HTML cache drops the old google sample.

## Notes / boundaries
User-entered google.com/github may still fail on flaky outbound; production edge usually differs. After prerender-only, must run `gzip:pages` before `upload:r2:local`.

[actions]
- remoteFetchGuard mapUpstreamFetchError; sample→bing.com/search; gzip+upload; PAGES_CACHE_VERSION 4.9
