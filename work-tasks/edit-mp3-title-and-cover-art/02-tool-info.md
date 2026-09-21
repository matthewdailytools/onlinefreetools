# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`edit-mp3-title-and-cover-art`  
**路径**：`/tools/edit-mp3-title-and-cover-art`  
**主方向**：A  
**YMYL**：否

## IG 预审

2026-09-21 搜索 mp3 tag editor；id3 editor；add cover art to mp3；mp3 标签；改封面。常见桌面/云上传编辑器。少有 **仅本机改写 ID3v2（曲名/艺人/专辑/封面）且不重编码 PCM、诚实写明 ID3v2.3 范围** 的单点页。

权威：https://id3.org/id3v2.3.0

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | sound-editor / A6 |
| Title (en) | Edit MP3 title and cover art |
| Description | Edit an MP3 title, artist, album and optional JPEG/PNG cover in the browser without re-encoding the audio. Steps: choose an MP3, edit fields, optional cover, Apply tags, download. Example: sample MP3 gets a demo title and cover while Layer III frames stay intact. Writes ID3v2.3 locally—complex tags may be simplified. Files stay on your device—never uploaded. |
| page.style | `opts` |
| 技术 | 剥离 ID3；写 ID3v2.3 TIT2/TPE1/TALB/APIC；音频帧原样拼接 |
| related | bulk-convert-wav-files-to-mp3；convert-a-wav-file-to-mp3 |
| Schema | WebApplication + BreadcrumbList |
| FAQ | 隐私；不重编码；ID3v2.3 诚实；封面格式；非体积压缩 |
| IG | 1 规则；2 边界；6 本地；8 样例；9 related |

## 使用场景

| 情境 | 动作 | 结果 / 默认 |
|---|---|---|
| 播客缺曲名 | 填 Title/Artist → Apply | 带标签 MP3 |
| 加封面 | 选 JPEG/PNG → Apply | APIC 写入 |
| 样例验管线 | Load sample | 演示标签+封面 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-21 |
| slug 结论 | 保留 `edit-mp3-title-and-cover-art`（hub A6） |
| 主检索词 → title/H1 | mp3 tag editor；add cover art → Edit MP3 title and cover art |
| 次要关键词 → desc / FAQ | id3 editor；mp3 标签；without upload → desc/FAQ |
| 用户搜索习惯判断 | 搜「改 mp3 标签/封面」要元数据，不要重编码或压缩体积 |
| 优化摘要 | H1 任务句；FAQ 诚实 ID3v2.3；related A8 + WAV→MP3 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已落实 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| mp3 tag editor / id3 editor | absorb 主词 | H1 / How | 本页 |
| add cover art to mp3 / mp3 标签 | absorb 次词 | desc / FAQ | 本页 |
| without re-encoding / 不重新编码 | absorb | Rules / FAQ | 本页 |
| extract cover / lyrics tag | 有意不满足 | FAQ | U2/U3 不拆本页 |
| compress mp3 size | 相邻 | FAQ → S10 | reduce-an-mp3-file-size |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现本任务 Planner 归属分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-21 |
| 总判 | 满足：本地改 title/artist/album/封面；不重编码；诚实 ID3v2 |
| 主词搜索者任务 | 选 MP3、填字段、可选封面、下载 |
| 满足之处 | 表单、封面预览、HUD、样例、本地处理 |
| 超出 / 应划边界 | 不做抽封面独立页、歌词、ReplayGain、体积重编码 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 进入 briefs |

## 文案丰富度（本批 sound 强制）

`description` 须含 Steps + Example；How ≥4；Why ≥4；Rules ≥4；FAQ ≥5；zh description ≥120。

## 交互规格

- 输入：一个本地 MP3，40 MiB / 10 分钟；可选 JPEG/PNG 封面 ≤ 2 MiB。
- 动作：**Apply tags**；`Load sample`；`Download MP3` 成功前禁用。
- 字段：Title / Artist / Album；封面可选清除。
- HUD：Read / Write tags / Done；不重编码音频。
- Sample：页内用 lamejs 合成短 MP3 并预填演示标签。

## 页面模块清单

- [x] H1 / 工具区 / 表单 / HUD
- [x] How / Why / Rules / Example / Use cases
- [x] FAQ ≥5 / related ≥2 / References
- [x] 十语 brief 方向
