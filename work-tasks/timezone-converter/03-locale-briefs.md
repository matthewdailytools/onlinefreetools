# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`timezone-converter`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式

- [x] 标准禁词表（实现时勾）
- [x] **清单前检索覆盖已做**（2026-08-08）
- [x] **检索覆盖已优化**（2026-08-08 母版 en + 抽查 zh/es/ja/ru）

**额外禁用**：勿写成 meeting-timezone-pack / 会议导出 / 团队时区包

---

## 每语 brief

### en
- 检索词：timezone converter；time zone converter；convert time timezone；world clock converter；time difference zones
- Title / H1：Time Zone Converter — Compare One Moment Worldwide
- 按钮：Convert；Now；Clear；Load sample；Source time zone；Add time zone

### zh
- 检索词：时区转换；时差转换；世界时间对照；跨时区时间；时区计算器
- Title / H1：时区转换 — 同一时刻多地对照
- 按钮：转换；现在；清空；加载示例；源时区；添加时区

### es
- 检索词：convertidor de zona horaria；cambiar zona horaria；reloj mundial；diferencia horaria
- Title / H1：Convertidor de zona horaria — comparar horas, local

### ar
- 检索词：محول المناطق الزمنية؛ فرق التوقيت؛ الساعة العالمية
- Title / H1：محول المناطق الزمنية — مقارنة محلية
- 待母语抽查：[x] 已重写关键段

### pt
- 检索词：conversor de fuso horário；fuso horário；relógio mundial；diferença de horário
- Title / H1：Conversor de fuso horário — comparar fusos, local

### id
- 检索词：konverter timezone；zona waktu；world clock；selisih waktu
- Title / H1：Konverter Zona Waktu — bandingkan zona, lokal

### fr
- 检索词：convertisseur fuseau horaire；décalage horaire；heure mondiale
- Title / H1：Convertisseur de fuseau horaire — comparer les zones, local

### ja
- 检索词：タイムゾーン 変換；時差；世界時計；タイムゾーン 計算
- Title / H1：タイムゾーン変換 — 複数ゾーンをローカル対照
- 待母语抽查：[x] 已重写关键段

### ru
- 检索词：конвертер часовых поясов；часовой пояс；мировое время；разница во времени
- Title / H1：Конвертер часовых поясов — локальное сравнение
- 待母语抽查：[x] 已重写关键段

### de
- 检索词：zeitzonen umrechner；timezone converter；weltuhr；zeitunterschied
- Title / H1：Zeitzonen-Umrechner — Zeiten vergleichen, lokal

---

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 与 meeting-timezone-pack 边界；主词 timezone converter→H1；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版 title/description/FAQ/UI；DST/非 meeting-pack | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title 改为 Compare One Moment Worldwide；主词在 H1；world clock→use cases | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 十语按 brief 独立重写 | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；title 非英模同构；DST 落 FAQ | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | 无 meeting 导出卖点 | 完成 |
