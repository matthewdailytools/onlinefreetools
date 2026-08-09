# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-aspect-ratio`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非空壳英借
- [x] title/H1 非「宽、高、预设」参数枚举目录腔
- [x] 隐私句说清浏览器内计算、不上服务器
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **检索覆盖已优化**

额外禁用：勿把 16:9/4:3/1:1 拆成独立 URL 或堆进 H1 目录；勿写 doorway/薄页元叙述；勿假装像素长宽比品牌标准。

## 每语 brief

### en
- 检索词：aspect ratio calculator；calculate aspect ratio；scale aspect ratio；16:9 ratio
- 语气：口语工具站
- Title / H1：Aspect Ratio Calculator — How to Calculate and Scale Ratios
- 按钮：Calculate / Load sample / Clear
- 本地示例：1920×1080 → 16:9；scale width 1280 → height 720
- 可保留：16:9、4:3、1:1、px
- SERP：Aspect Ratio Calculator；How to calculate aspect ratio
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：宽高比计算器；如何计算宽高比；比例缩放；16:9 比例
- 语气：口语工具站
- Title / H1：宽高比计算器 — 如何计算与缩放比例
- 按钮：计算 / 加载样例 / 清空
- 本地示例：1920×1080 → 16:9；目标宽 1280 → 高 720
- 可保留：16:9、px
- SERP：宽高比计算器；屏幕比例计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de relación de aspecto；calcular aspect ratio；escalar proporción
- 语气：口语工具站
- Title / H1：Calculadora de relación de aspecto — Calcular y escalar proporciones
- 按钮：Calcular / Cargar ejemplo / Limpiar
- 可保留：16:9、px
- SERP：Calculadora de relación de aspecto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة نسبة العرض إلى الارتفاع؛ حساب نسبة الشاشة؛ تحجيم النسبة
- 语气：口语工具站
- Title / H1：حاسبة نسبة العرض إلى الارتفاع — حساب وتحجيم النسب
- 按钮：احسب / مثال / مسح
- 可保留：16:9
- SERP：حاسبة نسبة العرض
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de proporção；relação de aspecto；escalar resolução
- 语气：口语工具站
- Title / H1：Calculadora de proporção — Como calcular e escalar razões
- 按钮：Calcular / Carregar exemplo / Limpar
- 可保留：16:9
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator rasio aspek；hitung rasio aspek；skala rasio
- 语气：口语工具站
- Title / H1：Kalkulator rasio aspek — Cara menghitung dan menskalakan rasio
- 按钮：Hitung / Muat contoh / Hapus
- 可保留：16:9
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur format d’image；ratio d’aspect；mettre à l’échelle
- 语气：口语工具站
- Title / H1：Calculateur de ratio d’aspect — Calculer et mettre à l’échelle
- 按钮：Calculer / Exemple / Effacer
- 可保留：16:9
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：アスペクト比 計算；画面比率；解像度 スケール
- 语气：口语工具站
- Title / H1：アスペクト比の計算ツール — 比率の求め方と拡大縮小
- 按钮：計算する / サンプル / クリア
- 可保留：16:9、px
- SERP：アスペクト比 計算；画面比率
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор соотношения сторон；расчёт aspect ratio；масштабирование разрешения
- 语气：口语工具站
- Title / H1：Калькулятор соотношения сторон — расчёт и масштабирование
- 按钮：Рассчитать / Пример / Очистить
- 可保留：16:9
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Seitenverhältnis Rechner；Aspect Ratio berechnen；Auflösung skalieren
- 语气：口语工具站
- Title / H1：Seitenverhältnis-Rechner — Verhältnis berechnen und skalieren
- 按钮：Berechnen / Beispiel / Löschen
- 可保留：16:9
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-aspect-ratio；title 定为 Aspect Ratio Calculator — How to Calculate and Scale Ratios；主词 Aspect Ratio/Scale 进 H1；次词 16:9/scale 落 desc 与 FAQ；禁拆预设独立 URL；related 选 unit-converter+square-feet；样例锚定 1920×1080→16:9 与 1280→720 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例 1920×1080→16:9 与目标宽 1280→高 720；FAQ≥3；NIST 引用；预设仅下拉选项 | 母版可合并；进页 loadSample 出 16:9 与 720 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Aspect Ratio Calculator 与 Scale Ratios；desc 含 16:9、1280→720 与 presets；非参数枚举 H1；主词落 H1，次词 scale/16:9 落 desc 与 FAQ | 主词在 H1；次词 scale 落 title 与 Example |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ；禁止英模回落；zh title「宽高比计算器 — 如何计算与缩放比例」；各语 FAQ 题序不完全同构 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含宽高比/缩放；es 含 relación de aspecto；ja 含アスペクト比；再核 desc 含 16:9 与 720 样例 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与预设非独立 URL；coverage:gate all + build:site + lint:seo | 上线验收 |
