# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`edit-audio-on-waveform`  
**路径**：`/tools/edit-audio-on-waveform`  
**主方向**：A  
**YMYL**：否  
**primaryTopic**：`sound-editor`

## IG 预审

2026-09-21 搜索 sound editor；online audio editor；waveform editor；在线音频编辑。竞品多为上传云 DAW 或完整 AudioMass 克隆。本页差异：本标签页轻量波形选区 + Trim/Download WAV + 诚实「非 Pro Tools」FAQ + 深链已上线单点工具。

权威：https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer ；https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / H0 Hub |
| Title (en) | Edit audio on a waveform |
| Description | Edit audio on a waveform in your browser: open one local file, select a start–end region on a simple canvas waveform, Trim, then Download WAV—on-device, not uploaded. Steps: Choose file (or Load sample), drag the waveform, Trim, Download WAV. Example: keep 1.00–3.00s of a 5s sample. Scene chips open trim, seamless loop, fade, and stereo-to-mono tools. Lightweight hub—not Pro Tools. |
| page.style | `opts` |
| 技术 | decode → slice → writeWav；深链芯片 |
| related | trim-an-audio-clip-and-export；make-a-seamless-audio-loop |
| Schema | WebApplication + BreadcrumbList |
| FAQ | lightweight hub not Pro Tools；upload；vs S1 trim；chips；caps |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 本地文件要看波形再裁一段 | 选区 + Trim + Download WAV | WAV |
| 需要淡化/循环/单声道 | 点场景芯片 | 跳转已上线单点页 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 `edit-audio-on-waveform`（hub H0） |
| 主检索词 → title/H1 | Edit audio on a waveform；sound editor 头词进 FAQ/Why 不当唯一 H1 品类空壳 |
| 次要关键词 → desc / FAQ | online audio editor；waveform editor；在线音频编辑 → desc/FAQ；Pro Tools → FAQ 划界 |
| 用户搜索习惯判断 | 搜 sound editor 常期待多轨；本页诚实轻量 Hub + 芯片 |
| 优化摘要 | H1 任务句；FAQ 非 Pro Tools；主路径 Trim+WAV |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| edit audio on a waveform / waveform editor | absorb 主词 | H1 / How | 本页 |
| sound editor / online audio editor | absorb 头词 | desc / FAQ / Why | 禁止 /sound-editor doorway |
| 在线音频编辑 / 波形编辑 | absorb 中文 | zh H1 / FAQ | 本页 |
| trim audio / mp3 cutter | 相邻 S1 | chip + FAQ | trim-an-audio-clip-and-export |
| seamless loop | 相邻 S5 | chip | make-a-seamless-audio-loop |
| fade in fade out | 相邻 | chip | fade-in-and-fade-out-an-audio-clip |
| stereo to mono | 相邻 | chip | convert-stereo-audio-to-mono |
| Pro Tools / full DAW / multi-track | 有意不满足 | FAQ | 本页拒绝冒充 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：波形选区+Trim+WAV+芯片；诚实非 DAW |
| 主词搜索者任务 | 打开本地音频、看波形、裁一段、下载 |
| 满足之处 | 画布波形、选区、HUD、样例、深链 |
| 超出 / 应划边界 | 无多轨/效果架/录音棚；FAQ 写明轻量 Hub |
| [x] 已按审查回写 | 进入 briefs |

## 文案丰富度

`description` 含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- dropzone；波形选区；Play；Trim；Download WAV；Load sample；Clear。
- 芯片：四个已上线 scene。
- HUD：Read / Decode / Render / Write。
- 帽对齐 S1。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
