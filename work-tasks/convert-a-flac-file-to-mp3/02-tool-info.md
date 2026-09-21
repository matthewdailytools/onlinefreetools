# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`convert-a-flac-file-to-mp3`  
**路径**：`/tools/convert-a-flac-file-to-mp3`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 flac to mp3；flac 转 mp3；convert flac to mp3。常见桌面/云上传。少有 **仅本机 FLAC → 浏览器 decode + lamejs MP3、诚实写明「浏览器不支持 FLAC 则失败」、码率与实测大小** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / P4 |
| Title (en) | Convert a FLAC file to MP3 |
| Description | Convert one local FLAC recording to MP3 in the browser. Steps: choose a FLAC file, pick bitrate, Convert to MP3, preview and download. Example: five-second stereo FLAC tone → about 120 KiB MP3 at 192 kbps. Uses decodeAudioData when the browser supports FLAC, then lamejs; clear error if FLAC decode is unavailable. Files stay on your device—never uploaded. |
| page.style | `opts` |
| 技术 | FLAC 签名检查；`decodeAudioData`；lamejs 按需加载 |
| related | convert-a-wav-file-to-mp3；convert-an-m4a-file-to-mp3 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | 隐私；浏览器 FLAC 支持；有损；码率；非批量/非 WAV |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 无损母带要发人 | 选 FLAC → Convert → Download | 易分享 MP3 |
| 试码率 | Advanced 128/192/320 | 实测大小对比 |
| 样例验管线 | Load sample | 五秒 FLAC→MP3 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-20 |
| slug 结论 | 保留 `convert-a-flac-file-to-mp3`（hub P4） |
| 主检索词 → title/H1 | flac to mp3；convert flac to mp3 → Convert a FLAC file to MP3 |
| 次要关键词 → desc / FAQ | flac converter；flac 转 mp3；without upload → desc/FAQ |
| 用户搜索习惯判断 | 搜「flac 转 mp3」要整文件易分享，非编辑、非云盘批处理 |
| 优化摘要 | H1 任务句；FAQ 诚实浏览器 FLAC；related WAV/M4A |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| flac to mp3 / convert flac to mp3 | absorb 主词 | H1 / How | 本页 |
| flac 转 mp3 / flac转换mp3 | absorb 中文 | zh H1 / FAQ | 本页 |
| flac to mp3 converter / without uploading | absorb 次词 | desc / FAQ | 本页 |
| flac to wav / flac to ogg | 有意不满足 | FAQ | 本页拒矩阵 |
| wav to mp3 / m4a to mp3 | 相邻 | related | 已上线 pair |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-20 |
| 总判 | 满足：本地 FLAC 整段转 MP3；诚实浏览器解码；本地处理 |
| 主词搜索者任务 | 选文件、转码、试听、下载 |
| 满足之处 | dropzone、码率、HUD、样例、实测大小 |
| 超出 / 应划边界 | 不做 flac→wav/ogg 矩阵；不做批量；不做视频 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 输入：一个本地 FLAC，40 MiB / 10 分钟；先查 `fLaC` 与 STREAMINFO，再 `decodeAudioData`。
- 动作：**Convert to MP3**；`Load sample` 拉真实 FLAC；`Download MP3` 成功前禁用。
- 设置：高级 128 / 192 / 320 kbps。
- HUD：Read / Decode / Encode；`yieldUi()`；完成保留 100%。
- Sample：`public/samples/convert-a-flac-file-to-mp3.flac`（五秒双声道合成音）。

## 页面模块清单

- [x] H1 / 工具区 / 样例 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
