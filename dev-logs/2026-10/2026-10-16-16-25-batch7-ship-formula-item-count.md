Date: 2026-10-16 16:25
Summary: Shipped the thin-rewrite batch through excel-formulas-cheat-sheet, including the formulaItemCount alias that renders a fifth formula line.
Visibility: people

[question]
优化到此slug为止，收尾，增量deploy，commit and push

## Tool links (English)
- https://onlinefreetools.org/tools/excel-formulas-cheat-sheet
- https://onlinefreetools.org/tools/how-to-calculate-body-fat

[try to solve]
## Context
Queue rows #61–#70 were already rewritten and the tool HTML had been uploaded to R2. The follow-up ship still had uncommitted merged dictionaries, home pages, sidebars, and a shared renderer change.

## Process
1. Stopped at `excel-formulas-cheat-sheet` (queue #70). Did not start `create-excel-timesheet`.
2. Confirmed `renderToolIgSections` now accepts `formulaItemCount` as an alias of `ruleItemCount`, so a calculator that asks for five formula lines actually prints the fifth.
3. Committed merged i18n, catalog `updatedAt`, chrome, language home pages, and sitemap. Left historical `public/devlogs/` rebuild noise and `.agents` examples unstaged.
4. Pushed `main` with `npm run git:deploy`. R2 already held the 100 prerendered language pages from the earlier incremental upload.

## Root cause / analysis
Body-fat and similar pages pass `formulaItemCount: 5`. The renderer only read `ruleItemCount`, which defaults to 4, so the fifth formula sentence never appeared even though the locale key existed.

## Solution
`formulaItemCount` wins when it is set; otherwise `ruleItemCount` still applies. Commit `78dd4eab2` is on `origin/main`.

## Notes / boundaries
- ja/de/ar chrome labels may still show some English shared chrome strings. That is site-wide chrome, not this batch.
- Next queue row, when work resumes, is #71 `create-excel-timesheet`.

[actions]
- src/pages/site/toolContent.ts
- merged i18n, public home pages, public/_chrome, public/sitemap.xml
