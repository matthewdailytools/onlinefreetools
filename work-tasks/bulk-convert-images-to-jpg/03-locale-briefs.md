# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`bulk-convert-images-to-jpg`  
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

技术专名（JPG、JPEG、HEIC、ZIP）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：bulk convert images to jpg; png to jpg; heic to jpg; convert to jpeg; images to jpg
- 语气：口语工具站
- Title / H1 方向：Bulk convert images to JPG
- 按钮短词：Convert all; Download ZIP; Load sample; Clear; White matte
- 本地示例用词：form JPG, email attachment, white matte
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：parameter-list H1; doorway; slug
- SERP 竞品 title（1–3）：Convert PNG to JPG; iLoveIMG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量转换成 jpg; png 转 jpg; heic 转 jpg; 图片转 jpeg; 转成 jpg
- 语气：口语工具站
- Title / H1 方向：批量把图片转成 JPG（不要把 bulk 塞进中文 H1）
- 按钮短词：全部转换; 下载 ZIP; 载入样例; 清空
- 本地示例用词：报名表 JPG、邮件附件、白色垫底
- 可保留英文/符号：JPG、JPEG、HEIC、ZIP
- 额外禁用：参数顿号标题；SEO 元叙述
- SERP 竞品 title（1–3）：PNG 转 JPG 在线
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir imágenes a jpg; png a jpg; heic a jpg; convertir a jpeg; pasar fotos a jpg
- 语气：口语工具站
- Title / H1 方向：Convertir imágenes a JPG en lote
- 按钮短词：Convertir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：adjunto de correo, fondo blanco
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：H1 tipo lista; altas y bajas
- SERP 竞品 title（1–3）：convertir PNG a JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل الصور إلى jpg; png إلى jpg; heic إلى jpg; تحويل إلى jpeg; تحويل الصور jpg
- 语气：口语工具站
- Title / H1 方向：تحويل الصور إلى JPG بالجملة
- 按钮短词：تحويل الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：مرفق البريد، خلفية بيضاء
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：تحويل PNG إلى JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：converter imagens para jpg; png para jpg; heic para jpg; converter para jpeg; passar fotos para jpg
- 语气：口语工具站
- Title / H1 方向：Converter imagens para JPG em lote
- 按钮短词：Converter tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：anexo de e-mail, fundo branco
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：H1 de enumeração
- SERP 竞品 title（1–3）：converter PNG para JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah gambar ke jpg; png ke jpg; heic ke jpg; konversi ke jpeg; foto jadi jpg
- 语气：口语工具站
- Title / H1 方向：Ubah gambar menjadi JPG sekaligus
- 按钮短词：Ubah semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：lampiran email, latar putih
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：png ke jpg online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir images en jpg; png vers jpg; heic vers jpg; convertir en jpeg; photos en jpg
- 语气：口语工具站
- Title / H1 方向：Convertir des images en JPG en lot
- 按钮短词：Tout convertir; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：pièce jointe, fond blanc
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：titre catalogue
- SERP 竞品 title（1–3）：PNG vers JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：画像を jpg に一括変換; png を jpg に; heic を jpg に; jpeg に変換; 写真を jpg に
- 语气：口语工具站
- Title / H1 方向：画像を JPG に一括変換
- 按钮短词：すべて変換; ZIP をダウンロード; サンプル読込; クリア
- 本地示例用词：添付 JPG、白マット
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：「ユースケース」空壳
- SERP 竞品 title（1–3）：PNG を JPG に変換
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：конвертировать изображения в jpg; png в jpg; heic в jpg; в jpeg; фото в jpg
- 语气：口语工具站
- Title / H1 方向：Конвертировать изображения в JPG пакетом
- 按钮短词：Конвертировать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：вложение почты, белый фон
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：H1-список параметров
- SERP 竞品 title（1–3）：PNG в JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：Bilder in JPG umwandeln; PNG zu JPG; HEIC zu JPG; in JPEG konvertieren; Fotos als JPG
- 语气：口语工具站
- Title / H1 方向：Bilder in Masse nach JPG umwandeln
- 按钮短词：Alle umwandeln; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：E-Mail-Anhang, weißer Hintergrund
- 可保留英文/符号：JPG, JPEG, HEIC, ZIP
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：PNG zu JPG
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 英文 H1 定为 Bulk convert images to JPG；png to jpg 与 heic to jpg 并入 FAQ 与失败行；jpeg 只写扩展名 FAQ | 覆盖表与意图总判已写入 02；进页即 JPG 无格式下拉，中文 H1 用转成 JPG 而不塞 bulk，透明垫底规则已写进交互 |
| 1 母版+lint | 2026-09-03 | 写 catalog opts、垫底 JPEG Page、en 全键 | 进页即 JPG；透明样例垫白；无格式下拉 |
| 1b 母版检索覆盖优化 | 2026-09-03 | en title 锁定 Bulk convert images to JPG；desc 写入 steps/example、png/heic、设备+不上服务器 | 主词在 H1；jpeg 只在 FAQ；无参数目录腔 |
| 2 按 brief 重写 | 2026-09-03 | 九语按当地检索词独立写 H1/How/FAQ，png/heic 进 FAQ，jpeg 仅 FAQ，隐私写设备+不上服务器 | zh/es/ja 等 title 与 en 不同骨架；无 doorway 元叙述 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查语 en,zh,es,ja：en 保持 Bulk convert images to JPG；zh 批量把图片转成 JPG；es Convertir imágenes a JPG en lote；ja 画像を JPG に一括変換；次词 png/heic 落 FAQ，jpeg 仅 FAQ | 四语主词在 H1；desc 含步骤/示例信号；无参数目录腔 |
| 3 抽查+禁词+lint | 2026-09-03 | 抽 en+zh+es+ja 及 ar/ru：隐私两层、How 开篇不同构、禁词表、jpeg 不进 H1 | 待母语抽查未勾；九语键齐；输出一律 .jpg |
