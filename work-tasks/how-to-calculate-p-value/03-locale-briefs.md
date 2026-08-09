# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-p-value`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构
- [x] **检索覆盖已优化**

额外禁用：声称「证明假设成立」口吻。

## 每语 brief

### en
- 检索词：p-value calculator；how to calculate p-value；two-tailed p from z
- Title：P-Value Calculator — How to Calculate a P-Value
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：p 值计算器；如何计算 p 值；双侧 p 值
- Title：p 值计算器 — 如何计算 p 值
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de valor p；cómo calcular el valor p
- Title：Calculadora de valor p — Cómo calcular un p-valor
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة القيمة الاحتمالية؛ حساب قيمة p
- Title：حاسبة قيمة p — كيفية حساب القيمة الاحتمالية
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de valor-p；como calcular p-valor
- Title：Calculadora de valor-p — Como calcular um p-valor
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator nilai p；cara menghitung p-value
- Title：Kalkulator nilai-p — Cara menghitung p-value
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur de p-valeur；comment calculer une p-value
- Title：Calculateur de p-valeur — Comment calculer une p-value
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：p値 計算；有意確率 計算機
- Title：p値計算ツール — p値の求め方
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор p-value；как рассчитать p-значение
- Title：Калькулятор p-value — Как рассчитать p-значение
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：p-Wert Rechner；p-Wert berechnen
- Title：p-Wert-Rechner — p-Wert berechnen
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-p-value；title 定为 P-Value Calculator — How to Calculate a P-Value；次词 two-tailed/z 落 desc；禁参数枚举 | 覆盖表已写入 02；可标 ready |

| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 写十语 title/description 与核心键；按钮短词本地化 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc 当地主词与示例数字 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与免责；跑 coverage:gate all 与 build:site | 上线验收通过 |
