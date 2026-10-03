# 01 — 方向讨论与证据

**立项方向 S：** `/tools/convert-an-mp4-file-to-a-webm-file`。默认把一个本地 MP4 转成真实 VP9 视频与 Opus 音频的 WebM，供网页嵌入或开放媒体工作流使用。这与现有 WebM→MP4 页方向相反；不只是改扩展名，也不声称 VP9 一定比原 H.264 更小。[方向红线](../../docs/2026-07-28-tool-direction.md)要求输出能独立满足一个明确作业。

## 检索与技术依据

- SERP 里 `mp4 to webm`、`convert MP4 to WebM`、`MP4 to WebM for web` 聚合到容器/目标编码任务；[Convertio](https://convertio.co/mp4-webm/) 等结果的通用格式叙述并非本站支持范围的证据。
- [MDN WebCodecs 选型](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection) 将 VP9+Opus/WebM 作为网页媒体目标之一，并说明 codec 能力取决于浏览器；页面要显示目标轨道且转前逐设备探测。
- 本地 Chrome POC：`VideoEncoder.isConfigSupported(vp09.00.10.08)` 与 `AudioEncoder.isConfigSupported(opus)` 均为 true；Mediabunny `WebMOutputFormat` 对站内 11 秒 H.264/AAC MP4 实际生成 112176 字节 WebM，重新检查得到 VP9、Opus、11.02 秒。大文件输出尚待独立测试。
- [Mediabunny 转换指南](https://mediabunny.dev/guide/converting-media-files) 与本仓库同域 vendor loader 可复用 OPFS 流式目标；WebM 输出需新路径，并在下载前二次验轨，避免 MP4 内容误贴 `.webm`。

## 信息增益与边界

首屏直接选 MP4→Convert→Download WebM；显示源/目标视频和音频编码、尺寸、时长、前后体积，以及目标编码器可用性。允许无音轨 MP4 输出视频-only WebM；对于设备不能解码 H.264/HEVC 或不能编码 VP9/Opus，显示准确失败，不把空视频或残缺音频称成功。质量设置说明体积不保证减少；大文件使用 OPFS，停止/重试须释放暂存输出。
