# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`open-graph-image-size`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

技术专名：Open Graph、og:image、JPEG。  
**额外禁用**：H1 禁止短词 og image；不把 1200×630 堆进 H1 当参数目录；封面/Story 不进本页。

---

## 每语 brief

### en
- 检索词（3–5）：Open Graph image size；1200×630；og:image size；facebook open graph；linkedin 1200×627
- 语气：口语工具站
- Title / H1 方向：Open Graph image size
- 按钮短词：Choose image；Load sample；Download JPEG；Clear
- 本地示例用词：1200×630 card
- 可保留英文/符号：Open Graph、og:image
- 额外禁用：Do not H1 “og image”.
- SERP 竞品 title（1–3）：OG image size guide
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词（3–5）：Open Graph 图片尺寸；分享图 1200×630；og:image 尺寸；Facebook 分享图
- 语气：口语工具站
- Title / H1 方向：Open Graph 图片尺寸
- 按钮短词：选择图片；加载示例；下载 JPEG；清空
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph、og:image
- 额外禁用：H1 不要写 og image 短词；隐私须留在设备且不上传服务器
- SERP 竞品 title（1–3）：OG 图片尺寸
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词（3–5）：tamaño de imagen Open Graph；1200×630；og:image；Facebook
- 语气：口语工具站
- Title / H1 方向：Tamaño de imagen Open Graph
- 按钮短词：Elegir imagen；Cargar ejemplo；Descargar JPEG；Limpiar
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：No usar solo “local”; decir que no se sube al servidor
- SERP 竞品 title（1–3）：tamaño imagen OG
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词（3–5）：حجم صورة Open Graph；1200×630；og:image
- 语气：口语工具站
- Title / H1 方向：حجم صورة Open Graph
- 按钮短词：اختر صورة；حمّل مثالًا；نزّل JPEG；مسح
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：وضح أن الملفات تبقى على الجهاز دون رفع
- SERP 竞品 title（1–3）：حجم صورة OG
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt
- 检索词（3–5）：tamanho da imagem Open Graph；1200×630；og:image
- 语气：口语工具站
- Title / H1 方向：Tamanho da imagem Open Graph
- 按钮短词：Escolher imagem；Carregar exemplo；Baixar JPEG；Limpar
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：Dizer que fica no dispositivo e não sobe ao servidor
- SERP 竞品 title（1–3）：tamanho imagem OG
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词（3–5）：ukuran gambar Open Graph；1200×630；og:image
- 语气：口语工具站
- Title / H1 方向：Ukuran gambar Open Graph
- 按钮短词：Pilih gambar；Muat contoh；Unduh JPEG；Hapus
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：Tegaskan file tetap di perangkat, tidak diunggah
- SERP 竞品 title（1–3）：ukuran gambar OG
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词（3–5）：taille d'image Open Graph；1200×630；og:image
- 语气：口语工具站
- Title / H1 方向：Taille d'image Open Graph
- 按钮短词：Choisir une image；Charger l’exemple；Télécharger le JPEG；Effacer
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：Dire « reste sur l’appareil, pas d’envoi serveur »
- SERP 竞品 title（1–3）：taille image OG
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词（3–5）：Open Graph画像サイズ；1200×630；og:image；シェア画像
- 语气：口语工具站
- Title / H1 方向：Open Graph画像サイズ
- 按钮短词：画像を選ぶ；サンプル；JPEGをダウンロード；クリア
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：端末内で処理しサーバーにアップロードしない、と明記
- SERP 竞品 title（1–3）：OG画像サイズ
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru
- 检索词（3–5）：размер изображения Open Graph；1200×630；og:image
- 语气：口语工具站
- Title / H1 方向：Размер изображения Open Graph
- 按钮短词：Выбрать изображение；Пример；Скачать JPEG；Очистить
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：Файлы остаются на устройстве, на сервер не отправляются
- SERP 竞品 title（1–3）：размер OG-картинки
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de
- 检索词（3–5）：Open-Graph-Bildgröße；1200×630；og:image
- 语气：口语工具站
- Title / H1 方向：Open-Graph-Bildgröße
- 按钮短词：Bild wählen；Beispiel laden；JPEG herunterladen；Leeren
- 本地示例用词：1200×630
- 可保留英文/符号：Open Graph
- 额外禁用：Dateien bleiben auf dem Gerät und werden nicht hochgeladen
- SERP 竞品 title（1–3）：OG-Bildgröße
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 锁定 Open Graph image size；1200×630 进画布；短词 og image 不进 H1；覆盖表与意图审查写入 02 | 主词落 H1；次词有落点；可跑 coverage:gate phase=0b |
| 1 母版+lint | 2026-09-01 | 写 catalog/Page/en.ts；H1=Open Graph image size；默认 1200×630 cover；loadSample | 母版键齐，待 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-01 | H1 定为 Open Graph image size；description 写入 1200×630、627 芯片、示例与不上服务器；短词 og image 不进 H1 | 主词落 H1；次词落 desc |
| 2 按 brief 重写 | 2026-09-01 | 十语按当地检索句独立重写；隐私写留在设备且不上服务器 | 非 en 直搬 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja：title 为 Open Graph image size / Open Graph 图片尺寸 / Tamaño de imagen Open Graph / Open Graph画像サイズ | en,zh,es,ja 主词落 H1，次词落 desc |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表已勾；H1 无短词 og image | 可跑 phase=4 |
