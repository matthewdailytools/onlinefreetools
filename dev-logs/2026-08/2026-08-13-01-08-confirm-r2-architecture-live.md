Date: 2026-08-13 01:08
Summary: Checklist to confirm Worker+R2 is live: pages-build, HTML 200, identity/gunzip, vendor.

[question]
已经上线，如何确认新架构生效

[try to solve]
Acceptance checklist: (1) `GET /api/ops/pages-build` returns `aligned:true` with a `pagesCacheVersion` (new API; old stack often 404). (2) `/` and `/tools/{slug}` with `Accept: text/html` return 200; non-tool HTML should 404. (3) HTML responses must not ship Worker-preset `Content-Encoding: gzip` that shows as mojibake; with browser `Accept-Encoding: gzip`, a single gzip layer should decompress and Chinese text should render correctly. (4) `/vendor/*` and sitemap return 200. (5) Optional: dry-run or Dashboard to confirm Worker bundle is on the order of a few hundred KiB. The agent environment cannot probe production through the proxy; verify with local curl.

[actions]
- Explanation only; production probes returned 403 from the agent side
