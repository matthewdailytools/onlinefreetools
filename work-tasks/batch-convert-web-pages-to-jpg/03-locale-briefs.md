# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-convert-web-pages-to-jpg`  
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

技术专名（JPG、JPEG、URL、ZIP、HTML）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向。H1 禁止用 `page` 当产品名。H1 禁止参数枚举（视口、质量不进 H1）。

相对 PDF 邻页：每语 FAQ 须说清「这是网页截图 JPEG，不是 A4 PDF」；视口/质量是真实差异，不要写成「和 PDF 一样只是后缀不同」。

---

## 每语 brief

### en

- 检索词（3–5）：batch convert web pages to JPG; convert multiple webpages to JPG; webpage to jpg; url to jpg; URL list to JPG ZIP
- 语气：口语工具站
- Title / H1 方向：Batch convert web pages to JPG
- 按钮短词：Convert all; Download ZIP; Load sample; Clear
- 本地示例用词：help-center URLs, ticket screenshots, ZIP of JPEGs
- 可保留英文/符号：JPG, JPEG, URL, ZIP, HTML
- 额外禁用：H1=Webpage to JPG（单条 doorway）；H1 列 viewport/quality；整站 crawl
- SERP 竞品 title（1–3）：Webpage to JPG; URL to JPG; Convert webpage to image
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量把网页转成 JPG; 多个网页转 JPG; 网址转 JPG; 网页截图 JPEG; 多条链接导出长图
- 语气：口语工具站
- Title / H1 方向：批量把网页转成 JPG（不要把 batch 硬塞进中文 H1）
- 按钮短词：全部转换; 下载 ZIP; 载入样例; 清空
- 本地示例用词：工单贴图、帮助中心链接、手机首屏对照
- 可保留英文/符号：JPG、JPEG、URL、ZIP
- 额外禁用：网页转 JPG 光杆抢单条意图；「本地」含糊不提代抓；写成「和转 PDF 一样只换格式」
- SERP 竞品 title（1–3）：网页转 JPG; 网址转图片; 网页截图
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir varias páginas web a JPG; convertir URLs a JPG; captura de página web a JPEG; lista de URLs a JPG; varias webs a imagen
- 语气：口语工具站
- Title / H1 方向：Convertir varias páginas web a JPG
- 按钮短词：Convertir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：capturas para tickets, páginas de ayuda
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：altas y bajas；H1=Convertir HTML a JPG；página 当产品名
- SERP 竞品 title（1–3）：página web a JPG; URL a imagen
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل عدة صفحات ويب إلى JPG; تحويل رابط إلى صورة JPEG; لقطة صفحة ويب; قائمة روابط إلى JPG; تصدير صفحات متعددة كصور
- 语气：口语工具站
- Title / H1 方向：تحويل عدة صفحات ويب إلى JPG دفعة واحدة
- 按钮短词：تحويل الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：لقطات للتذاكر، صفحات المساعدة
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：H1 参数目录腔；صفحة كاسم منتج
- SERP 竞品 title（1–3）：تحويل صفحة ويب إلى JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter várias páginas da web em JPG; converter URL em JPG; captura de página para JPEG; lista de URLs em JPG; várias páginas em imagem
- 语气：口语工具站
- Title / H1 方向：Converter várias páginas da web em JPG
- 按钮短词：Converter tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：prints para chamados, páginas de ajuda
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：H1=Converter HTML em JPG
- SERP 竞品 title（1–3）：página da web em JPG; URL para imagem
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah beberapa halaman web jadi JPG; konversi URL ke JPG; tangkapan layar halaman web; daftar URL ke JPG; banyak tautan jadi gambar
- 语气：口语工具站
- Title / H1 方向：Ubah beberapa halaman web jadi JPG
- 按钮短词：Ubah semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：screenshot tiket, halaman bantuan
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：H1 参数枚举
- SERP 竞品 title（1–3）：halaman web ke JPG; URL ke gambar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir plusieurs pages web en JPG; convertir une URL en JPG; capture de page web en JPEG; liste d’URLs en JPG; plusieurs pages en image
- 语气：口语工具站
- Title / H1 方向：Convertir plusieurs pages web en JPG
- 按钮短词：Tout convertir; Télécharger le ZIP; Charger l’exemple; Effacer
- 本地示例用词：captures pour tickets, pages d’aide
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：H1=Convertir HTML en JPG
- SERP 竞品 title（1–3）：page web en JPG; URL vers image
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：ウェブページをまとめてJPGに; URLをJPGに変換; ページのスクリーンショット; 複数URLをJPEG; ウェブページを画像で保存
- 语气：口语工具站
- Title / H1 方向：ウェブページをまとめてJPGに変換
- 按钮短词：すべて変換; ZIPをダウンロード; サンプルを読み込む; クリア
- 本地示例用词：チケット用の画面、ヘルプページ
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：ユースケース；H1 に viewport/品質を並べる
- SERP 竞品 title（1–3）：ウェブページをJPGに; URLを画像に
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：пакетно сохранить веб-страницы в JPG; несколько URL в JPEG; скриншот страницы; список ссылок в JPG; веб-страница в картинку
- 语气：口语工具站
- Title / H1 方向：Пакетно сохранить веб-страницы в JPG
- 按钮短词：Конвертировать всё; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：скрины для тикетов, страницы справки
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：веб-страница в JPG; URL в изображение
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：mehrere Webseiten als JPG speichern; URLs in JPG umwandeln; Webseiten-Screenshot; URL-Liste zu JPEG; mehrere Links als Bild
- 语气：口语工具站
- Title / H1 方向：Mehrere Webseiten als JPG speichern
- 按钮短词：Alle umwandeln; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Screenshots für Tickets, Hilfeseiten
- 可保留英文/符号：JPG, JPEG, URL, ZIP
- 额外禁用：H1 参数枚举；Seite 当产品名
- SERP 竞品 title（1–3）：Webseite als JPG; URL zu Bild
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-07 | slug 定为 batch-convert-web-pages-to-jpg；H1 用 Batch convert web pages to JPG；Planner webpage to jpg / url to jpg absorb 进 desc·FAQ（一条 URL 也能转）；相对 PDF 邻页把视口/质量/整页首屏定为真实增量而非换后缀 | 主词进 H1；覆盖表、Ads 表与 0i 已回写 02；不拆单 URL doorway |
| 1 母版+lint | 2026-09-07 | 写 en 全键、catalog、Page、html2canvas JPEG 管线；视口/质量/整页首屏进首屏；主词进 H1 | title 为 Batch convert web pages to JPG，非参数枚举 |
| 1b 母版检索覆盖优化 | 2026-09-07 | 按 converter-serp-landing-seo 把母版 description 压到摘要窗口（前 160 字符含 Batch convert web pages to JPG、webpage to jpg、视口/ZIP）；How 改为先 Convert all，视口进 Advanced；hero 改用 desc | 主词仍在 H1；次词 webpage to jpg 落在 desc 前半与 FAQ |
| 2 按 brief 重写 | 2026-09-07 | 十语按当地检索词独立重写 H1/按钮/FAQ；每语写清与 PDF 批处理及 PDF 转 JPG 的差异；ar/ja/ru 未勾待母语抽查 | 各语 title 为当地任务句，非英模同构 |
| 2b 抽查语检索覆盖优化 | 2026-09-07 | 抽查 en,zh,es,ja：en 保留 Batch convert web pages to JPG；zh desc 补网址转 JPG；es 补 lista de URLs；ja 补 URLリスト；四语 meta 均改为 snippet 窗口且 How 动词对齐当地按钮 | en,zh,es,ja 主词在 H1，次词有落点 |
| 3 抽查+禁词+lint | 2026-09-07 | 禁词表全扫；H1 无 page 当产品名、无参数枚举；隐私写清代抓一次不落盘；相对 PDF 邻页写 vis 口与整页首屏 | 十语可发布，待 verify:tool |
