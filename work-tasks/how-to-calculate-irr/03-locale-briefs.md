# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-irr`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把投资 / 现金流 / 收益率 / NPV / MIRR 等字段名串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] YMYL：disclaimer 写明非投资建议；不承诺收益
- [x] 当地术语（不硬译 IRR）：zh 内部收益率（IRR）、财务净现值 NPV、插值法、修正内部收益率 MIRR；ja 内部収益率（IRR）、正味現在価値（NPV）、補間法、修正内部収益率（MIRR）；es TIR (tasa interna de retorno)、VAN / VPN、interpolación、TIRM；pt TIR (taxa interna de retorno)、VPL、interpolação、TIRM / MTIR；fr TRI (taux de rendement interne)、VAN、interpolation linéaire、TRIM (TRI modifié)；de interner Zinsfuß (IZF / IRR)、Kapitalwert, lineare Interpolation (Regula falsi)、modifizierter interner Zinsfuß (MIRR)；ru ВНД (внутренняя норма доходности, IRR)、ЧДД / NPV、метод интерполяции、МВНД (MIRR)；id IRR (internal rate of return)、NPV、interpolasi、MIRR；ar معدل العائد الداخلي (IRR)、صافي القيمة الحالية (NPV)、الاستيفاء الخطي、معدل العائد الداخلي المعدل (MIRR)
- [x] 数字写法与页面 Intl 输出一致（en/zh/ja/ar 1,000 / 16.34%；de 1.000 / 16,34 %；es 1000 / 10.000 / 16,34 %；pt 1.000 / 16,34%；fr/ru 1 000 / 16,34 %；id 1.000 / 16,34%）；现金流输入示例 `1100*12` 原样
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

1000 / 300 / 420 / 680；16.34%；16% NPV 6.40；17% NPV −12.20；18.60；257.86 / 310.30 / 431.83；0.8595 / 0.7388 / 0.6350（仅表格）；10% → NPV 130.73、MIRR 14.60%；15% / 20% → 16.41%；−1600 / 10000 / −10000 → 25% 与 400%；NPV −773.55；MIRR 5.60%；12000 / 1100*12 → 1.50%/月、19.53% 有效、17.97% 名义；8% → NPV 664.14、MIRR 13.98%/年；50000 / 15000 / 18000 / 20000 / 22000 → 17.19%，12% → NPV 5959.35；−99% / 1000%；600 期

## 每语 brief

### en
- 检索词：irr calculator；internal rate of return calculator；how to calculate irr；irr formula interpolation；multiple irr；monthly irr to annual；mirr
- 语气：口语工具站（学生 + 小企业主 + 分析师）
- Title：IRR Calculator — Find the Internal Rate of Return of Any Cash Flow Series, Step by Step
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：内部收益率计算器；IRR 怎么算；内部收益率计算公式；插值法求内部收益率；月 IRR 换算年化；IRR 和 NPV 区别
- 语气：口语，兼顾财务管理 / 技术经济学课本说法（试算 + 内插）
- Title：内部收益率（IRR）计算器 — 输入现金流算出 IRR，附插值法过程
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora TIR；cómo calcular la TIR；fórmula de la TIR；TIR por interpolación；TIR mensual a anual；TIRM；TIR y VAN
- 语气：口语（tú）；VAN 为主，可提 VPN（LatAm）
- Title：Calculadora de TIR — tasa interna de retorno de cualquier serie de flujos de caja, paso a paso
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة معدل العائد الداخلي；طريقة حساب IRR；قانون معدل العائد الداخلي；الاستيفاء الخطي；صافي القيمة الحالية
- 语气：فصحى مبسطة；拉丁数字，逗号千分位
- Title：حاسبة معدل العائد الداخلي (IRR) — لأي سلسلة تدفقات نقدية مع خطوات الحل
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora TIR；como calcular TIR；fórmula da TIR；TIR mensal para anual；TIR e VPL；TIR HP 12C / Excel
- 语气：口语（pt-BR）
- Title：Calculadora de TIR — taxa interna de retorno de qualquer fluxo de caixa, passo a passo
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator IRR；cara menghitung IRR；rumus IRR interpolasi；IRR dan NPV；IRR bulanan ke tahunan
- 语气：口语（Anda）
- Title：Kalkulator IRR — Hitung Internal Rate of Return dari Arus Kas, Lengkap dengan Langkahnya
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul TRI；taux de rendement interne calcul；formule du TRI；TRI interpolation linéaire；TRI mensuel en annuel；TRI et VAN；TRIM
- 语气：vouvoiement
- Title：Calcul du TRI — taux de rendement interne d’une série de flux de trésorerie, étape par étape
- 按钮：Calculer / Charger un exemple / Effacer
- 输入提示：千分位请不留空格（1000），各期之间用空格或换行分隔
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：IRR 計算；内部収益率 計算式；IRR 補間法；IRR エクセル；月次 IRR 年率換算；IRR NPV 違い
- 语气：です・ます
- Title：IRR（内部収益率）計算ツール — キャッシュフローからIRRを求め、補間法の途中式も表示
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор ВНД；как рассчитать ВНД；формула IRR；ВНД методом интерполяции；IRR и NPV (ЧДД)；MIRR
- 语气：нейтральный
- Title：Калькулятор ВНД (IRR) — внутренняя норма доходности по денежным потокам, с решением
- 按钮：Рассчитать / Загрузить пример / Очистить
- 输入提示：千分位请不留空格（1000），各期之间用空格或换行分隔
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：interner Zinsfuß berechnen；IRR Rechner；Interne-Zinsfuß-Methode；interner Zinsfuß Interpolation (Regula falsi)；Kapitalwert und interner Zinsfuß；modifizierter interner Zinsfuß
- 语气：Sie-Form
- Title：Interner Zinsfuß berechnen — IRR-Rechner für beliebige Zahlungsreihen mit Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 加 any cash flow series 与 step by step；02 新增同意图相关搜索全表（how to / formula / interpolation / multiple IRR / monthly / MIRR / IRR vs NPV / Excel / good IRR 吸；XIRR、NPV、payback、ROI、CAGR 不吸）与意图审查（不满足→满足）；修正旧样例 18.9% → 16.34% | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 IRR calculator + internal rate of return + step by step；desc 写 calculate、年 / 季 / 月、插值、验算表、NPV/MIRR、多 IRR；interpolation → 插值行 + Formula 2 + FAQ q2；multiple → FAQ q3；monthly → FAQ q5；Excel → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（内部收益率、内部収益率、TIR、TRI、interner Zinsfuß、ВНД 等）；数字按当地写法；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-irr；title 定为主词 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄且样例结论错误，已重写 |
