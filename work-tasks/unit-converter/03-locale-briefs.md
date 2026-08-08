# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`unit-converter`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：宣称替代测绘仪/医疗设备；按「cm to inch」等诱导拆独立工具页的口吻。

## 每语 brief

### en
- 检索词：unit converter；unit conversion calculator；convert units；km to miles
- Title：Unit Converter — Length / Mass / Temperature / Area / Volume / Speed
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：单位换算；单位换算器；单位转换；公里英里
- Title：单位换算器 — 长度 / 质量 / 温度 / 面积 / 体积 / 速度
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：conversor de unidades；convertir unidades；calculadora de conversión
- Title：Conversor de unidades — Longitud / Masa / Temperatura / Área / Volumen / Velocidad
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：محول الوحدات؛ تحويل الوحدات
- Title：محول الوحدات — طول / كتلة / درجة حرارة / مساحة / حجم / سرعة
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：conversor de unidades；converter unidades
- Title：Conversor de unidades — Comprimento / Massa / Temperatura / Área / Volume / Velocidade
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：konverter satuan；konversi satuan
- Title：Konverter satuan — Panjang / Massa / Suhu / Luas / Volume / Kecepatan
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：convertisseur d’unités；conversion d’unités
- Title：Convertisseur d’unités — Longueur / Masse / Température / Aire / Volume / Vitesse
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：単位換算；単位変換；単位変換ツール
- Title：単位換算ツール — 長さ / 質量 / 温度 / 面積 / 体積 / 速度
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：конвертер единиц；перевод единиц измерения
- Title：Конвертер единиц — длина / масса / температура / площадь / объём / скорость
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：Einheitenumrechner；Einheiten umrechnen
- Title：Einheitenumrechner — Länge / Masse / Temperatur / Fläche / Volumen / Geschwindigkeit
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 unit-converter；title 定为结果向 How to Convert Units Across Categories；次词落 desc/FAQ；禁单位对拆页；与 square-feet 分意图 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；六类别 Tab；样例 1 mile → 1.60934 km | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 将 en title 改为 Unit Converter — How to Convert Units Across Categories（去逗号目录腔）；desc 仍含 1.60934 km 与多类别 | 主词在 H1；类别落 Tab/desc |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ；禁止英模回落；H1 避免三类逗号枚举 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含单位换算器；es 含 conversor；ja 含単位換算；后按产品要求把六类别直接写入 H1（/ 分隔） | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词；coverage:gate all + build:site；再将十语 title 改为「类别进 H1」并通过 gate | 上线验收 |
