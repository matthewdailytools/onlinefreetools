# 03 — Locale briefs and review

**工具 slug**：`merge-video-clips-in-order`  
**母版语言**：en  
**状态**：`i18n-done`

- [x] 清单前检索覆盖已做：merge/combine/join 同意图并入，排序后单片是独立于批量转换的作业。
- [x] 用户意图审查已做：两段以上、可调整顺序、输出一个连续有声 MP4。
- [x] 检索覆盖已优化：十语按当地“合并/拼接/组合”的常见搜法重写标题与首段，抽查 en,zh,es,ja 的操作和 FAQ，并核对其余六语的重编码边界。

| Locale | 当地检索词（3–5） | Title/H1 方向 | 按钮用词 |
|---|---|---|---|
| en | merge video clips in order; combine videos into one; reorder clips | Merge local video clips in the order you choose | Merge clips / Download MP4 |
| zh | 按顺序合并视频；多个视频拼接成一个；视频排序合成 | 按指定顺序合并本地视频片段 | 合并片段 / 下载 MP4 |
| es | unir vídeos en orden; combinar clips en uno; ordenar clips | Unir clips de vídeo local en el orden elegido | Unir clips / Descargar MP4 |
| ar | دمج مقاطع فيديو بالترتيب; جمع فيديوهات في ملف واحد; ترتيب المقاطع | دمج المقاطع المحلية بالترتيب المختار | دمج / تنزيل MP4 |
| pt | juntar vídeos em ordem; combinar clipes em um; ordenar clipes | Juntar clipes locais na ordem escolhida | Juntar clipes / Baixar MP4 |
| id | gabungkan klip video berurutan; satukan video; atur urutan klip | Gabungkan klip video lokal sesuai urutan | Gabungkan / Unduh MP4 |
| fr | fusionner vidéos dans l'ordre; assembler clips en un; réorganiser | Fusionner des clips locaux dans l'ordre choisi | Fusionner / Télécharger MP4 |
| ja | 動画を順番に結合; 複数動画を一本に; クリップ順序変更 | ローカル動画を選んだ順序で一本に結合 | 結合 / MP4 を保存 |
| ru | объединить видео по порядку; склеить клипы; изменить порядок | Объединить локальные клипы в выбранном порядке | Объединить / Скачать MP4 |
| de | Videos in Reihenfolge zusammenfügen; Clips zu einem Video; sortieren | Lokale Videoclips in gewählter Reihenfolge zusammenfügen | Zusammenfügen / MP4 laden |

禁词：无损、任意视频格式、所有设备、自动剪辑、无限大文件。每语首段须说明排序→一个成片、声音同步、浏览器本地处理和重编码边界。

## 多轮覆盖记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 核对 merge、combine、join videos 与重排、单片产物的任务；对比逐文件 batch 转换 | H1 绑定排序后的单片结果，首段吸收混合来源/声音，FAQ 说明重编码和一条成片而非多个输出 |
| 1b 英语母版复查 | 2026-10-03 | 英文 H1 和首段写按选定顺序合并为一个 MP4，How 对齐 Merge clips 按钮，结果说明音轨与总时长 | FAQ 覆盖重排、WebM+MOV 混合输入、保持声音、不承诺无损以及无上传；Rules 区分逐片批量转换 |
| 2b 十语复查 | 2026-10-03 | 逐语复核 en,zh,es,ja 的标题、首段、How、示例与 FAQ；再核 ar,pt,id,fr,ru,de 的当地排序和单文件表达 | 71 个键在十语齐全；各语说明双片段排序、混合 WebM/MOV 成一条 MP4、48 kHz AAC、必须重编码及本地处理 |
