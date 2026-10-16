# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`how-to-calculate-discount`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔
- [x] 隐私：浏览器内计算
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构

## 每语 brief

### en
- 检索词：discount calculator；sale price；percent off；double discount
- Title：Discount Calculator — Find Sale Price or Percent Off
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：折扣计算器；优惠价；折扣百分比；叠折
- Title：折扣计算器 — 算优惠价或折扣百分比
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：calculadora descuento；precio final；porcentaje de descuento
- Title：Calculadora de descuento — Precio final o porcentaje
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：حاسبة الخصم؛ السعر بعد التخفيض؛ نسبة الخصم
- Title：حاسبة الخصم — السعر بعد التخفيض أو نسبة الخصم
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：calculadora de desconto；preço final；percentual de desconto
- Title：Calculadora de desconto — Preço final ou percentual
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：kalkulator diskon；harga setelah potongan；persen diskon
- Title：Kalkulator diskon — Harga setelah potongan atau persen
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：calculateur de remise；prix soldé；pourcentage de réduction
- Title：Calculateur de remise — Prix soldé ou pourcentage
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：割引計算；セール価格；割引率
- Title：割引計算ツール — セール価格や割引率を求める
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：калькулятор скидки；цена со скидкой；процент скидки
- Title：Калькулятор скидки — Цена со скидкой или процент
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Rabatt-Rechner；Verkaufspreis；Prozentsatz Rabatt
- Title：Rabatt-Rechner — Verkaufspreis oder Prozentsatz finden
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-09 | 保留 how-to-calculate-discount；title 定为结果向主词+How to；次词与固定样例落入 desc/FAQ；禁参数枚举 | 覆盖表已写入 02；可标 ready |
| 1 母版+lint | 2026-08-09 | 写 en 完整键 + Page/catalog/icon；进页 loadSample | 母版可合并 |
| 1b 母版检索覆盖优化 | 2026-08-09 | 核对 en title 含主检索词与 How to Calculate/结果向副标题；desc 含固定示例数字；非参数枚举 | 主词在 H1；次词落 FAQ/模式 |
| 2 按 brief 重写 | 2026-08-09 | 按 brief 写十语 title/description 与核心键；按钮短词本地化 | 十语键齐全 |
| 2b 抽查语检索覆盖优化 | 2026-08-09 | 抽查 en,zh,es,ja：再核 title/desc 当地主词与示例数字 | en,zh,es,ja 已再优化 title/desc |
| 3 抽查+禁词+lint | 2026-08-09 | 扫禁词与免责；跑 coverage:gate all 与 build:site | 上线验收通过 |
| 0b thin-rewrite #55 | 2026-10-16 | 复审同意图：sale price / percent off / stack / original；三模式落点写入 02；title 改为 Find Sale Price or Percent Off | 覆盖表+意图审查已回写 |
| 1b thin-rewrite #55 | 2026-10-16 | 母版加深：三模式+芯片+分步+why_choose×5+FAQ×7；desc 含 100@20%→80 与叠折；主词 discount 在 H1 | 主词在 H1；次词落 FAQ/模式 |
| 2b thin-rewrite #55 | 2026-10-16 | 九语独立重写全键（zh,es,ja,de,fr,pt,ar,id,ru）；抽查 en,zh,es,ja title/desc 当地主词与 100/20/80 | en,zh,es,ja 已再优化 title/desc |
