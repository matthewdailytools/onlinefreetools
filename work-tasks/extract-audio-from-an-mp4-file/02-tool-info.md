# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`extract-audio-from-an-mp4-file`  
**路径**：`/tools/extract-audio-from-an-mp4-file`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-10-01 搜索 extract audio from mp4 / mp4 to mp3 / mp4 to wav / get audio from mp4 file / 从 mp4 提取音频。SERP 多为桌面 FFmpeg、云上传 converter、或 **YouTube/URL 代抓**。hub 页已覆盖「任意视频文件」，但少有 **MP4+ISOBMFF 专页**：写清 **AAC 在 ftyp/moov/mdat 盒内**、浏览器 **demux 音轨 + OPFS 大文件**、**仅本地 .mp4**、FAQ **拒链接**，并与混容器 hub **内链分工**（非 doorway）。

相对 hub 的 **≥3 条增益**：

1. **盒与编解码**：MP4/M4V 手机导出、AAC-LC/HE-AAC 常见组合；失败码 `err_codec` / `err_container` 用 MP4 语境解释（非泛「视频」）。
2. **大文件路径**：默认叙事 **ISOBMFF demux → WebCodecs → OPFS 流式 MP3/WAV**（约 5 GiB / 6 h；无 OPFS 约 1 GiB），小 MP4 快路径在 Rules 一句带过。
3. **任务链**：related 指向 **MP4 批量**、**混容器 hub**、精剪；FAQ 单文件 vs 批量 vs「任意视频」分流。

权威：https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Containers#mpeg-4_mp4 、https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Audio_codecs#aac 、https://developer.w3.org/TR/webcodecs/

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / topic | sound-editor |
| Catalog | `localProcessing: true`；`page.style: opts` |
| Title (en) | Extract audio from an MP4 file |
| Description | Extract the audio track from one local MP4 in your browser—AAC in the container—then download WAV or MP3. Large files use demux plus OPFS streaming; files stay on your device, not uploaded. Steps: choose MP4, Extract, download. Not for YouTube or URL download. Mixed formats? See Extract audio from a video file. |
| 技术 | `OftExtractAudio.extractFile`；ISOBMFF demux + WebCodecs + OPFS；小文件 decodeAudioData；lamejs MP3 |
| related | `extract-audio-from-a-video-file`；`batch-extract-audio-from-mp4-files`；`batch-extract-audio-from-video-files`；`trim-an-audio-clip-and-export`；预留 mov/webm/mkv 单页 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | anti-YouTube/URL；≠ hub 混容器首屏；M4A-only 划界；大 MP4 caps；≠ 静音成片 |
| IG 维度 | 2 边界；5 引用；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 手机导出的 .mp4 只要声音 | 拖入 MP4 → Extract → Download | WAV/MP3 |
| 长 MP4 口播/课程 | 大文件 demux 路径 + Stop | 流式 MP3 或 WAV |
| 验 AAC 抽轨 | Load sample（短合成 MP4） | 可复现 HUD |
| 混有 WebM/MOV | FAQ/related → hub | 不把非 MP4 当主任务 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-01 |
| slug 结论 | 保留 `extract-audio-from-an-mp4-file`（情境+动作+结果：从一个 MP4 文件抽音；非 youtube-to-mp3） |
| 主检索词 → title/H1 | extract audio from mp4 / mp4 file → Extract audio from an MP4 file |
| 次要关键词 → desc / FAQ / Use cases | mp4 to mp3 → desc/FAQ/usecase；mp4 to wav → desc/FAQ；get audio from mp4 → How；aac from mp4 → Rules/FAQ；m4a → FAQ 划界（音频-only 非本页主任务）；online free → desc 本地不上传；中文 mp4 提取音频 / mp4 转 mp3 → zh H1/desc |
| 用户搜索习惯判断 | 搜 mp4 to mp3 者多持 **单个本地 MP4**；须首屏就是 MP4 dropzone，不是 URL 框；与 hub 并存靠 H1+FAQ 分流 |
| 优化摘要 | 定 MP4 容器 IG（AAC+ISOBMFF+OPFS）；accept 收紧；desc 写 Steps+hub 导流；FAQ 拒 URL+混容器指路 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| extract audio from mp4 / extract audio from an mp4 file | absorb 主词 | H1 / How | 本页 |
| mp4 to mp3 / convert mp4 to mp3 audio | absorb 次词 | desc / FAQ / usecase | 本页 |
| mp4 to wav / rip audio from mp4 | absorb 次词 | desc / FAQ | 本页 |
| get sound from mp4 / save audio from mp4 | absorb 口语 | How / usecase | 本页 |
| aac from mp4 / mp4 audio track extract | absorb 技术 | Rules / FAQ | 本页 |
| 从 mp4 提取音频 / mp4 转 mp3 / mp4 提取声音 | absorb 中文 | zh H1 / desc / FAQ | 本页 |
| batch mp4 to mp3 / multiple mp4 extract | 有意分场景 | FAQ + related | batch-extract-audio-from-mp4-files |
| extract audio from video (mixed formats) | 有意分场景 | FAQ + related | extract-audio-from-a-video-file |
| youtube to mp3 / mp4 url download / paste link | 有意不满足（drop） | FAQ 拒绝 | 不冒充 |
| remove audio from video / mute mp4 | 有意不满足 | FAQ 一句 | 他页作业 |
| trim mp3 after extract | 相邻 | related | trim-an-audio-clip-and-export |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本 MP4 抽音意图专属 Planner 归属分析（N/A）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-01 |
| 总判 | **满足**：搜 mp4 抽音/转 mp3 的用户可拖本地 MP4 → 抽 AAC 轨 → 下 WAV/MP3；大文件有 demux+OPFS 说明；拒 URL |
| 主词搜索者任务 | 从 **一个 MP4 文件** 得到可播音频文件；不上传云；不要代抓 |
| 满足之处 | MP4-only 首屏；Extract+Download；诚实 caps；anti-YouTube；hub/批量 related |
| 超出 / 应划边界 | 不做 URL/播放列表；不做混容器默认 accept（FAQ 指 hub）；不做波形精剪；M4A-only 不扩成第二工具 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（实现阶段）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 anti-YouTube + hub/批量分流）；zh description ≥120。

## 交互规格（实现待落地）

- **accept**：`.mp4,video/mp4`（主）；hint 非 MP4 指 hub。
- 主按钮 **Extract**；导出 WAV + MP3（芯片或默认 WAV）；**Download** 无产物 disabled。
- HUD：Read → Demux/Decode → Extract → Write（金标对照 batch-convert-web-pages-to-jpg）。
- Load sample：短 **合成 MP4**（AAC）；不自动首屏跑大文件。
- Stop 可中止 demux/流式写；错误码对齐 hub（`err_limit` / `err_container` / `err_codec` / `err_channels`）。
- `page.style: opts`；模板正则双反斜杠。

## 页面模块清单

- [ ] H1 / MP4 dropzone / 样例 / HUD
- [ ] How / Why / Rules / Example / Use cases
- [ ] FAQ ≥5 / related ≥4 / References
- [ ] 十语 i18n（见 03 briefs-ready）
- [ ] catalog 分片 / Page.ts / icon / merge + verify
