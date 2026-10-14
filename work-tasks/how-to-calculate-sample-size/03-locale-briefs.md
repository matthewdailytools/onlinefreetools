# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-sample-size`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（Z、n、n₀、N、p、E、σ、deff 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把置信水平、p、E、总体串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：不得把本页写成功效分析 / A/B 测试样本量；「误差界」用当地问卷通用说法（zh 误差范围 / 允许误差、ja 許容誤差、es margen de error、pt margem de erro、fr marge d’erreur、de Fehlerspanne / Fehlertoleranz、ru допустимая погрешность / предельная ошибка、id margin of error / batas kesalahan、ar هامش الخطأ）。Example / FAQ 数字固定（384.15、277.73、278、1000 / 1,000、20% → 1390、385、370、383、384、80、271、664、577、217、±4.90%、±4.38%、Z 1.645 / 1.960 / 2.576 / 1.95996、±5% → ±2.5% 约 4 倍）各语不得改动（千分位与小数点可按当地习惯）。`invites_tpl` 的 `{r}` `{k}` `{n}`、`fpc_tpl` 的 `{n0}` `{pop}` `{n}`、`deff_tpl` 的 `{deff}`、`moe_fact_tpl` 的 `{p}` `{lo}` `{hi}` `{conf}` 原样保留；How / FAQ 中引用的选项名须与该语控件文案一致。

---

## 每语 brief

### en
- 检索词：sample size calculator；how many survey responses do I need；sample size for population of 1000；margin of error calculator；Cochran formula
- 语气：口语 + 论文 / 问卷友好
- Title：Sample Size Calculator — How Many Survey Responses You Need for Your Margin of Error
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：样本量计算；问卷样本量怎么算；问卷需要多少份；样本量计算公式；误差范围 置信水平 95%
- 语气：口语 + 论文 / 问卷调查
- Title：样本量计算器 — 问卷要回收多少份才能达到你要的误差范围
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：サンプルサイズ 計算；アンケート 必要サンプル数；回答数 何人 必要；許容誤差 信頼度 95%；母集団 サンプル数
- 语气：です・ます
- Title：サンプルサイズ計算 — アンケートに必要な回答数を許容誤差と信頼度から求める
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حساب حجم العينة؛ كم عدد المشاركين في الاستبيان؛ معادلة حجم العينة؛ هامش الخطأ؛ معادلة كوكران
- 语气：فصحى مبسطة
- Title：حساب حجم العينة — كم إجابة يحتاج استبيانك لهامش الخطأ الذي تريده
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calcular tamaño de muestra；cuántas encuestas necesito；tamaño de muestra población finita；fórmula tamaño de muestra；margen de error
- 语气：tú
- Title：Calculadora de tamaño de muestra — Cuántas encuestas necesitas para tu margen de error
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora amostral；cálculo do tamanho da amostra；quantas respostas preciso na pesquisa；margem de erro；população finita
- 语气：você（pt-BR）
- Title：Calculadora amostral — Quantas respostas sua pesquisa precisa para a margem de erro desejada
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul taille échantillon；combien de répondants pour un questionnaire；taille d’échantillon représentatif；marge d’erreur；formule de Cochran
- 语气：vouvoiement
- Title：Calcul de la taille d’échantillon — Combien de réponses pour votre marge d’erreur
- 按钮：Calculer / Charger l’exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Stichprobengröße berechnen；Stichprobenumfang berechnen；wie viele Teilnehmer Umfrage；Fehlerspanne；Grundgesamtheit
- 语气：Sie-Form
- Title：Stichprobengröße berechnen — Wie viele Antworten Ihre Umfrage für die gewünschte Fehlerspanne braucht
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор размера выборки；расчет объема выборки；сколько респондентов нужно для опроса；допустимая погрешность；генеральная совокупность
- 语气：нейтральный，на «вы»
- Title：Калькулятор размера выборки — сколько ответов нужно опросу для нужной погрешности
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：menghitung jumlah sampel；rumus Slovin vs Cochran；berapa responden kuesioner；margin of error；ukuran sampel penelitian
- 语气：Anda（skripsi sering memakai rumus Slovin — FAQ 可说明 Slovin = Cochran dengan p 50% dan tingkat kepercayaan ~95% yang disederhanakan，数字不改）
- Title：Kalkulator Jumlah Sampel — Berapa Responden yang Dibutuhkan Kuesioner untuk Margin of Error Anda
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「How to Estimate Required n」改为问卷用户语言（要回收多少份 + 误差界）；02 同意图搜索全表（总体规模、反求误差界、置信水平、p 50%、385、FPC、回收率、设计效应、均值吸；功效分析、A/B 测试、置信区间不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 sample size calculator + how many survey responses + margin of error；desc 写总体 / 回收率 / 过程 + 278 例子；反求、置信、p、FPC、回收率、设计效应分别落到 Why choose、Formula、FAQ q1–q7、Use cases | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（问卷要回收多少份、アンケートに必要な回答数、cuántas encuestas necesitas、Stichprobengröße berechnen、jumlah sampel / responden 等）；id 说明 Slovin；Example 数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | 比例样本量单一公式立项（90/95/99、p、E 小数输入）+ 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
