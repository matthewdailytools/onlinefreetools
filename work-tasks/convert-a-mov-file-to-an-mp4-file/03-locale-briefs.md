# 03 — Locale Brief 与禁词核查

**工具 slug**：`convert-a-mov-file-to-an-mp4-file`  
**母版语言**：en  
**状态**：`i18n-done`

## 共用门禁

- [x] 清单前检索覆盖已做（见 02）
- [x] 同意图相关搜法已写入 02
- [x] 用户意图审查已做（H.264 可 copy；HEVC 按设备条件转换或拒绝）
- [x] 母版与他语检索覆盖已优化
- [x] 检索覆盖已优化
- [x] 十语独立改写；每语不承诺所有 iPhone HEVC/HDR 都可转换，也不把仅音频 MP4 称成功。

| 语种 | 当地搜法（3–5） | 结果向 H1 | 边界 |
|---|---|---|---|
| en | MOV to MP4; iPhone MOV to MP4; QuickTime MOV converter; HEVC MOV to H.264 | Convert a MOV video to a compatible H.264 MP4 | HEVC conditional |
| zh | MOV 转 MP4; iPhone 视频转 MP4; QuickTime 转 MP4; HEVC 转 H.264 | 把 MOV 视频转成兼容播放的 H.264 MP4 | HEVC 取决于浏览器 |
| es | MOV a MP4; vídeo iPhone a MP4; QuickTime a MP4; HEVC a H.264 | Convertir un vídeo MOV a MP4 H.264 compatible | HEVC condicional |
| ar | تحويل MOV إلى MP4; فيديو iPhone إلى MP4; QuickTime إلى MP4; HEVC إلى H.264 | تحويل فيديو MOV إلى MP4 متوافق بترميز H.264 | دعم HEVC مشروط |
| pt | MOV para MP4; vídeo iPhone para MP4; QuickTime em MP4; HEVC para H.264 | Converter vídeo MOV em MP4 H.264 compatível | HEVC depende do aparelho |
| id | MOV ke MP4; video iPhone ke MP4; QuickTime ke MP4; HEVC ke H.264 | Ubah video MOV menjadi MP4 H.264 yang kompatibel | HEVC bergantung perangkat |
| fr | MOV en MP4; vidéo iPhone en MP4; QuickTime vers MP4; HEVC en H.264 | Convertir une vidéo MOV en MP4 H.264 compatible | HEVC selon appareil |
| ja | MOV を MP4 に変換; iPhone 動画を MP4 に; QuickTime 変換; HEVC を H.264 に | MOV 動画を再生しやすい H.264 MP4 に変換 | HEVC は端末依存 |
| ru | MOV в MP4; видео iPhone в MP4; QuickTime в MP4; HEVC в H.264 | Конвертировать MOV в совместимый MP4 H.264 | HEVC зависит от устройства |
| de | MOV zu MP4; iPhone-Video zu MP4; QuickTime umwandeln; HEVC zu H.264 | MOV-Video in kompatibles H.264-MP4 umwandeln | HEVC geräteabhängig |

## 多轮记录

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-10-03 | 对照 MOV→MP4/iPhone/QuickTime 搜法、Apple/MDN/Mediabunny 文档与 H.264/AAC、H.264/PCM、HEVC/AAC 三组 Chrome POC；与 WebM/MKV/抽音邻页区分 | 保留独立 MOV slug；首屏表述 H.264/AAC 兼容目标与 HEVC 设备条件，逐轨核验是主要 IG |
| 1 母版+lint | 2026-10-03 | 写英语 H1、首段、How、轨道判定/大小报告、编码限制、FAQ 与实际下载交互；强制结果轨道复检，HEVC 无解码时报错 | 样例为 H.264/AAC MOV；H.264 视频复制、音频转 AAC；页面接线待机器门禁确认 |
| 1b 母版优化 | 2026-10-03 | 复查 MOV to MP4、iPhone MOV to MP4、QuickTime converter、HEVC MOV 搜法；meta 前段放格式对、设备内转换、H.264/AAC 结果和源轨道决策，How 对齐按钮 | 首页主任务与 HEVC 条件可见；视频 copy 与音频转 AAC 构成区别于 WebM 页的 IG |
| 2 他语改写 | 2026-10-03 | 逐语写 MOV→MP4、iPhone/QuickTime 首段、复制 H.264/转 AAC 的作业说明，按语言调整按钮、结果、HEVC 错误、场景和 FAQ；只沿用同族已本地化的通用控件短词 | 十语键齐全；不承诺 HEVC 通用、无损或一定缩小，均说明设备内处理与不上服务器 |
| 2b 抽查语优化 | 2026-10-03 | 抽查 en,zh,es,ja,ar：把主搜法放 H1/首段，iPhone MOV、QuickTime、HEVC 作为本地习惯次词落入 How/规则/FAQ；把复制视频、PCM→AAC、拒绝音频独存写成可验证差异 | 五语首屏指向 MOV→兼容 MP4，不与 WebM 强制视频重编码页共用同一技术承诺 |
| 3 抽查+lint | 2026-10-03 | 检查十语无 WebM/VP9/Opus 误带；运行 `coverage:gate --phase=all`、`lint:seo`、`build:site`、`verify:tool` 和十语真实下载脚本 | 全部通过；十语手机宽度下载均为 H.264/AAC MP4，阿语 RTL 无溢出；130 MiB OPFS 输出、停止重试、PCM→AAC、HEVC 拒绝通过 |
