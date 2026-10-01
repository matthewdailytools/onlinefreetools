# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en  
**工具 slug**：`batch-convert-mkv-files-to-mp4-files`

共同边界：多本地 **.mkv → .mp4** ZIP；音轨 **AAC**；视频优先 copy；**拒 YouTube/URL**；每文件约 500 MiB / 2 h；队列约 20；行失败 skip；≠ 单文件页、≠ 批量抽音。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | batch convert mkv to mp4; mkv to mp4 zip; not uploaded | Batch convert MKV files to MP4 files | Convert all / Download ZIP | FAQ vs single；partial ZIP |
| zh | 批量 mkv 转 mp4；多个 mkv 转 mp4；不上传 | 批量把 MKV 文件转换成 MP4 文件 | 全部转换 / 下载 ZIP | FAQ 行失败；单文件导流 |
| es | convertir varios mkv a mp4; mkv a mp4 zip; sin subir | Convertir archivos MKV a MP4 por lotes | Convertir todo / Descargar ZIP | FAQ |
| ja | mkv を一括で mp4 に；複数 mkv 変換；アップロードなし | MKVファイルを一括でMP4に変換する | すべて変換 / ZIPをダウンロード | FAQ |
| de | mehrere MKV in MP4; MKV Stapel; ohne Upload | MKV-Dateien stapelweise in MP4 umwandeln | Alle umwandeln / ZIP herunterladen | FAQ |
| fr | convertir plusieurs mkv en mp4; lot mkv; sans envoi | Convertir des fichiers MKV en MP4 par lots | Tout convertir / Télécharger le ZIP | FAQ |
| pt | converter vários mkv para mp4; lote mkv; sem enviar | Converter arquivos MKV em MP4 em lote | Converter todos / Baixar ZIP | FAQ |
| id | ubah banyak mkv ke mp4; batch mkv; tanpa unggah | Ubah banyak file MKV menjadi MP4 | Ubah semua / Unduh ZIP | FAQ |
| ar | تحويل عدة mkv إلى mp4؛ دفعة؛ دون رفع | تحويل ملفات MKV إلى MP4 دفعة واحدة | تحويل الكل / تنزيل ZIP | FAQ |
| ru | пакетно mkv в mp4; несколько mkv; без загрузки | Пакетно конвертировать MKV в MP4 | Конвертировать все / Скачать ZIP | FAQ |

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
| 0b | 2026-10-01 | D3 立项：批量任务句 H1；同意图 batch/zip/aac/中文；意图审查满足多文件 ZIP；底座复用 D2 mediabunny+JSZip | 02 ready；briefs-ready；待 coverage 0b |
| 1b | 2026-10-01 | 母版 en：H1 Batch convert MKV files to MP4 files；desc 写 Convert all / Download ZIP / AAC / partial；FAQ vs 单文件与抽音 | phase=2 |
| 2b | 2026-10-01 | 十语独立重写（en,zh,es,ja 抽查）；批量 ZIP / AAC / 行失败 / 非 YouTube | phase=4 |
| 3 | 2026-10-01 | 禁词抽查：无 Best/100% free；占位符 {n}/{ok}/{fail}/{output}/{s}；隐私不上服务器 | i18n-done |
