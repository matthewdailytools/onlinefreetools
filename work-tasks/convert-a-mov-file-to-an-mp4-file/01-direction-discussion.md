# 01 — 方向讨论与搜索样本

**立项方向**：单件 `/tools/convert-a-mov-file-to-an-mp4-file`，输入本地 QuickTime MOV，产出经实际轨道复检的 H.264/AAC MP4。H.264 视频可复制以节省时间和避免视频再压缩；PCM 等可解码音轨转 AAC；HEVC 视频仅在本机可解码、可重新编码为 H.264 时处理，否则明确拒绝，不能只输出音频冒充成功。

## 搜索与权威依据

- [Apple 视频格式概览](https://developer.apple.com/documentation/technologyoverviews/video) 与 [Apple 录制格式说明](https://developer.apple.com/documentation/avfoundation/recording-movies-in-alternative-formats)：MOV 可能含 H.264 或 HEVC；扩展名不能说明实际轨道。手机视频是否可转换须按 codec 和设备能力判断。
- [MDN WebCodecs codec selection](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection)：HEVC 浏览器解码支持不一致，H.264/AAC 是目标兼容组合；按设备探测。
- [Mediabunny conversion guide](https://mediabunny.dev/guide/converting-media-files)：兼容视频可复制；不兼容轨道需要实际解码/编码。本站 Chrome POC：H.264/AAC MOV→H.264/AAC MP4；H.264/PCM MOV→H.264/AAC MP4；HEVC/AAC MOV 的 `video.canDecode()` 为 false，默认 Conversion 丢弃视频只输出 AAC，因此必须前置拒绝并复检输出。
- 搜索页对照：[Filesvo MOV→MP4](https://filesvo.com/mov-to-mp4/) 与 [VideoEditingTips MOV→MP4](https://videoediting.tips/en/video-converter/mov-to-mp4-converter)：常见搜法围绕 `MOV to MP4`、`iPhone MOV to MP4`、兼容播放与无需上传。本站必须额外报告轨道决策和真实产物。

## 邻页区分

- WebM→MP4 页必须把 VP8/VP9 视频转 H.264；MOV 页对已是 H.264 的视频优先复制，HEVC 走设备条件分支，PCM/AAC 音轨决策也不同。
- MKV→MP4 页支持 Matroska/AC-3 等另一组轨道；MOV 页不继承其 5 GiB 大文件承诺。
- `extract-audio-from-a-mov-file` 只导出音轨；本页必须保留可播放的视频。

## 独立信息增益

逐轨显示源 codec、分辨率、时长，说明视频是复制还是重编码、音频如何变成 AAC，报告真实输出 codec/时长/字节数。无音轨、HEVC 解码失败、PCM 声道选择、损坏 MOV 与设备限制均给明确结果。大输入和大输出要测 OPFS 写出、下载、清理。
