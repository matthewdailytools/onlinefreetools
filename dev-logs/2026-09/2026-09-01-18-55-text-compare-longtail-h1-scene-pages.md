Date: 2026-09-01 18:55
Summary: Shipped a text-compare topic with long-tail H1s: absorbed text-diff and added file, Word, JSON, and Excel compare pages.

[question]
text-compare topic：长尾 H1 + 分场景建页
Implement the plan as specified... Don't stop until you have completed all the to-dos.

[try to solve]
Kept `/tools/text-diff` and changed its H1 to the Planner sentence “Check difference between two texts” (no marketing suffix). Secondary phrases such as compare two texts online and diff checker now sit in description/FAQ; file, Word, JSON, and Excel jobs are out of scope on that paste page.

Shipped four scene pages with H1 equal to the chosen Planner sentence, `page.style: opts`, first-screen `loadSample()`, and ten-locale rewrite:

- `/tools/compare-two-text-files-online` — FileReader UTF-8, BOM strip, binary reject, line diff, no large paste box
- `/tools/compare-two-word-documents-for-differences` — mammoth extract + jsdiff; FAQ states this is not Word Review → Compare
- `/tools/json-diff-checker-online` — JSON.parse path diff, ignore key order by default
- `/tools/excel-compare-files` — SheetJS, first sheet by default, cell-address compare; “online” stays in description

Did not build a `/text-compare` hub. YAML/XML remain P2. Coverage gates 0b/2/4 passed per slug; site build prerendered the new HTML; `lint:seo` is green after lengthening two Chinese descriptions.

[actions]
- docs/seo/keywords/text-compare/ (topic tables, already on disk from the topic-doc step)
- work-tasks/text-diff plus four new work-tasks/{slug}/ briefs
- src/site/i18n/tools/text-diff and four new i18n trees
- src/pages/compareTwoTextFilesOnlinePage.ts, compareTwoWordDocumentsForDifferencesPage.ts, jsonDiffCheckerOnlinePage.ts, excelCompareFilesPage.ts
- catalog shards, icons, README tools list, text-diff related links
- npm run coverage:gate, merge:tools, build:site / prerender --full, lint:seo
