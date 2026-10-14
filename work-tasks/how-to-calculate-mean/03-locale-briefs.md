# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-mean`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把「算术/几何/调和」三模式名串进 H1）
- [x] 隐私：数字留在浏览器标签页、不发送到服务器（一条即可，不当整节卖点）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 小数逗号语种（es / pt / fr / de / ru / id）：FAQ 与报错写清「用分号分隔」规则；示例数字用当地小数点（与结果区 Intl 格式一致）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：mean calculator；how to calculate mean；average calculator；find the mean；geometric mean calculator
- 语气：口语工具站（学生 + 办公）
- Title：Mean Calculator — Find the Average of a List, with Working
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：平均数计算器；平均数怎么算；求平均值；几何平均数；调和平均数
- 语气：口语、偏学生与职场
- Title：平均数计算器 — 求一组数的平均值，附计算过程
- 按钮：计算 / 加载样例 / 清空
- 本地示例：成绩、实验数据、年化收益
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de media；cómo calcular la media；calcular promedio；media aritmética；media geométrica
- 语气：口语
- Title：Calculadora de media — saca el promedio de una lista con el procedimiento
- 按钮：Calcular / Cargar ejemplo / Borrar
- 小数逗号：是（2,5; 3,5）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة المتوسط الحسابي；كيفية حساب المتوسط الحسابي；الوسط الحسابي；الوسط الهندسي；الوسط التوافقي
- 语气：فصحى مبسطة
- Title：حاسبة المتوسط الحسابي — احسب متوسط مجموعة أرقام مع خطوات الحل
- 按钮：احسب / تحميل مثال / مسح
- 数字：拉丁数字 + 小数点 .
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de média；como calcular média；média aritmética；média geométrica；calcular média de notas
- 语气：口语（pt-BR 为主）
- Title：Calculadora de média — calcule a média de uma lista com o passo a passo
- 按钮：Calcular / Carregar exemplo / Limpar
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator rata-rata；cara menghitung rata-rata；rumus mean；rata-rata geometrik；rata-rata harmonik
- 语气：口语
- Title：Kalkulator Rata-rata (Mean) — Hitung Rata-rata Beserta Caranya
- 按钮：Hitung / Muat contoh / Hapus
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul de moyenne；calculer une moyenne；moyenne arithmétique；moyenne géométrique；moyenne harmonique
- 语气：口语、vouvoiement
- Title：Calcul de moyenne — obtenez la moyenne d’une liste avec le détail du calcul
- 按钮：Calculer / Charger un exemple / Effacer
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：平均値 計算；平均の求め方；相加平均；相乗平均；調和平均
- 语气：です・ます
- Title：平均値の計算ツール — 数値リストの平均を途中式つきで求める
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор среднего арифметического；как найти среднее арифметическое；среднее значение；среднее геометрическое；среднее гармоническое
- 语气：нейтральный
- Title：Калькулятор среднего арифметического — с ходом решения
- 按钮：Рассчитать / Загрузить пример / Очистить
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Mittelwert berechnen；Durchschnitt berechnen；arithmetisches Mittel；geometrisches Mittel；harmonisches Mittel
- 语气：Sie-Form
- Title：Mittelwert berechnen — Durchschnitt einer Zahlenliste mit Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-13 | 保留 slug；H1 改为 Find the Average of a List, with Working；02 新增同意图相关搜索全表（mean/average/geometric/harmonic/paste/mean vs median 吸；weighted/median/mode 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-13 | en title 含 mean calculator + average；desc 写 sum ÷ count、粘贴表格、geometric/harmonic；how to calculate mean → How 总答与 FAQ q1；mean vs median → FAQ q3；weighted → FAQ q6 划界 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-13 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地主词（平均数计算器 / Calculadora de media / 平均値の計算ツール 等）；小数逗号语种 FAQ 与报错写清分号规则、示例用当地小数逗号；ja 加「相加平均と相乗平均の使い分け」，fr 加 moyenne avec coefficients，id 加 mean/median/modus；FAQ 与 Why choose 条序随语种调整 | 十语键集与 en 一致；示例数字与 Intl 输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-mean；title 定为结果向主词 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-13 审计判定过薄，已重写 |
