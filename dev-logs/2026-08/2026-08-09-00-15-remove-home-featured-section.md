Date: 2026-08-09 00:15
Summary: Removed the entire homepage Featured tools card section.

[question]
下方 Featured 卡片区仍在；也要整段去掉

[try to solve]
Deleted the whole `#featured` block from `scripts/site/components/content-home.mjs` (heading “Featured / 推荐” + “View all” + Featured card grid) and removed `renderPrimaryCard`, which existed only for that section. Homepage structure is now Hero (tool count) → Why×3 → All-tools category directory. `npm run build:site` refreshed ten-locale home pages; build output has no `id="featured"` / `home-featured`.

[actions]
- Updated `scripts/site/components/content-home.mjs`, `public/styles/site.css` comments
- `npm run build:site`
