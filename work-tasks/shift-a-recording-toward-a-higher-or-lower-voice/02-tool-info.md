# 工具信息

**状态**：`implemented`
**slug**：`shift-a-recording-toward-a-higher-or-lower-voice`
**路径**：`/tools/shift-a-recording-toward-a-higher-or-lower-voice`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 male to female voice changer；gender voice；higher voice；lower voice；男声变女声。常见结果承诺「真变成某性别」或捆克隆。少有 **只提供更高/更低听感、时长大致保留、且 FAQ 明确不承诺性别转换** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S39 |
| Title (en) | Shift a recording toward a higher or lower voice |
| Description | Shift a recording toward a higher or lower voice while aiming to keep duration, then download a 16-bit WAV. Steps: Shift, preview, download. Example: load the sample. Honest pitch move only—not a gender conversion claim, not toy chipmunk/robot presets. Never uploaded. |
| page.style | opts |
| 技术 | decode → resample + WSOLA duration restore → 16-bit WAV |
| related | apply-a-toy-voice-effect-to-a-recording；shift-the-pitch-of-a-song |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ gender claim；≠ S38 toys；≠ S33 song framing；隐私；质量上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 旁白略高/略低 | Higher / Lower → Shift | 时长近原长的 WAV |
| 试听夸张 | Much higher / Much lower | 更大半音偏移 |
| 样例验管线 | Load sample → auto Shift | 可复现 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `shift-a-recording-toward-a-higher-or-lower-voice`（禁止 H1 写成 gender changer） |
| 主检索词 → title/H1 | higher/lower voice → Shift a recording toward a higher or lower voice |
| 次要关键词 → desc / FAQ | male to female / gender → FAQ 诚实拒绝承诺；toy → FAQ→S38 |
| 用户搜索习惯判断 | 搜性别变声者仍须得到诚实「只移高/低」页，不骗转换成功 |
| 优化摘要 | H1 更高/更低；FAQ 强制非性别主张 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| higher voice / lower voice / voice pitch | absorb 主词 | H1 / How | 本页 |
| male to female voice changer / gender voice | absorb 搜法但诚实边界 | FAQ 不承诺 | 本页（不拆 URL） |
| chipmunk / robot toy | 有意不满足（S38） | FAQ | apply-a-toy-voice-effect-to-a-recording |
| pitch shift song keep duration | 有意分场景（S33） | FAQ / related | shift-the-pitch-of-a-song |
| celebrity clone | 有意不满足 | FAQ | 不冒充 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：更高/更低人声听感 + 时长旨在保留；不承诺性别 |
| 主词搜索者任务 | 移高/移低、试听、下载 |
| 满足之处 | 四预设、Shift、本地、样例、FAQ 诚实 |
| 超出 / 应划边界 | 不做性别成功承诺；不做 S38 玩具；不做实时麦 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120；FAQ ≥1 条明确 **不承诺性别转换**。

## 交互规格

- 单文件 40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Shift；预设 Higher（默认）/ Much higher / Lower / Much lower。
- HUD Read/Decode/Shift/Write；进页样例自动 Shift；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
