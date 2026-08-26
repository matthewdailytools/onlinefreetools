Date: 2026-08-26 10:09
Summary: Added a footer GitHub link to the project repository on all site pages.

[question]
底部增加github本项目的入口

[try to solve]
The site footer now includes an external **GitHub** link pointing at this repository.

**Behavior**
- Footer nav order: About · Privacy · Terms · Contact · GitHub
- URL: `https://github.com/matthewdailytools/onlinefreetools` (configurable via `SITE_GITHUB_REPO_URL` / `siteConfig.githubRepoUrl`)
- Opens in a new tab with `rel="noopener noreferrer"`
- Label `footer_github` is “GitHub” in all 10 locales (brand name kept)

**Sources**
- Static site: `scripts/site/components/footer.mjs` + `scripts/site/config.mjs`
- Tool SSR: `src/pages/site/footer.ts` (same URL constant)
- Copy: `src/site/i18n/core/*.ts` and `scripts/site/i18n-site-pages.mjs`

**Verify**
- `npm run build:site` succeeded; home footer HTML contains the GitHub href.

[actions]
- `scripts/site/config.mjs`, `scripts/site/components/footer.mjs`, `src/pages/site/footer.ts`
- `scripts/site/i18n-site-pages.mjs`, `src/site/i18n/core/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Regenerated public HTML via `npm run build:site`
