# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-significant-figures`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2）
- [x] 隐私不当卖点
- [x] 禁「Formula 节 / 见规则节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 有效数字、修约、四舍五入、四舍六入五成双（银行家舍入）、科学记数法、前导零 / 末尾零；ja 有効数字、四捨五入、偶数丸め（銀行丸め）、指数表記（科学的記数法）、位取りの 0；es cifras significativas, redondeo, redondeo al par (del banquero), notación científica, ceros a la izquierda / a la derecha；pt algarismos significativos, arredondamento, arredondamento para o par, notação científica, zeros à esquerda / à direita；fr chiffres significatifs, arrondi, arrondi au pair (du banquier), notation scientifique, zéros non significatifs；de signifikante (geltende) Stellen / Ziffern, Runden, mathematisches (kaufmännisches) Runden, wissenschaftliche Schreibweise (Exponentialschreibweise), führende Nullen；ru значащие цифры, округление, банковское округление (к чётному), стандартный вид (научная запись), незначащие нули；id angka penting, pembulatan, pembulatan ke genap, notasi ilmiah, nol di depan / di belakang；ar الأرقام المعنوية، التقريب، التقريب إلى الزوجي، الصيغة العلمية، الأصفار البادئة / اللاحقة
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：正文示例写 0,004050、4,56 × 1,4 = 6,384 → 6,4；页面按语言把样例小数点换成逗号；en / zh / ja / ar 用小数点
- [x] 规则事实不可改（1200 → 2 位且歧义；五成双 2.45 → 2.4）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：0.004050 → 4 位、4.050 × 10⁻³；1200 → 2（可能 2–4）；1299.7 → 1300 = 1.30 × 10³；2.45 → 2.5 / 2.4；0.125 → 0.13 / 0.12；4.56 × 1.4 = 6.384 → 6.4；12.11 + 18.0 = 30.11 → 30.1。

## 每语 brief

### en
- 检索词：significant figures calculator；sig fig calculator；sig fig counter；rounding significant figures；sig fig rules addition multiplication
- 语气：口语
- Title：Significant Figures Calculator — Count Sig Figs, Round a Number and Calculate With Sig Fig Rules
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：有效数字计算器；有效数字怎么数；有效数字修约；有效数字运算规则；0.0050有几位有效数字
- 语气：口语（中学化学 / 物理用语）
- Title：有效数字计算器 — 数出有几位有效数字，还能修约到指定位数并按规则做加减乘除
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de cifras significativas；cuántas cifras significativas tiene；redondear cifras significativas；reglas de cifras significativas suma multiplicación
- 语气：口语（tú）
- Title：Calculadora de cifras significativas — cuenta las cifras, redondea un número y opera con las reglas
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الأرقام المعنوية；كيفية حساب الأرقام المعنوية；قواعد الأرقام المعنوية；تقريب الأرقام المعنوية
- 语气：فصحى مبسطة；拉丁数字
- Title：حاسبة الأرقام المعنوية — عدّ الأرقام المعنوية وقرّب العدد واحسب وفق قواعدها
- 按钮：احسب / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de algarismos significativos；quantos algarismos significativos；arredondamento de algarismos significativos；regras de algarismos significativos
- 语气：口语（pt-BR）
- Title：Calculadora de algarismos significativos — conte, arredonde e faça contas seguindo as regras
- 按钮：Calcular / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator angka penting；cara menghitung angka penting；aturan angka penting；pembulatan angka penting
- 语气：口语（Anda）
- Title：Kalkulator Angka Penting — Hitung Jumlah Angka Penting, Bulatkan Bilangan dan Operasikan Sesuai Aturan
- 按钮：Hitung / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculatrice chiffres significatifs；combien de chiffres significatifs；arrondir chiffres significatifs；règles chiffres significatifs addition multiplication
- 语气：vouvoiement
- Title：Calculatrice de chiffres significatifs — comptez-les, arrondissez un nombre et calculez avec les règles
- 按钮：Calculer / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：有効数字 計算；有効数字 桁数 数え方；有効数字 丸め方；有効数字 足し算 掛け算 ルール
- 语气：です・ます
- Title：有効数字計算ツール — 有効数字が何桁かを数え、指定した桁数への丸めと四則演算もできる
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор значащих цифр；сколько значащих цифр；округление до значащих цифр；правила значащих цифр при умножении и сложении
- 语气：нейтральный
- Title：Калькулятор значащих цифр — посчитайте значащие цифры, округлите число и выполните действия по правилам
- 按钮：Рассчитать / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：signifikante Stellen berechnen；signifikante Stellen Rechner；geltende Ziffern bestimmen；auf signifikante Stellen runden
- 语气：Sie-Form
- Title：Signifikante Stellen berechnen — Stellen zählen, auf n Stellen runden und mit den Regeln rechnen
- 按钮：Berechnen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由「How to Count and Round Sig Figs」改为工具名 + 三任务；02 新增与科学记数工具的分工、同意图相关搜索全表（计数 / 修约 / 运算规则 / 前导与末尾零 / 五成双 / 科学记数吸；科学记数转换、按小数位修约不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 significant figures calculator + sig figs + round + calculate；desc 写 count、which digits count、round half up / half to even、四则运算、scientific notation、step；FAQ q1–q7 逐一对应次要词 | 主词在 H1；次词逐一有落点；zh 标题经检查改为 ≤ 2 段 |
| 2b 十语检索向重写（改写） | 2026-10-15 | 十语按 brief 独立重写：title 用当地说法（有效数字、有効数字、cifras significativas、algarismos significativos、chiffres significatifs、signifikante Stellen、значащие цифры、angka penting、الأرقام المعنوية）；小数逗号语种示例数字本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,es,ja,de | 十语键集与 en 一致；示例数字与页面输出一致 |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 slug；title 定为「Significant Figures Calculator — How to Count and Round Sig Figs」 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（FAQ 一句答、无运算、浮点修约），已重写 |
