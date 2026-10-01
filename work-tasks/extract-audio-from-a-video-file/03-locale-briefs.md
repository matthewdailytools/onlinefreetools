# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：本地视频文件 → 浏览器解码音轨 → WAV/MP3；**拒绝 YouTube/URL 代抓**；诚实容器上限。≠ V1 静音成片；≠ S1 波形精剪。SERP 英语摘录见 02；其他语言为独立语言意图分析，未声称已跑当地 SERP。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | extract audio from video; mp4 to mp3 | Extract audio from a video file | Extract / Download WAV·MP3 | FAQ no YouTube URL |
| zh | 视频提取音频；mp4 转 mp3 | 从视频文件提取音频 | 提取 / 下载 WAV·MP3 | FAQ 拒链接收音；desc≥120 |
| es | extraer audio de vídeo; mp4 a mp3 | Extraer audio de un archivo de vídeo | Extraer / Descargar | FAQ sin URL |
| ja | 動画から音声を抽出；mp4 を mp3 | 動画ファイルから音声を抽出する | 抽出 / 保存 | FAQ URL拒否 |
| de | Audio aus Video extrahieren; mp4 zu mp3 | Audio aus einer Videodatei extrahieren | Extrahieren / Herunterladen | FAQ keine URL |
| fr | extraire l’audio d’une vidéo; mp4 en mp3 | Extraire l’audio d’un fichier vidéo | Extraire / Télécharger | FAQ sans URL |
| pt | extrair áudio de vídeo; mp4 para mp3 | Extrair áudio de um ficheiro de vídeo | Extrair / Baixar | FAQ sem URL |
| id | ekstrak audio dari video; mp4 ke mp3 | Ekstrak audio dari file video | Ekstrak / Unduh | FAQ tanpa URL |
| ar | استخراج صوت من فيديو؛ mp4 إلى mp3 | استخراج الصوت من ملف فيديو | استخراج / تنزيل | FAQ بلا رابط |
| ru | извлечь аудио из видео; mp4 в mp3 | Извлечь аудио из видеофайла | Извлечь / Скачать | FAQ без URL |

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
| 0b | 2026-09-20 | S40 后启动 A1：收束为本地视频抽音；十语 H1；≠ YouTube URL；related 用 trim 与 wav→mp3 | 02 回写；briefs-ready |
| 1b | 2026-09-20 | 母版 en i18n：长 description（Steps+Example）、article、How×4 / Why×4 / Rules×4 / FAQ×6（含 anti-YouTube）；按钮 Extract；WAV/MP3；HUD Read/Decode/Extract/Write | en 键齐全；默认 WAV；空状态不自动样例 |
| 2b | 2026-09-20 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；FAQ 拒 URL；zh description ≥120 | 十语目录齐；i18n-done |
| 0b | 2026-10-01 | 稳内存：大文件流式 MP3；上限约 200 MiB/3 h；desc/FAQ/related 导流 batch-extract-audio-from-video-files | 02 增量节；en/zh 详写 |
| 1b | 2026-10-01 | 母版键补 stop/forced_mp3/FAQ7；description 写清流式与批量导流 | en 通过 phase=2 预期 |
| 2b | 2026-10-01 | 他语补 stop/FAQ7 与 200 MiB 上限；抽查 en,zh,es,ja | 检索覆盖增量优化 |
| 0b | 2026-10-01 | P0 hub 再定位：双路径 caps（ISOBMFF demux vs fallback）；新错误码；同意图仍吸 extract audio / mp4 to mp3，FAQ 诚实写 MKV 大文件边界 | 02 P0 节；不新建格式 slug |
| 1b | 2026-10-01 | 母版 en：hub desc/description/Rules/FAQ4；err_container/codec/channels | phase=2 目标 |
| 2b | 2026-10-01 | 九语按当地搜法重写诚实上限与新错误码；抽查 en,zh,es,ja | phase=4 目标 |
| 1b | 2026-10-01 | D1：en FAQ 插入多 GiB MKV/DDP 本机 ffmpeg→AAC MP4；err_codec 含示例命令 | D1 母版 |
| 2b | 2026-10-01 | D1 九语插入 faq_q5 Atmos 并顺延 q6–q8；抽查 en,zh,es,ja | D1 i18n |
| 3 | 2026-09-20 | 抽查禁词：H1/主按钮无 youtube to mp3；占位符 {s}/{seconds}/{channels}/{rate}/{format}/{output} 齐全 | i18n-done |
