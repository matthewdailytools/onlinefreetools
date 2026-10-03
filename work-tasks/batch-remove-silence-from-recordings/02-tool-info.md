# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-remove-silence-from-recordings`  
**路径**：`/tools/batch-remove-silence-from-recordings`  
**主方向**：A  
**YMYL**：否

## IG 预审

- 主词：batch remove silence from audio；bulk silence remover；remove pauses from multiple recordings。
- 用户任务：用同一套可解释阈值，分别缩短多条录音里的长停顿，再逐项查看删去多少并下载。
- SERP 样本：见 `01`；既有批量工具显示时长对照，但内部长停顿、阈值误剪和逐项实际结果需在本页明确。
- 可验证 IG：每行检测段数、原/后秒数、删去秒数/比例；同一规则各文件输出不同；短于最短时长的停顿保留；静音或损坏逐项失败。
- 权威依据：[Audacity Truncate Silence](https://www.audacityteam.org/manual/effects/special/truncate-silence/)、[MDN decodeAudioData](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData)。
- Related：`remove-silence-from-a-recording`、`split-a-recording-on-silence`、`batch-trim-the-same-intro-from-audio-files`。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.4 批量峰值标准化后第一项 |
| Title (en) | Batch Remove Silence from Recordings |
| H1 | Remove silence from multiple recordings in one batch |
| Description 方向 | Remove long pauses inside multiple audio recordings in one local queue; see original/output duration and seconds removed for each WAV. |
| Catalog `page.style` | `opts` |
| 技术 | 逐文件签名与解码 → 窗 RMS 阈值检测 → 保留可配置短间隔与边缘淡化 → 分块 PCM WAV 写出 |
| Schema | WebApplication + BreadcrumbList，与可见页面一致 |
| FAQ | 中间停顿/片头尾、阈值误剪、最短静音、保留间隔、输出 WAV/体积、隐私 |
| 验收 | 0b→2→4→all、`verify:tool`、真实下载外部时长/编码/非静音、混合异常、20 项、4 分钟大输出 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留；每个录音有不同检测结果、删去时长和独立输出，与单件页和拆段页不同 |
| 主检索词 → title/H1 | `batch remove silence from audio` → Batch Remove Silence from Recordings / Remove silence from multiple recordings in one batch |
| 次要关键词 → desc / FAQ / Use cases | `remove pauses from multiple recordings` 进 desc；`bulk audio silence remover` 进 How；`trim long pauses inside audio` 进 FAQ |
| 用户搜索习惯判断 | 搜索者希望一套阈值处理整个录音文件夹，但要知道每份真正删去多少，首屏先呈现队列和单件时长对照 |
| 优化摘要 | 从泛“批量剪音频”改为逐件内部长停顿缩短，明确阈值、最短静音和保留短间隔三个独立作用，并承诺可验证删去秒数 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch remove silence from audio | absorb 主词 | H1、desc | 本页 |
| remove pauses from multiple recordings | absorb 次词 | desc、How | 本页 |
| bulk audio silence remover | absorb 次词 | How、FAQ | 本页 |
| trim long pauses inside audio | absorb 内部静音任务 | opening、FAQ | 本页 |
| batch trim silence from start and end | absorb 子任务 | FAQ/usecase，明确也处理内部 | 本页 |
| split audio on silence | 不吸，不同输出结构 | related | 现有拆段页 |
| fixed intro trim for many files | 不吸，固定时间切法 | related | 现有批量片头页 |

- [x] 上表已列全本轮同意图相关搜索词
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾

- [x] 不适用（仓库 `docs/seo/keywords` 中未检出本 slug 的 Planner/Ads 分析）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：批量处理内部/端部长停顿，各自输出和删去时长可核验 |
| 主词搜索者任务 | 对多个独立录音重复同一阈值检测与停顿缩短，并逐件取回结果 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 队列、统一阈值/最短时长/保留间隔、原后时长、段数、部分成功和独立下载 |
| 超出 / 应划边界 | 不做 AI 语义剪辑、噪声消除、固定片头裁切或将多个录音拼成一条 |
| 缺口与已做优化 | 对无可删段显示 0 秒并允许下载未缩短版本；对纯静音拒绝虚假成品；阈值误剪提醒进入 FAQ |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已回写规格 |

## 交互规格

- 输入：MP3/WAV/M4A/FLAC/OGG 等浏览器可解码音频；签名预检，20 项、每件 20 MiB/5 分钟代码上限，实际 codec 依浏览器。
- 默认：窗 RMS -40 dBFS、最短静音 0.4 秒、每段保留 0.15 秒；处理内部及端部连续静音，边缘短淡化防咔哒。逐件显示检测段数、原/后时长与删去比例。
- 输出：每份独立 16-bit PCM WAV；优先 OPFS 分块写出，输出上限 60 MiB，内存回退保留总额 96 MiB。停止、重试、部分成功和独立下载。
- 自动样例：两条不同长停顿的多段可听短 WAV；真实处理后下载，证实删去时长不同，短停顿保留。

## 本地验收（2026-10-03）

- `coverage:gate --phase=0b/2/4/all`、`npm run build:site`、`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-remove-silence-from-recordings` 均通过；正式证据见 `.cache/verify-tool/batch-remove-silence-from-recordings/1791006394324-d8c660e5-ad1e-4e96-b50b-c0908358af42`。
- 最终构建上运行 `node scripts/tool-modules/test-batch-silence-browser.mjs`：两个 3 秒样例下载后为 2.30/1.90 秒；0.7 秒最短静音与 0.25 秒保留间隔实际产生 2.45 秒输出；无足够长静音显示删去 0 秒。逐项试听按钮可用。
- 带 ID3 MP3、OGG、纯静音 WAV 和损坏 MP3 同批测试：有效项成功、错误逐项隔离且可重试。十语移动端、阿语 RTL、20 件同名文件、停止/续跑、过限拒绝通过。
- 285 秒真实 MP3 中 15 秒静音经 OPFS 缩短，下载 WAV 大于 40 MiB；`ffprobe` 确认 `pcm_s16le`、44.1 kHz、双声道、270.16 秒。清队列后 OPFS 清理和无 OPFS 内存回退均通过；未实测单件 20 MiB、多件同时接近上限、配额耗尽或崩溃恢复。
