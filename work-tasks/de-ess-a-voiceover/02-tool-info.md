# 工具信息

**状态**：`ready`
**slug**：`de-ess-a-voiceover`
**路径**：`/tools/de-ess-a-voiceover`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 de-esser online remove sibilance voiceover harsh S sounds。常见结果为桌面 DAW 去齿音插件、万能 Online Audio Converter、或把去齿音埋在全功能 EQ/降噪里。少有单独讲 **齿音频段能量检测 + 动态高架衰减、且 FAQ 诚实写浏览器上限并消歧 ≠ EQ（S20）≠ denoise（S24）≠ declick（S27）** 的单点页。

补足三项：①Rules 写清灵敏度与动态衰减边界；②结果展示灵敏度、压制帧占比、输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode 、https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext 、https://en.wikipedia.org/wiki/De-esser

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S31 |
| Title (en) | De-ess a voiceover |
| Description | Soften harsh sibilance with dynamic high-shelf reduction driven by sibilant-band energy. Steps: De-ess, preview, download WAV. Example: load the sibilant sample. On-device de-esser approx—not full EQ, not denoise, not declick. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → 齿音频段能量检测 → 动态高架/频段衰减混音 → PCM 16-bit WAV |
| related | remove-clicks-from-a-recording；eq-a-muffled-voice-recording |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ EQ（S20）；≠ denoise（S24）；≠ declick（S27）；隐私；浏览器诚实上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 配音 S/SH 刺耳 | Medium（默认）→ De-ess | 齿音被动态压低的 16-bit WAV |
| 轻微齿音、怕闷 | Light → De-ess | 只在更刺耳段衰减 |
| 强齿音旁白 | Strong → De-ess | 更积极衰减（可能略闷高频） |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `de-ess-a-voiceover`（场景句；禁止与 EQ / denoise / declick 混 H1） |
| 主检索词 → title/H1 | de-esser / remove sibilance → De-ess a voiceover |
| 次要关键词 → desc / FAQ / Use cases | harsh S sounds / voiceover lisp → settings/usecase；EQ / denoise / declick → FAQ |
| 用户搜索习惯判断 | 用户要压配音齿音，不是闷声 EQ、不是宽带降噪、不是去咔哒 |
| 优化摘要 | H1 场景句；desc 点出 dynamic high-shelf；FAQ 强制消歧 S20/S24/S27 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| de-esser / remove sibilance | absorb 主词 | H1 / How | 本页 |
| harsh S SH sounds voiceover | absorb 次词 | desc / Use cases | 本页 |
| soften lisp hiss consonants | absorb 场景 | Use cases / Rules | 本页 |
| eq muffled voice / equalizer | 有意不满足（S20） | FAQ | eq-a-muffled-voice-recording |
| reduce background noise / denoise | 有意不满足（S24） | FAQ | reduce-background-noise-on-a-voice-memo |
| remove clicks pops / declick | 有意不满足（S27） | FAQ | remove-clicks-from-a-recording |
| enhance speech adobe | 有意不满足（S25） | FAQ 边界一句 | enhance…（defer） |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：检测齿音频段能量并动态衰减后导出 WAV；诚实写浏览器上限 |
| 主词搜索者任务 | 压低配音齿音、试听、下载 |
| 满足之处 | 灵敏度芯片、试听、结果行、本地、样例自动 De-ess、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S20 闷声 EQ；不做 S24 宽带降噪；不做 S27 去咔哒；不做云端 AI |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S20/S24/S27 消歧与浏览器诚实上限）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 De-ess → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：Light / Medium / Strong（默认 Medium）。
- 管线：decode → 齿音频段能量检测 → 动态高架衰减混音 → 16-bit WAV。
- 结果显示灵敏度、压制帧占比、输出 KiB。
- HUD：Read / Decode / De-ess / Write；进页样例自动 De-ess（默认 Medium）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
