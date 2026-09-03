# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-watermark-product-photos`  
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

技术专名（ZIP）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：batch watermark product photos; batch watermark images; watermark photos in bulk; copyright watermark photos; add watermark to multiple images
- 语气：口语工具站
- Title / H1 方向：Batch watermark product photos
- 按钮短词：Preview one; Apply all; Download ZIP; Load sample; Clear
- 本地示例用词：listing shots, corner copyright, SAMPLE
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：parameter-list H1; doorway; slug
- SERP 竞品 title（1–3）：Batch watermark; iLoveIMG watermark
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量给商品图加水印; 批量水印; 商品图水印; 多张图片加水印; 版权水印
- 语气：口语工具站
- Title / H1 方向：批量给商品图加水印（不要把 batch 塞进中文 H1）
- 按钮短词：预览一张; 全部套用; 下载 ZIP; 载入样例; 清空
- 本地示例用词：上架主图、角标版权、SAMPLE
- 可保留英文/符号：ZIP、DRAFT
- 额外禁用：参数顿号；SEO 元叙述
- SERP 竞品 title（1–3）：在线批量水印
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：marca de agua en fotos de producto; marca de agua por lote; marcar fotos en lote; copyright en fotos; varias imágenes con marca
- 语气：口语工具站
- Title / H1 方向：Marca de agua en fotos de producto por lote
- 按钮短词：Vista previa; Aplicar a todas; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：fotos de ficha, copyright
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：altas y bajas
- SERP 竞品 title（1–3）：marca de agua por lote
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：علامة مائية لصور المنتجات; علامة مائية دفعة; وسم الصور بالجملة; حقوق الصور; علامة على عدة صور
- 语气：口语工具站
- Title / H1 方向：وضع علامة مائية على صور المنتجات دفعة واحدة
- 按钮短词：معاينة واحدة; تطبيق على الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：صور العرض، حقوق
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：علامة مائية للصور
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：marca d'água em fotos de produto; marca d'água em lote; marcar fotos em lote; copyright nas fotos; várias imagens com marca
- 语气：口语工具站
- Title / H1 方向：Marca d'água em fotos de produto em lote
- 按钮短词：Pré-visualizar; Aplicar em todas; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：fotos de anúncio
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：H1 de enumeração
- SERP 竞品 title（1–3）：marca d'água em lote
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：watermark foto produk; watermark massal; stempel foto sekaligus; hak cipta foto; watermark banyak gambar
- 语气：口语工具站
- Title / H1 方向：Watermark foto produk sekaligus
- 按钮短词：Pratinjau satu; Terapkan semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：foto listing, hak cipta
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：watermark massal
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：filigrane photos produit; filigrane par lot; tamponner photos en lot; copyright photos; plusieurs images filigrane
- 语气：口语工具站
- Title / H1 方向：Filigraner des photos produit en lot
- 按钮短词：Aperçu; Appliquer à toutes; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：photos de fiche
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：titre catalogue
- SERP 竞品 title（1–3）：filigrane par lot
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：商品画像に一括透かし; 画像をまとめて透かし; 著作権透かし; 複数画像にウォーターマーク; 透かし一括
- 语气：口语工具站
- Title / H1 方向：商品画像に一括で透かし
- 按钮短词：1枚プレビュー; すべて適用; ZIP をダウンロード; サンプル読込; クリア
- 本地示例用词：出品写真、著作権
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：「ユースケース」空壳
- SERP 竞品 title（1–3）：画像 一括 透かし
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：водяной знак на фото товаров; водяной знак пакетом; штамп на фото оптом; копирайт на фото; несколько изображений знак
- 语气：口语工具站
- Title / H1 方向：Водяной знак на фото товаров пакетом
- 按钮短词：Превью одного; Применить ко всем; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：фото карточки
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：H1-список
- SERP 竞品 title（1–3）：водяной знак пакетом
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：Produktfotos Wasserzeichen; Wasserzeichen in Masse; Fotos stempeln; Copyright auf Fotos; mehrere Bilder Wasserzeichen
- 语气：口语工具站
- Title / H1 方向：Produktfotos in Masse mit Wasserzeichen
- 按钮短词：Eine Vorschau; Auf alle anwenden; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Listing-Fotos
- 可保留英文/符号：ZIP, DRAFT
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：Wasserzeichen in Masse
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 英文 H1 定为 Batch watermark product photos；bulk 写法只进 FAQ；先预览再全部套用写入交互 | 覆盖表与意图总判已写入 02；中文 H1 用批量给商品图加水印而不塞 batch，短边百分比与 PDF 划界已写进 02 |
| 1 母版+lint | 2026-09-03 | 母版 en.ts 全键：H1 Batch watermark product photos；短边百分比；先预览再全部套用；bulk 只进 FAQ | 键齐 |
| 1b 母版检索覆盖优化 | 2026-09-03 | H1 锁商品图批处理句；batch watermark images / add watermark to multiple images 进 desc·How；watermark photos in bulk 只进 FAQ；无参数枚举 title | 主词在 H1；次词有 FAQ/How 落点 |
| 2 按 brief 重写 | 2026-09-03 | 九语按当地检索句独立重写：zh 批量给商品图加水印；es Marca de agua en fotos de producto por lote；ja 商品画像に一括で透かし | 十语齐 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查 en,zh,es,ja：H1 当地场景句；description 含 steps/pasos/手順 与 example/ejemplo/例；PDF 划界与 bulk 落选词进 FAQ | 主词在各语 H1 |
| 3 抽查+禁词+lint | 2026-09-03 | 禁词再扫：无参数枚举 H1、无 SEO 元叙述、无 ユースケース；fr/pt 撇号已转义 | 通过 |
