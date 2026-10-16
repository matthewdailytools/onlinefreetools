# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-pace`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2；zh 避免「A 和 B」两段并列）
- [x] 隐私不当卖点
- [x] 禁「Formula 节 / 见规则节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 配速、完赛时间、分段（分段计时）、半程马拉松 / 全程马拉松、圈速；ja ペース、ゴールタイム、ラップ / スプリット、ハーフマラソン / フルマラソン、キロ何分；es ritmo (min/km), tiempo final, parciales, media maratón / maratón；pt pace / ritmo, tempo final, parciais, meia maratona / maratona；fr allure, temps final (chrono), temps de passage, semi-marathon / marathon；de Pace / Lauftempo, Zielzeit, Zwischenzeiten, Halbmarathon / Marathon；ru темп, время на финише, раскладка (сплиты), полумарафон / марафон；id pace, waktu finis, split, half marathon / maraton；ar الوتيرة (دقيقة لكل كم), زمن الوصول, الأزمنة المرحلية, نصف الماراثون / الماراثون
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：正文写 21,0975 km、12,07 km、7,46 mph；页面按语言把预设距离写成逗号；时间格式 h:mm:ss 不变
- [x] 事实不可改（1 mile = 1,609344 km 精确；半马 21,0975 km、全马 42,195 km；Riegel 指数 1,06）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整；英里为主的 en 保留 mile 示例，其余语种以 km 为先）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：5 km 25:00 → 5:00/km = 8:03/mi、12 km/h = 7.46 mph、400 m 2:00；半马 5:30/km → 1:56:02；1:00:00 @ 8:00/mi → 7.5 mi = 12.07 km；Riegel 10K 52:07、半马 1:55:00、全马 3:59:47；破 2 / 破 4：5:41/km → 1:59:54 / 3:59:48。

## 每语 brief

### en
- 检索词：pace calculator；running pace calculator；min per km to min per mile；marathon pace calculator；race time predictor
- 语气：口语
- Title：Pace Calculator — Find Running Pace, Finish Time or Distance in min/km or min/mile
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：配速计算器；跑步配速怎么算；配速换算；半马配速；全马破4配速；完赛时间计算
- 语气：口语（跑圈常用说法）
- Title：配速计算器 — 算出跑步配速，也能按配速推算完赛时间或跑了多远
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de ritmo de carrera；calcular ritmo min/km；ritmo media maratón；calculadora de tiempo maratón；pasar min/km a min/milla
- 语气：口语（tú）
- Title：Calculadora de ritmo de carrera — calcula tu ritmo, tiempo final o distancia en min/km o min/milla
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة وتيرة الجري；حساب سرعة الجري دقيقة لكل كيلومتر；زمن الماراثون；تحويل الوتيرة من كم إلى ميل
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة وتيرة الجري — احسب الوتيرة أو زمن الوصول أو المسافة بالدقيقة لكل كم أو ميل
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de pace；calcular pace corrida；pace meia maratona；tempo de prova；converter pace km para milha
- 语气：口语（pt-BR）
- Title：Calculadora de pace — calcule o ritmo de corrida, o tempo final ou a distância em min/km ou min/milha
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator pace lari；cara menghitung pace lari；pace half marathon；waktu finis maraton；pace per km ke per mil
- 语气：口语（Anda）
- Title：Kalkulator Pace Lari — Hitung Pace, Waktu Finis atau Jarak dalam Menit per Km atau per Mil
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur d’allure；calcul allure course à pied；allure semi-marathon；temps marathon；convertir allure min/km en min/mile
- 语气：vouvoiement
- Title：Calculateur d’allure — calculez votre allure de course, votre temps final ou la distance en min/km ou min/mile
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：ペース 計算；ランニング ペース計算；キロ何分 計算；ハーフマラソン ペース；フルマラソン サブ4 ペース
- 语气：です・ます
- Title：ペース計算ツール — 距離とタイムからランニングのペース、ゴールタイムや距離を計算
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор темпа бега；рассчитать темп бега мин/км；темп на полумарафон；время марафона；перевод темпа км в мили
- 语气：нейтральный
- Title：Калькулятор темпа бега — рассчитайте темп, время на финише или дистанцию в мин/км или мин/милю
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Pace-Rechner；Lauftempo berechnen；Pace berechnen min/km；Halbmarathon Pace；Marathon Zielzeit berechnen
- 语气：Sie-Form
- Title：Pace-Rechner — Lauftempo, Zielzeit oder Strecke in min/km oder min/Meile berechnen
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「Pace Calculator — min/km and Speed」改为工具名 + 三任务 + 双单位；02 新增与心率工具的分工、同意图相关搜索全表（三向 / 单位换算 / 完赛时间 / 预测 / 分段吸；速度输入、VO2max 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 pace calculator + running pace + finish time + distance + min/km + min/mile；desc 写三向、双单位、速度、400 m、splits、predictions；FAQ q1–q7 逐一对应次要词 | 主词在 H1；次词逐一有落点；zh 标题经检查改为不含「和」并列 |
| 2b 十语检索向重写（改写） | 2026-10-15 | 十语按 brief 独立重写：title 用当地说法（配速、ペース、ritmo、pace、allure、Pace / Lauftempo、темп、pace lari、وتيرة الجري）；小数逗号语种示例数字本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 slug；title 定为「Pace Calculator — min/km and Speed」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（FAQ 一句答、只能公里 + 分钟求配速），已重写 |
