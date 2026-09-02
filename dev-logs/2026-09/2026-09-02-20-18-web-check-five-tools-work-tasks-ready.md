Date: 2026-09-02 20:18
Summary: Created ready work-tasks, catalog shards, and icons for five web-check tools; all pass coverage:gate phase=0b.
Visibility: project

[question]
Create work-tasks for these 5 slugs (copy from work-tasks/_template/, fill completely, status ready, coverage 0b+0i tables filled so coverage:gate phase=0b will pass): check-robots-txt-url-blocked, find-and-validate-xml-sitemap, validate-security-txt, check-ssl-certificate-expiration, spf-dkim-dmarc-checker. Also catalog shards + SVG icons. Do NOT create Page.ts or i18n; do NOT run build:site.

[try to solve]
## Context
Implement-queue briefs from `docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md` (Bing Related empty → title-proxy H1s).

## Process
Copied template structure into five `work-tasks/{slug}/` folders; filled 00–03 with direction A, 使用场景表, 0b coverage table, Ads N/A, 0i intent 满足, ten locale briefs, multi-round `0b` row dated 2026-09-02. Added `src/site/tool-catalog.d/{slug}.json` (opts, localProcessing false, launchedAt 2026-09-02T12:00:00.000Z) and ASCII-comment SVG icons under `public/icons/tools/`.

## Solution
Ran `npm run coverage:gate -- --slug=… --phase=0b` for each slug — all OK. No Page.ts / i18n / build:site.

## Notes / boundaries
dns-lookup slug does not exist; SPF tool related = domain-lookup + website-headers. Catalog shards point at future Page modules but are not merged/built yet.

[actions]
- Added work-tasks for five slugs; catalog shards; five SVG icons; verified coverage:gate 0b ×5
