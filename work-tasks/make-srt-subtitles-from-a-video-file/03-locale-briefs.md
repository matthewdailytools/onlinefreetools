# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en  
**slug**：`make-srt-subtitles-from-a-video-file`

共同边界：同域 Whisper tiny → 从**视频音轨**出 SRT；仅接受视频；画面预览；无麦克风；首次 ~45 MB；约 120 MiB / 2 小时；不烧录。纯音频 → 音频 SRT 页。

| 语种 | 当地检索词 | Title / H1 | 按钮 | 切入 |
|---|---|---|---|---|
| en | video to srt; make srt from video; generate subtitles from video | Make SRT subtitles from a video file | Make SRT / Load sample / Download SRT | video preview; not audio-only |
| zh | 视频生成字幕；视频转 srt；本地 whisper 字幕 | 从视频文件生成 SRT 字幕 | 生成 SRT / 加载样例 / 下载 SRT | 仅视频；对照画面 |
| es | video a srt; subtítulos desde video; generar srt de vídeo | Crear subtítulos SRT desde un archivo de vídeo | Crear SRT / Cargar muestra / Descargar SRT | solo vídeo |
| ja | 動画から字幕；動画を SRT；ビデオ字幕 作成 | 動画ファイルから SRT 字幕を作る | SRTを作る / サンプル / ダウンロード | 動画のみ |
| de | Video zu SRT; Untertitel aus Video; SRT aus Videodatei | SRT-Untertitel aus einer Videodatei erstellen | SRT erstellen / Beispiel / Herunterladen | nur Video |
| fr | vidéo vers srt; sous-titres depuis une vidéo; générer srt vidéo | Créer des sous-titres SRT depuis un fichier vidéo | Créer SRT / Exemple / Télécharger | vidéo uniquement |
| pt | vídeo para srt; legendas a partir de vídeo; gerar srt de vídeo | Criar legendas SRT a partir de um arquivo de vídeo | Criar SRT / Amostra / Baixar | só vídeo |
| id | video ke srt; subtitle dari video; buat srt dari video | Buat subtitle SRT dari file video | Buat SRT / Contoh / Unduh | hanya video |
| ar | فيديو إلى srt؛ ترجمات من فيديو؛ إنشاء srt من فيديو | إنشاء ترجمات SRT من ملف فيديو | إنشاء SRT / عيّنة / تنزيل | فيديو فقط |
| ru | видео в srt; субтитры из видео; сделать srt из видео | Сделать SRT-субтитры из видеофайла | Сделать SRT / Пример / Скачать | только видео |

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
| 0b | 2026-10-01 | New slug a-video (not an-video); primary video to srt; split from audio page by input+preview+no mic; related absorb audio to srt | coverage:gate phase=0b |
| 0i | 2026-10-01 | 总判满足：视频→SRT；划界纯音频/烧录/平台抓取 | ready |
| 1b | 2026-10-01 | en master: H1 video to srt; video preview; err_audio_only; FAQ vs audio page; no mic | coverage:gate phase=2 |
| 2b | 2026-10-01 | Nine locales zh,es,ja,de,fr,pt,id,ar,ru rewritten for video-first intent; spot-check en,zh,es,ja | coverage:gate phase=4 |
| 3 | 2026-10-01 | Ban-list / Why local H2 / privacy device+no-server on spot-check locales | i18n-done |
