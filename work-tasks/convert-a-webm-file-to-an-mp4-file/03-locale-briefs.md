# 03 — Locale Brief 与禁词核查

**工具 slug**：`convert-a-webm-file-to-an-mp4-file`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] 清单前检索覆盖已做（见 02）
- [x] 同意图相关搜法已写入 02
- [x] 用户意图审查已做（真 H.264/AAC 目标）
- [x] 母版与他语检索覆盖已优化
- [x] 检索覆盖已优化
- [x] 十语独立改写；每语不承诺无损、一定缩小或所有浏览器可用。

| 语种 | 当地搜法（3–5） | 结果向 H1 | 边界 |
|---|---|---|---|
| en | WebM to MP4; convert WebM recording to MP4; VP9 to H.264; browser recording MP4 | Convert WebM to a playable H.264 MP4 | not rename/lossless |
| zh | WebM 转 MP4; 浏览器录屏转 MP4; VP9 转 H.264; WebM 视频兼容播放 | 把 WebM 视频转成可播放的 H.264 MP4 | 不只改后缀 |
| es | WebM a MP4; grabación WebM a MP4; VP9 a H.264; vídeo compatible | Convertir WebM a MP4 H.264 reproducible | no sin pérdida |
| ar | تحويل WebM إلى MP4; تسجيل المتصفح إلى MP4; VP9 إلى H.264; فيديو متوافق | تحويل WebM إلى MP4 بترميز H.264 | لا تغيير امتداد فقط |
| pt | WebM para MP4; gravação WebM em MP4; VP9 para H.264; vídeo compatível | Converter WebM para MP4 H.264 reproduzível | não sem perda |
| id | WebM ke MP4; rekaman browser ke MP4; VP9 ke H.264; video kompatibel | Ubah WebM menjadi MP4 H.264 yang dapat diputar | bukan ganti ekstensi |
| fr | WebM en MP4; enregistrement WebM vers MP4; VP9 vers H.264; vidéo compatible | Convertir WebM en MP4 H.264 lisible | pas sans perte |
| ja | WebM を MP4 に変換; 画面録画を MP4 に; VP9 を H.264 に; 再生互換 | WebM を再生しやすい H.264 MP4 に変換 | 拡張子変更だけではない |
| ru | WebM в MP4; запись браузера в MP4; VP9 в H.264; совместимое видео | Конвертировать WebM в воспроизводимый MP4 H.264 | не простая смена расширения |
| de | WebM zu MP4; Browseraufnahme zu MP4; VP9 zu H.264; kompatibles Video | WebM in abspielbares H.264-MP4 umwandeln | kein bloßes Umbenennen |

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照转换站搜法、Mediabunny 文档和本地 VP9+Opus POC，区分真 H.264/AAC 转码与默认 VP9 拷入 MP4；审查 MKV/抽音邻页 | 保留独立 WebM→MP4 slug；首屏承诺可验证的视频 codec 与音轨，非换扩展名 |
| 1 母版+lint | 2026-10-03 | 写英语 title、首段、说明、How/规则/FAQ 和输出轨道报告；实现视频编码与页面接线，运行 `lint:tool-page` | 接线通过，明确 WebM→真 H.264/AAC 而非 VP9 换容器 |
| 1b 母版优化 | 2026-10-03 | 复查 WebM to MP4、browser recording、VP9 to H.264 的落点；meta 前部改成“真实 H.264/AAC + 浏览器”，随后以短步骤与 VP9/Opus 样例说明可验证结果 | 首屏与 How 直达转换任务，源/目标 codec、时长和大小构成独立 IG |
| 2 他语改写 | 2026-10-03 | 按十语表逐语写 title、首段、步骤、可验证差异与 FAQ；沿用同族页面已本地化的通用按钮短词，覆盖所有 WebM 特有的编码、容量、结果和错误说明 | 十语键齐全；检索向标题均写 WebM→MP4，首段说明 H.264/AAC、设备内处理与不上传 |
| 2b 抽查语优化 | 2026-10-03 | 抽查 en,zh,es,ja,ar：把源/目标轨道与结果体积放入首屏和实例；区分后缀改名、VP9 仅换封装与真正的 H.264 转码；按各语习惯调整标题及 FAQ 问法 | 五语首屏覆盖 WebM 转 MP4 与录屏意图；关于无声源、无损、编码器不可用和实际体积的差异可在正文定位 |
| 3 抽查+lint | 2026-10-03 | 检查十语术语与旧 MKV 误带内容；运行 `coverage:gate --phase=all`、`lint:seo`、`build:site`、`verify:tool` 与十语移动端真实下载脚本 | 全部通过；十语样例 MP4 下载经 `ffprobe` 确认为 H.264/AAC，阿语 RTL 和手机横向溢出检查通过；108 MiB/90 秒样本、停止/重试、无 OPFS 与 MKV 邻页回归通过 |
