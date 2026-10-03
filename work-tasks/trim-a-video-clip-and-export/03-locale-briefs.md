# 03 — 各语言 Locale Brief 与多轮记录

**工具 slug**：`trim-a-video-clip-and-export`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] 清单前检索覆盖已做（见 02）。
- [x] 同意图相关搜索词已写入 02。
- [x] 用户意图审查已做：保留连续区间、实际时长和音画轨，非零起点重编码边界。
- [x] 检索覆盖已优化：十语 H1/首段/How/FAQ 覆盖当地视频裁剪搜法。

| 语种 | 当地检索说法（3–5） | 结果向 title/H1 | 场景与禁词 |
|---|---|---|---|
| en | trim video; cut MP4 clip; video trimmer start end; remove video intro | Trim a video clip and export an MP4 | no arbitrary lossless-cut promise |
| zh | 裁剪视频; 截取 MP4 片段; 视频去片头片尾; 视频保留指定区间 | 裁剪视频片段并导出 MP4 | 不称任意点无损秒切 |
| es | recortar vídeo; cortar clip MP4; recortar inicio y fin; mantener tramo de vídeo | Recortar un clip y exportarlo a MP4 | sin promesa de corte sin pérdida |
| ar | قص فيديو; اقتطاع مقطع MP4; إزالة بداية الفيديو ونهايته; تحديد وقت القص | قص مقطع فيديو وتصديره MP4 | لا وعد بقص بلا إعادة ترميز |
| pt | cortar vídeo; recortar clipe MP4; remover início do vídeo; escolher trecho | Recortar trecho de vídeo e exportar MP4 | sem promessa de corte sem perda |
| id | potong video; pangkas klip MP4; hapus intro video; pilih waktu awal akhir | Pangkas cuplikan video dan ekspor MP4 | tanpa janji tanpa penyandian ulang |
| fr | couper vidéo; rogner clip MP4; supprimer début vidéo; choisir début fin | Découper un extrait vidéo et exporter en MP4 | pas de coupe sans perte garantie |
| ja | 動画をトリミング; MP4 の一部を切り出す; 動画の冒頭を削る; 開始終了を指定 | 動画をトリミングして MP4 に書き出す | 任意点で無劣化を約束しない |
| ru | обрезать видео; вырезать клип MP4; убрать начало видео; задать начало и конец | Обрезать видеофрагмент и сохранить MP4 | не обещать резку без перекодирования |
| de | Video schneiden; MP4-Clip kürzen; Videoanfang entfernen; Start und Ende wählen | Videoclip zuschneiden und MP4 exportieren | kein verlustfreier Schnitt an jeder Stelle |

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照 trim video、cut MP4 clip、删除片头片尾与保留中段搜法，并核对 Mediabunny 官方 trim 属性及非零起点强制转码说明 | 独立 S 页以可播放成片、实际起止/时长、轨道及体积报告为 IG；不承诺任意点无损秒切 |
| 1b 英语母版复查 | 2026-10-03 | 英语 H1 用 trim a video clip；首段加入 cut MP4 clip 和起止时间，How 与主按钮同用 trim/export；规则解释非零起点重编码、音轨和实测上限 | 搜索意图直接对应连续区间导出，结果区提供实际时长、轨道与体积 |
| 2b 十语复查 | 2026-10-03 | 逐语改写标题、首段、How、规则、示例和 FAQ；抽查 en、zh、es、ja 的本地“裁剪视频 / recortar vídeo / 動画をトリミング”搜法、首屏任务与信息增益，再核 ar、pt、id、fr、ru、de 的措辞与 RTL | 各语把本地片段裁剪放在开头；MOV/WebM 解码边界、H.264/AAC 与 OPFS 上限放规则和 FAQ，不重复邻近格式转换页 |
