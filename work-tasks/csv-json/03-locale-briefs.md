# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`csv-json`  
**母版语言**：en  
**状态**：`briefs-ready`

> `briefs-ready`：brief 已填、待实现阶段按 brief 逐语重写并做 ≥3 轮核查。轮次框与「待母语抽查」在实现时勾选/清理；全部完成且无未清待抽查后才可标 `i18n-done`。

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [ ] 无错义借译（如把 delimiter 乱译、把 header 误作「页眉」）
- [ ] 无残缺缩写（如 `Cars.`）
- [ ] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [ ] 十语非同一句式骨架；title 含该语检索说法
- [ ] 未依赖 `t()` 英文回退冒充缺语种
- [ ] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（CSV、TSV、JSON、BOM、CRLF、RFC 4180、papaparse、SKU、CDN）可保留，**不可**替代本地主 title。

**本工具额外禁用**：勿承诺「无损/完全一致往返」（嵌套扁平化与类型推断会有损）；「delimiter」按当地习惯译为「分隔符 / separador / séparateur / 区切り文字 / разделитель / Trennzeichen」等，勿生硬音译；「header row」用当地「表头/首行」说法，勿译成网页页眉。

---

## 每语 brief

### en

- 检索词（3–5）：csv to json；json to csv；csv json converter；excel to json；convert csv online
- 语气：偏正式开发者
- Title / H1 方向：CSV ↔ JSON Converter — types, delimiters, local
- 按钮短词：Convert；Copy JSON / Copy CSV；Download；Clear；Delimiter (auto / , / ; / tab)；Header row；Type inference
- 本地示例用词：sku；title；price
- 可保留英文/符号：CSV、TSV、JSON、BOM、CRLF、papaparse、SKU
- 额外禁用：勿堆「free online best」口号代替规则
- SERP 竞品 title（1–3）：CSV to JSON Converter；CSV ↔ JSON Converter Online；Convert CSV to JSON Array
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词（3–5）：CSV 转 JSON；JSON 转 CSV；CSV JSON 互转；Excel 转 JSON；在线 CSV 转换
- 语气：口语工具站（偏开发者可读）
- Title / H1 方向：CSV ↔ JSON 互转 — 类型推断、分隔符、本地处理
- 按钮短词：转换；复制 JSON / 复制 CSV；下载；清空；分隔符（自动 / , / ; / 制表符）；首行为表头；类型推断
- 本地示例用词：编号/SKU；名称；价格
- 可保留英文/符号：CSV、TSV、JSON、BOM、SKU
- 额外禁用：勿写「完全无损」；「header」勿译「页眉」
- SERP 竞品 title（1–3）：CSV 转 JSON 在线工具；CSV JSON 互转；JSON 转 CSV
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词（3–5）：csv a json；json a csv；convertir csv；conversor csv json；excel a json
- 语气：口语工具站
- Title / H1 方向：CSV a JSON (y al revés) — tipos, separador, local
- 按钮短词：Convertir；Copiar JSON / Copiar CSV；Descargar；Limpiar；Separador (auto / , / ; / tab)；Primera fila como encabezado；Inferir tipos
- 本地示例用词：sku；nombre；precio
- 可保留英文/符号：CSV、TSV、JSON、SKU
- 额外禁用：no traducir «delimiter» de forma confusa; usar «separador»
- SERP 竞品 title（1–3）：Convertidor CSV a JSON；CSV a JSON online
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：تحويل CSV إلى JSON؛ JSON إلى CSV؛ محول CSV JSON؛ Excel إلى JSON
- 语气：偏正式开发者
- Title / H1 方向：من CSV إلى JSON وبالعكس — الأنواع والفواصل ومحليًا
- 按钮短词：تحويل؛ نسخ JSON / نسخ CSV؛ تنزيل؛ مسح؛ الفاصل (تلقائي / , / ; / tab)؛ الصف الأول رؤوس؛ استنتاج الأنواع
- 本地示例用词：رمز/SKU؛ العنوان؛ السعر
- 可保留英文/符号：CSV، TSV، JSON، BOM، SKU
- 额外禁用：لا تَعِد بتحويل «بدون فقدان»
- SERP 竞品 title（1–3）：محول CSV إلى JSON
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：csv para json；json para csv；converter csv；conversor csv json；excel para json
- 语气：口语工具站
- Title / H1 方向：De CSV para JSON — e JSON de volta a CSV (tipos, separador)
- 按钮短词：Converter；Copiar JSON / Copiar CSV；Baixar；Limpar；Separador (auto / , / ; / tab)；Primeira linha como cabeçalho；Inferir tipos
- 本地示例用词：sku；título；preço
- 可保留英文/符号：CSV、TSV、JSON、SKU
- 额外禁用：não prometer «sem perdas»
- SERP 竞品 title（1–3）：Conversor CSV para JSON
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：csv ke json；json ke csv；konversi csv；konverter csv json；excel ke json
- 语气：口语工具站
- Title / H1 方向：CSV ke JSON & sebaliknya — tipe, pemisah, lokal
- 按钮短词：Konversi；Salin JSON / Salin CSV；Unduh；Hapus；Pemisah (otomatis / , / ; / tab)；Baris pertama sebagai header；Deteksi tipe
- 本地示例用词：sku；nama；harga
- 可保留英文/符号：CSV、TSV、JSON、SKU
- 额外禁用：jangan buat kata «Granularitas»
- SERP 竞品 title（1–3）：Konverter CSV ke JSON
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：csv en json；json en csv；convertir csv；convertisseur csv json；excel en json
- 语气：偏正式开发者
- Title / H1 方向：CSV vers JSON — et retour CSV (types, séparateur)
- 按钮短词：Convertir；Copier JSON / Copier CSV；Télécharger；Effacer；Séparateur (auto / , / ; / tab)；Première ligne = en-têtes；Inférer les types
- 本地示例用词：sku；titre；prix
- 可保留英文/符号：CSV、TSV、JSON、SKU
- 额外禁用：« délimiteur » ok ; éviter les calques confus
- SERP 竞品 title（1–3）：Convertisseur CSV en JSON
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：CSV JSON 変換；JSON CSV 変換；CSV を JSON に；CSV JSON 相互変換；Excel JSON 変換
- 语气：偏正式开发者
- Title / H1 方向：CSV と JSON を相互変換（型推定・区切り文字対応）
- 按钮短词：変換；JSONをコピー / CSVをコピー；ダウンロード；クリア；区切り文字（自動 / , / ; / タブ）；先頭行をヘッダー；型を推定
- 本地示例用词：SKU；商品名；価格
- 可保留英文/符号：CSV、TSV、JSON、BOM、SKU
- 额外禁用：禁止「ユースケース」空壳（用「こんなときに」）；「区切り文字」勿写成「デリミタ」音译主词
- SERP 竞品 title（1–3）：CSV ⇔ JSON 変換ツール；CSV JSON 変換
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词（3–5）：csv в json；json в csv；конвертер csv json；преобразовать csv；excel в json
- 语气：偏正式开发者
- Title / H1 方向：CSV в JSON и обратно — типы, разделитель, локально
- 按钮短词：Преобразовать；Копировать JSON / Копировать CSV；Скачать；Очистить；Разделитель (авто / , / ; / таб)；Первая строка — заголовки；Определять типы
- 本地示例用词：SKU；название；цена
- 可保留英文/符号：CSV、TSV、JSON、BOM、SKU
- 额外禁用：не обещать «без потерь»
- SERP 竞品 title（1–3）：Конвертер CSV в JSON
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：csv zu json；json zu csv；csv json konverter；csv umwandeln；excel zu json
- 语气：偏正式开发者
- Title / H1 方向：CSV zu JSON — und zurück zu CSV (Typen, Trennzeichen)
- 按钮短词：Umwandeln；JSON kopieren / CSV kopieren；Herunterladen；Leeren；Trennzeichen (auto / , / ; / Tab)；Erste Zeile als Kopfzeile；Typen erkennen
- 本地示例用词：SKU；Titel；Preis
- 可保留英文/符号：CSV、TSV、JSON、SKU
- 额外禁用：kein «Diff-Granularität»; «Trennzeichen» statt Fremdwort
- SERP 竞品 title（1–3）：CSV zu JSON Konverter；CSV ↔ JSON umwandeln
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
