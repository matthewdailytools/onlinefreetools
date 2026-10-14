# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-date-difference`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把年 / 月 / 周 / 小时 / 工作日全串进 H1）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地说法：zh 相差多少天 / 算头不算尾、首尾都算 / 工作日；ja 日数計算・何日間・初日不算入（民法の原則）・営業日；es días entre fechas / días hábiles；pt dias entre datas / dias úteis；fr nombre de jours entre deux dates / jours ouvrés vs jours ouvrables；de Tage zwischen zwei Daten / Arbeitstage / Werktage；ru сколько дней между датами / рабочие дни；id selisih hari / hari kerja；ar كم يوم بين تاريخين / أيام العمل（周末默认五六）
- [x] 正文日期与数字写法与页面 Intl 输出一致（日期由页面按本地长格式显示；正文举例用当地常见写法；13,299 → de/es/pt/id 13.299；fr/ru 13 299）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：days between dates；how many days between two dates；date difference calculator；business days between dates；include end date
- 语气：口语工具站
- Title：Date Difference Calculator — How Many Days Between Two Dates, Plus Workdays
- 按钮：Calculate / Load sample / Clear / Today
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：日期间隔计算器；两个日期相差多少天；天数计算器；工作日计算；算头不算尾
- 语气：口语
- Title：日期间隔计算器 — 算出两个日期相差多少天（含工作日天数）
- 按钮：计算 / 加载样例 / 清空 / 今天
- 本地说法：「算头不算尾」= 默认；勾选 =「首尾都算」；调休 / 法定节假日需自行扣除
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calcular días entre fechas；calculadora de días entre dos fechas；cuántos días hay entre dos fechas；días hábiles entre fechas
- 语气：口语（tú）
- Title：Calculadora de días entre fechas — cuántos días hay entre dos fechas, también hábiles
- 按钮：Calcular / Cargar ejemplo / Borrar / Hoy
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حساب الفرق بين تاريخين；كم يوم بين تاريخين；حاسبة الأيام；أيام العمل بين تاريخين
- 语气：فصحى مبسطة
- Title：حاسبة الفرق بين تاريخين — كم يومًا بين تاريخين مع أيام العمل
- 按钮：احسب / تحميل مثال / مسح / اليوم
- 周末：默认 الجمعة والسبت；说明可改为 السبت والأحد（如阿联酋 2022 起）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calcular dias entre datas；contador de dias；quantos dias entre duas datas；dias úteis entre datas
- 语气：口语（pt-BR 为主）
- Title：Calculadora de dias entre datas — quantos dias entre duas datas, incluindo dias úteis
- 按钮：Calcular / Carregar exemplo / Limpar / Hoje
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：hitung selisih hari；kalkulator hari；berapa hari antara dua tanggal；hari kerja antara dua tanggal
- 语气：口语
- Title：Kalkulator Selisih Tanggal — Hitung Berapa Hari di Antara Dua Tanggal, Termasuk Hari Kerja
- 按钮：Hitung / Muat contoh / Hapus / Hari ini
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul nombre de jours entre deux dates；calculer une durée entre deux dates；jours ouvrés entre deux dates；compte à rebours
- 语气：vouvoiement
- Title：Calcul du nombre de jours entre deux dates — durée exacte et jours ouvrés
- 按钮：Calculer / Charger un exemple / Effacer / Aujourd’hui
- 术语：jours ouvrés（周一至五）vs jours ouvrables（周一至六）在 FAQ 区分
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：日数計算；日付 差 計算；何日間 計算；期間計算；営業日 計算
- 语气：です・ます
- Title：日数計算ツール — 2つの日付の間が何日かを計算、営業日数もわかる
- 按钮：計算する / サンプルを読み込む / クリア / 今日
- 本地说法：「初日を含める / 含めない」（契約・法律では初日不算入が原則）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор дней между датами；сколько дней между датами；количество дней между датами；рабочие дни между датами
- 语气：нейтральный
- Title：Калькулятор дней между датами — сколько дней прошло, включая рабочие
- 按钮：Рассчитать / Загрузить пример / Очистить / Сегодня
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Tage zwischen zwei Daten berechnen；Tagerechner；Datumsrechner；Arbeitstage berechnen
- 语气：Sie-Form
- Title：Tagerechner — Tage zwischen zwei Daten berechnen, auch Arbeitstage
- 按钮：Berechnen / Beispiel laden / Leeren / Heute
- 术语：Arbeitstage（周一至五）vs Werktage（周一至六）在 FAQ 区分
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 改为问句主词 + Workdays；02 新增同意图相关搜索全表（工作日 / 包含结束日 / 年月日 / 周 / 小时 / 倒计时 / Excel 对照 吸；日期加减、时刻差、年龄不吸）与意图审查（不满足→满足：旧版正则失效） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 date difference calculator + how many days between two dates + workdays；desc 写 calculate、全部输出、包含结束日、steps；包含结束日 → FAQ q1；手算 → FAQ q2；月末 → FAQ q3；节假日 → FAQ q4 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地问法（相差多少天 / 日数計算 / días entre fechas / Tagerechner 等）；本地说法（算头不算尾、初日不算入、jours ouvrés vs ouvrables、Arbeitstage vs Werktage、阿拉伯周末五六）；FAQ 与 Why choose 条序随语种调整 | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-date-difference；title 定为主词 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-14 审计判定过薄且脚本失效，已重写 |
