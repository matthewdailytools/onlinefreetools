# 01 — 方向讨论与搜索样本

**立项方向 B：** `/tools/batch-convert-mov-files-to-mp4-files`。一批 iPhone/QuickTime/相机 MOV 文件分别得到 H.264 视频、可用时 AAC 音频的 MP4，而非合并为一个成片。相比单件 MOV 页，价值来自混合轨道队列：逐行决定 H.264 视频可复制还是需要重编码、HEVC 当前设备不可解时只失败该行、PCM 音频写 AAC、保留其他成功项、大产物逐项下载。[方向红线](../../docs/2026-07-28-tool-direction.md)要求作业统一且不能只改 title。

## 搜索与技术依据

- [VideoRadius MOV→MP4](https://www.videoradius.com/tools/online-mov-to-mp4)、[VideoUpscaler MOV→MP4](https://videoupscaler.com/tools/mov-to-mp4) 和 [BulkVideoConverter MOV→MP4](https://www.bulkvideoconverter.com/mov-to-mp4) 的用户搜法包括 multiple/batch/bulk MOV、iPhone clips 与逐项 MP4。竞品的“任意 MOV、无限大小、ZIP”是主张而非本站能力证据。
- [MDN WebCodecs codec selection](https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API/Codec_selection)：解码/编码能力随设备变化，HEVC 浏览器支持存在缺口；必须逐文件判断，不能一条可转就推断整批。
- [Mediabunny conversion guide](https://mediabunny.dev/guide/converting-media-files) 与本站单件 MOV 的本地 POC：H.264 源轨可复制，PCM→AAC；在当前 Chrome 下，未预检的 HEVC 转换曾只输出音频，故逐行预检与产物复检为硬要求。单件 130 MiB/90 秒 MOV 已得到 >80 MiB OPFS MP4，批量页需独立验证保留/下载。
- [MDN OPFS](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system) 与 [浏览器配额](https://developer.mozilla.org/en-US/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria)：逐项保留大 MP4；大 ZIP 不默认内存聚合。

## 区分与 IG

单件 MOV 页处理一个视频；本页处理多段独立视频并区分每行“视频复制/重编码/无法处理”。不是单件页加 `multiple`，也不是合并视频或 MOV→MP3。每行真实源/目标轨、尺寸、时长、体积、错误与独立下载；同名输出去重；部分成功及停止/重试保留成功项。混合 H.264+HEVC、PCM/AAC、无音轨和大文件是验收关键。
