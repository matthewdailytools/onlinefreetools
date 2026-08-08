Date: 2026-08-08 15:52
Summary: Wire new catalog category `design` with sync categories + ten-locale i18n keys.

[question]
In repo /Users/xuli/vscodeai/onlinefreetools, add a new tool category `design` for designer tools.

Requirements:
1. Update `src/site/tools.ts` ToolCategory to include `'design'`
2. Update `src/site/categories.ts` and `scripts/site/categories.mjs` in sync:
   - TOOL_CATEGORY_ORDER: `['image', 'design', 'developer', 'calculator']`
   - CATEGORY_ANCHORS.design = 'cat-design'
   - getCategoryRuntimeLabelKey → tool_category_design
   - getCategoryHomeLabelKey → home_cat_design
   - CATEGORY_HOME_SECTION_KEYS for design with home_cat_design / _desc / _blurb
3. Update `src/pages/site/toolContent.ts` buildToolJsonLd category branching for design:
   - label: tool_category_design
   - anchor: cat-design
   - applicationCategory: 'UtilitiesApplication' (or DesignApplication string)
4. Add i18n keys to ALL 10 files in `src/site/i18n/core/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`:
   - tool_category_design
   - And if home_cat_* live in core, add home_cat_design, home_cat_design_desc, home_cat_design_blurb
5. Add home_cat_design* to ALL 10 language blocks in `scripts/site/i18n.mjs` (near existing home_cat_image keys)

Translations (localize, don't leave English everywhere):
- en: Design tools / color, contrast, brand / Browser-local design utilities — contrast and brand tokens, no upload.
- zh: 设计工具 / 配色、对比度、品牌色 / 浏览器本地设计工具 — 对比度与品牌色 token，文件不上传。
- For other langs: short natural local phrases for Design / color·contrast·brand.

Do NOT create the tools themselves. Only category wiring + i18n keys.

Return list of files changed.

[try to solve]
已接入 catalog 分类 `design`（尚未创建具体工具）：`ToolCategory` 含 `design`；`TOOL_CATEGORY_ORDER` 为 `image → design → developer → calculator`；锚点 `#cat-design`；运行时键 `tool_category_design`；首页键 `home_cat_design` / `_desc` / `_blurb`；JSON-LD 使用 `tool_category_design`、`cat-design`、`DesignApplication`。十语 core 已加 `tool_category_design`（`home_cat_*` 仅在构建侧 `scripts/site/i18n.mjs`）；已 `npm run merge:tools` 刷新生成的 `src/site/i18n/{lang}.ts`。

Files changed:
- src/site/tools.ts
- src/site/categories.ts
- scripts/site/categories.mjs
- src/pages/site/toolContent.ts
- src/site/i18n/core/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- scripts/site/i18n.mjs
- src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts (generated via merge:tools)

[actions]
- Updated category wiring in tools.ts / categories.ts / categories.mjs / toolContent.ts
- Added tool_category_design to 10 core locale files; home_cat_design* to 10 blocks in scripts/site/i18n.mjs
- Ran npm run merge:tools
