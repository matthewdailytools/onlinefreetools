Date: 2026-08-07 07:11
Summary: Added explicit IndexNow sitemap flags for local/remote sources, filters, and npm shortcuts.

[question]
增加支持根据sitemap 提交的参数

[try to solve]
Extended `ops/seo/submit-indexnow.mjs` with sitemap-focused flags: `--sitemap [path|url]`, `--sitemap-url`, `--remote-sitemap`, `--sitemap-only` (kept `--from-sitemap`). Supports local files and remote URLs, plus recursive sitemapindex; npm adds `indexnow:sitemap` / `indexnow:remote-sitemap`. Docs synced.

[actions]
- ops/seo/submit-indexnow.mjs
- package.json
- ops/README.md
- docs/SEO_PUBLISH_CHECKLIST.md
