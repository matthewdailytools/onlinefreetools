# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`batch-extract-audio-from-mp4-files`  
**路径**：`/tools/batch-extract-audio-from-mp4-files`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-10-01 搜索 batch extract audio from mp4 / bulk mp4 to mp3 / multiple mp4 to mp3 zip / 批量 mp4 转 mp3 / 批量从 mp4 提取音频。SERP 多为 FFmpeg 脚本、云批量 converter、或暗示 URL 代抓。已上线 `batch-extract-audio-from-video-files` 覆盖混容器，但少有 **MP4-only 批量 + 串行稳内存 + ZIP + 拒 URL + related 网格（hub / 单 MP4 / 混批 sibling）** 的单点页。

相对混批 sibling 的 **≥3 条增益**：

1. **accept 仅 MP4**：队列预检拒绝 WebM/MOV/MKV，hint 指向混批页——满足「一堆手机 MP4」检索，不冒充万能批量。
2. **ISOBMFF 批量 caps**：逐文件 demux+OPFS 上限与单 MP4 页一致；部分成功 ZIP（失败 skip）写进 FAQ/Rules。
3. **内链网格**：related 必含 hub、单 MP4、混批、精剪；预留未来 `batch-extract-audio-from-mov-files` 等格式 sibling。

权威：同 `extract-audio-from-an-mp4-file` + MDN JSZip 用法（客户端 ZIP）。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / topic | sound-editor |
| Catalog | `localProcessing: true`；`page.style: opts` |
| Title (en) | Batch extract audio from MP4 files |
| Description | Batch extract audio from local MP4 files only—processed one at a time—then download a ZIP of WAV or MP3. Large MP4s use the same demux and OPFS path as the single-file tool. Files stay on your device; not uploaded. Not for YouTube. One MP4? Use Extract audio from an MP4 file. Mixed video formats? Use Batch extract audio from video files. |
| 技术 | 串行 `OftExtractAudio.extractFile`；JSZip；lamejs；MP4-only accept |
| related | `extract-audio-from-an-mp4-file`；`extract-audio-from-a-video-file`；`batch-extract-audio-from-video-files`；`trim-an-audio-clip-and-export`；预留 batch mov/webm/mkv |
| Schema | WebApplication + BreadcrumbList |
| FAQ | anti-YouTube；仅 MP4；非 MP4 → 混批页；单文件 → 单 MP4 页；串行/ZIP/失败 skip |
| IG 维度 | 2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 很多手机 MP4 要音轨 | 多选 .mp4 → Extract → Download ZIP | ZIP 内 WAV/MP3 |
| 混有 MOV/WebM | 预检拒绝 + hint → 混批页 | 不 silently 混跑 |
| 只要一个 MP4 | FAQ/related → 单 MP4 页 | 批量 UI 不抢单文件首屏 |
| 样例 | Load sample 2 段短 MP4 | 演示队列+ZIP |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-01 |
| slug 结论 | 保留 `batch-extract-audio-from-mp4-files`（批量 + MP4 + 抽音；非 youtube playlist） |
| 主检索词 → title/H1 | batch extract audio from mp4 files → Batch extract audio from MP4 files |
| 次要关键词 → desc / FAQ / Use cases | bulk mp4 to mp3 / multiple mp4 to mp3 → desc/FAQ/usecase；mp4 to mp3 zip → desc；batch convert mp4 audio → FAQ；中文 批量 mp4 转 mp3 / 批量从 mp4 提取音频 → zh H1/desc；single mp4 → FAQ+related 单页；mixed formats → FAQ+related 混批 |
| 用户搜索习惯判断 | 用户文件夹里 **全是 .mp4** 时要 ZIP；若混格式应去混批页；拒云/URL |
| 优化摘要 | H1 用 batch+MP4 任务句；desc 写 MP4-only+串行+ZIP+sibling 导流；FAQ anti-URL+三分流（单/混/URL） |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch extract audio from mp4 / bulk mp4 audio extract | absorb 主词 | H1 / How | 本页 |
| bulk mp4 to mp3 / multiple mp4 to mp3 / mp4 to mp3 zip | absorb 次词 | desc / FAQ / usecase | 本页 |
| batch convert mp4 to mp3 audio / mass mp4 audio rip | absorb 次词 | desc / FAQ | 本页 |
| 批量 mp4 转 mp3 / 批量从 mp4 提取音频 / 多个 mp4 提取声音 | absorb 中文 | zh H1 / desc / FAQ | 本页 |
| extract audio from one mp4 | 有意分场景 | FAQ + related | extract-audio-from-an-mp4-file |
| batch extract from video files (mixed) | 有意分场景 | FAQ + related | batch-extract-audio-from-video-files |
| extract audio from video (hub) | 分流 | related | extract-audio-from-a-video-file |
| youtube playlist mp3 / url batch download | 有意不满足（drop） | FAQ 拒绝 | 不冒充 |
| trim audio after batch | 相邻 | related | trim-an-audio-clip-and-export |
| mute mp4 / remove audio track | 有意不满足 | FAQ 一句 | 他页 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本 MP4 批量意图专属 Planner 归属分析（N/A）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-01 |
| 总判 | **满足**：多本地 MP4 串行抽音 → ZIP；MP4-only accept；失败 skip；拒 URL；单文件/混容器有 related 分流 |
| 主词搜索者任务 | 选 **多个 MP4**、抽音、一次下 ZIP；不想上传云；不要代抓 |
| 满足之处 | 队列+Convert/Stop+Download ZIP；折叠 WAV/MP3；金标 HUD；MP4 caps 诚实；related 网格 |
| 超出 / 应划边界 | 不做 YouTube/播放列表；不 accept 非 MP4（指混批）；不做精剪；单 MP4 不抢首屏 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（实现阶段）

How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（anti-YouTube + 单/混分流）；zh description ≥120；Steps+Example in description。

## 交互规格（实现待落地）

- **accept**：`.mp4,video/mp4` only；非 MP4 入队前 reject + 链到混批页。
- 主输入：多文件 dropzone；队列 + 逐行状态 + Remove。
- 主按钮行：Extract / Stop / Download ZIP（disabled 无产物）/ Sample / Clear；设置不进主行。
- 高级（折叠）：WAV/MP3 + MP3 bitrate。
- 管线：lazy lamejs → stable-extract.js → JSZip；**串行** extractFile；`BATCH_MAX_FILES` 30。
- Sample：2 段短 **MP4**（非 WebM）。
- HUD 金标；`page.style: opts`。

## 页面模块清单

- [ ] H1 / MP4 队列 / HUD / ZIP 下载
- [ ] How / Why / Rules / Example / Use cases
- [ ] FAQ ≥5 / related ≥4 / References
- [ ] 十语 i18n
- [ ] catalog / Page.ts / icon / verify
