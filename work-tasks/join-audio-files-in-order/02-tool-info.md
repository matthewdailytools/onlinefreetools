# 工具信息

**状态**：`implemented`
**slug**：`join-audio-files-in-order`
**路径**：`/tools/join-audio-files-in-order`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 join audio files；merge mp3；concatenate audio；合并音频；拼接 mp3。常见结果为桌面 DAW、在线上传拼接、或「merge」实为叠加混音。少有 **仅本地多文件按列表顺序首尾相接 → 单 WAV、且 FAQ 明确 ≠ overlay mix / ≠ crossfade** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F7 A2 |
| Title (en) | Join audio files in order |
| Description | Join multiple local audio files end-to-end in list order in the browser, then download one 16-bit WAV. Steps: Add clips, reorder if needed, Join, preview, download. Example: load two short sample tones. Concatenate only—not overlay mix, not crossfade. Never uploaded. |
| page.style | opts |
| 技术 | multi-file decode → resample/channel align → concatenate → 16-bit WAV |
| related | extract-audio-from-a-video-file；trim-an-audio-clip-and-export |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ overlay mix；≠ crossfade；顺序；采样率对齐；隐私 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 多段口播串成一轨 | 按序加入 → Join → Download WAV | 单文件 |
| 手机多条短录音 | 拖入多个 MP3/WAV | 本机拼接 |
| 样例验管线 | Load sample（两段短音） | 可复现 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `join-audio-files-in-order`（hub F7 A2 草稿 slug） |
| 主检索词 → title/H1 | join audio files → Join audio files in order |
| 次要关键词 → desc / FAQ | merge mp3；concatenate audio → desc/FAQ；overlay → FAQ 拒绝 |
| 用户搜索习惯判断 | 搜 merge mp3 者须得到诚实「首尾相接」页，非叠加 |
| 优化摘要 | H1 按序拼接；FAQ 强制 anti-overlay / anti-crossfade |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| join audio files / concatenate audio / merge mp3 | absorb 主词 | H1 / How | 本页 |
| 合并音频 / 拼接 mp3 | absorb 中文 | zh H1 / FAQ | 本页 |
| mp3 joiner / audio combiner | absorb 品类 | desc / FAQ | 本页（不拆） |
| mix / overlay / merge voice and music | 有意不满足（M1） | FAQ | mix-a-voiceover-with-background-music（未上线则边界文案） |
| crossfade two songs | 有意不满足（M2） | FAQ | crossfade-two-audio-files（未上线则边界文案） |
| extract from video | 有意分场景 | related | extract-audio-from-a-video-file |
| trim after join | 有意分场景 | related | trim-an-audio-clip-and-export |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：多文件按序首尾相接 → 单 WAV；拒绝叠加与交叉淡化冒充 |
| 主词搜索者任务 | 加文件、调序、拼接、下载 |
| 满足之处 | 多文件队列、可选重排、本地 decode、WAV |
| 超出 / 应划边界 | 不做 overlay（M1）；不做 crossfade（M2）；不做视频抽音（A1） |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 anti-overlay）；zh description ≥120。

## 交互规格（实现待落地）

- 多文件；单文件体积帽与总时长帽诚实；1–2 声道；采样率对齐到首段（或统一目标率）。
- 主按钮 Join；导出 **WAV only**。
- HUD Read/Decode/Join/Write；空状态不自动样例。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
- [x] catalog / page / icon / i18n 十语落地
