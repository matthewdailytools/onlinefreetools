Date: 2026-08-06 14:11
Summary: Removed `/devlogs/` URLs from sitemap generation; sitemap retained 110 tool and site URLs only.

[question]
sitemap不要放开发日志链接

[try to solve]
Removed the `/devlogs/` index and all individual devlog URLs from `buildSitemap()` in `scripts/build-site.mjs`. Dev-log pages remain reachable via in-site navigation but are not submitted in the search-engine sitemap.

Ran `npm run build:site`; `public/sitemap.xml` then had 110 URLs (no devlogs).

[actions]
- `scripts/build-site.mjs`
- `public/sitemap.xml`
