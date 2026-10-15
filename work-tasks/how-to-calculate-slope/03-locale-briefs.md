# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-slope`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把角度 / 坡度 / 距离 / 中点等输出名串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 斜率、截距、斜截式、点斜式、一般式、倾斜角、坡度、垂直；ja 傾き、切片、直線の式、傾斜角、勾配（%）；es pendiente、ordenada al origen、forma pendiente-intersección / punto-pendiente / general、ángulo de inclinación；pt coeficiente angular、coeficiente linear、equação reduzida / geral da reta、inclinação；fr coefficient directeur、ordonnée à l'origine、équation réduite、équation cartésienne、pente (%)；de Steigung、y-Achsenabschnitt、Geradengleichung、Punkt-Steigungs-Form、Steigungswinkel、Steigung in Prozent；ru угловой коэффициент、уравнение прямой、угол наклона、уклон (%)；id gradien、persamaan garis、titik potong sumbu、sudut kemiringan；ar الميل، معادلة المستقيم، المقطع الصادي، زاوية الميل
- [x] **字母约定**：页面结果固定输出 y = mx + b；各语若课本习惯不同（ja y = ax + b、fr y = mx + p、ru y = kx + b、id y = mx + c），在 Formula / FAQ 中说明对应关系，不改输出
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：坐标示例写分号 (1; 2)，小数写逗号（−0,6667、4,4721、8,33 %）；页面把逗号当小数点
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

样例 1：(1, 2)、(3, 6) → m = 4 ÷ 2 = 2；b = 0；y = 2x；2x − y = 0；63.43°；200%；垂线 −1/2；√20 = 2√5 ≈ 4.4721；中点 (2, 4)。样例 2：(−2, 3)、(4, −1) → m = −4 ÷ 6 = −2/3；b = 5/3；y = −(2/3)x + 5/3；2x + 3y = 5；垂线 3/2。样例 3：(0, 0) + m = 1/12 → 8.33%、4.76°、1 : 12、第二点 (12, 1)。4/12 屋面 → m = 1/3、18.43°。(2, 120)、(5, 300) → 60。100% 坡度 = 45°。

## 每语 brief

### en
- 检索词：slope calculator；how to find slope from two points；slope formula；equation of a line from two points；slope intercept form；slope to angle；percent grade
- 语气：口语（学生）
- Title：Slope Calculator — Find the Slope Between Two Points and the Equation of the Line, Step by Step
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：斜率计算器；两点求斜率；斜率公式；直线方程怎么求；斜截式；点斜式；倾斜角；坡度怎么算
- 语气：口语，兼顾初高中课本说法
- Title：斜率计算器 — 输入两个点求出斜率并写出直线方程，附计算过程
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de pendiente；cómo calcular la pendiente de una recta；fórmula de la pendiente；ecuación de la recta que pasa por dos puntos；pendiente en porcentaje
- 语气：口语（tú）
- Title：Calculadora de pendiente — calcula la pendiente entre dos puntos y la ecuación de la recta, paso a paso
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الميل；طريقة حساب ميل المستقيم；قانون الميل；معادلة المستقيم بمعلومية نقطتين；زاوية الميل
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة الميل — أوجد ميل المستقيم المار بنقطتين ومعادلته خطوة بخطوة
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de coeficiente angular；como calcular o coeficiente angular；inclinação da reta；equação da reta dados dois pontos；equação reduzida da reta
- 语气：口语（pt-BR）
- Title：Calculadora de coeficiente angular — encontre a inclinação entre dois pontos e a equação da reta, passo a passo
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator gradien；cara mencari gradien dari dua titik；rumus gradien；persamaan garis melalui dua titik；kemiringan dalam persen
- 语气：口语（Anda）
- Title：Kalkulator Gradien — Cari Gradien Garis dari Dua Titik dan Persamaan Garisnya, Langkah demi Langkah
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul coefficient directeur；calculer la pente d'une droite；équation de droite passant par deux points；équation réduite；pente en pourcentage
- 语气：vouvoiement
- Title：Calcul du coefficient directeur — pente entre deux points et équation de la droite, avec les étapes
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：傾き 求め方；2点を通る直線の式；直線の傾き 計算；傾斜角 求め方；勾配 パーセント
- 语气：です・ます
- Title：傾きの計算ツール — 2点から直線の傾きと式を求める（途中式つき）
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：угловой коэффициент прямой калькулятор；как найти угловой коэффициент по двум точкам；уравнение прямой по двум точкам；угол наклона прямой；уклон в процентах
- 语气：нейтральный
- Title：Калькулятор углового коэффициента — наклон прямой по двум точкам и уравнение прямой, с решением
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Steigung berechnen；Steigung zwei Punkte；Geradengleichung aufstellen；Steigungswinkel berechnen；Steigung in Prozent
- 语气：Sie-Form
- Title：Steigung berechnen — Steigung aus zwei Punkten und Geradengleichung, mit Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 加 equation of the line + step by step；02 新增同意图相关搜索全表（两点求斜率 / 方程三种形式 / 不存在与零斜率 / 角度与坡度 / 垂线 / 1:12 坡道 / 距离中点吸；线性回归、多元梯度不吸）与意图审查（不满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 slope calculator + two points + equation of the line + step by step；desc 写 calculate、精确分数、working、三种方程、截距、角度、坡度、垂线、距离、中点；equation → FAQ q3；undefined → FAQ q2；angle / grade → FAQ q4；ramp → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（斜率、傾き、pendiente、coeficiente angular、coefficient directeur、Steigung、угловой коэффициент、gradien 等）；字母约定差异在 Formula / FAQ 说明；小数逗号语种坐标用分号；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-slope；title 定为「How to Calculate Slope Between Two Points」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（只给小数斜率、无方程），已重写 |
