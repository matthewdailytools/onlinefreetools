Date: 2026-01-11 13:56
Summary: Migrated the Markdown-to-HTML tool from a static HTML file to dynamic Worker routes with zh/en support and the site’s sidebar/header/footer/content layout.

[question]
移除markdown to html的静态，采用动态路由；需要具备多国语言支持，符合sidebar+header+footer+content的模式

[try to solve]
- Implemented a dynamic Markdown-to-HTML tool page rendered by the Worker, using the same layout structure as the static site (fixed header + sidebar + footer + content).
- Added localized routes for both default and explicit language paths: `/tools/markdown-to-html` and `/:lang/tools/markdown-to-html`.
- Kept backwards compatibility by redirecting legacy `/tools/markdown-to-html.html` to the new route.
- Updated the static home page tool cards to link to the new dynamic route (language-prefixed).
- Removed the old static `public/tools/markdown-to-html.html` page.

[actions]
- Updated: `src/index.ts`
- Added: `src/pages/markdownToHtmlPage.ts`
- Added: `src/pages/site/layout.ts`
- Added: `src/pages/site/header.ts`
- Added: `src/pages/site/sidebar.ts`
- Added: `src/pages/site/footer.ts`
- Updated: `src/site/i18n.ts`
- Updated: `scripts/site/components/content-home.mjs`
- Removed: `public/tools/markdown-to-html.html`
