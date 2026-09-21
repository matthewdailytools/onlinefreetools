# Locale briefs

**状态**：`i18n-done`  
**母版语言**：en

共同边界：本机 **多 WAV → MP3 → ZIP**（decodeAudioData + lamejs + 懒加载 JSZip）。诚实：有损；数量/体积帽。≠ 格式矩阵；≠ 单文件精剪。

| 语种 | 当地检索词（主词；次词） | Title / H1 方向 | 按钮 | 文案切入 / 次词落点 |
|---|---|---|---|---|
| en | bulk convert wav to mp3; batch wav mp3; without upload | Bulk convert WAV files to MP3 | Convert to ZIP / Download ZIP | FAQ caps; lossy |
| zh | 批量wav转mp3；批量转mp3；不上传 | 批量把 WAV 转成 MP3 | 转成 ZIP / 下载 ZIP | desc≥120；FAQ 上限 |
| es | convertir WAV a MP3 en lote; sin subir | Convertir archivos WAV a MP3 en lote | Convertir a ZIP / Descargar | FAQ límites |
| ja | WAV一括MP3；バッチ変換；アップロードなし | WAVファイルをまとめてMP3に変換 | ZIPに変換 / ダウンロード | FAQ 上限 |
| de | WAV stapelweise in MP3; Batch; ohne Hochladen | Mehrere WAV-Dateien stapelweise in MP3 umwandeln | In ZIP umwandeln / Herunterladen | FAQ Limits |
| fr | convertir WAV en MP3 en lot; sans téléverser | Convertir des fichiers WAV en MP3 en lot | Convertir en ZIP / Télécharger | FAQ plafonds |
| pt | converter WAV para MP3 em lote; sem enviar | Converter arquivos WAV para MP3 em lote | Converter para ZIP / Baixar | FAQ limites |
| id | ubah WAV ke MP3 massal; tanpa unggah | Ubah banyak berkas WAV menjadi MP3 | Ubah ke ZIP / Unduh | FAQ batas |
| ar | تحويل WAV إلى MP3 دفعة؛ بدون رفع | تحويل ملفات WAV إلى MP3 دفعة واحدة | تحويل إلى ZIP / تنزيل | FAQ الحدود |
| ru | пакетно WAV в MP3; без загрузки | Пакетно конвертировать WAV в MP3 | Конвертировать в ZIP / Скачать | FAQ лимиты |

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
| 0b | 2026-09-21 | A8：多 WAV→MP3→ZIP；十语 H1；related WAV+FLAC | 02 回写；briefs-ready |
| 1b | 2026-09-21 | 母版 en：Steps+Example、How×4 / Why×4 / Rules×4 / FAQ×5 | en 键齐全 |
| 2b | 2026-09-21 | 九语按当地 H1/按钮重写；抽查 en,zh,es,ja；zh description ≥120 | 十语目录齐；i18n-done |
| 3 | 2026-09-21 | 抽查 en,zh,es,ja 禁词与占位符 `{s}` `{n}` `{input}` `{output}` `{kbps}` | i18n-done |
