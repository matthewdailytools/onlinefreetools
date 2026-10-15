# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-heart-rate`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把 Karvonen / AHA / 30 秒串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] **YMYL**：只写 AHA 页与 Tanaka 2001 已核事实；不作诊断、不给治疗建议；静息心率说明与 FAQ q7 一律落到「问医生」；disclaimer 保留胸痛 / 头晕 / 异常气短即停止并咨询专业人员
- [x] 当地术语：zh 最大心率、靶心率 / 目标心率、心率储备（Karvonen 法）、静息心率、燃脂心率、有氧区间；ja 最大心拍数、目標心拍数、カルボーネン法、安静時心拍数、脂肪燃焼ゾーン；es frecuencia cardíaca máxima、zonas de entrenamiento、fórmula de Karvonen、frecuencia cardíaca en reposo；pt frequência cardíaca máxima、zonas de treino、fórmula de Karvonen、frequência cardíaca de repouso；fr fréquence cardiaque maximale (FC max)、FC de réserve、méthode de Karvonen、FC de repos；de maximale Herzfrequenz、Trainingszonen、Karvonen-Formel、Ruhepuls、Fettverbrennungspuls；ru максимальный пульс、пульсовые зоны、формула Карвонена、пульс в покое、жиросжигающая зона；id detak jantung maksimal、zona latihan、rumus Karvonen、detak jantung istirahat；ar أقصى معدل لضربات القلب، مناطق التمرين، معادلة كارفونين، معدل النبض أثناء الراحة
- [x] 单位：bpm 按当地习惯（zh 次/分、ja 拍/分、ru уд/мин、ar نبضة/دقيقة；es / pt / fr / de / id 可用 lpm / bpm / bpm / S/min 或 bpm），bpm_tpl / hrr_tpl / aha_tpl / work_*_tpl 一致
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：0,7、0,88、176,5、179,6；公式选项名中的系数同样用逗号
- [x] 引用页面控件名（选项、「Beats in 30 s」列名）须与本语 UI 键一致
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

30 岁：190 / 187 / 179.6 ≈ 180；区间 95–114 / 114–133 / 133–152 / 152–171 / 171–190；30 秒 57–67（Zone 2）；AHA 95–133、133–162。45 岁 Tanaka 176.5 ≈ 177、静息 60、储备 117、70% = 142（% 最大心率 124）。实测 185、静息 52。60 岁 160 vs 166。Tanaka：351 项研究、18,712 人、514 人实验室验证。AHA：静息 60–100、运动员可低至 40、30 秒 × 2、初学 50% → 85%。

## 每语 brief

### en
- 检索词：heart rate zone calculator；max heart rate by age；220 minus age；Karvonen formula；fat burning heart rate；normal resting heart rate；target heart rate
- 语气：口语
- Title：Heart Rate Zone Calculator — Find Your Maximum Heart Rate and Training Zones from Your Age
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：心率区间计算器；最大心率怎么算；220 减年龄；燃脂心率；靶心率；储备心率法；静息心率多少正常
- 语气：口语
- Title：心率区间计算器 — 按年龄算出最大心率，并划分五个训练心率区间
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de zonas de frecuencia cardíaca；frecuencia cardíaca máxima por edad；fórmula de Karvonen；zona quema grasa；frecuencia cardíaca en reposo normal
- 语气：tú
- Title：Calculadora de zonas de frecuencia cardíaca — calcula tu frecuencia cardíaca máxima y tus zonas de entrenamiento según la edad
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة معدل ضربات القلب；أقصى معدل لضربات القلب حسب العمر；معادلة كارفونين；منطقة حرق الدهون；معدل نبض القلب الطبيعي
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة مناطق معدل ضربات القلب — احسب أقصى معدل لنبضات قلبك ومناطق التمرين حسب عمرك
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de frequência cardíaca；frequência cardíaca máxima por idade；fórmula de Karvonen；zona de queima de gordura；frequência cardíaca de repouso normal
- 语气：pt-BR 口语
- Title：Calculadora de zonas de frequência cardíaca — descubra sua frequência cardíaca máxima e suas zonas de treino pela idade
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator detak jantung；cara menghitung detak jantung maksimal；zona detak jantung；rumus Karvonen；detak jantung normal saat istirahat
- 语气：Anda
- Title：Kalkulator Zona Detak Jantung — Hitung Detak Jantung Maksimal dan Zona Latihan Berdasarkan Usia
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul fréquence cardiaque maximale；zones de fréquence cardiaque；méthode de Karvonen；FC de repos normale；zone de combustion des graisses
- 语气：vouvoiement
- Title：Calcul des zones de fréquence cardiaque — trouvez votre FC max et vos zones d'entraînement selon votre âge
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：心拍数 ゾーン 計算；最大心拍数 計算；カルボーネン法；脂肪燃焼 心拍数；安静時心拍数 正常
- 语气：です・ます；日本で一般的な「カルボーネン法（(最大心拍数 − 安静時心拍数) × 運動強度 + 安静時心拍数）」の書き方を Formula / FAQ に入れる
- Title：心拍ゾーン計算ツール — 年齢から最大心拍数とトレーニング心拍ゾーンを求める（カルボーネン法対応）
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор пульсовых зон；максимальный пульс по возрасту；формула Карвонена；пульс для сжигания жира；нормальный пульс в покое
- 语气：нейтральный
- Title：Калькулятор пульсовых зон — рассчитайте максимальный пульс и зоны тренировок по возрасту
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Herzfrequenzzonen berechnen；maximale Herzfrequenz berechnen；Karvonen-Formel；Fettverbrennungspuls；Ruhepuls normal
- 语气：Sie-Form
- Title：Herzfrequenzzonen berechnen — maximale Herzfrequenz und Trainingszonen nach Ihrem Alter ermitteln
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 补全为「Find Your Maximum Heart Rate and Training Zones from Your Age」；02 新增同意图相关搜索全表（按年龄最大心率 / Tanaka / 女性公式 / 燃脂区 / Karvonen / AHA 目标心率 / 静息心率 / 数脉搏 / 药物影响吸；HRV、VO2max、心律失常不吸）与意图审查（部分满足→满足）；权威改为已核的 AHA 图表页与 Tanaka 2001 | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 heart rate zone calculator + maximum heart rate + training zones + from your age；desc 写 calculate、三公式、实测值、五区、AHA、30 秒、Karvonen；max HR by age → FAQ q1；Tanaka vs 220 → FAQ q2；fat burning → FAQ q3；Karvonen → FAQ q4；resting HR → FAQ q5；pulse → FAQ q6；medication → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地说法（心率区间、心拍ゾーン / カルボーネン法、frecuencia cardíaca、frequência cardíaca、FC max、Herzfrequenzzonen、пульсовые зоны、detak jantung、معدل ضربات القلب）；单位按当地写法；小数逗号语种系数用逗号；YMYL 表述只引 AHA / Tanaka 已核事实；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-heart-rate；title 定为「Heart Rate Zone Calculator」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（单一公式、三个自定区间、FAQ 一词问答），已重写 |
