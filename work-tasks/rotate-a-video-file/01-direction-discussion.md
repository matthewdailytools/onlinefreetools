# 01 — 方向讨论与依据

**立项方向 S：** `/tools/rotate-a-video-file`。选本地 MP4/MOV/WebM，预览并选择顺时针 90°、180° 或逆时针 90°，输出像素方向已旋转的 H.264/AAC MP4。默认顺时针 90°；首屏展示旋转前后实际宽高、视频/音频轨道、时长与体积；可下载。此作业与更改视频分辨率、裁剪、压缩不同，不在压缩页换词。

2026-10-03 搜索 `rotate video online`、`rotate MP4 90 degrees`、`fix sideways video`：用户要修正侧拍/倒置的视频方向，关心导出的文件在播放器里仍保持方向。参考 [Mediabunny ConversionVideoOptions](https://mediabunny.dev/api/ConversionVideoOptions) 的 `rotate` 和 `allowTransformationMetadata`；竞品搜法参考 [GigAI](https://gigai.tools/video-rotate)、[EditClips](https://editclips.online/tools/rotate-video)。不能承诺无损：像素转正会重编码。也不能只写容器旋转元数据，却声称所有播放器方向一致。

本地真实 POC（2026-10-03）对 640×360、8 秒 H.264/AAC 输入实际导出 90°→360×640、180°→640×360、270°→360×640；`ffprobe` 未发现 rotation side data；将 90° 输出与原视频 `transpose=clock` 比较，SSIM 约 0.795，明显优于 `transpose=cclock` 约 0.294，确认顺时针像素旋转。编码后的颜色/压缩有差异，不能把 SSIM 当无损证明。大结果走 OPFS，失去 OPFS 时明确限制和拒绝；应有停止、重试和输出清理。

**独立信息增益：** 角度方向的直观选择、源/结果画面与宽高、是否真正写入像素而非仅改播放标记、AAC/无声轨道、时长和字节、设备编码器及存储限制。测试必须检查实际下载文件的方向、视频轨、音频保持、坏文件、MOV/WebM、>80 MiB 输入、停止/重试、十语移动端。
