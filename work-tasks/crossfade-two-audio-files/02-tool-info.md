# 工具信息

**状态**：`implemented`
**slug**：`crossfade-two-audio-files`
**路径**：`/tools/crossfade-two-audio-files`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 crossfade two songs；dj transition；交叉淡化；audio crossfade。常见结果为桌面 DAW、在线上传切歌、或「merge」实为硬切拼接。少有 **仅本地两文件交叉淡化 + 时长芯片 + 等功率默认 → 单 WAV、且 FAQ 明确 ≠ join hard cut / ≠ overlay mix** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData 、https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F7 M2 |
| Title (en) | Crossfade two audio files |
| Description | Crossfade two local songs or clips in the browser with duration chips and equal-power (or linear) curves, then download one 16-bit WAV. Steps: Add first clip, add second, pick fade length, Crossfade, preview, download. Example: load two short sample tones. Transition only—not hard-cut join, not overlay mix. Never uploaded. |
| page.style | opts |
| 技术 | dual decode → align → equal-power crossfade → 16-bit WAV |
| related | mix-a-voiceover-with-background-music；join-audio-files-in-order |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ join hard cut；≠ overlay；duration chips；equal-power；privacy |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| DJ 式切歌 | 加两段 → 选 2–5 s → Crossfade → Download | 单 WAV |
| 播客段落衔接 | 选 1 s 等功率淡化 | 少点击感 |
| 样例验管线 | Load sample（两段短音） | 可复现 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `crossfade-two-audio-files`（hub F7 M2 草稿 slug） |
| 主检索词 → title/H1 | crossfade two audio files / songs → Crossfade two audio files |
| 次要关键词 → desc / FAQ | dj transition；交叉淡化 → desc/FAQ；join/overlay → FAQ 拒绝 |
| 用户搜索习惯判断 | 搜 crossfade/DJ 者须得到诚实「尾头重叠淡化」页，非硬切或全程叠加 |
| 优化摘要 | H1 交叉淡化切歌；FAQ 强制 anti-join / anti-overlay |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| crossfade two songs / audio crossfade / dj transition | absorb 主词 | H1 / How | 本页 |
| 交叉淡化 / 两首歌淡入淡出切歌 | absorb 中文 | zh H1 / FAQ | 本页 |
| equal-power crossfade | absorb 技术次词 | Rules / FAQ | 本页 |
| join / concatenate / merge mp3 end to end | 有意不满足（A2） | FAQ | join-audio-files-in-order |
| mix / overlay voice and music | 有意不满足（M1） | FAQ | mix-a-voiceover-with-background-music |
| seamless loop wrap | 有意分场景 | FAQ | make-a-seamless-audio-loop |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：两文件尾头交叉淡化 → 单 WAV；时长芯片；等功率默认；拒绝硬切与全程叠加冒充 |
| 主词搜索者任务 | 加两段、选淡化时长、交叉淡化、下载 |
| 满足之处 | 双文件、时长芯片、等功率/线性、本地 decode、WAV |
| 超出 / 应划边界 | 不做 hard-cut join（A2）；不做 overlay（M1）；不做多轨 DAW |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 anti-join / anti-overlay）；zh description ≥120。

## 交互规格（实现待落地）

- 双文件；单文件体积帽与时长帽诚实；1–2 声道；采样率对齐到第一轨。
- 主按钮 Crossfade；导出 **WAV only**。
- HUD Read/Decode/Crossfade/Write；空状态不自动样例。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
