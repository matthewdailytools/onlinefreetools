# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`image-optimizer`  
**母版语言**：en  
**状态**：`briefs-ready`（页面已实现；轮次 2/3 待抽查勾选后可改 `i18n-done`）

> 与 `image-compress` 分工：本页 = WASM 编码器优化 + 滑动对照；compress = Canvas 快速压体积。Title 主词用「图片优化 / Image Optimizer」，勿用「高级编解码」。

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [ ] 无错义借译（如把 optimize 说成「加密」；把 encoder 与 compress 混成同一工具）
- [ ] 无残缺缩写（如 `Cars.`）
- [ ] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [ ] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [ ] 十语非同一句式骨架；title 含该语检索说法
- [ ] 未依赖 `t()` 英文回退冒充缺语种
- [ ] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、WASM、KB、MB）可保留，**不可**替代本地主 title。

**本工具额外禁用**：

- 勿在用户正文写 doorway / 空壳 / 薄页 / slug /「不拆 URL」等 SEO 元叙述  
- 勿用「高级编解码 / advanced codec」作 H1/title 主词  
- 勿把 jsquash / Squoosh / `@jsquash` 包名当正文卖点（库名最多 References）  
- 勿暗示文件会上传；勿承诺「一定比 Canvas 小 N%」或「AVIF 很快」  
- 勿与 `image-compress` 抢「一键压到目标 KB」心智而不说明差异  

---

## 每语 brief

### en

- 检索词（3–5）：image optimizer；optimize image for web；compress to webp；avif optimizer；mozjpeg online
- 语气：口语工具站（偏站长/前端可读）
- Title / H1 方向：Image Optimizer — WebP, AVIF & MozJPEG Local（结果/本地向；勿堆 quality/effort 参数目录）
- 按钮短词：Load engine；Optimize；Download；Cancel；Clear；Choose file；Codec；Quality；Effort；Compare slider
- 本地示例用词：hero image；product photo；UI asset with transparency
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、KB、MB
- 额外禁用：no “advanced codec” as H1; no package-name selling; no guaranteed % savings
- SERP 竞品 title（1–3）：Image Optimizer Online；Optimize Images for Web；Squoosh — Compress & Compare Images
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词（3–5）：图片优化；网页图片优化；优化图片体积；WebP 优化；AVIF 压缩
- 语气：口语工具站
- Title / H1 方向：图片优化 — 更小体积，可调编码器，本地完成
- 按钮短词：加载优化引擎；开始优化；下载；取消；清空；选择图片；编码器；画质；速度/力度；左右对照
- 本地示例用词：首屏大图；商品图；带透明的 UI 图
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、KB、MB
- 额外禁用：H1 勿写「高级编解码」；勿承诺固定压缩比；勿把包名当卖点
- SERP 竞品 title（1–3）：在线图片优化；网页图片优化工具；图片压缩 WebP
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词（3–5）：optimizar imagen；optimizar imágenes para web；reducir peso imagen web；comprimir a webp；optimizador de imágenes
- 语气：口语工具站
- Title / H1 方向：Optimizar imagen — WebP, AVIF y MozJPEG en tu dispositivo
- 按钮短词：Cargar motor；Optimizar；Descargar；Cancelar；Limpiar；Elegir archivo；Códec；Calidad；Esfuerzo；Comparar
- 本地示例用词：imagen hero；foto de producto；recurso UI con transparencia
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、KB、MB
- 额外禁用：no «códec avanzado» como H1; no vender nombres de paquetes
- SERP 竞品 title（1–3）：Optimizar imagen online；Optimizador de imágenes WebP；Reducir peso de imágenes para web
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：تحسين الصور؛ تحسين صور الويب؛ تصغير حجم الصورة للموقع؛ ضغط WebP؛ محسن الصور
- 语气：口语工具站
- Title / H1 方向：تحسين الصور — WebP وAVIF وMozJPEG محليًا
- 按钮短词：تحميل المحرك؛ تحسين؛ تنزيل؛ إلغاء؛ مسح؛ اختر ملفًا؛ الترميز؛ الجودة؛ الجهد؛ مقارنة
- 本地示例用词：صورة رئيسية؛ صورة منتج؛ عنصر واجهة بشفافية
- 可保留英文/符号：WebP، AVIF، MozJPEG، OxiPNG، JPEG، PNG، KB، MB
- 额外禁用：لا تجعل «ترميز متقدم» عنوانًا رئيسيًا؛ لا تَعِد بنسبة ضغط ثابتة
- SERP 竞品 title（1–3）：تحسين الصور أونلاين؛ ضغط الصور للويب؛ محسن صور WebP
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：otimizar imagem；otimizar imagens para web；reduzir peso imagem site；comprimir para webp；otimizador de imagens
- 语气：口语工具站
- Title / H1 方向：Otimizar imagem — WebP, AVIF e MozJPEG no dispositivo
- 按钮短词：Carregar motor；Otimizar；Baixar；Cancelar；Limpar；Escolher arquivo；Codec；Qualidade；Esforço；Comparar
- 本地示例用词：imagem hero；foto de produto；asset de UI com transparência
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、KB、MB
- 额外禁用：não usar «codec avançado» no H1; não vender nomes de pacotes
- SERP 竞品 title（1–3）：Otimizar imagem online；Otimizador de imagens WebP；Reduzir peso de imagens para web
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：optimasi gambar；optimasi gambar web；perkecil ukuran gambar website；kompres ke webp；optimizer gambar
- 语气：口语工具站
- Title / H1 方向：Optimasi gambar — WebP, AVIF & MozJPEG di perangkat
- 按钮短词：Muat mesin；Optimalkan；Unduh；Batal；Bersihkan；Pilih berkas；Codec；Kualitas；Upaya；Bandingkan
- 本地示例用词：gambar hero；foto produk；aset UI transparan
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、KB、MB
- 额外禁用：jangan jadikan «advanced codec» sebagai H1; jangan jual nama paket
- SERP 竞品 title（1–3）：Optimasi gambar online；Kompres gambar WebP；Perkecil gambar untuk website
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：optimiser image；optimiser images pour le web；réduire poids image site；compresser en webp；optimiseur d’image
- 语气：口语工具站（偏正式可读）
- Title / H1 方向：Optimiser une image — WebP, AVIF et MozJPEG en local
- 按钮短词：Charger le moteur；Optimiser；Télécharger；Annuler；Effacer；Choisir un fichier；Codec；Qualité；Effort；Comparer
- 本地示例用词：image hero；photo produit；élément d’UI transparent
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、Ko/KB、Mo/MB
- 额外禁用：pas de « codec avancé » en H1；pas de noms de paquets comme argument de vente
- SERP 竞品 title（1–3）：Optimiser une image en ligne；Optimiseur d’images WebP；Réduire le poids des images web
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：画像 最適化；Web用 画像 最適化；画像 容量 削減 サイト；WebP 変換 最適化；AVIF 圧縮
- 语气：口语工具站
- Title / H1 方向：画像最適化 — WebP / AVIF / MozJPEG（端末内）
- 按钮短词：エンジンを読み込む；最適化；ダウンロード；キャンセル；クリア；ファイルを選択；コーデック；画質；処理の強さ；比較
- 本地示例用词：ヒーロー画像；商品写真；透明付き UI 素材
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、KB、MB
- 额外禁用：禁止「ユースケース」空壳；H1 に「高度なコーデック」を置かない；パッケージ名を売りにしない
- SERP 竞品 title（1–3）：画像最適化；Web用画像を軽量化；WebP 画像圧縮
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词（3–5）：оптимизация изображений；оптимизировать картинку для сайта；уменьшить вес изображения；сжать в webp；оптимизатор изображений
- 语气：口语工具站
- Title / H1 方向：Оптимизация изображений — WebP, AVIF и MozJPEG локально
- 按钮短词：Загрузить движок；Оптимизировать；Скачать；Отмена；Очистить；Выбрать файл；Кодек；Качество；Усилие；Сравнить
- 本地示例用词：обложка；фото товара；UI-элемент с прозрачностью
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、КБ、МБ
- 额外禁用：не ставить «продвинутый кодек» в H1；не рекламировать имена пакетов
- SERP 竞品 title（1–3）：Оптимизация изображений онлайн；Сжать изображение в WebP；Оптимизатор картинок для сайта
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：bild optimieren；bilder für web optimieren；bildgröße website reduzieren；nach webp komprimieren；bildoptimierer
- 语气：口语工具站
- Title / H1 方向：Bild optimieren — WebP, AVIF & MozJPEG lokal
- 按钮短词：Engine laden；Optimieren；Herunterladen；Abbrechen；Leeren；Datei wählen；Codec；Qualität；Aufwand；Vergleichen
- 本地示例用词：Hero-Bild；Produktfoto；UI-Asset mit Transparenz
- 可保留英文/符号：WebP、AVIF、MozJPEG、OxiPNG、JPEG、PNG、KB、MB
- 额外禁用：kein «Advanced Codec» als H1；keine Paketnamen als Verkaufsargument
- SERP 竞品 title（1–3）：Bild online optimieren；Bilder fürs Web optimieren；WebP Bildoptimierer
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | 2026-08-07 | brief 填齐十语；en/zh 等键写入 `src/site/i18n/*.ts`（母版落盘） | `briefs-ready`；轮次框未勾（待实现页后 ≥3 轮） |
| 2 按 brief 重写 | | | |
| 3 抽查+禁词+lint | | | |

## 实现前检查清单

- [x] 十语 brief 均已填写检索词与 Title 方向  
- [x] 与 `image-compress` / `image-format-converter` 分工已在 `01`/`02` 写清  
- [ ] 实现后勾选禁词表与各语轮次  
- [ ] 实现后同步 `scripts/site/i18n.mjs` 首页主词/短描述  
- [ ] 实现后更新 related 互链  
