Date: 2026-08-09 00:57
Summary: Shipped how-to-calculate-gross-margin via full brief→0b→master→phase2→ten-locale rewrite→phase4→build/lint pipeline without skipping coverage steps.

[question]
继续处理，必须按照原来的处理逻辑逐步处理，不要修改规则跳过规则步骤

[try to solve]
Finished §12 #10 break-even inventory/README closeout, then delivered §12 #11 `how-to-calculate-gross-margin` with the mandatory serial gates: work-tasks 00–03 and coverage:gate 0b before coding; English master + page/catalog/icon → phase=2; independent zh/es/ja/fr/de/pt/id/ru/ar rewrites (no English UI fallback) → phase=4/all; build:site + lint:seo OK after lengthening zh/ja descriptions; inventory TSV/README marked live. Sample: revenue 10000 / COGS 6000 → gross profit 4000 / margin 40%. Next slug in queue is §12 #12 (unit-converter per inventory), still without skipping steps.

[actions]
- work-tasks/how-to-calculate-gross-margin/*; src/pages/howToCalculateGrossMarginPage.ts; src/site/i18n/tools/how-to-calculate-gross-margin/*; catalog/icon; merge/build/lint; inventory + README; break-even ship log earlier
