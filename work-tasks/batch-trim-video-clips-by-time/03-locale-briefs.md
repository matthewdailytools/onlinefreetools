# 03 — Locale briefs and review

**工具 slug**：`batch-trim-video-clips-by-time`  
**母版语言**：en  
**状态**：`i18n-done`

- [x] 清单前检索覆盖已做。
- [x] 同意图搜法已落到 02；不同任务分流。
- [x] 用户意图审查已做。
- [x] 检索覆盖已优化：十语标题、首段、How、FAQ 已回查短片越界与独立输出。

| Locale | 当地检索词（3–5） | Title/H1 方向 | 按钮 |
|---|---|---|---|
| en | batch trim videos; trim multiple videos; bulk video cutter; cut same time range | Batch trim video clips by time and review each cut | Trim videos |
| zh | 批量剪辑视频; 多个视频同一时间裁剪; 批量截取视频片段; 视频批量裁切 | 按时间批量剪辑视频并逐件核对片段 | 批量剪辑 |
| es | recortar varios vídeos; cortar vídeos por lotes; mismo intervalo de vídeo; recorte masivo | Recortar vídeos por lotes y comprobar cada corte | Recortar vídeos |
| ar | قص فيديوهات دفعة واحدة; قص عدة فيديوهات; قص نفس الفترة الزمنية; قص المقاطع | قص الفيديوهات دفعةً واحدة وفحص كل مقطع | قص الفيديوهات |
| pt | cortar vídeos em lote; aparar vários vídeos; mesmo intervalo de tempo; corte em massa | Cortar vídeos em lote e verificar cada trecho | Cortar vídeos |
| id | potong video sekaligus; pangkas banyak video; potong rentang waktu sama; batch video cutter | Potong video secara batch dan periksa setiap klip | Potong video |
| fr | découper plusieurs vidéos; couper vidéos par lot; même plage temporelle; rognage vidéo en lot | Découper des vidéos par lot et vérifier chaque extrait | Découper les vidéos |
| ja | 動画を一括トリミング; 複数動画を同じ時間で切る; 動画の一括カット; 時間指定カット | 同じ時間範囲で動画を一括トリミング | 動画をトリミング |
| ru | пакетно обрезать видео; обрезать несколько видео; одинаковый интервал; массовая обрезка | Пакетно обрезать видео по времени и проверить каждый результат | Обрезать видео |
| de | Videos stapelweise schneiden; mehrere Videos trimmen; gleicher Zeitbereich; Videoclips zuschneiden | Videos stapelweise nach Zeit schneiden und Ergebnisse prüfen | Videos schneiden |

禁词：无损、任意格式、无限文件、所有设备、自动适配越界视频。各语首段写明同一时间规则、每段单独结果、短文件逐行报错、本地处理。

## 多轮覆盖记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照批量裁剪、多件同一时间范围与单件剪辑搜法，确定主词/相关词及短视频越界的任务边界 | H1 放批量时间裁剪；FAQ 和设置说明逐行越界，不静默截短 |
| 1b 英语母版复查 | 2026-10-03 | 英文 H1 明确按时间批量裁切，首段说明共用起止、独立 MP4 与短片越界报错；How 对齐 Trim videos 按钮及逐行实际时长 | FAQ 解释非无损重编码、时间精度、单独下载及大文件 OPFS 限制 |
| 2b 十语抽查 | 2026-10-03 | 独立回查 en,zh,es,ja 的主词、前置步骤、短片行错误及 FAQ，并逐语检查 ar,pt,id,fr,ru,de 的时间单位、独立 MP4 和重编码边界 | 十语均在 H1 与首段描述批量同一区间裁剪，FAQ 明确短片失败而其余继续、产物独立下载 |
