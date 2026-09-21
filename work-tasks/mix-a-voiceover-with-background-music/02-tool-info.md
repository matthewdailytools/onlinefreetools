# 工具信息

**状态**：`implemented`
**slug**：`mix-a-voiceover-with-background-music`
**路径**：`/tools/mix-a-voiceover-with-background-music`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 mix audio files；overlay audio；merge voice and music；混合音频；人声配乐。常见结果为桌面 DAW、在线上传混音、或「merge」实为拼接。少有 **仅本地两轨叠加（口播+垫乐）+ 相对增益 + 可选闪避 → 单 WAV、且 FAQ 明确 ≠ concatenate / ≠ crossfade** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData 、https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F7 M1 |
| Title (en) | Mix a voiceover with background music |
| Description | Mix a local voiceover with background music in the browser—both play at once—with voice and bed gain sliders and optional simple ducking, then download one 16-bit WAV. Steps: Add voice, add bed, set gains, Mix, preview, download. Example: load two short sample tones. Overlay only—not concatenate, not crossfade. Never uploaded. |
| page.style | opts |
| 技术 | dual decode → align → gain + optional duck → mix → 16-bit WAV |
| related | join-audio-files-in-order；extract-audio-from-a-video-file |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ concatenate；≠ crossfade；gains；ducking；privacy |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 口播配垫乐 | 加口播+垫乐 → 调增益 → Mix → Download | 单 WAV |
| 垫乐盖过人声 | 开 ducking 或降低床轨增益 | 口播更清晰 |
| 样例验管线 | Load sample（两段短音） | 可复现 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `mix-a-voiceover-with-background-music`（hub F7 M1 草稿 slug） |
| 主检索词 → title/H1 | mix a voiceover with background music → Mix a voiceover with background music |
| 次要关键词 → desc / FAQ | overlay audio；merge voice and music → desc/FAQ；join/concatenate → FAQ 拒绝 |
| 用户搜索习惯判断 | 搜 merge/mix 者须得到诚实「同时出声」页，非首尾相接 |
| 优化摘要 | H1 口播配乐叠加；FAQ 强制 anti-concatenate / anti-crossfade |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| mix audio files / overlay audio / merge voice and music | absorb 主词 | H1 / How | 本页 |
| 混合音频 / 人声配乐 | absorb 中文 | zh H1 / FAQ | 本页 |
| voiceover background music mixer | absorb 品类 | desc / FAQ | 本页 |
| join / concatenate / merge mp3 end to end | 有意不满足（A2） | FAQ | join-audio-files-in-order |
| crossfade two songs | 有意不满足（M2） | FAQ | crossfade-two-audio-files（未上线则边界文案） |
| extract from video | 有意分场景 | related | extract-audio-from-a-video-file |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：两轨同时出声叠加 → 单 WAV；增益+可选闪避；拒绝拼接与交叉淡化冒充 |
| 主词搜索者任务 | 加口播、加垫乐、调增益、混音、下载 |
| 满足之处 | 双文件、增益滑杆、可选 duck、本地 decode、WAV |
| 超出 / 应划边界 | 不做 concatenate（A2）；不做 crossfade（M2）；不做多轨 DAW |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 anti-concatenate）；zh description ≥120。

## 交互规格（实现待落地）

- 双文件；单文件体积帽与时长帽诚实；1–2 声道；采样率对齐到口播（或第一轨）。
- 主按钮 Mix；导出 **WAV only**。
- HUD Read/Decode/Mix/Write；空状态不自动样例。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
