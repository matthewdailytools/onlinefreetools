Date: 2026-08-07 07:42
Summary: Added a site brand logo to the navbar and removed duplicate tool entries from the left sidebar.

[question]
工具增加logo，另外菜单上有工具重复了：http响应头

[try to solve]
1. **Logo**: added `/brand-logo.svg`; top `navbar-brand` (static home + Worker tool pages) shows logo + site name; `favicon.svg` matches the same mark.
2. **Sidebar dedupe**: tool pages used to prepend a “current tool” anchor then expand full `TOOL_PAGES`, so entries like “View HTTP response headers online” appeared twice. Shared `buildToolSidebarItems` now lists each tool once; the current item is highlighted and may still target an in-page anchor.

[actions]
- `public/brand-logo.svg`, `public/favicon.svg`
- `src/pages/site/header.ts`, `scripts/site/components/header.mjs`, `public/styles/site.css`
- `src/pages/site/sidebar.ts` — `buildToolSidebarItems`
- All tool pages switched to the deduped sidebar
- `npm run build:site`, `npm run lint:seo`
