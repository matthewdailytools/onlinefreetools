# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-gpa`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否 — 每语注明 4.0 量表与地区差异

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：勿把成绩点、学分、课程行罗列进 H1；勿保证录取。

## 每语 brief

### en
- 检索词：GPA calculator；how to calculate GPA；weighted GPA
- 语气：口语工具站
- Title：GPA Calculator — How to Calculate Weighted GPA
- 按钮：Calculate / Load sample / Clear
- 可保留：GPA、4.0
- SERP：GPA Calculator；Weighted GPA Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：GPA 计算器；加权平均绩点；如何计算 GPA
- 语气：口语工具站
- Title：GPA 计算器 — 如何计算加权平均绩点
- 按钮：开始计算 / 加载示例 / 清空
- 可保留：GPA
- SERP：GPA 计算器；学分绩点
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora GPA；promedio ponderado；calcular GPA
- 语气：口语工具站
- Title：Calculadora GPA — Promedio ponderado
- 按钮：Calcular / Cargar ejemplo / Limpiar
- 可保留：GPA
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة GPA؛ المعدل التراكمي
- 语气：口语工具站
- Title：حاسبة GPA — المعدل التراكمي الموزون
- 按钮：احسب / مثال / مسح
- 可保留：GPA
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：calculadora GPA；média ponderada；calcular GPA
- 语气：口语工具站
- Title：Calculadora GPA — Média ponderada
- 按钮：Calcular / Carregar exemplo / Limpar
- 可保留：GPA
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：kalkulator GPA；IPK tertimbang
- 语气：口语工具站
- Title：Kalkulator GPA — IPK tertimbang
- 按钮：Hitung / Muat contoh / Hapus
- 可保留：GPA、IPK
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：calculateur GPA；moyenne pondérée
- 语气：口语工具站
- Title：Calculateur GPA — Moyenne pondérée
- 按钮：Calculer / Exemple / Effacer
- 可保留：GPA
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：GPA 計算；加重平均 GPA；グレードポイント
- 语气：口语工具站
- Title：GPA計算ツール — 加重平均の出し方
- ボタン：計算する / サンプル / クリア
- 可保留：GPA
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор GPA；средневзвешенный балл
- 语气：口语工具站
- Title：Калькулятор GPA — средневзвешенный балл
- 按钮：Рассчитать / Пример / Очистить
- 可保留：GPA
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：GPA Rechner；gewichteter Notendurchschnitt
- 语气：口语工具站
- Title：GPA-Rechner — Gewichteten Durchschnitt berechnen
- 按钮：Berechnen / Beispiel / Löschen
- 可保留：GPA
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-gpa；title 定为 GPA Calculator — How to Calculate Weighted GPA；主词 GPA/Weighted GPA 进 H1；次词 credit hours/4.0 scale 落 desc 与 FAQ；禁把成绩点、学分枚举进副标题；related 选 percentage-change+sample-size | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 4.0×3 + 3.0×3 → GPA 3.50；FAQ≥3；4.0 量表免责；College Board/维基引用 | 母版可合并；进页 loadSample 出 3.50 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 GPA Calculator 与 How to Calculate Weighted GPA；desc 含 3.5 与 credit hours 示例；非参数枚举 H1；主词落 H1，次词 scale/credits 落 desc 与 FAQ | 主词在 H1；次词 weighted/credits 落 desc 与 Formula |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ；禁止英模回落；zh title「GPA 计算器 — 如何计算加权平均绩点」；zh/ja desc ≥120 字 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含加权平均绩点；es 含 promedio ponderado；ja 含加重平均；再核 desc 含 3.5 样例 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与量表免责；coverage:gate all + build:site | 上线验收 |
