Date: 2026-08-09 10:08
Summary: Added unique scenario/subject tags for all 114 tools and home-style listing pages under /use-cases and /subjects.

[question]
场景 / 操作对象标签与列表页

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

[try to solve]
在不改动原有 homepage `category` 分区的前提下，为每个工具增加唯一的 `scenario` 与 `subject` 字段，并生成与首页同构的可索引列表页。Hub（`/use-cases/`、`/subjects/`）只链到 leaf，不直链工具；leaf 展示该标签下全部工具卡片。工具规范 URL 仍为 `/{lang}/tools/{slug}`。顶栏增加「应用场景」「操作对象」入口；sitemap 已纳入；`npm run lint:taxonomy` 与 `build:site` 通过。

[actions]
- Extended ToolPageMeta + src/site/taxonomy.ts / scripts/site/taxonomy.mjs
- Tagged 114 catalog shards via scripts/dev/apply-taxonomy-tags.mjs
- Shared content-tool-cards.mjs; taxonomy hub/leaf build + Worker routes + sitemap
- Nav links + i18n-taxonomy.mjs + core nav keys; npm run lint:taxonomy
