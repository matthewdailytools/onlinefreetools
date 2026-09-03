# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-compress-pdfs-for-email`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」（见 `tool-i18n-localization.mdc`「隐私本地处理表述」）
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02`/`notes` 有覆盖表；见 localization 步 0b）——勾工程/页面/上线清单前必做
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（PDF、ZIP）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：batch compress PDFs for email; batch compress pdf; compress pdfs; batch pdf compressor; reduce pdf size email
- 语气：口语工具站
- Title / H1 方向：Batch compress PDFs for email
- 按钮短词：Compress all; Download ZIP; Load sample; Clear; Email preset
- 本地示例用词：attachment cap, separate PDFs in a ZIP
- 可保留英文/符号：PDF, ZIP
- 额外禁用：parameter-list H1; doorway; slug; merge as default
- SERP 竞品 title（1–3）：Compress PDF; iLovePDF batch
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量压缩 PDF 发邮件; 批量压缩 PDF; 压缩多个 PDF; PDF 压缩打包; 缩小 PDF 附件
- 语气：口语工具站
- Title / H1 方向：批量压缩 PDF 以便发邮件（不要把 batch 塞进中文 H1）
- 按钮短词：全部压缩; 下载 ZIP; 载入样例; 清空
- 本地示例用词：邮箱附件上限、仍是多份 PDF
- 可保留英文/符号：PDF、ZIP
- 额外禁用：参数顿号；说成合并
- SERP 竞品 title（1–3）：在线批量压缩 PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comprimir pdfs para correo; comprimir pdf por lote; comprimir varios pdf; reductor pdf lote; reducir pdf adjunto
- 语气：口语工具站
- Title / H1 方向：Comprimir PDF para correo en lote
- 按钮短词：Comprimir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：límite del adjunto, PDF separados
- 可保留英文/符号：PDF, ZIP
- 额外禁用：altas y bajas; fusionar por defecto
- SERP 竞品 title（1–3）：comprimir PDF por lote
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：ضغط ملفات pdf للبريد; ضغط pdf دفعة; ضغط عدة pdf; ضاغط pdf; تصغير مرفق pdf
- 语气：口语工具站
- Title / H1 方向：ضغط ملفات PDF للبريد دفعة واحدة
- 按钮短词：ضغط الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：حد المرفق، ملفات منفصلة
- 可保留英文/符号：PDF, ZIP
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：ضغط PDF دفعة
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：comprimir pdfs para e-mail; comprimir pdf em lote; compactar vários pdf; compressor pdf lote; reduzir pdf anexo
- 语气：口语工具站
- Title / H1 方向：Comprimir PDFs para e-mail em lote
- 按钮短词：Comprimir tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：limite do anexo, PDFs separados
- 可保留英文/符号：PDF, ZIP
- 额外禁用：H1 de enumeração
- SERP 竞品 title（1–3）：comprimir PDF em lote
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：kompres pdf untuk email; kompres pdf massal; kompres beberapa pdf; kompresor pdf; kecilkan lampiran pdf
- 语气：口语工具站
- Title / H1 方向：Kompres PDF untuk email sekaligus
- 按钮短词：Kompres semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：batas lampiran, PDF terpisah
- 可保留英文/符号：PDF, ZIP
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：kompres PDF massal
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：compresser pdf pour e-mail; compresser pdf par lot; compresser plusieurs pdf; compresseur pdf lot; réduire pièce jointe pdf
- 语气：口语工具站
- Title / H1 方向：Compresser des PDF pour e-mail en lot
- 按钮短词：Tout compresser; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：plafond de pièce jointe
- 可保留英文/符号：PDF, ZIP
- 额外禁用：titre catalogue; fusion par défaut
- SERP 竞品 title（1–3）：compresser PDF par lot
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：メール用に pdf を一括圧縮; pdf をまとめて圧縮; 複数 pdf 圧縮; pdf 一括圧縮; 添付用に pdf を小さく
- 语气：口语工具站
- Title / H1 方向：メール用に PDF を一括圧縮
- 按钮短词：すべて圧縮; ZIP をダウンロード; サンプル読込; クリア
- 本地示例用词：添付上限、別々の PDF
- 可保留英文/符号：PDF, ZIP
- 额外禁用：「ユースケース」空壳
- SERP 竞品 title（1–3）：PDF 一括圧縮
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：сжать pdf для почты; сжать pdf пакетом; сжать несколько pdf; компрессор pdf; уменьшить pdf вложение
- 语气：口语工具站
- Title / H1 方向：Сжать PDF для почты пакетом
- 按钮短词：Сжать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：лимит вложения, отдельные PDF
- 可保留英文/符号：PDF, ZIP
- 额外禁用：H1-список
- SERP 竞品 title（1–3）：сжать PDF пакетом
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：PDFs für E-Mail komprimieren; PDF in Masse komprimieren; mehrere PDF komprimieren; PDF-Kompressor Stapel; PDF-Anhang verkleinern
- 语气：口语工具站
- Title / H1 方向：PDFs für E-Mail in Masse komprimieren
- 按钮短词：Alle komprimieren; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Anhangslimit, getrennte PDFs
- 可保留英文/符号：PDF, ZIP
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：PDF in Masse komprimieren
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 英文 H1 定为 Batch compress PDFs for email；次词 compress pdfs 落入 ZIP 多文件；合并意图划到 merge-pdf | 覆盖表与意图总判已写入 02；中文 H1 用批量压缩 PDF 发邮件而不塞 batch，明确 N 份进 ZIP 而非合并 |
| 1 母版+lint | 2026-09-03 | 写完 en 全键、catalog opts、Page 栅格重嵌+ZIP；email 默认档 | 母版键齐；页面 ID 前缀 bpe |
| 1b 母版检索覆盖优化 | 2026-09-03 | 母版 H1 锁定 Batch compress PDFs for email；desc 写 ZIP of separate PDFs 与 skip encrypted，去掉参数枚举 | 主词在 title/H1；次词 compress pdfs 与附件上限落入 description 与 FAQ；未做成 merge 门页 |
| 2 按 brief 重写 | 2026-09-03 | 按 03 十语 brief 独立重写 UI/FAQ/How，非 en 直搬；中文 H1 用批量压缩 PDF 以便发邮件 | 九语分片已写；隐私句均含设备+不上服务器 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查 en,zh,es,ja：各语 title 用当地检索句；description 含 steps/步骤/pasos/手順 与 example/示例/ejemplo/例；明确 ZIP 多文件而非合并 | en,zh,es,ja 主词在 H1；中文不塞 batch |
| 3 抽查+禁词+lint | 2026-09-03 | 禁词表、隐私句设备+不上服务器、参数枚举 H1 复查 | 十语 round 2/3 已勾；待 lint:tool-page 与 coverage:gate phase=4 |
