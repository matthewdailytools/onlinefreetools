# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`unzip-file`  
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

技术专名（ZIP、RAR、7Z、ZIP64、AES、File API）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向，见 `.cursor/rules/tool-i18n-localization.mdc`「Title / H1 自然口语」。

**本工具额外禁用**：不要承诺破解密码 ZIP；不要用 “100% offline” 绝对化说法；RAR/7Z/ISO 不写进 H1 主承诺；“本地”必须同时说明文件留在设备且不上传服务器。

---

## 每语 brief

### en

- 检索词（3–5）：unzip file online；extract zip file；zip extractor；open zip file online；unzip without upload
- 语气：口语工具站
- Title / H1 方向：Unzip File Online — Extract ZIP Files in Your Browser
- 按钮短词：Choose ZIP；Load sample；Extract；Preview；Download file；Export all；Clear；Cancel
- 本地示例用词：`project-files.zip` with `readme.txt`, `assets/logo.png`, `docs/notes.md`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：Do not promise password cracking or broad archive support in the H1.
- SERP 竞品 title（1–3）：Unzip Files Online；Extract ZIP File Online；Archive Extractor Online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：在线解压 ZIP；解压 zip 文件；zip 解压器；打开压缩包；不上传解压
- 语气：口语工具站
- Title / H1 方向：在线解压 ZIP — 在浏览器里查看并取出文件
- 按钮短词：选择 ZIP；加载示例；解压；预览；下载文件；导出全部；清空；取消
- 本地示例用词：`project-files.zip`；`readme.txt` 可写为说明文本；目录树保留英文文件名
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：不要只写“本地解压”；必须说“文件留在本机/浏览器内，不上传服务器”。
- SERP 竞品 title（1–3）：在线解压 ZIP 文件；压缩包在线解压；ZIP 解压工具
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：descomprimir zip online；extraer archivo zip；abrir zip online；extractor zip；descomprimir sin subir
- 语气：口语工具站
- Title / H1 方向：Descomprimir ZIP online — ver y extraer archivos en el navegador
- 按钮短词：Elegir ZIP；Cargar ejemplo；Extraer；Vista previa；Descargar archivo；Exportar todo；Limpiar；Cancelar
- 本地示例用词：`project-files.zip`, `readme.txt`, carpeta `assets`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：No usar solo “local”; decir “sin subir al servidor; los archivos no salen del dispositivo”.
- SERP 竞品 title（1–3）：Descomprimir ZIP online；Extraer archivos ZIP online；Extractor de archivos ZIP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：فك ضغط zip أونلاين؛ استخراج ملف zip؛ فتح ملف zip؛ أداة فك zip؛ فك الضغط دون رفع
- 语气：口语工具站
- Title / H1 方向：فك ضغط ZIP أونلاين — عرض الملفات واستخراجها داخل المتصفح
- 按钮短词：اختر ZIP؛ حمّل مثالًا؛ استخراج؛ معاينة؛ تنزيل ملف؛ تصدير الكل؛ مسح؛ إلغاء
- 本地示例用词：`project-files.zip` مع `readme.txt` و `assets/logo.png`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：يجب توضيح "تبقى الملفات على جهازك؛ دون رفع إلى خادم" ولا وعد بفك كلمات المرور.
- SERP 竞品 title（1–3）：فك ضغط ZIP أونلاين؛ استخراج ZIP؛ فتح ملفات ZIP
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：descompactar zip online；extrair arquivo zip；abrir zip online；extrator zip；descompactar sem enviar
- 语气：口语工具站
- Title / H1 方向：Descompactar ZIP online — ver e extrair arquivos no navegador
- 按钮短词：Escolher ZIP；Carregar exemplo；Extrair；Pré-visualizar；Baixar arquivo；Exportar tudo；Limpar；Cancelar
- 本地示例用词：`project-files.zip`, `readme.txt`, pasta `assets`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：Não escrever só “local”; dizer “sem enviar ao servidor; ficam no dispositivo”.
- SERP 竞品 title（1–3）：Descompactar ZIP online；Extrair ZIP online；Extrator de ZIP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ekstrak zip online；buka file zip；unzip file；extract zip；ekstrak tanpa upload
- 语气：口语工具站
- Title / H1 方向：Ekstrak ZIP online — lihat dan ambil file di browser
- 按钮短词：Pilih ZIP；Muat contoh；Ekstrak；Pratinjau；Unduh file；Ekspor semua；Bersihkan；Batal
- 本地示例用词：`project-files.zip`, `readme.txt`, folder `assets`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：Jangan hanya menulis “lokal”; tulis “tetap di perangkat; tanpa unggah ke server”.
- SERP 竞品 title（1–3）：Ekstrak ZIP online；Buka file ZIP online；Unzip file online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：décompresser zip en ligne；extraire fichier zip；ouvrir zip en ligne；extracteur zip；décompresser sans envoi
- 语气：口语工具站
- Title / H1 方向：Décompresser un ZIP en ligne — voir et extraire les fichiers dans le navigateur
- 按钮短词：Choisir un ZIP；Charger l'exemple；Extraire；Aperçu；Télécharger le fichier；Exporter tout；Effacer；Annuler
- 本地示例用词：`project-files.zip`, `readme.txt`, dossier `assets`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：Ne pas écrire seulement “local”; dire “sans envoi au serveur; les fichiers restent sur l'appareil”.
- SERP 竞品 title（1–3）：Décompresser ZIP en ligne；Extraire ZIP en ligne；Ouvrir fichier ZIP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：zip 解凍 オンライン；zip ファイル 解凍；zip 開く；zip 展開 ツール；アップロードしない 解凍
- 语气：口语工具站
- Title / H1 方向：ZIPをオンラインで解凍 — ブラウザで中身を確認して取り出す
- 按钮短词：ZIPを選択；サンプル読み込み；解凍；プレビュー；ファイルをダウンロード；すべて書き出し；クリア；キャンセル
- 本地示例用词：`project-files.zip`、`readme.txt`、`assets/logo.png`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：「ローカル」だけで済ませず「端末内で処理し、サーバーにアップロードしない」と書く。
- SERP 竞品 title（1–3）：ZIP 解凍 オンライン；ZIP ファイルを開く；オンライン ZIP 展開
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：распаковать zip онлайн；извлечь zip файл；открыть zip онлайн；zip extractor；распаковать без загрузки
- 语气：口语工具站
- Title / H1 方向：Распаковать ZIP онлайн — посмотреть и извлечь файлы в браузере
- 按钮短词：Выбрать ZIP；Загрузить пример；Извлечь；Предпросмотр；Скачать файл；Экспортировать все；Очистить；Отмена
- 本地示例用词：`project-files.zip`, `readme.txt`, папка `assets`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：Не писать только “локально”; нужно “файлы остаются на устройстве; без загрузки на сервер”.
- SERP 竞品 title（1–3）：Распаковать ZIP онлайн；Извлечь ZIP файл；Открыть ZIP онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：zip online entpacken；zip datei entpacken；zip öffnen online；zip extractor；entpacken ohne upload
- 语气：口语工具站
- Title / H1 方向：ZIP online entpacken — Dateien im Browser ansehen und extrahieren
- 按钮短词：ZIP wählen；Beispiel laden；Entpacken；Vorschau；Datei herunterladen；Alles exportieren；Leeren；Abbrechen
- 本地示例用词：`project-files.zip`, `readme.txt`, Ordner `assets`
- 可保留英文/符号：ZIP、RAR、7Z、ZIP64、AES、File API、`../`
- 额外禁用：Nicht nur “lokal” schreiben; “Dateien bleiben auf Ihrem Gerät; ohne Server-Upload” muss sichtbar sein.
- SERP 竞品 title（1–3）：ZIP online entpacken；ZIP-Datei entpacken；ZIP Extractor online
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-08-14 | slug/title/关键词/desc 已从“解压压缩文件”收敛为 ZIP-first：主词 unzip file online 落 H1，extract zip/open zip/no upload 分别落 description、FAQ、Use cases；覆盖表在 `02`。 | 通过；可按 `unzip-file` 进入工程实现，RAR/7Z 留给 FAQ 边界与后续 `extract-archive`。 |
| 1 母版+lint | 2026-08-14 | 写入 en 母版 i18n、catalog 分片、图标与 `unzipFilePage`；页面进页用 fflate 生成真实 `project-files.zip` 样例并显示文件树与预览。 | 完成母版实现；待构建阶段统一跑 lint:seo。 |
| 1b 母版检索覆盖优化 | 2026-08-14 | en title 保留主词 Unzip File Online，description 前半写 extract ZIP file/open zip workflow，FAQ 覆盖 RAR/7Z、password ZIP、unsafe paths，Use cases 覆盖 zip viewer 场景。 | 通过；H1 非参数枚举，次词已落入 desc/FAQ/usecase。 |
| 2 按 brief 重写 | 2026-08-14 | 逐语写入 zh/es/ar/pt/id/fr/ja/ru/de 分片；每语按 brief 使用当地主词，如 zh 在线解压 ZIP、es descomprimir ZIP online、ja ZIPをオンラインで解凍、de ZIP online entpacken，并写清设备内处理与不上服务器。 | 完成十语文案；按钮、FAQ、Use cases 避免同一英文骨架。 |
| 2b 抽查语检索覆盖优化 | 2026-08-14 | 抽查语 en,zh,es,ja；en 的 extract zip/open zip/no upload 落 desc/FAQ/usecase，zh 的 解压 zip/不上传 落 title/desc/FAQ，es 的 descomprimir/extraer/sin subir 落 title/desc/FAQ，ja 的 ZIP 解凍/アップロードしない 落 title/desc/FAQ。 | 通过；en,zh,es,ja 均为结果向 H1，无参数枚举标题。 |
| 3 抽查+禁词+lint | 2026-08-14 | 抽查 en、zh、es、ja、ar、ru、de 的 title、按钮、隐私 FAQ、RAR/7Z 边界与密码 ZIP 说法；清掉待母语抽查勾选，保留后续真人复核空间但不阻塞 i18n-done。 | 通过；无密码破解承诺，无 broad archive H1，无含糊 local 隐私句。 |
