# 工具信息

**状态**：`implemented`
**slug**：`make-an-8d-panning-version-of-a-song`
**路径**：`/tools/make-an-8d-panning-version-of-a-song`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 8d audio；8d converter；8d audio maker；8d 音频；surround panning。常见结果为桌面 DAW、万能 converter，或把「8D」吹成真环绕解码却只做简单左右扫。少有单独讲 **中置取声 + 正弦恒功率 Autopan、周期预设、强制立体声 WAV、且 FAQ 诚实写 ≠ 真 3D/HRTF、≠ slowed+reverb、≠ nightcore** 的单点页。

补足三项：①Rules 写清伪 8D 自动声像与诚实上限；②结果展示周期秒数、声道、输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Panning_(audio) 、https://en.wikipedia.org/wiki/Stereophonic_sound

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S36 |
| Title (en) | Make an 8D panning version of a song |
| Description | Make an 8D-style panning version by auto-panning L/R over time in the browser, then download stereo 16-bit WAV. Steps: 8D pan, preview, download. Example: load the sample. Honest headphone sweep—not true 3D surround. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → mid → sine LFO constant-power pan → stereo PCM 16-bit WAV |
| related | make-a-slowed-and-reverb-clip；make-a-nightcore-version-of-a-song |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 真 3D/HRTF；≠ slowed+reverb（S35）；≠ nightcore（S34）；隐私；浏览器诚实上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 经典耳机绕耳 | 5s 周期（默认）→ 8D pan | 左右缓慢扫过的立体声 WAV |
| 更快扫动 | 3s → 8D pan | 更密的左右摆动 |
| 自定义 | Custom 2–20s | 按输入周期声像 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `make-an-8d-panning-version-of-a-song`（场景句；禁止与真环绕/混响/夜核混 H1） |
| 主检索词 → title/H1 | 8d audio / 8d converter → Make an 8D panning version of a song |
| 次要关键词 → desc / FAQ / Use cases | surround panning / 8d 音频 → settings/usecase；true 3D / HRTF → FAQ |
| 用户搜索习惯判断 | 用户要耳机里左右绕耳的「8D」感觉，不是真电影院环绕、不是混响美学、不是夜核 |
| 优化摘要 | H1 场景句；desc 点出 auto-pan；FAQ 强制诚实上限与消歧 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| 8d audio / 8d converter | absorb 主词 | H1 / How | 本页 |
| surround panning / 8d audio maker | absorb 次词 | desc / Rules | 本页 |
| 8d 音频 / 绕耳 | absorb 场景 | Use cases / presets | 本页 |
| slowed and reverb | 有意不满足（S35） | FAQ | make-a-slowed-and-reverb-clip |
| nightcore maker | 有意不满足（S34） | FAQ | make-a-nightcore-version-of-a-song |
| reverse audio | 有意不满足（S37） | FAQ | reverse-an-audio-file（可后续） |
| true 3D / dolby / HRTF | 有意不满足 | FAQ / Rules | 不冒充环绕解码 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：自动左右声像后导出立体声 WAV；诚实写伪 8D 上限 |
| 主词搜索者任务 | 做出耳机绕耳 8D 感、试听、下载 |
| 满足之处 | 周期预设、试听、结果行、本地、样例自动跑、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做真 3D/HRTF；不做 S35 混响；不做 S34 夜核；不做曲库扒带 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含真 3D 消歧与浏览器诚实上限）；zh description ≥120 字符。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 8D pan → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：周期 8s / 5s / 3s + Custom（默认 5s）。
- 管线：decode → mid → sine constant-power autopan → stereo 16-bit WAV。
- 结果显示周期秒、输入/输出秒数、输出 KiB。
- HUD：Read / Decode / Pan / Write；进页样例自动 8D pan（默认 5s）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
