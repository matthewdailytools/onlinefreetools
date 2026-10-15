# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-inflation`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把购买力 / 翻倍 / 实际工资等输出名串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] YMYL：disclaimer 保留「非财务 / 投资 / 税务建议、CPI 为美国城市消费者平均、固定通胀率仅为示意」三层意思；不承诺预测
- [x] **数据范围诚实**：CPI 模式只有美国 CPI-U（1913–2025）；非美国语种须说明本国换算可用固定通胀率模式或按 CPI₂ ÷ CPI₁ 自行套用本国指数（zh 国家统计局 CPI；ja 総務省統計局 消費者物価指数；de Destatis Verbraucherpreisindex；fr INSEE IPC；es INE IPC；pt-BR IBGE IPCA；ru Росстат ИПЦ；id BPS IHK；ar 各国统计机构），不捏造本国数值
- [x] 当地术语：zh 通货膨胀 / 通胀率、居民消费价格指数（CPI）、购买力、名义 / 实际、72 / 70 法则；ja インフレ率、消費者物価指数、購買力、名目 / 実質；es inflación, IPC, poder adquisitivo, nominal / real；pt inflação, índice de preços ao consumidor (CPI dos EUA), poder de compra, nominal / real；fr inflation, indice des prix à la consommation, pouvoir d'achat, nominal / réel；de Inflation, Verbraucherpreisindex, Kaufkraft, nominal / real；ru инфляция, индекс потребительских цен, покупательная способность, номинальный / реальный；id inflasi, indeks harga konsumen, daya beli, nominal / riil；ar التضخم، مؤشر أسعار المستهلك، القوة الشرائية، الاسمي / الحقيقي
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：金额写 186,93、67.911,39（千分位按当地）；页面容错千分位与小数逗号
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：100（2000）≈ 186.93（2025）、+86.93%、2.53%/年；50,000（2015）≈ 67,911.39、实际 62,000 → 名义 +24%、实际 −8.70%；1,000 × 1.03⁵ = 1,159.27、购买力 862.61、翻倍 23.45 年；美国历史高点 1917 17.8% 等。

## 每语 brief

### en
- 检索词：inflation calculator；what is $100 in 2000 worth today；value of a dollar over time；how to calculate inflation between two years；salary inflation calculator；purchasing power calculator
- 语气：口语
- Title：Inflation Calculator — See What Money From a Past Year Is Worth Today, with Official US CPI Data
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：通胀计算器；过去的钱相当于现在多少钱；通货膨胀率怎么算；购买力计算；工资跑赢通胀了吗；美元购买力
- 语气：口语
- Title：通胀计算器 — 用美国官方 CPI 算出过去的钱相当于今天多少钱，附计算过程
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de inflación；cuánto valen hoy 100 dólares de 2000；cómo calcular la inflación entre dos años；poder adquisitivo；¿mi sueldo subió más que la inflación?
- 语气：口语（tú）
- Title：Calculadora de inflación — cuánto vale hoy el dinero de un año pasado, con datos oficiales del IPC de EE. UU.
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة التضخم；كم تساوي 100 دولار من عام 2000 اليوم；طريقة حساب معدل التضخم；القوة الشرائية للدولار
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة التضخم — اعرف كم تساوي اليوم قيمة المال من سنة سابقة ببيانات مؤشر أسعار المستهلك الأمريكي الرسمية
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de inflação；quanto vale hoje 100 dólares de 2000；como calcular a inflação entre dois anos；poder de compra；meu salário acompanhou a inflação
- 语气：口语（pt-BR）
- Title：Calculadora de inflação — descubra quanto vale hoje o dinheiro de um ano passado, com dados oficiais do CPI dos EUA
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator inflasi；nilai uang dulu dan sekarang；cara menghitung inflasi antara dua tahun；daya beli；gaji naik vs inflasi
- 语气：口语（Anda）
- Title：Kalkulator Inflasi — Hitung Nilai Uang dari Tahun Lalu Jika Dibandingkan Hari Ini, dengan Data CPI Resmi AS
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur d'inflation；combien valent aujourd'hui 100 dollars de 2000；calculer l'inflation entre deux années；pouvoir d'achat；mon salaire a-t-il suivi l'inflation
- 语气：vouvoiement
- Title：Calculateur d'inflation — ce que vaut aujourd'hui l'argent d'une année passée, avec l'IPC officiel américain
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：インフレ 計算；昔のお金 今の価値；物価上昇率 計算方法；購買力 計算；実質賃金 計算
- 语气：です・ます
- Title：インフレ計算ツール — 昔のお金が今いくらに相当するかを米国の公式CPIで計算（将来の物価も試算）
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор инфляции；сколько стоят 100 долларов 2000 года сегодня；как рассчитать инфляцию за период；покупательная способность доллара；реальная зарплата с учётом инфляции
- 语气：нейтральный
- Title：Калькулятор инфляции — сколько сегодня стоят деньги прошлых лет по официальному индексу потребительских цен США
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Inflationsrechner；was sind 100 Dollar von 2000 heute wert；Inflation berechnen zwischen zwei Jahren；Kaufkraft berechnen；Reallohn berechnen
- 语气：Sie-Form
- Title：Inflationsrechner — was Geld aus einem früheren Jahr heute wert ist, mit offiziellen US-Verbraucherpreisdaten
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「Future Purchasing Power」改为历年换算主意图 + 官方 US CPI；02 新增同意图相关搜索全表（历年换算 / 两年间通胀率 / 工资跑赢通胀 / 未来价格 / 购买力 / 70 法则 / 名义实际 / 历史高通胀吸；月度 CPI、他国 CPI 表不吸）与意图审查（不满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 inflation calculator + worth today + official US CPI data；desc 写 calculate、1913 起、两种模式、formula、累计 / 年均、购买力、pay rise、examples；$100 in 2000 → FAQ q1；two years → FAQ q2；salary → FAQ q3；BLS → FAQ q4；double → FAQ q5；real → FAQ q6；highest → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（通胀、インフレ、inflación、inflação、inflation、Inflation、инфляция、inflasi、التضخم）；非美国语种说明本国指数套用方法与统计机构；小数逗号语种金额本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-inflation；title 定为「Inflation Calculator — Future Purchasing Power」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（只有固定通胀率推算、FAQ 一词答），已重写 |
