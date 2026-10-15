# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-velocity`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2；不罗列全部单位）
- [x] 隐私不当卖点（不写「本地/免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 速度 / 速率、路程 / 位移、平均速度、千米每小时（km/h）、米每秒（m/s）、节；ja 速さ / 速度、道のり / 変位、平均の速さ、時速 / 秒速、ノット；es velocidad / rapidez, distancia / desplazamiento, velocidad media, km/h, m/s, nudos；pt velocidade / rapidez, distância / deslocamento, velocidade média, km/h, m/s, nós；fr vitesse / vitesse moyenne, distance / déplacement, vecteur vitesse, km/h, m/s, nœuds；de Geschwindigkeit / Tempo, Strecke / Weg / Verschiebung, Durchschnittsgeschwindigkeit, km/h, m/s, Knoten；ru скорость / путевая скорость, путь / перемещение, средняя скорость, км/ч, м/с, узлы；id kecepatan / kelajuan, jarak / perpindahan, kecepatan rata-rata, km/jam, m/s, knot；ar السرعة / السرعة المتجهة، المسافة / الإزاحة، السرعة المتوسطة، كم/س، م/ث، عقدة
- [x] 单位符号键（sym_*）可按当地习惯写（ru км, км/ч, м/с, ч, мин, с；ar كم/س 等；zh/ja 可保留 m、km、km/h）；须与正文示例一致
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：10,44 m/s、42,195 km、3,5163 h；页面容错千分位与小数逗号
- [x] 博尔特 9.58 s 为 2009 年柏林世界纪录，事实不可改
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：100 m ÷ 9.58 s = 10.44 m/s = 37.58 km/h = 23.35 mph；42.195 km ÷ 12 km/h = 3.5163 h = 3:30:58.5；65 mph × 2.5 h = 162.5 mi = 261.52 km；往返 60 / 40 km/h → 48 km/h、平均速度 0；1 m/s = 3.6 km/h = 2.2369 mph。

## 每语 brief

### en
- 检索词：velocity calculator；how to calculate velocity；speed distance time calculator；average speed calculator；m/s to km/h；speed vs velocity
- 语气：口语
- Title：Velocity Calculator — Find Speed, Distance or Time With Unit Conversion and Working
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：速度计算器；速度怎么算；速度路程时间公式；平均速度计算；米每秒换算千米每小时；速度和速率的区别
- 语气：口语（初中物理用语：路程 s、时间 t、v = s ÷ t）
- Title：速度计算器 — 知道距离和时间就能求速度，也能反求路程或用时并自动转换单位
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de velocidad；cómo calcular la velocidad；velocidad distancia tiempo；velocidad media；pasar m/s a km/h
- 语气：口语（tú）
- Title：Calculadora de velocidad — halla la velocidad, la distancia o el tiempo con conversión de unidades y el desarrollo
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة السرعة；قانون السرعة；كيفية حساب السرعة；السرعة المتوسطة；تحويل م/ث إلى كم/س
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة السرعة — احسب السرعة أو المسافة أو الزمن مع تحويل الوحدات وخطوات الحل
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de velocidade；como calcular velocidade；velocidade média fórmula；velocidade distância tempo；converter m/s em km/h
- 语气：口语（pt-BR）
- Title：Calculadora de velocidade — encontre velocidade, distância ou tempo com conversão de unidades e o cálculo passo a passo
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator kecepatan；rumus kecepatan；cara menghitung kecepatan；kecepatan rata-rata；konversi m/s ke km/jam
- 语气：口语（Anda）
- Title：Kalkulator Kecepatan — Cari Kecepatan, Jarak atau Waktu dengan Konversi Satuan dan Langkah Perhitungan
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul de vitesse；calculer une vitesse moyenne；formule vitesse distance temps；convertir m/s en km/h
- 语气：vouvoiement
- Title：Calcul de vitesse — trouvez la vitesse, la distance ou le temps avec conversion des unités et le détail du calcul
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：速さ 計算；速さ 求め方；速さ 時間 距離 公式（はじき）；平均の速さ；秒速 時速 換算
- 语气：です・ます
- Title：速度計算ツール — 距離と時間から速さを求め、道のりや時間も逆算（単位換算と計算過程つき）
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор скорости；как найти скорость；формула скорости расстояния и времени；средняя скорость；перевести м/с в км/ч
- 语气：нейтральный
- Title：Калькулятор скорости — найдите скорость, расстояние или время с переводом единиц и подробным решением
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Geschwindigkeit berechnen；Formel Geschwindigkeit Weg Zeit；Durchschnittsgeschwindigkeit berechnen；m/s in km/h umrechnen
- 语气：Sie-Form
- Title：Geschwindigkeit berechnen — Tempo, Strecke oder Zeit ermitteln mit Einheitenumrechnung und Rechenweg
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「Distance over Time」改为三量互求 + 单位换算 + 过程；02 新增与加速度 / 配速工具的分工、同意图相关搜索全表（三量互求 / 平均速度 / 单位换算 / 估时 / 往返平均速度 / 速度与速率 / 负速度吸；v = u + at、配速表、二维矢量不吸）与意图审查（不满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 velocity calculator + speed, distance or time + unit conversion + working；desc 写 calculate、v = d ÷ t、五种速度单位、formula、conversion step、examples、multi-part trip；how to → FAQ q1；speed vs velocity → FAQ q2；m/s 换算 → FAQ q3；求时间 → FAQ q4；往返 → FAQ q5；负速度 → FAQ q6；瞬时 → FAQ q7 | 主词在 H1；次词逐一有落点；zh/de/id 标题经检查改为 ≤ 2 段 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地说法（速度计算器、速さ、velocidad、velocidade、vitesse、Geschwindigkeit、скорость、kecepatan、السرعة）；单位符号本地化（ru км/ч 等）；小数逗号语种数字本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de,ar | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 how-to-calculate-velocity；title 定为「Velocity Calculator — Distance over Time」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（FAQ 一词答、无单位），已重写 |
