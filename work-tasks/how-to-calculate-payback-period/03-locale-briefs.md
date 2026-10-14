# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-payback-period`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把投资 / 现金流 / 折现率等字段名串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] YMYL：disclaimer 写明非投资建议；不承诺收益
- [x] 当地术语（不硬译 payback）：zh 投资回收期（静态 / 动态回收期）、回本；ja 投資回収期間（単純回収期間 / 割引回収期間）；es periodo de recuperación (payback) / payback descontado；pt payback simples e descontado；fr délai de récupération (DRCI) / délai actualisé；de Amortisationsdauer (statisch / dynamisch)；ru срок окупаемости (простой / дисконтированный)；id payback period / periode pengembalian modal；ar فترة الاسترداد / فترة الاسترداد المخصومة
- [x] 数字写法与页面 Intl 输出一致（en/zh/ja/ar 10,000 / 5.01；de/pt/id 10.000 / 2.500 / 5,01；es 10.000 / 2500 / 5,01；fr/ru 10 000 / 2 500 / 5,01）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：payback period calculator；discounted payback period calculator；payback period uneven cash flows；how to calculate payback period；good payback period
- 语气：口语工具站（学生 + 小企业主）
- Title：Payback Period Calculator — Simple & Discounted, for Even or Uneven Cash Flows
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：投资回收期计算器；静态投资回收期计算公式；动态投资回收期；回收期计算（不等额现金流）；几年回本
- 语气：口语，兼顾财管 / 技术经济课本说法
- Title：投资回收期计算器 — 算出几年回本（含动态回收期），现金流不等额也能算
- 按钮：计算 / 加载样例 / 清空
- 术语：静态 = 不折现；动态 = 折现（折现率 / 基准收益率 i_c）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de periodo de recuperación；payback descontado；periodo de recuperación de la inversión fórmula；flujos de caja desiguales
- 语气：口语（tú）
- Title：Calculadora del periodo de recuperación (payback) — simple y descontado, con flujos iguales o variables
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة فترة الاسترداد；فترة الاسترداد المخصومة；طريقة حساب فترة الاسترداد；تدفقات نقدية غير متساوية
- 语气：فصحى مبسطة
- Title：حاسبة فترة الاسترداد — البسيطة والمخصومة لتدفقات نقدية متساوية أو متفاوتة
- 按钮：احسب / تحميل مثال / مسح
- 数字：拉丁数字，逗号千分位
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de payback；payback descontado；como calcular payback；fluxos de caixa irregulares；tempo de retorno do investimento
- 语气：口语（pt-BR 为主）
- Title：Calculadora de payback — simples e descontado, com fluxos de caixa iguais ou variáveis
- 按钮：Calcular / Carregar exemplo / Limpar
- 本地示例：energia solar (placas solares) payback
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator payback period；cara menghitung payback period；discounted payback period；arus kas tidak sama；periode pengembalian modal
- 语气：口语
- Title：Kalkulator Payback Period — Hitung Periode Pengembalian Modal, Termasuk Discounted Payback
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul délai de récupération；délai de récupération actualisé；DRCI formule；flux de trésorerie inégaux
- 语气：vouvoiement
- Title：Calcul du délai de récupération (DRCI) — simple ou actualisé, flux constants ou variables
- 按钮：Calculer / Charger un exemple / Effacer
- 输入提示：千分位请不留空格（2500），年份之间用空格或换行分隔
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：投資回収期間 計算；回収期間法 計算式；割引回収期間法；ペイバック期間；キャッシュフロー 不均等
- 语气：です・ます
- Title：投資回収期間の計算ツール — 単純・割引回収期間を年ごとのキャッシュフローから算出
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор срока окупаемости；дисконтированный срок окупаемости；срок окупаемости формула；неравномерные денежные потоки
- 语气：нейтральный
- Title：Калькулятор срока окупаемости — простой и дисконтированный, для равных и неравных потоков
- 按钮：Рассчитать / Загрузить пример / Очистить
- 输入提示：千分位请不留空格（2500），年份之间用空格或换行分隔
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Amortisationsrechnung Rechner；Amortisationsdauer berechnen；dynamische Amortisationsrechnung；Amortisationszeit Formel；ungleichmäßige Rückflüsse
- 语气：Sie-Form
- Title：Amortisationsrechner — Amortisationsdauer statisch und dynamisch berechnen, auch bei ungleichen Rückflüssen
- 按钮：Berechnen / Beispiel laden / Leeren
- 本地示例：Photovoltaik-Amortisation
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 加 simple & discounted 与 even or uneven cash flows；02 新增同意图相关搜索全表（discounted / uneven / how to / years and months / good payback / solar / discount rate 吸；NPV、IRR、保本点、ROI 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 payback period calculator + discounted + uneven；desc 写 calculate、一框输入、折现率、steps 与累计表；uneven → FAQ q2 与 Formula 2；discounted → Formula 3 与 FAQ q3；年月 → FAQ q5 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地术语（静态 / 动态回收期、割引回収期間、payback descontado、DRCI、Amortisationsdauer、срок окупаемости 等）；数字按当地写法；FAQ 与 Why choose 条序随语种调整 | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-payback-period；title 定为主词 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-14 审计判定过薄，已重写 |
