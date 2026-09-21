# 工具信息

**状态**：`ready`
**slug**：`match-podcast-loudness-to-minus-16-lufs`
**路径**：`/tools/match-podcast-loudness-to-minus-16-lufs`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 podcast loudness LUFS -16 youtube loudness spotify -14 online。常见结果为桌面 DAW、Youlean / Loudness Penalty 类计量站、万能 Online Audio Converter；「loudness normalize」常与 peak normalize / gain / compressor 挤在同一控件墙；少有单独讲 **目标 LUFS 响度匹配（芯片 −16/−14/−24）**、且消歧「≠ 固定 dB 增益、≠ 峰值归一化、≠ 动态压缩、≠ 压体积」的单点页。

补足三项：①Rules 写清 integrated LUFS 测量与整段等比缩放、近目标仍可转换并显示前后 LUFS；②结果展示目标 LUFS、源/结果 LUFS、时长与输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData 、https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer ；ITU-R BS.1770 响度计量思路（实现可用浏览器侧 LUFS 库，不拉 FFmpeg）。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S17 |
| Title (en) | Match podcast loudness to −16 LUFS |
| Description | Match podcast loudness to about −16 LUFS (−16/−14/−24 chips). Steps: match, preview, download WAV. Example: load the quiet sample. On-device; never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → measure integrated LUFS → scale so loudness hits target → PCM 16-bit WAV（保留声道） |
| related | normalize-an-audio-file-to-peak；make-a-quiet-recording-louder |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 固定 dB 增益（S15）；≠ 峰值归一化（S16）；≠ 动态压缩器（S18）；≠ MP3 体积压缩（S10）；隐私；近目标仍可转换；平台目标用芯片不拆 URL |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 播客轨整体偏轻或偏响，要交到常见 −16 LUFS | 选 −16 LUFS（默认）→ Match | 响度对齐到约 −16 的 16-bit WAV；保留声道 |
| 想对齐更响的音乐/流媒体习惯目标 | 选 −14 LUFS → Match | 结果行显示前后 LUFS 与目标 |
| 想对齐更安静的广播/EBU 习惯目标 | 选 −24 LUFS → Match | 峰值关系整体缩放，不做动态贴面 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `match-podcast-loudness-to-minus-16-lufs`（场景句；禁止「loudness normalizer」仅 URL 堆词当唯一 H1；平台名不拆 `/youtube-loudness`） |
| 主检索词 → title/H1 | podcast loudness / LUFS −16 → Match podcast loudness to −16 LUFS |
| 次要关键词 → desc / FAQ / Use cases | youtube loudness / spotify −14 → chips/settings；EBU/−23/−24 → chips；loudness normalize → desc/How；peak normalize → FAQ（S16） |
| 用户搜索习惯判断 | 用户要响度对齐到 LUFS 目标，不是固定 dB 增益（S15）、不是峰值拉齐（S16）、不是动态压缩贴面（S18）、不是压小 MP3（S10） |
| 优化摘要 | H1 场景句覆盖 podcast loudness / −16 LUFS；desc 点出目标芯片与三步样例；FAQ 消歧 S10/S15/S16/S18 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| podcast loudness / match podcast loudness to −16 LUFS | absorb 主词 | H1 / How | 本页 |
| lufs -16 / loudness normalize to LUFS | absorb 次词 | desc / settings | 本页 |
| youtube loudness / spotify -14 | absorb 次词 | chips / usecase | 本页（平台不拆 URL） |
| ebu r128 / −23 / −24 LUFS | absorb 次词 | chips / rules | 本页 |
| loudness normalizer online | absorb 次词 | desc / usecase | 本页（品类词不拆 `/loudness-normalizer`） |
| make audio louder / amplify gain | 有意不满足（S15） | FAQ 可指向增益工具 | make-a-quiet-recording-louder |
| normalize audio / peak normalize | 有意不满足（S16） | FAQ 可指向峰值工具 | normalize-an-audio-file-to-peak |
| audio compressor / dynamic range | 有意不满足（S18） | FAQ | 不建页（S18）；文案禁与 S10 体积「压缩」混用 |
| compress mp3 / reduce file size | 有意不满足（S10） | FAQ | reduce-an-mp3-file-size（本页 related 用已上线 S15/S16） |
| normalize to peak | 相邻作业 | related | normalize-an-audio-file-to-peak |
| make quiet recording louder | 相邻作业 | related | make-a-quiet-recording-louder |

- [x] 上表已列全本意图相关搜索（本次可取得的搜法簇；未取得 PAA 不冒充已取得）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析；不声称搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：按目标 LUFS 匹配整段播客响度并导出可下载 WAV（显示前后 LUFS） |
| 主词搜索者任务 | 把响度拉到选定 LUFS（默认 −16），便于上架播客、对齐流媒体习惯目标 |
| Ads/Planner | 不适用 |
| 满足之处 | 目标 LUFS 芯片、试听、实测结果行、本地、样例自动 Match |
| 超出 / 应划边界 | 不做固定 dB 增益主路径（S15）、不做峰值归一化主路径（S16）、不做动态压缩器（S18）、不做 MP3 体积压缩（S10）、不做多轨 DAW/母带夸大、不按平台拆 URL |
| 缺口与已做优化 | FAQ 区分 S10/S15/S16/S18；Rules 写 LUFS 测量与目标；How 对齐 Match/Download；related 仅链已上线 catalog slug |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

相对过短的「一句话 meta」：`desc` 首页卡仍一句；`description` 须 140–160 字且含 Steps + Example；`article` 须说明何时用、LUFS 响度匹配 vs 固定增益 vs 峰值归一化 vs 动态压缩、与 S10/S15/S16/S18 差异；How ≥4 步；Why choose ≥4 条可验证差异；Rules/FAQ 用人话解释控件与边界，禁止空「免费/最好」。

## 交互规格

- 单文件 dropzone：常见可解码音频（WAV/MP3/M4A 等），最大 40 MiB、10 分钟、1/2 声道；解码失败明确错误。
- 主按钮 Match（或 Convert）→ 结果试听 + Download WAV；Sample/Clear 次按钮。设置默认展开：目标响度芯片（−16 / −14 / −24 LUFS 等）；默认 −16 LUFS。
- 已近目标仍允许转换；结果行展示 LUFS 前后与目标。
- 结果显示目标 LUFS、源 LUFS、结果 LUFS、秒数、输出 KiB。变更设置/输入即清除旧下载。
- 管线：读 → decodeAudioData → measure integrated LUFS → scale to target → 16-bit WAV（保留声道）。进页样例：约 2 s 偏安静音调 WAV → 自动 Match；不自动播放。
- 进度 HUD：Read / Decode / Measure / Match / Write；金标样式；忙碌 aria-busy。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [ ] H1 / 工具区 / 自动样例 / HUD
- [ ] How / Why choose ≥4 / Rules / Example / Use cases
- [ ] FAQ ≥5 / related ≥2 / References
- [ ] 十语 brief 与实现
- [ ] catalog / page / icon / i18n 十语落地
