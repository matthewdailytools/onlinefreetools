# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-median`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把平均数 / 极差 / 频数等字段名串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 中位数、众数、分组数据、组距、累计频数、组限 / 组界、组中值；ja 中央値、最頻値、度数分布表、階級、累積度数、階級値；es mediana、moda、datos agrupados、frecuencia acumulada、marca de clase、límites reales；pt mediana、moda、dados agrupados、frequência acumulada、ponto médio、moda de Czuber；fr médiane、mode、classe médiane、effectifs cumulés、centre de classe；de Median、Modus、klassierte Daten、kumulierte Häufigkeit、Klassenmitte；ru медиана、мода、интервальный ряд、накопленная частота、середина интервала；id median、modus、data berkelompok、frekuensi kumulatif、titik tengah、tepi bawah kelas；ar الوسيط、المنوال、البيانات المبوبة、التكرار المتجمع الصاعد、مركز الفئة
- [x] **小数逗号语种（de / es / pt / fr / ru / id）**：页面把逗号当小数点，列表只能用空格 / 分号 / 换行分隔——nums_ph、nums_hint、err_token 必须这样写（如 `12 5 8 3 9 7 41 7`）；en / zh / ja / ar 可写逗号分隔
- [x] 数字写法与页面 Intl 输出一致（en/zh/ja/ar 7.5 / 25.83 / 1,030；de/pt/id 7,5 / 25,83 / 1.030；es 7,5 / 25,83 / 1030；fr/ru 7,5 / 25,83 / 1 030）；分组输入示例 `10-20 8` 原样
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

样例 1：12 5 8 3 9 7 41 7 → 排序 3 5 7 7 8 9 12 41；第 4、5 个；(7 + 8) ÷ 2 = 7.5；众数 7（2 次）；平均 92 ÷ 8 = 11.5；去掉 41 后平均 7.29、中位数 7。样例 2：2 4 4 5 7 7 9 → 5；众数 4 和 7。无众数例：1, 2, 3 与 1, 1, 2, 2。分组样例：0–10: 5、10–20: 8、20–30: 12、30–40: 9、40–50: 6 → N = 40、N/2 = 20、cf 13、f 12、h 10、中位数 25.83、众数 25.71、平均 25.75。不连续组限：10–19: 4、20–29: 10、30–39: 14、40–49: 7、50–59: 5 → 9.5–19.5、中位数 33.79、众数 33.14。上限：10000 个值 / 100 组；> 300 个时只显示部分排序列表。

## 每语 brief

### en
- 检索词：median calculator；median and mode calculator；how to find the median；median of grouped data；mode of grouped data；median of even numbers
- 语气：口语（学生）
- Title：Median and Mode Calculator — For a List of Numbers or Grouped Data, with Steps
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：中位数计算器；中位数怎么算；偶数个数的中位数；分组数据中位数公式；众数怎么求；中位数和平均数的区别
- 语气：口语，兼顾初高中 / 统计学课本说法
- Title：中位数和众数计算器 — 一组数据或分组数据（频数表）都能算，附计算过程
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de mediana；cómo calcular la mediana；mediana y moda；mediana de datos agrupados；moda de datos agrupados
- 语气：口语（tú）
- Title：Calculadora de mediana y moda — para una lista de números o datos agrupados, con pasos
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الوسيط；طريقة حساب الوسيط；الوسيط والمنوال；الوسيط للبيانات المبوبة；المنوال للبيانات المبوبة
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة الوسيط والمنوال — لقائمة أرقام أو بيانات مبوبة مع خطوات الحل
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de mediana；como calcular a mediana；mediana e moda；mediana de dados agrupados；moda de Czuber
- 语气：口语（pt-BR）
- Title：Calculadora de mediana e moda — para uma lista de números ou dados agrupados, com passo a passo
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator median；cara mencari median；median dan modus；median data berkelompok；modus data berkelompok；tepi bawah kelas
- 语气：口语（Anda）
- Title：Kalkulator Median dan Modus — untuk Deret Angka atau Data Berkelompok, dengan Langkahnya
- 按钮：Hitung / Muat contoh / Hapus
- 本地说明：课本写法 Me = Tb + ((n/2 − fk) ÷ f) × p、Mo = Tb + (d₁ ÷ (d₁ + d₂)) × p，与页面公式等价，可在 Formula / FAQ 中对照
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul médiane；comment calculer la médiane；médiane et mode；médiane série statistique classes；classe modale
- 语气：vouvoiement
- Title：Calcul de la médiane et du mode — série de nombres ou données groupées, avec les étapes
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：中央値 計算；中央値 求め方；中央値 偶数；度数分布表 中央値；最頻値 求め方
- 语气：です・ます
- Title：中央値・最頻値の計算ツール — データの並びでも度数分布表でも求め方を表示
- 按钮：計算する / サンプルを読み込む / クリア
- 本地说明：日本の中学では度数分布表の最頻値を「度数最大の階級の階級値」とする定義もある——FAQ で補足可（ページの公式値 25.71 と階級値 25 の違い）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор медианы；как найти медиану；медиана и мода；медиана интервального ряда；мода интервального ряда
- 语气：нейтральный
- Title：Калькулятор медианы и моды — для ряда чисел и интервального ряда, с решением
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Median berechnen；Median Rechner；Median gerade Anzahl；Median klassierte Daten；Modus berechnen
- 语气：Sie-Form
- Title：Median und Modus berechnen — für Zahlenreihen und klassierte Daten, mit Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 加 list / grouped data / steps；02 新增同意图相关搜索全表（how to find / even / grouped median / grouped mode / no mode / median vs mean / class boundaries / Excel 吸；mean、SD 已有工具，四分位不吸）与意图审查（不满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 median and mode calculator + list + grouped data + steps；desc 写 calculate、排序高亮、奇偶、众数、平均数、分组公式；grouped → Formula 4–5 + FAQ q4–q5；even → FAQ q1；no mode → FAQ q2；Excel → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（分组数据、度数分布表、datos agrupados、klassierte Daten、интервальный ряд、data berkelompok 等）；小数逗号语种改用空格 / 分号分隔示例；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-median；title 定为主词 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄且解析 / 众数有误，已重写 |
