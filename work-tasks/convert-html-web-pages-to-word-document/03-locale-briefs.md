# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`convert-html-web-pages-to-word-document`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：粘贴内容留在标签页；网址代抓一次不落盘
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（HTML、Word、DOCX、URL）可保留。H1 禁止用 `page` 当产品名。禁止承诺 CSS 像素级还原。禁止写成网页截图或 A4 PDF。

相对邻页：每语须写清「可编辑标题/列表/表格」vs HTML→PDF 打印件 vs PDF→Word vs 网页 PNG 栅格。

---

## 每语 brief

### en

- 检索词（3–5）：html to word; convert html to word document; html to docx; convert webpage to word; html to word converter
- 语气：口语工具站
- Title / H1 方向：Convert HTML web pages to a Word document
- 按钮短词：Convert; Download; Load sample; Clear
- 本地示例用词：release notes HTML, headings, table, editable .docx
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：H1=HTML to Word 光杆 doorway；H1 堆 converter/free；写成 screenshot-in-Word
- SERP 竞品 title（1–3）：HTML to Word; Convert HTML to DOCX; Webpage to Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：把 HTML 网页转成 Word 文档; HTML 转 Word; HTML 转 DOCX; 网页转 Word; 把网页另存为 Word
- 语气：口语工具站
- Title / H1 方向：把 HTML 网页转成 Word 文档
- 按钮短词：转换; 下载; 载入样例; 清空
- 本地示例用词：发布说明、标题、表格、可改的 Word
- 可保留英文/符号：HTML、Word、DOCX、URL
- 额外禁用：写成截图塞进 Word；「本地」不提代抓
- SERP 竞品 title（1–3）：HTML转Word; 网页转Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：HTML a Word; convertir HTML a documento Word; HTML a DOCX; página web a Word; convertir HTML a Word
- 语气：口语工具站
- Title / H1 方向：Convertir páginas HTML a un documento Word
- 按钮短词：Convertir; Descargar; Cargar ejemplo; Borrar
- 本地示例用词：notas de versión, títulos, tabla editable
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：altas y bajas；página 当产品名
- SERP 竞品 title（1–3）：HTML a Word; web a Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل HTML إلى وورد; تحويل صفحة ويب إلى مستند وورد; HTML إلى DOCX; حفظ صفحة كـ Word
- 语气：口语工具站
- Title / H1 方向：تحويل صفحات HTML إلى مستند وورد
- 按钮短词：تحويل; تنزيل; تحميل مثال; مسح
- 本地示例用词：ملاحظات الإصدار، عناوين، جدول قابل للتحرير
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：صفحة كاسم منتج
- SERP 竞品 title（1–3）：HTML إلى Word
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：HTML para Word; converter HTML em documento Word; HTML para DOCX; página web para Word
- 语气：口语工具站
- Title / H1 方向：Converter páginas HTML em um documento Word
- 按钮短词：Converter; Baixar; Carregar exemplo; Limpar
- 本地示例用词：notas de versão, títulos, tabela editável
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：página 当产品名
- SERP 竞品 title（1–3）：HTML para Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：HTML ke Word; ubah HTML jadi dokumen Word; HTML ke DOCX; halaman web ke Word
- 语气：口语工具站
- Title / H1 方向：Ubah halaman HTML menjadi dokumen Word
- 按钮短词：Ubah; Unduh; Muat contoh; Hapus
- 本地示例用词：catatan rilis, judul, tabel yang bisa diedit
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：halaman 当产品名
- SERP 竞品 title（1–3）：HTML ke Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：HTML vers Word; convertir HTML en document Word; HTML vers DOCX; page web vers Word
- 语气：口语工具站
- Title / H1 方向：Convertir des pages HTML en document Word
- 按钮短词：Convertir; Télécharger; Charger un exemple; Effacer
- 本地示例用词：notes de version, titres, tableau modifiable
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：page 当产品名
- SERP 竞品 title（1–3）：HTML vers Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：HTMLをWordに変換; HTMLをWord文書にする; HTMLをDOCX; ウェブページをWordに; HTMLをワードに
- 语气：口语工具站
- Title / H1 方向：HTMLのウェブページをWord文書にする
- 按钮短词：変換; ダウンロード; サンプルを読み込む; クリア
- 本地示例用词：リリースノート、見出し、編集できる表
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：ページを製品名に；ユースケース空壳
- SERP 竞品 title（1–3）：HTMLをWordに変換
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：HTML в Word; конвертировать HTML в документ Word; HTML в DOCX; веб-страница в Word
- 语气：口语工具站
- Title / H1 方向：Преобразовать HTML-страницы в документ Word
- 按钮短词：Конвертировать; Скачать; Загрузить пример; Очистить
- 本地示例用词：заметки о выпуске, заголовки, редактируемая таблица
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：страница как имя продукта
- SERP 竞品 title（1–3）：HTML в Word
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：HTML in Word umwandeln; HTML in Word-Dokument; HTML zu DOCX; Webseite in Word
- 语气：口语工具站
- Title / H1 方向：HTML-Webseiten in ein Word-Dokument umwandeln
- 按钮短词：Konvertieren; Herunterladen; Beispiel laden; Leeren
- 本地示例用词：Release-Notes, Überschriften, bearbeitbare Tabelle
- 可保留英文/符号：HTML, Word, DOCX, URL
- 额外禁用：Seite als Produktname
- SERP 竞品 title（1–3）：HTML zu Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-07 | slug 定为 convert-html-web-pages-to-word-document；H1 用 Convert HTML web pages to a Word document；Planner html to word absorb 进 desc；webpage to word 进 URL Tab；相对 PDF/截图把可编辑结构定为增量 | 主词进 H1；覆盖表、Ads 表与 0i 已回写 02；不拆 html-to-word doorway |
| 1 母版+lint | 2026-09-07 | 写 en 全键、catalog、Page；粘贴 HTML 默认 Tab + URL Tab；docx 映射标题/列表/表格/链接；进页 loadSample | title 为 Convert HTML web pages to a Word document，非参数枚举 |
| 1b 母版检索覆盖优化 | 2026-09-07 | 母版 description 前 160 字符含 Convert HTML web pages to a Word document、html to word、html to docx；How 先 Convert 再 Advanced 嵌图；hero 用短句 desc | 主词仍在 H1；次词 html to word / webpage to word 落在 desc 与 FAQ |
| 2 按 brief 重写 | 2026-09-07 | 十语按当地检索词独立重写 H1/按钮/FAQ；每语写清可编辑 Word vs HTML→PDF vs PDF→Word vs 网页截图；ar/ja/ru 未勾待母语抽查 | 各语 title 为当地任务句，非英模同构 |
| 2b 抽查语检索覆盖优化 | 2026-09-07 | 抽查 en,zh,es,ja：desc 前半含 html to word / HTML 转 Word；FAQ 划界 PDF 打印件与截图；webpage to word 落在 URL Tab How | en,zh,es,ja 主词在 H1；去掉 title 后正文仍明显是可编辑 .docx |
| 3 抽查+禁词+lint | 2026-09-07 | 禁词表全扫；H1 无 page 当产品名；隐私写清粘贴留标签页、URL 代抓一次不落盘 | 十语可发布；CROSS_TOOL_UPDATE=1 verify:tool 已绿 |
