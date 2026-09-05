Date: 2026-09-04 22:15
Summary: Shipped twelve Excel scene tools from the Planner defer list, with scene-sentence H1s, ten-locale copy, and one full site build.
Visibility: people

[question]
以效率优化的模式逐条对”defer 新 slug“立项并实现。

[try to solve]
## Context
The Excel Keyword Planner batch (1162 software-brand seeds) had produced **12 defer slugs** and **0 absorb**. The user then asked to brief and implement every deferred slug, using token-efficiency **paths** without skipping coverage gates (0b → page/en → phase 2 → ten locales → phase 4 → `build:site`). Head terms such as `online excel`, `IFS Excel`, and `Pivot table Excel` stay out of H1.

The twelve jobs, with scene H1s:

| slug | H1 |
|---|---|
| `write-nested-if-formula-for-excel` | Write a nested IF formula for Excel |
| `write-ifs-formula-in-excel` | Write an IFS formula in Excel |
| `wrap-formula-with-ifna` | Wrap a formula with IFNA |
| `write-countif-formula-in-excel` | Write a COUNTIF formula in Excel |
| `excel-formulas-cheat-sheet` | Copy common Excel formulas |
| `create-invoice-spreadsheet` | Create an invoice spreadsheet |
| `create-budget-spreadsheet` | Create a budget spreadsheet |
| `create-excel-timesheet` | Create an Excel timesheet |
| `create-graph-from-spreadsheet-data` | Create a graph from spreadsheet data |
| `create-excel-dashboard` | Create an Excel dashboard |
| `build-pivot-table-from-spreadsheet` | Build a pivot table from a spreadsheet |
| `open-excel-file-in-browser` | Open an Excel file in the browser |

Invoice and budget are **YMYL** (`ymyl: true` + disclaimer). All twelve are local-processing; spreadsheet download/viewer pages load SheetJS from a CDN but do not upload files.

## Process
1. **Briefs (0b)** — `work-tasks/{slug}/` with coverage table, intent review, locale briefs, and `coverage:gate --phase=0b` green for all twelve before engineering.
2. **Engineering** — catalog shards (`page.style: opts`), SVG icons, `*Page.ts`, and `src/site/i18n/tools/{slug}/{lang}.ts` for ten locales. Related links stay inside this batch (or existing `excel-compare-files` / `csv-json` for the viewer) so other tools’ shards are untouched.
3. **Copy** — English packs plus native How/FAQ/rules for zh/es/ja; other locales use local syntax and job nouns, not a locked English Q1 order. Meta descriptions are padded to ≥120 characters with a process/example keyword for `lint:seo`.
4. **Gates** — per slug `coverage:gate --phase=all` and `lint:tool-page`; then **one** `npm run build:site` (209 tools × 10 langs) instead of twelve full prerenders.
5. **Script bug** — CSV/xlsx tools used `split(/\n/)` and sample strings with `\n` inside the Page `extraBodyHtml` template literal. Prerender turned those into real newlines and broke inline JS (`lint:tool-page --require-html`). Fix: `String.fromCharCode(10)` and `.join(...)` so the template never contains a newline escape.
6. **Ship checks** — `--require-html` green for all twelve; `lint:seo` green for this batch (legacy title WARNs elsewhere left alone). Home `public/index.html` contains each `/tools/{slug}`. README Tools List gained 12 ZH + 12 EN lines.

## Root cause / analysis
Defer meant “needs an implementation spec + scene H1,” not “never ship.” Token efficiency here is **shared codegen + one full build**, not skipped 0b/2/4 or machine-identical ten-locale dumps.

The `\n` failure is specific to **nested templates**: Python f-string → TypeScript template literal → HTML. A JS string `\n` in that chain becomes an actual line break unless doubled at every layer; `fromCharCode(10)` avoids the chain.

Isolation `lint:tool-isolation` is defined per slug against `origin/main`. A twelve-page batch will flag sibling new files unless `CROSS_TOOL_UPDATE=1`. That is expected for this batch, not a reason to skip `--require-html` or `lint:seo`.

## Solution
Live paths (English default, no language prefix):

- https://onlinefreetools.org/tools/write-nested-if-formula-for-excel
- https://onlinefreetools.org/tools/write-ifs-formula-in-excel
- https://onlinefreetools.org/tools/wrap-formula-with-ifna
- https://onlinefreetools.org/tools/write-countif-formula-in-excel
- https://onlinefreetools.org/tools/excel-formulas-cheat-sheet
- https://onlinefreetools.org/tools/create-invoice-spreadsheet
- https://onlinefreetools.org/tools/create-budget-spreadsheet
- https://onlinefreetools.org/tools/create-excel-timesheet
- https://onlinefreetools.org/tools/create-graph-from-spreadsheet-data
- https://onlinefreetools.org/tools/create-excel-dashboard
- https://onlinefreetools.org/tools/build-pivot-table-from-spreadsheet
- https://onlinefreetools.org/tools/open-excel-file-in-browser

Chinese URLs use `/zh/tools/...`. `02` status is `implemented`; `03` is `i18n-done`. Tracker records the user confirmation to build the defer list.

Browser MCP was not available; verification used prerendered `_pages/en/tools/{slug}.html` (H1 + `loadSample`) and home-card hrefs.

## Notes / boundaries
- Do not clone Excel Online. The viewer is read-only; cheat sheet does not generate nested IF.
- IFS page documents Excel 2016+; older files belong on nested IF.
- File-job slugs (xlsx↔csv, merge, Excel→PDF) still have **zero Planner hits** and were not invented.
- Generators under `scripts/tool-modules/_gen-excel-scene-*.py` / `_excel_*.py` are batch helpers; edit a single tool via its catalog shard, Page, and i18n folder after this ship.

[actions]
- Added `work-tasks/` for the twelve Excel scene slugs (0b/0i + locale briefs)
- Added catalog shards, icons, Page modules, and ten-locale i18n under `src/site/` and `public/icons/tools/`
- `npm run merge:tools` and `npm run build:site` (homepage, prerender, sitemap)
- README Tools List: 12 ZH + 12 EN entries after excel-compare-files
- Tracker + Excel Planner note: defer list implemented after user confirmation
