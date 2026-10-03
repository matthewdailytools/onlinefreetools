# 01 — 方向讨论与搜索样本

**立项方向 B：** `/tools/batch-convert-webm-files-to-mp4-files`，多个独立 WebM 得到多个 H.264/AAC MP4。区别于单件转换和把视频合并成一个成片；队列、逐行结果、同名去重、部分成功与独立下载是可检验的新增能力。遵循 [方向红线](../../docs/2026-07-28-tool-direction.md)。

## 搜索与技术依据

- [Serverless Tools WebM→MP4 bulk](https://serverless.tools/webm-to-mp4/)、[VideoRadius WebM→MP4](https://www.videoradius.com/tools/online-webm-to-mp4) 与 [VideoUpscaler WebM→MP4](https://videoupscaler.com/tools/webm-to-mp4) 的相关搜索形态含 batch/bulk/multiple、逐项下载和 ZIP；本站的区别须落到实际大文件/局部失败路径，不能仅换标题。
- [Mediabunny conversion guide](https://mediabunny.dev/guide/converting-media-files) 与单件 WebM 页实测：必须显式指定 AVC，不能把 VP9 直接装进 MP4 当作广泛兼容输出；产物还须重读轨道。
- [MDN OPFS](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system)、[MDN storage quotas](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)：大产物存放于 origin 存储、受浏览器配额约束；不能让所有结果默认进入内存 ZIP，也不能在 Blob 下载前清理临时文件。

## 独立 IG 与边界

每行报告源/输出视频和音频 codec、分辨率/时长、前后体积、失败原因、保留成功项；同名生成不同下载名。单个源按 OPFS 能力限制，批量串行编码，避免并发编码器与内存峰值。默认逐项下载；ZIP 仅在安全预算内提供（若未实现则不承诺）。无 H.264 encoder、损坏 WebM、无音轨分别说明。不是合并视频、WebM→MP3 或同一成片分段。
