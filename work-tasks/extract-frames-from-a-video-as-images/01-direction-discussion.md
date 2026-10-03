# 01 — 方向讨论与依据

**立项方向 S：** `/tools/extract-frames-from-a-video-as-images`。把一个本地视频按时间间隔或单个时间点抽为真正的 JPG/PNG 静态图片。主任务是视频→静态图片序列；单张封面是同页「单一时间点」模式，不另立 `/tools/make-a-video-thumbnail-image` 空壳。与视频→GIF 页的循环动画产物不同；与批量多视频抽帧也不同。

## 检索与技术依据

- 2026-10-03 SERP 中「extract frames from video」「video to images」「save frames from MP4」「video thumbnail at timestamp」同属从视频取得静帧的任务。常见页提供单时刻、固定间隔、JPG/PNG 和逐张/ZIP 下载；本页首发只承诺能验收的选择。参考 [Extract Frames From Video](https://extractframesfromvideo.com/) 的意图结构，不照抄文案。
- [MDN Canvas Using images](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images) 展示设置 video.currentTime 后将当前帧 drawImage 到 canvas。必须等待 loadeddata/seeked，用本地 Blob URL；本仓库 GIF POC 证明无 Range 的静态测试路由会错误停在 0 秒，Blob URL 能准确跳转。
- 本页应报告每张图的请求时间与实际视频 currentTime、分辨率、格式/质量、文件字节数，并允许核对首末帧变化。不能称「提取全部原始编码帧」或逐帧精度保证；浏览器按可解码时间点寻址。

## 稳定性与边界

输入可从大本地视频寻址短窗口；输出的帧数、累计像素和总字节必须明确预算。单帧即时下载与逐帧释放 Blob 可减少内存；小集合可再做 ZIP，但不能把上百张 4K PNG 无限制存入 JSZip。坏视频、不可解码、时间越界、部分帧失败、停止/重试和真实下载必须测试。候选批量页另以多个视频→独立组为任务，待本页通过后评估。
