Date: 2026-08-06 21:03
Summary: Added all tool_yaml_json_* keys to zh/es/pt with independent locale rewrites and varied FAQ order.

[question]
You are localizing the new yaml-json tool for the onlinefreetools repo at /Users/xuli/vscodeai/onlinefreetools.

TASK: Add ALL `tool_yaml_json_*` keys to these locale files by editing them in place:
- src/site/i18n/zh.ts
- src/site/i18n/es.ts
- src/site/i18n/pt.ts

RULES (critical — tool-i18n-localization.mdc):
- Do NOT translate English sentence-by-sentence into isomorphic skeletons.
- Rewrite independently for each language using the locale brief below.
- FAQ question ORDER and How/Rules openings should DIFFER across languages (not same q1/q2 topics in identical order as English if possible — at least vary openings and use-case cut-ins).
- Description MUST be ≥120 characters AND include at least one keyword from validate-tool-seo for that language:
  - zh: 计算|过程|步骤|示例|例子|公式
  - es: calcula|calcular|proceso|pasos|ejemplo|fórmula
  - pt: calcular|processo|exemplo|fórmula|passos
- Keep technical tokens: YAML, JSON, js-yaml, Kubernetes, CDN, --- as appropriate.
- Sample YAML/JSON can keep structure; localize demo words where natural (zh: 名称/开关; es/pt: nombre/nome).
- Place keys near other tool blocks (after markdown keys is fine) AND FAQ keys near other FAQ blocks before closing `};`.
- Use the SAME key names as English (list below). Every key must exist.

KEY NAMES (must all be present):
tool_yaml_json_title, tool_yaml_json_description, tool_yaml_json_article,
tool_yaml_json_dir_label, tool_yaml_json_tab_yaml_json, tool_yaml_json_tab_json_yaml,
tool_yaml_json_convert, tool_yaml_json_copy_json, tool_yaml_json_copy_yaml, tool_yaml_json_copy_done,
tool_yaml_json_download_json, tool_yaml_json_download_yaml, tool_yaml_json_sample, tool_yaml_json_clear,
tool_yaml_json_json_safe, tool_yaml_json_indent_label, tool_yaml_json_indent_2, tool_yaml_json_indent_4, tool_yaml_json_indent_minify,
tool_yaml_json_yaml_input_label, tool_yaml_json_json_output_label, tool_yaml_json_json_input_label, tool_yaml_json_yaml_output_label,
tool_yaml_json_yaml_placeholder, tool_yaml_json_json_placeholder, tool_yaml_json_sample_yaml, tool_yaml_json_sample_json,
tool_yaml_json_large_warn, tool_yaml_json_need_lib, tool_yaml_json_empty,
tool_yaml_json_how_title, tool_yaml_json_how_body,
tool_yaml_json_rules_title, tool_yaml_json_rules_body,
tool_yaml_json_rules_item_1, tool_yaml_json_rules_item_2, tool_yaml_json_rules_item_3, tool_yaml_json_rules_item_4,
tool_yaml_json_example_title, tool_yaml_json_example,
tool_yaml_json_usecases_title, tool_yaml_json_usecase_1, tool_yaml_json_usecase_2, tool_yaml_json_usecase_3,
tool_yaml_json_faq_q1..q5, tool_yaml_json_faq_a1..a5

LOCALE BRIEFS:

### zh
- 检索词：YAML 转 JSON；JSON 转 YAML；YAML JSON 互转；在线 YAML 转换；K8s YAML 转 JSON
- 语气：口语工具站
- Title 方向：YAML ↔ JSON 互转 — 类型规则、多文档、本地处理
- 按钮：转换；复制 JSON/YAML；下载；清空；安全类型；缩进
- 额外：勿写「完全无损」；FAQ 可先问隐私或多文档，不要完全照抄英 FAQ 顺序
- 禁词：无 granularity 类

### es
- 检索词：yaml a json；json a yaml；convertir yaml；conversor yaml json
- Title：YAML a JSON (y al revés) — tipos, multi-doc, local
- 按钮：Convertir；Copiar；Descargar；Limpiar；Tipos seguros JSON
- 勿用 altas y bajas

### pt
- 检索词：yaml para json；json para yaml；converter yaml
- Title：De YAML para JSON — e JSON de volta a YAML
- 按钮：Converter；Copiar；Baixar；Limpar；Tipos seguros JSON

CONTENT FACTS to encode (any order/phrasing):
- Bidirectional on one page; js-yaml; paste local; CDN loads library only
- DEFAULT schema: bare yes/no may become boolean; JSON-safe keeps strings
- Multi-doc --- → loadAll; 1 doc = value; 2+ = JSON array
- Round-trip loses comments; anchors expand
- Soft limit ~200k warning
- Use cases: K8s multi-resource; API JSON→YAML edit; AI/data pipeline bridge
- Example with name/demo style + flag: yes boundary

ENGLISH REFERENCE (rewrite, do not clone structure):
Title: YAML ↔ JSON Converter — Types, Multi-doc & Local
Description mentions Steps + Example + local paste + multi-doc array

After editing, verify each file still exports default and has no syntax errors (balanced quotes). Prefer single-quoted strings with \\n for newlines in samples.

Return: confirmation of which keys were added per file + any FAQ order choices you made.

[try to solve]
已在 zh / es / pt 各写入全部 54 个 `tool_yaml_json_*` 键（经解析校验：缺键 0；description ≥120 且含 SEO 关键词；export default 正常）。

FAQ 题序（相对 en 的 类型→多文档→隐私→往返→行号）：
- zh：隐私 → 多文档 → yes/no 类型 → 往返会丢什么 → 报错行号
- es：多文档 → 浏览器本地 → yes/no → 注释往返 → 行列号
- pt：往返丢失 → yes/no → 多文档 --- → 隐私 → 行列号

How/场景切入也做了差异化：zh How「先选方向」+ 场景从 K8s 起；es How「Pegá…pestaña」+ 场景从 API JSON→YAML 起；pt How「Na mesma página」+ 场景从 pipelines 起。

[actions]
- src/site/i18n/zh.ts — 新增全部 tool_yaml_json_*（工具块在 markdown 后；FAQ 在 markdown FAQ 后）
- src/site/i18n/es.ts — 同上（整块插在 markdown FAQ 与 BMI 之间，含 FAQ）
- src/site/i18n/pt.ts — 同上
- node 导入校验 54/54 keys、descLen/kw、banned 词扫描
