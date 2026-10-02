# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本地 **多 WebM** 串行抽音 → ZIP；**仅 .webm**；不上传；拒 YouTube/URL；单文件→单 WebM 页；混容器→混批页；hub related。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | batch extract audio from webm; bulk webm to mp3; without upload | Batch extract audio from WebM files | Extract / Stop / Download ZIP | FAQ anti-URL；single→WebM page |
| zh | 批量 webm 转 mp3；批量从 webm 提取音频；不上传服务器 | 批量从 WebM 文件提取音频 | 提取 / 停止 / 下载 ZIP | desc≥120；混格式指混批 |
| es | extraer audio de varios webm; lote webm a mp3; sin subir | Extraer audio de varios archivos WebM | Extraer / Detener / Descargar ZIP | FAQ YouTube |
| ja | 複数webmから音声抽出；webm一括mp3；アップロードなし | 複数のWebMファイルから音声を一括抽出 | 抽出 / 停止 / ZIPをダウンロード | FAQ；単一は関連ツール |
| de | Audio aus mehreren WebM extrahieren; Batch WebM zu MP3; ohne Upload | Audio aus mehreren WebM-Dateien extrahieren | Extrahieren / Stopp / ZIP herunterladen | FAQ |
| fr | extraire audio de plusieurs webm; lot webm en mp3; sans envoi | Extraire l’audio de plusieurs fichiers WebM | Extraire / Arrêter / Télécharger le ZIP | FAQ |
| pt | extrair áudio de vários webm; lote webm para mp3; sem enviar | Extrair áudio de vários arquivos WebM | Extrair / Parar / Baixar ZIP | FAQ |
| id | ekstrak audio dari banyak webm; batch webm ke mp3; tanpa unggah | Ekstrak audio dari banyak file WebM | Ekstrak / Berhenti / Unduh ZIP | FAQ |
| ar | استخراج الصوت من عدة webm؛ دفعة webm إلى mp3؛ دون رفع | استخراج الصوت من عدة ملفات WebM دفعة واحدة | استخراج / إيقاف / تنزيل ZIP | FAQ |
| ru | пакетно извлечь аудио из webm; webm в mp3 пакетом; без загрузки | Пакетно извлечь аудио из WebM-файлов | Извлечь / Стоп / Скачать ZIP | FAQ |

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
| 0b | 2026-10-01 | WebM-only 批量 brief：H1/accept 与混批 sibling 分界；同意图表（bulk webm zip、中文批量、单 WebM/hub/混批 related、YouTube drop）；十语 H1；意图审查满足串行 ZIP | 02 ready；03 briefs-ready；待 coverage 0b |
| 1b | 2026-10-01 | 母版 en：H1 batch+WebM；desc 写 WebM-only 串行 ZIP、sibling 导流；FAQ 单文件/混容器三分流 | coverage:gate phase=2 绿 |
| 2b | 2026-10-01 | 十语：当地 bulk webm 说法；zh 批量 webm 转 mp3；err_format 指混批页；抽查 en,zh,es,ja | coverage:gate phase=4 绿 |
| 2b | 2026-10-02 | Rewrite fr/pt/id/ja/ru/ar from EN master: remove Spanish body leakage; WebM-only H1 + 500 MiB fallback honesty; spot-check en,zh,es,ja | coverage:gate phase=4 |
