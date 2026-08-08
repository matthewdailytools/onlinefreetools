Date: 2026-08-09 00:15
Summary: Removed the entire homepage Featured tools card section.

[question]
下方 Featured 卡片区仍在；也要整段去掉

[try to solve]
已从 `scripts/site/components/content-home.mjs` 删除 `#featured` 整段（标题「推荐」+「查看全部」+ Featured 卡片网格），并移除仅用于该区的 `renderPrimaryCard`。首页结构现为 Hero（工具数量）→ Why×3 → 全部工具分类目录。`npm run build:site` 已刷新十语首页；产物中无 `id="featured"` / `home-featured`。

[actions]
- 更新 `scripts/site/components/content-home.mjs`、`public/styles/site.css` 注释
- `npm run build:site`
