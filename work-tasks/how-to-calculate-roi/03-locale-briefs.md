# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-roi`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）
**YMYL**：是 — 每语须有非投资建议说法（本地自然表述，非英模直译堆砌）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」式空壳英借
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

可保留：ROI（多数市场检索词）；公式符号。

---

## 每语 brief

### en

- 检索词（3–5）：how to calculate ROI；ROI calculator；return on investment formula；calculate ROI percentage
- 语气：偏正式（财务教学口吻，非投顾）
- Title / H1 方向：ROI Calculator — How to Calculate Return on Investment
- 按钮短词：Calculate / Clear；labels Cost / Gain（or Investment / Return）
- 本地示例用词：Cost $1,000 → Gain $1,300 → 30%
- 可保留英文/符号：ROI、%
- 额外禁用：guarantee / best investment 类承诺词
- SERP 竞品 title（1–3）：ROI Calculator；Return on Investment Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：投资回报率计算；ROI 计算公式；如何计算 ROI；回报率计算器
- 语气：口语工具站 + 免责清晰
- Title / H1 方向：投资回报率（ROI）计算 — 公式与示例
- 按钮短词：开始计算 / 清空；成本 / 收益
- 本地示例用词：投入 1000，收回 1300，ROI 30%
- 可保留英文/符号：ROI
- 额外禁用：稳赚、荐股口吻；「ユースケース」式英借标题
- SERP 竞品 title（1–3）：ROI 计算器；投资回报率计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：calcular ROI；calculadora de ROI；retorno de la inversión；cómo calcular el ROI
- 语气：偏正式教学
- Title / H1 方向：Calculadora de ROI — Cómo calcular el retorno de la inversión
- 按钮短词：Calcular / Borrar；Coste / Ganancia
- 本地示例用词：Coste 1000 → Ganancia 1300
- 可保留英文/符号：ROI
- 额外禁用：promesas de rentabilidad
- SERP 竞品 title（1–3）：Calculadora ROI；Retorno de la inversión
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حساب العائد على الاستثمار؛ حاسبة ROI؛ معادلة العائد على الاستثمار；حساب ROI
- 语气：偏正式 + 免责
- Title / H1 方向：حاسبة العائد على الاستثمار (ROI) — طريقة الحساب
- 按钮短词：احسب / امسح؛ التكلفة / العائد
- 本地示例用词：تكلفة 1000 → عائد 1300
- 可保留英文/符号：ROI
- 额外禁用：وعد بعوائد
- SERP 竞品 title（1–3）：حاسبة ROI؛ العائد على الاستثمار
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：calcular ROI；calculadora de ROI；retorno sobre investimento；como calcular ROI
- 语气：偏正式教学
- Title / H1 方向：Calculadora de ROI — Como calcular o retorno sobre investimento
- 按钮短词：Calcular / Limpar；Custo / Retorno
- 本地示例用词：Custo 1000 → Retorno 1300
- 可保留英文/符号：ROI
- 额外禁用：promessas de ganho
- SERP 竞品 title（1–3）：Calculadora de ROI；ROI online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：hitung ROI；kalkulator ROI；rumus return on investment；cara menghitung ROI
- 语气：口语工具站 + 免责
- Title / H1 方向：Kalkulator ROI — Cara menghitung return on investment
- 按钮短词：Hitung / Hapus；Biaya / Keuntungan
- 本地示例用词：Biaya 1000 → Hasil 1300
- 可保留英文/符号：ROI
- 额外禁用：janji keuntungan
- SERP 竞品 title（1–3）：Kalkulator ROI；Hitung ROI
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：calculer le ROI；calculateur de ROI；retour sur investissement；formule ROI
- 语气：偏正式教学
- Title / H1 方向：Calculateur de ROI — Calculer le retour sur investissement
- 按钮短词：Calculer / Effacer；Coût / Gain
- 本地示例用词：Coût 1000 → Gain 1300
- 可保留英文/符号：ROI
- 额外禁用：promesses de rendement
- SERP 竞品 title（1–3）：Calculateur ROI；Retour sur investissement
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：ROI 計算；投資利益率 計算；ROI 計算式；投資対効果
- 语气：偏正式 + 免责
- Title / H1 方向：ROI（投資利益率）計算ツール — 計算式と例
- 按钮短词：計算する / クリア；費用 / 利益
- 本地示例用词：費用1000 → 利益1300 → 30%
- 可保留英文/符号：ROI
- 额外禁用：ユースケース；「必ず儲かる」系
- SERP 竞品 title（1–3）：ROI計算；投資利益率
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：рассчитать ROI；калькулятор ROI；рентабельность инвестиций；формула ROI
- 语气：偏正式 + 免责
- Title / H1 方向：Калькулятор ROI — Как рассчитать рентабельность инвестиций
- 按钮短词：Рассчитать / Очистить；Затраты / Доход
- 本地示例用词：Затраты 1000 → Доход 1300
- 可保留英文/符号：ROI
- 额外禁用：обещания доходности
- SERP 竞品 title（1–3）：Калькулятор ROI；ROI онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：ROI berechnen；ROI Rechner；Return on Investment Formel；Kapitalrendite berechnen
- 语气：偏正式教学
- Title / H1 方向：ROI-Rechner — Return on Investment berechnen
- 按钮短词：Berechnen / Leeren；Kosten / Ertrag
- 本地示例用词：Kosten 1000 → Ertrag 1300
- 可保留英文/符号：ROI
- 额外禁用：Rendite-Garantien
- SERP 竞品 title（1–3）：ROI Rechner；Return on Investment berechnen
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 briefs | 2026-08-06 | 十语 brief + YMYL 免责提示；`briefs-ready` | 待实现轮次 1–3 |
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
