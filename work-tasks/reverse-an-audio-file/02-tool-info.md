# 工具信息

**状态**：`implemented`
**slug**：`reverse-an-audio-file`
**路径**：`/tools/reverse-an-audio-file`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 reverse audio；reverse audio online；音频倒放；play audio backwards。常见结果为桌面 DAW、万能 converter，或把倒放与变速/变调捆在同一页。少有单独讲 **逐声道样本倒序、时长不变、16-bit WAV、且 FAQ 消歧 ≠ 8D、≠ 淡入淡出** 的单点页。

补足三项：①Rules 写清样本倒序与时长不变；②结果展示秒数、声道、输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Reverse_(music)

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S37 |
| Title (en) | Reverse an audio file |
| Description | Reverse an audio file by flipping sample order in the browser, then download a 16-bit WAV. Steps: Reverse, preview, download. Example: load the sample. Duration stays the same—not 8D pan, not fade. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → reverse channel samples → PCM 16-bit WAV |
| related | make-an-8d-panning-version-of-a-song；fade-in-and-fade-out-an-audio-clip |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 8D（S36）；≠ fade（S22）；时长不变；隐私；浏览器诚实上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 倒放玩具/特效 | Reverse | 时间轴反转的 WAV |
| 检查尾音/混响尾巴 | Reverse → 听句尾变句首 | 便于听尾部细节 |
| 样例验管线 | Load sample → auto Reverse | 可复现 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `reverse-an-audio-file`（场景句；禁止与 8D/淡入淡出混 H1） |
| 主检索词 → title/H1 | reverse audio / play backwards → Reverse an audio file |
| 次要关键词 → desc / FAQ / Use cases | 音频倒放 / reverse wav → settings/usecase；8d / fade → FAQ |
| 用户搜索习惯判断 | 用户要整段倒放下载，不是左右扫、不是淡入淡出 |
| 优化摘要 | H1 场景句；desc 点出 sample reverse；FAQ 强制消歧 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| reverse audio / reverse audio online | absorb 主词 | H1 / How | 本页 |
| play audio backwards / reverse wav | absorb 次词 | desc / Rules | 本页 |
| 音频倒放 / 倒放歌曲 | absorb 场景 | Use cases | 本页 |
| 8d audio | 有意不满足（S36） | FAQ | make-an-8d-panning-version-of-a-song |
| fade in fade out | 有意不满足（S22） | FAQ | fade-in-and-fade-out-an-audio-clip |
| nightcore / slowed reverb | 有意不满足 | FAQ | 不冒充效果页 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：样本倒序后导出 WAV；时长与采样率不变 |
| 主词搜索者任务 | 倒放、试听、下载 |
| 满足之处 | 一键 Reverse、试听、结果行、本地、样例自动跑、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S36 8D；不做 S22 淡入淡出；不做变速变调 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120 字符。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Reverse → 试听 + Download WAV；Sample/Clear 次按钮。
- 无复杂预设（可选说明时长不变）。
- 管线：decode → reverse samples → 16-bit WAV。
- 结果显示秒数、声道、输出 KiB。
- HUD：Read / Decode / Reverse / Write；进页样例自动 Reverse；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
