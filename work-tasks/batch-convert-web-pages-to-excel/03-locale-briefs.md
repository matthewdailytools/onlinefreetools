# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`batch-convert-web-pages-to-excel`  
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

技术专名（HTML、Excel、XLSX、URL、table）可保留。H1 禁止用 `page` 当产品名。禁止承诺 CSS 像素级还原。禁止写成网页截图、A4 PDF 或 Word 文稿。禁止进攻 Excel Online 套件词。

相对邻页：每语须写清「HTML 表格单元格进一本工作簿」vs 视口 PNG/JPG vs A4 PDF vs 可编辑 Word 段落 vs 已有 CSV。

---

## 每语 brief

### en

- 检索词（3–5）：batch convert web pages to excel; convert web page to excel; html table to excel; convert html to excel; html to xlsx
- 语气：口语工具站
- Title / H1 方向：Batch convert web pages to Excel
- 按钮短词：Convert all; Download Excel; Load sample; Clear
- 本地示例用词：price list table, stock grid, sheets in one workbook
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：H1=HTML to Excel 光杆 doorway；写成 screenshot-in-Excel；Excel Online
- SERP 竞品 title（1–3）：Webpage to Excel; HTML table to Excel; Convert HTML to XLSX
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量把网页转成 Excel; 网页转 Excel; HTML 表格转 Excel; HTML 转 xlsx; 把网页表格导出到 Excel
- 语气：口语工具站
- Title / H1 方向：批量把网页转成 Excel
- 按钮短词：全部转换; 下载 Excel; 载入样例; 清空
- 本地示例用词：价目表、库存表、一本工作簿里多张表
- 可保留英文/符号：HTML、Excel、XLSX、URL
- 额外禁用：写成截图塞进格子；「本地」不提代抓；在线 Excel 套件
- SERP 竞品 title（1–3）：网页转Excel; HTML表格转Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir páginas web a Excel por lotes; HTML a Excel; tabla HTML a Excel; exportar tabla a Excel; página web a Excel
- 语气：口语工具站
- Title / H1 方向：Convertir páginas web a Excel por lotes
- 按钮短词：Convertir todo; Descargar Excel; Cargar ejemplo; Borrar
- 本地示例用词：lista de precios, inventario, varias hojas
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：altas y bajas；página 当产品名；captura en Excel
- SERP 竞品 title（1–3）：HTML a Excel; tabla HTML a Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل صفحات الويب إلى إكسل دفعة واحدة; جدول HTML إلى إكسل; تحويل HTML إلى إكسل; تصدير جدول إلى إكسل
- 语气：口语工具站
- Title / H1 方向：تحويل صفحات الويب إلى إكسل على دفعات
- 按钮短词：تحويل الكل; تنزيل إكسل; تحميل مثال; مسح
- 本地示例用词：قائمة أسعار، مخزون، أوراق متعددة
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：صفحة كاسم منتج
- SERP 竞品 title（1–3）：HTML إلى Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter páginas web para Excel em lote; HTML para Excel; tabela HTML para Excel; exportar tabela para Excel
- 语气：口语工具站
- Title / H1 方向：Converter páginas web em Excel em lote
- 按钮短词：Converter tudo; Baixar Excel; Carregar exemplo; Limpar
- 本地示例用词：lista de preços, estoque, várias planilhas
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：página 当产品名
- SERP 竞品 title（1–3）：HTML para Excel; tabela HTML para Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah banyak halaman web ke Excel; HTML ke Excel; tabel HTML ke Excel; ekspor tabel ke Excel
- 语气：口语工具站
- Title / H1 方向：Ubah banyak halaman web menjadi Excel
- 按钮短词：Ubah semua; Unduh Excel; Muat contoh; Hapus
- 本地示例用词：daftar harga, stok, banyak sheet
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：screenshot ke Excel
- SERP 竞品 title（1–3）：HTML ke Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir des pages web en Excel par lot; HTML vers Excel; tableau HTML vers Excel; exporter un tableau vers Excel
- 语气：口语工具站
- Title / H1 方向：Convertir des pages web en Excel par lots
- 按钮短词：Tout convertir; Télécharger Excel; Charger un exemple; Effacer
- 本地示例用词：liste de prix, stock, plusieurs feuilles
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：page 当产品名；capture dans Excel
- SERP 竞品 title（1–3）：HTML vers Excel; tableau HTML vers Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：ウェブページをまとめてExcelにする; HTMLテーブルをExcelに; HTMLをExcelに変換; 表をExcelに書き出す
- 语气：口语工具站
- Title / H1 方向：ウェブページをまとめてExcelにする
- 按钮短词：すべて変換; Excelをダウンロード; サンプル読込; クリア
- 本地示例用词：価格表、在庫表、ブック内の複数シート
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：page 当产品名；スクショをExcelへ
- SERP 竞品 title（1–3）：HTMLをExcelに変換
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：пакетно преобразовать веб-страницы в Excel; HTML-таблица в Excel; HTML в Excel; экспорт таблицы в Excel
- 语气：口语工具站
- Title / H1 方向：Пакетно преобразовать веб-страницы в Excel
- 按钮短词：Конвертировать всё; Скачать Excel; Загрузить пример; Очистить
- 本地示例用词：прайс, склад, несколько листов
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：скриншот в Excel
- SERP 竞品 title（1–3）：HTML в Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Webseiten gesammelt nach Excel umwandeln; HTML-Tabelle nach Excel; HTML in Excel; Tabelle nach Excel exportieren
- 语气：口语工具站
- Title / H1 方向：Webseiten gesammelt in Excel umwandeln
- 按钮短词：Alle konvertieren; Excel herunterladen; Beispiel laden; Leeren
- 本地示例用词：Preisliste, Bestand, mehrere Blätter
- 可保留英文/符号：HTML, Excel, XLSX, URL
- 额外禁用：Seite als Produktname；Screenshot in Excel
- SERP 竞品 title（1–3）：HTML zu Excel; HTML-Tabelle zu Excel
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-07 | slug 定为 batch-convert-web-pages-to-excel；H1 用批量任务句；Planner webpage to excel absorb 进 URL 列表；html table / html to excel 进 Paste HTML Tab；相对截图/PDF/Word 把「表格单元格进一本工作簿」定为增量 | 主词进 H1；覆盖表、Ads 表与 0i 已回写 02；不拆 html-to-excel doorway |
| 1 母版+lint | 2026-09-07 | 写 en 全键、catalog、Page；默认 URL 列表 + Paste HTML Tab；SheetJS 抽 table；进页 loadSample 两张本地表 | title 为 Batch convert web pages to Excel，非参数枚举 |
| 1b 母版检索覆盖优化 | 2026-09-07 | 母版 description 前 160 字符含 Batch convert web pages to Excel、html table to excel、convert html to excel；How 先 Convert all 再 Paste HTML；hero 用短句 desc | 主词仍在 H1；次词 webpage to excel / html table 落在 desc 与 FAQ |
| 2 按 brief 重写 | 2026-09-07 | 十语按当地检索词独立重写 H1/按钮/FAQ；每语写清 HTML 表格进一本工作簿 vs 截图 ZIP vs A4 PDF vs Word 段落 vs 已有 CSV；ar/ja/ru 未勾待母语抽查 | 各语 title 为当地任务句，非英模同构 |
| 2b 抽查语检索覆盖优化 | 2026-09-07 | 抽查 en,zh,es,ja：desc 前半含 batch convert / 批量把网页转成 Excel / HTML 表格；FAQ 划界 Word、PDF、JPG 与 pdf table；html to excel 落在 Paste HTML How | en,zh,es,ja 主词在 H1；去掉 title 后正文仍明显是表格单元格进 .xlsx |
| 3 抽查+禁词+lint | 2026-09-07 | 禁词表全扫；H1 无 page 当产品名；隐私写清粘贴留标签页、URL 代抓一次不落盘；未进攻 Excel Online | 十语可发布 |
