# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`how-to-calculate-compound-interest`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语须有非投资建议说法（本地自然表述）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：本工具为纯计算，可写「在浏览器内计算、不上传数据」；勿虚假「100% offline」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02` 有覆盖表；步 0b）
- [x] **检索覆盖已优化**（i18n 初稿之后步 2+4；多轮记录有摘要）

可保留：compound interest（部分语检索）、公式符号 P/r/n/t、%。  
额外禁用（全语）：guarantee returns / 稳赚 / 荐股口吻 / 「最佳理财产品」承诺。

---

## 每语 brief

### en

- 检索词（3–5）：compound interest calculator；how to calculate compound interest；compound interest formula；future value compound interest；simple vs compound interest
- 语气：偏正式（财务教学，非投顾）
- Title / H1 方向：Compound Interest Calculator — How to Calculate Future Value
- 按钮短词：Calculate / Clear；labels Principal / Annual rate / Years / Compounding；mode Compound / Simple
- 本地示例用词：Principal 10,000 → 5% for 10 years, annual → about 16,288.95
- 可保留英文/符号：%、formula letters
- 额外禁用：guaranteed return；best investment
- SERP 竞品 title（1–3）：Compound Interest Calculator；Compound Interest Formula
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：复利计算器；复利公式；如何计算复利；复利终值；单利和复利区别
- 语气：口语工具站 + 免责清晰
- Title / H1 方向：复利计算器 — 如何计算复利终值与利息
- 按钮短词：开始计算 / 清空；本金 / 年利率 / 年数 / 复利频率；模式 复利 / 单利
- 本地示例用词：本金 10000，年利率 5%，年复利 10 年 → 终值约 16288.95
- 可保留英文/符号：可选保留「复利」主词；% 
- 额外禁用：稳赚、荐基口吻；参数枚举标题「本金、利率、期数、频率」
- SERP 竞品 title（1–3）：复利计算器；复利计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：interés compuesto；calculadora de interés compuesto；cómo calcular el interés compuesto；fórmula interés compuesto；interés simple vs compuesto
- 语气：偏正式教学
- Title / H1 方向：Calculadora de interés compuesto — Valor futuro paso a paso
- 按钮短词：Calcular / Borrar；Capital / Tasa anual / Años / Frecuencia；Compuesto / Simple
- 本地示例用词：Capital 10000 → 5% → 10 años
- 可保留英文/符号：%
- 额外禁用：promesas de rentabilidad
- SERP 竞品 title（1–3）：Calculadora de interés compuesto；Interés compuesto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حاسبة الفائدة المركبة；حساب الفائدة المركبة；قانون الفائدة المركبة；الفائدة البسيطة والمركبة
- 语气：偏正式 + 免责
- Title / H1 方向：حاسبة الفائدة المركبة — حساب القيمة المستقبلية
- 按钮短词：احسب / امسح；أصل المبلغ / المعدل السنوي / السنوات / التكرار
- 本地示例用词：10000 بمعدل 5% لمدة 10 سنوات
- 可保留英文/符号：%
- 额外禁用：وعد بعوائد مضمونة
- SERP 竞品 title（1–3）：حاسبة الفائدة المركبة
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：juros compostos；calculadora de juros compostos；como calcular juros compostos；fórmula juros compostos；juros simples vs compostos
- 语气：偏正式教学
- Title / H1 方向：Calculadora de juros compostos — Valor futuro
- 按钮短词：Calcular / Limpar；Principal / Taxa anual / Anos / Frequência
- 本地示例用词：Principal 10000 → 5% → 10 anos
- 可保留英文/符号：%
- 额外禁用：promessas de ganho
- SERP 竞品 title（1–3）：Calculadora de juros compostos
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：bunga majemuk；kalkulator bunga majemuk；cara menghitung bunga majemuk；rumus bunga majemuk；bunga sederhana vs majemuk
- 语气：口语工具站 + 免责
- Title / H1 方向：Kalkulator bunga majemuk — Hitung nilai masa depan
- 按钮短词：Hitung / Hapus；Pokok / Suku bunga tahunan / Tahun / Frekuensi
- 本地示例用词：Pokok 10000 → 5% → 10 tahun
- 可保留英文/符号：%
- 额外禁用：janji keuntungan
- SERP 竞品 title（1–3）：Kalkulator bunga majemuk；Bunga majemuk
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：intérêts composés；calculateur d’intérêts composés；comment calculer les intérêts composés；formule intérêts composés；intérêts simples vs composés
- 语气：偏正式教学
- Title / H1 方向：Calculateur d’intérêts composés — Valeur future
- 按钮短词：Calculer / Effacer；Capital / Taux annuel / Années / Fréquence
- 本地示例用词：Capital 10000 → 5% → 10 ans
- 可保留英文/符号：%
- 额外禁用：promesses de rendement
- SERP 竞品 title（1–3）：Calculateur intérêts composés；Intérêts composés
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：複利計算；複利計算ツール；複利の公式；単利と複利；将来価値 複利
- 语气：偏正式 + 免责
- Title / H1 方向：複利計算ツール — 将来価値の求め方
- 按钮短词：計算する / クリア；元本 / 年利率 / 年数 / 複利回数；複利 / 単利
- 本地示例用词：元本10000・年利5%・10年・年1回 → 約16288.95
- 可保留英文/符号：%
- 额外禁用：ユースケース；「必ず増える」系
- SERP 竞品 title（1–3）：複利計算；複利計算器
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：сложный процент；калькулятор сложного процента；как рассчитать сложный процент；формула сложного процента；простые и сложные проценты
- 语气：偏正式 + 免责
- Title / H1 方向：Калькулятор сложного процента — будущая стоимость
- 按钮短词：Рассчитать / Очистить；Сумма / Годовая ставка / Годы / Частота
- 本地示例用词：10000 → 5% → 10 лет
- 可保留英文/符号：%
- 额外禁用：гарантия дохода
- SERP 竞品 title（1–3）：Калькулятор сложного процента
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：Zinseszins；Zinseszinsrechner；Zinseszins berechnen；Zinseszins Formel；einfache Zinsen vs Zinseszins
- 语气：偏正式教学
- Title / H1 方向：Zinseszinsrechner — Endkapital berechnen
- 按钮短词：Berechnen / Löschen；Kapital / Jahreszins / Jahre / Häufigkeit；Zinseszins / Einfache Zinsen
- 本地示例用词：Kapital 10000 → 5% → 10 Jahre
- 可保留英文/符号：%
- 额外禁用：Renditeversprechen
- SERP 竞品 title（1–3）：Zinseszinsrechner；Zinseszins berechnen
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 对照清单/Omni 合并表审 slug；title 改为 Future Value 结果向（去掉本金利率期数频率目录腔）；次词 simple/monthly 落模式与 FAQ；主词 compound interest 进 H1 | 覆盖表已写入 `02`；保留 `how-to-calculate-compound-interest`；可标 ready / 勾页面模块清单 |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog；title 定为 Calculator — How to Calculate Future Value | 母版可合并；进页 loadSample 默认年复利样例 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Compound Interest Calculator 与 How to Calculate；desc 含公式与 16288.95 示例；非参数枚举 | 主词在 H1；次词 simple/frequency 落模式与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 03 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de；非英模同构 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh desc 补足 ≥120；es desc 含 cómo calcular | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL 免责；跑 lint:seo / coverage:gate all / build:site | lint:seo OK；coverage:gate phase=all OK；首页已含工具卡片 |
