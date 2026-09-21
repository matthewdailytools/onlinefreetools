# 工具信息

**状态**：`ready`
**slug**：`reduce-background-noise-on-a-voice-memo`
**路径**：`/tools/reduce-background-noise-on-a-voice-memo`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 reduce background noise voice memo online noise reduction denoise audio。常见结果为桌面 DAW、云端 Adobe Enhance Speech、万能 Online Audio Converter、或把降噪埋在全功能编辑器里。少有单独讲 **人声备忘录稳态底噪、Light/Medium/Strong、高通+噪声底门控近似、且 FAQ 诚实写浏览器上限并消歧 ≠ Enhance（S25）≠ dehum（S26）≠ EQ（S20）** 的单点页。

补足三项：①Rules 写清强度与浏览器近似边界；②结果展示预设、噪声底估计、输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode 、https://en.wikipedia.org/wiki/Noise_gate 、https://en.wikipedia.org/wiki/Spectral_subtraction

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S24 |
| Title (en) | Reduce background noise on a voice memo |
| Description | Reduce background noise on a voice memo with Light, Medium or Strong high-pass + noise-floor gate presets. Steps: Denoise, preview, download WAV. Example: load the hissy sample. On-device approx—not Adobe Enhance. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → Offline 高通 → 帧 RMS 噪声底 + soft gate → PCM 16-bit WAV |
| related | fade-in-and-fade-out-an-audio-clip；eq-a-muffled-voice-recording |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ Enhance speech（S25）；≠ dehum（S26）；≠ EQ（S20）；隐私；浏览器诚实上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 备忘录有空调/风扇稳态底噪 | 选 Medium（默认）→ Denoise | 底噪压低的 16-bit WAV |
| 底噪很轻、怕伤人声 | Light → Denoise | 轻柔门控 |
| 底噪很重、可接受更多伪影 | Strong → Denoise | 更强衰减 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `reduce-background-noise-on-a-voice-memo`（场景句；禁止与 Enhance / dehum / EQ 混 H1） |
| 主检索词 → title/H1 | reduce background noise / noise reduction voice → Reduce background noise on a voice memo |
| 次要关键词 → desc / FAQ / Use cases | denoise voice / remove fan noise → settings/usecase；Adobe enhance / EQ / hum → FAQ |
| 用户搜索习惯判断 | 用户要去备忘录底噪，不是 Adobe 级 Enhance、不是去 50/60 Hz 嗡嗡、不是闷声 EQ |
| 优化摘要 | H1 场景句；desc 点出三档与诚实 approx；FAQ 强制消歧 S20/S25/S26 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| reduce background noise / noise reduction audio | absorb 主词 | H1 / How | 本页 |
| denoise voice / remove background noise voice memo | absorb 次词 | desc / Use cases | 本页 |
| remove fan noise / AC hum steady hiss | absorb 场景 | Use cases / Rules | 本页（稳态底噪；≠ 50/60 Hz dehum） |
| adobe enhance speech / voice enhancer | 有意不满足（S25） | FAQ | enhance-muffled-speech…（未上线则文案边界） |
| remove hum 50hz / dehum | 有意不满足（S26） | FAQ | remove-mains-hum…（未上线则文案边界） |
| equalizer muffled voice / EQ | 有意不满足（S20） | FAQ | eq-a-muffled-voice-recording |
| fade in fade out audio | 相邻作业 | related | fade-in-and-fade-out-an-audio-clip |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：用三档高通+噪声底门控近似压备忘录底噪并导出 WAV；诚实写浏览器上限 |
| 主词搜索者任务 | 去掉风扇/空调类稳态底噪、试听、下载 |
| 满足之处 | 强度芯片、试听、结果行、本地、样例自动 Denoise、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S25 Adobe 级 Enhance；不做 S26 市电嗡嗡陷波；不做 S20 闷声 EQ；不做云端 AI |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S20/S25/S26 消歧与浏览器诚实上限）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Denoise → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：Light / Medium / Strong（默认 Medium）。
- 管线：decode → Offline highpass → 帧 RMS 噪声底估计 + soft gate（强度控衰减）→ 16-bit WAV。
- 结果显示预设名、估计噪声底、输出 KiB。
- HUD：Read / Decode / Denoise / Write；进页样例自动 Denoise（默认 Medium）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
