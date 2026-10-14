# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-percentage-change`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把旧值 / 新值 / 百分点等字段名串进 H1）
- [x] 隐私不当卖点（不写「本地 / 免费」空话）
- [x] 禁「Formula 节 / 见公式节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语（不硬译 percentage change）：zh 涨跌幅 / 增长率 / 环比 / 同比 / 个百分点；ja 増減率 / 変化率 / 前年比 / ポイント；es variación porcentual / puntos porcentuales；pt variação percentual / pontos percentuais (p.p.)；fr taux d’évolution / coefficient multiplicateur / taux réciproque / points de pourcentage；de prozentuale Veränderung / Wachstumsfaktor / Prozentpunkte；ru изменение в процентах / процентные пункты (п. п.)；id persentase perubahan / poin persentase；ar نسبة التغير / نقاط مئوية
- [x] 数字写法与页面 Intl 输出一致（en/zh/ja/ar 80,000 / 22.22%；de/id/pt 80.000 / 22,22 %（pt、id 无空格）；es 80.000 / 22,22 %；fr/ru 80 000 / 22,22 %）
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Use cases 场景随语种调整）

## 每语 brief

### en
- 检索词：percentage change calculator；percent increase calculator；percent decrease；percentage change formula；percent difference；percentage points vs percent
- 语气：口语工具站
- Title：Percentage Change Calculator — Percent Increase or Decrease from an Old to a New Value
- 按钮：Calculate / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：涨跌幅计算器；涨跌幅计算公式；增长率怎么算；环比 同比 计算；百分点和百分比的区别
- 语气：口语，兼顾财经报道用法
- Title：涨跌幅计算器 — 从旧值到新值算出百分比增长或下降（含百分点）
- 按钮：计算 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：増減率 計算；変化率 計算方法；増加率 求め方；前年比 計算；ポイントとパーセントの違い
- 语气：です・ます
- Title：増減率（変化率）の計算ツール — 変化前と変化後の値から増加率・減少率を求める
- 按钮：計算する / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة نسبة التغير；طريقة حساب نسبة الزيادة；حساب نسبة النقصان；الفرق بين النقطة المئوية والنسبة المئوية
- 语气：فصحى مبسطة
- Title：حاسبة نسبة التغير — احسب نسبة الزيادة أو النقصان من القيمة القديمة إلى الجديدة
- 数字：拉丁数字，逗号千分位
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de variación porcentual；cómo calcular el porcentaje de aumento；porcentaje de disminución；diferencia porcentual；puntos porcentuales
- 语气：tú
- Title：Calculadora de variación porcentual — calcula el porcentaje de aumento o disminución entre dos valores
- 按钮：Calcular / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de variação percentual；como calcular aumento percentual；porcentagem de queda；diferença percentual；pontos percentuais
- 语气：você（pt-BR）
- Title：Calculadora de variação percentual — calcule o aumento ou a queda em % do valor antigo ao novo
- 本地示例：Selic em pontos percentuais
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calcul du taux de variation；calculer un pourcentage d’augmentation / de baisse；coefficient multiplicateur；taux d’évolution réciproque
- 语气：vouvoiement
- Title：Calcul du taux de variation — pourcentage d’augmentation ou de baisse entre deux valeurs
- 本地术语：coefficient multiplicateur（CM = 1 + t）、taux réciproque
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：prozentuale Veränderung berechnen；prozentuale Zunahme / Abnahme；Wachstumsrate；Prozentpunkte vs. Prozent
- 语气：Sie-Form
- Title：Prozentuale Veränderung berechnen — Zunahme oder Abnahme in Prozent vom alten zum neuen Wert
- 本地示例：Wahlergebnisse in Prozentpunkten
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор процентного изменения；как посчитать изменение в процентах；на сколько процентов увеличилось；процентные пункты
- 语气：нейтральный
- Title：Калькулятор изменения в процентах — на сколько процентов выросло или снизилось значение
- 占位符：pp_tpl 用「{v} п. п.」避开数词变格
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator persentase perubahan；cara menghitung persentase kenaikan / penurunan；selisih persen；poin persentase
- 语气：Anda
- Title：Kalkulator Persentase Perubahan — Hitung Kenaikan atau Penurunan Persen dari Nilai Lama ke Baru
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 加 percent increase or decrease；02 新增同意图相关搜索全表（increase / decrease / formula / percent difference / percentage points / reverse / negative & zero 吸；CAGR、折扣、ROI、利润率不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 percentage change calculator + percent increase or decrease；desc 写 calculate + formula + 例子与反向百分比；percent difference → 结果格 + Formula 4 + FAQ q5；percentage points → 勾选框 + Formula 5 + FAQ q4；reverse → 结果格 + FAQ q3 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写：title 用当地说法（涨跌幅、増減率、variación porcentual、taux de variation、prozentuale Veränderung 等）；数字按当地写法；FAQ 题序与场景随语种调整 | 十语键集与 en 一致（74 键）；示例数字与页面输出一致；抽查 en,zh,es,ja,de,ar |

### 历史（2026-08-09 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-08-09 | 保留 slug；title 定为主词 | 覆盖表初版 |
| 初版 1–3 | 2026-08-09 | 十语首稿 + lint | 上线；2026-10-14 审计判定过薄，已重写 |
