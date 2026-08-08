# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-gross-margin`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语非经营/投资建议

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：guaranteed profit / 稳赚 / 荐股口吻；勿把净利润率主词塞进本页 H1。

## 每语 brief

### en
- 检索词：gross margin calculator；how to calculate gross margin；gross profit；COGS
- Title：Gross Margin Calculator — How to Calculate Gross Margin
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：毛利率计算器；毛利怎么算；毛利率公式；销货成本
- Title：毛利率计算器 — 如何计算毛利与毛利率
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：margen bruta；calculadora margen bruto；beneficio bruto
- Title：Calculadora de margen bruto — Beneficio bruto y porcentaje
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：هامش الربح الإجمالي؛ حاسبة الهامش الإجمالي
- Title：حاسبة هامش الربح الإجمالي — الربح والنسبة
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：margem bruta；calculadora margem bruta；lucro bruto
- Title：Calculadora de margem bruta — Lucro bruto e percentual
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：margin kotor；kalkulator margin kotor；laba kotor
- Title：Kalkulator margin kotor — Laba kotor dan persentase
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：marge brute；calculateur marge brute；bénéfice brut
- Title：Calculateur de marge brute — Bénéfice brut et pourcentage
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：粗利率；粗利率 計算；売上総利益
- Title：粗利率の計算ツール — 粗利と粗利率を求める
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：валовая маржа；калькулятор валовой маржи；валовая прибыль
- Title：Калькулятор валовой маржи — прибыль и процент
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：Bruttomarge Rechner；Bruttogewinnmarge；Rohertrag
- Title：Bruttomarge-Rechner — Rohertrag und Prozentsatz
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-gross-margin；title 定为 Gross Margin Calculator — How to Calculate Gross Margin；gross profit/COGS/markup 落结果与 FAQ；禁参数枚举 H1；与 profit-margin 分意图 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 Revenue10000/COGS6000 → 4000 / 40% | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Gross Margin Calculator 与 How to Calculate Gross Margin；desc 含 40% 与 COGS；非参数枚举 H1 | 主词在 H1；次词落结果与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ/免责；禁止英模回落 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含毛利率；es 含 margen bruto；ja 含粗利率 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL；coverage:gate all + build:site | 上线验收 |
