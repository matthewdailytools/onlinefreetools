# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-concrete`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非「长、宽、厚、袋容积」参数枚举目录腔
- [x] 隐私句说清浏览器内计算、不上服务器
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**

额外禁用：勿把 L×W×T / bag size 堆进 H1；勿假装品牌袋规格；勿写 doorway/薄页元叙述。

## 每语 brief

### en
- 检索词：concrete calculator；concrete volume；how to calculate concrete；slab concrete
- 语气：口语工具站
- Title / H1：Concrete Calculator — How to Estimate Concrete Volume
- 按钮：Calculate / Load sample / Clear；形状 Slab / Column / Cylinder
- 本地示例：5 m × 4 m × 0.1 m → 2.0 m³
- 可保留：m³、ft³、π
- SERP：Concrete Calculator；Concrete Volume Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：混凝土计算器；混凝土方量；怎么算混凝土；板厚方量
- 语气：口语工具站
- Title / H1：混凝土计算器 — 如何估算混凝土方量
- 按钮：计算 / 加载样例 / 清空；板 / 柱 / 圆柱
- 本地示例：5 m × 4 m × 0.1 m → 2.0 m³
- 可保留：m³、ft³
- SERP：混凝土计算器；混凝土用量计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de concreto；volumen de hormigón；calcular concreto
- 语气：口语工具站
- Title / H1：Calculadora de concreto — Estimar el volumen de hormigón
- 按钮：Calcular / Cargar ejemplo / Limpiar；Losa / Columna / Cilindro
- 可保留：m³、ft³
- SERP：Calculadora de concreto；volumen de hormigón
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الخرسانة؛ حجم الخرسانة؛ حساب كمية الخرسانة
- 语气：口语工具站
- Title / H1：حاسبة الخرسانة — تقدير حجم الخرسانة
- 按钮：احسب / مثال / مسح
- 可保留：m³
- SERP：حاسبة الخرسانة
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de concreto；volume de concreto；calcular concreto
- 语气：口语工具站
- Title / H1：Calculadora de concreto — Como estimar o volume
- 按钮：Calcular / Carregar exemplo / Limpar
- 可保留：m³
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator beton；volume beton；hitung beton
- 语气：口语工具站
- Title / H1：Kalkulator beton — Cara mengestimasi volume beton
- 按钮：Hitung / Muat contoh / Hapus
- 可保留：m³
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur béton；volume de béton；calculer béton
- 语气：口语工具站
- Title / H1：Calculateur de béton — Estimer le volume de béton
- 按钮：Calculer / Exemple / Effacer
- 可保留：m³
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：コンクリート計算；コンクリート体積；生コン 立方メートル
- 语气：口语工具站
- Title / H1：コンクリート体積の計算ツール — 必要量を見積もる
- 按钮：計算する / サンプル / クリア
- 可保留：m³
- SERP：コンクリート計算量；体積計算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор бетона；объём бетона；расчёт бетона
- 语气：口语工具站
- Title / H1：Калькулятор бетона — оценка объёма бетона
- 按钮：Рассчитать / Пример / Очистить
- 可保留：m³
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Beton Rechner；Betonvolumen；Beton berechnen
- 语气：口语工具站
- Title / H1：Betonrechner — Betonvolumen schätzen
- 按钮：Berechnen / Beispiel / Löschen
- 可保留：m³
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-concrete；title 定为 Concrete Calculator — How to Estimate Concrete Volume；主词 Concrete/Volume 进 H1；次词 slab/bags 落 desc 与 FAQ；禁把长宽厚袋容积枚举进副标题；related 选 unit-converter+square-feet | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例板 5×4×0.1 m → 2.0 m³；袋容积假设 0.015 m³/0.45 ft³；FAQ≥3；NIST+PCA 引用；形状 slab/column/cylinder 同页 | 母版可合并；进页 loadSample 出 2.0 m³ |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Concrete Calculator 与 Estimate Concrete Volume；desc 含 2.0 m³ 与 slab/bags；非参数枚举 H1；主词落 H1，次词 bags/slab 落 desc 与 FAQ | 主词在 H1；次词 concrete volume 落 title 与 Example |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ；禁止英模回落；zh title「混凝土计算器 — 如何估算混凝土方量」；zh/ja desc ≥120 字 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含混凝土/方量；es 含 concreto/hormigón；ja 含コンクリート体積；再核 desc 含 2.0 m³ 样例 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与袋假设可见性；coverage:gate all + build:site + lint:seo | 上线验收 |
