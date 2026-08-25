Date: 2026-08-07 17:08
Summary: Moved About and Dev Logs from the header nav into the footer.

[question]
将菜单中的关于和开发日志移到foot中

[try to solve]
Removed About and Dev Logs from the top nav. The footer now lists: About · Dev Logs · Privacy · Terms · Contact (`/devlogs/` stays at the root path with no language prefix).

Touched: `nav.mjs` / `nav.ts`, `footer.mjs` / `footer.ts`, `info-page.mjs`, `build-site.mjs` (devlogs top bar aligned with tool pages). Ran `npm run build:site`.

[actions]
- `scripts/site/nav.mjs`, `scripts/site/pages/home.mjs`, `scripts/site/pages/info-page.mjs`
- `scripts/site/components/footer.mjs`, `scripts/build-site.mjs`
- `src/pages/site/nav.ts`, `src/pages/site/footer.ts`
- `public/_pages/*/index.html` and other build outputs
