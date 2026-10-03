# 03 — Locale briefs and review

**工具 slug**：`batch-make-srt-subtitles-from-audio-files`  
**母版语言**：en  
**状态**：`i18n-done`

- [x] 清单前检索覆盖已做。
- [x] 同意图相关词已列全并分流。
- [x] 用户意图审查已做。
- [x] 检索覆盖已优化。

| Locale | 当地检索词（3–5） | Title/H1 方向 | 按钮 |
|---|---|---|---|
| en | batch audio to SRT; multiple audio files to subtitles; bulk transcribe audio; batch captions | Batch make SRT subtitles from audio files and review each transcript | Make SRTs |
| zh | 批量音频转 SRT; 多个音频生成字幕; 批量语音转字幕; 音频批量转写 | 批量把音频转为 SRT 并逐件校对 | 批量生成 SRT |
| es | convertir varios audios a SRT; subtítulos por lotes; transcribir audios en lote; SRT de audio | Crear SRT de varios audios y revisar cada transcripción | Crear SRT |
| ar | تحويل عدة ملفات صوت إلى SRT; ترجمة صوت إلى نصوص توقيت; تفريغ صوت دفعة; ملفات ترجمات | إنشاء SRT لملفات صوت متعددة ومراجعة كل نتيجة | إنشاء SRT |
| pt | vários áudios para SRT; legendas em lote; transcrever áudios; gerar SRT de áudio | Criar SRT de vários áudios e revisar cada transcrição | Criar SRT |
| id | banyak audio ke SRT; subtitle audio batch; transkripsi banyak berkas; buat SRT | Buat SRT dari banyak audio dan periksa tiap hasil | Buat SRT |
| fr | plusieurs audios en SRT; sous-titres par lot; transcription audio en masse; générer SRT | Créer des SRT de plusieurs audios et vérifier chaque résultat | Créer les SRT |
| ja | 複数音声をSRTに一括変換; 音声字幕をまとめて作成; 一括文字起こし; 音声から字幕 | 複数音声から SRT を一括作成して個別に校正 | SRT を作成 |
| ru | несколько аудио в SRT; пакетные субтитры; массовая расшифровка аудио; создать SRT | Пакетно создать SRT из аудио и проверить каждый файл | Создать SRT |
| de | mehrere Audios zu SRT; Untertitel stapelweise; Audio-Transkription im Stapel; SRT erstellen | SRT aus mehreren Audios stapelweise erstellen und prüfen | SRT erstellen |

禁词：保证精准、全部语言准确、无限大批量、无需校对、页面语言即转写语言。每语前段说明语音语言设置、独立 SRT、可编辑及本地处理。

## 多轮覆盖记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照多个音频转字幕、批量转写和单件音频 SRT，核对语言设置与模型内存边界 | H1 明确多文件逐项字幕，FAQ 解释自动检测音频语言、人工校对与部分失败 |
| 1b 英语母版复查 | 2026-10-03 | 英文 H1 明确多段音频各得 SRT，首段把语音语言独立于页面语言、模型复用、逐行可编辑放前；How 对齐 Make SRTs 与单独下载 | FAQ 解释自动检测、准确率、静音、长音频内存和本地处理 |
| 2b 十语抽查 | 2026-10-03 | 抽查 en、zh、es、ja 的首段、H1、How、FAQ，并对照其余六语功能边界，确认均含批量音频转 SRT、逐件编辑下载、语音语言选择和本地模型说明 | 十语文案均按当地搜索表达描述同一功能；不把界面语言误写成转写语言 |
