# 工具信息

**状态**：`ready`
**slug**：`eq-a-muffled-voice-recording`
**路径**：`/tools/eq-a-muffled-voice-recording`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 equalizer online graphic eq audio muffled voice EQ clarity presence。常见结果为桌面 DAW、万能 Online Audio Converter、十段滑条玩具页。少有单独讲 **闷人声三预设（Clarity/Warmth/Presence）三频段 Biquad、且 FAQ 消歧 ≠ 仅低音（S21）≠ 降噪（S24）≠ 去齿音（S31）** 的单点页。

补足三项：①Rules 写清三预设频段意图；②结果展示预设名、峰值前后与输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode 、https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S20 |
| Title (en) | EQ a muffled voice recording |
| Description | EQ a muffled voice recording with Clarity, Warmth or Presence three-band presets. Steps: EQ, preview, download WAV. Example: load the muffled sample. On-device; never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → OfflineAudioContext 三节 BiquadFilter → 软峰值保护 → PCM 16-bit WAV |
| related | limit-peaks-so-a-file-does-not-clip；compress-dynamic-range-of-a-voice-recording |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 仅低音（S21）；≠ 降噪（S24）；≠ 去齿音（S31）；隐私；预设含义 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 电话/口罩录音发闷、听不清字 | 选 Clarity（默认）→ EQ | 削减浑浊低频、抬升清晰度与空气感的 16-bit WAV |
| 想更暖、更近人声 | 选 Warmth → EQ | 轻抬低频体、略收刺耳高频 |
| 播客人声欠「在场感」 | 选 Presence → EQ | 抬升中高存在感与空气感 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `eq-a-muffled-voice-recording`（场景句；禁止与 S21 bass / S24 denoise / S31 de-ess 混 H1） |
| 主检索词 → title/H1 | equalizer online / muffled voice EQ → EQ a muffled voice recording |
| 次要关键词 → desc / FAQ / Use cases | graphic eq / clarity presence warmth → settings/rules；bass / denoise / de-ess → FAQ |
| 用户搜索习惯判断 | 用户要扫闷 EQ，不是单频低音增强（S21）、不是去底噪（S24）、不是去齿音（S31） |
| 优化摘要 | H1 场景句；desc 点出三预设与三步样例；FAQ 强制消歧 S21/S24/S31 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| equalizer online / graphic eq audio | absorb 主词 | H1 / How | 本页 |
| muffled voice / dull recording EQ | absorb 场景 | H1 / Use cases | 本页 |
| clarity / presence / warmth EQ | absorb 次词 | settings / Rules | 本页 |
| bass booster / boost bass | 有意不满足（S21） | FAQ | boost-bass-on-an-mp3（未上线则文案边界） |
| noise reduction / denoise | 有意不满足（S24） | FAQ | reduce-background-noise-on-a-voice-memo（未上线则文案边界） |
| de-esser / de-ess | 有意不满足（S31） | FAQ | de-ess-a-voiceover（未上线则文案边界） |
| limit peaks / prevent clipping | 相邻作业 | related | limit-peaks-so-a-file-does-not-clip |
| compress dynamic range / vocal compressor | 相邻作业 | related | compress-dynamic-range-of-a-voice-recording |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：用 Clarity/Warmth/Presence 三频段预设 EQ 闷人声并导出 WAV |
| 主词搜索者任务 | 扫闷、开清晰度或暖度/在场感 |
| 满足之处 | 三预设、试听、结果行、本地、样例自动 EQ |
| 超出 / 应划边界 | 不做 S21/S24/S31 主路径；不做十段滑条万能 EQ / 多轨 DAW |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S21/S24/S31 消歧）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 EQ → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：Clarity / Warmth / Presence（默认 Clarity）。
- 结果显示预设、峰值前后、输出 KiB。
- 管线：decodeAudioData → OfflineAudioContext 三节 BiquadFilter → 软峰值保护 → 16-bit WAV。
- HUD：Read / Decode / EQ / Write；进页样例自动 EQ（默认 Clarity）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
