# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`image-compress`  
**母版语言**：en  
**状态**：`i18n-done`

> 实现阶段：en 母版 → 九语按 brief 独立重写 → `lint:seo` + 抽查；ar/ja/ru 待母语抽查已清。

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] title/H1 非「参数A、参数B、参数C」目录腔（已改：缩小尺寸与文件体积，本地完成）
- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（compress/resize/quality 混用；「压缩」说成加密等）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借
- [x] 十语非同一句式骨架；title 含该语检索说法（含「图片/photo/foto」等自然词，勿整页只写 EXIF 式英文壳）
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（JPEG、PNG、WebP、MIME、KB、MB、Canvas）可保留，**不可**替代本地主 title。

**本工具额外禁用**：

- 勿在用户正文写 doorway / 空壳 / slug /「不拆 URL」元叙述  
- 勿承诺「无损压缩到任意小」或「保证压到目标 KB」  
- 勿把 Squoosh / ImageMagick / TinyPNG 服务当面向用户的卖点（实现用本机 Canvas；库名最多 References）  
- 勿暗示上传到服务器；勿与 Amazon 主图合规包文案混用  
- 「quality / 质量」按当地习惯；勿整页只堆英文 Quality（en 除外）

---

## 每语 brief

### en

- 检索词（3–5）：compress image；image compressor；reduce image size；compress jpeg；compress to 100kb
- 语气：口语工具站（偏实用/隐私可读）
- Title / H1 方向：Image Compressor — Resize, Quality & Target Size (local)
- 按钮短词：Compress；Download；Clear；Choose file；Max dimension；Quality；Target size；Output format
- 本地示例用词：phone photo；hero image；email attachment photo
- 可保留英文/符号：JPEG、PNG、WebP、KB、MB
- 额外禁用：no “lossless to any size”; no guaranteed target KB
- SERP 竞品 title（1–3）：Image Compressor；Compress Image Online；Reduce Image Size
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：图片压缩；压缩图片；减小图片体积；压缩到 100KB；在线压缩 JPEG
- 语气：口语工具站
- Title / H1 方向：图片压缩 — 缩小尺寸与文件体积，本地完成
- 按钮短词：压缩；下载；清空；选择图片；最长边；质量；目标体积；输出格式
- 本地示例用词：手机照片；首屏大图；邮件附件图
- 可保留英文/符号：JPEG、PNG、WebP、KB、MB
- 额外禁用：勿写「无损压到任意大小」；勿保证「一定压到目标 KB」
- SERP 竞品 title（1–3）：在线图片压缩；图片压缩工具；压缩图片到指定大小
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comprimir imagen；compresor de imágenes；reducir tamaño imagen；comprimir jpeg；comprimir a 100kb
- 语气：口语工具站
- Title / H1 方向：Comprimir imagen — tamaño, calidad y peso objetivo (local)
- 按钮短词：Comprimir；Descargar；Limpiar；Elegir archivo；Lado máximo；Calidad；Tamaño objetivo；Formato de salida
- 本地示例用词：foto del móvil；imagen de portada；foto para email
- 可保留英文/符号：JPEG、PNG、WebP、KB、MB
- 额外禁用：no prometer compresión sin pérdida a cualquier tamaño
- SERP 竞品 title（1–3）：Comprimir imagen online；Reducir tamaño de imagen
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：ضغط الصور؛ تصغير حجم الصورة؛ ضغط JPEG؛ ضغط إلى 100 كيلوبايت
- 语气：口语工具站
- Title / H1 方向：ضغط الصور — البعد الأطول والجودة والحجم المستهدف (محليًا)
- 按钮短词：ضغط；تنزيل；مسح；اختر ملفًا；أطول ضلع；الجودة；الحجم المستهدف；صيغة الإخراج
- 本地示例用词：صورة هاتف；صورة رئيسية；مرفق بريد
- 可保留英文/符号：JPEG، PNG، WebP، KB، MB
- 额外禁用：لا تَعِد بضغط بلا فقد إلى أي حجم
- SERP 竞品 title（1–3）：ضغط الصور أونلاين؛ تصغير حجم الصورة
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### pt

- 检索词（3–5）：comprimir imagem；compressor de imagens；reduzir tamanho imagem；comprimir jpeg；comprimir para 100kb
- 语气：口语工具站
- Title / H1 方向：Comprimir imagem — lado máximo, qualidade e tamanho alvo (local)
- 按钮短词：Comprimir；Baixar；Limpar；Escolher arquivo；Lado máximo；Qualidade；Tamanho alvo；Formato de saída
- 本地示例用词：foto do celular；imagem de capa；anexo de e-mail
- 可保留英文/符号：JPEG、PNG、WebP、KB、MB
- 额外禁用：não prometer compressão sem perda para qualquer tamanho
- SERP 竞品 title（1–3）：Comprimir imagem online；Reduzir tamanho da imagem
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：kompres gambar；kompres foto；perkecil ukuran gambar；kompres jpeg；kompres ke 100kb
- 语气：口语工具站
- Title / H1 方向：Kompres gambar — sisi terpanjang, kualitas & ukuran target (lokal)
- 按钮短词：Kompres；Unduh；Bersihkan；Pilih berkas；Sisi maks；Kualitas；Ukuran target；Format keluaran
- 本地示例用词：foto HP；gambar hero；lampiran email
- 可保留英文/符号：JPEG、PNG、WebP、KB、MB
- 额外禁用：jangan janjikan lossless ke ukuran berapa pun
- SERP 竞品 title（1–3）：Kompres gambar online；Perkecil ukuran foto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：compresser image；compresseur d’image；réduire taille image；compresser jpeg；compresser à 100ko
- 语气：口语工具站
- Title / H1 方向：Compresser une image — côté max, qualité et taille cible (local)
- 按钮短词：Compresser；Télécharger；Effacer；Choisir un fichier；Côté max；Qualité；Taille cible；Format de sortie
- 本地示例用词：photo téléphone；image hero；pièce jointe
- 可保留英文/符号：JPEG、PNG、WebP、Ko、Mo（或 KB/MB 按当地习惯）
- 额外禁用：ne pas promettre une compression sans perte vers n’importe quelle taille
- SERP 竞品 title（1–3）：Compresser une image en ligne；Réduire la taille d’une image
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：画像 圧縮；写真 圧縮；画像 容量 削減；JPEG 圧縮；100KB に圧縮
- 语气：口语工具站
- Title / H1 方向：画像圧縮 — 長辺・画質・目標サイズ（端末内）
- 按钮短词：圧縮；ダウンロード；クリア；ファイルを選択；長辺；画質；目標サイズ；出力形式
- 本地示例用词：スマホ写真；ヒーロー画像；メール添付写真
- 可保留英文/符号：JPEG、PNG、WebP、KB、MB
- 额外禁用：禁止「ユースケース」空壳；勿写「任意サイズまで完全ロスレス」
- SERP 竞品 title（1–3）：画像圧縮；画像サイズを小さく；オンライン画像圧縮
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### ru

- 检索词（3–5）：сжать изображение；сжать фото；уменьшить размер картинки；сжать jpeg；сжать до 100кб
- 语气：口语工具站
- Title / H1 方向：Сжатие изображений — длинная сторона, качество и целевой размер (локально)
- 按钮短词：Сжать；Скачать；Очистить；Выбрать файл；Макс. сторона；Качество；Целевой размер；Формат вывода
- 本地示例用词：фото с телефона；обложка；вложение письма
- 可保留英文/符号：JPEG、PNG、WebP、КБ、МБ
- 额外禁用：не обещать сжатие без потерь до любого размера
- SERP 竞品 title（1–3）：Сжать изображение онлайн；Уменьшить размер фото
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[x]

### de

- 检索词（3–5）：bild komprimieren；bildkompressor；bildgröße reduzieren；jpeg komprimieren；auf 100kb komprimieren
- 语气：口语工具站
- Title / H1 方向：Bild komprimieren — Längste Seite, Qualität & Zielgröße (lokal)
- 按钮短词：Komprimieren；Herunterladen；Leeren；Datei wählen；Max. Seite；Qualität；Zielgröße；Ausgabeformat
- 本地示例用词：Handyfoto；Hero-Bild；E-Mail-Anhang
- 可保留英文/符号：JPEG、PNG、WebP、KB、MB
- 额外禁用：kein Versprechen «verlustfrei auf jede Größe»
- SERP 竞品 title（1–3）：Bild online komprimieren；Bildgröße reduzieren
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 实现前检查清单

- [x] 十语 brief 均已填写检索词与 Title 方向  
- [x] 与 `image-format-converter` / `image-exif` 分工已在 `02` 写清  
- [x] 实现后勾选禁词表与各语轮次  
- [x] 实现后更新 format-converter / exif 的 related → `image-compress`
