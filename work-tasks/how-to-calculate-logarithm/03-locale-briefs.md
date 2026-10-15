# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-logarithm`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把 antilog / 首数尾数 / 位数等输出名串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 常用对数 lg、自然对数 ln、换底公式、真数、底数、首数、尾数、反对数；ja 常用対数、自然対数、底の変換公式、真数、指標、仮数；es logaritmo decimal / neperiano, cambio de base, característica y mantisa, antilogaritmo；pt logaritmo decimal / natural, mudança de base, característica e mantissa, antilogaritmo；fr logarithme décimal / népérien, changement de base, caractéristique et mantisse；de Zehnerlogarithmus lg, natürlicher Logarithmus ln, Basiswechsel, Kennzahl und Mantisse, Numerus；ru десятичный логарифм lg, натуральный ln, формула перехода к новому основанию, характеристика и мантисса, антилогарифм；id logaritma basis 10, logaritma natural, sifat perubahan basis, karakteristik dan mantisa, antilogaritma；ar اللوغاريتم العشري، اللوغاريتم الطبيعي، قانون تغيير الأساس، البيان والجزء العشري (المانتيسا)، اللوغاريتم العكسي
- [x] **记号约定**：页面输出固定写 log₁₀ / ln / log₂；zh / ru / de 课本常把常用对数写作 lg，须在 FAQ q1 说明对应关系，不改输出
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：示例小数写逗号（6,907755279、0,0345、316,227766）；页面把逗号当小数点；「2^10」「3.2e-5」写法在逗号语种改为「3,2e-5」
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

log₁₀ 1000 = 3；ln 1000 = 6.907755279；log₂ 1000 = 9.965784285。log₄ 8 = 2.079441542 ÷ 1.386294361 = 3/2。log₁₀ 3450 = 3.537819095（首数 3，尾数 0.5378190951）。log₁₀ 0.0345 = −1.462180905 → 2̄.5378，1 个前导零。10^2.5 = 316.227766；e¹ = 2.718281828；ln x = log₁₀ x × 2.302585093。2¹⁰⁰ → 30.10299957 → 31 位。log₀.₅ 8 = −3。pH 4.49（3.2e-5）；ln 2 ÷ ln 1.07 = 10.24；1000 → 30 dB；log₂ 1024 = 10。

## 每语 brief

### en
- 检索词：logarithm calculator；log calculator any base；log base 2 calculator；natural log calculator；change of base formula；antilog calculator；characteristic and mantissa
- 语气：口语（学生）
- Title：Logarithm Calculator — Find the Log of Any Number in Any Base, with Exact Values and Working
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：对数计算器；对数怎么算；换底公式；lg 和 ln 的区别；反对数计算；首数和尾数；log2 计算
- 语气：口语，兼顾高中课本说法
- Title：对数计算器 — 输入任意底数求对数，能化成分数的给出精确值并附计算过程
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de logaritmos；cómo calcular un logaritmo；logaritmo en base 2；cambio de base logaritmo；antilogaritmo；característica y mantisa
- 语气：口语（tú）
- Title：Calculadora de logaritmos — calcula el logaritmo de cualquier número en cualquier base, con valor exacto y procedimiento
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة اللوغاريتم；طريقة حساب اللوغاريتم；قانون تغيير الأساس；اللوغاريتم الطبيعي ln；اللوغاريتم العكسي
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة اللوغاريتم — احسب لوغاريتم أي عدد بأي أساس مع القيمة الدقيقة وخطوات الحل
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de logaritmo；como calcular logaritmo；mudança de base；logaritmo natural；antilogaritmo；característica e mantissa
- 语气：口语（pt-BR）
- Title：Calculadora de logaritmo — calcule o log de qualquer número em qualquer base, com valor exato e resolução
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator logaritma；cara menghitung logaritma；sifat perubahan basis logaritma；logaritma natural；antilog；karakteristik dan mantisa
- 语气：口语（Anda）
- Title：Kalkulator Logaritma — Hitung Log Bilangan Apa Pun dengan Basis Apa Pun, Lengkap dengan Nilai Eksak dan Caranya
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul logarithme；calculatrice log en ligne；changement de base logarithme；logarithme népérien；logarithme décimal；caractéristique et mantisse
- 语气：vouvoiement
- Title：Calcul de logarithme — log d'un nombre dans n'importe quelle base, avec valeur exacte et étapes
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：対数 計算；log 計算 サイト；底の変換公式；自然対数 計算；常用対数 指標 仮数；真数 求め方
- 语气：です・ます
- Title：対数計算ツール — 底を自由に選んで対数（log）を求める、分数になる値は正確に表示（途中式つき）
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор логарифмов；как вычислить логарифм；логарифм по основанию 2；формула перехода к новому основанию；десятичный логарифм lg；характеристика и мантисса
- 语气：нейтральный
- Title：Калькулятор логарифмов — логарифм любого числа по любому основанию, с точным значением и решением
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Logarithmus berechnen；Logarithmus Rechner；Basiswechsel Logarithmus；lg und ln Unterschied；natürlicher Logarithmus；Kennzahl und Mantisse
- 语气：Sie-Form
- Title：Logarithmus berechnen — Logarithmus jeder Zahl zu jeder Basis, mit exaktem Wert und Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 加 any base + exact values + working；02 新增同意图相关搜索全表（三种预设底 / 换底 / log 与 ln / 0 与负数 / 底数 1 / antilog / 首数尾数 / 位数 / 对数法则吸；复数对数、符号求解不吸）与意图审查（不满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 logarithm calculator + any base + exact values + working；desc 写 calculate、log₁₀ / ln / log₂ / 自定义底、antilog、分数与幂、精确值、换底步骤、首数尾数、example；log vs ln → FAQ q1；change of base → FAQ q2；antilog → FAQ q6；digits → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（对数、対数、logaritmo、logarithme、Logarithmus、логарифм、logaritma、اللوغاريتم）；lg 记号差异在 FAQ 说明；小数逗号语种示例用逗号；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-logarithm；title 定为「Logarithm Calculator — How to Calculate Logs」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（只有一个小数结果、无精确值 / antilog / 换底过程），已重写 |
