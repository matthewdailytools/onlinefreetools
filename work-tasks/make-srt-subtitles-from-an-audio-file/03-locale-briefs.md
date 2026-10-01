# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：同域 **Whisper tiny（q8）** 读本地音频/视频音轨 → 带句段时间戳的 **SRT**；首次下载约 45 MB 模型后缓存；文件不上服务器。麦克风口述（Web Speech）仅为次路径。不做烧录、不抓平台字幕。

| 语种 | 当地检索词 | Title / H1 | 按钮 | 切入 |
|---|---|---|---|---|
| en | audio to srt; generate subtitles from audio; whisper subtitles browser | Make SRT subtitles from an audio file | Make SRT / Load sample / Download SRT | on-device Whisper；first download |
| zh | 音频生成字幕；语音转字幕；浏览器本地 whisper | 从音频文件生成 SRT 字幕 | 生成 SRT / 加载样例 / 下载 SRT | 不上传；首次模型体积 |
| es | audio a srt; subtítulos desde audio; whisper en el navegador | Crear subtítulos SRT desde un archivo de audio | Crear SRT / Cargar muestra / Descargar SRT | sin subir al servidor |
| ja | 音声から字幕；SRT 作成；ブラウザ Whisper | 音声ファイルから SRT 字幕を作る | SRTを作る / サンプル / ダウンロード | 端末内；初回ダウンロード |
| de | Audio zu SRT; Untertitel aus Audio; Whisper im Browser | SRT-Untertitel aus einer Audiodatei erstellen | SRT erstellen / Beispiel / Herunterladen | ohne Server-Upload |
| fr | audio vers srt; sous-titres depuis audio; whisper navigateur | Créer des sous-titres SRT depuis un fichier audio | Créer SRT / Exemple / Télécharger | sans envoi au serveur |
| pt | áudio para srt; legendas a partir de áudio; whisper no navegador | Criar legendas SRT a partir de um arquivo de áudio | Criar SRT / Amostra / Baixar | sem enviar ao servidor |
| id | audio ke srt; subtitle dari audio; whisper di browser | Buat subtitle SRT dari file audio | Buat SRT / Contoh / Unduh | tanpa unggah ke server |
| ar | صوت إلى srt؛ ترجمات من الصوت؛ whisper في المتصفح | إنشاء ترجمات SRT من ملف صوت | إنشاء SRT / عيّنة / تنزيل | دون رفع إلى خادم |
| ru | аудио в srt; субтитры из аудио; whisper в браузере | Сделать SRT-субтитры из аудиофайла | Сделать SRT / Пример / Скачать | без загрузки на сервер |

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
| 0b | 2026-09-21 | T1：SpeechRecognition→SRT；非 Whisper | briefs-ready（旧） |
| 0b | 2026-09-30 | 引擎改为同域 Whisper tiny q8；主词仍 audio to srt；次词 whisper/local/video to srt 写入 desc/FAQ；保留 slug；进页不自动样例（OCR 先例） | coverage:gate phase=0b |
| 0i | 2026-09-30 | 总判满足：文件→SRT；划界烧录/平台字幕；麦克风降为次路径 | ready |
| 1b | 2026-09-30 | Rewrote en master for on-device Whisper: H1 keeps audio to srt; desc/FAQ absorb whisper/local/video to srt/srt download; How buttons Make SRT; honest ~45 MB first download + privacy | coverage:gate phase=2 |
| 2b | 2026-09-30 | Nine locales rewritten for local Whisper (zh,es,ja,de,fr,pt,id,ar,ru); spot-check en,zh,es,ja: privacy device+no-server; whisper secondary terms in desc/FAQ; How matches local Make SRT buttons | coverage:gate phase=4 |
| 3 | 2026-09-30 | Ban-list pass: no page-as-product-name; Why items are page-specific; no isomorphic EN skeleton across spot-check locales | i18n-done |
