# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-profit-margin`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不在 H1 罗列毛利 / 营业 / 净利三种利润率）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] YMYL：disclaimer 保留「非会计 / 税务 / 财务 / 投资建议、结果取决于成本归类、各国会计准则与税制不同、重要决定请咨询会计师」
- [x] 不捏造行业平均利润率数字（FAQ q5 只写「食品零售常为个位数低段、软件等可达 20% 以上，按同行比较」）
- [x] 当地术语：zh 毛利率、营业利润率、净利率、销售成本（销货成本）、营业费用（期间费用）、加价率（成本加成率）；ja 売上総利益率（粗利率）、営業利益率、純利益率、売上原価、販管費、マークアップ率（原価基準；値入率は小売では売価基準＝利益率の意味で使われることが多いため、加价率の訳には用いない）；es margen bruto / operativo / neto, coste de ventas (es-ES) / costo de ventas, gastos operativos, markup / margen sobre coste；pt margem bruta / operacional / líquida, CMV / custo das mercadorias vendidas, despesas operacionais, markup；fr marge brute, marge opérationnelle, marge nette, coût des marchandises vendues, charges d'exploitation, taux de marque vs taux de marge（法国说法：taux de marge = 利润 ÷ 成本，taux de marque = 利润 ÷ 售价，须在 FAQ 中说明）；de Bruttomarge / Rohertragsmarge, operative Marge (EBIT-Marge), Nettomarge / Umsatzrendite, Wareneinsatz, Betriebskosten, Aufschlag (Kalkulationsaufschlag) vs Handelsspanne；ru валовая маржа / рентабельность, операционная маржа, чистая рентабельность продаж, себестоимость продаж, операционные расходы, наценка；id margin laba kotor / operasional / bersih, harga pokok penjualan (HPP), beban operasional, markup；ar هامش الربح الإجمالي / التشغيلي / الصافي، تكلفة البضاعة المباعة، المصروفات التشغيلية، نسبة الزيادة على التكلفة（markup）
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：11,20 %、53,33、250.000（千分位按当地）；页面容错千分位与小数逗号
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：250,000 销售额 → 毛利率 40%、营业利润率 16%、净利率 11.20%、加价率 66.67%；亏损店 −3.75%；成本 40、目标 25% → 53.33，误用 50 → 20%；25% 利润率 = 33.33% 加价率；EBITDA 19.2%。

## 每语 brief

### en
- 检索词：profit margin calculator；how to calculate profit margin；net profit margin formula；gross vs operating vs net margin；margin vs markup；price for target margin
- 语气：口语
- Title：Profit Margin Calculator — See How Much of Every Sale You Keep as Profit, or Price for a Target Margin
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：利润率计算器；利润率怎么算；净利率计算公式；毛利率和净利率的区别；利润率和加价率区别；按利润率定价
- 语气：口语
- Title：利润率计算器 — 看清每笔销售里留下多少利润，并按目标利润率算出售价
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de margen de beneficio；cómo calcular el margen de beneficio；margen neto fórmula；diferencia entre margen y markup；precio de venta con margen
- 语气：口语（tú）
- Title：Calculadora de margen de beneficio — cuánto te queda de cada venta y qué precio poner para el margen que buscas
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة هامش الربح；طريقة حساب هامش الربح；هامش الربح الصافي；الفرق بين هامش الربح ونسبة الربح على التكلفة；تسعير المنتج بهامش ربح
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة هامش الربح — اعرف كم يبقى لك ربحًا من كل عملية بيع وما السعر المطلوب لتحقيق الهامش الذي تريده
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de margem de lucro；como calcular margem de lucro；margem líquida fórmula；diferença entre margem e markup；como precificar com margem
- 语气：口语（pt-BR）
- Title：Calculadora de margem de lucro — veja quanto sobra de cada venda e qual preço cobrar para a margem desejada
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator margin keuntungan；cara menghitung margin keuntungan；rumus margin laba bersih；perbedaan margin dan markup；cara menentukan harga jual dengan margin
- 语气：口语（Anda）
- Title：Kalkulator Margin Keuntungan — Lihat Berapa Laba dari Setiap Penjualan dan Harga Jual untuk Margin Target
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul marge bénéficiaire；comment calculer une marge；taux de marge et taux de marque；marge nette formule；calculer un prix de vente avec une marge
- 语气：vouvoiement
- Title：Calcul de marge bénéficiaire — ce qu'il vous reste sur chaque vente et le prix de vente pour la marge visée
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：利益率 計算；利益率 計算方法；粗利率 営業利益率 違い；利益率 マークアップ率 違い；利益率から販売価格 計算
- 语气：です・ます
- Title：利益率計算ツール — 売上のうちどれだけが利益として残るかを計算し、目標利益率から販売価格も求める
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор рентабельности продаж；как рассчитать маржу；чистая рентабельность формула；разница между маржой и наценкой；как рассчитать цену с нужной маржой
- 语气：нейтральный
- Title：Калькулятор рентабельности продаж — сколько прибыли остаётся с каждой продажи и какую цену ставить под нужную маржу
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Gewinnmarge berechnen；Umsatzrendite berechnen；Bruttomarge Nettomarge Unterschied；Marge und Aufschlag Unterschied；Verkaufspreis aus Marge berechnen
- 语气：Sie-Form
- Title：Gewinnmarge berechnen — wie viel von jedem Umsatz als Gewinn bleibt und welcher Preis die Zielmarge bringt
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「Net or Operating Margin」改为结果向 + 目标利润率定价（三级利润率罗列被标题检查判为参数枚举，移入 desc）；02 新增与毛利率 / 加价率 / 边际贡献 / 保本点工具的分工、同意图相关搜索全表（三级利润率 / margin vs markup / 定价 / 好的利润率 / 负利润率 / EBITDA 吸；单独毛利率、加价率计算器、行业平均数据不吸主位）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 profit margin calculator + every sale + price for a target margin；desc 写 calculate、gross / operating / net、formula、working、breakdown、target margin、examples；how to calculate → FAQ q1；三级区别 → FAQ q2；markup → FAQ q3；定价 → FAQ q4；good margin → FAQ q5；negative → FAQ q6；EBITDA → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（利润率、利益率、margen de beneficio、margem de lucro、marge bénéficiaire、Gewinnmarge、рентабельность продаж、margin keuntungan、هامش الربح）；fr 说明 taux de marge / taux de marque，de 说明 Aufschlag / Handelsspanne；小数逗号语种金额本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-profit-margin；title 定为「Profit Margin Calculator — Net or Operating Margin」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（单一比率、FAQ 一句答），已重写 |
