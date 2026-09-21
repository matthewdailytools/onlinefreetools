# 工具信息

**状态**：`ready`
**slug**：`split-stereo-into-left-and-right-files`
**路径**：`/tools/split-stereo-into-left-and-right-files`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 split stereo into left and right files swap left right audio online。常见结果为桌面 DAW、万能 Online Audio Converter、Audacity 教程；网页页多把「分离声道」埋进格式转换或 mixer，少有单独讲 **ZIP 双 mono 文件** 与 **L-R 交换同页**、且消歧「≠ 混成一个 mono」的单点页。

补足三项：①Rules 写清拆文件保留各自声道、交换只改左右位置、混成一个 mono 属 S12；②结果展示模式、源声道、时长与输出体积（ZIP 或 WAV KiB）；③拒绝超限/坏文件/单声道并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData 、https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S13 |
| Title (en) | Split stereo into left and right files |
| Description | Split stereo into left/right mono WAVs (ZIP) or swap L-R. Steps: convert, preview, download. Example: load the stereo sample. Stays on-device; never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → extract L/R or swap → PCM 16-bit WAV（Split 再打包 ZIP） |
| related | convert-stereo-audio-to-mono；convert-audio-sample-rate-and-bit-depth |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 混成一个 mono（S12）；≠ 采样率（S11）；≠ MP3 体积压缩（S10）；隐私；已是 mono |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 要把左右轨拆成两个文件分别剪辑 | Split to files → Convert | ZIP 内 left.wav + right.wav；默认 Split |
| 耳机左右反了要纠正 | Swap L-R → Convert | 单个 stereo WAV；左右互换 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `split-stereo-into-left-and-right-files`（场景句；禁止「stereo splitter」仅 URL 堆词当唯一 H1） |
| 主检索词 → title/H1 | split stereo left right / separate channels → Split stereo into left and right files |
| 次要关键词 → desc / FAQ / Use cases | swap left right audio → settings/How；extract left right wav → rules；ZIP mono files → desc |
| 用户搜索习惯判断 | 用户要拆成两个 mono 文件或交换左右，不是混成一个 mono（S12）、不是改采样率（S11）、不是压小 MP3（S10） |
| 优化摘要 | H1 场景句覆盖 split L/R files；desc 点出 ZIP 与 swap、三步与样例；FAQ 消歧 S10/S11/S12 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| split stereo into left and right / separate stereo channels | absorb 主词 | H1 / How | 本页 |
| extract left right channel wav / stereo to two mono files | absorb 次词 | desc / rules / usecase | 本页（ZIP 不拆 URL） |
| swap left right audio / reverse stereo channels | absorb 次词 | settings chips / How | 本页（同页模式） |
| split stereo to mono files ZIP | absorb 次词 | desc / result | 本页 |
| isolate left channel / isolate right channel | absorb 轻量 | FAQ（本页输出双文件；单侧只要一侧见 S12 Left/Right only） | 本页说明 + related S12 |
| stereo to mono mix / convert stereo to mono | 有意不满足（S12） | FAQ 指向 related | convert-stereo-audio-to-mono |
| convert sample rate / bit depth | 有意不满足（S11） | FAQ 指向 related | convert-audio-sample-rate-and-bit-depth |
| compress mp3 / reduce file size | 有意不满足（S10） | FAQ | reduce-an-mp3-file-size |

- [x] 上表已列全本意图相关搜索（本次可取得的搜法簇；未取得 PAA 不冒充已取得）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析；不声称搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：立体声拆为左右 mono 文件（ZIP）与/或交换 L-R 导出 stereo WAV |
| 主词搜索者任务 | 把双声道拆成两个可单独下载的 mono，或纠正左右反接 |
| Ads/Planner | 不适用 |
| 满足之处 | Split/Swap 模式、试听、ZIP 或 WAV 下载、实测结果行、本地、样例自动 Split |
| 超出 / 应划边界 | 不做混成一个 mono 主路径（S12）、不做采样率主作业、不做 MP3 体积压缩、不做多轨 DAW |
| 缺口与已做优化 | FAQ 区分 S10/S11/S12；Rules 写 ZIP 双文件与交换；How 对齐 Convert/Download |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

相对过短的「一句话 meta」：`desc` 首页卡仍一句；`description` 须 140–160 字且含 Steps + Example；`article` 须说明何时用、拆文件 vs 混 mono、与 S10/S11/S12 差异；How ≥4 步；Why choose ≥4 条可验证差异；Rules/FAQ 用人话解释控件与边界，禁止空「免费/最好」。

## 交互规格

- 单文件 dropzone：常见可解码音频（WAV/MP3/M4A 等），最大 40 MiB、10 分钟；须 2 声道；1 声道明确错误并引导 S12；解码失败明确错误。
- 主按钮 Convert → 结果试听 + Download（Split：Download ZIP；Swap：Download WAV）；Sample/Clear 次按钮。设置默认展开：输出模式 Split to files（默认）/ Swap L-R。
- 结果显示模式、源声道、秒数、输出体积（ZIP 总 KiB 或 WAV KiB）。变更设置/输入即清除旧下载。
- 管线：读 → decodeAudioData → Split 提取 L/R 两轨写 16-bit mono WAV 再 ZIP，或 Swap 交换声道写 16-bit stereo WAV。进页样例：约 2 s 立体声音调 WAV → 自动 Split；不自动播放。
- 进度 HUD：Read / Decode / Split（或 Swap，随模式）/ Write；金标样式；忙碌 aria-busy。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
