# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-percentage-change`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity 等造词
- [x] 无错义借译
- [x] 无残缺缩写
- [x] 场景标题非「ユースケース」式空壳英借；用「营收环比/指标涨跌」当地说法
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

---

## 每语 brief

### en

- 检索词（3–5）：percentage change calculator；how to calculate percentage change；percent increase；percent decrease；old to new value percent
- 语气：口语工具站（偏数据/商业可读）
- Title / H1 方向：Percentage Change Calculator — From Old Value to New
- 按钮短词：Calculate / Clear；Old value / New value
- 本地示例用词：80 → 100 = +25%；monthly revenue；DAU
- 可保留英文/符号：%、MoM、YoY（FAQ 可释）
- 额外禁用：空泛「math tool for everyone」无场景
- SERP 竞品 title（1–3）：Percentage Change Calculator；Percent Increase Calculator
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：百分比变化计算；涨跌幅计算；百分比增减；环比涨幅怎么算
- 语气：口语工具站（运营/数据）
- Title / H1 方向：百分比变化计算 — 旧值到新值的涨跌幅
- 按钮短词：计算 / 清空；旧值 / 新值
- 本地示例用词：80→100 = +25%；月营收环比；日活
- 可保留英文/符号：%、MoM、YoY
- 额外禁用：英式 Use cases 标题
- SERP 竞品 title（1–3）：百分比变化计算器；涨跌幅计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：calcular cambio porcentual；calculadora de variación porcentual；porcentaje de aumento；porcentaje de disminución
- 语气：口语（negocio/datos）
- Title / H1 方向：Calculadora de cambio porcentual — De valor antiguo a nuevo
- 按钮短词：Calcular / Borrar；Valor anterior / Valor nuevo
- 本地示例用词：80 → 100 = +25%；ingresos mensuales
- 可保留英文/符号：%、MoM
- 额外禁用：sin escenario de negocio
- SERP 竞品 title（1–3）：Cambio porcentual；Percent change
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حساب التغير النسبي؛ حاسبة النسبة المئوية للتغير؛ نسبة الزيادة؛ نسبة النقصان
- 语气：口语（أعمال/بيانات）
- Title / H1 方向：حاسبة التغير بالنسبة المئوية — من قيمة قديمة إلى جديدة
- 按钮短词：احسب / امسح؛ القيمة القديمة / الجديدة
- 本地示例用词：80 → 100 = +25%
- 可保留英文/符号：%
- 额外禁用：عنوان عام بلا سيناريو
- SERP 竞品 title（1–3）：التغير النسبي؛ Percentage change
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：calcular variação percentual；calculadora de mudança percentual；aumento percentual；diminuição percentual
- 语气：口语（negócios/dados）
- Title / H1 方向：Calculadora de variação percentual — Do valor antigo ao novo
- 按钮短词：Calcular / Limpar；Valor antigo / novo
- 本地示例用词：80 → 100 = +25%；receita mensal
- 可保留英文/符号：%、MoM
- 额外禁用：sem cenário de negócio
- SERP 竞品 title（1–3）：Variação percentual；Percentage change
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：hitung persentase perubahan；kalkulator perubahan persen；persentase kenaikan；persentase penurunan
- 语气：口语（bisnis/data）
- Title / H1 方向：Kalkulator perubahan persentase — Dari nilai lama ke baru
- 按钮短词：Hitung / Hapus；Nilai lama / baru
- 本地示例用词：80 → 100 = +25%；pendapatan bulanan
- 可保留英文/符号：%
- 额外禁用：judul generik tanpa skenario
- SERP 竞品 title（1–3）：Perubahan persentase；Percentage change
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：calculer la variation en pourcentage；calculateur de pourcentage de variation；pourcentage d’augmentation；pourcentage de baisse
- 语气：口语（business/data）
- Title / H1 方向：Calculateur de variation en % — De l’ancienne à la nouvelle valeur
- 按钮短词：Calculer / Effacer；Ancienne / Nouvelle valeur
- 本地示例用词：80 → 100 = +25%；CA mensuel
- 可保留英文/符号：%、MoM
- 额外禁用：outil maths sans scénario
- SERP 竞品 title（1–3）：Variation en pourcentage；Percentage change
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：パーセント変化 計算；増減率 計算；変化率 求め方；前年比 計算
- 语气：口语（ビジネス/データ）
- Title / H1 方向：パーセント変化の計算 — 旧値から新値への増減率
- 按钮短词：計算する / クリア；旧値 / 新値
- 本地示例用词：80→100 = +25%；月次売上；DAU
- 可保留英文/符号：%、MoM、YoY
- 额外禁用：ユースケース；抽象的な「計算ツール」のみ
- SERP 竞品 title（1–3）：増減率計算；パーセント変化
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：рассчитать процентное изменение；калькулятор процентного изменения；процент увеличения；процент уменьшения
- 语气：口语（бизнес/данные）
- Title / H1 方向：Калькулятор процентного изменения — От старого значения к новому
- 按钮短词：Рассчитать / Очистить；Старое / Новое значение
- 本地示例用词：80 → 100 = +25%；выручка за месяц
- 可保留英文/符号：%、MoM
- 额外禁用：без бизнес-сценария
- SERP 竞品 title（1–3）：Процентное изменение；Percentage change
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：prozentuale Änderung berechnen；Prozentrechner Änderung；prozentuale Zunahme；prozentuale Abnahme
- 语气：口语（Business/Daten）
- Title / H1 方向：Prozentuale Änderung berechnen — Von Alt- zu Neuwert
- 按钮短词：Berechnen / Leeren；Alter Wert / Neuer Wert
- 本地示例用词：80 → 100 = +25%；Monatsumsatz
- 可保留英文/符号：%、MoM
- 额外禁用：generischer Mathe-Ton ohne Szenario
- SERP 竞品 title（1–3）：Prozentuale Änderung；Percentage Change Rechner
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 briefs | 2026-08-06 | 十语 brief（商业/数据场景）；`briefs-ready` | 待实现轮次 1–3 |
| 1 母版+lint | | | |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
