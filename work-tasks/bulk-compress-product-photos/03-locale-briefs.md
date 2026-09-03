# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`bulk-compress-product-photos`  
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

技术专名（JPEG、WebP、ZIP、KB）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

---

## 每语 brief

### en

- 检索词（3–5）：bulk compress product photos; compress images in bulk; compress jpg; reduce photo size; compress to 200kb
- 语气：口语工具站
- Title / H1 方向：Bulk compress product photos
- 按钮短词（Compare / Clear / mode labels…）：Compress all; Download ZIP; Load sample; Clear; 200 KB chip; JPEG / WebP
- 本地示例用词：listing photos, SKU shots, 200 KB listing cap
- 可保留英文/符号：JPEG, WebP, ZIP, KB
- 额外禁用：parameter-list H1; “we split this URL”; doorway; slug
- SERP 竞品 title（1–3）：iLoveIMG Compress Image; TinyPNG (PNG-focused, disambiguate in FAQ)
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量压缩商品图; 批量压缩图片; 压缩 jpg; 图片压缩到 200kb; 减小照片体积
- 语气：口语工具站
- Title / H1 方向：批量压缩商品图（不要把 bulk 塞进中文 H1）
- 按钮短词：全部压缩; 下载 ZIP; 载入样例; 清空
- 本地示例用词：上架主图、SKU 图、200 KB 平台上限
- 可保留英文/符号：JPEG、WebP、ZIP、KB
- 额外禁用：参数顿号标题；「为了 SEO 拆页」
- SERP 竞品 title（1–3）：在线批量压缩图片类站
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comprimir fotos de producto; comprimir imágenes en lote; comprimir jpg; reducir tamaño de fotos; comprimir a 200 kb
- 语气：口语工具站
- Title / H1 方向：Comprimir fotos de producto en lote
- 按钮短词：Comprimir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：fotos de ficha, límite 200 KB del marketplace
- 可保留英文/符号：JPEG, WebP, ZIP, KB
- 额外禁用：H1 tipo lista de controles; altas y bajas
- SERP 竞品 title（1–3）：comprimir imágenes online en lote
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：ضغط صور المنتجات; ضغط الصور بالجملة; ضغط jpg; تصغير حجم الصور; ضغط إلى 200 كيلوبايت
- 语气：口语工具站
- Title / H1 方向：ضغط صور المنتجات بالجملة（当地检索句，勿英模）
- 按钮短词：ضغط الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：صور عرض السلعة، حد 200 كيلوبايت
- 可保留英文/符号：JPEG, WebP, ZIP, KB
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：ضغط الصور أونلاين
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：comprimir fotos de produto; compactar imagens em lote; comprimir jpg; reduzir tamanho das fotos; comprimir para 200 kb
- 语气：口语工具站
- Title / H1 方向：Comprimir fotos de produto em lote
- 按钮短词：Comprimir tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：fotos de anúncio, limite de 200 KB
- 可保留英文/符号：JPEG, WebP, ZIP, KB
- 额外禁用：H1 de enumeração de parâmetros
- SERP 竞品 title（1–3）：compactar imagens em lote
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：kompres foto produk; kompres gambar massal; kompres jpg; perkecil ukuran foto; kompres ke 200kb
- 语气：口语工具站
- Title / H1 方向：Kompres foto produk sekaligus
- 按钮短词：Kompres semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：foto listing, batas 200 KB
- 可保留英文/符号：JPEG, WebP, ZIP, KB
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：kompres gambar online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：compresser photos produit; compresser images en lot; compresser jpg; réduire taille photos; compresser à 200 ko
- 语气：口语工具站
- Title / H1 方向：Compresser des photos produit en lot
- 按钮短词：Tout compresser; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：photos de fiche, plafond 200 Ko
- 可保留英文/符号：JPEG, WebP, ZIP, Ko/KB
- 额外禁用：titre catalogue de paramètres
- SERP 竞品 title（1–3）：compresser images en lot
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：商品画像を一括圧縮; 画像をまとめて圧縮; jpg 圧縮; 写真の容量を小さく; 200kb に圧縮
- 语气：口语工具站
- Title / H1 方向：商品画像を一括圧縮
- 按钮短词：すべて圧縮; ZIP をダウンロード; サンプル読込; クリア
- 本地示例用词：出品写真、200 KB 上限
- 可保留英文/符号：JPEG, WebP, ZIP, KB
- 额外禁用：「ユースケース」空壳标题；参数罗列 H1
- SERP 竞品 title（1–3）：画像 一括 圧縮
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：сжать фото товаров; сжать изображения оптом; сжать jpg; уменьшить размер фото; сжать до 200 кб
- 语气：口语工具站
- Title / H1 方向：Сжать фото товаров пакетом
- 按钮短词：Сжать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：фото карточки товара, лимит 200 КБ
- 可保留英文/符号：JPEG, WebP, ZIP, КБ
- 额外禁用：H1-список параметров
- SERP 竞品 title（1–3）：сжать изображения онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：Produktfotos komprimieren; Bilder in Masse komprimieren; JPG komprimieren; Fotos verkleinern; auf 200 KB komprimieren
- 语气：口语工具站
- Title / H1 方向：Produktfotos in Masse komprimieren
- 按钮短词：Alle komprimieren; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Listing-Fotos, 200-KB-Limit
- 可保留英文/符号：JPEG, WebP, ZIP, KB
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：Bilder in Masse komprimieren
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 对照表格主词把 H1 定为 Bulk compress product photos；jpg/jpeg/200kb 落入默认 JPEG、目标 200 KB 与 FAQ；PNG 保透明与改后缀划出本页 | 覆盖表与意图总判已写进 02；主词在英文 H1，次词有落点，未用品类头词 slug |
| 1 母版+lint | 2026-09-03 | 写 catalog opts 分片、图标、Page 队列脚本与 en 全键 | 母版 title 锁定 Bulk compress product photos；进页 loadSample 两张样例 |
| 1b 母版检索覆盖优化 | 2026-09-03 | 对照 02 把 en title 写成场景句而非最长边/质量目录腔；desc 写入 steps/example、200 KB、in bulk 任务与设备+不上服务器 | 主词落在 H1；jpg/jpeg/200kb 在芯片与 FAQ；未写 doorway 元叙述 |
| 2 按 brief 重写 | 2026-09-03 | 按 03 十语检索句独立写 H1/How/FAQ，非 en 直搬；隐私句写设备+不上服务器 | zh/es/ja 等 title 已是当地场景句；FAQ 题从上传/200KB/jpeg 切入因语而异 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查 en,zh,es,ja：en 保持 Bulk compress product photos；zh 批量压缩商品图；es lote；ja 一括圧縮；desc 均含步骤/示例类词且去掉参数目录腔 | 四语 title 非枚举；主词落 H1；200 KB 与 jpg 在芯片/FAQ |
| 3 抽查+禁词+lint | 2026-09-03 | 抽查禁词、隐私完整句、无 doorway 元叙述；准备 lint:seo 与 verify:tool | 禁词表已勾；待母语抽查未留空勾 |
