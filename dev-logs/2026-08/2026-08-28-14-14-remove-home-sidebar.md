Date: 2026-08-28 14:14
Summary: Removed the homepage sidebar and its navbar hamburger; category browsing stays in the top nav and on-page directory.

[question]
首页的侧边栏菜单删除

[try to solve]
The homepage no longer renders `#sidebar` or the ☰ toggle. `buildHome` passes an empty sidebar, `showSidebarToggle: false`, and skips the toggle script. `renderLayout` treats empty sidebar HTML as a full-width `layout-no-sidebar` layout so the main column is not reserved for a hidden drawer. Tool pages, About/Privacy/Terms, taxonomy hubs, and Dev Logs still use their own sidebars. Hash links such as `#cat-pdf` still open the matching `<details>` block. `npm run build:site` refreshed ten-locale home HTML; `public/index.html` and `public/zh/index.html` have `layout-no-sidebar` and no `id="sidebar"`.

[actions]
- Updated `scripts/site/pages/home.mjs`, `scripts/build-site.mjs` (`buildHome`), `scripts/site/layout.mjs`, `public/styles/site.css`
- Ran `npm run build:site`
