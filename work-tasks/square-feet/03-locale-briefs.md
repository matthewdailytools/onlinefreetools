# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`square-feet`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 禁估价 / 房价 / investment return 卖点
- [x] 明确「平面面积 ≠ 套内/建筑」一句即可
- [x] 示例用 NIST 因子：850→78.97、1000→92.90、10×12→120/11.15；小数逗号语种写 78,97 / 11,15
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构

## 每语 brief

### en
- Title：Square Feet to Square Meters — Convert Room Area for Listings & Renovation
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：平方英尺转平方米；平方英尺是多少平方米；850平方英尺；房间面积计算
- Title：平方英尺转平方米 — 房源面积换算与房间长宽求面积
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：pies cuadrados a metros cuadrados；conversor sqft a m2；qué es sqft
- Title：Pies cuadrados a metros cuadrados — convierte el área de una habitación
- 按钮：Calcular / Cargar ejemplo / Borrar
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：تحويل القدم المربع إلى متر مربع；كم متر مربع في القدم المربع
- Title：تحويل القدم المربع إلى المتر المربع — مساحة الغرفة مع خطوات الحساب
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：pés quadrados para m2；conversor sqft para m2；square feet em metros quadrados
- Title：Pés quadrados para metros quadrados — converta a área do cômodo
- 按钮：Calcular / Carregar exemplo / Limpar
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：square feet ke m2；konversi sqft ke meter persegi
- Title：Square Feet ke Meter Persegi — Konversi Luas Ruangan
- 按钮：Hitung / Muat contoh / Hapus
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：pieds carrés en m2；convertir sqft en m²；pieds carrés mètres carrés
- Title：Pieds carrés en mètres carrés — convertir la surface d’une pièce
- 按钮：Calculer / Charger un exemple / Effacer
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：平方フィート 平米；sqft m2 換算；平方フィート とは
- Title：平方フィートを平米に換算 — 部屋の面積計算つき
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：квадратные футы в метры；sqft в м2；перевод квадратных футов
- Title：Квадратные футы в квадратные метры — перевод площади комнаты
- 按钮：Рассчитать / Загрузить пример / Очистить
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：square feet in m2；Quadratfuß in Quadratmeter；umrechnung sqft m2
- Title：Square Feet in Quadratmeter umrechnen — Raumfläche berechnen
- 按钮：Berechnen / Beispiel laden / Leeren
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-13 | 保留 slug；H1 保留 sq ft→m²；02 同意图表对齐 GSC（换算/1000 sqft/房间面积吸；估价不吸） | 已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-13 | 双模式；过程；850/1000 例子；NIST 因子；非套内/建筑 FAQ | 主词在 H1 |
| 2b 十语检索向重写（改写） | 2026-10-13 | en/zh/es/ja/ar/pt/id/fr/ru/de 按当地换算说法独立重写；小数逗号语种示例用当地小数点 | 十语键集一致 |
