Date: 2026-08-06 21:05
Summary: Added native-style tool_yaml_json_* i18n for ar, ja, and ru.

[question]
You are localizing the new yaml-json tool for the onlinefreetools repo at /Users/xuli/vscodeai/onlinefreetools.

TASK: Add ALL `tool_yaml_json_*` keys to:
- src/site/i18n/ar.ts
- src/site/i18n/ja.ts
- src/site/i18n/ru.ts

These are languages that often need native-quality rewrite. Write as a careful native-style developer tool page, NOT machine-translated English.

RULES:
- Independent rewrite; vary FAQ order and section openings vs English.
- Description ≥120 chars + keyword:
  - ar: حساب|عملية|مثال|خطوات|صيغة
  - ja: 計算|プロセス|手順|例|方式|公式
  - ru: расч|процесс|пример|формула|шаг
- ja: NEVER use ユースケース — use こんなときに or similar natural heading for usecases_title
- Keep YAML, JSON, js-yaml, Kubernetes, CDN, ---
- All keys listed below must exist. UI/IG near other tools; FAQ near other FAQs. Valid TS single-quoted strings.

KEYS: tool_yaml_json_title, description, article, dir_label, tab_yaml_json, tab_json_yaml, convert, copy_json, copy_yaml, copy_done, download_json, download_yaml, sample, clear, json_safe, indent_label, indent_2, indent_4, indent_minify, yaml_input_label, json_output_label, json_input_label, yaml_output_label, yaml_placeholder, json_placeholder, sample_yaml, sample_json, large_warn, need_lib, empty, how_title, how_body, rules_title, rules_body, rules_item_1..4, example_title, example, usecases_title, usecase_1..3, faq_q1..q5, faq_a1..a5

BRIEFS:
### ar — تحويل YAML إلى JSON / JSON إلى YAML / محول; Title: من YAML إلى JSON وبالعكس — قواعد الأنواع ومحليًا
### ja — YAML JSON 変換 / 相互変換; Title: YAML と JSON を相互変換（型ルール・複数ドキュメント対応）; ボタン 変換/コピー/ダウンロード/クリア/JSON安全な型
### ru — yaml в json / json в yaml / конвертер; Title: YAML в JSON и обратно — типы, multi-doc, локально

FACTS: bidirectional one page; js-yaml; paste not uploaded; CDN = library only; DEFAULT bare yes/no may be boolean; JSON-safe keeps strings; multi-doc --- loadAll → array if ≥2; comments lost; anchors expand; ~200k warn; use cases K8s multi-resource, API JSON→YAML, data/AI pipeline; example + yes boundary.

Return confirmation + note that copy is native-style rewrite (for clearing 待母语抽查 later).

[try to solve]
已为 ar / ja / ru 写入全部 `tool_yaml_json_*` 键（UI+IG+FAQ），插在 markdown FAQ 与 BMI 之间，与这三语现有结构一致。

确认要点：
- 按 brief 独立重写（非英模直译）；FAQ 题序与 How/Rules 开篇相对英文有变化。
- description ≥120 且含各语关键词（ar: مثال/خطوات；ja: 手順/例；ru: пример/шаг）。
- ja `usecases_title` =「こんなときに」，无「ユースケース」。
- 保留 YAML、JSON、js-yaml、Kubernetes、CDN、---；本地示例用词（ar الاسم/مفعّل/عناصر；ja 名前/有効/項目；ru имя/включено/элементы）。
- `npm run lint:seo` 通过。

文案为母语风格重写，可供后续清除「待母语抽查」勾选时抽查。

[actions]
- Updated `src/site/i18n/ar.ts`, `src/site/i18n/ja.ts`, `src/site/i18n/ru.ts`
- Ran `npm run lint:seo` (OK)
