Date: 2026-08-07 16:01
Summary: Expanded the site footer with Privacy, Terms, and Contact pages across ten locales.

[question]
补充常规网站foot及关联页面

[try to solve]
Brought the footer and related pages in line with a typical tools site:

- Footer is now copyright + About / Privacy / Terms / Contact (same link set for static site and tool-page SSR)
- Added ten-locale static pages: `/privacy`, `/terms`, `/contact` (default locale unprefixed; others `/{lang}/…`), with hreflang, sitemap, and Worker routes
- Privacy covers local processing, edge Worker cases, Clarity/Baidu analytics, and contact email; Terms cover acceptable use, no warranty, and educational health/finance disclaimer; Contact uses public email `dailyonetools@outlook.com`
- Info-page copy lives in `scripts/site/i18n-site-pages.mjs`, merged via `t()`

[actions]
- Added `scripts/site/pages/{info-page,privacy,terms,contact}.mjs`, `scripts/site/i18n-site-pages.mjs`
- Updated `scripts/site/components/footer.mjs`, `src/pages/site/footer.ts`, `scripts/build-site.mjs`, `src/index.ts`, `scripts/site/config.mjs`, `scripts/site/i18n.mjs`, `scripts/site/pages/about.mjs`
- Ten-locale `src/site/i18n/*.ts` footer short-label keys
- `npm run build:site` (sitemap includes new pages)
