# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`how-to-calculate-emi`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语须有非贷款/授信建议说法（本地自然表述）

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

可保留：EMI、%、公式字母 P/r/n。  
额外禁用（全语）：guaranteed approval / 稳批贷款 / 最低利率承诺 / 「最佳房贷产品」推销口吻。

---

## 每语 brief

### en

- 检索词（3–5）：EMI calculator；how to calculate EMI；loan amortization schedule；mortgage payment calculator；equated monthly installment
- 语气：偏正式（财务教学，非授信）
- Title / H1 方向：EMI Calculator — How to Calculate Loan Payments
- 按钮短词：Calculate / Clear；labels Loan amount / Annual rate / Years / Payment frequency；Monthly / Biweekly
- 本地示例用词：Loan 100,000 → 6% for 5 years, monthly → EMI about 1,933.28
- 可保留英文/符号：EMI、%
- 额外禁用：guaranteed approval；lowest rate promise
- SERP 竞品 title（1–3）：EMI Calculator；Loan Amortization Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：EMI 计算器；等额月供计算器；房贷月供计算；贷款摊还表；如何计算 EMI
- 语气：口语工具站 + 免责清晰
- Title / H1 方向：EMI / 等额月供计算器 — 如何计算贷款月供与利息
- 按钮短词：开始计算 / 清空；贷款本金 / 年利率 / 年限 / 付款频率；按月 / 双周
- 本地示例用词：本金 100000，年利率 6%，5 年按月 → 月供约 1933.28
- 可保留英文/符号：EMI、%
- 额外禁用：稳批贷款、最低利率承诺；参数枚举标题
- SERP 竞品 title（1–3）：等额本息计算器；房贷计算器
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：calculadora EMI；cuota mensual del préstamo；tabla de amortización；cómo calcular la cuota；hipoteca cuota
- 语气：偏正式教学
- Title / H1 方向：Calculadora EMI — Cuota del préstamo paso a paso
- 按钮短词：Calcular / Borrar；Importe / Tasa anual / Años / Frecuencia
- 本地示例用词：100000 → 6% → 5 años → cuota ≈ 1933.28
- 可保留英文/符号：EMI、%
- 额外禁用：promesa de aprobación
- SERP 竞品 title（1–3）：Calculadora de cuota；Amortización
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حاسبة القسط الشهري؛ حاسبة EMI؛ جدول السداد؛ حساب قسط القرض
- 语气：偏正式 + 免责
- Title / H1 方向：حاسبة القسط الشهري (EMI) — حساب أقساط القرض
- 按钮短词：احسب / امسح؛ مبلغ القرض / المعدل السنوي / السنوات / التكرار
- 本地示例用词：100000 بمعدل 6% لمدة 5 سنوات
- 可保留英文/符号：EMI、%
- 额外禁用：وعد بالموافقة على القرض
- SERP 竞品 title（1–3）：حاسبة القسط الشهري
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：calculadora de EMI；parcela do empréstimo；tabela de amortização；como calcular a parcela；financiamento parcela
- 语气：偏正式教学
- Title / H1 方向：Calculadora de EMI — Parcela do empréstimo
- 按钮短词：Calcular / Limpar；Valor / Taxa anual / Anos / Frequência
- 本地示例用词：100000 → 6% → 5 anos
- 可保留英文/符号：EMI、%
- 额外禁用：promessa de aprovação
- SERP 竞品 title（1–3）：Calculadora de parcela；Amortização
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：kalkulator EMI；cicilan bulanan；jadwal amortisasi；cara menghitung EMI；KPR cicilan
- 语气：口语工具站 + 免责
- Title / H1 方向：Kalkulator EMI — Hitung cicilan pinjaman
- 按钮短词：Hitung / Hapus；Pokok pinjaman / Suku bunga tahunan / Tahun / Frekuensi
- 本地示例用词：Pokok 100000 → 6% → 5 tahun
- 可保留英文/符号：EMI、%
- 额外禁用：janji disetujui kredit
- SERP 竞品 title（1–3）：Kalkulator EMI；Kalkulator cicilan
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：calculateur EMI；mensualité de prêt；tableau d’amortissement；calculer la mensualité；crédit immobilier mensualité
- 语气：偏正式教学
- Title / H1 方向：Calculateur EMI — Mensualités de prêt
- 按钮短词：Calculer / Effacer；Montant / Taux annuel / Années / Fréquence
- 本地示例用词：100000 → 6% → 5 ans
- 可保留英文/符号：EMI、%
- 额外禁用：promesse d’accord de prêt
- SERP 竞品 title（1–3）：Calculateur de mensualités；Amortissement
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：EMI 計算；ローン返済額計算；元利均等；返済シミュレーション；住宅ローン 月々
- 语气：偏正式 + 免责
- Title / H1 方向：EMI / ローン返済額計算ツール — 月々の返済額の求め方
- 按钮短词：計算する / クリア；借入額 / 年利 / 年数 / 支払頻度；毎月 / 隔週
- 本地示例用词：借入 100000・年利 6%・5年・毎月 → 約 1933.28
- 可保留英文/符号：EMI、%
- 额外禁用：ユースケース；「必ず審査通過」系
- SERP 竞品 title（1–3）：ローン返済額シミュレーション；元利均等
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：калькулятор EMI；ежемесячный платёж по кредиту；график амортизации；как рассчитать платёж；ипотечный платёж
- 语气：偏正式 + 免责
- Title / H1 方向：Калькулятор EMI — платёж по кредиту
- 按钮短词：Рассчитать / Очистить；Сумма / Годовая ставка / Годы / Частота
- 本地示例用词：100000 → 6% → 5 лет
- 可保留英文/符号：EMI、%
- 额外禁用：гарантия одобрения кредита
- SERP 竞品 title（1–3）：Калькулятор кредита；Амортизация
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：EMI-Rechner；Kreditrate berechnen；Tilgungsplan；Monatsrate Darlehen；Immobilienkredit Rate
- 语气：偏正式教学
- Title / H1 方向：EMI-Rechner — Kreditrate berechnen
- 按钮短词：Berechnen / Löschen；Kreditsumme / Jahreszins / Jahre / Zahlungshäufigkeit
- 本地示例用词：100000 → 6% → 5 Jahre → Rate ≈ 1933,28
- 可保留英文/符号：EMI、%
- 额外禁用：Kreditzusage-Versprechen
- SERP 竞品 title（1–3）：Kreditrechner；Tilgungsplan
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 对照清单/Omni 合并表审 slug；title 定为 EMI Calculator — How to Calculate Loan Payments（去掉本金利率期数目录腔）；次词 amortization/mortgage/biweekly 落摊还表、场景与频率控件；主词 EMI 进 H1 | 覆盖表已写入 `02`；保留 `how-to-calculate-emi`；可标 ready / 勾页面模块清单 |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例本金 100000、6%、5 年按月 → EMI 1933.28 | 母版可合并；进页 loadSample 出月供与摊还 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 EMI Calculator 与 How to Calculate Loan Payments；desc 含 amortization 与 1933.28 示例；非参数枚举 | 主词在 H1；次词 mortgage/biweekly/amortization 落控件与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 03 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de；title 各用当地检索说法（等额月供/cuota/mensualité/Tilgung 等） | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc；zh 补足等额月供与 1933.28；es 含 cómo calcular / amortación；ja 含元利均等与学習用免责 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL 免责；跑 lint:seo / coverage:gate all / build:site | lint 与 coverage 验收见上线步骤 |
