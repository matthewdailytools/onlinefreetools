# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-marginal-revenue`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）
**YMYL**：是 — 每语免责（非定价/投资建议）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」式空壳英借
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

可保留：MR、ΔTR、ΔQ（公式旁解释）。

---

## 每语 brief

### en

- 检索词（3–5）：how to calculate marginal revenue；marginal revenue formula；MR calculator；change in total revenue
- 语气：偏正式教学
- Title / H1 方向：Marginal Revenue Calculator — Formula MR = ΔTR / ΔQ
- 按钮短词：Calculate / Clear；Quantity / Total revenue fields
- 本地示例用词：Q 10→11，TR 1000→1080，MR 80
- 可保留英文/符号：MR、ΔTR、ΔQ
- 额外禁用：pricing advice / guaranteed profit
- SERP 竞品 title（1–3）：Marginal Revenue Calculator；MR Formula
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：边际收益计算；边际收入公式；如何计算边际收益；MR 计算
- 语气：口语教学 + 免责
- Title / H1 方向：边际收益计算 — 公式 MR = ΔTR / ΔQ
- 按钮短词：计算 / 清空；产量 / 总收入
- 本地示例用词：销量 10→11，收入 1000→1080
- 可保留英文/符号：MR、Δ
- 额外禁用：定价保证口吻
- SERP 竞品 title（1–3）：边际收益计算器；边际收入
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：calcular ingreso marginal；fórmula del ingreso marginal；calculadora de ingreso marginal；MR
- 语气：偏正式教学
- Title / H1 方向：Calculadora de ingreso marginal — Fórmula ΔIT / ΔQ
- 按钮短词：Calcular / Borrar；Cantidad / Ingreso total
- 本地示例用词：Q 10→11，IT 1000→1080
- 可保留英文/符号：MR
- 额外禁用：consejos de precios absolutos
- SERP 竞品 title（1–3）：Ingreso marginal；Marginal revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حساب الإيراد الحدي；صيغة الإيراد الحدي；حاسبة الإيراد الحدي；marginal revenue
- 语气：偏正式 + 免责
- Title / H1 方向：حاسبة الإيراد الحدي — الصيغة ΔTR / ΔQ
- 按钮短词：احسب / امسح
- 本地示例用词：الكمية 10→11؛ الإيراد 1000→1080
- 可保留英文/符号：MR、Δ
- 额外禁用：وعود ربح
- SERP 竞品 title（1–3）：الإيراد الحدي；Marginal Revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：calcular receita marginal；fórmula da receita marginal；calculadora de receita marginal
- 语气：偏正式教学
- Title / H1 方向：Calculadora de receita marginal — Fórmula ΔRT / ΔQ
- 按钮短词：Calcular / Limpar
- 本地示例用词：Q 10→11，RT 1000→1080
- 可保留英文/符号：MR
- 额外禁用：promessa de lucro
- SERP 竞品 title（1–3）：Receita marginal；Marginal revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：hitung pendapatan marjinal；rumus marginal revenue；kalkulator pendapatan marjinal
- 语气：口语教学 + 免责
- Title / H1 方向：Kalkulator pendapatan marjinal — Rumus ΔTR / ΔQ
- 按钮短词：Hitung / Hapus
- 本地示例用词：Q 10→11，TR 1000→1080
- 可保留英文/符号：MR、marginal revenue
- 额外禁用：janji keuntungan
- SERP 竞品 title（1–3）：Pendapatan marjinal；Marginal revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：calculer le revenu marginal；formule du revenu marginal；calculateur revenu marginal
- 语气：偏正式教学
- Title / H1 方向：Calculateur de revenu marginal — Formule ΔRT / ΔQ
- 按钮短词：Calculer / Effacer
- 本地示例用词：Q 10→11，RT 1000→1080
- 可保留英文/符号：MR
- 额外禁用：conseil tarifaire absolu
- SERP 竞品 title（1–3）：Revenu marginal；Marginal revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：限界収入 計算；限界収益 公式；マージナルレベニュー；MR 計算
- 语气：偏正式 + 免责
- Title / H1 方向：限界収入（MR）計算 — 公式 ΔTR / ΔQ
- 按钮短词：計算する / クリア
- 本地示例用词：数量10→11、売上1000→1080
- 可保留英文/符号：MR、Δ
- 额外禁用：ユースケース；価格保証口調
- SERP 竞品 title（1–3）：限界収入；Marginal Revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：рассчитать предельную выручку；формула предельной выручки；калькулятор MR
- 语气：偏正式 + 免责
- Title / H1 方向：Калькулятор предельной выручки — Формула ΔTR / ΔQ
- 按钮短词：Рассчитать / Очистить
- 本地示例用词：Q 10→11，TR 1000→1080
- 可保留英文/符号：MR、Δ
- 额外禁用：обещания прибыли
- SERP 竞品 title（1–3）：Предельная выручка；Marginal revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：Grenzerlös berechnen；Grenzerlös Formel；Marginal Revenue Rechner；MR berechnen
- 语气：偏正式教学
- Title / H1 方向：Grenzerlös-Rechner — Formel ΔTR / ΔQ
- 按钮短词：Berechnen / Leeren
- 本地示例用词：Menge 10→11，Erlös 1000→1080
- 可保留英文/符号：MR、Δ
- 额外禁用：Preisgarantien
- SERP 竞品 title（1–3）：Grenzerlös berechnen；Marginal Revenue
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 briefs | 2026-08-06 | 十语 brief + YMYL；`briefs-ready` | 待实现轮次 1–3 |
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
