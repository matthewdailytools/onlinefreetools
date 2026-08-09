# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-tile`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非「面积、长宽、损耗%」参数枚举目录腔
- [x] 隐私句说清浏览器内计算、不上服务器
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**

额外禁用：勿把 L×W / waste% / cm 堆进 H1；勿假装品牌铺贴规格；勿写 doorway/薄页元叙述。

## 每语 brief

### en
- 检索词：tile calculator；tile quantity；how many tiles；estimate tiles
- 语气：口语工具站
- Title / H1：Tile Calculator — How to Estimate Tile Quantity
- 按钮：Calculate / Load sample / Clear；Area / Length × width
- 本地示例：12 m²，30×30 cm，10% → 147 tiles
- 可保留：m²、cm、%
- SERP：Tile Calculator；How many tiles do I need
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：瓷砖计算器；瓷砖用量；怎么算瓷砖；铺砖片数
- 语气：口语工具站
- Title / H1：瓷砖计算器 — 如何估算瓷砖用量
- 按钮：计算 / 加载样例 / 清空；面积 / 长×宽
- 本地示例：12 m²，30×30 cm，损耗 10% → 147 片
- 可保留：m²、cm
- SERP：瓷砖计算器；瓷砖用量计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de azulejos；cantidad de baldosas；calcular azulejos
- 语气：口语工具站
- Title / H1：Calculadora de azulejos — Estimar la cantidad de baldosas
- 按钮：Calcular / Cargar ejemplo / Limpiar
- 可保留：m²、cm
- SERP：Calculadora de azulejos；cuántas baldosas
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة البلاط؛ كمية البلاط؛ حساب عدد البلاط
- 语气：口语工具站
- Title / H1：حاسبة البلاط — تقدير كمية البلاط
- 按钮：احسب / مثال / مسح
- 可保留：m²
- SERP：حاسبة البلاط
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de azulejos；quantidade de piso；calcular azulejos
- 语气：口语工具站
- Title / H1：Calculadora de azulejos — Como estimar a quantidade
- 按钮：Calcular / Carregar exemplo / Limpar
- 可保留：m²
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator keramik；jumlah ubin；hitung keramik
- 语气：口语工具站
- Title / H1：Kalkulator keramik — Cara mengestimasi jumlah ubin
- 按钮：Hitung / Muat contoh / Hapus
- 可保留：m²
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur carrelage；quantité de carreaux；calculer carrelage
- 语气：口语工具站
- Title / H1：Calculateur de carrelage — Estimer la quantité de carreaux
- 按钮：Calculer / Exemple / Effacer
- 可保留：m²
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：タイル計算；タイル枚数；床タイル 必要枚数
- 语气：口语工具站
- Title / H1：タイル枚数の計算ツール — 必要量を見積もる
- 按钮：計算する / サンプル / クリア
- 可保留：m²、cm
- SERP：タイル枚数計算；床タイル 計算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор плитки；количество плитки；расчёт плитки
- 语气：口语工具站
- Title / H1：Калькулятор плитки — оценка количества плитки
- 按钮：Рассчитать / Пример / Очистить
- 可保留：m²
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Fliesenrechner；Fliesenmenge；Fliesen berechnen
- 语气：口语工具站
- Title / H1：Fliesenrechner — Fliesenmenge schätzen
- 按钮：Berechnen / Beispiel / Löschen
- 可保留：m²
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-tile；title 定为 Tile Calculator — How to Estimate Tile Quantity；主词 Tile/Quantity 进 H1；次词 waste/area 落 desc 与 FAQ；禁把面积长宽损耗枚举进副标题；related 选 concrete+square-feet；样例锚定 12 m² / 30×30 / 10% → 147 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 12 m² / 30×30 cm / 10% → 147；FAQ≥3；NIST+TCNA 引用；面积与 L×W 同页切换 | 母版可合并；进页 loadSample 出 147 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Tile Calculator 与 Estimate Tile Quantity；desc 含 147 tiles 与 waste/area；非参数枚举 H1；主词落 H1，次词 waste/floor 落 desc 与 Use cases | 主词在 H1；次词 tile quantity 落 title 与 Example |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ；禁止英模回落；zh title「瓷砖计算器 — 如何估算瓷砖用量」；zh/ja desc ≥120 字 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含瓷砖/用量；es 含 azulejos/baldosas；ja 含タイル枚数；再核 desc 含 147 样例 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与损耗默认可见性；coverage:gate all + build:site + lint:seo | 上线验收 |
