Date: 2026-08-08 16:14
Summary: Added design category and shipped wcag-contrast-checker plus brand-color-token-pack.

[question]
新建设计类，立项工具:wcag-contrast-checker,brand-color-token-pack；然后实现

[try to solve]
已新增站内 `design` 分类（顺序 image → design → developer → calculator；锚点 `#cat-design`；十语 `tool_category_design` / `home_cat_design*`；JSON-LD `DesignApplication`），并完成两个 P0 设计师工具的立项（`work-tasks/*/00–03`，含清单前检索覆盖）与实现。

- `wcag-contrast-checker`：前景/背景取色 → WCAG 相对亮度与对比度比率、AA/AAA（普通/大字）徽章、建议配对；进页样例 `#767676` / `#ffffff`；Related → brand-color-token-pack、color-from-image。
- `brand-color-token-pack`：一主色 → HEX/RGB/HSL/OKLCH、50–950 色阶、黑白文字对比、Copy CSS/JSON；进页样例 `#2563eb`；Related → wcag-contrast-checker、color-from-image。
- `color-from-image` related 已互链至上述两工具（显式跨工具改动）。
- 十语 i18n 分片、`merge:tools`、`lint:seo`、首页 `build:site`、本地 200 冒烟通过；README 与库存表状态已更新。本地路径：`/tools/wcag-contrast-checker`、`/tools/brand-color-token-pack`。

[actions]
- Added design category wiring in tools/categories/toolContent + core i18n + scripts/site/i18n.mjs
- Created work-tasks for both slugs; catalog shards; pages; icons; 10-locale i18n shards
- Updated color-from-image related; README; docs/2026-08-08-tool-inventory-table.md
- Ran merge:tools, lint:seo, build:site; smoked tool URLs on :8788
