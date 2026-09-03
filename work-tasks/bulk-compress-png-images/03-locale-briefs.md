# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`bulk-compress-png-images`  
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

技术专名（PNG、ZIP、alpha）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：bulk compress PNG images; compress png; compress png in bulk; tinypng; png compressor
- 语气：口语工具站
- Title / H1 方向：Bulk compress PNG images
- 按钮短词：Compress all; Download ZIP; Load sample; Clear
- 本地示例用词：logo PNG, UI assets, keep transparency
- 可保留英文/符号：PNG, ZIP, alpha
- 额外禁用：parameter-list H1; doorway; slug; “we split this URL”
- SERP 竞品 title（1–3）：TinyPNG; iLoveIMG Compress PNG
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量压缩 PNG; 压缩 png; 压缩透明图片; png 压缩不失真; 在线压缩 png
- 语气：口语工具站
- Title / H1 方向：批量压缩 PNG 图片（不要把 bulk 塞进中文 H1）
- 按钮短词：全部压缩; 下载 ZIP; 载入样例; 清空
- 本地示例用词：透明 logo、切图、保留透明
- 可保留英文/符号：PNG、ZIP
- 额外禁用：参数顿号标题；「为了 SEO 拆页」
- SERP 竞品 title（1–3）：在线压缩 PNG、TinyPNG 中文站
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：comprimir png; comprimir imágenes png en lote; comprimir png sin perder transparencia; reductor png; tinypng
- 语气：口语工具站
- Title / H1 方向：Comprimir imágenes PNG en lote
- 按钮短词：Comprimir todo; Descargar ZIP; Cargar ejemplo; Borrar
- 本地示例用词：logos PNG, conservar transparencia
- 可保留英文/符号：PNG, ZIP
- 额外禁用：H1 tipo lista de controles; altas y bajas
- SERP 竞品 title（1–3）：comprimir PNG online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：ضغط صور png; ضغط png بالجملة; ضغط png مع الشفافية; تصغير png; tinypng
- 语气：口语工具站
- Title / H1 方向：ضغط صور PNG بالجملة
- 按钮短词：ضغط الكل; تنزيل ZIP; تحميل مثال; مسح
- 本地示例用词：شعارات شفافة
- 可保留英文/符号：PNG, ZIP
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：ضغط PNG أونلاين
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：comprimir png; compactar png em lote; comprimir png sem perder transparência; reduzir png; tinypng
- 语气：口语工具站
- Title / H1 方向：Comprimir imagens PNG em lote
- 按钮短词：Comprimir tudo; Baixar ZIP; Carregar exemplo; Limpar
- 本地示例用词：logos PNG, transparência
- 可保留英文/符号：PNG, ZIP
- 额外禁用：H1 de enumeração de parâmetros
- SERP 竞品 title（1–3）：comprimir PNG online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：kompres png; kompres gambar png massal; kompres png tetap transparan; perkecil png; tinypng
- 语气：口语工具站
- Title / H1 方向：Kompres gambar PNG sekaligus
- 按钮短词：Kompres semua; Unduh ZIP; Muat contoh; Hapus
- 本地示例用词：logo PNG, transparansi
- 可保留英文/符号：PNG, ZIP
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：kompres PNG online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：compresser png; compresser images png en lot; compresser png sans perdre la transparence; réduire png; tinypng
- 语气：口语工具站
- Title / H1 方向：Compresser des images PNG en lot
- 按钮短词：Tout compresser; Télécharger le ZIP; Charger un exemple; Effacer
- 本地示例用词：logos PNG, transparence
- 可保留英文/符号：PNG, ZIP
- 额外禁用：titre catalogue de paramètres
- SERP 竞品 title（1–3）：compresser PNG en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：png を一括圧縮; png 圧縮; 透過を保ったまま圧縮; png 容量を小さく; tinypng
- 语气：口语工具站
- Title / H1 方向：PNG 画像を一括圧縮
- 按钮短词：すべて圧縮; ZIP をダウンロード; サンプル読込; クリア
- 本地示例用词：透過ロゴ、UI 素材
- 可保留英文/符号：PNG, ZIP
- 额外禁用：「ユースケース」空壳标题
- SERP 竞品 title（1–3）：PNG 一括圧縮
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：сжать png; сжать png оптом; сжать png без потери прозрачности; уменьшить png; tinypng
- 语气：口语工具站
- Title / H1 方向：Сжать PNG-изображения пакетом
- 按钮短词：Сжать все; Скачать ZIP; Загрузить пример; Очистить
- 本地示例用词：прозрачные логотипы
- 可保留英文/符号：PNG, ZIP
- 额外禁用：H1-список параметров
- SERP 竞品 title（1–3）：сжать PNG онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：PNG komprimieren; PNG-Bilder in Masse komprimieren; PNG ohne Transparenzverlust; PNG verkleinern; tinypng
- 语气：口语工具站
- Title / H1 方向：PNG-Bilder in Masse komprimieren
- 按钮短词：Alle komprimieren; ZIP herunterladen; Beispiel laden; Leeren
- 本地示例用词：Logo-PNG, Transparenz behalten
- 可保留英文/符号：PNG, ZIP
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：PNG online komprimieren
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 对照表格把英文 H1 定为 Bulk compress PNG images；次词 compress png、tinypng 落入默认 PNG 输出与 FAQ；禁止进页转 JPEG | 覆盖表与意图总判已写入 02；主词在英文 H1，中文 H1 用批量压缩 PNG 而不塞 bulk，PNG 保透明与商品图有损已划界 |
| 1 母版+lint | 2026-09-03 | 写 catalog opts、透明棋盘样例 Page、en 全键 | 默认 PNG+alpha；1024 / 只重编码芯片；无 JPEG 垫底 |
| 1b 母版检索覆盖优化 | 2026-09-03 | en title 锁定 Bulk compress PNG images；desc 写入 steps/example、keep transparency、设备+不上服务器；去掉参数目录腔 | 主词在 H1；tinypng 类意图在 FAQ 划界为保 PNG 而非劝 JPEG |
| 2 按 brief 重写 | 2026-09-03 | 九语按当地检索词独立重写全键：H1 对齐 brief、FAQ/How 开篇换句式、隐私写设备+不上服务器 | 未从 en 直译；输出仍为 PNG+alpha；无 JPEG 默认、无 doorway 元叙述 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查语 en,zh,es,ja：主词落 H1，次词透明/tinypng 类意图进 desc 与 FAQ，desc 含步骤/示例信号 | en/zh/es/ja title 各为当地检索句，非同一英模骨架；次词 compress png、保透明已有落点 |
| 3 抽查+禁词+lint | 2026-09-03 | 抽 en+zh+es+ja 的 title、按钮、FAQ、隐私句；扫禁词与参数目录腔 H1 | 无译腔同构；隐私双层齐全；待母语抽查未勾；02 仍 ready 待父会话 ship |
