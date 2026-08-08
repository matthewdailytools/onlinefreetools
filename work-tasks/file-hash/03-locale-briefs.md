# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`file-hash`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 错义借译 / 残缺缩写 / 空壳场景标题 / 参数枚举 title / 同构骨架 / 英文回退 / 脚本灌语
- [x] **清单前检索覆盖已做**（`02`，2026-08-08）
- [x] **检索覆盖已优化**（步 2+4 · 2026-08-08 实现时）

**本工具额外禁用**：勿承诺 MD5 用于安全签名；hash 勿译成「散列攻击」

---

## 每语 brief

### en
- 检索词：file hash calculator；md5 hash file；sha256 hash；text hash online；checksum calculator
- 语气：偏正式开发者
- Title / H1：File Hash Checker — Verify Digests in Your Browser
- 按钮：Hash；Copy；Clear；Load sample；Algorithm；Text / File
- 示例：hello
- 可保留：MD5、SHA-256、hex、Web Crypto
- SERP：File Hash Calculator；MD5 Checksum Online；SHA256 Hash Generator

### zh
- 检索词：文件哈希；MD5 计算；SHA256 在线；文本 MD5；校验和计算
- Title / H1：文件哈希校验 — 在浏览器内查看摘要
- 按钮：计算哈希；复制；清空；加载示例；算法；文本/文件

### es
- 检索词：hash de archivo；md5 archivo；sha256 online；checksum archivo；hash texto
- Title / H1：Hash de archivo y texto — MD5, SHA-256, local

### ar
- 检索词：حساب hash ملف؛ md5 ملف؛ sha256؛ checksum؛ hash نص
- Title / H1：تجزئة الملف والنص — MD5 و SHA-256 محليًا
- 待母语抽查：[ ]

### pt
- 检索词：hash de arquivo；md5 arquivo；sha256；checksum；hash texto
- Title / H1：Hash de arquivo e texto — MD5, SHA-256, local

### id
- 检索词：hash file；md5 file；sha256 online；checksum；hash teks
- Title / H1：Hash File & Teks — MD5, SHA-256, lokal

### fr
- 检索词：hash fichier；md5 fichier；sha256；checksum；empreinte fichier
- Title / H1：Hash fichier et texte — MD5, SHA-256, local

### ja
- 检索词：ファイル ハッシュ；MD5 計算；SHA256；チェックサム；テキスト ハッシュ
- Title / H1：ファイル/テキストのハッシュ — MD5・SHA-256、ローカル
- 待母语抽查：[ ]

### ru
- 检索词：хеш файла；md5 файла；sha256；контрольная сумма；хеш текста
- Title / H1：Хеш файла и текста — MD5, SHA-256, локально
- 待母语抽查：[ ]

### de
- 检索词：datei hash；md5 datei；sha256；checksum；text hash
- Title / H1：Datei- & Text-Hash — MD5, SHA-256, lokal

---

## 多轮记录（摘要）

> 行 ID 供 coverage:gate 解析。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-08 | 保留 slug file-hash；主词 file hash / MD5 落 H1「File Hash Checker」；次词 SHA 落 desc/FAQ；覆盖表写入 02 | 通过；可 ready |
| 1 母版+lint | 2026-08-08 | en 母版完整键 + fileHashPage | 完成 |
| 1b 母版检索覆盖优化 | 2026-08-08 | title 改为 Verify Digests in Your Browser；去掉 MD5/SHA 枚举副标题；主词 hash checker 在 H1 | 通过 |
| 2 按 brief 重写 | 2026-08-08 | 十语独立重写 | 完成 |
| 2b 抽查语检索覆盖优化 | 2026-08-08 | 抽查语 en,zh,es,ja；各语 title 结果向再优化；次词 digest 落 desc | 通过 |
| 3 抽查+禁词+lint | 2026-08-08 | 禁词表；coverage pass | 完成 |
