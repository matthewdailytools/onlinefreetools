# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`。

**工具 slug**：`create-zip-file`  
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
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**

技术专名：ZIP、Gzip、DEFLATE、File API。  
**额外禁用**：H1 不用 zip files online；不承诺破解/AES 密码 ZIP 头词；不把 compress files to zip 当主词。

---

## 每语 brief

### en

- 检索词（3–5）：create zip file；zip folder online；make a zip file；gzip file；zip files with password
- 语气：口语工具站
- Title / H1 方向：Create zip file
  # 跟紧该语检索长尾原句；卖点进 desc，禁止破折号营销后缀
- 按钮短词：Choose files；Load sample；Download ZIP；Clear；ZIP；Gzip
- 本地示例用词：notes.txt, photo.png, docs/readme.md → sample.zip
- 可保留英文/符号：ZIP、Gzip、DEFLATE
- 额外禁用：Do not H1 “Zip Files Online”.
- SERP 竞品 title（1–3）：Zip Files Online；Create ZIP File；ezyZip
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：创建 zip 文件；在线打包 zip；文件夹打成 zip；gzip 压缩；加密 zip
- 语气：口语工具站
- Title / H1 方向：创建 zip 文件
- 按钮短词：选择文件；加载示例；下载 ZIP；清空；ZIP；Gzip
- 本地示例用词：notes.txt、photo.png、docs/readme.md → sample.zip
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：H1 不要写「在线压缩文件」去抢 PDF 压缩；隐私须写留在设备且不上传服务器
- SERP 竞品 title（1–3）：在线压缩 zip；文件打包 zip
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：crear archivo zip；comprimir carpeta en zip；hacer un zip；archivo gzip；zip con contraseña
- 语气：口语工具站
- Title / H1 方向：Crear archivo zip
- 按钮短词：Elegir archivos；Cargar ejemplo；Descargar ZIP；Limpiar
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：No usar solo “local”; decir que no se sube al servidor
- SERP 竞品 title（1–3）：Crear ZIP online；Comprimir archivos ZIP
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：إنشاء ملف zip；ضغط مجلد zip；عمل ملف zip；gzip；zip بكلمة مرور
- 语气：口语工具站
- Title / H1 方向：إنشاء ملف zip
- 按钮短词：اختر ملفات؛ حمّل مثالًا؛ نزّل ZIP؛ مسح
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：وضح أن الملفات تبقى على الجهاز دون رفع
- SERP 竞品 title（1–3）：إنشاء ZIP أونلاين
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：criar arquivo zip；zipar pasta；fazer um zip；gzip；zip com senha
- 语气：口语工具站
- Title / H1 方向：Criar arquivo zip
- 按钮短词：Escolher arquivos；Carregar exemplo；Baixar ZIP；Limpar
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：Dizer que fica no dispositivo e não sobe ao servidor
- SERP 竞品 title（1–3）：Criar ZIP online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：buat file zip；zip folder online；buat zip；gzip；zip berpassword
- 语气：口语工具站
- Title / H1 方向：Buat file zip
- 按钮短词：Pilih file；Muat contoh；Unduh ZIP；Hapus
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：Tegaskan file tetap di perangkat, tidak diunggah
- SERP 竞品 title（1–3）：Buat ZIP online
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：créer un fichier zip；zipper un dossier；faire un zip；gzip；zip mot de passe
- 语气：口语工具站
- Title / H1 方向：Créer un fichier zip
- 按钮短词：Choisir des fichiers；Charger l’exemple；Télécharger le ZIP；Effacer
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：Dire « reste sur l’appareil, pas d’envoi serveur »
- SERP 竞品 title（1–3）：Créer un ZIP en ligne
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：zipファイルを作成；フォルダをzipにする；zip 作成；gzip；パスワード付きzip
- 语气：口语工具站
- Title / H1 方向：zipファイルを作成
- 按钮短词：ファイルを選ぶ；サンプル；ZIPをダウンロード；クリア
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：端末内で処理しサーバーにアップロードしない、と明記
- SERP 竞品 title（1–3）：ZIP作成 オンライン
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：создать zip-файл；zip папки；сделать zip；gzip；zip с паролем
- 语气：口语工具站
- Title / H1 方向：Создать zip-файл
- 按钮短词：Выбрать файлы；Пример；Скачать ZIP；Очистить
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：Файлы остаются на устройстве, на сервер не отправляются
- SERP 竞品 title（1–3）：Создать ZIP онлайн
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：Zip-Datei erstellen；Ordner zippen；ZIP erstellen；gzip；ZIP mit Passwort
- 语气：口语工具站
- Title / H1 方向：Zip-Datei erstellen
- 按钮短词：Dateien wählen；Beispiel laden；ZIP herunterladen；Leeren
- 本地示例用词：notes.txt, photo.png, docs/readme.md
- 可保留英文/符号：ZIP、Gzip
- 额外禁用：Dateien bleiben auf dem Gerät und werden nicht hochgeladen
- SERP 竞品 title（1–3）：ZIP-Datei online erstellen
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-01 | H1 锁定选用长尾 Create zip file；zip folder / gzip / password 进 desc·FAQ；zip files online 不进 H1；覆盖表与意图审查已写入 02 | 主词落 H1；次词有落点；可跑 coverage:gate phase=0b |
| 1 母版+lint | 2026-09-01 | 写 catalog/Page/en.ts；H1=Create zip file；how_item 四步；进页 loadSample 三文件 | 母版键齐，待 phase=2 |
| 1b 母版检索覆盖优化 | 2026-09-01 | H1 定为 Create zip file；description 写入选文件打 ZIP、folder 路径、Gzip 次模式、三文件样例与不上服务器 | 主词落 H1；次词落 desc/FAQ |
| 2 按 brief 重写 | 2026-09-01 | 十语按当地检索句独立重写 title/desc/FAQ；隐私写留在设备且不上服务器 | 非 en 直搬 |
| 2b 抽查语检索覆盖优化 | 2026-09-01 | 抽查 en,zh,es,ja：title 为 Create zip file / 创建 zip 文件 / Crear archivo zip / zipファイルを作成；desc 含样例与不上服务器 | en,zh,es,ja 主词落 H1，次词落 desc |
| 3 抽查+禁词+lint | 2026-09-01 | 禁词表已勾；H1 无 zip files online；无造词 granularity | 可跑 phase=4 与 verify:tool |
