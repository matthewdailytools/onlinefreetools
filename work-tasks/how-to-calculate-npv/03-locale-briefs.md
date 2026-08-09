# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-npv`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语非投资建议

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：guaranteed return / 稳赚 / 荐股口吻；勿把折现率、初始投资、现金流罗列进 H1。

## 每语 brief

### en
- 检索词：NPV calculator；how to calculate NPV；net present value
- 语气：口语工具站
- Title：NPV Calculator — How to Calculate Net Present Value
- 按钮：Calculate / Load sample / Clear
- 可保留：NPV、%
- SERP：NPV Calculator；Net Present Value Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：NPV 计算器；净现值；如何计算净现值
- 语气：口语工具站
- Title：NPV 计算器 — 如何计算净现值
- 按钮：计算 / 加载样例 / 清空
- 可保留：NPV
- SERP：净现值计算器；NPV 计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora VAN；valor actual neto；calcular NPV
- 语气：口语工具站
- Title：Calculadora VAN (NPV) — Valor actual neto
- 按钮：Calcular / Cargar ejemplo / Limpiar
- 可保留：NPV、VAN
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة NPV؛ صافي القيمة الحالية
- 语气：口语工具站
- Title：حاسبة NPV — صافي القيمة الحالية
- 按钮：احسب / مثال / مسح
- 可保留：NPV
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：calculadora VPL；valor presente líquido；NPV
- 语气：口语工具站
- Title：Calculadora VPL (NPV) — Valor presente líquido
- 按钮：Calcular / Carregar exemplo / Limpar
- 可保留：NPV、VPL
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：kalkulator NPV；nilai sekarang bersih
- 语气：口语工具站
- Title：Kalkulator NPV — Nilai sekarang bersih
- 按钮：Hitung / Muat contoh / Hapus
- 可保留：NPV
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：calculateur VAN；valeur actuelle nette；NPV
- 语气：口语工具站
- Title：Calculateur VAN (NPV) — Valeur actuelle nette
- 按钮：Calculer / Exemple / Effacer
- 可保留：NPV、VAN
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：NPV 計算；正味現在価値；ネット・プレゼント・バリュー
- 语气：口语工具站
- Title：NPV（正味現在価値）の計算ツール — ネット現在価値を求める
- 按钮：計算する / サンプル / クリア
- 可保留：NPV
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор NPV；чистая приведённая стоимость
- 语气：口语工具站
- Title：Калькулятор NPV — чистая приведённая стоимость
- 按钮：Рассчитать / Пример / Очистить
- 可保留：NPV
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：NPV Rechner；Kapitalwert；Nettobarwert
- 语气：口语工具站
- Title：NPV-Rechner — Nettobarwert (Kapitalwert) berechnen
- 按钮：Berechnen / Beispiel / Löschen
- 可保留：NPV
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-npv；title 定为 NPV Calculator — How to Calculate Net Present Value；主词 NPV/Net Present Value 进 H1；次词 discount rate/cash flows 落 desc 与 Formula；禁把折现率、初始投资、现金流枚举进副标题；related 选 CAGR+ROI | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 I0=10000、r=10%、CF 3000/4200/6800 → NPV ≈ 1307.29；FAQ≥3；YMYL disclaimer；Investopedia NPV 引用 | 母版可合并；进页 loadSample 出净现值 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 NPV Calculator 与 How to Calculate Net Present Value；desc 含 1,307.29 与 cash flows 示例；非参数枚举 H1；主词落 H1，次词 discount rate/cash flows 落 desc 与 Formula | 主词在 H1；次词 net present value 落 title 与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ/免责；禁止英模回落；zh title「NPV 计算器 — 如何计算净现值」；zh/ja desc ≥120 字 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含净现值；es 含 VAN/NPV；ja 含正味現在価値；再核 desc 含 1307.29 样例 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL；coverage:gate all + build:site | 上线验收 |
