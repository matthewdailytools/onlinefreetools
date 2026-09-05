Date: 2026-09-04 23:03
Summary: Removed four shipped Excel scene tools (graph, dashboard, pivot, browser viewer) from catalog, pages, i18n, and the homepage after an explicit user request.
Visibility: people

[question]
删除 图 / 透视 / 打开

从表画图
Excel 风看板
透视汇总
浏览器只读打开（不是 Excel Online）

[try to solve]
## Context
The Excel Planner batch had shipped twelve scene tools. The user then asked to **delete** the four visualization / open-file pages, keeping formula builders and invoice/budget/timesheet.

Removed slugs:

- `create-graph-from-spreadsheet-data`
- `create-excel-dashboard`
- `build-pivot-table-from-spreadsheet`
- `open-excel-file-in-browser`

## Process
1. Delete editable sources: `src/site/tool-catalog.d/{slug}.json`, `src/site/i18n/tools/{slug}/`, `src/pages/{camel}Page.ts`, `public/icons/tools/{slug}.svg`, `work-tasks/{slug}/`.
2. Delete leftover prerendered HTML under `public/_pages/{lang}/tools/{slug}.html` (and gzip siblings) so the Worker cannot keep serving a removed route from disk.
3. Drop the four entries from the Excel codegen `TOOLS` list so a later generator run cannot recreate them.
4. Remove ZH/EN README Tools List lines; remaining Excel tools’ `related` arrays did not point at these four.
5. `npm run merge:tools` then `npm run build:site` so `tool-catalog.json`, i18n merges, registry, homepage cards, and sitemap match the remaining **205** tools (was 209).
6. Keyword pool rows N9–N12: `verdict=drop`, `gap_notes=user_removed`. Planner analysis tables stay as historical defer advice; a catalog-status note records the unship.

## Root cause / analysis
Unshipping a live tool is not “delete the Page file only.” Homepage cards and sitemap come from the merged catalog + `build:site`. Prerendered `_pages` files are a second copy the Worker may still map if left on disk. Generated `tool-catalog.json` / `i18n/{lang}.ts` / registry must be rebuilt, never hand-edited around a hole.

The Planner document still lists N9–N12 as scene ideas. That is analysis history, not a catalog contract. Re-adding those URLs would need a new user confirmation.

## Solution
Eight Excel scene tools remain: nested IF, IFS, IFNA, COUNTIF, formula cheat sheet, invoice, budget, timesheet.

Verification: remaining slugs still listed on `public/index.html`; the four removed paths are absent from the home HTML and from `src/site/toolSlugs.generated.ts`. `lint:seo` after merge should no longer require FAQ/YMYL for the deleted slugs.

## Notes / boundaries
- Do not restore these four from the codegen helpers without putting them back on `TOOLS`.
- Historical people log for the twelve-tool ship stays; this note records the later cut.
- Do not 404-map via cloaking; absence from catalog + deleted `_pages` is the removal.

[actions]
- Removed catalog shards, i18n folders, Page modules, icons, work-tasks, and prerendered HTML for the four slugs
- README Tools List: dropped four ZH + four EN lines
- Keyword pool N9–N12 → drop / user_removed; tracker + excel Planner catalog-status note
- `npm run merge:tools` and `npm run build:site`
