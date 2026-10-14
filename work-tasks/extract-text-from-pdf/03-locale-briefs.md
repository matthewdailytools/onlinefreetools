# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`extract-text-from-pdf`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把版式 / 分隔 / 页码 / 换行符串进 H1）
- [x] 隐私只作事实陈述（FAQ「是否上传」），不当首要卖点
- [x] 禁「Rules 节 / 见下文公式」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地说法：zh PDF 提取文字 / PDF 转 TXT / 复制 PDF 文字不断行；ja PDF テキスト 抽出 / PDF 文字 コピー 改行；es extraer texto de un PDF / PDF a texto；pt extrair texto de PDF / PDF para texto；fr extraire le texte d'un PDF / PDF en texte；de Text aus PDF extrahieren / PDF in Text umwandeln；ru извлечь текст из PDF / PDF в текст；id ekstrak teks dari PDF / PDF ke teks；ar استخراج النص من PDF / تحويل PDF إلى نص
- [x] 数字固定各语不得改动：4 页样例、页 1–3 / 第 4 页、1.5 倍行距、半个字高、2 倍字号、顶 / 底 2 行、≥ 3 页、60%、20 字符、6 行页眉页脚、harden- + ing → hardening、Tomato / Mar 15 / May 20、1-3, 5, 8-、50 MB
- [x] `meta_tpl` 的 `{name}` `{pages}` `{size}`、`marker_tpl` 的 `{n}`、`err_range_tpl` 的 `{v}` `{total}`、`warn_scanned_tpl` 的 `{pages}`、`status_reading_tpl` 的 `{i}` `{n}`、`stats_tpl` 的 `{pages}` `{words}` `{chars}` `{lines}`、`removed_tpl` 的 `{n}` 原样保留（模板用「标签: 值」写法，避免单复数）
- [x] 样例为英文 PDF：Example / How / Why choose 中引用的样例原文（harden- / ing、hardening、Tomato[Tab]Mar 15[Tab]May 20、Page 1 of 4）保持英文
- [x] How / FAQ 中引用的按钮、选项（Paragraphs、Keep the PDF’s lines、Keep columns aligned、Choose pages、More options、双栏开关）须与该语控件文案一致
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：extract text from pdf；pdf to text；pdf to txt；copy text from pdf without line breaks；pdf table to excel
- 语气：口语工具站
- Title：Extract Text from PDF — Copy PDF Text as Clean Paragraphs or Save It as a TXT File
- 按钮：Extract text / Download .txt / Copy text / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：PDF 提取文字；PDF 转 TXT；复制 PDF 文字不断行；PDF 表格复制到 Excel；PDF 复制不了文字
- 语气：口语
- Title：PDF 提取文字 — 复制 PDF 文本不再断行，也能导出成 TXT 文件
- 按钮：提取文字 / 下载 .txt / 复制文字 / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：PDF テキスト 抽出；PDF 文字 コピー 改行；PDF テキスト化；PDF 表 エクセル 貼り付け；PDF 文字 コピーできない
- 语气：です・ます
- Title：PDFからテキストを抽出 — 改行が崩れずにコピーでき、TXTでも保存できる
- 按钮：テキストを抽出 / .txtをダウンロード / テキストをコピー / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：استخراج النص من PDF；تحويل PDF إلى نص；نسخ النص من PDF；تحويل جدول PDF إلى Excel
- 语气：فصحى مبسطة
- Title：استخراج النص من PDF — انسخ النص في فقرات سليمة أو احفظه كملف TXT
- 按钮：استخراج النص / تنزيل ‎.txt / نسخ النص / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：extraer texto de un PDF；PDF a texto；PDF a TXT；copiar texto de PDF sin saltos de línea；tabla de PDF a Excel
- 语气：tú
- Title：Extraer texto de un PDF — Copia el texto en párrafos limpios o guárdalo como TXT
- 按钮：Extraer texto / Descargar .txt / Copiar texto / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：extrair texto de PDF；PDF para texto；PDF para TXT；copiar texto de PDF sem quebra de linha；tabela de PDF para Excel
- 语气：você（pt-BR）
- Title：Extrair texto de PDF — Copie o texto em parágrafos limpos ou salve como TXT
- 按钮：Extrair texto / Baixar .txt / Copiar texto / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：extraire le texte d'un PDF；PDF en texte；PDF en TXT；copier texte PDF sans retour à la ligne；tableau PDF vers Excel
- 语气：vouvoiement
- Title：Extraire le texte d'un PDF — Copiez-le en paragraphes propres ou enregistrez-le en TXT
- 按钮：Extraire le texte / Télécharger le .txt / Copier le texte / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：Text aus PDF extrahieren；PDF in Text umwandeln；PDF in TXT；PDF Text kopieren ohne Zeilenumbruch；PDF Tabelle in Excel
- 语气：Sie-Form
- Title：Text aus PDF extrahieren — Ohne Zeilenumbruch-Chaos kopieren oder als TXT speichern
- 按钮：Text extrahieren / .txt herunterladen / Text kopieren / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：извлечь текст из PDF；PDF в текст；PDF в TXT；скопировать текст из PDF без переносов；таблица из PDF в Excel
- 语气：нейтральный，на «вы»
- Title：Извлечь текст из PDF — скопируйте его ровными абзацами или сохраните в TXT
- 按钮：Извлечь текст / Скачать .txt / Копировать текст / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：ekstrak teks dari PDF；PDF ke teks；PDF ke TXT；salin teks PDF tanpa putus baris；tabel PDF ke Excel
- 语气：Anda
- Title：Ekstrak Teks dari PDF — Salin Teks dalam Paragraf Rapi atau Simpan sebagai TXT
- 按钮：Ekstrak teks / Unduh .txt / Salin teks / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Extract text from a PDF」扩为主词 + 不断行复制 + 存 TXT；02 新增同意图相关搜索全表（pdf to text / txt、不断行复制、表格到 Excel、指定页、无文字、密码、双栏吸；OCR、转 Word、转 Markdown、去密码不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 extract text from pdf + copy … clean paragraphs + TXT；desc 写段落、连字符、双栏、页眉页脚与样例结果；line breaks → FAQ q1 / Why choose 1；scanned → FAQ q2；pages → FAQ q3；table → FAQ q4 / Use case 3；password → FAQ q6；columns → FAQ q7 / rules 4 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（PDF 提取文字、PDFからテキストを抽出、extraer texto de un PDF、Text aus PDF extrahieren 等）；数字与样例原文不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-09-03 | pdf.js 按 y 分行 + 下载 .txt 立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
