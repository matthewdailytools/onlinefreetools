# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`square-feet`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）
**场景重点**：房产 / 装修（避免「万能单位转换」腔）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」式空壳英借；改为「看房/装修」当地说法
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

可保留：ft²、m²、sq ft。

---

## 每语 brief

### en

- 检索词（3–5）：square feet to square meters；sq ft converter；convert square feet；apartment size sq ft
- 语气：口语工具站（房产/装修）
- Title / H1 方向：Square Feet to Square Meters — Area Converter for Homes & Renovation
- 按钮短词：Convert / Clear；sq ft ↔ m²
- 本地示例用词：850 sq ft apartment；flooring estimate
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：generic「any unit converter」主叙事
- SERP 竞品 title（1–3）：Square Feet to Square Meters；Sq Ft Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：平方英尺换算；平方英尺转平方米；sqft 换算；房屋面积平方英尺
- 语气：口语工具站（看房/装修）
- Title / H1 方向：平方英尺转平方米 — 看房与装修面积换算
- 按钮短词：开始换算 / 清空；ft² / m²
- 本地示例用词：850 平方英尺公寓；地板估算
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：空泛「单位换算大全」title
- SERP 竞品 title（1–3）：平方英尺换算；平方英尺转平方米
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：pies cuadrados a metros cuadrados；convertir sq ft；calculadora pies cuadrados；metros cuadrados vivienda
- 语气：口语（vivienda / reforma）
- Title / H1 方向：Pies cuadrados a metros cuadrados — Para viviendas y reformas
- 按钮短词：Convertir / Borrar
- 本地示例用词：piso 850 sq ft；suelo/reforma
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：conversor genérico sin escena
- SERP 竞品 title（1–3）：Pies cuadrados a m²；Convertir sq ft
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل قدم مربع إلى متر مربع；حاسبة القدم المربع؛ مساحة الشقة بالقدم المربع
- 语气：口语（عقارات / تشطيب）
- Title / H1 方向：تحويل القدم المربع إلى متر مربع — للمنازل والتشطيب
- 按钮短词：حوّل / امسح
- 本地示例用词：شقة 850 قدمًا مربعًا
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：عنوان محوّل وحدات عام بلا سياق
- SERP 竞品 title（1–3）：قدم مربع إلى متر مربع；حاسبة المساحة
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：pés quadrados para metros quadrados；converter sq ft；calculadora de pés quadrados；área do imóvel
- 语气：口语（imóvel / reforma）
- Title / H1 方向：Pés quadrados para m² — Conversão para imóveis e reformas
- 按钮短词：Converter / Limpar
- 本地示例用词：apartamento 850 sq ft
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：conversor genérico sem cenário
- SERP 竞品 title（1–3）：Pés quadrados para m²；Converter sq ft
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：konversi square feet ke meter persegi；hitung sq ft；luas apartemen sq ft；ubah kaki persegi
- 语气：口语（properti / renovasi）
- Title / H1 方向：Konversi square feet ke m² — Untuk rumah & renovasi
- 按钮短词：Konversi / Hapus
- 本地示例用词：apartemen 850 sq ft
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：judul konverter unit generik
- SERP 竞品 title（1–3）：Square feet ke m2；Konversi sq ft
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：pieds carrés en mètres carrés；convertir sq ft；calculateur pieds carrés；surface appartement
- 语气：口语（logement / rénovation）
- Title / H1 方向：Pieds carrés en m² — Conversion pour logement et rénovation
- 按钮短词：Convertir / Effacer
- 本地示例用词：appart. 850 sq ft
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：convertisseur d’unités générique
- SERP 竞品 title（1–3）：Pieds carrés en m²；Convertir sq ft
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：平方フィート 平方メートル；sqft 換算；平方フィート 計算；部屋の広さ フィート
- 语气：口语（物件/リフォーム）；可提「坪」若实现支持，否则 FAQ 说明
- Title / H1 方向：平方フィート⇔平方メートル換算 — 物件・リフォーム向け
- 按钮短词：換算する / クリア
- 本地示例用词：850 sq ft の部屋；床材の目安
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：ユースケース；汎用単位変換だけ感
- SERP 竞品 title（1–3）：平方フィート換算；sqft ㎡
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：квадратные футы в метры；перевести sq ft；калькулятор квадратных футов；площадь квартиры
- 语气：口语（недвижимость / ремонт）
- Title / H1 方向：Квадратные футы в м² — Для жилья и ремонта
- 按钮短词：Перевести / Очистить
- 本地示例用词：квартира 850 sq ft
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：безликий «конвертер единиц»
- SERP 竞品 title（1–3）：Кв. футы в м²；Convert sq ft
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：Quadratfuß in Quadratmeter；sq ft umrechnen；Quadratfuß Rechner；Wohnungsgröße sq ft
- 语气：口语（Wohnung / Renovierung）
- Title / H1 方向：Quadratfuß in m² umrechnen — Für Wohnung & Renovierung
- 按钮短词：Umrechnen / Leeren
- 本地示例用词：Wohnung 850 sq ft；Bodenbelag schätzen
- 可保留英文/符号：ft²、m²、sq ft
- 额外禁用：generischer Einheitenrechner-Ton
- SERP 竞品 title（1–3）：Quadratfuß in m²；Sq ft umrechnen
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 briefs | 2026-08-06 | 十语 brief（房产/装修检索向）；`briefs-ready` | 待实现轮次 1–3 |
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
