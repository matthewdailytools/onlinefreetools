# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-cagr`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语非投资建议

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：guaranteed return / 稳赚 / 荐股口吻。

## 每语 brief

### en
- 检索词：CAGR calculator；how to calculate CAGR；compound annual growth rate
- Title：CAGR Calculator — How to Calculate Compound Annual Growth Rate
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：CAGR 计算器；复合年增长率；年化增长率怎么算
- Title：CAGR 计算器 — 如何计算复合年增长率
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora CAGR；tasa de crecimiento anual compuesto
- Title：Calculadora CAGR — Tasa de crecimiento anual compuesto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة CAGR؛ معدل النمو السنوي المركب
- Title：حاسبة CAGR — معدل النمو السنوي المركب
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：calculadora CAGR；taxa de crescimento anual composta
- Title：Calculadora CAGR — Taxa de crescimento anual composta
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：kalkulator CAGR；tingkat pertumbuhan tahunan majemuk
- Title：Kalkulator CAGR — Tingkat pertumbuhan tahunan majemuk
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：calculateur CAGR；taux de croissance annuel composé
- Title：Calculateur CAGR — Taux de croissance annuel composé
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：CAGR 計算；年平均成長率
- Title：CAGR（年平均成長率）の計算ツール — 複合年間成長率を求める
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор CAGR；среднегодовой темп роста
- Title：Калькулятор CAGR — среднегодовой темп роста
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：CAGR Rechner；jährliche Wachstumsrate
- Title：CAGR-Rechner — Jährliche Wachstumsrate berechnen
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-cagr；title 定为 CAGR Calculator — How to Calculate Compound Annual Growth Rate；次词落 desc；禁参数枚举 H1 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 BV10000/EV16105.1/5年 → CAGR 10.00% | 母版可合并；进页 loadSample 出年化增长率 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 CAGR Calculator 与 How to Calculate Compound Annual Growth Rate；desc 含 10.00% 与 16105.10 示例；非参数枚举 H1 | 主词在 H1；次词 compound annual growth rate 落 title 与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ/免责；禁止英模回落 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含复合年增长率；es 含 CAGR；ja 含年平均成長率 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL；coverage:gate all + build:site | 上线验收 |
