# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`batch-extract-audio-from-video-files`  
**路径**：`/tools/batch-extract-audio-from-video-files`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-10-01 搜索 batch extract audio from video / bulk video to mp3 / 批量从视频提取音频。常见结果为桌面 FFmpeg、云上传批量 converter、或暗示 YouTube 代抓。少有 **仅本机、多文件串行稳内存抽轨、失败 skip、ZIP 打包、且 FAQ 明确拒 YouTube URL** 的单点页。

权威：https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData 、https://developer.mozilla.org/en-US/docs/Web/Media/Formats

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor |
| Title (en) | Batch extract audio from video files |
| Description | Batch extract audio from mixed local video files—one file at a time—then download a ZIP of WAV or MP3. Caps follow capability table (MP4 demux vs WebM/MKV fallback). Local only—not YouTube. For one video, use Extract audio from a video file. |
| page.style | `opts` |
| 技术 | queue → 串行 OftExtractAudio.extractFile → JSZip；lamejs MP3 |
| related | `extract-audio-from-a-video-file`、`trim-an-audio-clip-and-export` |
| Schema | WebApplication + BreadcrumbList |
| FAQ | ≠ YouTube URL；单文件→单抽音页；串行稳内存；失败 skip |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 主任务：一堆短视频只要音轨 | 多选 → Extract → Download ZIP | ZIP 内 WAV/MP3 |
| 样例验管线 | Load sample（两段合成 WebM） | 演示串行抽轨 + ZIP |
| 只要一条视频 | FAQ/related → 单文件抽音页 | 不把单文件作业抢首屏 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-01 |
| slug 结论 | 保留 `batch-extract-audio-from-video-files`（批量 + 抽音 + 多视频文件；非 youtube-to-mp3） |
| 主检索词 → title/H1 | batch extract audio from video files → Batch extract audio from video files |
| 次要关键词 → desc / FAQ | bulk video to mp3 / mp4 to mp3 batch → desc/FAQ；youtube → FAQ 拒绝；single file → FAQ + related |
| 用户搜索习惯判断 | 要「很多本地视频一次抽音」；拒云盘/URL；单文件应指路邻页 |
| 优化摘要 | H1 用 batch extract 任务句；desc 写串行稳内存 + ZIP；FAQ anti-YouTube + 单文件导流；related 单抽音与精剪 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch extract audio from video / bulk extract audio from videos | absorb 主词 | H1 / How | 本页 |
| bulk video to mp3 / batch mp4 to mp3 / videos to mp3 zip | absorb 次词 | desc / FAQ / usecase | 本页（不拆） |
| 批量从视频提取音频 / 批量视频转 mp3 | absorb 中文 | zh H1 / desc / FAQ | 本页 |
| extract audio from one video / single video to mp3 | 有意分场景 | FAQ + related | extract-audio-from-a-video-file |
| youtube to mp3 / url download playlist | 有意不满足（drop） | FAQ 拒绝 | 不冒充 |
| trim audio after extract | 相邻 | related | trim-an-audio-clip-and-export |
| mute video / remove audio track | 有意不满足 | FAQ 一句 | 他页作业 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析（N/A）。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-01 |
| 总判 | 满足：多本地视频串行抽音 → ZIP；拒 URL；单文件导邻页 |
| 主词搜索者任务 | 选多视频、抽音、下 ZIP；失败不整批作废 |
| 满足之处 | 队列、Convert/Stop、格式芯片、金标 HUD、逐行状态、样例两段 WebM、本地 |
| 超出 / 应划边界 | 不做 YouTube/播放列表代抓；不做波形精剪；单文件作业不抢首屏 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5（含 anti-YouTube + 单文件导流）；zh description ≥120。

## 交互规格

- 主输入：多文件 dropzone（video）；队列列表 + 逐行状态 + Remove。
- 主按钮行：Convert（Extract）/ Stop / Download ZIP（无产物 disabled）/ Sample / Clear；设置不进主行。
- 高级设置（默认收起）：WAV/MP3 芯片 + MP3 bitrate。
- 管线：懒载 lamejs → stable-extract.js → JSZip；对每个 File **串行** `OftExtractAudio.extractFile`；成功 `zip.file`；释放引用；失败 skip；不保留全部 AudioBuffer。
- 上限：`BATCH_MAX_FILES` 30；单文件按 `classifyFile` / 能力表（非统一 200 MiB）。
- HUD：金标（对照 batch-convert-web-pages-to-jpg）；`yieldUi` 在重活前。
- Load sample：合成 2 段短 WebM（对标单文件抽音页）；不强制首屏自动跑若 MediaRecorder 不可用。
- `page.style: opts`；模板正则双反斜杠。

## 2026-10-01 P0 capability registry（增量）

| 项 | 结论 |
|---|---|
| accept | `OftExtractAudio.supportedAccept()`（含 mkv 等） |
| 预检 | `classifyFile` → reject 用 `err_limit` / `err_container` 等 |
| IG | 混合格式队列 / 部分 ZIP / 诚实 caps |
| [x] Rules/FAQ/hint 已对齐引擎 | en master + 十语 |

## 页面模块清单

- [x] H1 / 工具区 / HUD / 队列
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
- [x] catalog / page / icon / i18n 十语落地
