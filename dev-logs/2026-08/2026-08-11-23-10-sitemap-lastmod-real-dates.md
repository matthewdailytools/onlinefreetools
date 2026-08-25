Date: 2026-08-11 23:10
Summary: Sitemap lastmod now tracks real content changes via source hashes; unchanged URLs keep prior dates.

[question]
sitemap的生成中日期字段，需要根据实际的来，如果没有更新，就按照之前的日期；有更新或者新建按新日期来。

[try to solve]
Sitewide sitemap now writes real `<lastmod>` values and refreshes them only when source content changes.

Rules:
- Every `<url>` includes `<lastmod>yyyy-MM-dd</lastmod>`.
- Unchanged source-file hash → reuse the date from state / prior sitemap.
- New URL or updated source → use current git HEAD commit date (or UTC today without git).
- State lives in `scripts/site/sitemap-lastmod-state.json` (committed); updated only on full writes of `public/sitemap.xml`; filtered builds leave state alone by default.

Verification: first run marked 1470 URLs new; immediate re-run reused all 1470; changing one locale i18n file marked only that URL changed.

[actions]
- Added `scripts/site/sitemap-lastmod.mjs` + `scripts/site/sitemap-lastmod-state.json`
- Updated `scripts/site/sitemap.mjs`, `scripts/build-site.mjs`, `ops/seo/generate-sitemap.mjs`
- Regenerated `public/sitemap.xml` with lastmod
- Documented in `ops/README.md` §4.0 and `.cursor/rules/seo-html-defaults.mdc`
