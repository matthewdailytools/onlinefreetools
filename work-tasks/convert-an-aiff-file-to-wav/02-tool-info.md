# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`convert-an-aiff-file-to-wav`  
**路径**：`/tools/convert-an-aiff-file-to-wav`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 aiff to wav；aiff 转 wav；convert aiff to wav。常见桌面/云上传。少有 **仅本机 AIFF/CAF → 浏览器 decode + 16-bit WAV、诚实写明解码依赖浏览器、44.1/48 kHz 与实测大小** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / P6 |
| Title (en) | Convert an AIFF file to WAV |
| Description | Convert one local AIFF or CAF recording to WAV in the browser. Steps: choose AIFF/CAF, pick sample rate, Convert to WAV, preview and download. Example: five-second stereo AIFF tone at 44.1 kHz → 16-bit PCM WAV. Uses decodeAudioData when the browser can decode AIFF/CAF; clear error if decode fails. Files stay on your device—never uploaded. |
| page.style | `opts` |
| 技术 | AIFF/CAF 接受；`decodeAudioData`；`writeWav` 16-bit |
| related | convert-an-mp3-file-to-wav；convert-a-flac-file-to-mp3 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | CAF；PCM 路径；隐私；非 MP3 输出；浏览器解码 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| Mac 导出要在 Windows 开 | 选 AIFF → Convert → Download | 16-bit WAV |
| 试 48 kHz | Advanced 48 kHz | `{kbps}` 显示 48000 |
| 样例验管线 | Load sample | 五秒 AIFF→WAV |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 `convert-an-aiff-file-to-wav`（hub P6；CAF 同页吸收） |
| 主检索词 → title/H1 | aiff to wav；convert aiff to wav → Convert an AIFF file to WAV |
| 次要关键词 → desc / FAQ | caf to wav；aiff converter；without upload → desc/FAQ |
| 用户搜索习惯判断 | 搜「aiff 转 wav」要整文件 PCM，非编辑、非云盘批处理 |
| 优化摘要 | H1 任务句；FAQ CAF+PCM；related MP3→WAV / FLAC→MP3 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| aiff to wav / convert aiff to wav | absorb 主词 | H1 / How | 本页 |
| caf to wav / convert caf to wav | absorb | FAQ / hint | 本页 |
| aiff 转 wav / caf转wav | absorb 中文 | zh H1 / FAQ | 本页 |
| aiff to mp3 / batch | 有意不满足 | FAQ | 本页拒 |
| mp3 to wav / flac to mp3 | 相邻 | related | 已上线 pair |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：本地 AIFF/CAF 整段转 16-bit WAV；诚实浏览器解码；本地处理 |
| 主词搜索者任务 | 选文件、选采样率、转码、试听、下载 |
| 满足之处 | dropzone、44.1/48 kHz、HUD、样例、实测大小 |
| 超出 / 应划边界 | 不做 aiff→mp3 矩阵；不做批量；不做视频 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 输入：一个本地 AIFF/CAF，40 MiB / 10 分钟；`decodeAudioData`。
- 动作：**Convert to WAV**；`Load sample`；`Download WAV` 成功前禁用。
- 设置：高级 44.1 / 48 kHz（`bitrate` 键作采样率标签；result `{kbps}` 显示 44100/48000）。
- HUD：Read / Decode / Encode；`yieldUi()`；完成保留 100%。
- Sample：`public/samples/convert-an-aiff-file-to-wav.aiff`（五秒双声道合成音）。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
