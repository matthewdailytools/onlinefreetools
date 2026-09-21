# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本机 **FLAC → MP3**（浏览器 `decodeAudioData` + lamejs）。诚实：浏览器不支持 FLAC 解码则明确失败。≠ 格式矩阵；≠ 批量。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | flac to mp3; convert flac; flac converter; without upload | Convert a FLAC file to MP3 | Convert to MP3 / Download MP3 | FAQ browser FLAC; lossy |
| zh | flac转mp3；flac 转 mp3；无损转mp3；不上传 | 把 FLAC 文件转成 MP3 | 转成 MP3 / 下载 MP3 | desc≥120；FAQ 浏览器 |
| es | convertir FLAC a MP3; pasar FLAC a MP3; sin subir | Convertir un archivo FLAC a MP3 | Convertir a MP3 / Descargar | FAQ navegador |
| ja | FLAC MP3 変換；FLACをMP3に；アップロードなし | FLACファイルをMP3に変換 | MP3に変換 / ダウンロード | FAQ ブラウザ |
| de | FLAC in MP3 umwandeln; FLAC Konverter; ohne Hochladen | Eine FLAC-Datei in MP3 umwandeln | In MP3 umwandeln / Herunterladen | FAQ Browser |
| fr | convertir FLAC en MP3; convertisseur FLAC; sans téléverser | Convertir un fichier FLAC en MP3 | Convertir en MP3 / Télécharger | FAQ navigateur |
| pt | converter FLAC para MP3; conversor FLAC; sem enviar | Converter um arquivo FLAC para MP3 | Converter para MP3 / Baixar | FAQ navegador |
| id | ubah FLAC ke MP3; konverter FLAC; tanpa unggah | Ubah berkas FLAC menjadi MP3 | Ubah ke MP3 / Unduh | FAQ browser |
| ar | تحويل FLAC إلى MP3؛ محول FLAC؛ بدون رفع | تحويل ملف FLAC إلى MP3 | تحويل إلى MP3 / تنزيل | FAQ المتصفح |
| ru | конвертировать FLAC в MP3; конвертер FLAC; без загрузки | Конвертировать файл FLAC в MP3 | Конвертировать в MP3 / Скачать | FAQ браузер |

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
| 0b | 2026-09-21 | P4：FLAC→MP3；十语 H1；浏览器诚实；related WAV+M4A；fLaC 校验 | 02 回写；briefs-ready |
| 1b | 2026-09-21 | 母版 en：Steps+Example description、How×4 / Why×4 / Rules×4 / FAQ×5；err_decode 明确 | en 键齐全 |
| 2b | 2026-09-21 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；FAQ 浏览器 FLAC；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-21 | 抽查禁词与占位符 `{s}` `{seconds}` `{input}` `{output}` `{kbps}` `{channels}` | i18n-done |
