# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本机 **AIFF/CAF → 16-bit PCM WAV**（浏览器 `decodeAudioData` + `writeWav`）。CAF 同页吸收。诚实：浏览器不支持解码则明确失败。≠ MP3 输出；≠ 格式矩阵；≠ 批量。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | aiff to wav; convert aiff; caf to wav; without upload | Convert an AIFF file to WAV | Convert to WAV / Download WAV | FAQ CAF; PCM path; browser decode |
| zh | aiff转wav；aiff 转 wav；caf转wav；不上传 | 把 AIFF 文件转成 WAV | 转成 WAV / 下载 WAV | desc≥120；FAQ CAF |
| es | convertir AIFF a WAV; CAF a WAV; sin subir | Convertir un archivo AIFF a WAV | Convertir a WAV / Descargar | FAQ navegador |
| ja | AIFF WAV 変換；AIFFをWAVに；CAF変換 | AIFFファイルをWAVに変換 | WAVに変換 / ダウンロード | FAQ ブラウザ |
| de | AIFF in WAV umwandeln; CAF Konverter; ohne Hochladen | Eine AIFF-Datei in WAV umwandeln | In WAV umwandeln / Herunterladen | FAQ Browser |
| fr | convertir AIFF en WAV; CAF en WAV; sans téléverser | Convertir un fichier AIFF en WAV | Convertir en WAV / Télécharger | FAQ navigateur |
| pt | converter AIFF para WAV; CAF para WAV; sem enviar | Converter um arquivo AIFF para WAV | Converter para WAV / Baixar | FAQ navegador |
| id | ubah AIFF ke WAV; caf ke wav; tanpa unggah | Ubah berkas AIFF menjadi WAV | Ubah ke WAV / Unduh | FAQ browser |
| ar | تحويل AIFF إلى WAV؛ CAF إلى WAV؛ بدون رفع | تحويل ملف AIFF إلى WAV | تحويل إلى WAV / تنزيل | FAQ المتصفح |
| ru | конвертировать AIFF в WAV; CAF в WAV; без загрузки | Конвертировать файл AIFF в WAV | Конвертировать в WAV / Скачать | FAQ браузер |

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
| 0b | 2026-09-21 | P6：AIFF/CAF→WAV；十语 H1；44.1/48 kHz；related MP3→WAV+FLAC→MP3 | 02 回写；briefs-ready |
| 1b | 2026-09-21 | 母版 en：Steps+Example description、How×4 / Why×4 / Rules×4 / FAQ×5；CAF 吸收 | en 键齐全 |
| 2b | 2026-09-21 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-21 | 抽查禁词与占位符 `{s}` `{seconds}` `{input}` `{output}` `{kbps}` `{channels}` | i18n-done |
