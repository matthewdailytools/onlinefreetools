# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-sample-size`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构

## 每语 brief

### en
- 检索词：见 title 主词
- Title：Sample Size Calculator — How to Estimate Required n
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：见 title 主词
- Title：样本量计算器 — 如何估算所需样本量
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：见 title 主词
- Title：Calculadora de tamaño muestral — Cómo estimar la n necesaria
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：见 title 主词
- Title：حاسبة حجم العينة — كيفية تقدير الحجم المطلوب
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：见 title 主词
- Title：Calculadora de tamanho amostral — Como estimar o n necessário
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：见 title 主词
- Title：Kalkulator ukuran sampel — Cara memperkirakan n yang dibutuhkan
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：见 title 主词
- Title：Calculateur de taille d’échantillon — Comment estimer n
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：见 title 主词
- Title：サンプルサイズ計算ツール — 必要標本数の見積もり方
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：见 title 主词
- Title：Калькулятор размера выборки — Как оценить необходимый n
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：见 title 主词
- Title：Stichprobenumfang-Rechner — Erforderliches n schätzen
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-sample-size；title 定为结果向主词+How to；次词与固定样例落入 desc/FAQ；禁参数枚举 | 覆盖表已写入 02；可标 ready |

| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 写十语 title/description 与核心键；按钮短词本地化 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc 当地主词与示例数字 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与免责；跑 coverage:gate all 与 build:site | 上线验收通过 |
