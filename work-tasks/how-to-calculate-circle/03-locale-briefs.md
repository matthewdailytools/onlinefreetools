# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-circle`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（r、d、C、A、π、cm²、m²、in²、ft² 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把 r、d、C、A 四项或单位列表串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：fr 必须区分「cercle」（周长 = périmètre du cercle）与「disque」（面积 = aire du disque），不得写「aire du cercle」作主表述（可在 FAQ 里作为常见搜法提及一次）；es「perímetro / longitud de la circunferencia」与「área del círculo」区分；pt「comprimento da circunferência」与「área do círculo」；ru「длина окружности」与「площадь круга」；de「Kreisumfang」「Kreisfläche」；id「keliling」「luas」「jari-jari」；ja「円周（の長さ）」「円の面積」「半径」「直径」。Example / FAQ 数字固定（r = 7 cm、14 cm、43.98、153.94、49π、14π、22/7 → 44 / 154、3.14 → 43.96 / 153.86、树干 100 cm → 31.83 cm / 15.92 cm、草坪 50 m² → 3.99 m / 7.98 m、半圆 76.97 cm² / 21.99 + 14 = 35.99 cm、18 寸 254.47 in² vs 2 × 113.10 = 226.19 in²、9 寸 63.62 vs 8 寸 50.27 in² 约 27%）各语不得改动；比萨、烤模的「inch」在公制语种可保留英寸（比萨尺寸在当地通常也按英寸卖），但须写明是直径。`exact_tpl` 的 `{a}` `{c}` `{u}`、`semi_a_tpl` / `semi_p_tpl` 的 `{v}` 原样保留；How / FAQ 中引用的选项名须与该语控件文案一致。π 选项文案「3.14」「22/7」为数学写法，各语保持原样（过程行固定用小数点）。

---

## 每语 brief

### en
- 检索词：circle calculator；area of a circle；circumference of a circle；radius from area；diameter from circumference
- 语气：口语 + 作业友好
- Title：Circle Calculator — Area and Circumference from Radius or Diameter, or Radius from Area or Circumference
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：圆的面积怎么算；圆的周长公式；已知周长求半径；已知面积求半径；半圆的周长
- 语气：口语 + 小学 / 初中数学（课本常用 π 取 3.14）
- Title：圆的面积和周长计算器 — 已知半径或直径求面积周长，也能由面积或周长反求半径
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：円の面積の求め方；円周の長さ 求め方；面積から半径 求め方；円周から直径；半円の周の長さ
- 语气：です・ます（小学校では円周率 3.14 を使う点に触れる）
- Title：円の面積と円周の求め方 — 半径や直径から計算し、面積や円周から半径も逆算
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حساب مساحة الدائرة؛ قانون محيط الدائرة؛ حساب نصف القطر من المساحة؛ حساب القطر من المحيط؛ مساحة نصف الدائرة
- 语气：فصحى مبسطة（π تُقرأ «ط» في المدارس العربية ويُذكر ذلك مرة واحدة）
- Title：حساب مساحة الدائرة ومحيطها — من نصف القطر أو القطر، أو أوجد نصف القطر من المساحة أو المحيط
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：área de un círculo；perímetro de un círculo / longitud de la circunferencia；radio a partir del área；diámetro a partir del perímetro
- 语气：tú
- Title：Área y perímetro de un círculo — Calcula desde el radio o el diámetro, o halla el radio a partir del área o del perímetro
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：área do círculo；comprimento da circunferência；raio a partir da área；diâmetro pelo comprimento
- 语气：você（pt-BR）
- Title：Área e comprimento da circunferência — Calcule pelo raio ou diâmetro, ou descubra o raio pela área ou pelo comprimento
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：aire d’un disque；périmètre d’un cercle；calculer le rayon à partir de l’aire；diamètre à partir de la circonférence
- 语气：vouvoiement
- Title：Aire d’un disque et périmètre d’un cercle — Calcul à partir du rayon ou du diamètre, ou rayon à partir de l’aire ou du périmètre
- 按钮：Calculer / Charger l’exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Kreisfläche berechnen；Kreisumfang berechnen；Radius aus Fläche berechnen；Durchmesser aus Umfang；Halbkreis Umfang
- 语气：Sie-Form
- Title：Kreisfläche und Kreisumfang berechnen — aus Radius oder Durchmesser, oder den Radius aus Fläche oder Umfang
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：площадь круга；длина окружности；радиус через площадь；диаметр через длину окружности；площадь полукруга
- 语气：нейтральный，на «вы»
- Title：Площадь круга и длина окружности — по радиусу или диаметру, а радиус по площади или длине
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：cara menghitung luas lingkaran；rumus keliling lingkaran；mencari jari-jari dari luas；diameter dari keliling；π 22/7 atau 3,14
- 语气：Anda（sekolah memakai π = 22/7 untuk jari-jari kelipatan 7, selain itu 3,14）
- Title：Luas dan Keliling Lingkaran — Hitung dari Jari-jari atau Diameter, atau Cari Jari-jari dari Luas atau Keliling
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Circle Calculator — Area and Circumference」扩为正向（r / d → A、C）+ 反向（A / C → r）；02 同意图搜索全表（面积 / 周长公式、由直径求、由面积 / 周长反求、π 形式、3.14 / 22/7、半圆、面积换算、比萨烤模比较吸；扇形弧长、圆方程、立体体积不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 circle calculator + area and circumference + radius from area or circumference；desc 写步骤 + π 选项 + r = 7 cm 例子；反求、π 取值、半圆、比萨分别落到 Why choose、Formula、FAQ q1–q7、Use cases | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（圆的面积和周长、円の面積と円周の求め方、área y perímetro de un círculo、Kreisfläche und Kreisumfang berechnen、aire d’un disque、luas dan keliling lingkaran 等）；fr 区分 cercle / disque；Example 数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | 半径 → 面积 / 周长单一计算立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
