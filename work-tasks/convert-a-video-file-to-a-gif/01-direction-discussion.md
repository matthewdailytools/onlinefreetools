# 01 — 方向讨论与证据

**立项方向 S：** `/tools/convert-a-video-file-to-a-gif`。从一个本地视频取短片，以可见起止时间、帧率和宽度生成真正会动的 GIF。`images-to-gif` 的输入是有序图片，本页输入是视频时间轴；`extract-frames-from-a-video-as-images` 输出多张静态图片，不与本页争同一作业。

## 检索与工程依据

- `video to gif` 与 `MP4 to GIF` 指向取短视频片段制成循环动画；`GIF from video clip`、`trim video to GIF`、`make a GIF from MP4` 归属同一 URL。纯 `images to GIF` 和 `video to images` 是相邻但不同的作业。
- 本仓库已经同域托管 `gifenc`，`images-to-gif` 实测写出 GIF。浏览器内 `HTMLVideoElement` 能把 Blob URL 视频按时间点解帧，canvas 把帧交给 gifenc；不能把视频文件直接改名为 GIF。
- 本地 Chrome POC：经 Blob URL（而不是无 Range 的测试静态路由）加载 11 秒 H.264 MP4，逐次 `currentTime=1/3/5/7` 后 `seeked` 给出准确时间。输出帧要在页面验收中再次用外部解码器查帧数和变化。

## 产品边界和信息增益

默认选一个文件→取短片→转换→预览/下载。给出源时长、实际取样时间、帧数、输出像素、估算内存预算和 GIF 实际字节数；GIF 没有视频声音，页面明确无声。高级设置仅放起止、fps、宽度；给出总帧数和总像素上限，防止长视频/高分辨率把主线程或内存拖垮。大**输入**可通过本地 Blob URL 寻址短窗口，但大**输出**不承诺无限量，超预算明确拒绝。停止后可重试；损坏或不可解码视频只报错误，不提供空白 GIF。
