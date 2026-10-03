# 02 — 工具信息定稿

**状态**：`implemented`（本地已验收，未部署）  
**slug**：`batch-convert-audio-files-to-mp3`  
**路径**：`/tools/batch-convert-audio-files-to-mp3`  
**主方向**：A  
**YMYL**：否

## IG 预审

- 主词：batch convert audio files to MP3；bulk audio to MP3；convert multiple audio files to MP3；mixed audio files to MP3。
- 搜索者任务：一次选入不同来源的 M4A、FLAC、OGG（亦可 WAV）录音/歌曲，以同一目标码率得到各自的 MP3，用于共享或兼容性要求。
- SERP 样本（2026-10-03）：[AudioKit](https://audiokit.app/) 提供多格式/本地批量；[Don's Tools](https://donstools.com/audio-converter) 强调逐行进度；[Lacuna](https://www.lacuna.fm/audio-converter) 明确 mixed formats；[SonicBatch](https://www.sonicbatch.com/batch-audio-converter/) 详述队列、暂停与下载。几个竞品均使“混合格式批量”意图成立。
- 竞品仍需具体说明的三项：输入扩展名不保证浏览器能解码；从 FLAC 到 MP3 会丢失信息，M4A/OGG 再编码不能改善原质量；ZIP 对大结果会增加内存占用，逐项下载更适合大批量。
- 独立 IG：首屏格式/任务声明；How 解释逐文件校验→解码→编码→交付；规则表交代格式与有损边界、大小上限、失败继续；结果逐行报告输入/输出尺寸、状态及失败原因；Example 展示混合三格式及一个坏文件仍有两个产物；FAQ 解释浏览器兼容、码率、ZIP/单独下载。
- 来源：[MDN decodeAudioData](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData)，[lamejs README](https://github.com/zhuker/lamejs)。
- related：`convert-a-flac-file-to-mp3`、`convert-an-m4a-file-to-mp3`、`convert-an-ogg-file-to-mp3`、`bulk-convert-wav-files-to-mp3`。

| §3.1 维度 | 本页位置与验证 |
|---|---|
| 边界/失败 | 格式/浏览器解码失败逐行反馈，成功项仍可下载 |
| 场景语境 | 手机录音 M4A、归档 FLAC、OGG 音效放同一队列 |
| 对照表 | 输入来源、已压缩与否、MP3 再编码的质量含义 |
| 数值示例 | 3 个混合输入中 1 个损坏，2 个输出；显示每行体积/码率 |
| 本地隐私 | 文件留在设备，不上传服务器；明确浏览器处理限制 |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | §11.4 音频批量首项，工程 POC 第一优先 |
| 场景 | 把不同来源录音、歌曲和素材批量做成独立 MP3 |
| 技术 | 浏览器 Web Audio 解码 + lamejs MP3 编码；串行；输出逐项下载 |
| Catalog `page.style` | `opts` |
| Title (en) | Batch Convert Mixed Audio Files to MP3 Online |
| H1 | Batch convert audio files to MP3 |
| Description 方向 | Convert mixed M4A, FLAC, OGG and WAV files to separate MP3s in one local queue. Pick a bitrate, inspect each result and download successful files even if one source cannot decode. |
| Schema | WebApplication + BreadcrumbList，和可见文案一致 |
| FAQ | 混合输入、浏览器解码差异、码率/质量、部分成功、大批量下载 |
| related | 单件 M4A/FLAC/OGG、既有 WAV 批量 |
| 验收 | 0b→2→4→all，`verify:tool`，浏览器真实文件/样例/失败/下载/20项 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 `batch-convert-audio-files-to-mp3`；mixed 格式是页面核心，单格式批量不拆新 URL |
| 主检索词 → title/H1 | `batch convert audio files to MP3` → Batch Convert Mixed Audio Files to MP3 Online / Batch convert audio files to MP3 |
| 次要关键词 → desc / FAQ / Use cases | mixed M4A FLAC OGG → 首屏 desc；bulk audio to MP3 → How；convert multiple audio files to MP3 → FAQ；M4A voice memos / FLAC album / OGG assets → Use cases |
| 用户搜索习惯判断 | 用户搜目标结果与一次处理多个文件，不搜编码器实现；首屏先说混合输入、每文件独立 MP3、可下载 |
| 优化摘要 | 将初稿泛称“audio converter”改为 MP3 结果和混合输入任务；把队列失败与浏览器解码边界提前；避免格式词罗列成多个重复页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch convert audio files to MP3 | absorb 主词 | H1、desc | 本页 |
| bulk audio converter to MP3 | absorb 次词 | How、FAQ | 本页 |
| convert multiple audio files to MP3 | absorb 次词 | desc、FAQ | 本页 |
| mixed audio files to MP3 | absorb 次词 | H1 下摘要、Example | 本页 |
| batch FLAC M4A OGG to MP3 | absorb 次词 | 输入提示、Use cases | 本页 |
| batch WAV to MP3 | 有意不满足独占词 | related / 既有 WAV 批量页 | `/tools/bulk-convert-wav-files-to-mp3` |
| merge audio files into one MP3 | drop，不同产物 | FAQ 明确每源各自产物 | `/tools/join-audio-files-in-order` |
| reduce MP3 size in batch | drop，不同任务 | FAQ 指向压缩意图 | 待独立评估 |

- [x] 上表已列全本意图相关搜索（基于本轮英文 SERP/相关结果，后续发现新词继续补）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析；已检索仓库关键词目录）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：混合来源一次导入，各自 MP3 输出；浏览器不支持的编码明确逐行失败并允许其余成功 |
| 主词搜索者任务 | 批量得到多个可用 MP3，统一目标码率，下载每个结果 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 混合 M4A/FLAC/OGG/WAV、队列、逐行状态、部分成功和独立下载 |
| 超出 / 应划边界 | 不提供音轨合并、多输出格式矩阵；ZIP 作为可选便利功能不得抢主操作 |
| 缺口与已做优化 | 加入浏览器解码失败、再编码质量及大批量下载说明；页面前部显式写混合格式和独立产物 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已回写规格与卡片 |

## 交互规格与验收

- 输入：最多 20 个 M4A/FLAC/OGG/WAV，混合排序，文件大小/时长限额用实际内存 POC 决定并在首屏说清。
- 输出：每个成功文件一个 `.mp3`；同名自动编号；结果逐项下载；若提供 ZIP，按输出量限制并明确高内存风险。
- 算法：按输入格式查验头部/元数据，浏览器 `decodeAudioData`→44.1 kHz PCM→lamejs，128/192/320 kbps，单任务串行。
- 失败：不支持/损坏、超限、解码/编码失败都落行；其余继续；停止后已成功项保留；重试失败项。
- 进页样例：本地示例 M4A/FLAC/OGG 中至少两种，自动执行并产出真实 MP3；Example 与之同源。
- 进度 HUD：Read / Decode / Encode / Ready，当前文件和总进度可见；成功后保留卡片并引向 Download。
- 本地真实回归：自动样例、混合有效输入、损坏输入、重试、停止、同名、20 项及大文件；下载后校验 MP3 头与时长。

## 本地验收记录（2026-10-03）

- `coverage:gate --phase=0b/2/4/all` 均通过；十语 76 个字段/占位符完整。
- `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-convert-audio-files-to-mp3` 通过；SEO、vendor、页面接线、隔离均绿。
- `npm run build:site` 退出码 0，刷新首页、十语工具页、sitemap 与 chrome。
- `node scripts/tool-modules/test-batch-audio-browser.mjs` 真实 Chrome 通过：自动 M4A+FLAC 样例、下载 MP3 再解码确认非静音和时长约 5.04 秒；追加 OGG+损坏 M4A 的部分成功、失败重试；十语移动端样例；20 文件、同名、停止/继续、40 MiB 上限拒绝。未向转换服务上传文件。
- 能力界限：单文件最大 40 MiB/10 分钟，队列最多 20；本地测试最大实际可转换输入为内置 5 秒样例，20 文件压力测试使用同一短样例。40 MiB 只验证拒绝边界，未声称已转换 40 MiB 文件。
