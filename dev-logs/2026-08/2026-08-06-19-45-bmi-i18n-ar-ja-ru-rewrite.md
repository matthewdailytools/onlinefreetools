Date: 2026-08-06 19:45
Summary: Rewrote BMI i18n keys for ar, ja, and ru and updated matching home-card copy.

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
Independently rewrote the full BMI key set for ar / ja / ru from `03-locale-briefs.md` (54 keys aligned with en.ts), including how/formula/example/usecases, refs, FAQ q1–q4, disclaimer, neutral screening interpretations (no congratulations / تهانينا / おめでとう / Поздравляем), `bmi_result_label`, `bmi_invalid_input`, `bmi_unit_group_label`. Descriptions are ≥120 characters with local process/example keywords. Synced `scripts/site/i18n.mjs` three-locale home-card titles/descs and interpretation strings. `npm run lint:seo` passed (pre-existing short zh description warning only).

**Pending native review**: ar / ja / ru still recommend a native speaker pass before clearing the brief checkboxes.

[actions]
- src/site/i18n/ar.ts
- src/site/i18n/ja.ts
- src/site/i18n/ru.ts
- scripts/site/i18n.mjs
