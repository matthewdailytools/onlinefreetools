Date: 2026-08-06 19:45
Summary: Rewrote BMI i18n keys for ar, ja, ru and updated home card copy.

[question]
In /Users/xuli/vscodeai/onlinefreetools, update BMI i18n keys for languages: ar, ja, ru.

Files: src/site/i18n/{ar,ja,ru}.ts

Read work-tasks/how-to-calculate-bmi/03-locale-briefs.md. Rewrite independently (ar: مؤشر كتلة الجسم; ja: BMI計算; ru: ИМТ). Do NOT isomorphic-translate English.

Required keys — mirror the set now in en.ts for tool_bmi_* and bmi_* including:
how/formula/example/usecases, ref labels, faq q1-q4, disclaimer, neutral screening interpretations (no congratulations), bmi_result_label, bmi_invalid_input, bmi_unit_group_label.

description ≥120 chars with local process/example keywords.
Escape quotes properly in TS.
Update scripts/site/i18n.mjs home cards for ar/ja/ru BMI title/desc briefly.

Leave 待母语抽查 as a note in your summary (do not edit 03 unless asked).

Return files changed.

[try to solve]
已为 ar / ja / ru 按 `03-locale-briefs.md` 独立重写 BMI 全套键（54 项，与 en.ts 对齐），含 how/formula/example/usecases、ref、FAQ q1–q4、disclaimer、中性筛查解读（无「恭喜/تهانينا/おめでとう/Поздравляем」）、`bmi_result_label`、`bmi_invalid_input`、`bmi_unit_group_label`；description 均 ≥120 字符并含本地流程/示例关键词。同步更新 `scripts/site/i18n.mjs` 三语首页卡片 title/desc 及解读文案。`npm run lint:seo` 通过（仅既有 zh 描述偏短警告）。**待母语抽查**：ar / ja / ru 仍建议母语者复核后再清 brief 勾选。

[actions]
- src/site/i18n/ar.ts
- src/site/i18n/ja.ts
- src/site/i18n/ru.ts
- scripts/site/i18n.mjs
