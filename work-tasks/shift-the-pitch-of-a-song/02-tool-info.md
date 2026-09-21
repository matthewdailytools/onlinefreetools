# 工具信息

**状态**：`implemented`
**slug**：`shift-the-pitch-of-a-song`
**路径**：`/tools/shift-the-pitch-of-a-song`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 pitch shifter online；change pitch of song；音频变调；降调伴奏。常见结果为桌面 DAW、Audacity Change Pitch、或在线万能 converter 用 playbackRate 连时长一起改。少有单独讲 **半音转调、时长大致保留、预设 −2/−1/+1/+2/+3、且 FAQ 诚实消歧 ≠ speed-without-pitch（S32）≠ nightcore（S34）** 的单点页。

补足三项：①Rules 写清 resample+WSOLA 与质量上限；②结果展示半音、输出时长/体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Audio_time_stretching_and_pitch_scaling 、https://en.wikipedia.org/wiki/Pitch_shift

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S33 |
| Title (en) | Shift the pitch of a song |
| Description | Transpose a song by semitones while aiming to keep duration. Steps: Shift, preview, download WAV. Example: load the sample. Browser resample+WSOLA—not speed-only, not nightcore. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → resample by 2^(n/12) → WSOLA restore duration → PCM 16-bit WAV |
| related | change-audio-speed-without-changing-pitch；boost-bass-on-an-mp3 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ speed-without-pitch（S32）；≠ nightcore（S34）；隐私；浏览器诚实上限；半音预设含义 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 降调伴奏 | −2（默认）→ Shift | 音高约低两半音、时长大致不变的 WAV |
| 略升调 | +1 或 +2 → Shift | 略高、时长大致保留 |
| 自定义半音 | Custom −12…+12 → Shift | 按输入半音转调 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `shift-the-pitch-of-a-song`（场景句；禁止与变速/夜核混 H1） |
| 主检索词 → title/H1 | pitch shifter / change pitch of song → Shift the pitch of a song |
| 次要关键词 → desc / FAQ / Use cases | transpose / semitone / 降调伴奏 → settings/usecase；time stretch / nightcore → FAQ |
| 用户搜索习惯判断 | 用户要改音高/调性且大致保留时长，不是练歌变速、不是夜核一条龙 |
| 优化摘要 | H1 场景句；desc 点出半音与时长保留；FAQ 强制消歧 S32/S34 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| pitch shifter / change pitch of song | absorb 主词 | H1 / How | 本页 |
| transpose / semitone / change key | absorb 次词 | desc / Rules | 本页 |
| 降调伴奏 / lower pitch keep length | absorb 场景 | Use cases / presets | 本页 |
| change speed without pitch | 有意不满足（S32） | FAQ | change-audio-speed-without-changing-pitch |
| nightcore maker | 有意不满足（S34） | FAQ | （未上线则文案边界） |
| boost bass | 邻域相关 | related | boost-bass-on-an-mp3 |
| voice changer / clone | 有意不满足 | FAQ / Rules | 不冒充克隆 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：半音变调且时长大致保留后导出 WAV；诚实写浏览器质量上限 |
| 主词搜索者任务 | 改音高、听时长是否大致不变、下载 |
| 满足之处 | 预设+自定义、试听、结果行、本地、样例自动 Shift、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S32 变速；不做 S34 夜核；不做音色克隆；不做工作室级相位声码器承诺 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S32/S34 消歧与浏览器诚实上限）；zh description ≥120 字符。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Shift → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：−2 / −1 / +1 / +2 / +3 + Custom（默认 −2）。
- 管线：decode → resample by pitch ratio → WSOLA restore duration → 16-bit WAV。
- 结果显示半音、输入/输出秒数、输出 KiB。
- HUD：Read / Decode / Shift / Write；进页样例自动 Shift（默认 −2）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
