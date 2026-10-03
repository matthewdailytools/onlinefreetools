# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-normalize-audio-files-to-peak`  
**路径**：`/tools/batch-normalize-audio-files-to-peak`  
**主方向**：A  
**YMYL**：否

## IG 预审

- 主词：batch peak normalize audio files；normalize multiple audio files to peak；bulk audio peak normalization。
- 用户任务：把多份录音分别调到同一个样本峰值上限并各自下载，清楚了解每份实际改变了多少。
- SERP 样本：`01` 中 ElysiaTools、Notevibes、Vidsembly；批量目标与处理常见，但峰值、LUFS、true peak 被混称。独立页面需给出具体测量和边界。
- 可验证 IG：每行原样本峰值 dBFS、计算增益 dB、输出样本峰值；静音独立失败；同目标不同输入的不同增益；独立下载和部分成功。
- 权威依据：[MDN getChannelData](https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/getChannelData)、[ITU BS.1770](https://www.itu.int/rec/R-REC-BS.1770-5-202311-I)。
- Related：`normalize-an-audio-file-to-peak`、`match-podcast-loudness-to-minus-16-lufs`、`batch-reduce-mp3-file-sizes`。

| §3.1 维度 | 本页体现 |
|---|---|
| 公式/数值 | 增益 dB = 目标 dBFS − 原样本峰值 dBFS；目标线性峰值 = 10^(目标/20) |
| 边界/失败 | 静音不能标准化；样本峰值不等于 LUFS 或重建波形 true peak |
| 场景语境 | 多条语音片段、游戏音效、采访素材批量准备 |
| 对照 | 各源的原峰值、增益、输出峰值与 PCM 文件大小 |
| 本地隐私 | 音频留在设备，浏览器解码/写出，不上传服务器 |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.4 第三批；峰值标准化先行，随后处理去静音 |
| Title (en) | Batch Peak Normalize Audio Files |
| H1 | Batch normalize audio files to a peak target |
| Description 方向 | Normalize several recordings to one sample-peak dBFS target in a local queue; inspect per-file input peak, gain and real WAV result. |
| Catalog `page.style` | `opts` |
| 技术 | 逐文件格式签名与 Web Audio 解码 → 逐通道样本峰值 → 线性增益 → 分块 PCM WAV |
| Schema | WebApplication + BreadcrumbList，与可见页面一致 |
| FAQ | 样本峰值与 LUFS/true peak 的区别、静音、变小或变大、输出 WAV、隐私 |
| 验收 | 0b→2→4→all、`verify:tool`、下载 WAV 的外部峰值/声道/时长检测、批量/异常测试 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留；多输入独立峰值报告和结果，不是单文件页加 multiple |
| 主检索词 → title/H1 | `batch peak normalize audio files` → Batch Peak Normalize Audio Files / Batch normalize audio files to a peak target |
| 次要关键词 → desc / FAQ / Use cases | `normalize multiple audio files` 进首段；`bulk audio peak normalization` 进 How；`sample peak dBFS` 进规则；`not LUFS` 进 FAQ |
| 用户搜索习惯判断 | 搜索者要同一目标应用多文件，但需要逐件结果；首屏先写各自峰值/增益而非泛“音量统一” |
| 优化摘要 | 从泛批量音量词改为可验证的峰值标准化；把与 LUFS/true peak 的不等价提前，避免虚假一致响度承诺 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch peak normalize audio files | absorb 主词 | H1、desc | 本页 |
| normalize multiple audio files to peak | absorb 次词 | desc、How | 本页 |
| bulk audio peak normalization | absorb 次词 | How/FAQ | 本页 |
| sample peak dBFS target | absorb 参数任务 | 首屏设置/规则 | 本页 |
| match perceived loudness or LUFS | 不吸，不同算法 | FAQ 划界，related | 现有 LUFS 页 |
| compress audio file size | drop，不同结果 | related | 现有缩小页 |

- [x] 上表已列全本轮同意图相关搜索词
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析；已检索仓库目录）

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：每份音频得到同一目标样本峰值与独立 WAV，并有实测报告 |
| 主词搜索者任务 | 批量准备多条素材的最大样本电平，不要求 LUFS 相同 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 多文件、统一目标、逐项峰值/增益、部分成功、独立下载 |
| 超出 / 应划边界 | 不做感知响度匹配、true-peak 限制、噪声消除、压缩或 MP3 元数据保持 |
| 缺口与已做优化 | 强制各行显示输入与输出值；静音不生成虚假的目标结果 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已回写规格 |

## 交互规格

- 输入：MP3、WAV、M4A、FLAC、OGG 等浏览器可解码文件；扩展名与签名预检，实际 codec 仍由浏览器决定。队列最多 20，单件至多 20 MiB/5 分钟。
- 目标：-1、-3、-6 dBFS 样本峰值，单一设置作用于每个文件；每行计算自身所需正/负增益。静音与损坏输入逐行失败。
- 输出：独立 16-bit PCM WAV，显示输入峰值、增益、输出峰值、时长/输出大小，支持逐项下载、停止和重试；大结果优先 OPFS 分块写出。
- 自动样例：至少两份不同原峰值的可播放短片，真实处理后验证二者都接近目标，增益各异。

## 本地验收（2026-10-03）

- `npm run coverage:gate -- --slug=batch-normalize-audio-files-to-peak --phase=all`、`npm run build:site`、`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-normalize-audio-files-to-peak` 均通过；正式门禁证据见 `.cache/verify-tool/batch-normalize-audio-files-to-peak/1791005296737-fef92a6f-0941-4a26-9cf2-0799cd03ba7d`。
- 在最终构建上运行 `node scripts/tool-modules/test-batch-peak-browser.mjs`：两条不同原峰值样例均下载到约 -1.00015 dBFS，增益各异；-6 dBFS、48 kHz 单声道设置改变实际 PCM 结果；十语移动端和阿语 RTL 无溢出。
- 有效 OGG 和带 ID3 标签 MP3、静音 WAV、损坏 MP3 同批测试：有效项成功、错误逐行隔离并可重试。20 个同名文件、停止/续跑、过限输入拒绝通过。
- 四分钟真实 MP3 经 OPFS 写出大于 40 MiB 的 WAV；外部 `ffprobe` 确认 `pcm_s16le`、44.1 kHz、双声道、240 秒；下载、清队列后的 OPFS 清理与无 OPFS 内存回退均通过。未实测单件 20 MiB 或多件同时接近上限，也未验证配额耗尽与崩溃恢复。
