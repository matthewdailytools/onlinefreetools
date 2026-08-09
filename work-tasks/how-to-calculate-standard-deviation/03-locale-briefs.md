# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-standard-deviation`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算（数字留在设备）
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：把 n−1 / textarea 堆进 H1；声称医疗/投资用途。

## 每语 brief

### en
- 检索词：standard deviation calculator；how to calculate standard deviation；variance calculator；sample vs population SD
- Title：Standard Deviation Calculator — How to Calculate SD and Variance
- 按钮：Calculate / Load sample / Clear；Sample / Population
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：标准差计算器；如何计算标准差；方差；样本标准差 总体标准差
- Title：标准差计算器 — 如何计算标准差与方差
- 按钮：计算 / 加载示例 / 清空；样本 / 总体
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora desviación estándar；cómo calcular desviación típica；varianza
- Title：Calculadora de desviación estándar — SD y varianza
- 按钮：Calcular / Ejemplo / Limpiar；Muestra / Población
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الانحراف المعياري؛ حساب التباين؛ عينة مقابل مجتمع
- Title：حاسبة الانحراف المعياري — الانحراف والتباين
- 按钮：احسب / مثال / مسح؛ عينة / مجتمع
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：calculadora desvio padrão；como calcular desvio padrão；variância
- Title：Calculadora de desvio padrão — DP e variância
- 按钮：Calcular / Exemplo / Limpar；Amostra / População
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：kalkulator simpangan baku；cara menghitung standar deviasi；varian
- Title：Kalkulator simpangan baku — SD dan varians
- 按钮：Hitung / Contoh / Hapus；Sampel / Populasi
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：calculateur écart-type；calculer écart type；variance
- Title：Calculateur d’écart-type — Écart-type et variance
- 按钮：Calculer / Exemple / Effacer；Échantillon / Population
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：標準偏差 計算；分散 求め方；標本 母集団
- Title：標準偏差の計算ツール — 標準偏差と分散を求める
- 按钮：計算 / サンプル / クリア；標本 / 母集団
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор стандартного отклонения；дисперсия；выборка генеральная совокупность
- Title：Калькулятор стандартного отклонения — СКО и дисперсия
- 按钮：Рассчитать / Пример / Очистить；Выборка / Генеральная
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：Standardabweichung Rechner；Varianz berechnen；Stichprobe Grundgesamtheit
- Title：Standardabweichungs-Rechner — SD und Varianz berechnen
- 按钮：Berechnen / Beispiel / Löschen；Stichprobe / Population
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-standard-deviation；title 定为 Standard Deviation Calculator — How to Calculate SD and Variance；次词 variance/样本总体落 desc·FAQ；禁控件名进 H1 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；经典例进页 population → SD=2、variance=4 | 母版可合并；进页 loadSample |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Standard Deviation Calculator 与 How to Calculate SD and Variance；desc 含经典例与 sample/population；非参数枚举 H1 | 主词在 H1；次词 variance 落 title 与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ；禁止英模回落；zh/ja desc≥120 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含标准差计算器；es 含 desviación estándar；ja 含標準偏差；再核 desc 经典例数字 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与隐私句；coverage:gate all + build:site + lint:seo | 上线验收 |
