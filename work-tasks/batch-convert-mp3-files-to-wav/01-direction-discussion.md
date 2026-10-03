# 01 — 方向讨论

## 决策

主方向 A：`batch-convert-mp3-files-to-wav`。MP3 逐件解码为 16-bit PCM WAV，逐行报告输入/输出大小、预计膨胀量、输出采样率和声道，提供独立下载、部分成功、停止/重试和同名去重。与现有单文件 MP3→WAV 不同，队列和大 PCM 输出预算是核心作业；不做默认 ZIP，以免额外汇聚所有 WAV。

## 搜索与边界（2026-10-03）

- [PremiereLY](https://premierely.io/tools/mp3-to-wav/) 与 [256-tools](https://256-tools.com/en/tools/mp3-to-wav/) 覆盖批量 MP3→WAV、ZIP/独立下载；[AnyFyle](https://www.anyfyle.com/tools/mp3-to-wav) 描述音频编辑使用场景。用户寻找的是音频编辑器/采样器所需的 PCM 文件，而非“音质升级”。
- [MDN decodeAudioData](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData) 要求完整文件输入，且解码结果在内存中；因此必须列明单文件和队列上限，不得把 MP3 输入字节数当作 WAV 内存需求。
- [MDN OPFS](https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system) 支持可写本机浏览器存储，但受配额约束。大 WAV 优先分块写出到 OPFS；不可用时用更小内存预算并明确拒绝。
- [Microsoft RIFF](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-) 定义 WAV/RIFF 文件结构。输出需可被独立解析为 16-bit PCM WAV，并验证声道、采样率、时长、非静音。

## 邻接意图

“batch WAV to MP3”追求减小传输体积，已有 `bulk-convert-wav-files-to-mp3`；“reduce MP3 file sizes”已有独立批量页；“extract audio from video”改变输入容器。三者不应导向本页。48 kHz 只是一项 WAV 输出设置，不能承诺比 44.1 kHz 恢复更多源信息。
