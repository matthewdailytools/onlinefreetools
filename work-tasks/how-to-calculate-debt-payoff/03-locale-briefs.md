# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-debt-payoff`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把余额/利率/月供串进 H1）；zh 副标题不用「与/和」连两段
- [x] 禁「Educational only」「Will it finish?」空话；disclaimer 写清不构成财务建议
- [x] 示例数字固定：5000 / 12% / 200 → 29 个月、利息 782.45、末期 182.45；+50 → 23 个月、606.76、省 6 个月 175.69；24 个月 → 235.37；24% 时首月利息 100；0% → 25 个月
- [x] 小数逗号语种：782,45 / 606,76 / 175,69 / 235,37 / 182,45；千分位按当地习惯
- [x] 货币不写死（不加 $ / ¥），只写数字
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构

## 每语 brief

### en
- Title：Debt Payoff Calculator — How Long to Pay Off and Total Interest
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：还款计算器；信用卡还款计算器；多久能还清；提前还款省多少利息
- Title：债务还清计算器 — 几个月还清、要付多少利息
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora para pagar deudas；cuánto tiempo tardaré en pagar mi deuda；pago extra
- Title：Calculadora de pago de deudas — cuánto tardas en saldarla y cuántos intereses pagas
- 按钮：Calcular / Cargar ejemplo / Borrar
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة سداد الديون؛ كم شهرًا لسداد الدين؛ سداد بطاقة الائتمان
- Title：حاسبة سداد الديون — كم شهرًا تحتاج وكم تدفع من الفوائد
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de quitação de dívidas；quanto tempo para quitar dívida；pagamento extra
- Title：Calculadora para quitar dívidas — em quanto tempo e quanto de juros
- 按钮：Calcular / Carregar exemplo / Limpar
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator pelunasan utang；berapa lama melunasi utang；cicilan kartu kredit
- Title：Kalkulator Pelunasan Utang — Berapa Bulan Lunas dan Total Bunga
- 按钮：Hitung / Muat contoh / Hapus
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul remboursement dette；combien de temps pour rembourser；remboursement anticipé
- Title：Calcul de remboursement de dette — durée et intérêts totaux
- 按钮：Calculer / Charger un exemple / Effacer
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：借金返済シミュレーション；返済期間 計算；繰り上げ返済 利息
- Title：借金返済シミュレーション — 何か月で完済できるか・利息総額を計算
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор погашения долга；за сколько месяцев погашу кредит；досрочное погашение
- Title：Калькулятор погашения долга — срок выплаты и сумма процентов
- 按钮：Рассчитать / Загрузить пример / Очистить
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Schulden-Tilgungsrechner；wie lange bis schuldenfrei；Sondertilgung Zinsen sparen
- Title：Schuldentilgungsrechner — wie lange bis schuldenfrei und wie viel Zinsen
- 按钮：Berechnen / Beispiel laden / Leeren
- 小数逗号：是
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-13 | 保留 slug；H1 改为「多久还清 + 总利息」；同意图：额外还款、目标月数、月供不足吸；多债务计划不吸 | 已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-13 | 双向模式；额外还款节省；纠正示例 30→29 个月；FAQ 含雪崩/雪球、0%、与 EMI 划界 | 主词在 H1 |
| 2b 十语检索向重写（改写） | 2026-10-13 | en/zh/es/ja/ar/pt/id/fr/ru/de 按当地还款说法独立重写；小数逗号语种示例用当地小数点 | 键集与 en 一致 |
