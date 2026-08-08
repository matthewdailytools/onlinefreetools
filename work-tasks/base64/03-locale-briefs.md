# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`base64`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 标准禁词表各项（实现阶段勾选）
- [x] **清单前检索覆盖已做**（2026-08-08）
- [x] **检索覆盖已优化**（2026-08-08 母版步 2 + en/zh/es/de 步 4）

**额外禁用**：勿与 image-to-base64 混称「图片转 Base64 主工具」

---

## 每语 brief

### en
- 检索词：base64 encode；base64 decode；base64 encoder decoder；base64url；text to base64
- Title / H1：Base64 Encode & Decode — Convert Text in Your Browser
- 按钮：Encode；Decode；Convert；Copy；Clear；Load sample；Standard / Base64url

### zh
- 检索词：Base64 编码；Base64 解码；Base64 在线；Base64url；文本转 Base64
- Title / H1：Base64 编解码 — 在浏览器内转换文本

### es
- 检索词：codificar base64；decodificar base64；base64 online；base64url；texto a base64
- Title / H1：Codificar y decodificar Base64 — texto UTF-8, local

### ar
- 检索词：ترميز base64؛ فك base64؛ base64url؛ نص إلى base64
- Title / H1：ترميز وفك Base64 — نص UTF-8 محليًا
- 待母语抽查：[ ]

### pt
- 检索词：codificar base64；decodificar base64；base64 online；base64url
- Title / H1：Codificar e decodificar Base64 — texto UTF-8, local

### id
- 检索词：encode base64；decode base64；base64 online；base64url
- Title / H1：Encode & Decode Base64 — teks UTF-8, lokal

### fr
- 检索词：encoder base64；décoder base64；base64 en ligne；base64url
- Title / H1：Encoder et décoder Base64 — texte UTF-8, local

### ja
- 检索词：Base64 エンコード；Base64 デコード；Base64url；テキスト Base64
- Title / H1：Base64 エンコード/デコード — UTF-8 テキスト、ローカル
- 待母语抽查：[ ]

### ru
- 检索词：base64 кодирование；base64 декодирование；base64url；текст в base64
- Title / H1：Base64 кодирование и декодирование — UTF-8, локально
- 待母语抽查：[ ]

### de
- 检索词：base64 kodieren；base64 dekodieren；base64 online；base64url
- Title / H1：Base64 kodieren & dekodieren — UTF-8-Text, lokal

---

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | slug 与 image-to-base64 边界；主词 base64 encode/decode→H1；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版完整键 + base64Page | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title 改为 Convert Text in Your Browser；去掉 UTF-8/Base64url 枚举；主词 encode/decode 在 H1 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | zh/es/ar/pt/id/fr/ja/ru/de 独立重写 | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；title 非参数枚举；base64url 落 FAQ | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | 禁词表扫过 | 完成 |
