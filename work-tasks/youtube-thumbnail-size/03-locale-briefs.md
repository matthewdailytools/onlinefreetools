# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`youtube-thumbnail-size`  
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

技术专名：YouTube、1280×720。  
**额外禁用**：H1 禁止 Open Graph / Instagram story / Shorts cover；不承诺广告位。

---

## 每语 brief

### en
- 检索词（3–5）：YouTube thumbnail size；1280x720 thumbnail；youtube video thumbnail；640x360 youtube；custom thumbnail
- 语气：口语工具站
- Title / H1 方向：YouTube thumbnail size
- 按钮短词：Choose image；Load sample；Download JPEG；Clear
- 本地示例用词：1280×720 16:9
- 可保留英文/符号：YouTube、JPEG
- 额外禁用：Do not H1 “Open Graph image size” or “Instagram story size”.
- SERP 竞品 title（1–3）：Canva YouTube thumbnail；thumbnail size chart
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词（3–5）：YouTube 缩略图尺寸；1280×720 封面；YouTube 视频缩略图；640×360；自定义缩略图
- 语气：口语工具站
- Title / H1 方向：YouTube 缩略图尺寸
- 按钮短词：选择图片；加载示例；下载 JPEG；清空
- 本地示例用词：1280×720 16:9
- 可保留英文/符号：YouTube
- 额外禁用：H1 不要写成链接分享卡或快拍；隐私须留在设备且不上传服务器
- SERP 竞品 title（1–3）：YouTube 封面尺寸
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词（3–5）：tamaño miniatura YouTube；miniatura 1280x720；thumbnail video YouTube
- 语气：口语工具站
- Title / H1 方向：tamaño miniatura YouTube
- 按钮短词：Elegir imagen；Cargar ejemplo；Descargar JPEG；Limpiar
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用：Decir que no se sube al servidor
- SERP 竞品 title（1–3）：tamaño miniatura de YouTube
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词（3–5）：حجم صورة مصغرة يوتيوب؛ 1280×720؛ صورة مصغرة فيديو
- 语气：口语工具站
- Title / H1 方向：حجم صورة مصغرة يوتيوب
- 按钮短词：اختر صورة；حمّل مثالًا；نزّل JPEG；مسح
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用： تقول الملفات تبقى على الجهاز دون رفع
- SERP 竞品 title（1–3）：مقاس صورة يوتيوب المصغرة
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt
- 检索词（3–5）：tamanho miniatura YouTube；miniatura 1280x720；thumbnail vídeo YouTube
- 语气：口语工具站
- Title / H1 方向：tamanho miniatura YouTube
- 按钮短词：Escolher imagem；Carregar exemplo；Baixar JPEG；Limpar
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用：Fica no dispositivo, não sobe ao servidor
- SERP 竞品 title（1–3）：tamanho da miniatura do YouTube
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词（3–5）：ukuran thumbnail YouTube；thumbnail 1280x720；gambar mini video
- 语气：口语工具站
- Title / H1 方向：ukuran thumbnail YouTube
- 按钮短词：Pilih gambar；Muat contoh；Unduh JPEG；Hapus
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用：Tetap di perangkat, tidak diunggah
- SERP 竞品 title（1–3）：ukuran thumbnail YouTube
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词（3–5）：taille miniature YouTube；miniature 1280x720；vignette vidéo YouTube
- 语气：口语工具站
- Title / H1 方向：taille miniature YouTube
- 按钮短词：Choisir l’image；Charger l’exemple；Télécharger JPEG；Effacer
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用：Sur l’appareil, pas envoyé au serveur
- SERP 竞品 title（1–3）：taille miniature YouTube
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词（3–5）：YouTubeサムネイルサイズ；1280×720 サムネ；動画サムネイル
- 语气：口语工具站
- Title / H1 方向：YouTubeサムネイルサイズ
- 按钮短词：画像を選ぶ；サンプル読込；JPEGを保存；クリア
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用：端末内・サーバー非送信；H1 に OG カードを置かない
- SERP 竞品 title（1–3）：YouTube サムネイル サイズ
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru
- 检索词（3–5）：размер превью YouTube；1280×720 превью；миниатюра видео
- 语气：口语工具站
- Title / H1 方向：размер превью YouTube
- 按钮短词：Выбрать изображение；Загрузить пример；Скачать JPEG；Очистить
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用：На устройстве, на сервер не отправляется
- SERP 竞品 title（1–3）：размер миниатюры YouTube
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de
- 检索词（3–5）：YouTube Thumbnail Größe；1280x720 Thumbnail；Video-Vorschaubild
- 语气：口语工具站
- Title / H1 方向：YouTube Thumbnail Größe
- 按钮短词：Bild wählen；Beispiel laden；JPEG speichern；Leeren
- 本地示例用词：1280×720
- 可保留英文/符号：YouTube
- 额外禁用：Bleibt auf dem Gerät, wird nicht hochgeladen
- SERP 竞品 title（1–3）：YouTube Thumbnail Maße
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | 对照缩略图簇：slug 保留 youtube-thumbnail-size；H1 锁定 YouTube thumbnail size；640×360 写入芯片；OG 与 Shorts 划界 | 覆盖表已回写 02；意图总判满足；链接卡与 9:16 封面不拆进本 URL |
| 1 母版+lint | 2026-09-01 | 写入 en 全键：H1 YouTube thumbnail size；1280×720 cover；640×360 芯片；FAQ 划界 OG 与 Shorts | 母版 title 非参数枚举；desc 含 1280×720 与设备隐私 |
| 1b 母版检索覆盖优化 | 2026-09-01 | 再扫 title/desc：主词落 H1；640×360 在芯片与 FAQ；OG 1200×630 与 Shorts 9:16 划界 | H1 保持 YouTube thumbnail size；次词均有落点 |
| 2 按 brief 重写 | 2026-09-01 | 按当地搜法重写 zh/es/ar/pt/id/fr/ja/ru/de；各语 H1 用该语检索句 | 十语非同构；隐私均写设备+不上传 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 再扫 en,zh,es,ja 的 title/desc：主词进 H1；1280×720 与 16:9 进 desc | en,zh,es,ja 均无参数枚举 H1；次词有落点 |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表全扫；抽查 en/zh/es/ja；ar/ja/ru 未留待母语抽查 | 无 OG 卡/Shorts H1；无含糊 local |
