Date: 2026-08-29 10:36
Summary: Shipped 16 topic hubs with Info Gain, multi-row topic nav, and primary-topic breadcrumbs on every tool page.

[question]
就按这些主题划分作为工具的菜单分类。1、为这些topic创建主题页，并增加Info Gain。2、菜单根据主题划分，采用多行菜单模式。3、每个工具的页面增加primary分类的面包屑。

[try to solve]
Implemented the 2026-08-28 16-topic taxonomy end-to-end:

1. **Catalog**: every shard now has required `primaryTopic` and optional `secondaryTopics`; `merge:tools` validates IDs. Helpers live in `src/site/topics.ts` / `scripts/site/topics.mjs`.

2. **Topic pages**: `/topics` hub + `/topics/{id}` leaves (10 locales) with people-first IG (intro, how to choose, limits, FAQ ≥3), primary then secondary tool grids, CollectionPage/ItemList/BreadcrumbList JSON-LD. Wired through `build-site`, Worker routes in `src/index.ts`, and sitemap.

3. **Nav**: replaced the five category dropdowns with 16 topic dropdowns (primary tools + “view all”); CSS allows navbar wrap (`--header-h-multirow` on lg+). Kept where2use / tool-type / Topics / Devlogs links. Home `#cat-*` still uses legacy `category` (unchanged this PR).

4. **Tool breadcrumbs**: visible `Home → primary topic → tool` plus matching JSON-LD (no more `#cat-*` anchors), injected in `renderLayout` for all tool pages.

[actions]
- Added `primaryTopic` / `secondaryTopics` to all `src/site/tool-catalog.d/*.json`
- Added `src/site/topics.ts`, `scripts/site/topics.mjs`, `scripts/site/i18n-topics.mjs`, `content-topics.mjs`, `pages/topics.mjs`
- Updated nav (`scripts/site/nav.mjs`, `src/pages/site/nav.ts`), `toolContent.ts`, `layout.ts`, `site.css`, `build-site.mjs`, `sitemap.mjs`, `src/index.ts`
- Synced topic label keys into `src/site/i18n/core/{lang}.ts`
- Ran `npm run merge:tools`, `npm run build:site`, `npm run lint:seo`
