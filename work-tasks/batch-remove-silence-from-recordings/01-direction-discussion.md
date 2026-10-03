# 01 — 方向讨论与搜索样本

**结论**：建立独立批量去静音页。多个独立录音共享检测阈值、最短静音和保留间隔，逐文件输出、逐项显示删去时长/比例、失败隔离和下载；这超出现有单文件 `remove-silence-from-a-recording` 的任务。

## 搜索样本与意图

- [AudioQC batch silence trimmer](https://audioqc.app/silence-trimmer/)：多个文件、统一阈值与 padding、每行原/后时长与保存，是用户的批量作业而非单件输入加 `multiple`。
- [ClipZeal trim silence](https://clipzeal.com/trim-silence)：批量输入与逐项结果；其主意图偏片头/片尾，本页须明确也处理**中间**长停顿。
- [Audacity Truncate Silence](https://www.audacityteam.org/manual/effects/special/truncate-silence/)：低于 dB 阈值且达到最短时长的安静段被缩短，阈值/时长/保留长度须分开说明。
- [FFmpeg silenceremove](https://ffmpeg.org/ffmpeg-filters.html#silenceremove)：参考端部与中间多段处理的术语；本页采用浏览器 Web Audio 的窗 RMS 测量，不声称等同 FFmpeg。

**与邻近工具区分**：现有单文件去静音供逐件预览和微调；`split-a-recording-on-silence` 是一个输入拆成多段；`batch-trim-the-same-intro-from-audio-files` 是统一固定时间裁剪。此页只处理多个独立录音中被阈值检测出的长停顿，逐件可有不同删去长度。

**可验证 IG**：每份原时长、输出时长、删去秒数与百分比、检测到的长静音段数；保留间隔改变真实成品长度；无可删段不虚称“已缩短”；静音、损坏和短停顿的边界；各输出独立下载。
