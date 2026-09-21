# 工具信息

**状态**：`implemented`
**slug**：`generate-dtmf-touch-tones`
**路径**：`/tools/generate-dtmf-touch-tones`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 dtmf generator；dial tone generator；touch tone generator；拨号音。常见结果为在线播放器、嵌入电话演示、或桌面信号发生器。少有 **仅本机键盘序列 → 标准双音 DTMF → 16-bit WAV 下载、且 FAQ 明确 ≠ 单正弦 / ≠ UI 提示音 / ≠ 真实外呼** 的单点页。

权威：https://www.itu.int/rec/T-REC-Q.23 、https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / F9 G6 |
| Title (en) | Generate DTMF touch tones |
| Description | Generate DTMF touch tones from a keypad sequence in the browser with standard row/column frequencies, then download a 16-bit WAV. Steps: Tap keys or type a sequence, pick tone and gap duration, Generate, preview, download. Example: 123#. Dual-tone DTMF only—not a single sine, not a UI beep. Never uploaded. |
| page.style | opts |
| 技术 | Dual-sine DTMF synth → 16-bit WAV |
| related | generate-a-sine-tone-at-a-frequency；make-a-short-ui-notification-sound |
| Schema | WebApplication + BreadcrumbList |
| FAQ | standard freqs；sequence limits；≠ sine；≠ UI beep；privacy |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| IVR / 电话测试 | 键入分机号 → Generate → Download | 单 WAV |
| 文档/教程示意 | 样例 `123#` | 可复现双音 |
| 样例验管线 | Load sample | 自动生成 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `generate-dtmf-touch-tones`（hub F9 G6 草稿 slug） |
| 主检索词 → title/H1 | dtmf generator / touch tone → Generate DTMF touch tones |
| 次要关键词 → desc / FAQ | dial tones；拨号音 → desc/FAQ；sine/UI beep → FAQ 拒绝 |
| 用户搜索习惯判断 | 搜 DTMF/拨号音者须得到诚实「键盘序列→标准双音 WAV」页 |
| 优化摘要 | H1 DTMF 双音；FAQ 强制 anti-sine-only / anti-UI-beep / anti-dial-out |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| dtmf generator / touch tone generator / dial tones | absorb 主词 | H1 / How | 本页 |
| 拨号音 / DTMF 发生器 | absorb 中文 | zh H1 / FAQ | 本页 |
| keypad tones / phone tones sequence | absorb 次词 | desc / Example | 本页 |
| sine tone / frequency generator | 有意不满足（G5） | FAQ | generate-a-sine-tone-at-a-frequency |
| ui notification / click sound | 有意不满足（G12） | FAQ | make-a-short-ui-notification-sound |
| ui notification / click sound | 相邻作业 | related | make-a-short-ui-notification-sound |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：键盘/序列 → 标准 DTMF WAV；拒绝单正弦与 UI 提示音冒充 |
| 主词搜索者任务 | 输入序列、选时长、生成、下载 |
| 满足之处 | 键盘、序列框、音长/间隔、本地合成、WAV |
| 超出 / 应划边界 | 不做单正弦（G5）；不做 UI 提示音（G12）；不做真实外呼 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格（实现待落地）

- 键盘 0–9 * # A–D；序列输入；音长/间隔芯片；主按钮 Generate；导出 **WAV only**。
- HUD Synth/Write；样例不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
