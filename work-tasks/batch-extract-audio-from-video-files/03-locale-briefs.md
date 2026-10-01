# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本地完成 **Batch extract audio from video files**；串行稳内存；ZIP；不上传；拒 YouTube/URL；单文件导 `extract-audio-from-a-video-file`。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | batch extract audio from video; bulk video to mp3; without upload | Batch extract audio from video files | Extract / Stop / Download ZIP | FAQ anti-YouTube；single-file FAQ |
| zh | 批量从视频提取音频；批量视频转mp3；不上传服务器 | 批量从视频文件提取音频 | 提取 / 停止 / 下载 ZIP | desc≥120；FAQ 拒链接；单文件导流 |
| es | extraer audio de varios vídeos; lote vídeo a mp3; sin subir | Extraer audio de varios archivos de vídeo | Extraer / Detener / Descargar ZIP | FAQ YouTube；uno solo → página individual |
| ja | 複数動画から音声抽出；一括動画をmp3；アップロードなし | 複数の動画ファイルから音声を一括抽出 | 抽出 / 停止 / ZIPをダウンロード | FAQ；単一ファイルは関連ツール |
| de | Audio aus mehreren Videos extrahieren; Batch Video zu MP3; ohne Upload | Audio aus mehreren Videodateien extrahieren | Extrahieren / Stopp / ZIP herunterladen | FAQ；Einzelfile-Hinweis |
| fr | extraire audio de plusieurs vidéos; lot vidéo en mp3; sans envoi | Extraire l’audio de plusieurs fichiers vidéo | Extraire / Arrêter / Télécharger le ZIP | FAQ；un seul fichier → outil voisin |
| pt | extrair áudio de vários vídeos; lote vídeo para mp3; sem enviar | Extrair áudio de vários arquivos de vídeo | Extrair / Parar / Baixar ZIP | FAQ；arquivo único → página única |
| id | ekstrak audio dari banyak video; batch video ke mp3; tanpa unggah | Ekstrak audio dari banyak file video | Ekstrak / Berhenti / Unduh ZIP | FAQ；satu file → alat tunggal |
| ar | استخراج الصوت من عدة فيديوهات؛ دفعة فيديو إلى mp3؛ دون رفع | استخراج الصوت من عدة ملفات فيديو دفعة واحدة | استخراج / إيقاف / تنزيل ZIP | FAQ؛ ملف واحد → الأداة المفردة |
| ru | извлечь аудио из нескольких видео; пакет видео в mp3; без загрузки | Пакетно извлечь аудио из видеофайлов | Извлечь / Стоп / Скачать ZIP | FAQ；один файл → соседняя страница |

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
| 0b | 2026-10-01 | 清单前覆盖：定 slug/H1「batch extract audio from video files」；同意图全表（bulk mp3、中文批量、YouTube drop、单文件导流）；Ads N/A；意图审查满足串行 ZIP | 02 回写；briefs-ready；coverage 0b |
| 1b | 2026-10-01 | 母版 en：主词进 H1；desc 写 sequential memory-safe + ZIP + Steps/Example；FAQ anti-YouTube 与单文件导流；How/Why/Rules×4 | en 键齐全；主词落 H1 |
| 2b | 2026-10-01 | 抽查 en,zh,es,ja 按当地搜法重写 title/desc/FAQ；九语独立重写按钮与隐私句；次词 bulk/mp3 落入 desc·FAQ | 十语齐；i18n-done |
| 0b | 2026-10-01 | P0：能力表驱动 accept/预检；IG=混合格式队列/部分 ZIP/诚实 caps；FAQ 超大 MKV | 02 P0 节 |
| 1b | 2026-10-01 | 母版 en：err_container/codec/channels；hint/Rules 双路径；faq_q6 超大 MKV | phase=2 目标 |
| 2b | 2026-10-01 | 九语重写诚实 caps 与新错误码；抽查 en,zh,es,ja | phase=4 目标 |
| 1b | 2026-10-01 | D1：en err/faq_q6 超大或 Atmos → ffmpeg AAC MP4 → MP4 批量 | D1 母版 |
| 2b | 2026-10-01 | D1 九语 err_container/codec 与 faq_a6 含 ffmpeg 命令；抽查 en,zh,es,ja | D1 i18n |
| 3 | 2026-10-01 | 抽查 en,zh,es,ja 禁词、参数枚举 title、占位符 `{n}`/`{s}` | i18n-done |
