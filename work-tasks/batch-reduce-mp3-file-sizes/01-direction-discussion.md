# 01 — 方向讨论

## 决策

主方向 A，本机浏览器队列。slug `batch-reduce-mp3-file-sizes` 面向“缩小一批已有 MP3 以便发送/节省空间”，与单文件 `reduce-an-mp3-file-size` 的单次试听、与混合格式转 MP3 的兼容性任务不同。每个输入有自己的产物或“不值得替换”的结论。

## 搜索与独立性证据（2026-10-03）

- [123Converter](https://123converter.com/mp3-compressor) 对批量 MP3 提供前后体积比较；[Lacuna](https://www.lacuna.fm/mp3-compressor) 强调目标大小、逐行节省；[SonicBatch](https://www.sonicbatch.com/mp3-compressor/) 解释再次有损编码和比特率/目标大小取舍；[AnyFyle](https://www.anyfyle.com/tools/compress-audio) 给出批量来源和码率场景。SERP 确认队列意图存在。
- 单文件页已有 MP3 帧校验、浏览器解码、lamejs 编码和有损警告。批量页需重新检验 20 个高低码率混合 MP3、同名、坏文件、停止/重试和大文件。
- 不把 ZIP 作为唯一输出。逐项下载，优先 OPFS 写出；无 OPFS 时明确保留结果的总内存上限。
- 若输出大小 ≥输入大小，标记“未缩小”，不将其称为成功节省；原文件永远不被覆盖。用户可下载结果作对比，也可只下载确实更小的项。需真实测量，不用理论码率冒充实际结果。

## 邻接意图

“convert MP3 to WAV”要得到 PCM WAV，不能吸进缩小页；“compress mixed audio to MP3”由混合格式批量页或单件格式页承担；“normalize volume”改变响度，不等于减少字节。目标体积搜索须有实际控件/计算才可吸收，第一版若只提供码率则应在 FAQ 清楚说明没有精确目标字节承诺。
