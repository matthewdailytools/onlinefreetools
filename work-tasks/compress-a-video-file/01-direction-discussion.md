# 01 — 方向讨论与依据

**立项方向 S：** `/tools/compress-a-video-file`。选一个本地视频，设置保留比例的输出分辨率和视频码率，导出可播放的 H.264/AAC MP4，比较前后分辨率、轨道、实际字节和节省率。首屏选文件→压缩→预览/下载；高级设置可选输出高度/码率或近似目标体积。输出若更大，应如实显示，并保留下载。

## 搜法和技术边界

- 2026-10-03 SERP：`compress video online`、`reduce MP4 size`、`make video smaller` 关注可下载且实测更小的成片；`resize video to 720p` 关注像素尺寸。两者可由同一受控重编码路径完成，目标高度作为明确模式，先吸收 `resize-a-video-to-a-target-resolution`，避免仅换 H1 的近义页。参考 [Mediabunny 官方转换指南](https://mediabunny.dev/guide/converting-media-files)、[ConversionVideoOptions](https://mediabunny.dev/api/ConversionVideoOptions)、[CutNoodle 压缩页](https://cut-noodle.com/compress-video) 与 [OpenReplay 视频压缩页](https://openreplay.com/tools/video-compressor/) 的用户任务表达；不照搬竞品体积承诺。
- 官方视频选项允许指定高度并按原比例推导宽度，也允许设置 `bitrate`；码率与 `quality` 不可同时指定（本地 POC 已捕捉并修正）。本地 Chrome POC 把 640×360 高码率 H.264 实际编码为 320×180、约 300 kbps 的 MP4，并由 `ffprobe` 复检分辨率及字节。页面应以实测体积和轨道为准，不承诺必定更小、无损或“精确命中目标 MB”。
- 大输出使用现有 OPFS 流路径，输入以有 OPFS 5 GiB、无 OPFS 80 MiB 为代码防护上限，而非已验证的最大文件。须按目标尺寸查询 H.264 编码器能力；源音轨可解码才可输出 AAC，静音源保持静音。压缩的实际处理可能比原片时长更久，需醒目进度、取消、重试和输出清理。

## 独立信息增益和范围

页首明确“减小视频体积”，高级设置提供“指定目标高度”以完成 resize 需求；结果同时报告源/目标像素、估算体积、实测输入/输出字节、节省或增大比例、H.264/AAC 轨道、处理路径和质量取舍。估算只来自所选码率×时长，并非承诺。对已经高度压缩、短视频、小分辨率或不可编码文件，应显示真实结果/限制。此页每次产生一个 MP4；`batch-compress-video-files` 在单件验收后另开队列页面，逐项结果和部分成功构成独立 IG。
