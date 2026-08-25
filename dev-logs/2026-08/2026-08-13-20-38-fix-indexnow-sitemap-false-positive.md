Date: 2026-08-13 20:38
Summary: Fixed IndexNow CLI mistaking /tools/sitemap-xml-generator for a nested sitemap URL.

[question]
xuli@Matthew-2023 onlinefreetools % npm run indexnow -- --sitemap https://onlinefreetools.org/sitemap.xml

> cloudflare-workers-openapi@0.0.1 indexnow
> node ops/seo/submit-indexnow.mjs --sitemap https://onlinefreetools.org/sitemap.xml

IndexNow sitemap source(s): https://onlinefreetools.org/sitemap.xml
Failed to fetch sitemap https://onlinefreetools.org/tools/sitemap-xml-generator: HTTP 404

[try to solve]
Root cause: old `looksLikeSitemapUrl` regex `/\/sitemap(?:[_-]|$|index)/i` treated the tool page `/tools/sitemap-xml-generator` (hyphen after `sitemap`) as a nested sitemap, then GET that page and failed the whole batch on production 404.

Tightened detection: only treat as sitemap if `.xml`/`.xml.gz` and path contains sitemap, or the last segment is `/sitemap`, `/sitemap_index`, `/sitemap-index`, or under `/sitemaps/`. Local dry-run passed.

Also: production `https://onlinefreetools.org/tools/sitemap-xml-generator` currently returns HTTP 404 while sitemap.xml still lists that URL — needs a separate deploy/sync of site artifacts.

After the fix, rerun:
`npm run indexnow -- --sitemap https://onlinefreetools.org/sitemap.xml`

[actions]
- ops/seo/submit-indexnow.mjs: tighten looksLikeSitemapUrl
