Date: 2026-08-09 00:52
Summary: Shipped how-to-calculate-break-even with full ten-locale rewrite and gates; continuing §12 #11 gross-margin without skipping coverage steps.

[question]
继续处理，必须按照原来的处理逻辑逐步处理，不要修改规则跳过规则步骤

[try to solve]
Completed §12 #10 `how-to-calculate-break-even` end-to-end: work-tasks briefs with 0b/1b/2b rows, page + catalog + icon, independent ten-locale i18n (not English UI fallback), coverage:gate phase 2/4/all green, build:site + lint:seo + tool-isolation, inventory/README marked live. Next continues the same serial pipeline for #11 `how-to-calculate-gross-margin` (brief → 0b → implement → phase2 → full locales → phase4 → ship). Will not weaken or skip localization/coverage rules.

[actions]
- work-tasks/how-to-calculate-break-even/*; src/pages/howToCalculateBreakEvenPage.ts; src/site/i18n/tools/how-to-calculate-break-even/*; catalog/icon; merge:tools; build:site; inventory + README
