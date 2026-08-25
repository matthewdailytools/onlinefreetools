Date: 2026-08-06 20:10
Summary: Cleared pending-native-review flags to i18n-done and committed/pushed the stock-tool IG rebuild batch.

[question]
清母语抽查 → 标 i18n-done，提交/推送这批改动

[try to solve]
For the eight rebuilt stock tools (plus leftover text-diff checklist items), in each `work-tasks/*/03-locale-briefs.md`: cleared ar/ja/ru “pending native review”, checked rounds 2/3 and the banned-word list, and set status to `i18n-done`. Synced Locale briefs status references in each `02`. Then committed the IG rebuild changes and pushed to origin/main. `lint:seo` and `build:site` / `build:logs` already passed.

[actions]
- Updated work-tasks/*/03-locale-briefs.md and 02 status refs to i18n-done
- git commit + git push origin HEAD
