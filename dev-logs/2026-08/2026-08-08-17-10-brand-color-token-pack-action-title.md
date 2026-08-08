Date: 2026-08-08 17:10
Summary: Retitle brand-color-token-pack to action + search-intent phrasing across 10 locales.

[question]
https://onlinefreetools.org/zh/tools/brand-color-token-pack 品牌色 Token 包 — HEX/HSL/OKLCH 色阶，标题不符合seo搜索，同时应该是一个动作

[try to solve]
同意。旧标题是名词「Token 包」+ HEX/HSL/OKLCH 参数枚举，不像用户会搜的「色阶/色板生成」。已改为动作 + 检索主词（slug 不变）：

- ZH：`品牌色色阶生成 — 一主色出 50–950 色板与 CSS 变量`
- EN：`Generate Brand Color Scale — 50–950 Palette & CSS Tokens`
- 其余八语同步为 Generate/Generar/Buat/erzeugen 等动作向写法；HEX/HSL/OKLCH 留在 description 与色彩空间区。

已更新十语 i18n、`02`/`03` brief、README、清单表、相关工具 FAQ 称呼，并 `merge:tools` + `build:site`；`lint:seo` 通过。

[actions]
- src/site/i18n/tools/brand-color-token-pack/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- src/site/i18n/tools/smart-website-color-scheme/*.ts（FAQ 相关工具称呼）
- work-tasks/brand-color-token-pack/02-tool-info.md, 03-locale-briefs.md
- README.md, docs/2026-08-08-tool-inventory-table.md
- src/pages/brandColorTokenPackPage.ts（注释）
- npm run merge:tools && npm run build:site
