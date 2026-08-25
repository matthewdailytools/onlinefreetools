Date: 2026-08-26 01:00
Summary: Allowed `/devlogs/` in robots.txt and removed default noindex from generated log pages.

[question]
robots.txt开启devlog

[try to solve]
Enabled crawling of development logs for search engines.

**robots.txt:** removed `Disallow: /devlogs/`; kept `Allow: /` and `Disallow: /api/`.

**Pages:** `buildDevLogs` no longer passes `robotsNoindex: true`, so index and article HTML are snippet-eligible once crawled. Sitemap still excludes `/devlogs/` (discovery via allow + internal links).

**Rules synced:** `seo-html-defaults.mdc`, `dev-logs.mdc`, `copilot-instructions.md`, `scripts/site/layout.mjs` comment. Ran `npm run build:logs` to regenerate `public/devlogs/`.

[actions]
- `public/robots.txt`
- `scripts/build-site.mjs`
- `scripts/site/layout.mjs`
- `.cursor/rules/seo-html-defaults.mdc`
- `.cursor/rules/dev-logs.mdc`
- `.github/copilot-instructions.md`
- `npm run build:logs`
