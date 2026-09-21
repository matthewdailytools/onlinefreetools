# 工具信息

**状态**：`ready`
**slug**：`change-audio-speed-without-changing-pitch`
**路径**：`/tools/change-audio-speed-without-changing-pitch`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 slow down audio without changing pitch；change speed without pitch；音频变速不变调。常见结果为桌面 DAW、Audacity Change Tempo、或在线万能 converter 用 playbackRate 连音调一起改。少有单独讲 **WSOLA 时间拉伸、预设 0.75/0.9/1.25/1.5、且 FAQ 诚实消歧 ≠ pitch shift（S33）≠ nightcore（S34）** 的单点页。

补足三项：①Rules 写清 WSOLA 与极端伪影；②结果展示速度倍率与输出时长/体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling 、https://en.wikipedia.org/wiki/Overlap%E2%80%93add_method

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S32 |
| Title (en) | Change audio speed without changing pitch |
| Description | Time-stretch audio with WSOLA so tempo changes while pitch stays. Steps: Stretch, preview, download WAV. Example: load the sample. On-device—not pitch shift, not nightcore. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → WSOLA overlap-add time-stretch → PCM 16-bit WAV |
| related | de-ess-a-voiceover；fade-in-and-fade-out-an-audio-clip |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ pitch shift（S33）；≠ nightcore（S34）；隐私；浏览器诚实上限；预设含义 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 练歌放慢 | 0.75x（默认）→ Stretch | 更长、音高大致不变的 WAV |
| 略加速卡点 | 1.25x → Stretch | 略短、不变调 |
| 自定义倍率 | Custom 0.5–2.0 → Stretch | 按输入倍率拉伸 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `change-audio-speed-without-changing-pitch`（场景句；禁止与变调/夜核混 H1） |
| 主检索词 → title/H1 | slow down / change speed without pitch → Change audio speed without changing pitch |
| 次要关键词 → desc / FAQ / Use cases | time stretch / tempo / 变速不变调 → settings/usecase；pitch shift / nightcore → FAQ |
| 用户搜索习惯判断 | 用户要改速度但保留音高，不是升调、不是夜核一条龙 |
| 优化摘要 | H1 场景句；desc 点出 WSOLA；FAQ 强制消歧 S33/S34 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| slow down audio without changing pitch | absorb 主词 | H1 / How | 本页 |
| change tempo / time stretch | absorb 次词 | desc / Rules | 本页 |
| speed up song keep pitch | absorb 场景 | Use cases / presets | 本页 |
| pitch shift / change key | 有意不满足（S33） | FAQ | （未上线则文案边界） |
| nightcore maker | 有意不满足（S34） | FAQ | （未上线则文案边界） |
| de-ess / sibilance | 邻域相关 | related | de-ess-a-voiceover |
| fade in fade out | 邻域相关 | related | fade-in-and-fade-out-an-audio-clip |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：WSOLA 变速不变调后导出 WAV；诚实写浏览器上限 |
| 主词搜索者任务 | 改速度、听音高是否保留、下载 |
| 满足之处 | 预设+自定义、试听、结果行、本地、样例自动 Stretch、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S33 变调；不做 S34 夜核；不做单纯 playbackRate 冒充 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S33/S34 消歧与浏览器诚实上限）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Stretch → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：0.75x / 0.9x / 1.25x / 1.5x + Custom（默认 0.75x）。
- 管线：decode → WSOLA stretch → 16-bit WAV。
- 结果显示速度、输入/输出秒数、输出 KiB。
- HUD：Read / Decode / Stretch / Write；进页样例自动 Stretch（默认 0.75x）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
