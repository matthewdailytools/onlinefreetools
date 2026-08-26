Date: 2026-08-26 10:36
Summary: Paginated the Dev Logs index at 30 entries per page and added a GitHub repo link beside the subtitle.

[question]
https://onlinefreetools.org/devlogs/ 分页，30一页；另外顶部“Browse Q&A and implementation notes by month.”增加github的项目入口

[try to solve]
The Dev Logs index is now paginated and links to the GitHub repository next to the subtitle.

**Pagination**
- Page size: **30** (`DEVLOGS_PAGE_SIZE` in `scripts/site/devlogs.mjs`)
- Page 1: `/devlogs/` (`index.html`)
- Later pages: `/devlogs/page-{n}.html`
- Within each page, entries stay grouped by month
- Prev/Next controls + `rel="prev"` / `rel="next"` in `<head>`
- Sitemap includes all index pages (plus articles)

**GitHub entry**
- Subtitle line ends with a `GitHub` link to `siteConfig.githubRepoUrl` (`https://github.com/matthewdailytools/onlinefreetools`), `target="_blank"` + `noopener noreferrer`
- Label key: `devlogs_github` (10 locales in `scripts/site/i18n.mjs`)

**Verify**
- ~596 published logs → 20 pages (30 × 19 + 26 on page 20)
- Index shows “Page 1 of 20” and the GitHub link beside the subtitle

[actions]
- `scripts/site/devlogs.mjs` — page helpers + sitemap page URLs
- `scripts/build-site.mjs` — paginated index generation
- `scripts/site/i18n.mjs` — `devlogs_github` / prev / next / page status (10 langs)
- Regenerated `public/devlogs/` and `public/sitemap.xml`
