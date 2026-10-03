# 01 — 方向讨论与依据

**立项方向 S：** `/tools/change-video-speed`。本地 MP4/MOV/WebM 选 0.5×、0.75×、1.25×、1.5× 或 2×，预览并导出真正改写帧与声音时间轴的 H.264/AAC MP4。默认 1.5×，有声时可选音调随速度变化（磁带式）、60 秒以内 WSOLA 近似保调，或静音；长视频使用前者或静音。页面须明说 WSOLA 的处理痕迹与时长上限，不把单纯 `<video playbackRate>` 预览称为已导出。此作业是改时长与音画节奏，不能由裁剪或音频独立变速页吸收。

2026-10-03 SERP 搜法 `change video speed online`、`speed up MP4 with audio`、`slow down video`；不少竞品承诺保调，本页按模式和时长明确边界。参考 [Mediabunny ConversionVideoOptions](https://mediabunny.dev/api/ConversionVideoOptions) 的帧 `process` 与 [ConversionAudioOptions](https://mediabunny.dev/api/ConversionAudioOptions) 的音频 `process` 时间戳处理；竞品搜法参考 [TrackMix](https://trackmix.app/video-speed/) 与 [VidSpeed](https://vidspeed.app/)。保调算法复用仓库已有音频页的 WSOLA，经本地音频预解码后分块交给音视频转换；不宣称绝对音高准确。

本地 Chrome POC（2026-10-03）对 8 秒 H.264/AAC 实际重编码：0.5× 视频 16.000 秒/音频 16.091 秒，1.5× 视频 5.333 秒/音频 5.433 秒，2× 视频 4.000 秒/音频 4.087 秒；音视频起点均为 0。源音调约 440 Hz，随速变调输出约 220/659/880 Hz。6 秒样例的 WSOLA 保调在 0.5/1.5/2× 下音调约 447 Hz，视频分别 12/4/3 秒，音轨时长接近；这是近似保调并可能有处理痕迹。AAC 尾部填充约 0.04–0.10 秒，不能宣称样本级同步。大输出走 OPFS；无 OPFS 时按输入和预估输出预算拒绝。长期运行须有明显进度、取消、重试和下载复检。

**独立 IG：** 速度→预估/实测时长、视频与音频起点/时长、音调影响、帧率与轨道、前后字节、三种声音模式、OPFS 路径及 60 秒 WSOLA 上限。`change-audio-speed-without-changing-pitch` 是音频文件单独作业，不等于本页的视频保调导出；本页 WSOLA 只预解码短音轨，长/大任务可用逐块随速变调或静音路径。
