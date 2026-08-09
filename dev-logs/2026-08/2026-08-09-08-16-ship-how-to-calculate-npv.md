Date: 2026-08-09 08:16
Summary: Shipped how-to-calculate-npv end-to-end through SEO coverage gates 0b→2→4→all with ten-locale i18n.

[question]
You are shipping ONE tool end-to-end in /Users/xuli/vscodeai/onlinefreetools following mandatory serial SEO gates. Do NOT skip steps. Do NOT start another tool's Page.ts.

Slug: how-to-calculate-npv
§12 #16. YMYL finance. Related: how-to-calculate-cagr, how-to-calculate-roi (or compound-interest if better).

Pipeline (must run gates and get green before advancing):
1. Complete work-tasks/how-to-calculate-npv/ 00,01,02,03 (00 already partially exists). Fill 02 coverage table + 03 with 0b row and checkbox 清单前检索覆盖已做. Title: "NPV Calculator — How to Calculate Net Present Value". Avoid param-enum titles (no 3+ comma lists in subtitle).
2. npm run coverage:gate -- --slug=how-to-calculate-npv --phase=0b  → must OK → set 02=ready
3. Implement catalog json, SVG icon, en.ts (faqPrefix tool_npv), howToCalculateNpvPage.ts
   - Inputs: discount rate % annual; initial investment (positive outflow); then a textarea of comma/newline cash flows for years 1..n OR simple mode: year1, year2, year3 optional fields — prefer textarea of CF1..CFn
   - Formula: NPV = -I0 + sum(CFt / (1+r)^t)
   - Sample: I0=10000, r=10%, CF = 3000, 4200, 6800 → compute and put exact number in Example
   - YMYL disclaimer, FAQ≥3, Formula with assumptions, References Investopedia NPV
   - Chinese comments on functions in Page.ts
4. Add 1 + 1b rows to 03; merge:tools; coverage:gate phase=2
5. Write independent zh/es/ja/fr/de/pt/id/ru/ar (NOT English UI). zh title: NPV 计算器 — 如何计算净现值. zh/ja desc ≥120 chars.
6. Update 03 to i18n-done with 2b row mentioning en,zh,es,ja; 02=implemented; checkboxes; inventory docs mark 已上线 for §9 and §12 and omni TSVs; README en+zh lines; tooldone shortlist if present
7. merge; coverage:gate phase=4 and phase=all; build:site; lint:seo; CROSS_TOOL_UPDATE=1 TOOL_SLUG=how-to-calculate-npv npm run lint:tool-isolation
8. Write dev-log under dev-logs/2026-08/ with local timestamp

Return: sample NPV number, gate results, catalog tool count after merge.

[try to solve]
样例 NPV ≈ **1307.29**（I0=10000，r=10%，CF=3000/4200/6800）。

门禁结果：
- coverage:gate phase=0b → OK
- coverage:gate phase=2 → OK
- coverage:gate phase=4 → OK
- coverage:gate phase=all → OK
- build:site → OK（sitemap 730 URLs）
- lint:seo → OK
- lint:tool-isolation → OK（CROSS_TOOL_UPDATE=1）

merge 后 catalog 工具数：**68**。

已交付：work-tasks 00–03；catalog/icon/Page；十语 i18n（faqPrefix tool_npv）；清单 §9/#108、§11/#14、§12/#16 与 Omni/ToolDone TSV 标「已上线」；README 中英条目。

[actions]
- work-tasks/how-to-calculate-npv/{01,02,03}-*.md
- src/site/tool-catalog.d/how-to-calculate-npv.json
- public/icons/tools/how-to-calculate-npv.svg
- src/pages/howToCalculateNpvPage.ts
- src/site/i18n/tools/how-to-calculate-npv/{en,zh,es,ja,fr,de,pt,id,ru,ar}.ts
- docs/2026-08-08-tool-inventory-table.md；omnicalculator/tooldone TSV；README.md
- npm run merge:tools；coverage:gate 0b/2/4/all；build:site；lint:seo；lint:tool-isolation
