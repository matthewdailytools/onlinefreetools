# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-exponent`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2；zh 避免「A 和 B」两段并列）
- [x] 隐私不当卖点
- [x] 禁「Formula 节 / 见规则节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 幂、次方、底数、指数、开方 / 立方根、负指数、分数指数、指数法则；ja 累乗（べき乗）、指数、底、累乗根 / 立方根、負の指数、分数の指数、指数法則；es potencia, base, exponente, raíz cúbica, exponente negativo / fraccionario, leyes de los exponentes；pt potência, base, expoente, raiz cúbica, expoente negativo / fracionário, propriedades da potenciação；fr puissance, base, exposant, racine cubique, exposant négatif / fractionnaire, règles des puissances；de Potenz, Basis, Exponent, Kubikwurzel, negativer / gebrochener Exponent, Potenzgesetze；ru степень, основание, показатель степени, кубический корень, отрицательная / дробная степень, свойства степеней；id pangkat (eksponen), basis, akar pangkat tiga, eksponen negatif / pecahan, sifat-sifat eksponen；ar الأس، القوة، الأساس، الجذر التكعيبي، الأس السالب / الكسري، قوانين الأسس
- [x] 数字格式与页面 Intl 输出一致：de / pt / id 千分位「.」小数「,」（1.024；14,2067）；es 千分位「.」但四位数不分组（1024；10.000）；fr / ru 千分位空格、小数逗号（1 024；14,2067）；en / zh / ja / ar 千分位「,」小数「.」；小数逗号语种样例写 0,75 与 1,05
- [x] 事实不可改（见「固定数字」；运算记号 a^b、√、∛、ln、log 各语一致）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整；zh / ja 把 −2^4 与 0^0 等课堂常见问题前置；es / pt / fr 以「exponente negativo / fraccionario」问题优先）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：2^10 = 1024；2^100 共 31 位；5^−3 = 1/125 = 0.008；16^0.75 = 8；(−8)^(1/3) = −2；(−4)^(1/2) 主值 2i；a^3 = 343 → 7；1.05^b = 2 → ≈ 14.2067；1.07^b = 2 → ≈ 10.2448；2^1000 共 302 位；2^10000 ≈ 1.99506311688 × 10^3010；精确显示上限 3000 位；小数 12 位有效数字。

## 每语 brief

### en
- 检索词：exponent calculator；power calculator；negative exponent calculator；fractional exponent calculator；solve for exponent
- 语气：口语
- Title：Exponent Calculator — Find a Power, Base or Unknown Exponent with Exact Results and Steps
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：指数计算器；次方计算器；几次方怎么算；负指数怎么算；分数指数；求未知指数
- 语气：口语（课堂说法）
- Title：指数计算器 — 计算 a 的 b 次方，也能反求底数或指数并给出步骤
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de exponentes；calculadora de potencias；exponente negativo；exponente fraccionario；despejar el exponente
- 语气：口语（tú）
- Title：Calculadora de exponentes — calcula potencias y despeja la base o el exponente con resultado exacto y pasos
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الأسس；حساب الأس；الأس السالب；الأس الكسري；إيجاد الأس المجهول
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة الأسس — احسب القوة أو أوجد الأساس أو الأس المجهول بنتيجة دقيقة وخطوات الحل
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de expoente；calculadora de potência；expoente negativo；expoente fracionário；descobrir o expoente
- 语气：口语（pt-BR）
- Title：Calculadora de expoentes — calcule potências e descubra a base ou o expoente com resultado exato e passo a passo
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator eksponen；kalkulator pangkat；cara menghitung pangkat；eksponen negatif；eksponen pecahan
- 语气：口语（Anda）
- Title：Kalkulator Eksponen — Hitung Pangkat atau Cari Basis dan Eksponen yang Tidak Diketahui dengan Hasil Tepat dan Langkah
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculatrice puissance；calculatrice exposant；exposant négatif；exposant fractionnaire；trouver l’exposant
- 语气：vouvoiement
- Title：Calculatrice de puissance — calculez a puissance b ou retrouvez la base ou l’exposant avec valeur exacte et étapes
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：累乗 計算；べき乗 計算；指数 計算；負の指数；分数の指数；指数 求め方
- 语气：です・ます
- Title：累乗計算ツール — aのb乗を正確に計算し、底や指数の逆算も途中式つきで表示
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор степеней；возведение в степень онлайн；отрицательная степень；дробная степень；найти показатель степени
- 语气：нейтральный
- Title：Калькулятор степеней — возведение в степень и поиск основания или показателя с точным ответом и решением
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Potenzrechner；Potenzen berechnen；negativer Exponent；gebrochener Exponent；Exponent berechnen
- 语气：Sie-Form
- Title：Potenzrechner — Potenzen berechnen oder Basis und Exponent auflösen, mit exaktem Ergebnis und Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「Exponent Calculator — How to Calculate Powers」改为工具名 + 三向求解 + 精确与步骤；02 新增与对数 / 科学计数法 / 72 法则工具的分工、同意图相关搜索全表（负指数 / 分数指数 / 反求 / 指数法则 / 大整数吸；复数输入、模幂、换底不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 exponent calculator + power + base + unknown exponent + exact + steps；desc 写反求、精确大整数与分数、负底数实根、科学计数法；FAQ q1–q8 逐一对应次要词 | 主词在 H1；次词逐一有落点；十语标题经 title 检查 |
| 2b 十语检索向重写（改写） | 2026-10-15 | 十语按 brief 独立重写：title 用当地说法（指数计算器 / 次方、累乗、exponentes / potencias、expoente / potência、puissance / exposant、Potenzrechner、степени、eksponen / pangkat、الأسس）；数字格式按页面 Intl；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 slug；title 定为「Exponent Calculator — How to Calculate Powers」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（FAQ 一句答、只有浮点 a^b、负底数分数指数报错），已重写 |
