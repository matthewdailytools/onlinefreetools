# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-rule-of-72`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是（disclaimer 必译；禁诊断式 / 荐股语气）

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2；zh 避免「A 和 B」两段并列）
- [x] 隐私不当卖点；禁投资建议口吻
- [x] 禁「Formula 节 / 见规则节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 72 法则、翻倍、年化利率、复利；ja 72の法則、倍になる、年利、複利；es regla del 72, duplicar, interés compuesto；pt regra dos 72, dobrar, juros compostos；fr règle de 72, doubler, intérêts composés；de 72er-Regel, verdoppeln, Zinseszins；ru правило 72, удвоение, сложный процент；id aturan 72, berlipat ganda, bunga majemuk；ar قاعدة 72، مضاعفة، الفائدة المركبة
- [x] 小数逗号语种（de/es/pt/fr/ru/id）：11,90 年、7,2%、+0,87%；样例输入 6 不变
- [x] 事实不可改（见 02 固定数字）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

见 `02-tool-info.md`：6%→12 年 / 精确≈11.9 / +0.88%；8%→9 / ≈9.01；10 年→7.2% / ≈7.18%；1%→72 / ≈69.66；20%→3.6 / ≈3.8 / −5.31%；100×ln(2)≈69.3147。

## 每语 brief

### en
- 检索词：rule of 72 calculator；years to double money；rule of 72 accuracy；rate to double in 10 years
- 语气：口语；YMYL 克制
- Title：Rule of 72 Calculator — Years to Double Your Money, or the Rate You Need
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：72法则计算器；72法则怎么算；钱翻倍要几年；年化利率翻倍；72法则准不准
- 语气：口语；教学说明
- Title：72 法则计算器 — 算钱翻倍要多久，也能反推需要多高利率
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora regla del 72；años para duplicar dinero；tasa para duplicar en 10 años；precisión regla del 72
- 语气：tú
- Title：Calculadora de la regla del 72 — años para duplicar tu dinero o la tasa que necesitas
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة قاعدة 72؛ سنوات مضاعفة المال؛ معدل المضاعفة؛ دقة قاعدة 72
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة قاعدة 72 — احسب سنوات مضاعفة المال أو المعدل الذي تحتاجه
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora regra dos 72；anos para dobrar dinheiro；taxa para dobrar em 10 anos
- 语气：pt-BR
- Title：Calculadora da regra dos 72 — anos para dobrar seu dinheiro ou a taxa que você precisa
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator aturan 72；berapa tahun uang berlipat ganda；suku bunga untuk dobel 10 tahun
- 语气：Anda
- Title：Kalkulator Aturan 72 — Hitung Tahun Agar Uang Berlipat Ganda, atau Suku Bunga yang Dibutuhkan
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur règle de 72；années pour doubler；taux pour doubler en 10 ans
- 语气：vouvoiement
- Title：Calculateur de la règle de 72 — années pour doubler votre argent ou le taux dont vous avez besoin
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：72の法則 計算；お金が倍になる 年数；金利 倍 何年；72の法則 精度
- 语气：です・ます
- Title：72の法則計算ツール — お金が倍になる年数、または必要な金利を計算
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор правила 72；сколько лет удвоить деньги；ставка для удвоения за 10 лет
- 语气：нейтральный
- Title：Калькулятор правила 72 — сколько лет до удвоения денег или какая ставка нужна
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：72er-Regel Rechner；Jahre bis Verdopplung；Zinssatz für Verdopplung in 10 Jahren
- 语气：Sie-Form
- Title：72er-Regel-Rechner — Jahre bis zur Verdopplung oder den benötigten Zinssatz berechnen
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-16 | 保留 slug；H1 改为双任务；02 写分工、同意图表、意图审查（部分满足→满足） | 02 已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-16 | en title/desc/FAQ 覆盖主次词；精确对照与反求写入 Why/Formula | 主词在 H1 |
| 2b 十语检索向重写（改写） | 2026-10-16 | 十语按 brief 独立重写；抽查 en,zh,es,ja,de | 键集与 en 一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | 单向 72÷r 薄页 | 2026-10-16 审计过薄，已重写 |
