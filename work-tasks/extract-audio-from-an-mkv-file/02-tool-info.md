# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`extract-audio-from-an-mkv-file`  
**路径**：`/tools/extract-audio-from-an-mkv-file`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-10-01 搜索 extract audio from mkv / mkv to mp3 / mkv to wav / get audio from mkv file / 从 mkv 提取音频。SERP 多为桌面 FFmpeg、云上传 converter、或 **YouTube/URL 代抓**。hub 页已覆盖「任意视频文件」，但少有 **MKV+ISOBMFF 专页**：写清 **AAC 在 ftyp/moov/mdat 盒内**、浏览器 **demux 音轨 + OPFS 大文件**、**仅本地 .mkv**、FAQ **拒链接**，并与混容器 hub **内链分工**（非 doorway）。

相对 hub 的 **≥3 条增益**：

1. **盒与编解码**：MKV/MKV 手机导出、AAC-LC/HE-AAC 常见组合；失败码 `err_codec` / `err_container` 用 MKV 语境解释（非泛「视频」）。
2. **大文件路径**：默认叙事 **ISOBMFF demux → WebCodecs → OPFS 流式 MP3/WAV**（约 5 GiB / 6 h；无 OPFS 约 1 GiB），小 MKV 快路径在 Rules 一句带过。
3. **任务链**：related 指向 **MKV 批量**、**混容器 hub**、精剪；FAQ 单文件 vs 批量 vs「任意视频」分流。

权威：https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mkv 、https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#aac 、https://developer.w3.org/TR/webcodecs/

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / topic | sound-editor |
| Catalog | `localProcessing: true`；`page.style: opts` |
| Title (en) | Extract audio from an MKV file |
| Description | Extract the audio track from one local MKV in your browser—AAC in the container—then download WAV or MP3. Large files use demux plus OPFS streaming; files stay on your device, not uploaded. Steps: choose MKV, Extract, download. Not for YouTube or URL download. Mixed formats? See Extract audio from a video file. |
| 技术 | `OftExtractAudio.extractFile`；ISOBMFF demux + WebCodecs + OPFS；小文件 decodeAudioData；lamejs MP3 |
| related | `extract-audio-from-a-video-file`；`batch-extract-audio-from-mkv-files`；`batch-extract-audio-from-video-files`；`trim-an-audio-clip-and-export`；预留 mov/webm/mkv 单页 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | anti-YouTube/URL；≠ hub 混容器首屏；M4A-only 划界；大 MKV caps；≠ 静音成片 |
| IG 维度 | 2 边界；5 引用；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 手机导出的 .mkv 只要声音 | 拖入 MKV → Extract → Download | WAV/MP3 |
| 长 MKV 口播/课程 | 大文件 demux 路径 + Stop | 流式 MP3 或 WAV |
| 验 AAC 抽轨 | Load sample（短合成 MKV） | 可复现 HUD |
| 混有 WebM/MOV | FAQ/related → hub | 不把非 MKV 当主任务 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-01 |
| slug 结论 | 保留 `extract-audio-from-an-mkv-file`（情境+动作+结果：从一个 MKV 文件抽音；非 youtube-to-mp3） |
| 主检索词 → title/H1 | extract audio from mkv / mkv file → Extract audio from an MKV file |
| 次要关键词 → desc / FAQ / Use cases | mkv to mp3 → desc/FAQ/usecase；mkv to wav → desc/FAQ；get audio from mkv → How；aac from mkv → Rules/FAQ；m4a → FAQ 划界（音频-only 非本页主任务）；online free → desc 本地不上传；中文 mkv 提取音频 / mkv 转 mp3 → zh H1/desc |
| 用户搜索习惯判断 | 搜 mkv to mp3 者多持 **单个本地 MKV**；须首屏就是 MKV dropzone，不是 URL 框；与 hub 并存靠 H1+FAQ 分流 |
| 优化摘要 | 定 MKV 容器 IG（AAC+ISOBMFF+OPFS）；accept 收紧；desc 写 Steps+hub 导流；FAQ 拒 URL+混容器指路 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| extract audio from mkv / extract audio from an mkv file | absorb 主词 | H1 / How | 本页 |
| mkv to mp3 / convert mkv to mp3 audio | absorb 次词 | desc / FAQ / usecase | 本页 |
| mkv to wav / rip audio from mkv | absorb 次词 | desc / FAQ | 本页 |
| get sound from mkv / save audio from mkv | absorb 口语 | How / usecase | 本页 |
| aac from mkv / mkv audio track extract | absorb 技术 | Rules / FAQ | 本页 |
| 从 mkv 提取音频 / mkv 转 mp3 / mkv 提取声音 | absorb 中文 | zh H1 / desc / FAQ | 本页 |
| batch mkv to mp3 / multiple mkv extract | 有意分场景 | FAQ + related | batch-extract-audio-from-mkv-files |
| extract audio from video (mixed formats) | 有意分场景 | FAQ + related | extract-audio-from-a-video-file |
| youtube to mp3 / mkv url download / paste link | 有意不满足（drop） | FAQ 拒绝 | 不冒充 |
| remove audio from video / mute mkv | 有意不满足 | FAQ 一句 | 他页作业 |
| trim mp3 after extract | 相邻 | related | trim-an-audio-clip-and-export |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本 MKV 抽音意图专属 Planner 归属分析（N/A）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-01 |
| 总判 | **满足**：搜 mkv 抽音/转 mp3 的用户可拖本地 MKV → 抽 AAC 轨 → 下 WAV/MP3；大文件有 demux+OPFS 说明；拒 URL |
| 主词搜索者任务 | 从 **一个 MKV 文件** 得到可播音频文件；不上传云；不要代抓 |
| 满足之处 | MKV-only 首屏；Extract+Download；诚实 caps；anti-YouTube；hub/批量 related |
| 超出 / 应划边界 | 不做 URL/播放列表；不做混容器默认 accept（FAQ 指 hub）；不做波形精剪；M4A-only 不扩成第二工具 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（实现阶段）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 anti-YouTube + hub/批量分流）；zh description ≥120。

## 交互规格（实现待落地）

- **accept**：`.mkv,video/mkv`（主）；hint 非 MKV 指 hub。
- 主按钮 **Extract**；导出 WAV + MP3（芯片或默认 WAV）；**Download** 无产物 disabled。
- HUD：Read → Demux/Decode → Extract → Write（金标对照 batch-convert-web-pages-to-jpg）。
- Load sample：短 **合成 MKV**（AAC）；不自动首屏跑大文件。
- Stop 可中止 demux/流式写；错误码对齐 hub（`err_limit` / `err_container` / `err_codec` / `err_channels`）。
- `page.style: opts`；模板正则双反斜杠。

## 页面模块清单

- [ ] H1 / MKV dropzone / 样例 / HUD
- [ ] How / Why / Rules / Example / Use cases
- [ ] FAQ ≥5 / related ≥4 / References
- [ ] 十语 i18n（见 03 briefs-ready）
- [ ] catalog 分片 / Page.ts / icon / merge + verify
