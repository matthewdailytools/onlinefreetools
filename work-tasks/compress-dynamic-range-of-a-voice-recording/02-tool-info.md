# 工具信息

**状态**：`ready`
**slug**：`compress-dynamic-range-of-a-voice-recording`
**路径**：`/tools/compress-dynamic-range-of-a-voice-recording`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 audio compressor online vocal compressor dynamic range compress voice。常见结果为桌面 DAW、万能 Online Audio Converter、「compress」常与 MP3 体积挤在同一意图。少有单独讲 **人声动态范围压缩（Light/Medium/Heavy + makeup On/Off）**、且 FAQ 消歧「≠ 压 MP3 体积、≠ 固定增益、≠ 峰值、≠ LUFS」的单点页。

补足三项：①Rules 写清 threshold/ratio/knee 与 makeup；②结果展示预设、makeup 与输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode 、https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S18 |
| Title (en) | Compress dynamic range of a voice recording |
| Description | Compress the dynamic range of a voice recording with light/medium/heavy presets and optional makeup. Steps: compress, preview, download WAV. Example: load the sample. On-device; never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → 纯 JS 峰值包络压缩器（Light/Medium soft knee、Heavy hard knee）→ optional makeup + soft peak protect → PCM 16-bit WAV |
| related | match-podcast-loudness-to-minus-16-lufs；make-a-quiet-recording-louder |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ MP3 体积压缩（S10；中英「压缩」消歧）；≠ 固定 dB 增益（S15）；≠ 峰值归一化（S16）；≠ LUFS（S17）；隐私；预设含义 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 人声忽大忽小，想贴面一点再交稿 | 选 Medium（默认）+ Makeup On → Compress | 动态收窄的 16-bit WAV；保留声道 |
| 只要温和收峰值 | 选 Light → Compress | 较低比率、软膝 |
| 采访轨动态很大 | 选 Heavy + Makeup On → Compress | 更强贴面、硬膝；峰值保护防削波 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `compress-dynamic-range-of-a-voice-recording`（场景句；禁止与 S10 compress-mp3 混 H1） |
| 主检索词 → title/H1 | audio compressor / vocal compressor / dynamic range → Compress dynamic range of a voice recording |
| 次要关键词 → desc / FAQ / Use cases | threshold ratio makeup → settings/rules；compress mp3 → FAQ（S10） |
| 用户搜索习惯判断 | 用户要动态贴面，不是压小 MP3（S10）、不是固定增益（S15）、不是峰值/LUFS（S16/S17） |
| 优化摘要 | H1 场景句；desc 点出预设与三步样例；FAQ 强制消歧 S10「压缩」 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| compress dynamic range / vocal compressor | absorb 主词 | H1 / How | 本页 |
| audio compressor online | absorb 次词 | desc / FAQ | 本页 |
| soft knee / makeup gain | absorb 次词 | settings / Rules | 本页 |
| compress mp3 / reduce file size | 有意不满足（S10） | FAQ 必消歧 | reduce-an-mp3-file-size |
| make audio louder | 有意不满足（S15） | FAQ | make-a-quiet-recording-louder |
| normalize / LUFS | 有意不满足（S16/S17） | FAQ | normalize-an-audio-file-to-peak；match-podcast-loudness-to-minus-16-lufs |
| match podcast loudness | 相邻作业 | related | match-podcast-loudness-to-minus-16-lufs |
| make quiet recording louder | 相邻作业 | related | make-a-quiet-recording-louder |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：用阈值/比率预设压缩人声动态并导出 WAV（可选 makeup） |
| 主词搜索者任务 | 把忽大忽小的口播压平贴面，不是压文件体积 |
| 满足之处 | 三预设、makeup 滑条、试听、结果行、本地、样例自动 Compress |
| 超出 / 应划边界 | 不做 S10/S15/S16/S17 主路径；不做多轨 DAW |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S10 消歧）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Compress → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：Gentle / Podcast / Aggressive；Makeup 0–12 dB（默认 3）；默认 Podcast。
- 结果显示预设、makeup、输出 KiB。
- 管线：decodeAudioData → 纯 JS 峰值包络压缩器（Light/Medium soft knee、Heavy hard knee）→ optional makeup + soft peak protect → 16-bit WAV。
- HUD：Read / Decode / Compress / Write；进页样例自动 Compress（默认 Medium + Makeup On）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
