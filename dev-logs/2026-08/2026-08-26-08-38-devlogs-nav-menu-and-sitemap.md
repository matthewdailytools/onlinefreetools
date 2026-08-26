Date: 2026-08-26 08:38
Summary: Added Dev Logs to the top navigation and included `/devlogs/` index plus all article URLs in `sitemap.xml`.

[question]
开发日志入口放在菜单，更新sitemap

[try to solve]
Dev logs are now discoverable from the main site navigation and listed in the sitemap for indexing.

**Navigation**
- `scripts/site/nav.mjs` and `src/pages/site/nav.ts` add a global link (`/devlogs/`, no language prefix) to home and tool page nav items.
- Labels: English "Dev Logs", Chinese "开发日志" (other locales follow the same pattern via i18n keys).

**Sitemap**
- New `scripts/site/devlogs.mjs` collects markdown sources under `dev-logs/YYYY-MM/` (skips `_` directories) and emits sitemap entries.
- `scripts/site/sitemap.mjs`: `collectSitemapEntries` is async; merges devlog index (`/devlogs/`, priority 0.5, `singleUrl: true`) and per-article URLs (priority 0.4, `lastmod` from source `.md`).
- Devlog URLs are not expanded per language (English-only content).

**Build verification**
- `npm run build:site` → `public/sitemap.xml` with **2095** total URLs, **595** devlog-related (`/devlogs/` + articles).
- Home nav shows the link on en/zh pages; devlog pages remain snippet-eligible (no `noindex`).

**Rules/docs**
- `.cursor/rules/dev-logs.mdc` and `seo-html-defaults.mdc` updated to state devlogs are in the sitemap.
- `.github/copilot-instructions.md` synced.

[actions]
- `scripts/site/devlogs.mjs` (new)
- `scripts/site/nav.mjs`, `src/pages/site/nav.ts`
- `scripts/site/sitemap.mjs`, `scripts/site/sitemap-lastmod.mjs`, `scripts/build-site.mjs`
- `.cursor/rules/dev-logs.mdc`, `.cursor/rules/seo-html-defaults.mdc`, `.github/copilot-instructions.md`
- Regenerated `public/index.html`, `public/*/index.html`, `public/sitemap.xml`
