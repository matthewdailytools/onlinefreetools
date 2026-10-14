# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`images-to-gif`  
**母版语言**：en  
**状态**：`i18n-done`

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无造词 / 错义借译 / 残缺缩写（GIF、fps、boomerang 等按当地习惯保留或意译）
- [x] 场景标题非空壳英借
- [x] title/H1 非参数枚举目录腔（不把 delay / fps / colors / dither 串进 H1）
- [x] 十语非同一句式骨架
- [x] 未依赖英文回退冒充缺语种
- [x] 未脚本同构灌语；待母语抽查已清
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

**本工具额外禁用**：勿暗示上传到服务器；勿与 convert-a-video-file-to-a-gif（视频转 GIF）、image-merge（拼图）混写；勿承诺 GIF 能保留 256 色以上的照片色彩；勿声称各平台都会照播「只播放一次」（部分聊天软件强制循环）。

---

## 每语 brief

### en
- 检索词：images to gif；gif maker from photos；make animated gif；photos to gif with custom speed；gif loop count
- 语气：口语工具站
- Title：Images to GIF Maker — Turn Photos into an Animated GIF with Your Own Speed and Loop Count
- 按钮：Build GIF / Download / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：图片合成GIF；多张图片做成动图；照片转动图；GIF 动图制作 循环次数
- 语气：口语工具站
- Title：图片合成GIF动图 — 把多张照片生成动图，速度和循环次数自己定
- 按钮：生成 GIF / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：画像 GIFアニメ 作成；複数画像 GIF 変換；写真 GIF 作り方；GIF ループ回数
- 语气：です・ます
- Title：画像からGIFアニメを作成 — 複数の写真を並べて速度とループ回数を自由に設定
- 按钮：GIFを作成 / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：صانع GIF من الصور；تحويل الصور إلى صورة متحركة；عمل GIF من عدة صور
- 语气：فصحى مبسطة
- Title：صانع GIF من الصور — حوّل عدة صور إلى صورة متحركة مع التحكم في السرعة وعدد مرات التشغيل
- 按钮：إنشاء GIF / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：crear gif con imágenes；hacer gif animado con fotos；convertir imágenes a gif
- 语气：tú
- Title：Crear GIF con imágenes — convierte varias fotos en un GIF animado con la velocidad y repeticiones que quieras
- 按钮：Crear GIF / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：fazer gif com fotos；criar gif animado；juntar imagens em gif
- 语气：você（pt-BR）
- Title：Fazer GIF com fotos — junte várias imagens em um GIF animado com velocidade e repetições sob medida
- 按钮：Criar GIF / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：créer un gif animé à partir d’images；faire un gif avec des photos；images en gif
- 语气：vouvoiement
- Title：Créer un GIF animé à partir d’images — assemblez vos photos et réglez vitesse et nombre de lectures
- 按钮：Créer le GIF / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：GIF aus Bildern erstellen；animiertes GIF aus Fotos；Bilder zu GIF
- 语气：Sie-Form
- Title：GIF aus Bildern erstellen — mehrere Fotos zu einem animierten GIF mit eigenem Tempo und Wiederholungen
- 按钮：GIF erstellen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：сделать gif из фотографий；создать гифку из картинок；gif анимация онлайн
- 语气：нейтральный
- Title：Сделать GIF из фотографий — анимация из нескольких картинок со своей скоростью и числом повторов
- 按钮：Создать GIF / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：buat gif dari gambar；gabungkan foto jadi gif；gif animasi online
- 语气：Anda
- Title：Buat GIF dari Gambar — Gabungkan Beberapa Foto Jadi GIF Animasi dengan Kecepatan dan Jumlah Putar Sendiri
- 按钮：Buat GIF / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 加 GIF maker / animated / speed / loop count；02 同意图搜索全表（per-frame delay、fps、loop once、reorder、boomerang、hold last frame 吸；视频转 GIF / 拼图 / 压缩 GIF 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 Images to GIF Maker + speed + loop count；desc 写 steps + example；每帧延时 / fps 换算 / 循环次数 / 只播一次 / 共享调色板 / 回旋 / 停留末帧各有界面控件 + How + FAQ 落点 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（图片合成GIF动图、GIFアニメを作成、crear GIF con imágenes、GIF aus Bildern erstellen 等）；zh title 改为结果导向以避开目录腔 | 十语键集与 en 一致（107 键）；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 brief | 2026-08-08 | Phase 0 立项 briefs-ready | 初版上线；2026-10-14 审计判定过薄，已重写 |
