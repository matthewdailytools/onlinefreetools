# 03 — Locale briefs and review

**工具 slug**：`batch-extract-frames-from-videos`  
**母版语言**：en  
**状态**：`i18n-done`

- [x] 清单前检索覆盖已做。
- [x] 同意图相关词已列全并分流。
- [x] 用户意图审查已做。
- [x] 检索覆盖已优化：十语标题、首段、How、FAQ 已回查多源时间点、目录与预算。

| Locale | 当地检索词（3–5） | Title/H1 方向 | 按钮 |
|---|---|---|---|
| en | batch extract frames from videos; images from multiple videos; batch video screenshots; frames at timestamps | Batch extract frames from videos into named folders | Extract frames |
| zh | 批量提取视频帧; 多个视频截图; 按时间点抽帧; 视频批量导出图片 | 批量提取视频帧并按来源分文件夹 | 批量提取帧 |
| es | extraer fotogramas de varios vídeos; capturas de vídeo por lotes; imágenes en tiempos; fotogramas a JPG | Extraer fotogramas de varios vídeos en carpetas | Extraer fotogramas |
| ar | استخراج إطارات فيديو دفعة واحدة; صور من عدة فيديوهات; لقطات حسب الوقت; استخراج JPG | استخراج إطارات فيديوهات متعددة بمجلد لكل مصدر | استخراج الإطارات |
| pt | extrair quadros de vários vídeos; capturas de vídeo em lote; quadros por horário; vídeo para JPG | Extrair quadros de vídeos em lote por pasta | Extrair quadros |
| id | ekstrak frame banyak video; tangkapan video massal; frame berdasarkan waktu; video ke JPG | Ekstrak frame dari banyak video per folder | Ekstrak frame |
| fr | extraire images de plusieurs vidéos; captures vidéo par lot; images à des temps précis; vidéo vers JPG | Extraire les images de vidéos par lot par dossier | Extraire les images |
| ja | 複数動画から一括抽出; 動画フレーム一括保存; 時間指定スクリーンショット; 動画をJPG | 複数動画のフレームを一括抽出し元別に保存 | フレームを抽出 |
| ru | извлечь кадры из нескольких видео; пакетные скриншоты видео; кадры по времени; видео в JPG | Пакетно извлечь кадры видео по папкам | Извлечь кадры |
| de | Bilder aus mehreren Videos extrahieren; Video-Screenshots stapelweise; Frames nach Zeit; Videos zu JPG | Videobilder stapelweise nach Quelle extrahieren | Bilder extrahieren |

禁词：无限文件、所有视频格式、帧精准毫秒、无上限 ZIP。各语说明本地处理、时间点越界处理及按来源目录。

## 多轮覆盖记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照多视频截图、统一时间点抽帧及单视频多帧意图，明确逐来源目录和预算的差异 | H1 提示按来源目录；首段吸收多个视频提图，FAQ 解释越界、时间偏差和 ZIP 限制 |
| 1b 英语母版复查 | 2026-10-03 | 英文 H1 明确多视频抽帧和来源目录；首段、How 对齐 Extract frames 与 Download ZIP，说明共同时间点和实际 seek 时间 | FAQ 解释短片越界、逐源目录、manifest、浏览器解码与帧/像素/输出预算 |
| 2b 十语抽查 | 2026-10-03 | 独立抽查 en,zh,es,ja 的批量抽帧主词、前置步骤、来源目录和 ZIP 清单，并复查 ar,pt,id,fr,ru,de 的单位、帧预算与错误文案 | 十语均说明相同时间点、逐来源目录、实际时间、短片行错误及本地处理 |
