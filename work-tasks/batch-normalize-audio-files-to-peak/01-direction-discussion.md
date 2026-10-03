# 01 — 方向讨论

## 决策

主方向 A，slug `batch-normalize-audio-files-to-peak`：多份浏览器可解码的音频输入，各自测量样本峰值，按同一个 -1/-3/-6 dBFS 目标计算整段线性增益，输出独立 16-bit PCM WAV。每行显示原峰值、目标、增益 dB、实际输出峰值和文件大小；静音文件单独报错，不制造虚假增益。队列继续处理其他项，支持停止、重试与独立下载。

## 搜索与技术证据（2026-10-03）

- [ElysiaTools](https://elysiatools.com/en/tools/audio-batch-normalize) 提供多文件目标峰值批处理，[Notevibes](https://notevibes.com/audio-normalizer) 解释近目标文件变化小，[Vidsembly](https://tools.vidsembly.com/tools/audio-volume-booster) 覆盖批量增益和归一化。需求是多个独立输出与各文件自己的测量结果。
- [MDN AudioBuffer.getChannelData](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/getChannelData) 支持逐样本峰值扫描；[MDN decodeAudioData](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData) 要求完整文件并返回内存中的 PCM，因此需要严格单文件时长/大小预算。
- [ITU-R BS.1770](https://www.itu.int/rec/R-REC-BS.1770-5-202311-I) 将节目响度与 true peak 作为另外的测量任务。这里只对样本最大绝对值作线性缩放，不声称达到相同感知响度、LUFS 或 true-peak 上限。
- 输出的 WAV 逐块写入设备内浏览器存储；缺少该能力时限制保留在内存中的结果。默认不合并成 ZIP。

## 邻接意图

单文件 `normalize-an-audio-file-to-peak` 适合试听一条；`match-podcast-loudness-to-minus-16-lufs` 是感知响度目标，不吸进本页；单纯提高安静录音、峰值限制与动态范围压缩也是不同处理，不为近义词重复开 URL。
