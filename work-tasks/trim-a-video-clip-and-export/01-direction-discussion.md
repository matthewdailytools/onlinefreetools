# 01 — 方向讨论与依据

**立项方向 S：** `/tools/trim-a-video-clip-and-export`。选一个本地视频、指定要保留的开始与结束时间，导出可播放、音画同步的短片，并报告源/目标轨道、请求/实际起止、时长与体积。首屏是选文件→裁剪→预览/下载；不要把压缩、合并和变速作为同级任务。

## 搜法和技术边界

- 2026-10-03 SERP 中 `trim video online`、`cut MP4 clip`、`video trimmer start end` 聚合在保留一个连续时间段的作业。竞品常声称任意帧无损秒切，不能据此作为本站能力。参考 [Mediabunny 转换/裁剪官方指南](https://mediabunny.dev/guide/converting-media-files) 及 [ConversionOptions](https://mediabunny.dev/api/ConversionOptions)。
- Mediabunny 的 `ConversionOptions.trim` 可设置秒数起止并将输出时间线从 0 开始。其当前官方指南明确：非默认起点会强制视频与音频转码；不能宣称任意起点都走原包复制。若目标 H.264/AAC 编码器不可用，应在页面明确拒绝，不导出缺轨假成功。
- 本仓库已有同域 Mediabunny 输入探测、目标编码器检查、OPFS 大结果写入及 MP4 输出复检底座。要扩展为裁剪路径，并对实际片段时长、音画轨、前后体积和选择边界做真实下载验收。短片与大输入选短窗应分开测试；输入硬上限不是已测最大值。

## 信息增益与边界

页面提供源时长/codec、所选区间、预计时长、实际成片时长与前后体积；结果用外部解码核对首末画面与声音，而不只看到 Download 按钮。可提供精确重编码为主模式，解释质量/用时；关键帧快速复制只有 POC 证实后才能列为模式。损坏视频、时长越界、空区间、无音轨、不可解码、存储不足、停止/重试均需测试。与 `convert-an-mp4-file-to-a-webm-file` 的换格式任务及 `convert-a-video-file-to-a-gif` 的动图任务分开。
