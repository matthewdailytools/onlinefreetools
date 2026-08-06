# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`how-to-calculate-bmi`  
**母版语言**：en / zh  
**状态**：`i18n-done`（十语检索向已重写；待母语抽查已清）

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无「诊断 / diagnose / cure」式承诺
- [x] 无「恭喜你很健康」式诊断口吻（改为中性筛查）
- [x] 场景标题非空壳英借（ユースケース等）
- [x] 十语非同一句式骨架；title 含该语检索说法（BMI / IMC / ИМТ 等）
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付

技术专名（BMI、WHO）可保留，**不可**替代本地主 title（如法语 IMC、俄语 ИМТ、葡语 IMC）。

---

## 每语 brief

### en

- 检索词（3–5）：BMI calculator；how to calculate BMI；body mass index；BMI formula；BMI categories
- 语气：口语工具站（教育筛查，偏谨慎）
- Title / H1 方向：BMI Calculator — How to Calculate Body Mass Index
- 按钮短词：Calculate BMI；Metric / Imperial
- 本地示例用词：70 kg, 175 cm → 22.9
- 可保留英文/符号：BMI、WHO、CDC
- 额外禁用：diagnose；Congratulations you are healthy
- SERP 竞品 title（1–3）：BMI Calculator；Calculate Your BMI
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：BMI 计算器；如何计算 BMI；身体质量指数；BMI 公式；BMI 标准
- 语气：口语工具站（教育筛查）
- Title / H1 方向：BMI 计算器 — 如何计算身体质量指数
- 按钮短词：计算 BMI；公制 / 英制
- 本地示例用词：70 公斤、175 厘米 → 22.9
- 可保留英文/符号：BMI、WHO
- 额外禁用：诊断疾病；恭喜您很健康
- SERP 竞品 title（1–3）：BMI 计算器；身体质量指数计算
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：calculadora IMC；cómo calcular el IMC；índice de masa corporal；fórmula IMC
- 语气：口语工具站
- Title / H1 方向：Calculadora de IMC — Cómo calcular el índice de masa corporal
- 按钮短词：Calcular IMC；Métrico / Imperial
- 本地示例：70 kg, 175 cm
- 可保留：IMC、BMI、OMS/WHO
- 额外禁用：diagnosticar
- SERP：Calculadora IMC；Calcular IMC online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حاسبة مؤشر كتلة الجسم；حساب BMI؛ معادلة مؤشر الكتلة
- 语气：口语工具站
- Title / H1 方向：حاسبة مؤشر كتلة الجسم (BMI)
- 按钮短词：احسب؛ متري / إمبراطوري
- 可保留：BMI
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### pt

- 检索词（3–5）：calculadora de IMC；como calcular IMC；índice de massa corporal
- 语气：口语工具站
- Title / H1 方向：Calculadora de IMC — Como calcular
- 按钮短词：Calcular IMC
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：kalkulator BMI；cara menghitung BMI；indeks massa tubuh
- 语气：口语工具站
- Title / H1 方向：Kalkulator BMI — Cara Menghitung
- 按钮短词：Hitung BMI
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：calculateur IMC；comment calculer l’IMC；indice de masse corporelle
- 语气：口语工具站
- Title / H1 方向：Calculateur d’IMC — Comment calculer
- 按钮短词：Calculer l’IMC
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：BMI 計算；BMI 計算機；体格指数；BMI の出し方
- 语气：口语工具站
- Title / H1 方向：BMI計算ツール — 体格指数の求め方
- 按钮短词：BMIを計算；メートル法 / ヤード・ポンド法
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### ru

- 检索词（3–5）：калькулятор ИМТ；как рассчитать ИМТ；индекс массы тела
- 语气：口语工具站
- Title / H1 方向：Калькулятор ИМТ — Как рассчитать
- 按钮短词：Рассчитать ИМТ
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]（用户确认清勾：按 brief 已独立重写十语文案；2026-08-06）

### de

- 检索词（3–5）：BMI Rechner；BMI berechnen；Body-Mass-Index Formel
- 语气：口语工具站
- Title / H1 方向：BMI-Rechner — Body-Mass-Index berechnen
- 按钮短词：BMI berechnen
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录

| 轮 | 日期 | 做了什么 | 改动语种 |
|---|---|---|---|
| 1 | 2026-08-06 | briefs + en/zh 母版计划 | — |
| 2 | | | |
| 3 | | | |
| 清母语抽查 | 2026-08-06 | 用户确认：按 brief 独立重写后清 ar/ja/ru 待抽查；轮次2/3勾选；状态 → `i18n-done` | 十语 |
