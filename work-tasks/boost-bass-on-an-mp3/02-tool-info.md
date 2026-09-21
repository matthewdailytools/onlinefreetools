# 工具信息

**状态**：`ready`
**slug**：`boost-bass-on-an-mp3`
**路径**：`/tools/boost-bass-on-an-mp3`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 bass booster boost bass mp3 low-shelf。常见结果为桌面 DAW、万能 Online Audio Converter、十段滑条玩具页或整段 volume booster。少有单独讲 **仅 lowshelf 低音增强三预设（Mild/Medium/Strong）、且 FAQ 消歧 ≠ 闷声全 EQ（S20）≠ 整段增益放大（S15）** 的单点页。

补足三项：①Rules 写清三档架式低音增益；②结果展示预设名、峰值前后与输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode 、https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S21 |
| Title (en) | Boost bass on an MP3 |
| Description | Boost bass on an MP3 with Mild, Medium or Strong low-shelf presets. Steps: Boost, preview, download WAV. Example: load the thin-bass sample. On-device; never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → OfflineAudioContext 单节 lowshelf Biquad → 软峰值保护 → PCM 16-bit WAV |
| related | eq-a-muffled-voice-recording；make-a-quiet-recording-louder |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ 闷声全 EQ（S20）；≠ 整段增益（S15）；隐私；预设含义；削波保护 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 手机导出的 MP3 低音偏薄、鼓脚发虚 | 选 Medium（默认）→ Boost | 架式抬升低频体、带峰值保护的 16-bit WAV |
| 只想轻微加厚低音 | 选 Mild → Boost | 温和 lowshelf，少动中高 |
| 想更轰、更沉的低频 | 选 Strong → Boost | 更强 lowshelf；峰值保护防削波 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `boost-bass-on-an-mp3`（场景句；禁止与 S20 全 EQ / S15 整段增益混 H1） |
| 主检索词 → title/H1 | bass booster / boost bass mp3 → Boost bass on an MP3 |
| 次要关键词 → desc / FAQ / Use cases | low-shelf / punchy bass → settings/rules；equalizer / louder → FAQ |
| 用户搜索习惯判断 | 用户要低音增强，不是闷声三频段 EQ（S20）、不是整段变响（S15） |
| 优化摘要 | H1 场景句；desc 点出三预设与三步样例；FAQ 强制消歧 S20/S15 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| bass booster / boost bass mp3 | absorb 主词 | H1 / How | 本页 |
| low shelf bass / punchy bass | absorb 次词 | settings / Rules | 本页 |
| add bass to audio / deepen bass | absorb 场景 | Use cases | 本页 |
| equalizer online / muffled voice EQ | 有意不满足（S20） | FAQ | eq-a-muffled-voice-recording |
| make audio louder / amplify | 有意不满足（S15） | FAQ | make-a-quiet-recording-louder |
| graphic eq / ten-band EQ | 有意不满足 | FAQ / Rules | 本页边界（不做十段滑条） |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：用 Mild/Medium/Strong lowshelf 预设增强低音并导出 WAV |
| 主词搜索者任务 | 给偏薄音频加低音、听更沉、下载 |
| 满足之处 | 三预设、试听、结果行、本地、样例自动 Boost |
| 超出 / 应划边界 | 不做 S20 三频段闷声 EQ；不做 S15 整段 dB 增益；不做十段滑条万能 EQ |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S20/S15 消歧）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Boost → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：Mild / Medium / Strong（默认 Medium）。
- 结果显示预设、峰值前后、输出 KiB。
- 管线：decodeAudioData → OfflineAudioContext 单节 lowshelf → 软峰值保护 → 16-bit WAV。
- HUD：Read / Decode / Boost / Write；进页样例自动 Boost（默认 Medium）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
