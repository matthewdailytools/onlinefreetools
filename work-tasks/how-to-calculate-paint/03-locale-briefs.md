# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-paint`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非「面积、涂层、覆盖率」参数枚举目录腔
- [x] 隐私句说清浏览器内计算、不上服务器
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**

额外禁用：勿堆品牌/色号进 H1；勿写 doorway/薄页元叙述；3.78 L 罐须标明为假设体积。

## 每语 brief

### en
- 检索词：paint calculator；estimate paint needed；how much paint；paint coverage
- 语气：口语工具站
- Title / H1：Paint Calculator — How to Estimate Paint Needed
- 按钮：Calculate / Load sample / Clear；Area / Length × height × walls
- 本地示例：40 m²，2 coats，10 m²/L → 8 L
- 可保留：m²、L、3.78 L
- SERP：Paint Calculator；How much paint do I need
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：油漆计算器；用漆量；怎么算油漆；刷墙涂料用量
- 语气：口语工具站
- Title / H1：油漆计算器 — 如何估算用漆量
- 按钮：计算 / 加载样例 / 清空；面积 / 长×高×面数
- 本地示例：40 m²，2 遍，10 m²/L → 8 L
- 可保留：m²、L
- SERP：油漆计算器；涂料用量计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de pintura；cuánta pintura；estimar pintura
- 语气：口语工具站
- Title / H1：Calculadora de pintura — Estimar la pintura necesaria
- 按钮：Calcular / Cargar ejemplo / Limpiar
- 可保留：m²、L
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الطلاء؛ كمية الطلاء؛ تقدير الطلاء
- 语气：口语工具站
- Title / H1：حاسبة الطلاء — تقدير كمية الطلاء المطلوبة
- 按钮：احسب / مثال / مسح
- 可保留：m²، L
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de tinta；quanto de tinta；estimar tinta
- 语气：口语工具站
- Title / H1：Calculadora de tinta — Como estimar a tinta necessária
- 按钮：Calcular / Carregar exemplo / Limpar
- 可保留：m²、L
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator cat；berapa cat；estimasi cat
- 语气：口语工具站
- Title / H1：Kalkulator cat — Cara mengestimasi kebutuhan cat
- 按钮：Hitung / Muat contoh / Hapus
- 可保留：m²、L
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur peinture；quantité de peinture；estimer peinture
- 语气：口语工具站
- Title / H1：Calculateur de peinture — Estimer la quantité nécessaire
- 按钮：Calculer / Exemple / Effacer
- 可保留：m²、L
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：ペンキ 計算；塗料 必要量；壁 塗装 リットル
- 语气：口语工具站
- Title / H1：ペンキ・塗料の計算ツール — 必要量の見積もり
- 按钮：計算する / サンプル / クリア
- 可保留：m²、L
- SERP：塗料 必要量；ペンキ 計算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор краски；сколько краски；расчёт краски
- 语气：口语工具站
- Title / H1：Калькулятор краски — оценка необходимого объёма
- 按钮：Рассчитать / Пример / Очистить
- 可保留：m²、L
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Farbrechner；Farbmenge；Farbe berechnen
- 语气：口语工具站
- Title / H1：Farbrechner — Farbbedarf schätzen
- 按钮：Berechnen / Beispiel / Löschen
- 可保留：m²、L
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-paint；title 定为 Paint Calculator — How to Estimate Paint Needed；主词 Paint/Estimate 进 H1；次词 coverage/coats 落 desc 与 FAQ；禁参数枚举副标题；related 选 tile+concrete；样例锚定 40 m² / 2 coats / 10 → 8 L | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 40 m² / 2 coats / 10 m²/L → 8 L；FAQ≥3；NIST 引用；面积与 L×H×walls 同页；可选 3.78 L 罐 | 母版可合并；进页 loadSample 出 8 L |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Paint Calculator 与 Estimate Paint Needed；desc 含 8 L 与 coverage/coats；非参数枚举 H1；主词落 H1，次词 coverage 落 desc 与 FAQ | 主词在 H1；次词 paint needed 落 title 与 Example |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ；禁止英模回落；zh title「油漆计算器 — 如何估算用漆量」；各语 FAQ 题序不完全同构 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含油漆/用漆量；es 含 pintura；ja 含ペンキ/塗料；再核 desc 含 8 L 样例 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 3.78 L 假设可见性；coverage:gate all + build:site + lint:seo | 上线验收 |
