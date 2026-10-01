# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en  
**工具 slug**：`convert-an-mkv-file-to-an-mp4-file`

共同边界：本地 **.mkv → .mp4**；音轨 **AAC**（可降混立体声）；视频优先 copy；**拒 YouTube/URL**；约 500 MiB / 2 h；E-AC-3 经 ac3 WASM；≠ 抽音页。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | convert mkv to mp4; mkv to mp4 aac; not uploaded | Convert an MKV file to an MP4 file | Convert / Download | FAQ remux vs AAC；extract related |
| zh | mkv 转 mp4；把 mkv 转换成 mp4；不上传 | 把 MKV 文件转换成 MP4 文件 | 转换 / 下载 | FAQ DDP；抽音导流 |
| es | convertir mkv a mp4; mkv a mp4 aac; sin subir | Convertir un archivo MKV a MP4 | Convertir / Descargar | FAQ |
| ja | mkv を mp4 に変換；mkv から mp4；アップロードなし | MKVファイルをMP4ファイルに変換する | 変換 / ダウンロード | FAQ |
| de | MKV in MP4 umwandeln; mkv zu mp4 aac; ohne Upload | Eine MKV-Datei in eine MP4-Datei umwandeln | Umwandeln / Herunterladen | FAQ |
| fr | convertir mkv en mp4; mkv vers mp4 aac; sans envoi | Convertir un fichier MKV en fichier MP4 | Convertir / Télécharger | FAQ |
| pt | converter mkv para mp4; mkv em mp4 aac; sem enviar | Converter um arquivo MKV em MP4 | Converter / Baixar | FAQ |
| id | ubah mkv ke mp4; konversi mkv ke mp4; tanpa unggah | Ubah file MKV menjadi file MP4 | Ubah / Unduh | FAQ |
| ar | تحويل mkv إلى mp4؛ mkv إلى mp4 aac؛ دون رفع | تحويل ملف MKV إلى ملف MP4 | تحويل / تنزيل | FAQ |
| ru | конвертировать mkv в mp4; mkv в mp4 aac; без загрузки | Конвертировать MKV-файл в MP4 | Конвертировать / Скачать | FAQ |

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
| 0b | 2026-10-01 | D2 立项：conversion-pair slug/H1；同意图 mkv to mp4 / aac / remux 澄清 / DDP / 中文；意图审查满足单文件 AAC MP4；底座 mediabunny+ac3+aac-encoder | 02 ready；briefs-ready；待 coverage 0b |
| 1b | 2026-10-01 | 母版 en：H1 Convert an MKV file to an MP4 file；desc 写 AAC stereo + Steps/Example；FAQ remux/DDP/抽音分流 | phase=2 |
| 2b | 2026-10-01 | 十语独立重写（en,zh,es,ja 抽查）；D2 边界 AAC/上限/非 remux | phase=4 |
| 3 | 2026-10-01 | 禁词抽查：无 Best/100% free；占位符 {s}/{input}/{output}；隐私「不上服务器」 | i18n-done |
