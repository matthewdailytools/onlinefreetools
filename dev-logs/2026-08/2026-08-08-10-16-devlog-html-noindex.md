Date: 2026-08-08 10:16
Summary: Added meta robots noindex to generated devlog HTML pages and index.

[question]
devlog的生成的html 增加noindex

[try to solve]
Added `<meta name="robots" content="noindex" />` to all generated devlog pages in the build pipeline:

1. **`scripts/site/layout.mjs`** — `renderLayout` gained optional `robotsNoindex` (default `false`).
2. **`scripts/build-site.mjs`** — `buildDevLogs()` passes `robotsNoindex: true` for both article and index pages.
3. **`.cursor/rules/seo-html-defaults.mdc`** — indexing notes updated: devlogs use noindex meta.

Aligned with existing policy: `robots.txt` already has `Disallow: /devlogs/`, and the sitemap excludes devlogs; noindex is an extra signal for already-discovered or previously indexed URLs.

Ran `npm run build:logs` to refresh all HTML under `public/devlogs/`.

[actions]
- scripts/site/layout.mjs
- scripts/build-site.mjs
- .cursor/rules/seo-html-defaults.mdc
- public/devlogs/*.html (rebuild via build:logs)
