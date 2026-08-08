# 03 — 各语言 Locale Brief + 禁词核查

> 规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`image-to-base64`  
**母版语言**：en  
**状态**：`briefs-ready`

---

## 共用禁词 / 禁模式（发布前勾选）

- [ ] 无造词 / 错义借译 / 残缺缩写
- [ ] 场景标题非空壳英借
- [ ] title/H1 非参数枚举目录腔
- [ ] 十语非同一句式骨架
- [ ] 未依赖英文回退冒充缺语种
- [ ] 未脚本同构灌语；待母语抽查已清
- [ ] **检索覆盖已优化**（实现 i18n 时步 2+4）

**本工具额外禁用**：勿暗示上传到服务器；勿与邻近工具 intent 混写（见 02 Related 分工）；勿承诺与 Photoshop/桌面套件像素级一致。

---

## 每语 brief

### en
- 检索词：image to base64；base64 encode image；decode base64 to image；data url image
- 语气：口语工具站
- Title / H1 方向：Image ↔ Base64 — encode & decode in the browser
- 按钮短词：Apply; Download; Clear; Choose image; Load sample
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### zh
- 检索词：图片转Base64；Base64转图片；图片编码base64；data url 图片
- 语气：口语工具站
- Title / H1 方向：图片与 Base64 互转 — 本地编码解码
- 按钮短词：应用；下载；清空；选择图片；加载示例
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### es
- 检索词：imagen a base64；base64 a imagen；codificar imagen base64
- 语气：口语工具站
- Title / H1 方向：Imagen ↔ Base64 — codificar y decodificar
- 按钮短词：Aplicar; Descargar; Limpiar; Elegir imagen; Cargar ejemplo
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ar
- 检索词：تحويل صورة إلى base64；فك base64 إلى صورة
- 语气：口语工具站
- Title / H1 方向：صورة ↔ Base64 — ترميز وفك محلياً
- 按钮短词：تطبيق؛ تنزيل؛ مسح؛ اختر صورة؛ تحميل مثال
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt
- 检索词：imagem para base64；base64 para imagem
- 语气：口语工具站
- Title / H1 方向：Imagem ↔ Base64 — codificar e decodificar
- 按钮短词：Aplicar; Baixar; Limpar; Escolher imagem; Carregar exemplo
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### id
- 检索词：gambar ke base64；base64 ke gambar
- 语气：口语工具站
- Title / H1 方向：Gambar ↔ Base64 — encode & decode lokal
- 按钮短词：Terapkan; Unduh; Bersihkan; Pilih gambar; Muat contoh
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### fr
- 检索词：image en base64；base64 vers image
- 语气：口语工具站
- Title / H1 方向：Image ↔ Base64 — encoder et décoder
- 按钮短词：Appliquer; Télécharger; Effacer; Choisir une image; Charger un exemple
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

### ja
- 检索词：画像 Base64 変換；Base64 を画像に
- 语气：口语工具站
- Title / H1 方向：画像↔Base64 — ブラウザで変換
- 按钮短词：適用；ダウンロード；クリア；画像を選択；サンプル読込
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### ru
- 检索词：изображение в base64；base64 в изображение
- 语气：口语工具站
- Title / H1 方向：Изображение ↔ Base64 — кодировать и декодировать
- 按钮短词：Применить；Скачать；Очистить；Выбрать изображение；Загрузить пример
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de
- 检索词：Bild zu Base64；Base64 zu Bild
- 语气：口语工具站
- Title / H1 方向：Bild ↔ Base64 — lokal kodieren & dekodieren
- 按钮短词：Anwenden；Herunterladen；Löschen；Bild wählen；Beispiel laden
- 本地示例用词：与 Use cases 当地化一致
- 可保留：JPEG、PNG、WebP、PDF、GIF、DOCX、PPTX、Base64、HEX（按工具相关）
- SERP：对齐当地主检索词
- 轮次2已重写：[ ]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0 brief | 2026-08-08 | Phase 0 立项 briefs-ready | 待实现时填轮次 1–3 |
