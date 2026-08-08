# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`unix-timestamp`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式

- [x] 标准禁词表（实现时勾）
- [x] **清单前检索覆盖已做**（2026-08-08）
- [x] **检索覆盖已优化**（2026-08-08 母版步 2 + en/zh/es/de 步 4）

---

## 每语 brief

### en
- 检索词：unix timestamp converter；epoch converter；timestamp to date；date to unix timestamp；milliseconds timestamp
- Title / H1：Unix Timestamp Converter — Epoch ↔ Readable Time
- 按钮：Convert；Now；Copy；Clear；Load sample；Timestamp → Date；Date → Timestamp；Seconds；Milliseconds

### zh
- 检索词：Unix 时间戳转换；时间戳转日期；日期转时间戳；epoch 转换；毫秒时间戳
- Title / H1：Unix 时间戳转换 — 纪元时间与可读时间互转
- 按钮：转换；现在；复制；清空；加载示例；时间戳→日期；日期→时间戳；秒；毫秒

### es
- 检索词：convertidor unix timestamp；epoch a fecha；timestamp a fecha；milisegundos unix
- Title / H1：Convertidor Unix timestamp — segundos, ms, UTC y local
- 按钮：Convertir；Ahora；Copiar；Limpiar；Cargar ejemplo

### ar
- 检索词：محول unix timestamp؛ epoch؛ الطابع الزمني؛ milliseconds
- Title / H1：محول Unix timestamp — UTC والمحلي
- 待母语抽查：[ ]

### pt
- 检索词：conversor unix timestamp；epoch；timestamp para data；milissegundos
- Title / H1：Conversor Unix timestamp — UTC e local

### id
- 检索词：konverter unix timestamp；epoch；timestamp ke tanggal；milidetik
- Title / H1：Konverter Unix Timestamp — UTC & lokal

### fr
- 检索词：convertisseur unix timestamp；epoch；horodatage；millisecondes
- Title / H1：Convertisseur Unix timestamp — UTC et local

### ja
- 检索词：Unix タイムスタンプ 変換；エポック；ミリ秒；日付 変換
- Title / H1：Unix タイムスタンプ変換 — 秒/ミリ秒、UTC/ローカル
- 待母语抽查：[ ]

### ru
- 检索词：конвертер unix timestamp；epoch；timestamp в дату；миллисекунды
- Title / H1：Конвертер Unix timestamp — UTC и локально
- 待母语抽查：[ ]

### de
- 检索词：unix timestamp konverter；epoch；timestamp in datum；millisekunden
- Title / H1：Unix-Timestamp-Konverter — Sekunden, ms, UTC & lokal

---

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 主词 unix timestamp converter→H1；秒毫秒为次词落 Rules；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版 + unixTimestampPage | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title 改为 Epoch ↔ Readable Time；去掉 Seconds/ms/UTC 枚举副标题 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 十语独立重写 | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；title 检索向；epoch 落 desc | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | 禁词表 | 完成 |
