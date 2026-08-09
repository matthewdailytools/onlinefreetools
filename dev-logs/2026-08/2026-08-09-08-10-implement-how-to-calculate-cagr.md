Date: 2026-08-09 08:10
Summary: Implemented how-to-calculate-cagr (en master) and passed coverage:gate phase=2.

[question]
In repo /Users/xuli/vscodeai/onlinefreetools, implement how-to-calculate-cagr AFTER confirming work-tasks exist (they do). Create catalog, SVG, en.ts, Page; set 02 ready; add 03 rows 1+1b; run merge:tools && coverage:gate phase=2. Return phase=2 result and sample confirmation. Do NOT write non-en locales yet.

[try to solve]
CAGR 工具已落地：catalog / SVG / en 母版 / Page 齐备，`02` 标 ready，`03` 已写 1 与 1b 行。`coverage:gate --phase=2` 通过；样例 10000 → 16105.1、5 年 → **10.00%**。

[actions]
- Created `src/site/tool-catalog.d/how-to-calculate-cagr.json`
- Created `public/icons/tools/how-to-calculate-cagr.svg`
- Created `src/site/i18n/tools/how-to-calculate-cagr/en.ts`
- Created `src/pages/howToCalculateCagrPage.ts`
- Updated `work-tasks/how-to-calculate-cagr/02-tool-info.md` → ready
- Updated `work-tasks/how-to-calculate-cagr/03-locale-briefs.md` (rows 1 + 1b)
- Ran `npm run merge:tools && npm run coverage:gate -- --slug=how-to-calculate-cagr --phase=2`
