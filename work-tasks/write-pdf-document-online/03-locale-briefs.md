# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`write-pdf-document-online`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（副标题逗号分段 ≤ 2；不罗列全部纸张 / 字体）
- [x] 隐私只在 FAQ q6 说清事实（浏览器内生成、草稿仅存本机），不当卖点堆砌
- [x] 禁「Rules 节 / 见规则节」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地术语：zh 标题 / 小标题、项目符号列表、编号列表、分页、页边距、行距、页码；ja 見出し、箇条書き、番号付きリスト、改ページ、余白、行間、ページ番号；es título, viñetas, lista numerada, salto de página, márgenes, interlineado, número de página；pt título, marcadores, lista numerada, quebra de página, margens, espaçamento entre linhas, numeração de páginas；fr titre, puces, liste numérotée, saut de page, marges, interligne, numéros de page；de Überschrift, Aufzählung, nummerierte Liste, Seitenumbruch, Seitenränder, Zeilenabstand, Seitenzahlen；ru заголовок, маркированный список, нумерованный список, разрыв страницы, поля, межстрочный интервал, номера страниц；id judul, daftar berpoin, daftar bernomor, pemisah halaman, margin, spasi baris, nomor halaman；ar عنوان، قائمة نقطية، قائمة مرقمة، فاصل صفحات، الهوامش، تباعد الأسطر، أرقام الصفحات
- [x] 行首标记 `#` `##` `-` `1.` `---` 各语原样保留（是语法，不翻译）
- [x] 样例文案按语种本地化（人名、日期、货币写法）；zh / ja / ar 样例本身即演示栅格化行；样例中 `¶` 为换行标记，必须保留
- [x] 纸张名：US Letter / Legal 可写当地通称（zh 美国信纸、ja レターサイズ、de US-Letter 等）；尺寸数字不改
- [x] 小数逗号语种（de / es / pt / fr / ru / id）：行距 1,15、16,56 pt、8,5 × 11 in
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 固定数字（各语不得改值）

见 `02-tool-info.md`「固定数字」：A4、正常边距、12 pt、1.15 → 行高 16.56 pt、每页 42 行；Helvetica 约 82 字 / 行、Times 约 88、Courier 62；Letter、Times 12、1.5 → 每页 30 行；样例 1 → 1 页「1 / 1」，样例 2 → 2 页「1 / 2」「2 / 2」（各语样例长度须保证页数一致）。

## 每语 brief

### en
- 检索词：write a pdf document online；write pdf online；text to pdf；create pdf from text；pdf with page numbers
- 语气：口语
- Title：Write a PDF Document Online — Type Text and Get a Multi-Page PDF With Headings, Lists and Page Numbers
- 按钮：Create PDF / Download PDF / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：在线写PDF；文字转PDF；在线生成PDF文档；怎么把文字做成PDF；txt转pdf
- 语气：口语
- Title：在线写 PDF 文档 — 输入文字就能生成带标题、列表和页码的多页 PDF
- 按钮：生成 PDF / 下载 PDF / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：escribir un pdf online；crear pdf desde texto；convertir texto a pdf；hacer un documento pdf
- 语气：口语（tú）
- Title：Escribir un documento PDF online — escribe el texto y obtén un PDF de varias páginas con títulos, listas y números de página
- 按钮：Crear PDF / Descargar PDF / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：كتابة ملف pdf أونلاين；تحويل النص إلى pdf；إنشاء ملف pdf；عمل مستند pdf
- 语气：فصحى مبسطة；拉丁数字
- Title：كتابة مستند PDF أونلاين — اكتب النص واحصل على ملف PDF متعدد الصفحات بعناوين وقوائم وأرقام صفحات
- 按钮：إنشاء PDF / تنزيل PDF / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：escrever pdf online；criar pdf a partir de texto；converter texto em pdf；fazer documento em pdf
- 语气：口语（pt-BR）
- Title：Escrever documento PDF online — digite o texto e gere um PDF de várias páginas com títulos, listas e numeração
- 按钮：Criar PDF / Baixar PDF / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：membuat pdf online；tulis pdf online；ubah teks ke pdf；cara membuat dokumen pdf
- 语气：口语（Anda）
- Title：Tulis Dokumen PDF Online — Ketik Teks dan Dapatkan PDF Beberapa Halaman dengan Judul, Daftar dan Nomor Halaman
- 按钮：Buat PDF / Unduh PDF / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：écrire un pdf en ligne；créer un pdf à partir de texte；convertir texte en pdf；rédiger un document pdf
- 语气：vouvoiement
- Title：Écrire un document PDF en ligne — tapez votre texte et obtenez un PDF de plusieurs pages avec titres, listes et numéros de page
- 按钮：Créer le PDF / Télécharger le PDF / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：PDF 作成 オンライン；テキスト PDF 変換；文章 PDF 作り方；PDF 文書 作成
- 语气：です・ます
- Title：オンラインでPDF文書を作成 — テキストを入力して見出し・箇条書き・ページ番号つきの複数ページPDFに
- 按钮：PDFを作成 / PDFをダウンロード / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：создать pdf онлайн из текста；написать документ pdf；текст в pdf；как сделать pdf файл
- 语气：нейтральный
- Title：Написать PDF-документ онлайн — введите текст и получите многостраничный PDF с заголовками, списками и номерами страниц
- 按钮：Создать PDF / Скачать PDF / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：PDF online schreiben；PDF aus Text erstellen；Text in PDF umwandeln；PDF Dokument erstellen
- 语气：Sie-Form
- Title：PDF-Dokument online schreiben — Text eingeben und ein mehrseitiges PDF mit Überschriften, Listen und Seitenzahlen erhalten
- 按钮：PDF erstellen / PDF herunterladen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-15 | 保留 slug；H1 由裸主词扩为动作 + 产物（多页、标题、列表、页码）；02 新增与盖字 / HTML 转 PDF / PDF 转文字工具的分工、同意图相关搜索全表（写 PDF / 文字转 PDF / 页码 / 纸张边距 / 非拉丁文字吸；编辑已有 PDF、Word / HTML 转 PDF 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-15 | en title 含 write a PDF document online + multi-page + headings, lists and page numbers；desc 写 type or paste、headings、lists、A4 / Letter、margins、font、line spacing、numbered pages、CJK / Arabic；how to → FAQ q1；标记 → FAQ q2；多语种 → FAQ q3；可搜索 → FAQ q4；纸张边距 → FAQ q5；隐私 → FAQ q6；编辑已有 PDF → FAQ q7 | 主词在 H1；次词逐一有落点；十语标题经检查 |
| 2b 十语检索向重写（改写） | 2026-10-15 | en / zh / es / ja / ar / pt / id / fr / ru / de 按各语 brief 独立重写：title 用当地说法；样例按语种本地化（zh / ja / ar 样例演示栅格化行）；小数逗号语种数字本地化；FAQ 与 Why choose 条序随语种调整；抽查 en,zh,de | 十语键集与 en 一致；示例页数与页面输出一致 |

### 历史（2026-09-03 初版）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 0b | 2026-09-03 | 保留 write-pdf-document-online；title 定为「Write a PDF document online」 | 覆盖表初版 |
| 初版 1–3 | 2026-09-03 | 十语首稿 + lint | 上线；2026-10-15 审计判定过薄（模板句、按字符断行、无非拉丁文字），已重写 |
