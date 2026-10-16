Date: 2026-10-16 15:40
Summary: Rewrote nine Excel formula cheat-sheet locales around eight filterable cards, with rules item 5 separating the nested-IF builders.

[question]
Rewrite nine locale shards for excel-formulas-cheat-sheet: zh, ja, de, fr, es, pt, ru, id, ar. Keep the eight ASCII formula snippets, add rules_item_5, then merge-all and coverage phase 0b, 2, 4. Do not verify:tool or commit.

## Tool links (English)
- https://onlinefreetools.org/tools/excel-formulas-cheat-sheet

[try to solve]
## Context
The English shard is a filterable cheat sheet of eight formula cards: IF, IFS, IFNA, COUNTIF, SUMIF, VLOOKUP, XLOOKUP, and TEXT. Load sample sets the filter to IF and shows `=IF(A1>0,"yes","no")`. It is not a nested-IF builder. The other nine shards still read like a spreadsheet generator, omitted `rules_item_5`, and did not reuse each locale's Filter / card / Copy / Load sample wording in the How steps.

## Process
1. Read `en.ts` and copied its full key order, including the new fifth rule.
2. Rewrote each locale from that language's search phrasing (formula cheat sheet / copy a starting snippet), not from the old nested-IF brief.
3. Kept every formula ASCII, including English function names, commas, and the quoted sample strings.
4. Put the IF snippet at the end of each meta description so the text before the first quote is already longer than 120 characters and still contains that locale's process/example keyword.
5. Pointed How steps at the same button words written in `filter`, `copy`, and `sample`.
6. Ran `npm run merge:tools`, then `node scripts/validate-tool-coverage-rounds.mjs` for phases 0b, 2, and 4. `npm run coverage:gate -- --slug=...` on this npm version swallowed the flags, so the script was invoked directly.

## Root cause / analysis
The page copies a fixed card. Nested IF, IFS, IFNA, and COUNTIF builders are separate tools linked under the cards. `rules_item_5` is the visible boundary for that. Ctrl+` is Excel's own formula-display shortcut inside an open workbook. IFS needs Excel 2019 or Microsoft 365. Filtering and copying stay in the browser and are not uploaded. Locales that use semicolon argument separators need an explicit note that the copied snippet keeps English names and commas.

## Solution
Nine shards now match the English key set. Descriptions (unescaped length): zh 189, ja 259, de 570, fr 488, es 470, pt 450, ru 470, id 475, ar 391. Each includes a required keyword before the formula quotes. Coverage gates for `excel-formulas-cheat-sheet` passed phase 0b, phase 2, and phase 4. `merge:tools` reported 10 locales merged.

## Notes / boundaries
`verify:tool` and commit were not run. Formula text was not translated. German, French, Spanish, Portuguese, and Russian copy tells readers the snippet is not the local semicolon form.

[actions]
- src/site/i18n/tools/excel-formulas-cheat-sheet/{zh,ja,de,fr,es,pt,ru,id,ar}.ts
- work-tasks/excel-formulas-cheat-sheet/03-locale-briefs.md
- npm run merge:tools
- node scripts/validate-tool-coverage-rounds.mjs --slug=excel-formulas-cheat-sheet --phase=0b|2|4
