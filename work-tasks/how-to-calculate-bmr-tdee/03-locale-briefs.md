# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-bmr-tdee`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语非医疗建议

## 共用禁词 / 禁模式

- [x] 无造词/错义借译/残缺缩写
- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，非英模回落）
- [x] 检索覆盖已优化

额外禁用：diagnose / cure / 包瘦 / 医疗承诺。

## 每语 brief

### en
- 检索词：BMR calculator；TDEE calculator；how to calculate BMR；calorie calculator；maintenance calories
- Title：BMR & TDEE Calculator — How to Calculate Daily Calories
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：基础代谢率计算器；BMR 计算；TDEE；每日消耗热量；如何计算基础代谢
- Title：BMR / TDEE 计算器 — 如何估算基础代谢与每日消耗
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora BMR；TDEE；calorías de mantenimiento；metabolismo basal
- Title：Calculadora BMR y TDEE — Calorías diarias estimadas
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة معدل الأيض الأساسي；BMR；TDEE؛ السعرات
- Title：حاسبة BMR و TDEE — تقدير السعرات اليومية
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：calculadora BMR；TDEE；calorias de manutenção
- Title：Calculadora de BMR e TDEE — Calorias diárias estimadas
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：kalkulator BMR；TDEE；kalori harian
- Title：Kalkulator BMR & TDEE — Perkiraan kalori harian
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：calculateur BMR；TDEE；métabolisme de base；calories
- Title：Calculateur BMR et TDEE — Calories quotidiennes estimées
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：基礎代謝量 計算；BMR；TDEE；消費カロリー
- Title：BMR / TDEE 計算ツール — 1日の消費カロリーの目安
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор BMR；TDEE；базовый метаболизм
- Title：Калькулятор BMR и TDEE — оценка суточных калорий
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：BMR Rechner；TDEE；Grundumsatz；Kalorienbedarf
- Title：BMR- & TDEE-Rechner — Täglichen Kalorienbedarf schätzen
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 对照 Omni 合并表保留 how-to-calculate-bmr-tdee；title 改为 BMR & TDEE Calculator — How to Calculate Daily Calories；Harris/Katch/deficit 落同页模式与 FAQ；主词 BMR/TDEE 进 H1 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 初版十语仅 title/按钮本地化，UI/FAQ 误回落英文 | 不合格；须完整重写 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：完整重写 UI/How/Formula/FAQ/免责；其余语种同步独立重写 | en,zh,es,ja 已完整本地化；十语无英模 UI |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL；merge + coverage:gate | 修复后验收 |
