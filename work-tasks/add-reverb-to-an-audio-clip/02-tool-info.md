# 工具信息

**状态**：`implemented`
**slug**：`add-reverb-to-an-audio-clip`
**路径**：`/tools/add-reverb-to-an-audio-clip`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 add reverb to audio；echo effect；room reverb；hall reverb；音频混响；加混响。常见结果为桌面 DAW、空壳「converter」只改音量、或捆 slowed+reverb。少有 **只混响（不减速）、Room/Hall/Echo 预设、反馈延迟网络、且 FAQ 诚实消歧 ≠ slowed+reverb（S35）** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Reverberation

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S40 |
| Title (en) | Add reverb to an audio clip |
| Description | Add reverb or echo to an audio clip with Room, Hall or Echo presets, then download a 16-bit WAV. Steps: Add reverb, preview, download. Example: load the sample. Reverb-only—not slowed+reverb. Never uploaded. |
| page.style | opts |
| 技术 | decode → multi-tap feedback delay (convolution-lite) → 16-bit WAV |
| related | shift-a-recording-toward-a-higher-or-lower-voice；make-a-slowed-and-reverb-clip |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ S35 slowed+reverb；≠ S39 voice height；隐私；IR 质量上限；预设含义 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 旁白加点空间 | Room → Add reverb | 近原长 + 短尾的 WAV |
| 大厅感 / 回声 | Hall / Echo | 更长尾或更明显拍 |
| 样例验管线 | Load sample → auto | 可复现 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `add-reverb-to-an-audio-clip`（禁止 H1 写成 slowed and reverb） |
| 主检索词 → title/H1 | add reverb / echo effect → Add reverb to an audio clip |
| 次要关键词 → desc / FAQ | room / hall → 预设芯片；slowed reverb → FAQ→S35 |
| 用户搜索习惯判断 | 搜 echo / 混响者须得到只混响页，不骗减速审美 |
| 优化摘要 | H1 只混响；FAQ 强制 ≠ S35 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| add reverb / echo effect / room reverb / hall | absorb 主词 | H1 / How / 预设 | 本页 |
| delayed echo / slapback | absorb | Echo 预设 / FAQ | 本页（不拆 URL） |
| slowed and reverb | 有意不满足（S35） | FAQ | make-a-slowed-and-reverb-clip |
| higher / lower voice | 有意分场景（S39） | FAQ / related | shift-a-recording-toward-a-higher-or-lower-voice |
| studio IR convolution suite | 有意不满足（诚实上限） | FAQ / Rules | 不冒充 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：只混响/回声特效 + Room/Hall/Echo；不减速 |
| 主词搜索者任务 | 选空间、试听、下载 |
| 满足之处 | 三预设、Add reverb、本地、样例、FAQ 消歧 |
| 超出 / 应划边界 | 不做 S35 减速；不做真 IR 库；不做实时麦 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120；FAQ ≥1 条明确 **≠ slowed+reverb（S35）**。

## 交互规格

- 单文件 40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Add reverb；预设 Room（默认）/ Hall / Echo。
- HUD Read/Decode/Reverb/Write；进页样例自动处理；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
