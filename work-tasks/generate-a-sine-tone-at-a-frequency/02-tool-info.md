# 工具信息

**状态**：`implemented`
**slug**：`generate-a-sine-tone-at-a-frequency`
**路径**：`/tools/generate-a-sine-tone-at-a-frequency`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 tone generator；frequency generator；hz generator；音调发生器。常见结果为在线播放器、噪声页混装、或桌面信号发生器。少有 **仅本机正弦 Hz 输入 + 预设 → 16-bit WAV 下载、且 FAQ 明确 ≠ 噪声 / ≠ DTMF** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F9 G5 |
| Title (en) | Generate a sine tone at a frequency |
| Description | Generate a sine tone at a chosen frequency in the browser with Hz input and presets, then download a 16-bit WAV. Steps: Enter Hz or tap a preset, pick duration, Generate, preview, download. Example: 440 Hz for 2 seconds. Sine only—not noise, not DTMF. Never uploaded. |
| page.style | opts |
| 技术 | Float32 sine synth → 16-bit WAV |
| related | crossfade-two-audio-files；make-a-quiet-recording-louder |
| Schema | WebApplication + BreadcrumbList |
| FAQ | Hz range；presets；≠ noise；≠ DTMF；privacy |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 调音参考 A4 | 440 Hz → 2 s → Generate → Download | 单 WAV |
| 测试喇叭/耳机 | 1000 Hz 短音 | 可复现 |
| 样例验管线 | Load sample（440 Hz / 2 s） | 自动生成 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `generate-a-sine-tone-at-a-frequency`（hub F9 G5 草稿 slug） |
| 主检索词 → title/H1 | generate a sine tone at a frequency / tone generator → Generate a sine tone at a frequency |
| 次要关键词 → desc / FAQ | frequency generator；hz generator；音调发生器 → desc/FAQ；noise/DTMF → FAQ 拒绝 |
| 用户搜索习惯判断 | 搜 tone/frequency generator 者须得到诚实「正弦 Hz→WAV」页，非噪声或拨号音 |
| 优化摘要 | H1 正弦频率发生；FAQ 强制 anti-noise / anti-DTMF |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| tone generator / frequency generator / hz generator | absorb 主词 | H1 / How | 本页 |
| 音调发生器 / 频率发生器 | absorb 中文 | zh H1 / FAQ | 本页 |
| sine wave generator / 440 hz tone | absorb 次词 | desc / Example | 本页 |
| white/pink/brown noise | 有意不满足（G4） | FAQ | play-white-pink-or-brown-noise（未上线则边界文案） |
| dtmf / dial tones | 有意不满足（G6） | FAQ | generate-dtmf-touch-tones（未上线则边界文案） |
| crossfade / make louder | 相邻作业 | related | crossfade-two-audio-files；make-a-quiet-recording-louder |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：Hz 输入 + 预设 → 正弦 WAV；拒绝噪声与 DTMF 冒充 |
| 主词搜索者任务 | 输入频率、选时长、生成、下载 |
| 满足之处 | Hz 框、预设芯片、时长芯片、本地合成、WAV |
| 超出 / 应划边界 | 不做噪声（G4）；不做 DTMF（G6）；不做文件上传处理 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格（实现待落地）

- Hz 输入（合理范围如 20–20000）；预设芯片；时长芯片；主按钮 Generate；导出 **WAV only**。
- HUD Read/Synth/Write（或 Synth/Write）；样例不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
