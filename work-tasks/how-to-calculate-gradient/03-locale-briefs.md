# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-gradient`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）
**注意**：多语「gradient」易与机器学习「梯度」混淆 — title 优先当地「斜率 / slope / Steigung」检索说法

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」式空壳英借
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

可保留：slope、m、Δx、Δy；FAQ 澄清非 ML gradient。

---

## 每语 brief

### en

- 检索词（3–5）：how to calculate gradient；slope calculator；rise over run；slope between two points；calculate slope
- 语气：口语工具站（数学辅助）
- Title / H1 方向：Slope / Gradient Calculator — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：Calculate / Clear；Point 1 / Point 2
- 本地示例用词：(1,2) (4,8) → m=2；rise/run
- 可保留英文/符号：slope、m、Δx、Δy
- 额外禁用：把 ML「gradient descent」当主 title
- SERP 竞品 title（1–3）：Slope Calculator；Gradient Calculator；Rise Over Run
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：斜率计算；两点斜率；坡度计算；如何求斜率；rise over run
- 语气：口语工具站
- Title / H1 方向：斜率计算 — 两点求斜率（非机器学习梯度）
- 按钮短词：计算 / 清空；点1 / 点2
- 本地示例用词：(1,2)(4,8) → 斜率 2
- 可保留英文/符号：slope、m、Δ
- 额外禁用：主 title 写「梯度下降」；ユースケース
- SERP 竞品 title（1–3）：斜率计算器；两点斜率
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：calcular pendiente；calculadora de pendiente；pendiente entre dos puntos；rise over run
- 语气：口语数学
- Title / H1 方向：Calculadora de pendiente — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：Calcular / Borrar；Punto 1 / Punto 2
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：gradient ML como título principal
- SERP 竞品 title（1–3）：Calculadora de pendiente；Slope calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حساب الميل؛ حاسبة الميل؛ ميل خط بين نقطتين；slope
- 语气：口语数学
- Title / H1 方向：حاسبة الميل — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：احسب / امسح؛ النقطة 1 / 2
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：عنوان تعلم آلة «تدرج»
- SERP 竞品 title（1–3）：حاسبة الميل；Slope calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：calcular declive；calculadora de inclinação；declive entre dois pontos；slope
- 语气：口语数学（BR：inclinação / PT：declive — 实现时按 brief 选主市场说法，可用副标兼顾）
- Title / H1 方向：Calculadora de inclinação/declive — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：Calcular / Limpar
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：ML gradient no título
- SERP 竞品 title（1–3）：Calculadora de inclinação；Slope
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：hitung gradien garis；kalkulator kemiringan；slope dua titik；rise over run
- 语气：口语数学（gradien=斜率常见；FAQ 区分 ML）
- Title / H1 方向：Kalkulator gradien/kemiringan garis — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：Hitung / Hapus
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：judul gradient descent
- SERP 竞品 title（1–3）：Kalkulator gradien；Slope calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：calculer la pente；calculatrice de pente；pente entre deux points；coefficient directeur
- 语气：口语数学
- Title / H1 方向：Calculateur de pente — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：Calculer / Effacer；Point 1 / Point 2
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：gradient ML en titre principal
- SERP 竞品 title（1–3）：Calculer la pente；Slope calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：傾き 計算；傾き 求め方；2点 傾き；スロープ 計算
- 语气：口语数学（主用「傾き」；gradient 易混）
- Title / H1 方向：傾き（スロープ）計算 — 2点から m を求める
- 按钮短词：計算する / クリア；点1 / 点2
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：ユースケース；機械学習の勾配を主标题
- SERP 竞品 title（1–3）：傾き計算；Slope calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：вычислить уклон；калькулятор наклона；угловой коэффициент；наклон прямой по двум точкам
- 语气：口语数学
- Title / H1 方向：Калькулятор наклона прямой — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：Рассчитать / Очистить
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：ML «градиент» как главный title
- SERP 竞品 title（1–3）：Калькулятор наклона；Slope calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：Steigung berechnen；Steigungsrechner；Steigung zwischen zwei Punkten；Anstieg durch Verlauf
- 语气：口语数学
- Title / H1 方向：Steigung berechnen — m = (y₂−y₁)/(x₂−x₁)
- 按钮短词：Berechnen / Leeren；Punkt 1 / Punkt 2
- 本地示例用词：(1,2)(4,8) → m=2
- 可保留英文/符号：m、slope
- 额外禁用：ML-Gradient als Haupttitel
- SERP 竞品 title（1–3）：Steigung berechnen；Slope Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 briefs | 2026-08-06 | 十语 brief（斜率主词、避 ML 歧义）；`briefs-ready` | 待实现轮次 1–3 |
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
