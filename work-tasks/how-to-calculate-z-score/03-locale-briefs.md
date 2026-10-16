# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-z-score`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构

## 每语 brief

### en
- 检索词：z-score calculator；standard score；raw score to z
- Title：Z-Score Calculator — Convert Raw Score ↔ Standard Score
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：Z 分数；标准分；原始分转 z
- Title：Z 分数计算器 — 原始分与标准分互算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：见 title 主词
- Title：Calculadora de puntuación z — Cómo calcular un valor estándar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：见 title 主词
- Title：حاسبة درجة z — كيفية حساب الدرجة المعيارية
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：见 title 主词
- Title：Calculadora de escore z — Como calcular um escore padrão
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：见 title 主词
- Title：Kalkulator skor-z — Cara menghitung skor standar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：见 title 主词
- Title：Calculateur de score z — Comment calculer un score standard
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：见 title 主词
- Title：Zスコア計算ツール — 標準得点の求め方
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：见 title 主词
- Title：Калькулятор z-оценки — Как рассчитать стандартный балл
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：见 title 主词
- Title：Z-Wert-Rechner — Standardwert berechnen
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-z-score；title 定为结果向主词+How to；次词与固定样例落入 desc/FAQ；禁参数枚举 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 写十语 title/description 与核心键；按钮短词本地化 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc 当地主词与示例数字 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与免责；跑 coverage:gate all 与 build:site | 上线验收通过 |
| 0b thin-rewrite #56 | 2026-10-16 | 复审同意图：standard score / reverse x from z；title 改为 Raw Score ↔ Standard Score；意图审查表写入 02 | 覆盖表+意图审查已回写 |
| 1b thin-rewrite #56 | 2026-10-16 | 母版加深：双向 z↔x + 分步 + why_choose×5 + FAQ×7；desc 含 85/70/10→1.5；主词 z-score 在 H1 | 主词在 H1；次词落 FAQ/模式 |
| 2b thin-rewrite #56 | 2026-10-16 | 九语独立重写全键；抽查 en,zh,es,ja title/desc 与 85/70/10→1.5 | en,zh,es,ja 已再优化 title/desc |
