# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-body-fat`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：是 — 每语非医疗建议

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] 十语非同构（完整 UI/FAQ 独立重写，禁止英模回落）
- [x] **检索覆盖已优化**

额外禁用：诊断/治疗口吻；「准确率保证」；荐药/减肥承诺。

## 每语 brief

### en
- 检索词：body fat calculator；navy body fat；how to calculate body fat percentage
- Title：Body Fat Calculator — How to Estimate Body Fat Percentage
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：体脂率计算器；体脂率怎么算；海军体脂；体脂百分比
- Title：体脂率计算器 — 如何用围度估算体脂率
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora de grasa corporal；porcentaje de grasa；método navy
- Title：Calculadora de grasa corporal — Estimar el porcentaje con perímetros
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة نسبة الدهون؛ دهون الجسم
- Title：حاسبة نسبة دهون الجسم — تقدير بالنسبة المئوية
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### pt
- 检索词：calculadora de gordura corporal；percentual de gordura
- Title：Calculadora de gordura corporal — Estimar o percentual com circunferências
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id
- 检索词：kalkulator lemak tubuh；persentase lemak tubuh
- Title：Kalkulator lemak tubuh — Estimasi persen lemak dengan lingkar tubuh
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr
- 检索词：calculateur de masse grasse；pourcentage de graisse corporelle
- Title：Calculateur de masse grasse — Estimer le pourcentage avec les tours
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja
- 检索词：体脂肪率 計算；体脂肪率 電卓；ネイビー 体脂肪
- Title：体脂肪率の計算ツール — 周囲径から推定する
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор процента жира；процент жира в организме
- Title：Калькулятор процента жира — оценка по обхватам
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### de
- 检索词：Körperfett Rechner；Körperfettanteil berechnen；Navy Methode
- Title：Körperfett-Rechner — Anteil über Umfangsmaße schätzen
- 轮次2已重写：[x]  轮次3已抽查：[ ]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-body-fat；title 定为 Body Fat Calculator — How to Estimate Body Fat Percentage；navy/army/skinfold 落选项与 FAQ；禁参数枚举 H1 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；样例男 178/40/86 → 约 15.3% | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含 Body Fat Calculator 与 How to Estimate Body Fat Percentage；desc 含 15.3% 与 Navy；非参数枚举 H1 | 主词在 H1；次词落选项与 FAQ |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 独立写 zh/es/ar/pt/id/fr/ja/ru/de 完整 UI/How/FAQ/免责；禁止英模回落 | 十语键齐全且非英模 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：title 当地主词；zh 含体脂率；es 含 grasa corporal；ja 含体脂肪率 | en,zh,es,ja 已再核 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与 YMYL；coverage:gate all + build:site | 上线验收 |
