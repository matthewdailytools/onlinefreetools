Date: 2026-08-09 00:14
Summary: Removed home nav Featured and hero Featured CTA; replaced Browse tools link with tool-count text.

[question]
将顶部菜单“推荐”以及why卡片上方的“推荐工具”删除，“浏览全部工具”剔除链接，显示工具数量xxx

[try to solve]
Homepage build updates:

1. Top nav dropped Featured (zh label was 推荐): `buildHomeNavItems` keeps only the category dropdown (`scripts/site/nav.mjs`).
2. Hero dropped the Featured tools CTA (was `home_cta_featured` → `#featured`).
3. “Browse all tools” became non-link copy showing catalog count via `home_tools_count: '{n} …'` for all ten locales (examples: en `59 tools`, zh `59 个工具`).

`npm run build:site` refreshed `public/_pages/*/index.html`. The Featured tool cards section below remained at this step (only nav entry and CTA removed).

[actions]
- Updated `scripts/site/nav.mjs`, `scripts/site/components/content-home.mjs`, `scripts/site/i18n.mjs`, `public/styles/site.css`
- `npm run build:site`
