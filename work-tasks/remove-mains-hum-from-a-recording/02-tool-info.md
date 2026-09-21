# 工具信息

**状态**：`ready`
**slug**：`remove-mains-hum-from-a-recording`
**路径**：`/tools/remove-mains-hum-from-a-recording`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 remove hum 50hz dehum audio mains hum notch。常见结果为桌面 DAW 去嗡嗡插件、万能 Online Audio Converter、或把陷波埋在全功能 EQ 里。少有单独讲 **50/60 Hz 市电基波 + 可选谐波 notch、且 FAQ 诚实写浏览器上限并消歧 ≠ denoise（S24）≠ declick（S27）≠ EQ（S20）** 的单点页。

补足三项：①Rules 写清频率/谐波与浏览器陷波边界；②结果展示 Hz、谐波模式、陷波节数、输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode 、https://en.wikipedia.org/wiki/Mains_hum 、https://en.wikipedia.org/wiki/Notch_filter

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S26 |
| Title (en) | Remove mains hum from a recording |
| Description | Remove 50 or 60 Hz mains hum with notch filters and optional harmonics. Steps: Dehum, preview, download WAV. Example: load the humming sample. On-device notches—not broadband denoise. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → Offline 串联 notch Biquad（基波 ± 2–5 次谐波）→ PCM 16-bit WAV |
| related | reduce-background-noise-on-a-voice-memo；eq-a-muffled-voice-recording |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ denoise（S24）；≠ declick（S27）；≠ EQ（S20）；隐私；浏览器诚实上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 录音有稳态 50 Hz 市电嗡 | 选 50 Hz + 含谐波（默认）→ Dehum | 嗡嗡压低的 16-bit WAV |
| 北美/日本等 60 Hz 电网 | 选 60 Hz → Dehum | 对准 60 Hz 及其谐波 |
| 只想切基波、怕伤低频 | 仅基波 → Dehum | 单节 notch |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `remove-mains-hum-from-a-recording`（场景句；禁止与 denoise / declick / EQ 混 H1） |
| 主检索词 → title/H1 | remove hum 50hz / dehum / mains hum → Remove mains hum from a recording |
| 次要关键词 → desc / FAQ / Use cases | 50 Hz / 60 Hz / harmonics / notch → settings/usecase；denoise / clicks / EQ → FAQ |
| 用户搜索习惯判断 | 用户要去市电嗡嗡，不是宽带降噪、不是去咔哒、不是闷声 EQ |
| 优化摘要 | H1 场景句；desc 点出 50/60 与谐波；FAQ 强制消歧 S20/S24/S27 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| remove hum 50hz / remove 60hz hum | absorb 主词 | H1 / How | 本页 |
| dehum audio / mains hum notch | absorb 次词 | desc / Use cases | 本页 |
| electrical hum / ground hum recording | absorb 场景 | Use cases / Rules | 本页 |
| reduce background noise / denoise | 有意不满足（S24） | FAQ | reduce-background-noise-on-a-voice-memo |
| remove clicks pops / declick | 有意不满足（S27） | FAQ | remove-clicks-from-a-recording（未上线则文案边界） |
| equalizer muffled voice / EQ | 有意不满足（S20） | FAQ | eq-a-muffled-voice-recording |
| enhance speech adobe | 有意不满足（S25） | FAQ 边界一句 | enhance…（defer） |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：用 50/60 Hz notch ± 谐波压市电嗡嗡并导出 WAV；诚实写浏览器上限 |
| 主词搜索者任务 | 去掉录音里的市电嗡嗡、试听、下载 |
| 满足之处 | Hz 芯片、谐波芯片、试听、结果行、本地、样例自动 Dehum、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S24 宽带降噪；不做 S27 去咔哒；不做 S20 闷声 EQ；不做云端 AI |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S20/S24/S27 消歧与浏览器诚实上限）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Dehum → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：50 Hz / 60 Hz（默认 50）；仅基波 / 含谐波（默认含谐波）。
- 管线：decode → Offline 串联 notch（基波 ± 可选 2–5 次，低于 Nyquist）→ 16-bit WAV。
- 结果显示 Hz、谐波模式、陷波节数、输出 KiB。
- HUD：Read / Decode / Dehum / Write；进页样例自动 Dehum（默认 50 + 谐波）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
