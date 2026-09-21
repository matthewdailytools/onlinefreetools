# Locale briefs

**状态**：`i18n-done`
**母版语言**：en

共同边界：浏览器 **SpeechRecognition** 尽力转写；**不是** Whisper；文件路径依赖播放/环回，可回退麦克风。

| 语种 | 当地检索词 | Title / H1 | 按钮 | 切入 |
|---|---|---|---|---|
| en | transcribe audio; speech to text | Transcribe an audio file to text | Transcribe while playing / Dictate | FAQ not Whisper |
| zh | 音频转文字；语音转文字 | 把音频文件转成文字 | 播放时转写 / 麦克风口述 | desc≥120；非 Whisper |
| es | transcribir audio; voz a texto | Transcribir un archivo de audio a texto | Transcribir al reproducir / Dictar | FAQ |
| ja | 音声文字起こし；音声認識 | 音声ファイルを文字に起こす | 再生しながら起こす / マイク | FAQ |
| de | Audio transkribieren; Sprache zu Text | Eine Audiodatei in Text umwandeln | Beim Abspielen / Diktieren | FAQ |
| fr | transcrire audio; parole en texte | Transcrire un fichier audio en texte | Pendant lecture / Dicter | FAQ |
| pt | transcrever áudio; fala para texto | Transcrever um arquivo de áudio para texto | Ao reproduzir / Ditado | FAQ |
| id | transkripsi audio; ucapan ke teks | Transkripsikan file audio menjadi teks | Saat diputar / Dikte | FAQ |
| ar | تفريغ صوت؛ كلام إلى نص | تفريغ ملف صوت إلى نص | أثناء التشغيل / إملاء | FAQ |
| ru | транскрибировать аудио; речь в текст | Расшифровать аудиофайл в текст | Во время воспроизведения / Диктовка | FAQ |

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
| 0b | 2026-09-21 | A4：SpeechRecognition 场景页；非 Whisper；related A5+S7 | briefs-ready |
| 1b | 2026-09-21 | 母版 en：How×4 Why×4 Rules×4 FAQ×6；主词进 H1 | en 齐 |
| 2b | 2026-09-21 | 九语当地 H1/按钮；zh desc≥120；抽查 en,zh,es,ja | i18n-done |
| 3 | 2026-09-21 | 禁词：无 Whisper 克隆承诺；占位符齐全 | i18n-done |
