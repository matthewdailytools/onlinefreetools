# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`archive-extractor`
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
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、File API）可保留，**不可**替代本地主 title。
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁用**：不要承诺密码破解、损坏归档修复、分卷恢复、250+ 格式全覆盖、ZIP→MP3/PDF 等伪转换；不要让 RAR/7Z/ISO 覆盖承诺压过 ZIP/TAR.GZ 核心路径；不要只写“local”，必须说明文件留在设备且不上传服务器。

---

## 每语 brief

### en

- 检索词（3–5）：archive extractor online；extract archive online；rar 7z tar extractor；open tar gz online；extract archive without upload
- 语气：口语工具站
- Title / H1 方向：Archive Extractor Online — open compressed files in your browser
- 按钮短词：Choose archive；Load sample；Extract；Preview；Download file；Export ZIP；Load multi-format engine；Clear；Cancel
- 本地示例用词：`sample-archive.tar.gz` with `README.txt`, `src/index.js`, `assets/logo.png`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：Do not promise password recovery, repair, multi-volume support, or every obscure archive format.
- SERP 竞品 title（1–3）：Archive Extractor Online；Extract Archive Online；RAR 7Z ZIP Extractor
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：在线解压压缩包；压缩包解压器；解压 rar 7z；打开 tar.gz；不上传解压压缩包
- 语气：口语工具站
- Title / H1 方向：压缩包在线解压 — 在浏览器里查看并取出文件
- 按钮短词：选择压缩包；加载示例；解压；预览；下载文件；导出 ZIP；加载多格式引擎；清空；取消
- 本地示例用词：`sample-archive.tar.gz`；`README.txt` 可写作说明文件；源码目录保留 `src/`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：不要只写“本地解压”；必须说“文件留在本机/浏览器内，不上传服务器”；不写“万能解压”。
- SERP 竞品 title（1–3）：压缩包在线解压；RAR 在线解压；7Z 解压工具
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：extractor de archivos online；extraer archivo comprimido online；descomprimir rar 7z；abrir tar gz online；extraer sin subir
- 语气：口语工具站
- Title / H1 方向：Extractor de archivos online — abre archivos comprimidos en el navegador
- 按钮短词：Elegir archivo；Cargar ejemplo；Extraer；Vista previa；Descargar archivo；Exportar ZIP；Cargar motor；Limpiar；Cancelar
- 本地示例用词：`sample-archive.tar.gz`, `README.txt`, carpeta `src`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：No escribir solo “local”; decir “sin subir al servidor; los archivos no salen del dispositivo”.
- SERP 竞品 title（1–3）：Extractor de archivos online；Extraer RAR online；Descomprimir 7Z online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：استخراج الأرشيف أونلاين؛ فك ضغط ملف مضغوط؛ استخراج rar و 7z؛ فتح tar gz؛ فك الضغط دون رفع
- 语气：口语工具站
- Title / H1 方向：استخراج الأرشيف أونلاين — افتح الملفات المضغوطة داخل المتصفح
- 按钮短词：اختر أرشيفًا؛ حمّل مثالًا؛ استخراج؛ معاينة؛ تنزيل ملف؛ تصدير ZIP؛ تحميل محرك الصيغ؛ مسح؛ إلغاء
- 本地示例用词：`sample-archive.tar.gz` مع `README.txt` و `src/index.js`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：يجب توضيح "تبقى الملفات على جهازك؛ دون رفع إلى خادم" ولا وعد باستعادة كلمات المرور.
- SERP 竞品 title（1–3）：استخراج الأرشيف أونلاين؛ فك ضغط RAR أونلاين؛ فتح ملفات 7Z
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：extrator de arquivos online；extrair arquivo compactado online；descompactar rar 7z；abrir tar gz online；extrair sem enviar
- 语气：口语工具站
- Title / H1 方向：Extrator de arquivos online — abra arquivos compactados no navegador
- 按钮短词：Escolher arquivo；Carregar exemplo；Extrair；Pré-visualizar；Baixar arquivo；Exportar ZIP；Carregar motor；Limpar；Cancelar
- 本地示例用词：`sample-archive.tar.gz`, `README.txt`, pasta `src`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：Não escrever só “local”; dizer “sem enviar ao servidor; ficam no dispositivo”.
- SERP 竞品 title（1–3）：Extrator de arquivos online；Extrair RAR online；Descompactar 7Z online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ekstrak arsip online；buka file arsip；extract rar 7z；buka tar gz online；ekstrak tanpa upload
- 语气：口语工具站
- Title / H1 方向：Ekstrak arsip online — buka file kompresi di browser
- 按钮短词：Pilih arsip；Muat contoh；Ekstrak；Pratinjau；Unduh file；Ekspor ZIP；Muat mesin format；Bersihkan；Batal
- 本地示例用词：`sample-archive.tar.gz`, `README.txt`, folder `src`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：Jangan hanya menulis “lokal”; tulis “tetap di perangkat; tanpa unggah ke server”.
- SERP 竞品 title（1–3）：Ekstrak arsip online；Buka file RAR online；Extract 7Z online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：extracteur d archive en ligne；extraire archive en ligne；décompresser rar 7z；ouvrir tar gz en ligne；extraire sans envoi
- 语气：口语工具站
- Title / H1 方向：Extracteur d'archive en ligne — ouvrez les fichiers compressés dans le navigateur
- 按钮短词：Choisir une archive；Charger l'exemple；Extraire；Aperçu；Télécharger le fichier；Exporter ZIP；Charger le moteur；Effacer；Annuler
- 本地示例用词：`sample-archive.tar.gz`, `README.txt`, dossier `src`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：Ne pas écrire seulement “local”; dire “sans envoi au serveur; les fichiers restent sur l'appareil”.
- SERP 竞品 title（1–3）：Extracteur d'archive en ligne；Extraire RAR en ligne；Décompresser 7Z
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：圧縮ファイル 解凍 オンライン；アーカイブ 展開；rar 7z 解凍；tar gz 開く；アップロードしない 解凍
- 语气：口语工具站
- Title / H1 方向：圧縮ファイルをオンラインで解凍 — ブラウザで中身を確認して取り出す
- 按钮短词：アーカイブを選択；サンプル読み込み；解凍；プレビュー；ファイルをダウンロード；ZIPで書き出し；多形式エンジンを読み込み；クリア；キャンセル
- 本地示例用词：`sample-archive.tar.gz`、`README.txt`、`src/index.js`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：「ローカル」だけで済ませず「端末内で処理し、サーバーにアップロードしない」と書く。
- SERP 竞品 title（1–3）：圧縮ファイル 解凍 オンライン；RAR 解凍 オンライン；7Z 展開
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：распаковать архив онлайн；извлечь архив онлайн；открыть rar 7z；открыть tar gz онлайн；распаковать без загрузки
- 语气：口语工具站
- Title / H1 方向：Распаковать архив онлайн — открыть сжатые файлы в браузере
- 按钮短词：Выбрать архив；Загрузить пример；Извлечь；Предпросмотр；Скачать файл；Экспорт ZIP；Загрузить движок；Очистить；Отмена
- 本地示例用词：`sample-archive.tar.gz`, `README.txt`, папка `src`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：Не писать только “локально”; нужно “файлы остаются на устройстве; без загрузки на сервер”.
- SERP 竞品 title（1–3）：Распаковать архив онлайн；Открыть RAR онлайн；Извлечь 7Z онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：archiv online entpacken；archiv extrahieren online；rar 7z entpacken；tar gz online öffnen；entpacken ohne upload
- 语气：口语工具站
- Title / H1 方向：Archiv online entpacken — komprimierte Dateien im Browser öffnen
- 按钮短词：Archiv wählen；Beispiel laden；Entpacken；Vorschau；Datei herunterladen；ZIP exportieren；Format-Engine laden；Leeren；Abbrechen
- 本地示例用词：`sample-archive.tar.gz`, `README.txt`, Ordner `src`
- 可保留英文/符号：ZIP、TAR、TAR.GZ、TGZ、RAR、7Z、ISO、GZIP、`../`
- 额外禁用：Nicht nur “lokal” schreiben; “Dateien bleiben auf Ihrem Gerät; ohne Server-Upload” muss sichtbar sein.
- SERP 竞品 title（1–3）：Archiv online entpacken；RAR online entpacken；7Z online extrahieren
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-14 | slug/title/关键词/desc 已从旧候选 `extract-archive` 收敛到用户给定 `archive-extractor`：主词 archive extractor online 落 H1，Title 去掉格式枚举，extract archive、RAR/7Z/TAR、without upload、RAR/7Z to ZIP 分别落 description、FAQ、Use cases；覆盖表在 `02`。 | 通过；可按 `archive-extractor` 进入工程实现，ZIP-only 意图继续由 `unzip-file` 承接，多格式后缀不拆独立薄页。 |
| 1 母版+lint | 2026-08-14 | 写入 en 母版 i18n、catalog 分片、图标与 `archiveExtractorPage`；页面进页用 fflate 生成真实 `sample-archive.tar.gz` 样例并显示文件树与预览。 | 完成母版实现；随后运行 phase=2 检查 title/description 与 1b 覆盖记录。 |
| 1b 母版检索覆盖优化 | 2026-08-14 | en title 保留主词 Archive Extractor Online，副标题改为 open compressed files 避免格式枚举；description 前半写 extract archive workflow，FAQ 覆盖 RAR/7Z/ISO、password、unsafe paths，Use cases 覆盖 tar.gz source package。 | 通过；H1 非参数枚举，extract archive、RAR/7Z/TAR、without upload、export ZIP 次词已落入 desc/FAQ/usecase。 |
| 2 按 brief 重写 | 2026-08-14 | 逐语写入 zh/es/ar/pt/id/fr/ja/ru/de 分片；每语按 brief 使用当地主词，如 zh 压缩包在线解压、es extractor de archivos online、ja 圧縮ファイルをオンラインで解凍、de Archiv online entpacken，并写清设备内处理与不上服务器。 | 完成十语文案；按钮、FAQ、Use cases 避免同一英文骨架，RAR/7Z/ISO 均作为支持边界说明。 |
| 2b 抽查语检索覆盖优化 | 2026-08-14 | 抽查语 en,zh,es,ja；en 的 archive extractor/extract archive/no upload 落 title/desc/FAQ/usecase，zh 的 在线解压压缩包/解压 rar 7z/不上传 落 title/desc/FAQ，es 的 extractor/extraer/sin subir 落 title/desc/FAQ，ja 的 圧縮ファイル 解凍/アップロードしない 落 title/desc/FAQ。 | 通过；en,zh,es,ja 均为结果向 H1，无参数枚举标题，次词已自然写入 description、FAQ 和 Use cases。 |
| 3 抽查+禁词+lint | 2026-08-14 | 抽查 en、zh、es、ja、ar、ru、de 的 title、按钮、隐私 FAQ、RAR/7Z/ISO 边界与密码说法；确认待母语抽查为空勾，不带未处理标记上线。 | 通过；无密码破解、修复、分卷恢复或万能格式承诺，无含糊 local 隐私句。 |
