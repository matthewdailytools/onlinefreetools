# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-quadratic-equation`  
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
- Title：Quadratic Equation Solver — Roots and Discriminant
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：见 title 主词
- Title：一元二次方程计算器 — 根与判别式
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：见 title 主词
- Title：Resolvedor de ecuación cuadrática
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：见 title 主词
- Title：حلال المعادلة التربيعية
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：见 title 主词
- Title：Resolvedor de equação do 2º grau
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：见 title 主词
- Title：Penyelesai persamaan kuadrat
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：见 title 主词
- Title：Solveur d’équation du second degré
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：见 title 主词
- Title：二次方程式の解 — 根と判別式
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：见 title 主词
- Title：Решатель квадратного уравнения
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：见 title 主词
- Title：Quadratische Gleichung — Wurzeln
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-quadratic-equation；title 定为结果向主词+How to；次词与固定样例落入 desc/FAQ；禁参数枚举 | 覆盖表已写入 02；可标 ready |

| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 写十语 title/description 与核心键；按钮短词本地化 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc 当地主词与示例数字 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与免责；跑 coverage:gate all 与 build:site | 上线验收通过 |
