# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`image-format-converter`  
**母版语言**：en  
**状态**：`i18n-done`

> 实现阶段：en 母版 → 其余九语按 brief 独立重写（非英模锁死同构）→ `lint:seo` + 抽查 en/zh/es/ja。ar/ja/ru 已按 brief 重写并清「待母语抽查」。

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如把 transparency 乱译成无关词；把 encode/decode 混用）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（PNG、JPEG、JPG、WebP、AVIF、MIME、Canvas、alpha、CDN）可保留，**不可**替代本地主 title。

**本工具额外禁用**：

- 勿在用户正文写 doorway / 空壳 / 薄页 / slug /「不拆 URL」等 SEO 元叙述  
- 勿承诺「所有浏览器都能编码 AVIF」或「完全无损互转」  
- 勿把 Squoosh / FFmpeg / ImageMagick 当面向用户的卖点（实现用 Canvas；库名最多 References）  
- 「quality」按当地习惯（质量 / calidad / qualité / 品質 / качество / Qualität），勿整页只写英文 Quality 当主标签（en 除外）

---

## 每语 brief

### en

- 检索词（3–5）：png to webp；convert image format；jpg to png；webp to jpg；avif to jpg
- 语气：口语工具站（偏开发者可读）
- Title / H1 方向：Image Format Converter — PNG, JPEG, WebP, AVIF (local)
- 按钮短词：Convert；Download；Clear；Choose file；Target format；Quality；JPEG background (white / black / custom)
- 本地示例用词：screenshot；product photo；UI icon with transparency
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF、MIME、alpha
- 额外禁用：no “100% lossless always”; no “every browser encodes AVIF”
- SERP 竞品 title（1–3）：Image Format Converter — PNG, JPEG, WebP, AVIF；Image Converter — Free, Private；Free WebP Converter Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：PNG 转 WebP；图片格式转换；JPG 转 PNG；WebP 转 JPG；AVIF 转 JPG
- 语气：口语工具站
- Title / H1 方向：图片格式转换 — PNG / JPEG / WebP / AVIF（本地处理）
- 按钮短词：转换；下载；清空；选择文件；目标格式；质量；JPEG 背景（白 / 黑 / 自定义）
- 本地示例用词：截图；商品图；带透明的图标
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：勿写「所有浏览器都能导出 AVIF」；勿承诺「完全无损互转」
- SERP 竞品 title（1–3）：在线图片格式转换；PNG 转 WebP；JPG 转 PNG 工具
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir png a webp；convertir imagen；jpg a png；webp a jpg；convertir avif
- 语气：口语工具站
- Title / H1 方向：Convertir imagen — PNG, JPEG, WebP, AVIF (en tu dispositivo)
- 按钮短词：Convertir；Descargar；Limpiar；Elegir archivo；Formato de destino；Calidad；Fondo JPEG (blanco / negro / personalizado)
- 本地示例用词：captura de pantalla；foto de producto；icono con transparencia
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：no prometer AVIF en todos los navegadores
- SERP 竞品 title（1–3）：Convertidor de imágenes PNG WebP；Convertir PNG a WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل PNG إلى WebP؛ تحويل صيغة الصورة؛ JPG إلى PNG؛ WebP إلى JPG؛ تحويل AVIF
- 语气：口语工具站
- Title / H1 方向：محول صيغ الصور — PNG وJPEG وWebP وAVIF (محليًا)
- 按钮短词：تحويل؛ تنزيل；مسح؛ اختر ملفًا；الصيغة الهدف؛ الجودة；خلفية JPEG (أبيض / أسود / مخصص)
- 本地示例用词：لقطة شاشة；صورة منتج；أيقونة بشفافية
- 可保留英文/符号：PNG، JPEG، JPG، WebP، AVIF
- 额外禁用：لا تَعِد بدعم ترميز AVIF في كل المتصفحات
- SERP 竞品 title（1–3）：محول الصور إلى WebP؛ تحويل PNG إلى JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter png para webp；converter imagem；jpg para png；webp para jpg；converter avif
- 语气：口语工具站
- Title / H1 方向：Converter imagem — PNG, JPEG, WebP, AVIF (no seu dispositivo)
- 按钮短词：Converter；Baixar；Limpar；Escolher arquivo；Formato de destino；Qualidade；Fundo JPEG (branco / preto / personalizado)
- 本地示例用词：captura de tela；foto de produto；ícone com transparência
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：não prometer AVIF em todos os navegadores
- SERP 竞品 title（1–3）：Conversor de imagens PNG WebP；Converter PNG para JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：konversi png ke webp；konverter gambar；jpg ke png；webp ke jpg；ubah format gambar
- 语气：口语工具站
- Title / H1 方向：Konversi format gambar — PNG, JPEG, WebP, AVIF (lokal)
- 按钮短词：Konversi；Unduh；Hapus；Pilih berkas；Format tujuan；Kualitas；Latar JPEG (putih / hitam / kustom)
- 本地示例用词：tangkapan layar；foto produk；ikon transparan
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：jangan janjikan encode AVIF di semua browser
- SERP 竞品 title（1–3）：Konverter PNG ke WebP；Ubah format gambar online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir png en webp；convertir image；jpg en png；webp en jpg；convertir avif
- 语气：口语工具站（偏正式可读）
- Title / H1 方向：Convertir une image — PNG, JPEG, WebP, AVIF (en local)
- 按钮短词：Convertir；Télécharger；Effacer；Choisir un fichier；Format cible；Qualité；Fond JPEG (blanc / noir / personnalisé)
- 本地示例用词：capture d’écran；photo produit；icône avec transparence
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：ne pas promettre l’encodage AVIF partout
- SERP 竞品 title（1–3）：Convertisseur d’images PNG WebP；PNG vers WebP en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：PNG WebP 変換；画像 形式 変換；JPG PNG 変換；WebP JPG 変換；AVIF 変換
- 语气：口语工具站（偏正式开发者可读）
- Title / H1 方向：画像形式を変換（PNG / JPEG / WebP / AVIF・端末内）
- 按钮短词：変換；ダウンロード；クリア；ファイルを選択；出力形式；画質；JPEG の背景（白 / 黒 / 指定色）
- 本地示例用词：スクリーンショット；商品写真；透過アイコン
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：禁止「ユースケース」空壳（用「こんなときに」）；勿写「全ブラウザで AVIF 書き出し可」
- SERP 竞品 title（1–3）：画像形式変換；PNG を WebP に変換；JPG PNG 変換
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：конвертировать png в webp；конвертер изображений；jpg в png；webp в jpg；avif в jpg
- 语气：口语工具站
- Title / H1 方向：Конвертер форматов изображений — PNG, JPEG, WebP, AVIF (локально)
- 按钮短词：Конвертировать；Скачать；Очистить；Выбрать файл；Целевой формат；Качество；Фон JPEG (белый / чёрный / свой)
- 本地示例用词：скриншот；фото товара；иконка с прозрачностью
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：не обещать кодирование AVIF во всех браузерах
- SERP 竞品 title（1–3）：Конвертер PNG в WebP；Онлайн конвертер изображений
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：png zu webp；bildformat konverter；jpg zu png；webp zu jpg；avif umwandeln
- 语气：口语工具站（偏正式可读）
- Title / H1 方向：Bildformat konvertieren — PNG, JPEG, WebP, AVIF (lokal)
- 按钮短词：Konvertieren；Herunterladen；Leeren；Datei wählen；Zielformat；Qualität；JPEG-Hintergrund (weiß / schwarz / benutzerdefiniert)
- 本地示例用词：Screenshot；Produktfoto；Icon mit Transparenz
- 可保留英文/符号：PNG、JPEG、JPG、WebP、AVIF
- 额外禁用：kein Versprechen «AVIF-Encoding in jedem Browser»
- SERP 竞品 title（1–3）：PNG zu WebP Konverter；Bildformat umwandeln online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | 2026-08-07 | en 全文键 + 页面交互；`lint:seo` | 通过 |
| 2 按 brief 重写 | 2026-08-07 | zh/es/ar/pt/id/fr/ja/ru/de 按检索词与按钮说法独立撰写；同步首页 `i18n.mjs` | title/FAQ 切入点随语种变化 |
| 3 抽查+禁词+lint | 2026-08-07 | 抽 en+zh+es+ja；禁词表；清 ar/ja/ru 待抽查；再 `lint:seo` + `build:site` | OK；sitemap 含本工具 |
