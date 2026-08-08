# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-break-even`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语非经营/投资建议

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：guaranteed profit / 稳赚 / 荐股口吻。

## 每语 brief

### en
- 检索词：break even calculator；how to calculate break even point；contribution margin；break even units
- Title：Break-Even Calculator — How to Calculate Break-Even Point
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：盈亏平衡计算器；保本点；盈亏平衡点怎么算；贡献边际
- Title：盈亏平衡计算器 — 如何计算保本销量
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：punto de equilibrio；calculadora break even；margen de contribución
- Title：Calculadora de punto de equilibrio — Unidades para cubrir costos
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：نقطة التعادل؛ حاسبة التعادل
- Title：حاسبة نقطة التعادل — وحدات استرداد التكلفة
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：ponto de equilíbrio；calculadora break even
- Title：Calculadora de ponto de equilíbrio — Unidades para cobrir custos
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：titik impas；kalkulator break even
- Title：Kalkulator titik impas — Unit untuk menutup biaya
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：seuil de rentabilité；point mort；marge sur coûts variables
- Title：Calculateur de seuil de rentabilité — Quantité pour couvrir les coûts
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：損益分岐点；損益分岐点 計算；貢献利益
- Title：損益分岐点の計算ツール — 何個売れば元が取れるか
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：точка безубыточности；калькулятор безубыточности
- Title：Калькулятор точки безубыточности — объём для покрытия затрат
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：Break-even-Rechner；Gewinnschwelle；Deckungsbeitrag
- Title：Break-even-Rechner — Absatzmenge zur Kostendeckung
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-break-even；title 定为 Break-Even Calculator — How to Calculate Break-Even Point；贡献边际/平衡收入落结果与 FAQ；禁参数枚举 H1 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 FC10000/P50/V30 → 500 件 | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Break-Even Calculator 与 How to Calculate Break-Even Point；desc 含 500 与 contribution margin；非参数枚举 | 主词在 H1；次词落结果与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ/免责；禁止英模回落 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含保本销量；es 含 punto de equilibrio；ja 含損益分岐点 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL；coverage:gate all + build:site | 上线验收 |
