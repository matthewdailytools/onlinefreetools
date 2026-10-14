# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-quadratic-equation`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（a、b、c、x、Δ、i、√ 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把判别式、顶点、韦达、对称轴串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：求根公式用当地课本名称（zh 求根公式、ja 解の公式、es fórmula general、pt fórmula de Bhaskara、fr formule du discriminant / formules de résolution、de Mitternachtsformel / abc-Formel（可提 pq-Formel）、ru формула корней через дискриминант、id rumus ABC、ar القانون العام）；「判别式」用当地课本词（判別式、discriminante、discriminant、Diskriminante、дискриминант、diskriminan、المميز）。Example / FAQ / Use cases 数字固定（2x² + 3x − 2、Δ 25、1/2、−2、(2x − 1)(x + 2)、(−3/4, −25/8)、x² − 5x + 6、x² + 2x − 1 → −1 ± √2、√8 = 2√2、x² + 2x + 5 → Δ −16 → −1 ± 2i、(1/2)x² − x − 4 → x² − 2x − 8、20 m/s、1.5 m、−4.9t² + 20t + 1.5、4.16 s、40 m²、x² + 3x − 40、5 m）各语不得改动（小数点可按当地习惯）。`vieta_tpl` 的 `{sum}` `{prod}`、`min_tpl` / `max_tpl` 的 `{k}` `{h}`、`linear_tpl` 的 `{x}` 原样保留；How / FAQ 中引用的按钮与结果行名称须与该语控件文案一致。

---

## 每语 brief

### en
- 检索词：quadratic equation solver；quadratic formula calculator；solve quadratic equation step by step；discriminant calculator；quadratic equation with complex roots
- 语气：口语 + 作业友好
- Title：Quadratic Equation Solver — Solve ax² + bx + c = 0 Step by Step with the Quadratic Formula
- 按钮：Solve / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：一元二次方程计算器；一元二次方程求根公式；判别式；一元二次方程因式分解；顶点式
- 语气：初高中课本 + 口语
- Title：一元二次方程计算器 — 用求根公式分步求解 ax² + bx + c = 0
- 按钮：求解 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：二次方程式 計算；解の公式 計算機；二次方程式 途中式；判別式；平方完成
- 语气：です・ます
- Title：二次方程式計算機 — 解の公式で ax² + bx + c = 0 を途中式つきで解く
- 按钮：解く / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حل المعادلة التربيعية؛ القانون العام لحل معادلة الدرجة الثانية؛ المميز؛ تحليل المعادلة التربيعية؛ معادلة من الدرجة الثانية
- 语气：فصحى مبسطة
- Title：حل المعادلة التربيعية — حل ax² + bx + c = 0 خطوة بخطوة بالقانون العام
- 按钮：حل / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de ecuaciones de segundo grado；fórmula general；ecuación cuadrática paso a paso；discriminante；raíces complejas
- 语气：tú
- Title：Calculadora de ecuaciones de segundo grado — Resuelve ax² + bx + c = 0 paso a paso con la fórmula general
- 按钮：Resolver / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de equação do 2º grau；fórmula de Bhaskara；delta；equação do segundo grau passo a passo；raízes complexas
- 语气：você（pt-BR）
- Title：Calculadora de equação do 2º grau — Resolva ax² + bx + c = 0 passo a passo com a fórmula de Bhaskara
- 按钮：Resolver / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：résoudre équation du second degré；calcul discriminant；équation du second degré en ligne；forme canonique；racines complexes
- 语气：vouvoiement
- Title：Résoudre une équation du second degré — ax² + bx + c = 0 étape par étape avec le discriminant
- 按钮：Résoudre / Charger l’exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：quadratische Gleichung lösen；Mitternachtsformel Rechner；abc-Formel；pq-Formel；Diskriminante；Scheitelpunktform
- 语气：Sie-Form
- Title：Quadratische Gleichungen lösen — ax² + bx + c = 0 Schritt für Schritt mit der Mitternachtsformel
- 按钮：Lösen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：решение квадратных уравнений онлайн；дискриминант калькулятор；квадратное уравнение с решением；корни квадратного уравнения；теорема Виета
- 语气：нейтральный，на «вы»
- Title：Решение квадратных уравнений онлайн — ax² + bx + c = 0 по шагам через дискриминант
- 按钮：Решить / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator persamaan kuadrat；rumus ABC；diskriminan；akar-akar persamaan kuadrat；pemfaktoran
- 语气：Anda
- Title：Kalkulator Persamaan Kuadrat — Selesaikan ax² + bx + c = 0 Langkah demi Langkah dengan Rumus ABC
- 按钮：Selesaikan / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Roots and Discriminant」改为分步求解；02 同意图搜索全表（求根公式、判别式、复数根、最简根式、分数系数、因式分解、顶点式、韦达、应用题吸；三次方程、方程组不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 quadratic equation solver + step by step + quadratic formula；desc 写判别式 / 精确根 / 因式分解 / 顶点式 / 图 + 2x² + 3x − 2 例子；复数根、根式、分数、a = 0、配方分别落到 Why choose、Formula、FAQ q1–q7、Use cases | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地课本说法（求根公式、解の公式、fórmula general、fórmula de Bhaskara、Mitternachtsformel、через дискриминант、rumus ABC、القانون العام 等）；Example 数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | a、b、c 三格 + 实根与判别式立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
