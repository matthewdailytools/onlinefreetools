# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-present-value`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把复利频率 / 付款时点 / 年数等字段名串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] YMYL：不写收益承诺；disclaimer 写明非理财 / 税务 / 投资建议
- [x] 当地术语：zh 现值、终值、折现率、复利、年金、先付年金（期初年金）、实际年利率；ja 現在価値、将来価値、割引率、複利、年金現価、期首払い、実効年利率；es valor presente / valor actual、valor futuro、tasa de descuento、anualidad anticipada、tasa efectiva anual；pt valor presente、valor futuro、taxa de desconto、série antecipada、taxa efetiva anual；fr valeur actuelle、valeur future / acquise、taux d'actualisation、annuités de début de période、taux annuel effectif；de Barwert、Endwert、Abzinsung、Diskontierungsfaktor、vorschüssig / nachschüssig、effektiver Jahreszins；ru приведённая (текущая) стоимость、будущая стоимость、ставка дисконтирования、аннуитет пренумерандо / постнумерандо、эффективная годовая ставка；id nilai sekarang (present value)、nilai masa depan、tingkat diskonto、anuitas di muka / biasa、suku bunga efektif tahunan；ar القيمة الحالية、القيمة المستقبلية、معدل الخصم、الدفعات في بداية الفترة、معدل الفائدة السنوي الفعلي
- [x] Excel 函数名按当地版本：zh / ja / id / ar PV；es / fr VA；pt VP；de BW；ru ПС；小数逗号语种参数分隔用分号（如 `=VA(5%;5;0;10000)`）
- [x] 数字写法与页面 Intl 输出一致（en/zh/ja/ar 7,835.26；de/pt/id 7.835,26；es 7835,26 但 45.036,73；fr/ru 7 835,26）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

样例 1：10,000、5 年、5%、按年 → (1.05)^5 = 1.276282 → PV 7,835.26；折现系数 0.783526；4% 8,219.27；6% 7,472.58。复利频率：按月 7,792.05（实际年利率 5.12%）、按日 7,788.14、连续 7,788.01。样例 2：每月 500、10 年、6%、按月 → 45,036.73；期初 × 1.005 = 45,261.91。样例 3：终值 5,000 + 每月 200、20 年、7%、按月 → 124,379.03（20,193.69 + 104,185.33）。彩票：每年 50,000 × 20 期、期初、5% → 654,266.04。通胀：100,000、10 年、3% → 74,409.39。Excel：=PV(5%, 5, 0, 10000) → −7,835.26；=PV(6%/12, 120, 500) → −45,036.73。

## 每语 brief

### en
- 检索词：present value calculator；how to calculate present value；present value formula；present value of annuity；future value calculator；discount factor
- 语气：口语
- Title：Present Value Calculator — What a Future Sum or Regular Payments Are Worth Today, Plus Future Value
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：现值计算器；现值怎么算；现值公式；年金现值；终值计算；折现率；复利现值系数
- 语气：口语，兼顾财务管理课本说法
- Title：现值计算器 — 将来一笔钱或每期收付款今天值多少，也能算终值
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de valor presente；cómo calcular el valor presente；fórmula del valor presente；valor actual de una anualidad；valor futuro
- 语气：口语（tú）
- Title：Calculadora de valor presente — cuánto vale hoy una suma futura o pagos periódicos, también valor futuro
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة القيمة الحالية；طريقة حساب القيمة الحالية；قانون القيمة الحالية；القيمة الحالية للدفعات；القيمة المستقبلية
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة القيمة الحالية — كم تساوي اليوم مبلغًا مستقبليًا أو دفعات منتظمة، مع القيمة المستقبلية
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de valor presente；como calcular valor presente；fórmula do valor presente；valor presente de uma série de pagamentos；valor futuro
- 语气：口语（pt-BR）
- Title：Calculadora de valor presente — quanto vale hoje um valor futuro ou pagamentos periódicos, com valor futuro
- 按钮：Calcular / Carregar exemplo / Limpar
- 本地说明：HP 12C 用户多——可在 FAQ q7 旁提 n / i / PMT / FV 对应（不新增键）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator present value；cara menghitung nilai sekarang；rumus present value；nilai sekarang anuitas；nilai masa depan
- 语气：口语（Anda）
- Title：Kalkulator Nilai Sekarang (Present Value) — Berapa Nilai Hari Ini dari Uang Masa Depan atau Pembayaran Rutin, Plus Nilai Masa Depan
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul valeur actuelle；formule valeur actuelle；valeur actuelle d'une suite d'annuités；taux d'actualisation；valeur future
- 语气：vouvoiement
- Title：Calcul de la valeur actuelle — ce que vaut aujourd'hui une somme future ou des versements réguliers, et valeur future
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：現在価値 計算；現在価値 求め方；割引現在価値；年金現価；将来価値 計算
- 语气：です・ます
- Title：現在価値の計算ツール — 将来のお金や毎期の受取額が今いくらか、将来価値も計算
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор приведённой стоимости；как рассчитать текущую стоимость；формула дисконтирования；приведённая стоимость аннуитета；будущая стоимость
- 语气：нейтральный
- Title：Калькулятор приведённой стоимости — сколько сегодня стоят будущая сумма или регулярные платежи, плюс будущая стоимость
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Barwert berechnen；Barwert Formel；Barwert Rente；Endwert berechnen；Abzinsungsfaktor
- 语气：Sie-Form
- Title：Barwert berechnen — was eine künftige Summe oder regelmäßige Zahlungen heute wert sind, auch Endwert
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「PV and FV Modes」改为结果向说明 + Plus Future Value；02 新增同意图相关搜索全表（annuity / annuity due / future value / continuous / discount factor / discount rate / PV vs NPV / lottery / Excel PV 吸；NPV、IRR、复利已有工具，求 PMT 不吸）与意图审查（不满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 present value calculator + future sum / regular payments + future value；desc 写 calculate、lump sum、payments、复利频率、期初期末、算式、实际年利率、敏感度、逐年表；annuity → Formula 3 + 样例 2；annuity due → FAQ q3；compounding → FAQ q2；Excel → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（现值、現在価値、valor presente、valeur actuelle、Barwert、приведённая стоимость、nilai sekarang 等）；Excel 函数名与参数分隔按当地版本；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-present-value；title 定为「PV and FV Modes」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（只算一次性金额、无过程），已重写 |
