# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`amazon-main-image-size`  
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
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

技术专名：Amazon、JPEG、RGB、Canvas。  
**额外禁用**：H1 不用 2000×2000 当参数目录；不承诺官方过审；不用 Favicon generator 句式；不写 marketplace-pack。

---

## 每语 brief

### en

- 检索词（3–5）：amazon main image size；amazon product image size；2000×2000；zoom 1000px；white background
- 语气：口语工具站
- Title / H1 方向：Amazon main image size
  # 跟紧该语检索长尾原句；卖点进 desc，禁止破折号营销后缀
- 按钮短词：Choose image；Load sample；Download JPEG；Clear
- 本地示例用词：2000×2000 white square, product photo sample
- 可保留英文/符号：Amazon、JPEG、2000×2000
- 额外禁用：Do not H1 “2000×2000, 1600, zoom”.
- SERP 竞品 title（1–3）：Amazon image size requirements；Seller Central image help
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh

- 检索词（3–5）：Amazon 主图尺寸；亚马逊主图大小；2000×2000；缩放 1000；白底
- 语气：口语工具站
- Title / H1 方向：Amazon 主图尺寸
- 按钮短词：选择图片；加载示例；下载 JPEG；清空
- 本地示例用词：2000×2000 白底主图
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：H1 不要堆「2000、1600、缩放」；隐私须写留在设备且不上传服务器
- SERP 竞品 title（1–3）：亚马逊主图要求；商品图尺寸
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es

- 检索词（3–5）：tamaño de imagen principal de Amazon；imagen de producto Amazon；2000×2000；zoom 1000；fondo blanco
- 语气：口语工具站
- Title / H1 方向：Tamaño de imagen principal de Amazon
- 按钮短词：Elegir imagen；Cargar ejemplo；Descargar JPEG；Limpiar
- 本地示例用词：cuadrado 2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：No usar solo “local”; decir que no se sube al servidor
- SERP 竞品 title（1–3）：requisitos de imagen Amazon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar

- 检索词（3–5）：حجم الصورة الرئيسية في أمازون；صورة منتج أمازون；2000×2000；تكبير 1000；خلفية بيضاء
- 语气：口语工具站
- Title / H1 方向：حجم الصورة الرئيسية في أمازون
- 按钮短词：اختر صورة؛ حمّل مثالًا؛ نزّل JPEG؛ مسح
- 本地示例用词：2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：وضح أن الملفات تبقى على الجهاز دون رفع
- SERP 竞品 title（1–3）：متطلبات صور أمازون
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：tamanho da imagem principal da Amazon；imagem de produto Amazon；2000×2000；zoom 1000；fundo branco
- 语气：口语工具站
- Title / H1 方向：Tamanho da imagem principal da Amazon
- 按钮短词：Escolher imagem；Carregar exemplo；Baixar JPEG；Limpar
- 本地示例用词：2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：Dizer que fica no dispositivo e não sobe ao servidor
- SERP 竞品 title（1–3）：requisitos de imagem Amazon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：ukuran gambar utama Amazon；ukuran foto produk Amazon；2000×2000；zoom 1000；latar putih
- 语气：口语工具站
- Title / H1 方向：Ukuran gambar utama Amazon
- 按钮短词：Pilih gambar；Muat contoh；Unduh JPEG；Hapus
- 本地示例用词：2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：Tegaskan file tetap di perangkat, tidak diunggah
- SERP 竞品 title（1–3）：syarat gambar Amazon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：taille image principale Amazon；photo produit Amazon；2000×2000；zoom 1000；fond blanc
- 语气：口语工具站
- Title / H1 方向：Taille de l’image principale Amazon
- 按钮短词：Choisir une image；Charger l’exemple；Télécharger le JPEG；Effacer
- 本地示例用词：2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：Dire « reste sur l’appareil, pas d’envoi serveur »
- SERP 竞品 title（1–3）：exigences image Amazon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：Amazon メイン画像サイズ；商品画像 サイズ；2000×2000；ズーム 1000；白背景
- 语气：口语工具站
- Title / H1 方向：Amazon メイン画像サイズ
- 按钮短词：画像を選ぶ；サンプル；JPEGをダウンロード；クリア
- 本地示例用词：2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：端末内で処理しサーバーにアップロードしない、と明記
- SERP 竞品 title（1–3）：Amazon 商品画像 要件
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru

- 检索词（3–5）：размер главного изображения Amazon；фото товара Amazon；2000×2000；зум 1000；белый фон
- 语气：口语工具站
- Title / H1 方向：Размер главного изображения Amazon
- 按钮短词：Выбрать изображение；Пример；Скачать JPEG；Очистить
- 本地示例用词：2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：Файлы остаются на устройстве, на сервер не отправляются
- SERP 竞品 title（1–3）：требования к фото Amazon
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：Amazon Hauptbildgröße；Amazon Produktbild Größe；2000×2000；Zoom 1000；weißer Hintergrund
- 语气：口语工具站
- Title / H1 方向：Amazon Hauptbildgröße
- 按钮短词：Bild wählen；Beispiel laden；JPEG herunterladen；Leeren
- 本地示例用词：2000×2000
- 可保留英文/符号：Amazon、JPEG
- 额外禁用：Dateien bleiben auf dem Gerät und werden nicht hochgeladen
- SERP 竞品 title（1–3）：Amazon Bildanforderungen
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 锁定 Amazon main image size；2000×2000 / zoom 1000 / 白底 85% 进 desc·芯片；不拆 pack URL；覆盖表与意图审查写入 02 | 主词落 H1；次词有落点；可跑 coverage:gate phase=0b |
| 1 母版+lint | 2026-09-01 | 写 catalog/Page/en.ts；H1=Amazon main image size；默认 2000×2000 白底；loadSample | 母版键齐，待 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-01 | H1 定为 Amazon main image size；description 写入 2000×2000、zoom 1000、白底 85%、示例与不上服务器 | 主词落 H1；次词落 desc/芯片 |
| 2 按 brief 重写 | 2026-09-01 | 十语按当地检索句独立重写 title/desc/FAQ；隐私写留在设备且不上服务器 | 非 en 直搬 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja：title 为 Amazon main image size / Amazon 主图尺寸 / Tamaño de imagen principal de Amazon / Amazon メイン画像サイズ；desc 含 2000×2000 与不上服务器 | en,zh,es,ja 主词落 H1，次词落 desc |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表已勾；H1 无参数目录；无造词 | 可跑 phase=4 与 verify:tool |
