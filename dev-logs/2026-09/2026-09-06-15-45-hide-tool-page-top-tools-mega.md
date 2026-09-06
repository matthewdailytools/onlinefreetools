Date: 2026-09-06 15:45
Summary: Individual tool pages no longer show the top “Tools” mega menu; the sidebar tool list stays.
Visibility: people

[question]
将单个工具顶部菜单的”工具“菜单隐藏，保留侧边的工具菜单

## Tool links (English)
- https://onlinefreetools.org/tools/make-pdf-flipbook
Chinese: https://onlinefreetools.org/zh/tools/make-pdf-flipbook
(Applies to every tool page; the English URL is a representative check.)

[try to solve]
## Context
On a single tool page the header already had a “Tools” mega menu (hover panel of every topic and tool), while the left sidebar listed tools for the current cluster. The two overlapping lists made the chrome heavier than needed.

## Process
1. Tool pages build the header through `buildToolPageNavItems` in `src/pages/site/nav.ts`. That helper included `buildToolsMegaNavItem`.
2. Homepage, topic hubs, and other static pages use a separate `scripts/site/nav.mjs` helper. Those pages have no tool sidebar, so they still need the mega menu.
3. Removed the mega item from the TypeScript tool-page nav only. Sidebar `renderSidebar` / `buildToolSidebarItems` is unchanged.
4. The layout script that wires the mega panel already no-ops when `.nav-item--tools-mega` is missing.
5. Full-prerendered all tool HTML, gzipped, uploaded the local R2 bucket, and bumped `PAGES_CACHE_VERSION` so Cache API did not keep the old header.

## Root cause / analysis
The same nav builder was used as if tool pages and the homepage were the same chrome. On a tool page the sidebar is the working tools list; the top mega menu was a second catalog. Hiding it only on tool pages keeps discovery on Home / Topics without duplicating it next to the sidebar.

## Solution
- Tool-page top nav is now Home, Tool topics, Tool types, Dev Logs.
- Sidebar still titled with `nav_tools` and lists tools.
- Homepage still has the “Tools” mega menu.
- Live check (`http://127.0.0.1:8788/zh/tools/make-pdf-flipbook`, 1280px): top links `首页 / 工具主题 / 工具类型 / 开发日志`, no `#toolsMegaToggle`, `#toolNav` visible. `/zh/` still shows `工具` in the header.

## Notes / boundaries
- Production needs the usual R2 upload plus Worker `PAGES_CACHE_VERSION` 4.49 (or later). Hard-refresh an open tool tab if the old mega menu is still cached.
- Topic / type / info / home HTML was not rebuilt in this pass; only tool pages changed.

[actions]
- `src/pages/site/nav.ts`: `buildToolPageNavItems` omits the Tools mega menu
- `wrangler.jsonc`: `PAGES_CACHE_VERSION` 4.48 → 4.49
- full prerender + gzip + local R2 upload for all tool pages
