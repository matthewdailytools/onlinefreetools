# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`bulk-convert-images-to-webp`  
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

技术专名（WebP、ZIP）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：bulk convert images to webp; png to webp; convert to webp; webp converter; images to webp
- 语气：口语工具站
- Title / H1 方向：Bulk convert images to WebP
- 按钮短词：Convert all; Download ZIP; Load sample; Clear
- 本地示例用词：site assets, lossy plus alpha
- 可保留英文/符号：WebP, ZIP
- 额外禁用：format switcher H1; doorway; slug
- SERP 竞品 title（1–3）：PNG to WebP; Squoosh
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量转换成 webp; png 转 webp; 转成 webp; 图片转 webp; webp 转换
- 语气：口语工具站
- Title / H1 方向：批量把图片转成 WebP（不要把 bulk 塞进中文 H1）
- 按钮短词：全部转换; 下载 ZIP; 载入样例; 清空
- 本地示例用词：站点资源、有损且可透明
- 可保留英文/符号：WebP、ZIP
- 额外禁用：参数顿号；自称唯一转换器
- SERP 竞品 title（1–3）：PNG 转 WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir imágenes a webp; png a webp; convertir a webp; convertidor webp; fotos a webp
- 语气：口语工具站
- Title / H1 方向：Convertir imágenes a WebP en lote
- 按钮短词：Convertir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：recursos del sitio, transparencia
- 可保留英文/符号：WebP, ZIP
- 额外禁用：altas y bajas
- SERP 竞品 title（1–3）：PNG a WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل الصور إلى webp; png إلى webp; تحويل إلى webp; محول webp; صور webp
- 语气：口语工具站
- Title / H1 方向：تحويل الصور إلى WebP بالجملة
- 按钮短词：تحويل الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：موارد الموقع
- 可保留英文/符号：WebP, ZIP
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：PNG إلى WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：converter imagens para webp; png para webp; converter para webp; conversor webp; fotos para webp
- 语气：口语工具站
- Title / H1 方向：Converter imagens para WebP em lote
- 按钮短词：Converter tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：assets do site
- 可保留英文/符号：WebP, ZIP
- 额外禁用：H1 de enumeração
- SERP 竞品 title（1–3）：PNG para WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah gambar ke webp; png ke webp; konversi ke webp; konverter webp; foto jadi webp
- 语气：口语工具站
- Title / H1 方向：Ubah gambar menjadi WebP sekaligus
- 按钮短词：Ubah semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：aset situs
- 可保留英文/符号：WebP, ZIP
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：png ke webp
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir images en webp; png vers webp; convertir en webp; convertisseur webp; photos en webp
- 语气：口语工具站
- Title / H1 方向：Convertir des images en WebP en lot
- 按钮短词：Tout convertir; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：ressources du site
- 可保留英文/符号：WebP, ZIP
- 额外禁用：titre catalogue
- SERP 竞品 title（1–3）：PNG vers WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：画像を webp に一括変換; png を webp に; webp に変換; webp 変換; 写真を webp に
- 语气：口语工具站
- Title / H1 方向：画像を WebP に一括変換
- 按钮短词：すべて変換; ZIP をダウンロード; サンプル読込; クリア
- 本地示例用词：サイト素材、透過付き有損
- 可保留英文/符号：WebP, ZIP
- 额外禁用：「ユースケース」空壳
- SERP 竞品 title（1–3）：PNG を WebP に
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：конвертировать в webp; png в webp; в webp; конвертер webp; фото в webp
- 语气：口语工具站
- Title / H1 方向：Конвертировать изображения в WebP пакетом
- 按钮短词：Конвертировать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：ресурсы сайта
- 可保留英文/符号：WebP, ZIP
- 额外禁用：H1-список
- SERP 竞品 title（1–3）：PNG в WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：Bilder in WebP umwandeln; PNG zu WebP; nach WebP konvertieren; WebP-Konverter; Fotos als WebP
- 语气：口语工具站
- Title / H1 方向：Bilder in Masse nach WebP umwandeln
- 按钮短词：Alle umwandeln; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Website-Assets
- 可保留英文/符号：WebP, ZIP
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：PNG zu WebP
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 英文 H1 定为 Bulk convert images to WebP；png to webp 写入 FAQ；明确本页不是唯一转换入口只写进 brief 不写进用户 H1 | 覆盖表与意图总判已写入 02；有损加透明且无格式切换，中文 H1 用转成 WebP 而不塞 bulk，不认 WebP 的客户端已进 FAQ 要点 |
| 1 母版+lint | 2026-09-03 | 母版 en.ts 全键：H1 Bulk convert images to WebP；质量默认 0.8；png to webp 进 FAQ；不支持 WebP 则跳过不写 JPEG | 键齐，待 merge + lint:tool-page |
| 1b 母版检索覆盖优化 | 2026-09-03 | 相对万能转换下拉：H1 锁「Bulk convert images to WebP」；png to webp 进 FAQ 与 usecase_2；description 含 steps/example；邮箱不认 WebP 进 FAQ；无格式切换 title | 主词在 H1；次词有 FAQ/Use case 落点 |
| 2 按 brief 重写 | 2026-09-03 | 九语按当地检索句独立重写：zh 批量把图片转成 WebP；es Convertir imágenes a WebP en lote；ja 画像を WebP に一括変換；png to webp 进 FAQ；邮箱不认进 FAQ | 十语齐，禁词表已勾 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查 en,zh,es,ja：H1 当地场景句；description 含 steps/pasos/手順 与 example/ejemplo/例；png to webp 落 FAQ；隐私句「设备+不上服务器」 | 主词在各语 H1；次词有 FAQ/Use case 落点 |
| 3 抽查+禁词+lint | 2026-09-03 | 禁词再扫：无格式切换 H1、无 SEO 元叙述、无 ユースケース 空壳；fr 撇号已转义 | 通过 |
