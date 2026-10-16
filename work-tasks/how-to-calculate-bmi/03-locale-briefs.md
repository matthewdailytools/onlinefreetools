# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-bmi`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2；zh 避免「A 和 B」两段并列）
- [x] 隐私不当卖点
- [x] 禁「Formula 节 / 见规则节」等站内自指；禁 doorway / 薄页等元叙述
- [x] YMYL：结果与 FAQ 用筛查语气；禁「你患有 / 诊断为 / 必须减肥」等诊断或指令口吻；disclaimer 写明非医疗建议并建议咨询医生 / 护士 / 药剂师
- [x] 当地术语：zh 体质指数（BMI）、健康体重、偏瘦 / 超重 / 肥胖、肥胖 1 / 2 / 3 级；ja BMI（体格指数）、適正体重、低体重 / 普通体重 / 肥満、肥満度；es IMC（índice de masa corporal）, peso saludable, bajo peso / sobrepeso / obesidad；pt IMC (índice de massa corporal), peso saudável, abaixo do peso / sobrepeso / obesidade；fr IMC (indice de masse corporelle), poids santé, insuffisance pondérale / surpoids / obésité；de BMI (Body-Mass-Index), Normalgewicht, Untergewicht / Übergewicht / Adipositas Grad I–III；ru ИМТ (индекс массы тела), нормальный вес, дефицит массы / избыточный вес / ожирение I–III степени；id BMI (indeks massa tubuh), berat badan sehat, kurus / berat berlebih / obesitas；ar مؤشر كتلة الجسم, الوزن الصحي, نقص الوزن / زيادة الوزن / السمنة من الدرجة 1–3
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：正文写 22,9、56,7–76,3 kg、0,91；样例按语言把小数点换成逗号；页面输入接受逗号
- [x] 事实不可改（cutoff 18.5 / 25 / 30 / 35 / 40；NHS 23 / 27.5；1 lb = 0.45359237 kg；1 in = 2.54 cm；703 系数；成人 18 岁以上、非孕期；CDC 儿童图表 2–19 岁）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整；en 先写 lb 与 stone，其余语种以 kg 为先；ja / zh 补本地常见 BMI 22 「标准体重」说法时只作说明，不改分类）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：70 kg / 175 cm → 22.9，范围 56.7–76.3 kg，Prime 0.91；200 lb / 5 ft 10 in → 28.7；64 kg / 165 cm 族裔 cutoff → 23.5（标准为健康体重）；11 st 0 lb / 5 ft 7 in → 24.1。

## 每语 brief

### en
- 检索词：BMI calculator；how to calculate BMI；healthy weight for my height；BMI calculator stone and pounds；Asian BMI cutoffs
- 语气：口语
- Title：BMI Calculator — Calculate Your Body Mass Index and See the Healthy Weight Range for Your Height
- 按钮：Calculate BMI / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：BMI 计算器；BMI 怎么算；体质指数计算；身高体重标准；亚洲人 BMI 标准
- 语气：口语
- Title：BMI 计算器 — 输入身高体重算出体质指数，并查看你这个身高的健康体重范围
- 按钮：计算 BMI / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de IMC；cómo calcular el IMC；índice de masa corporal；peso ideal según estatura；IMC sobrepeso obesidad
- 语气：口语（tú）
- Title：Calculadora de IMC — calcula tu índice de masa corporal y el rango de peso saludable para tu estatura
- 按钮：Calcular IMC / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة مؤشر كتلة الجسم；حساب كتلة الجسم；الوزن المثالي حسب الطول；BMI
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة مؤشر كتلة الجسم (BMI) — احسب مؤشرك واعرف نطاق الوزن الصحي المناسب لطولك
- 按钮：احسب المؤشر / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de IMC；como calcular IMC；índice de massa corporal；peso ideal pela altura；tabela IMC
- 语气：口语（pt-BR）
- Title：Calculadora de IMC — calcule seu índice de massa corporal e a faixa de peso saudável para sua altura
- 按钮：Calcular IMC / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator BMI；cara menghitung BMI；indeks massa tubuh；berat badan ideal sesuai tinggi；BMI Asia
- 语气：口语（Anda）
- Title：Kalkulator BMI — Hitung Indeks Massa Tubuh dan Lihat Rentang Berat Badan Sehat untuk Tinggi Anda
- 按钮：Hitung BMI / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur d’IMC；calcul IMC；indice de masse corporelle；poids idéal selon la taille；IMC surpoids obésité
- 语气：vouvoiement
- Title：Calculateur d’IMC — calculez votre indice de masse corporelle et la fourchette de poids santé pour votre taille
- 按钮：Calculer l’IMC / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：BMI 計算；BMI 計算方法；適正体重 計算；肥満度 計算；身長 体重 BMI
- 语气：です・ます
- Title：BMI計算ツール — 身長と体重からBMIを計算し、その身長の健康的な体重範囲もわかる
- 按钮：BMIを計算 / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор ИМТ；рассчитать индекс массы тела；норма веса по росту；ИМТ ожирение степени
- 语气：нейтральный（вы）
- Title：Калькулятор ИМТ — рассчитайте индекс массы тела и диапазон здорового веса для вашего роста
- 按钮：Рассчитать ИМТ / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：BMI-Rechner；BMI berechnen；Normalgewicht berechnen；BMI Tabelle；Adipositas Grad
- 语气：Sie-Form
- Title：BMI-Rechner — Body-Mass-Index berechnen und den gesunden Gewichtsbereich für Ihre Größe sehen
- 按钮：BMI berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「BMI Calculator — How to Calculate Body Mass Index」改为工具名 + 计算 + 健康体重范围；02 新增与理想体重 / 体脂 / 热量工具的分工、同意图相关搜索全表（健康范围 / 分类 / 族裔 cutoff / 英石吸；儿童百分位、理想体重公式、体脂不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 BMI calculator + body mass index + healthy weight range；desc 写三套单位、分类、健康范围、BMI Prime 与示例；FAQ q1–q7 逐一对应次要词；YMYL 语气复核 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | 十语按 brief 独立重写：title 用当地说法（BMI 计算器、IMC、ИМТ、BMI-Rechner、BMI計算、indeks massa tubuh、مؤشر كتلة الجسم）；小数逗号语种示例数字本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 slug；title 定为「BMI Calculator — How to Calculate Body Mass Index」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（FAQ 一句答、仅数值 + 4 档），已重写 |
