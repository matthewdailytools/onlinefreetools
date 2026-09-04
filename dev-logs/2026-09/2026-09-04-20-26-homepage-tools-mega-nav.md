Date: 2026-09-04 20:26
Summary: Homepage top nav now uses the same single Tools mega menu as tool pages, instead of 16 wrapping topic dropdowns.
Visibility: people

[question]
将首页的菜单修改为单个tool的菜单

[try to solve]
## Context
The homepage previously rendered one Bootstrap dropdown per tool topic (Health, PDF, Image, …), which wrapped into a two-row navbar on large screens (`--header-h-multirow`). Tool slug pages already used a single **Tools** mega menu: hover opens a two-pane panel (topic rail on the left, primary tools on the right). The request was to make the homepage chrome match that compact tool-page menu.

## Process
1. Confirmed homepage HTML comes from `buildHomeNavItems` in `scripts/site/nav.mjs` (via `scripts/site/pages/home.mjs` → `buildHome`).
2. Replaced the topic-dropdown list with `buildToolsMegaNavItem` plus Home, taxonomy links, and Dev Logs. Homepage still includes the **where2use** link that tool pages omit.
3. Removed unused `buildTopicNavDropdowns`.
4. Dropped homepage-only multirow navbar CSS (`body.is-home-page` wrap + `--header-h-multirow`) and applied the constrained mega-panel width and single-row navbar rules globally so home, topics, and tool pages share one chrome height.
5. Rebuilt all-language home HTML (`public/index.html`, `public/{lang}/index.html`). Verified in a browser: desktop header is 60px; nav labels are Home / Tools / Tool topics / where2use / Tool types / Dev Logs; opening Tools shows 18 topics and switching to PDF & docs lists that topic’s tools. Chinese home uses 首页 / 工具 / …

## Root cause / analysis
Two nav builders existed on purpose after 2026-08-29: home kept 16 dropdowns; tool pages got the mega menu. With more topics, the home bar wrapped and used a different interaction than every other page. Unifying on the mega menu removes that split without changing tool URLs or taxonomy hubs.

## Solution
- `buildHomeNavItems`: Home → Tools mega → topics / where2use / tool-type → Dev Logs.
- `public/styles/site.css`: one-row header; mega panel `width: min(64rem, calc(100% - 1.5rem))` on all pages.
- Comments in `src/pages/site/nav.ts` updated so agents do not keep the old “do not change home nav” instruction.

Local wrangler may still serve a Cache API HIT of the old home until `restart:dev` (or an exact-key purge). Disk HTML under `public/` is already the new nav.

## Notes / boundaries
- Tool slug pages, info pages, and `/topics` already used `buildToolPageNavItems`; they did not gain where2use.
- Mega menu links still open tools in a new tab (`openInNewTab: true`).
- This change is chrome-only; catalog, i18n shards, and tool pages were not edited.

[actions]
- scripts/site/nav.mjs, scripts/site/pages/home.mjs, src/pages/site/nav.ts, public/styles/site.css
- Rebuilt home HTML for all enabled languages
