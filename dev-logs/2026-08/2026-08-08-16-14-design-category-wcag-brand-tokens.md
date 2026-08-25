Date: 2026-08-08 16:14
Summary: Added design category and shipped wcag-contrast-checker plus brand-color-token-pack.

[question]
新建设计类，立项工具:wcag-contrast-checker,brand-color-token-pack；然后实现

[try to solve]
Added an on-site `design` category (order: image → design → developer → calculator; anchor `#cat-design`; ten-locale `tool_category_design` / `home_cat_design*`; JSON-LD `DesignApplication`), and completed briefs (`work-tasks/*/00–03`, including pre-checklist search coverage) plus implementation for two P0 designer tools.

- `wcag-contrast-checker`: foreground/background pickers → WCAG relative luminance and contrast ratio, AA/AAA badges (normal/large text), suggested pairs; entry sample `#767676` / `#ffffff`; Related → brand-color-token-pack, color-from-image.
- `brand-color-token-pack`: one primary → HEX/RGB/HSL/OKLCH, 50–950 scale, black/white text contrast, Copy CSS/JSON; entry sample `#2563eb`; Related → wcag-contrast-checker, color-from-image.
- `color-from-image` related links updated to both tools (explicit cross-tool change).
- Ten-locale i18n shards, `merge:tools`, `lint:seo`, homepage `build:site`, and local 200 smoke checks passed; README and inventory table updated. Local paths: `/tools/wcag-contrast-checker`, `/tools/brand-color-token-pack`.

[actions]
- Added design category wiring in tools/categories/toolContent + core i18n + scripts/site/i18n.mjs
- Created work-tasks for both slugs; catalog shards; pages; icons; 10-locale i18n shards
- Updated color-from-image related; README; docs/2026-08-08-tool-inventory-table.md
- Ran merge:tools, lint:seo, build:site; smoked tool URLs on :8788
