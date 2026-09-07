# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`batch-convert-web-pages-to-png`  
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
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（PNG、URL、ZIP、HTML）可保留。H1 禁止用 `page` 当产品名。H1 禁止参数枚举（视口、透明底、倍率不进 H1）。

相对 JPG 邻页：每语 FAQ 须说清「这是无损 PNG（锐利边/可选透明底），不是 JPEG 聊天图」。相对 PDF：不是 A4 分页。

---

## 每语 brief

### en

- 检索词（3–5）：batch convert web pages to PNG; convert multiple webpages to PNG; webpage to png; convert webpage to png; lossless UI screenshot
- 语气：口语工具站
- Title / H1 方向：Batch convert web pages to PNG
- 按钮短词：Convert all; Download ZIP; Load sample; Clear
- 本地示例用词：UI component pages, sharp 1px borders, transparent overlay
- 可保留英文/符号：PNG, URL, ZIP, HTML
- 额外禁用：H1=Webpage to PNG doorway；H1 列 viewport/scale；写成 JPEG with png suffix
- SERP 竞品 title（1–3）：Webpage to PNG; URL to PNG; Convert webpage to image
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量把网页转成 PNG; 多个网页转 PNG; 网址转 PNG; 网页截图无损; 界面截图透明底
- 语气：口语工具站
- Title / H1 方向：批量把网页转成 PNG
- 按钮短词：全部转换; 下载 ZIP; 载入样例; 清空
- 本地示例用词：组件库对齐、1 像素描边、半透明浮层
- 可保留英文/符号：PNG、URL、ZIP
- 额外禁用：写成「和 JPG 一样只换后缀」；「本地」含糊不提代抓
- SERP 竞品 title（1–3）：网页转 PNG; 网址转图片; 网页截图
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir varias páginas web a PNG; captura de web a PNG; URL a PNG sin pérdida; captura de interfaz nítida; PNG transparente de página
- 语气：口语工具站
- Title / H1 方向：Convertir varias páginas web a PNG
- 按钮短词：Convertir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：bordes de 1 px, capa semitransparente
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：altas y bajas；página 当产品名
- SERP 竞品 title（1–3）：página web a PNG; URL a imagen
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل عدة صفحات ويب إلى PNG; لقطة صفحة ويب بدون فقدان; رابط إلى PNG; لقطة واجهة حادة; PNG شفاف
- 语气：口语工具站
- Title / H1 方向：تحويل عدة صفحات ويب إلى PNG دفعة واحدة
- 按钮短词：تحويل الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：حدود حادة، طبقة شفافة
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：صفحة كاسم منتج
- SERP 竞品 title（1–3）：صفحة ويب إلى PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter várias páginas web para PNG; captura de página em PNG; URL para PNG sem perda; print de interface nítida; PNG transparente
- 语气：口语工具站
- Title / H1 方向：Converter várias páginas web para PNG
- 按钮短词：Converter tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：borda de 1 px, overlay translúcido
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：página 当产品名
- SERP 竞品 title（1–3）：página web para PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah banyak halaman web ke PNG; tangkapan layar web PNG; URL ke PNG tanpa lossy; screenshot UI tajam; PNG transparan
- 语气：口语工具站
- Title / H1 方向：Ubah banyak halaman web menjadi PNG
- 按钮短词：Ubah semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：tepi 1 px, overlay transparan
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：halaman 当产品名
- SERP 竞品 title（1–3）：halaman web ke PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir plusieurs pages web en PNG; capture de page en PNG; URL vers PNG sans perte; capture d’interface nette; PNG transparent
- 语气：口语工具站
- Title / H1 方向：Convertir plusieurs pages web en PNG
- 按钮短词：Tout convertir; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：bord 1 px, calque semi-transparent
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：page 当产品名
- SERP 竞品 title（1–3）：page web en PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：ウェブページをまとめてPNG; 複数URLをPNG; ウェブページをPNGに変換; 画面キャプチャ 透過PNG; 文字がにじまないスクリーンショット
- 语气：口语工具站
- Title / H1 方向：ウェブページをまとめて PNG にする
- 按钮短词：すべて変換; ZIPをダウンロード; サンプルを読み込む; クリア
- 本地示例用词：1px の枠、半透明オーバーレイ
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：ページを製品名にしない；ユースケース空壳
- SERP 竞品 title（1–3）：ウェブページをPNGに変換
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：пакетно сохранить веб-страницы в PNG; несколько URL в PNG; страница в PNG без потерь; скриншот интерфейса; прозрачный PNG страницы
- 语气：口语工具站
- Title / H1 方向：Пакетно сохранить веб-страницы в PNG
- 按钮短词：Конвертировать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：чёткая рамка 1 px, полупрозрачный слой
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：страница как имя продукта
- SERP 竞品 title（1–3）：веб-страница в PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：mehrere Webseiten in PNG umwandeln; Webseite als PNG speichern; URL zu PNG verlustfrei; scharfes UI-Screenshot; transparentes PNG
- 语气：口语工具站
- Title / H1 方向：Mehrere Webseiten in PNG umwandeln
- 按钮短词：Alle konvertieren; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：1-px-Kante, halbtransparente Ebene
- 可保留英文/符号：PNG, URL, ZIP
- 额外禁用：Seite als Produktname
- SERP 竞品 title（1–3）：Webseite zu PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-07 | slug 定为 batch-convert-web-pages-to-png；H1 用 Batch convert web pages to PNG；Planner webpage to png absorb 进 desc·FAQ；相对 JPG 把无损/透明底/1×2× 定为增量，禁止只换后缀 | 主词进 H1；覆盖表、Ads 表与 0i 已回写 02；不拆单 URL doorway |
| 1 母版+lint | 2026-09-07 | 写 en 全键、catalog、Page；html2canvas 导出 image/png；JPEG 质量滑条换成白底/透明与 1×/2×；样例改为棋盘格+1px 边的 UI 页 | title 为 Batch convert web pages to PNG，非参数枚举 |
| 1b 母版检索覆盖优化 | 2026-09-07 | 母版 description 前 160 字符含 Batch convert web pages to PNG、webpage to png、lossless/ZIP；How 默认 Convert all 后再点 Advanced 的透明底与 2x；hero 用短句 desc | 主词仍在 H1；次词 webpage to png 落在 desc 前半与 FAQ |
| 2 按 brief 重写 | 2026-09-07 | 十语按当地检索词独立重写 H1/按钮/FAQ；每语写清无损 PNG、透明底、1×2× 与 JPG/PDF 差异；ar/ja/ru 未勾待母语抽查 | 各语 title 为当地任务句，非英模同构 |
| 2b 抽查语检索覆盖优化 | 2026-09-07 | 抽查 en,zh,es,ja：desc 前半含无损 PNG / 网页转 PNG；FAQ 首题在 zh 改为与 JPG 差异、es 保留单 URL、ja 强调文字不发糊；次词 webpage to png 各语落在 desc+FAQ | en,zh,es,ja 主词在 H1；去掉 title 后正文仍明显是锐利 PNG 而非 JPEG 或 A4 |
| 3 抽查+禁词+lint | 2026-09-07 | 禁词表全扫；H1 无 page 当产品名、无参数枚举；隐私写清代抓一次不落盘；透明底边界写进 FAQ | 十语可发布，待 verify:tool |
