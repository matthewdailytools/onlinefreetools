# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-confidence-interval`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构
- [x] **检索覆盖已优化**

额外禁用：把 90/95/99 堆进 H1；暗示「区间含真值的概率=置信水平」的简化误导不经说明。

## 每语 brief

### en
- 检索词：confidence interval calculator；how to calculate a CI；95% confidence interval
- Title：Confidence Interval Calculator — How to Calculate a CI
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：置信区间计算器；如何计算置信区间；95% 置信区间
- Title：置信区间计算器 — 如何计算置信区间
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de intervalo de confianza；cómo calcular un IC
- Title：Calculadora de intervalo de confianza — Cómo calcular un IC
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة فترة الثقة؛ حساب فترة ثقة
- Title：حاسبة فترة الثقة — كيفية حساب فترة الثقة
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de intervalo de confiança；como calcular IC
- Title：Calculadora de intervalo de confiança — Como calcular um IC
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator interval kepercayaan；cara menghitung CI
- Title：Kalkulator interval kepercayaan — Cara menghitung CI
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur d’intervalle de confiance；comment calculer un IC
- Title：Calculateur d’intervalle de confiance — Comment calculer un IC
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：信頼区間 計算；95% 信頼区間
- Title：信頼区間の計算ツール — 信頼区間の求め方
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор доверительного интервала；как рассчитать ДИ
- Title：Калькулятор доверительного интервала — Как рассчитать ДИ
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Konfidenzintervall Rechner；Konfidenzintervall berechnen
- Title：Konfidenzintervall-Rechner — CI berechnen
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-confidence-interval；title 定为 Confidence Interval Calculator — How to Calculate a CI；90/95/99 落 UI/FAQ 不进 H1 | 覆盖表已写入 02；可标 ready |

| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 写十语 title/description 与核心键；按钮短词本地化 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc 当地主词与示例数字 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与免责；跑 coverage:gate all 与 build:site | 上线验收通过 |
