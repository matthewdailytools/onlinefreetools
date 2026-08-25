Date: 2026-07-28 21:35
Summary: Fixed the language switcher broken by default-language `/en` 301s conflicting with Accept-Language negotiation.

[question]
语言无法切换，分析原因和修正

[try to solve]
Root cause (same class of issue as 2026-01-11): the SEO plan 301ed default-language explicit prefixes `/en`, `/en/tools/*`, `/en/about` to prefix-free canonical URLs, while language-switch links moved to `withLangPath`. After the user chose English and landed on `/` or `/tools/...`, server Accept-Language plus the client negotiation script redirected or replaced back to the browser preference (e.g. `/zh/`), so the switch appeared broken.

Fix: keep explicit prefixes for navigation and language switching (`/en/` and similar return 200, no 301). Language dropdown, home tool cards, and brand/footer/About nav use `withExplicitLangPath` again. SEO canonical, hreflang, and sitemap still use prefix-free canonical URLs, so the two concerns stay separate.

[actions]
- Updated: `src/index.ts` (removed default-language 301; serve `/en/`, `/en/about/` normally)
- Updated: `src/site/toolRegistrar.ts` (removed default-language tool-page 301)
- Updated: `scripts/build-site.mjs`, `scripts/site/components/content-home.mjs`, header brand/alternates
- Updated: `scripts/site/pages/home.mjs`, `about.mjs`, `footer.mjs`, `src/pages/site/footer.ts`
- Ran: `npm run build:site`
