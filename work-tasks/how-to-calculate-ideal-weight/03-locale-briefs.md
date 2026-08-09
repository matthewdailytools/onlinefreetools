# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-ideal-weight`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语非医疗建议

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：诊断/治疗口吻；「标准体重保证」；减肥承诺。

## 每语 brief

### en
- 检索词：ideal weight calculator；ideal body weight；how to calculate ideal weight
- Title：Ideal Weight Calculator — How to Estimate Ideal Body Weight
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：理想体重计算器；理想体重怎么算；标准体重
- Title：理想体重计算器 — 如何估算理想体重区间
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：peso ideal；calculadora de peso ideal
- Title：Calculadora de peso ideal — Estimar el rango de peso corporal
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：الوزن المثالي؛ حاسبة الوزن المثالي
- Title：حاسبة الوزن المثالي — تقدير نطاق الوزن
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：peso ideal；calculadora de peso ideal
- Title：Calculadora de peso ideal — Estimar a faixa de peso corporal
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：berat badan ideal；kalkulator berat ideal
- Title：Kalkulator berat ideal — Estimasi rentang berat badan
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：poids idéal；calculateur de poids idéal
- Title：Calculateur de poids idéal — Estimer la fourchette de poids
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：理想体重 計算；標準体重 計算
- Title：理想体重の計算ツール — 理想体重の目安を推定する
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：идеальный вес；калькулятор идеального веса
- Title：Калькулятор идеального веса — оценка диапазона веса
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：Idealgewicht Rechner；Idealgewicht berechnen
- Title：Idealgewicht-Rechner — Gewichtsspanne schätzen
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-ideal-weight；title 定为 Ideal Weight Calculator — How to Estimate Ideal Body Weight；Devine 等落 Formula；禁参数枚举 H1 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例男 178 cm → Devine≈73.2 kg、区间≈70.4–75.2 | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Ideal Weight Calculator 与 How to Estimate Ideal Body Weight；desc 含 73.2 kg 与 Devine；非参数枚举 | 主词在 H1；公式名落 Formula |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ/免责；禁止英模回落 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含理想体重；es 含 peso ideal；ja 含理想体重 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL；coverage:gate all + build:site | 上线验收 |
