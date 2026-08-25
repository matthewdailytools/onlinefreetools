Date: 2026-08-12 23:02
Summary: Without R2 upload, home/info pages still work via Assets; all /tools/* 404 because tool HTML is gitignored.

[question]
如果现在push到git，然后cloudflare 拉取deploy后，如果没有R2，是否访问就会出错？

[try to solve]
Two layers:

1. If the R2 bucket was never created: deploy often fails on the binding and the whole site never comes up.
2. If the bucket exists but is empty / never got `upload:r2`: Worker R2 miss → ASSETS fallback. Home/about/taxonomy pages still live in git under `public/_pages` (~270 pages) → reachable. Tool pages under `public/_pages/*/tools/` are gitignored and never enter Assets → `/tools/*` returns 404.

Conclusion: push alone without seeding R2 does not make the tool site usable. Production needs `upload:r2` (or CI that builds and uploads).

[actions]
- Explanation only; no code changes
