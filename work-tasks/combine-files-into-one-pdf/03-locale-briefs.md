# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`combine-files-into-one-pdf`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（PDF、JPG、PNG、WebP、EXIF、HEIC 保留）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把纸张 / 边距 / 双面 / 缩小等控件串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：勿暗示上传到服务器；勿承诺能直接合并 Word / Excel / PowerPoint（须先存为 PDF）；勿承诺支持 HEIC / TIFF；勿承诺能合并加密 PDF（须先解密）；勿称「缩小大照片」等同 PDF 压缩；与 `merge-pdf`（只合 PDF）划界，不用 merge pdf 头词做 H1。

---

## 每语 brief

### en
- 检索词：combine files into one pdf；create pdf from multiple files；combine pdf and jpg into one pdf；put photos and pdf in one file
- 语气：口语工具站
- Title：Combine Files into One PDF — Merge PDFs, Photos and Text Files in the Order You Choose
- 按钮：Combine to PDF / Download PDF / Load sample
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：多个文件合并成一个PDF；图片和PDF合并；照片合成PDF；把多个文件做成一个PDF
- 语气：口语工具站
- Title：多个文件合并成一个PDF — 把PDF和照片、文本笔记按你排好的顺序生成一份文档
- 按钮：合并为 PDF / 下载 PDF / 加载样例
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：複数ファイル PDF まとめる；PDF 画像 結合；写真 PDF 一つにまとめる；PDF 結合 画像
- 语气：です・ます
- Title：複数のファイルを1つのPDFにまとめる — PDFと写真、テキストを好きな順番で結合
- 按钮：PDFにまとめる / PDFをダウンロード / サンプルを読み込む
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：دمج ملفات في PDF واحد；دمج الصور مع PDF；تجميع ملفات في ملف PDF
- 语气：فصحى مبسطة
- Title：دمج عدة ملفات في ملف PDF واحد — اجمع ملفات PDF والصور والنصوص بالترتيب الذي تختاره
- 按钮：دمج في PDF / تنزيل PDF / تحميل مثال
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：unir archivos en un solo PDF；juntar PDF y fotos；combinar imágenes y PDF en uno
- 语气：tú
- Title：Unir archivos en un solo PDF — Combina PDF con fotos y textos en el orden que elijas
- 按钮：Combinar en PDF / Descargar PDF / Cargar ejemplo
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：juntar arquivos em um PDF；juntar PDF e fotos；unir imagens e PDF em um só
- 语气：você（pt-BR）
- Title：Juntar arquivos em um PDF — Una PDFs com fotos e textos na ordem que você quiser
- 按钮：Combinar em PDF / Baixar PDF / Carregar exemplo
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：fusionner plusieurs fichiers en un seul PDF；regrouper PDF et images；assembler des photos et un PDF
- 语气：vouvoiement
- Title：Fusionner plusieurs fichiers en un seul PDF — Assemblez PDF et photos avec vos textes dans l’ordre choisi
- 按钮：Fusionner en PDF / Télécharger le PDF / Charger l’exemple
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：mehrere Dateien zu einer PDF zusammenfügen；PDF und Bilder zusammenfügen；Fotos und PDF in eine Datei
- 语气：Sie-Form
- Title：Mehrere Dateien zu einer PDF zusammenfügen — PDFs, Fotos und Textdateien in Ihrer Reihenfolge kombinieren
- 按钮：Zu PDF zusammenfügen / PDF herunterladen / Beispiel laden
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：объединить файлы в один PDF；объединить PDF и фото；собрать несколько файлов в один PDF
- 语气：нейтральный，на «вы»
- Title：Объединить файлы в один PDF — PDF, фото и текстовые файлы в нужном вам порядке
- 按钮：Объединить в PDF / Скачать PDF / Загрузить пример
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：gabungkan file jadi satu PDF；gabung PDF dan foto；menyatukan beberapa file ke PDF
- 语气：Anda
- Title：Gabungkan Beberapa File Jadi Satu PDF — Satukan PDF dengan Foto dan Catatan Teks sesuai Urutan Pilihan Anda
- 按钮：Gabungkan ke PDF / Unduh PDF / Muat contoh
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由短句扩为 PDFs / photos / text files + order；02 同意图搜索全表（create pdf from multiple files、pdf + jpg、部分页、照片横躺、文件过大、双面打印吸；Word / Excel 部分吸（先存 PDF）；merge pdf / jpg to pdf / unlock 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 combine files into one PDF + PDFs / photos / text files + order；desc 写 steps + example；页范围 / EXIF / 缩小 / 双面 / Word / 密码分别落到 How、FAQ q2–q6、Use cases | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（多个文件合并成一个PDF、複数のファイルを1つのPDFにまとめる、unir archivos en un solo PDF、mehrere Dateien zu einer PDF zusammenfügen 等）；zh / id 副标题按 isParamEnumTitle 调整为结果导向；FAQ 顺序各语不同 | 十语键集与 en 一致（106 键）；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-09-03 | pdf planner N1 分场景立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
