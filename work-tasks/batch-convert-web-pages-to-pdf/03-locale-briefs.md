# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-convert-web-pages-to-pdf`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：须说清「转换在本标签页」+「网址代抓一次、不落盘」（本工具 `localProcessing: false`）
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02`/`notes` 有覆盖表；见 localization 步 0b）——勾工程/页面/上线清单前必做
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（PDF、URL、ZIP、HTML）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向。H1 禁止用 `page` 当产品名。

---

## 每语 brief

### en

- 检索词（3–5）：batch convert web pages to PDF; convert multiple webpages to PDF; save several web pages as PDF; URL list to PDF; multiple URLs to PDF ZIP
- 语气：口语工具站
- Title / H1 方向：Batch convert web pages to PDF
- 按钮短词：Convert all; Download ZIP; Load sample; Clear
- 本地示例用词：help-center URLs, policy pages, ZIP of PDFs
- 可保留英文/符号：PDF, URL, ZIP, HTML
- 额外禁用：H1=Convert HTML to PDF；整站 crawl；参数枚举（wait seconds 不进 H1）
- SERP 竞品 title（1–3）：URL to PDF; Webpage to PDF; HTML to PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量把网页转成 PDF; 多个网页转 PDF; 网址列表转 PDF; 网页批量保存为 PDF; 多条链接导出 PDF
- 语气：口语工具站
- Title / H1 方向：批量把网页转成 PDF（不要把 batch 硬塞进中文 H1）
- 按钮短词：全部转换; 下载 ZIP; 载入样例; 清空
- 本地示例用词：帮助中心链接、政策页归档
- 可保留英文/符号：PDF、URL、ZIP
- 额外禁用：网页转 PDF 光杆抢邻页；「本地」含糊不提代抓
- SERP 竞品 title（1–3）：网页转 PDF; URL 转 PDF; HTML 转 PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir varias páginas web a PDF; convertir URLs a PDF en lote; guardar varias webs como PDF; lista de URLs a PDF; varias páginas a PDF
- 语气：口语工具站
- Title / H1 方向：Convertir varias páginas web a PDF
- 按钮短词：Convertir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：páginas de ayuda, políticas
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：altas y bajas；H1=Convertir HTML a PDF
- SERP 竞品 title（1–3）：URL a PDF; Página web a PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل عدة صفحات ويب إلى PDF; تحويل روابط إلى PDF دفعة واحدة; حفظ صفحات الموقع كـ PDF; قائمة روابط إلى PDF; تصدير صفحات متعددة PDF
- 语气：口语工具站
- Title / H1 方向：تحويل عدة صفحات ويب إلى PDF دفعة واحدة
- 按钮短词：تحويل الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：صفحات المساعدة، سياسات
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：H1 参数目录腔；صفحة كاسم منتج
- SERP 竞品 title（1–3）：تحويل صفحة ويب إلى PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter várias páginas da web em PDF; converter URLs em PDF em lote; salvar várias páginas como PDF; lista de URLs em PDF; várias páginas para PDF
- 语气：口语工具站
- Title / H1 方向：Converter várias páginas da web em PDF
- 按钮短词：Converter tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：páginas de ajuda, políticas
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：H1=Converter HTML em PDF
- SERP 竞品 title（1–3）：URL para PDF; Página da web em PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah banyak halaman web jadi PDF; konversi beberapa URL ke PDF; simpan beberapa halaman web sebagai PDF; daftar URL ke PDF; batch halaman web ke PDF
- 语气：口语工具站
- Title / H1 方向：Ubah banyak halaman web jadi PDF
- 按钮短词：Konversi semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：halaman bantuan, kebijakan
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：H1=Ubah HTML jadi PDF；halaman 当产品名
- SERP 竞品 title（1–3）：URL ke PDF; Halaman web ke PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir plusieurs pages web en PDF; convertir des URL en PDF en lot; enregistrer plusieurs pages en PDF; liste d’URL vers PDF; plusieurs pages web en PDF
- 语气：口语工具站
- Title / H1 方向：Convertir plusieurs pages web en PDF
- 按钮短词：Tout convertir; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：pages d’aide, politiques
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：H1=Convertir HTML en PDF；page 当产品名
- SERP 竞品 title（1–3）：URL vers PDF; Page web en PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：複数のウェブページをPDFに変換; URLをまとめてPDF; ウェブページを一括PDF化; URLリストをPDF; 複数URLをPDFで保存
- 语气：口语工具站
- Title / H1 方向：複数のウェブページをPDFにまとめて変換
- 按钮短词：すべて変換; ZIPをダウンロード; サンプル読込; クリア
- 本地示例用词：ヘルプページ、ポリシーページ
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：ユースケース；H1=HTMLをPDFに変換
- SERP 竞品 title（1–3）：URLをPDFに変換; ウェブページをPDF
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：пакетно сохранить веб-страницы в PDF; несколько страниц сайта в PDF; список URL в PDF; конвертировать много веб-страниц в PDF; архив PDF из ссылок
- 语气：口语工具站
- Title / H1 方向：Пакетно сохранить веб-страницы в PDF
- 按钮短词：Конвертировать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：страницы справки, политики
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：H1=HTML в PDF；страница 当产品名
- SERP 竞品 title（1–3）：URL в PDF; Веб-страница в PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：mehrere Webseiten als PDF speichern; URLs gesammelt in PDF umwandeln; Webseiten stapelweise als PDF; URL-Liste zu PDF; mehrere Links als PDF
- 语气：口语工具站
- Title / H1 方向：Mehrere Webseiten als PDF speichern
- 按钮短词：Alle umwandeln; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Hilfeseiten, Richtlinien
- 可保留英文/符号：PDF, URL, ZIP
- 额外禁用：H1=HTML in PDF umwandeln；Seite 当产品名
- SERP 竞品 title（1–3）：URL zu PDF; Webseite als PDF
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-06 | slug 定为 batch-convert-web-pages-to-pdf；H1 用 Batch convert web pages to PDF；次词 multiple webpages / URL list / ZIP 写入 desc·FAQ·Use cases；单页 HTML 有意不满足并链邻页；意图审查总判满足 | 主词进 H1；覆盖表与 0i 已回写 02 |
| 1 母版+lint | 2026-09-06 | 写 en 全键、catalog、Page、截图客户端；主词进 H1 | title 为 Batch convert web pages to PDF，非参数枚举 |
| 1b 母版检索覆盖优化 | 2026-09-06 | 母版 desc 补 URL list 与 convert multiple webpages to PDF；ZIP 与邻页划界留在 FAQ | 主词仍在 H1；次词落入 desc/FAQ/usecase |
| 2 按 brief 重写 | 2026-09-06 | 十语按当地检索词独立重写 H1/按钮/FAQ，禁止英模同构；ar/ja/ru 未勾待母语抽查 | 各语 title 为当地任务句 |
| 2b 抽查语检索覆盖优化 | 2026-09-06 | 抽查 en,zh,es,ja：en 保留 Batch convert web pages to PDF；zh desc 补网址列表；es 补 lista de URLs；ja 补 URLリスト；次词仍在 FAQ/usecase | en,zh,es,ja 主词在 H1，次词有落点 |
| 3 抽查+禁词+lint | 2026-09-06 | 禁词表全扫；H1 无 page 当产品名、无参数枚举；隐私写清代抓一次不落盘 | 十语可发布，待 verify:tool |
