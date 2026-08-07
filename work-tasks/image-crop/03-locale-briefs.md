# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。  
> Title 须**结果/场景向**，禁止「选区X、宽高Y、比例Z」参数枚举目录腔。

**工具 slug**：`image-crop`  
**母版语言**：en  
**状态**：`shipped`（实现已落地；轮次核查可继续勾选）

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无 granularity / 对比粒度 等造词
- [ ] 无错义借译（crop/resize 混成无关词；「裁剪」说成剪辑视频等）
- [ ] 无残缺缩写
- [ ] 场景标题非「ユースケース」式空壳英借
- [ ] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [ ] 十语非同一句式骨架；title 含该语检索说法
- [ ] 未依赖 `t()` 英文回退冒充缺语种
- [ ] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（JPEG、PNG、WebP、px、1:1、16:9）可保留，**不可**替代本地主 title。

**本工具额外禁用**：

- 勿在用户正文写 doorway / slug /「不拆 URL」元叙述  
- 勿承诺「无损放大」或「与 Photoshop 像素级一致」  
- 勿把 cropperjs / Canvas API 名当卖点（库名最多 References）  
- 勿与 Amazon / Instagram 官方合规包文案混用（可用场景举例，不冒充平台工具）  
- 勿暗示上传服务器

---

## 每语 brief

### en

- 检索词（3–5）：crop image；resize image；image cropper；crop to square；crop 16:9
- 语气：口语工具站
- Title / H1 方向：Crop & Resize Image — local aspect presets
- 按钮短词：Crop；Download；Clear；Choose file；Aspect；Output size；Presets；Load sample；Same as selection
- 本地示例用词：profile photo；banner；product shot；avatar 512；HD 1080p
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9、px
- 额外禁用：no “lossless upscale” claim
- SERP 竞品 title（1–3）：Crop Image Online；Resize Image；Image Cropper
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词（3–5）：图片裁剪；修改图片尺寸；裁成正方形；按比例裁剪；在线改尺寸
- 语气：口语工具站
- Title / H1 方向：图片裁剪与改尺寸 — 本地完成
- 按钮短词：裁剪；下载；清空；选择图片；比例；输出尺寸；常用尺寸；加载示例；与选区相同
- 本地示例用词：头像；封面图；商品图；头像 512；全高清
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9、px
- 额外禁用：勿写「无损放大」；勿参数枚举 title
- SERP 竞品 title（1–3）：在线图片裁剪；修改图片尺寸；裁剪图片
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词（3–5）：recortar imagen；cambiar tamaño imagen；recortar a cuadrado；recortar 16:9
- 语气：口语工具站
- Title / H1 方向：Recortar y redimensionar imagen — en tu dispositivo
- 按钮短词：Recortar；Descargar；Limpiar；Elegir archivo；Proporción；Tamaño de salida；Cargar ejemplo
- 本地示例用词：foto de perfil；banner；foto de producto
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9
- 额外禁用：no prometer ampliación sin pérdida
- SERP 竞品 title（1–3）：Recortar imagen online；Cambiar tamaño de imagen
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：قص الصورة；تغيير حجم الصورة；قص مربع؛ قص 16:9
- 语气：口语工具站
- Title / H1 方向：قص الصورة وتغيير الحجم — محليًا
- 按钮短词：قص；تنزيل；مسح；اختر ملفًا；النسبة；حجم الإخراج；تحميل مثال
- 本地示例用词：صورة شخصية；غلاف；صورة منتج
- 可保留英文/符号：JPEG، PNG، WebP، 1:1، 16:9
- 额外禁用：لا تَعِد بتكبير بلا فقد
- SERP 竞品 title（1–3）：قص الصور أونلاين؛ تغيير حجم الصورة
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：cortar imagem；redimensionar imagem；cortar quadrado；cortar 16:9
- 语气：口语工具站
- Title / H1 方向：Cortar e redimensionar imagem — no dispositivo
- 按钮短词：Cortar；Baixar；Limpar；Escolher arquivo；Proporção；Tamanho de saída；Carregar exemplo
- 本地示例用词：foto de perfil；banner；foto de produto
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9
- 额外禁用：não prometer ampliação sem perda
- SERP 竞品 title（1–3）：Cortar imagem online；Redimensionar imagem
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：crop gambar；ubah ukuran gambar；crop persegi；crop 16:9
- 语气：口语工具站
- Title / H1 方向：Potong & ubah ukuran gambar — lokal
- 按钮短词：Potong；Unduh；Bersihkan；Pilih berkas；Rasio；Ukuran keluaran；Muat contoh
- 本地示例用词：foto profil；banner；foto produk
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9
- 额外禁用：jangan janjikan perbesaran lossless
- SERP 竞品 title（1–3）：Crop gambar online；Ubah ukuran gambar
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：recadrer image；redimensionner image；recadrer carré；recadrer 16:9
- 语气：口语工具站
- Title / H1 方向：Recadrer et redimensionner une image — en local
- 按钮短词：Recadrer；Télécharger；Effacer；Choisir un fichier；Proportion；Taille de sortie；Charger un exemple
- 本地示例用词：photo de profil；bannière；photo produit
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9
- 额外禁用：ne pas promettre un agrandissement sans perte
- SERP 竞品 title（1–3）：Recadrer une image en ligne；Redimensionner une image
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：画像 切り抜き；画像 サイズ 変更；正方形 に 切り抜き；16:9 切り抜き
- 语气：口语工具站
- Title / H1 方向：画像の切り抜きとサイズ変更（端末内）
- 按钮短词：切り抜き；ダウンロード；クリア；ファイルを選択；比率；出力サイズ；サンプルを読み込む
- 本地示例用词：プロフィール写真；バナー；商品写真
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9
- 额外禁用：禁止「ユースケース」空壳；勿写「完全ロスレス拡大」
- SERP 竞品 title（1–3）：画像切り抜き；画像サイズ変更；オンラインクロップ
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词（3–5）：обрезать изображение；изменить размер фото；обрезать квадрат；обрезать 16:9
- 语气：口语工具站
- Title / H1 方向：Обрезка и изменение размера — локально
- 按钮短词：Обрезать；Скачать；Очистить；Выбрать файл；Пропорции；Размер выхода；Загрузить пример
- 本地示例用词：фото профиля；баннер；фото товара
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9
- 额外禁用：не обещать увеличение без потерь
- SERP 竞品 title（1–3）：Обрезать изображение онлайн；Изменить размер фото
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：bild zuschneiden；bildgröße ändern；quadratisch zuschneiden；16:9 zuschneiden
- 语气：口语工具站
- Title / H1 方向：Bild zuschneiden & Größe ändern — lokal
- 按钮短词：Zuschneiden；Herunterladen；Leeren；Datei wählen；Seitenverhältnis；Ausgabegröße；Beispiel laden
- 本地示例用词：Profilbild；Banner；Produktfoto
- 可保留英文/符号：JPEG、PNG、WebP、1:1、16:9
- 额外禁用：kein Versprechen «verlustfrei vergrößern»
- SERP 竞品 title（1–3）：Bild online zuschneiden；Bildgröße ändern
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 实现前检查清单

- [x] 十语 brief 均已填写检索词与 Title 方向（结果向）  
- [x] 与 compress / format-converter / 方向 B 平台包边界已在 `02` 写清  
- [ ] 实现后勾选禁词表与各语轮次  
- [ ] 实现后更新 related 互链与 README  
