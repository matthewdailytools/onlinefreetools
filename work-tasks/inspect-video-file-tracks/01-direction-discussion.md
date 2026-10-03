# 01 — 方向讨论

**独立诊断作业：** `/tools/inspect-video-file-tracks`。用户拿到一个播放无声、无法导入或不知是否需要转码的视频，想核查文件里到底有哪些轨道。上传本地 MP4/MOV/WebM/MKV 等浏览器可读取的文件；逐轨展示容器、codec/参数字符串、分辨率或声道/采样率、语言、起点、元数据时长、当前浏览器能否解码。允许多文件串行检查，逐文件错误与 JSON 报告下载。大文件通过 `BlobSource` 按需读取元数据，不把视频整体读进内存。可选“计算精确时长”是长任务，须单独明确代价、进度与取消，首版不宣称 metadata 时长精确。

2026-10-03 搜法包括 `video codec checker online`、`check audio tracks in MP4`、`video file metadata viewer`、`why does my video have no sound`。已存在的转换页侧重输出新文件，不能替代所有轨道诊断；本页不以扩展名猜 codec。参考 [Mediabunny reading-media-files](https://mediabunny.dev/guide/reading-media-files)、[InputTrack API](https://mediabunny.dev/api/InputTrack) 与 [supported codecs](https://mediabunny.dev/guide/supported-formats-and-codecs)：读取所有轨道，`getCodec()`/`getCodecParameterString()`/`getLanguageCode()`/`canDecode()` 等只报告当前设备结果。

**独立 IG：** 主音轨以外的多音轨数量、各轨语言/声道/采样率和 codec；容器标签与真实编码分离；元数据时长与音视频起点差；当前浏览器能否解码而非全球兼容保证；同批文件逐项错误和 JSON 报告。没有音轨时明确“文件不含音轨”，有但无法解码时另写“此浏览器不支持该编码”。复用纯函数按 Mediabunny 目标格式支持的 codec 集合报告 MP4/WebM 对编码族的接受情况，强调这不是成功 remux、转码或播放的承诺。
