# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`bulk-convert-images-to-png`  
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

技术专名（PNG、ZIP）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：bulk convert images to png; jpg to png; convert to png; png converter; jpeg to png
- 语气：口语工具站
- Title / H1 方向：Bulk convert images to PNG
- 按钮短词：Convert all; Download ZIP; Load sample; Clear
- 本地示例用词：keep alpha, screenshot PNG
- 可保留英文/符号：PNG, ZIP
- 额外禁用：parameter-list H1; doorway; slug; JPEG matte UI copy
- SERP 竞品 title（1–3）：JPG to PNG converter
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量转换成 png; jpg 转 png; 转成 png; 图片转 png; jpeg 转 png
- 语气：口语工具站
- Title / H1 方向：批量把图片转成 PNG（不要把 bulk 塞进中文 H1）
- 按钮短词：全部转换; 下载 ZIP; 载入样例; 清空
- 本地示例用词：保留透明、截图 PNG
- 可保留英文/符号：PNG、ZIP
- 额外禁用：参数顿号；SEO 元叙述
- SERP 竞品 title（1–3）：JPG 转 PNG 在线
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir imágenes a png; jpg a png; convertir a png; convertidor png; jpeg a png
- 语气：口语工具站
- Title / H1 方向：Convertir imágenes a PNG en lote
- 按钮短词：Convertir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：conservar transparencia
- 可保留英文/符号：PNG, ZIP
- 额外禁用：altas y bajas; lista de controles
- SERP 竞品 title（1–3）：JPG a PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل الصور إلى png; jpg إلى png; تحويل إلى png; محول png; jpeg إلى png
- 语气：口语工具站
- Title / H1 方向：تحويل الصور إلى PNG بالجملة
- 按钮短词：تحويل الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：الحفاظ على الشفافية
- 可保留英文/符号：PNG, ZIP
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：JPG إلى PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：converter imagens para png; jpg para png; converter para png; conversor png; jpeg para png
- 语气：口语工具站
- Title / H1 方向：Converter imagens para PNG em lote
- 按钮短词：Converter tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：manter transparência
- 可保留英文/符号：PNG, ZIP
- 额外禁用：H1 de enumeração
- SERP 竞品 title（1–3）：JPG para PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah gambar ke png; jpg ke png; konversi ke png; konverter png; jpeg ke png
- 语气：口语工具站
- Title / H1 方向：Ubah gambar menjadi PNG sekaligus
- 按钮短词：Ubah semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：tetap transparan
- 可保留英文/符号：PNG, ZIP
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：jpg ke png
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir images en png; jpg vers png; convertir en png; convertisseur png; jpeg vers png
- 语气：口语工具站
- Title / H1 方向：Convertir des images en PNG en lot
- 按钮短词：Tout convertir; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：garder la transparence
- 可保留英文/符号：PNG, ZIP
- 额外禁用：titre catalogue
- SERP 竞品 title（1–3）：JPG vers PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：画像を png に一括変換; jpg を png に; png に変換; png 変換; jpeg を png に
- 语气：口语工具站
- Title / H1 方向：画像を PNG に一括変換
- 按钮短词：すべて変換; ZIP をダウンロード; サンプル読込; クリア
- 本地示例用词：透過を維持
- 可保留英文/符号：PNG, ZIP
- 额外禁用：「ユースケース」空壳
- SERP 竞品 title（1–3）：JPG を PNG に
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：конвертировать в png; jpg в png; в png; конвертер png; jpeg в png
- 语气：口语工具站
- Title / H1 方向：Конвертировать изображения в PNG пакетом
- 按钮短词：Конвертировать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：сохранить прозрачность
- 可保留英文/符号：PNG, ZIP
- 额外禁用：H1-список
- SERP 竞品 title（1–3）：JPG в PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：Bilder in PNG umwandeln; JPG zu PNG; nach PNG konvertieren; PNG-Konverter; JPEG zu PNG
- 语气：口语工具站
- Title / H1 方向：Bilder in Masse nach PNG umwandeln
- 按钮短词：Alle umwandeln; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Transparenz behalten
- 可保留英文/符号：PNG, ZIP
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：JPG zu PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 英文 H1 定为 Bulk convert images to PNG；jpg to png 写入 FAQ；去掉 JPEG 垫底控件文案 | 覆盖表与意图总判已写入 02；保透明且无垫底 UI，中文 H1 用转成 PNG 而不塞 bulk，体积变大警告已列入结果区规格 |
| 1 母版+lint | 2026-09-03 | 母版 en.ts 全键：H1 Bulk convert images to PNG；无垫底 UI；JPEG 变大写入 status/FAQ；how_item 五步 | 键齐，待 merge + lint:tool-page |
| 1b 母版检索覆盖优化 | 2026-09-03 | 相对万能转换下拉：H1 锁「Bulk convert images to PNG」；jpg to png / jpeg to png 进 FAQ 与 usecase_3；description 含 steps/example；无 JPEG 垫底控件文案、无参数枚举 title | 主词在 H1；次词有 FAQ/Use case 落点 |
| 2 按 brief 重写 | 2026-09-03 | 九语按当地检索句独立重写：zh 批量把图片转成 PNG；es Convertir imágenes a PNG en lote；ja 画像を PNG に一括変換；无垫底 UI 文案；jpeg/jpg 转 png 进 FAQ | 十语齐，禁词表已勾 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查 en,zh,es,ja：H1 当地场景句；description 含 steps/pasos/手順 与 example/ejemplo/例；jpg to png / jpg 转 png 落 FAQ；隐私句「设备+不上服务器」 | 主词在各语 H1；次词有 FAQ/Use case 落点 |
| 3 抽查+禁词+lint | 2026-09-03 | 禁词再扫：无参数枚举 H1、无 SEO 元叙述、无 ユースケース 空壳；fr 撇号已转义 | 通过 |
