Date: 2026-08-06 20:10
Summary: Cleared pending-native-review flags to i18n-done and committed/pushed the stock-tool IG rebuild batch.

[question]
清母语抽查 → 标 i18n-done，提交/推送这批改动

[try to solve]
对存量重建的 8 个工具（及 text-diff 残留勾选）在 `work-tasks/*/03-locale-briefs.md` 中：清 ar/ja/ru「待母语抽查」、勾选轮次 2/3 与禁词表、状态改为 `i18n-done`；同步 `02` 中 Locale briefs 状态引用。随后将 IG 重建相关改动一并 commit 并 push 到 origin/main。`lint:seo` 与 `build:site` / `build:logs` 已跑通。

[actions]
- Updated work-tasks/*/03-locale-briefs.md and 02 status refs to i18n-done
- git commit + git push origin HEAD
