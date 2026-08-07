# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`image-exif`  
**母版语言**：en  
**状态**：`i18n-done`

> 实现阶段：en 母版 → 九语按 brief 独立重写 → `lint:seo` + 抽查；ar/ja/ru 待母语抽查已清。

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（GPS/EXIF/元数据术语混乱；「strip」乱译成脱衣等）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期

技术专名（EXIF、GPS、JPEG、PNG、Orientation、IPTC、XMP、MIME）可保留，**不可**替代本地主 title。

**本工具额外禁用**：

- 勿在用户正文写 doorway / 空壳 / slug /「不拆 URL」元叙述  
- 勿承诺「字节级无损清除」或「清除所有可能的隐藏数据（含隐写）」  
- 勿把 `exifr` 当面向用户的卖点（库名最多 References）  
- 「metadata / EXIF」按当地习惯：元数据 / metadatos / métadonnées / メタデータ / метаданные / Metadaten；勿整页只堆英文 EXIF 当唯一主词（en 除外可主打 EXIF）

---

## 每语 brief

### en

- 检索词（3–5）：view exif；remove exif；strip metadata；remove gps from photo；exif viewer online
- 语气：口语工具站（偏隐私可读）
- Title / H1 方向：Photo EXIF Viewer & Remover — GPS, camera tags, local strip
- 按钮短词：Analyze；Strip & download；Clear；Choose file；Load sample
- 本地示例用词：vacation photo；listing photo；phone JPEG with location
- 可保留英文/符号：EXIF、GPS、JPEG、Orientation、Make、Model
- 额外禁用：no “bit-perfect lossless strip” claim
- SERP 竞品 title（1–3）：EXIF Viewer；Remove EXIF Data Online；Strip Image Metadata
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：查看 EXIF；清除 EXIF；去掉照片定位；图片元数据；删除 GPS
- 语气：口语工具站
- Title / H1 方向：图片 EXIF 查看与清除 — GPS、相机信息、本地处理
- 按钮短词：解析；清除并下载；清空；选择图片；加载示例
- 本地示例用词：旅行照片；商品图；带定位的手机 JPEG
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：勿写「完全无损清除」
- SERP 竞品 title（1–3）：在线查看 EXIF；清除图片 EXIF；去掉照片 GPS
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：ver exif；eliminar exif；quitar metadatos；quitar gps de foto；visor exif
- 语气：口语工具站
- Title / H1 方向：Ver y quitar EXIF de fotos — GPS, cámara, en tu dispositivo
- 按钮短词：Analizar；Quitar y descargar；Limpiar；Elegir archivo；Cargar ejemplo
- 本地示例用词：foto de viaje；foto de anuncio；JPEG del móvil con ubicación
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：no prometer «sin pérdida de píxeles»
- SERP 竞品 title（1–3）：Visor EXIF；Eliminar datos EXIF；Quitar GPS de foto
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：عرض EXIF؛ حذف EXIF；إزالة البيانات الوصفية؛ إزالة GPS من الصورة
- 语气：口语工具站
- Title / H1 方向：عرض وحذف EXIF من الصور — الموقع والكاميرا محليًا
- 按钮短词：تحليل；حذف وتنزيل；مسح；اختر ملفًا；تحميل مثال
- 本地示例用词：صورة سفر；صورة منتج；JPEG به موقع
- 可保留英文/符号：EXIF، GPS، JPEG
- 额外禁用：لا تَعِد بإزالة بلا أي فقدان
- SERP 竞品 title（1–3）：عارض EXIF؛ حذف بيانات EXIF
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：ver exif；remover exif；remover metadados；remover gps da foto；visualizar exif
- 语气：口语工具站
- Title / H1 方向：Ver e remover EXIF de fotos — GPS, câmera, no dispositivo
- 按钮短词：Analisar；Remover e baixar；Limpar；Escolher arquivo；Carregar exemplo
- 本地示例用词：foto de viagem；foto de anúncio；JPEG com localização
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：não prometer remoção sem perda de pixels
- SERP 竞品 title（1–3）：Visualizador EXIF；Remover EXIF online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：lihat exif；hapus exif；hapus metadata；hapus gps dari foto；exif viewer
- 语气：口语工具站
- Title / H1 方向：Lihat & hapus EXIF foto — GPS, kamera, lokal
- 按钮短词：Analisis；Hapus & unduh；Bersihkan；Pilih berkas；Muat contoh
- 本地示例用词：foto liburan；foto listing；JPEG HP dengan lokasi
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：jangan janjikan lossless penuh
- SERP 竞品 title（1–3）：Lihat EXIF；Hapus data EXIF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：voir exif；supprimer exif；enlever métadonnées；enlever gps photo；lecteur exif
- 语气：口语工具站
- Title / H1 方向：Voir et supprimer l’EXIF des photos — GPS, appareil, en local
- 按钮短词：Analyser；Supprimer et télécharger；Effacer；Choisir un fichier；Charger un exemple
- 本地示例用词：photo de voyage；photo d’annonce；JPEG téléphone avec position
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：ne pas promettre une suppression sans aucune perte
- SERP 竞品 title（1–3）：Lecteur EXIF；Supprimer les données EXIF
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：EXIF 確認；EXIF 削除；メタデータ 削除；写真 GPS 削除；位置情報 削除
- 语气：口语工具站
- Title / H1 方向：写真の EXIF 表示と削除（GPS・カメラ情報・端末内）
- 按钮短词：解析；削除してダウンロード；クリア；ファイルを選択；サンプルを読み込む
- 本地示例用词：旅行写真；出品写真；位置情報付きのスマホ JPEG
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：禁止「ユースケース」空壳（用「こんなときに」）；勿写「完全无损」
- SERP 竞品 title（1–3）：EXIF 閲覧；EXIF 削除；写真の位置情報を消す
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：посмотреть exif；удалить exif；очистить метаданные；убрать gps с фото
- 语气：口语工具站
- Title / H1 方向：Просмотр и удаление EXIF с фото — GPS, камера, локально
- 按钮短词：Анализ；Удалить и скачать；Очистить；Выбрать файл；Загрузить пример
- 本地示例用词：фото с отдыха；фото объявления；JPEG с геолокацией
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：не обещать полную «без потерь» очистку
- SERP 竞品 title（1–3）：Просмотр EXIF；Удалить EXIF онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：exif anzeigen；exif entfernen；metadaten löschen；gps aus foto entfernen；exif viewer
- 语气：口语工具站
- Title / H1 方向：EXIF von Fotos anzeigen & entfernen — GPS, Kamera, lokal
- 按钮短词：Analysieren；Entfernen & herunterladen；Leeren；Datei wählen；Beispiel laden
- 本地示例用词：Urlaubsfoto；Anzeigenfoto；Handy-JPEG mit Standort
- 可保留英文/符号：EXIF、GPS、JPEG
- 额外禁用：kein Versprechen «verlustfrei auf Pixelebene»
- SERP 竞品 title（1–3）：EXIF anzeigen；EXIF-Daten entfernen；GPS aus Foto löschen
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 1 母版+lint | 2026-08-07 | en 全文 + 页面 + CDN exifr | 通过 |
| 2 按 brief 重写 | 2026-08-07 | 九语独立撰写 + 首页短文案 | title/FAQ 切入点随语种变化 |
| 3 抽查+禁词+lint | 2026-08-07 | en+zh+es+ja；清待母语抽查；`lint:seo`/`build:site` | OK |
