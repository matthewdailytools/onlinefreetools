# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-checksum-release-files`  
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

技术专名（SHA-256、MD5、CSV、SHA256SUMS）可保留，**不可**替代本地主 title。

---

## 每语 brief

### en

- 检索词（3–5）：batch checksum release files; batch checksum; hash multiple files; sha256sums; checksum several files
- 语气：偏正式开发者
- Title / H1 方向：Batch checksum release files
- 按钮短词：Hash all; Export CSV; Export SUMS; Load sample; Clear
- 本地示例用词：release assets, SHA256SUMS compare
- 可保留英文/符号：SHA-256, MD5, CSV, SHA256SUMS
- 额外禁用：parameter-list H1; doorway; slug; ZIP-of-binaries as primary CTA
- SERP 竞品 title（1–3）：checksum online; hash file
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：批量计算发版文件校验和; 批量校验和; 多个文件哈希; SHA256SUMS 对照; 文件 sha256 批量
- 语气：偏正式开发者
- Title / H1 方向：批量计算发版文件校验和（不要把 batch 塞进中文 H1）
- 按钮短词：全部哈希; 导出 CSV; 导出 SUMS; 载入样例; 清空
- 本地示例用词：发版附件、对照清单
- 可保留英文/符号：SHA-256、MD5、CSV、SHA256SUMS
- 额外禁用：参数顿号；主按钮打原文件 ZIP
- SERP 竞品 title（1–3）：在线文件哈希
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：checksum de archivos de release; checksum por lote; hash de varios archivos; sha256sums; suma de verificación varios
- 语气：偏正式开发者
- Title / H1 方向：Checksum de archivos de publicación por lote
- 按钮短词：Hashear todo; Exportar CSV; Exportar SUMS; Cargar ejemplo; Borrar
- 本地示例用词：assets de release
- 可保留英文/符号：SHA-256, MD5, CSV
- 额外禁用：altas y bajas
- SERP 竞品 title（1–3）：checksum online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：مجموع تحقق لملفات الإصدار; checksum دفعة; هاش عدة ملفات; sha256sums; تحقق عدة ملفات
- 语气：偏正式开发者
- Title / H1 方向：حساب تحقق ملفات الإصدار دفعة واحدة
- 按钮短词：هاش الكل; تصدير CSV; تصدير SUMS; تحميل مثال; مسح
- 本地示例用词：ملفات الإصدار
- 可保留英文/符号：SHA-256, MD5, CSV
- 额外禁用：H1 参数目录腔
- SERP 竞品 title（1–3）：هاش ملفات أونلاين
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：checksum de arquivos de release; checksum em lote; hash de vários arquivos; sha256sums; soma de verificação vários
- 语气：偏正式开发者
- Title / H1 方向：Checksum de arquivos de release em lote
- 按钮短词：Hashear tudo; Exportar CSV; Exportar SUMS; Carregar exemplo; Limpar
- 本地示例用词：assets de release
- 可保留英文/符号：SHA-256, MD5, CSV
- 额外禁用：H1 de enumeração
- SERP 竞品 title（1–3）：checksum online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：checksum file rilis; checksum massal; hash banyak file; sha256sums; ceksum beberapa file
- 语气：偏正式开发者
- Title / H1 方向：Checksum file rilis sekaligus
- 按钮短词：Hash semua; Ekspor CSV; Ekspor SUMS; Muat contoh; Hapus
- 本地示例用词：aset rilis
- 可保留英文/符号：SHA-256, MD5, CSV
- 额外禁用：judul daftar parameter
- SERP 竞品 title（1–3）：hash file online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：somme de contrôle fichiers de release; checksum par lot; hasher plusieurs fichiers; sha256sums; checksum plusieurs fichiers
- 语气：偏正式开发者
- Title / H1 方向：Sommes de contrôle des fichiers de release en lot
- 按钮短词：Tout hasher; Exporter CSV; Exporter SUMS; Charger un exemple; Effacer
- 本地示例用词：binaires de release
- 可保留英文/符号：SHA-256, MD5, CSV
- 额外禁用：titre catalogue
- SERP 竞品 title（1–3）：checksum en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：リリースファイルの一括チェックサム; 複数ファイル ハッシュ; sha256sums 照合; ファイル sha256 一括; チェックサム まとめて
- 语气：偏正式开发者
- Title / H1 方向：リリースファイルのチェックサムを一括計算
- 按钮短词：すべてハッシュ; CSV 書き出し; SUMS 書き出し; サンプル読込; クリア
- 本地示例用词：リリース資産、SUMS 照合
- 可保留英文/符号：SHA-256, MD5, CSV, SHA256SUMS
- 额外禁用：「ユースケース」空壳
- SERP 竞品 title（1–3）：ファイル ハッシュ オンライン
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：контрольная сумма файлов релиза; checksum пакетом; хеш нескольких файлов; sha256sums; checksum несколько файлов
- 语气：偏正式开发者
- Title / H1 方向：Контрольные суммы файлов релиза пакетом
- 按钮短词：Хешировать все; Экспорт CSV; Экспорт SUMS; Загрузить пример; Очистить
- 本地示例用词：релизы, сверка SUMS
- 可保留英文/符号：SHA-256, MD5, CSV
- 额外禁用：H1-список
- SERP 竞品 title（1–3）：хеш файлов онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：Checksum von Release-Dateien; Checksum in Masse; mehrere Dateien hashen; sha256sums; Prüfsumme mehrerer Dateien
- 语气：偏正式开发者
- Title / H1 方向：Checksums für Release-Dateien in Masse
- 按钮短词：Alle hashen; CSV exportieren; SUMS exportieren; Beispiel laden; Leeren
- 本地示例用词：Release-Assets
- 可保留英文/符号：SHA-256, MD5, CSV
- 额外禁用：Parameterkatalog-H1
- SERP 竞品 title（1–3）：Checksum online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-03 | 英文 H1 定为 Batch checksum release files；sha256sums 落入粘贴对照与导出；产物改为表与 CSV 而非原文件 ZIP | 覆盖表与意图总判已写入 02；中文 H1 用批量计算发版文件校验和而不塞 batch，MD5 仅芯片、相对路径区分重名已写进交互 |
| 1 母版+lint | 2026-09-03 | 写完 en 全键、catalog opts、Page 分块 SHA-256 + 可选 MD5 + SUMS 对照 + CSV/SUMS 导出，无原文件 ZIP | 母版键齐；页面 ID 前缀 bck |
| 1b 母版检索覆盖优化 | 2026-09-03 | 母版 H1 锁定 Batch checksum release files；desc 写 SHA256SUMS 对照与 CSV/SUMS 导出，明确不是 ZIP 原文件 | 主词在 title/H1；次词 hash multiple files / sha256sums 落入 description 与 FAQ |
| 2 按 brief 重写 | 2026-09-03 | 按 03 十语 brief 独立重写 UI/FAQ/How，非 en 直搬；中文 H1 用批量计算发版文件校验和 | 九语分片已写；隐私句均含设备+不上服务器 |
| 2b 抽查语检索覆盖优化 | 2026-09-03 | 抽查 en,zh,es,ja：各语 title 用当地检索句；description 含 steps/步骤/pasos/手順 与 example/示例/ejemplo/例；产物为表而非 ZIP | en,zh,es,ja 主词在 H1；中文不塞 batch |
| 3 抽查+禁词+lint | 2026-09-03 | 禁词表、隐私句设备+不上服务器、无原文件 ZIP 主按钮 | 十语 round 2/3 已勾；待 lint:tool-page 与 coverage:gate phase=4 |
