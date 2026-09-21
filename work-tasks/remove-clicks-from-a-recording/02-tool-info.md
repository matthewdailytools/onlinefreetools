# 工具信息

**状态**：`ready`
**slug**：`remove-clicks-from-a-recording`
**路径**：`/tools/remove-clicks-from-a-recording`
**主方向**：A
**YMYL**：否

## IG 预审

2026-09-20 搜索 declick audio remove pops clicks vinyl crackle。常见结果为桌面 DAW 去咔哒插件、万能 Online Audio Converter、或把修复埋在全功能降噪里。少有单独讲 **短尖峰检测 + 插值修复、且 FAQ 诚实写浏览器上限并消歧 ≠ denoise（S24）≠ dehum（S26）≠ de-ess（S31）** 的单点页。

补足三项：①Rules 写清灵敏度与短尖峰边界；②结果展示灵敏度、修复尖峰数、输出体积；③拒绝超限/坏文件并保留重试。本地不上传；进页样例可复现。
权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer 、https://en.wikipedia.org/wiki/Click_and_pop 、https://en.wikipedia.org/wiki/Median_filter

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / S27 |
| Title (en) | Remove clicks from a recording |
| Description | Remove short clicks and pops with median spike detection and interpolation. Steps: Declick, preview, download WAV. Example: load the clicky sample. On-device spike repair—not broadband denoise. Never uploaded. |
| page.style | opts |
| 技术 | decodeAudioData → 局部中值偏离检测短尖峰 → 线性插值 → PCM 16-bit WAV |
| related | remove-mains-hum-from-a-recording；reduce-background-noise-on-a-voice-memo |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ denoise（S24）；≠ dehum（S26）；≠ de-ess（S31）；隐私；浏览器诚实上限 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 口喷/线缆咔哒 | Medium（默认）→ Declick | 短尖峰被插值抹平的 16-bit WAV |
| 轻微爆音、怕伤瞬态 | Light → Declick | 只修更明显尖峰 |
| 唱片裂纹偏密 | Strong → Declick | 更积极检测（可能误伤鼓点） |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `remove-clicks-from-a-recording`（场景句；禁止与 denoise / dehum / de-ess 混 H1） |
| 主检索词 → title/H1 | declick / remove clicks pops → Remove clicks from a recording |
| 次要关键词 → desc / FAQ / Use cases | vinyl crackle / mouth pops → settings/usecase；denoise / hum / de-ess → FAQ |
| 用户搜索习惯判断 | 用户要去短咔哒爆音，不是宽带降噪、不是市电嗡嗡、不是去齿音 |
| 优化摘要 | H1 场景句；desc 点出 spike repair；FAQ 强制消歧 S24/S26/S31 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| remove clicks pops / declick audio | absorb 主词 | H1 / How | 本页 |
| mouth pops / plosives repair | absorb 次词 | desc / Use cases | 本页 |
| vinyl crackle remove | absorb 场景 | Use cases / Rules | 本页 |
| reduce background noise / denoise | 有意不满足（S24） | FAQ | reduce-background-noise-on-a-voice-memo |
| remove hum 50hz / dehum | 有意不满足（S26） | FAQ | remove-mains-hum-from-a-recording |
| de-esser / remove sibilance | 有意不满足（S31） | FAQ | de-ess-a-voiceover（未上线则文案边界） |
| enhance speech adobe | 有意不满足（S25） | FAQ 边界一句 | enhance…（defer） |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：检测短尖峰并用插值修复后导出 WAV；诚实写浏览器上限 |
| 主词搜索者任务 | 去掉录音里的咔哒/爆音、试听、下载 |
| 满足之处 | 灵敏度芯片、试听、结果行、本地、样例自动 Declick、FAQ 诚实边界 |
| 超出 / 应划边界 | 不做 S24 宽带降噪；不做 S26 市电陷波；不做 S31 去齿音；不做云端 AI |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已进入交互与文案规格 |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 S24/S26/S31 消歧与浏览器诚实上限）。

## 交互规格

- 单文件 dropzone：40 MiB / 10 分钟 / 1–2 声道。
- 主按钮 Declick → 试听 + Download WAV；Sample/Clear 次按钮。
- 设置默认展开：Light / Medium / Strong（默认 Medium）。
- 管线：decode → 短尖峰检测（局部中值偏离）→ 线性插值 → 16-bit WAV。
- 结果显示灵敏度、修复尖峰数、输出 KiB。
- HUD：Read / Decode / Declick / Write；进页样例自动 Declick（默认 Medium）；不自动播放。
- `opts`；模板正则双反斜杠。

## 页面模块清单

- [x] H1 / 工具区 / 自动样例 / HUD
- [x] How / Why choose ≥4 / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 与实现
- [x] catalog / page / icon / i18n 十语落地
