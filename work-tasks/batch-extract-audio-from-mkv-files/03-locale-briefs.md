# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本地 **多 MKV** 串行抽音 → ZIP；**仅 .mkv**；不上传；拒 YouTube/URL；单文件→单 MKV 页；混容器→混批页；hub related。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | batch extract audio from mkv; bulk mkv to mp3; without upload | Batch extract audio from MKV files | Extract / Stop / Download ZIP | FAQ anti-URL；single→MKV page |
| zh | 批量 mkv 转 mp3；批量从 mkv 提取音频；不上传服务器 | 批量从 MKV 文件提取音频 | 提取 / 停止 / 下载 ZIP | desc≥120；混格式指混批 |
| es | extraer audio de varios mkv; lote mkv a mp3; sin subir | Extraer audio de varios archivos MKV | Extraer / Detener / Descargar ZIP | FAQ YouTube |
| ja | 複数mkvから音声抽出；mkv一括mp3；アップロードなし | 複数のMKVファイルから音声を一括抽出 | 抽出 / 停止 / ZIPをダウンロード | FAQ；単一は関連ツール |
| de | Audio aus mehreren MKV extrahieren; Batch MKV zu MP3; ohne Upload | Audio aus mehreren MKV-Dateien extrahieren | Extrahieren / Stopp / ZIP herunterladen | FAQ |
| fr | extraire audio de plusieurs mkv; lot mkv en mp3; sans envoi | Extraire l’audio de plusieurs fichiers MKV | Extraire / Arrêter / Télécharger le ZIP | FAQ |
| pt | extrair áudio de vários mkv; lote mkv para mp3; sem enviar | Extrair áudio de vários arquivos MKV | Extrair / Parar / Baixar ZIP | FAQ |
| id | ekstrak audio dari banyak mkv; batch mkv ke mp3; tanpa unggah | Ekstrak audio dari banyak file MKV | Ekstrak / Berhenti / Unduh ZIP | FAQ |
| ar | استخراج الصوت من عدة mkv؛ دفعة mkv إلى mp3؛ دون رفع | استخراج الصوت من عدة ملفات MKV دفعة واحدة | استخراج / إيقاف / تنزيل ZIP | FAQ |
| ru | пакетно извлечь аудио из mkv; mkv в mp3 пакетом; без загрузки | Пакетно извлечь аудио из MKV-файлов | Извлечь / Стоп / Скачать ZIP | FAQ |

- [x] 清单前检索覆盖已做
- [x] 同意图相关搜索词已写入 02
- [x] 用户意图审查已做
- [x] 检索覆盖已优化
- [x] 轮次 1 母版
- [x] 轮次 2 逐语重写
- [x] 轮次 3 抽查及禁词

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b | 2026-10-01 | MKV-only 批量 brief：H1/accept 与混批 sibling 分界；同意图表（bulk mkv zip、中文批量、单 MKV/hub/混批 related、YouTube drop）；十语 H1；意图审查满足串行 ZIP | 02 ready；03 briefs-ready；待 coverage 0b |
| 1b | 2026-10-01 | 母版 en：H1 batch+MKV；desc 写 MKV-only 串行 ZIP、sibling 导流；FAQ 单文件/混容器三分流 | coverage:gate phase=2 绿 |
| 2b | 2026-10-01 | 十语：当地 bulk mkv 说法；zh 批量 mkv 转 mp3；err_format 指混批页；抽查 en,zh,es,ja | coverage:gate phase=4 绿 |
| 1b | 2026-10-01 | D1：en 批量 FAQ/err 引导失败行本机 ffmpeg→AAC MP4→MP4 批量抽音 | D1 母版 |
| 2b | 2026-10-01 | D1 十语重写（去 Español 克隆）；抽查 en,zh,es,ja | D1 i18n |
