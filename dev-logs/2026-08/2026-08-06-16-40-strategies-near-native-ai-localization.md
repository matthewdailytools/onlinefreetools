Date: 2026-08-06 16:40
Summary: Outlined process strategies for near-native AI localization (workflow over one-shot MT); no code changes.

[question]
有什么策略能够让AI翻译类似母语翻译的效果

[try to solve]
Near-native quality comes from process, not a single machine-translation pass:

1. Ban English→locale literal translation; rewrite for target-language search intent.
2. Give the model a native brief (what people search, banned words, tone, local examples).
3. Two roles / two passes (draft → review for calques and wrong sense).
4. Glossaries and short UI term lists.
5. Compare against local SERP competitor titles.
6. Sample human final review for ar/ja/ru and similar locales.

This matches the ≥3 review rounds already required in `tool-i18n-localization.mdc`.

[actions]
- No code changes
