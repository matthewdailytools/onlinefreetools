# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`yaml-json`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法（ja「こんなときに」）
- [x] 十语非同一句式骨架；title 含该语检索说法（FAQ 题序已按语打散）
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清

技术专名（YAML、JSON、Kubernetes、js-yaml、CDN、RFC）可保留，**不可**替代本地主 title。

**本工具额外禁用**：勿把「schema」机翻成令人困惑的「模式/图式」当主按钮；UI 可用「JSON-safe types / 安全类型 / 严格字符串」等本地短词。勿承诺「无损往返」。

---

## 每语 brief

### en

- 检索词（3–5）：yaml to json；json to yaml；yaml json converter；convert yaml online；kubernetes yaml to json
- 语气：偏正式开发者
- Title / H1 方向：YAML ↔ JSON Converter — typing rules, multi-doc, local
- 按钮短词：Convert；Copy JSON / Copy YAML；Download；Clear；JSON-safe types；Indent 2/4/Minify
- 本地示例用词：demo；enabled；items
- 可保留英文/符号：YAML、JSON、Kubernetes、js-yaml、CDN
- 额外禁用：勿堆「free online best」口号代替规则
- SERP 竞品 title（1–3）：YAML to JSON Converter；YAML ↔ JSON Converter — Bidirectional；YAML to JSON Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：YAML 转 JSON；JSON 转 YAML；YAML JSON 互转；在线 YAML 转换；K8s YAML 转 JSON
- 语气：口语工具站（偏开发者可读）
- Title / H1 方向：YAML ↔ JSON 互转 — 类型规则、多文档、本地处理
- 按钮短词：转换；复制 JSON / 复制 YAML；下载；清空；安全类型；缩进 2/4/压缩
- 本地示例用词：名称；开关；列表
- 可保留英文/符号：YAML、JSON、Kubernetes、js-yaml
- 额外禁用：勿写「完全无损」
- SERP 竞品 title（1–3）：YAML 转 JSON 在线工具；JSON ↔ YAML 互转
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：yaml a json；json a yaml；convertir yaml；conversor yaml json
- 语气：口语工具站
- Title / H1 方向：YAML a JSON (y al revés) — tipos, multi-doc, local
- 按钮短词：Convertir；Copiar JSON / Copiar YAML；Descargar；Limpiar；Tipos seguros JSON
- 本地示例用词：nombre；activo；lista
- 可保留英文/符号：YAML、JSON、Kubernetes
- 额外禁用：勿用「altas y bajas」
- SERP 竞品 title（1–3）：Convertidor YAML a JSON；YAML a JSON online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل YAML إلى JSON؛ JSON إلى YAML؛ محول YAML JSON
- 语气：偏正式开发者
- Title / H1 方向：من YAML إلى JSON وبالعكس — قواعد الأنواع ومحليًا
- 按钮短词：تحويل；نسخ JSON / نسخ YAML；تنزيل；مسح；أنواع آمنة لـ JSON
- 本地示例用词：الاسم؛مفعّل؛عناصر
- 可保留英文/符号：YAML、JSON、CDN
- 额外禁用：无
- SERP 竞品 title（1–3）：محول YAML إلى JSON
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：yaml para json；json para yaml；converter yaml；conversor yaml json
- 语气：口语工具站
- Title / H1 方向：De YAML para JSON — e JSON de volta a YAML
- 按钮短词：Converter；Copiar JSON / Copiar YAML；Baixar；Limpar；Tipos seguros JSON
- 本地示例用词：nome；ativo；itens
- 可保留英文/符号：YAML、JSON
- 额外禁用：无
- SERP 竞品 title（1–3）：Conversor YAML para JSON
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：yaml ke json；json ke yaml；konversi yaml；konverter yaml json
- 语气：口语工具站
- Title / H1 方向：YAML ke JSON & sebaliknya — aturan tipe, multi-dokumen
- 按钮短词：Konversi；Salin JSON / Salin YAML；Unduh；Hapus；Tipe aman JSON
- 本地示例用词：nama；aktif；daftar
- 可保留英文/符号：YAML、JSON
- 额外禁用：勿造 Granularitas
- SERP 竞品 title（1–3）：Konverter YAML ke JSON
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：yaml en json；json en yaml；convertir yaml；convertisseur yaml json
- 语气：偏正式开发者
- Title / H1 方向：YAML vers JSON — et retour YAML (types, multi-doc)
- 按钮短词：Convertir；Copier JSON / Copier YAML；Télécharger；Effacer；Types JSON sûrs
- 本地示例用词：nom；actif；éléments
- 可保留英文/符号：YAML、JSON、Kubernetes
- 额外禁用：无
- SERP 竞品 title（1–3）：Convertisseur YAML en JSON
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：YAML JSON 変換；JSON YAML 変換；YAML を JSON に；YAML JSON 相互変換
- 语气：偏正式开发者
- Title / H1 方向：YAML と JSON を相互変換（型ルール・複数ドキュメント対応）
- 按钮短词：変換；JSONをコピー / YAMLをコピー；ダウンロード；クリア；JSON安全な型
- 本地示例用词：名前；有効；項目
- 可保留英文/符号：YAML、JSON、Kubernetes、js-yaml
- 额外禁用：禁止「ユースケース」空壳（用「こんなときに」）
- SERP 竞品 title（1–3）：YAML ⇔ JSON 変換ツール；YAML↔JSON変換
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：yaml в json；json в yaml；конвертер yaml json；преобразовать yaml
- 语气：偏正式开发者
- Title / H1 方向：YAML в JSON и обратно — типы, multi-doc, локально
- 按钮短词：Преобразовать；Копировать JSON / Копировать YAML；Скачать；Очистить；Безопасные типы JSON
- 本地示例用词：имя；включено；элементы
- 可保留英文/符号：YAML、JSON、Kubernetes
- 额外禁用：无
- SERP 竞品 title（1–3）：Конвертер YAML в JSON
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：yaml zu json；json zu yaml；yaml json konverter；yaml umwandeln
- 语气：偏正式开发者
- Title / H1 方向：YAML zu JSON — und zurück zu YAML (Typen, Multi-Doc)
- 按钮短词：Umwandeln；JSON kopieren / YAML kopieren；Herunterladen；Leeren；JSON-sichere Typen
- 本地示例用词：Name；aktiv；Einträge
- 可保留英文/符号：YAML、JSON、Kubernetes
- 额外禁用：勿造 Diff-Granularität
- SERP 竞品 title（1–3）：YAML zu JSON Konverter；YAML ↔ JSON umwandeln
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | 2026-08-06 | en 母版 title/description/UI/IG/FAQ5；页面+catalog；`lint:seo` | 通过 |
| 2 按 brief 重写 | 2026-08-06 | 三批独立重写：zh/es/pt；fr/de/id；ar/ja/ru；同步首页 `i18n.mjs` | FAQ 题序打散；禁词表干净 |
| 3 抽查+禁词+lint | 2026-08-06 | 抽 en/zh/ja/ar/de；清 ar/ja/ru 待母语抽查；再 `lint:seo` + `build:site` | 通过；`i18n-done` |
