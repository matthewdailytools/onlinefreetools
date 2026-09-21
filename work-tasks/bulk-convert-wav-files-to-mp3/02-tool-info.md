# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`bulk-convert-wav-files-to-mp3`  
**路径**：`/tools/bulk-convert-wav-files-to-mp3`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 bulk convert wav to mp3；batch wav mp3；批量 wav 转 mp3。常见桌面批处理或云上传。少有 **仅本机多 WAV → 浏览器 lamejs → ZIP、数量/体积帽与 HUD、不上传** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / A8 |
| Title (en) | Bulk convert WAV files to MP3 |
| Description | Convert several local WAV files to MP3 in the browser and download one ZIP. Steps: drop WAVs, pick bitrate, Convert to ZIP, wait for progress, download. Example: two five-second stereo tones become two MP3s inside one ZIP at 192 kbps. Uses decodeAudioData then lamejs; JSZip loads only when packing. Files stay on your device—never uploaded. |
| page.style | `opts` |
| 技术 | 多文件队列；RIFF 校验；decodeAudioData；lamejs + JSZip 按需加载 |
| related | convert-a-wav-file-to-mp3；convert-a-flac-file-to-mp3 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | 隐私；批量上限；有损；码率；非 FLAC/非单文件精剪 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 一批录音要发人 | 多选 WAV → Convert → Download ZIP | 一包 MP3 |
| 试码率 | Advanced 128/192/320 | 同码率批量 |
| 样例验管线 | Load sample | 两段短 WAV→ZIP |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 `bulk-convert-wav-files-to-mp3`（hub A8） |
| 主检索词 → title/H1 | bulk convert wav to mp3；batch wav mp3 → Bulk convert WAV files to MP3 |
| 次要关键词 → desc / FAQ | 批量 wav 转 mp3；without upload → desc/FAQ |
| 用户搜索习惯判断 | 搜「批量 wav 转 mp3」要多文件一次打包，非单文件精剪、非云盘 |
| 优化摘要 | H1 任务句；FAQ 数量/体积帽；related 单文件 WAV/FLAC |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| bulk/batch wav to mp3 | absorb 主词 | H1 / How | 本页 |
| 批量 wav 转 mp3 / 批量转mp3 | absorb 中文 | zh H1 / FAQ | 本页 |
| wav to mp3 zip / without uploading | absorb 次词 | desc / FAQ | 本页 |
| flac batch / ogg batch | 有意不满足 | FAQ | 本页拒矩阵 |
| single wav to mp3 | 相邻 | related | 已上线 pair |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：本地多 WAV → MP3 → ZIP；数量/体积帽；本地处理 |
| 主词搜索者任务 | 选多文件、转码、看进度、下 ZIP |
| 满足之处 | multiple dropzone、队列、码率、HUD、样例、懒加载 ZIP |
| 超出 / 应划边界 | 不做 flac/ogg 批量矩阵；不做单文件波形精剪 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 输入：多个本地 WAV，最多 20 个；单文件 40 MiB / 10 分钟；总队列 ≤ 120 MiB。
- 动作：**Convert to ZIP**；`Load sample` 注入两段短 WAV；`Download ZIP` 成功前禁用。
- 设置：高级 128 / 192 / 320 kbps。
- HUD：Read / Encode / Pack；`yieldUi()`；完成保留 100%。
- Sample：页内合成两段五秒立体声 WAV（无需外链样例文件）。

## 页面模块清单

- [x] H1 / 工具区 / 队列 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
