# 02 — Tool info

**状态**：`ready`  
**slug**：`add-soft-subtitles-to-an-mp4`  
**分类**：video  
**风格**：opts  
**主任务**：把现成 SRT 字幕嵌入 MP4 的可选字幕轨，保留原视频和音频轨。

## SEO 卡片

- Title/H1: Add soft subtitles to an MP4 without re-encoding
- Description: Mux an SRT into a local MP4 as a selectable mov_text subtitle track in your browser. Preserve picture and sound, download the MP4 and SRT, and check player compatibility.
- Lead: Choose a local MP4 and timed SRT; mux a subtitle track with no video/audio re-encode; download both MP4 and SRT sidecar.
- How: choose MP4 → choose SRT → set track language → Add subtitle track → download both files → test a compatible player.
- Settings: ISO-639 three-letter track language, editable to match speech/subtitle text; not UI language.
- FAQ: soft versus burned subtitles; supported players; video/audio quality; limits; local processing.
- Use cases: add optional captions to interviews, courses and clips.

## 清单前检索覆盖

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 add-soft-subtitles-to-an-mp4，和 burn-subtitles-into-a-video 区分独立意图 |
| 主检索词→title/H1 | add soft subtitles to MP4 / embed SRT in MP4 → Add soft subtitles to an MP4 without re-encoding |
| 次词→desc/FAQ/Use cases | mux SRT into MP4, selectable subtitles, mov_text, no re-encode → 首段、How、FAQ、场景 |
| 搜索习惯 | 用户要一个可选字幕轨，同时关注播放器兼容、原视频质量和字幕时间 |
| 优化摘要 | 首段解释可选轨、保留视频音频与兼容性；FAQ 对比烧录并说明限制 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| add soft subtitles to MP4 / embed SRT in MP4 | 主任务 | H1、desc、How | 本页 |
| mux SRT into MP4 / add selectable captions | 同意图 | lead、FAQ | 本页 |
| mov_text / tx3g subtitle track | 技术条件 | rules、FAQ | 本页 |
| burn subtitles into video | 独立意图 | Related、FAQ | burn-subtitles-into-a-video |
| transcribe video to SRT | 独立意图 | Related | make-srt-subtitles-from-a-video-file |

- [x] 上表已列全本意图相关搜索，并注明单件、合并与翻译边界。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未见本 MP4 软字幕意图的 Planner 长尾表。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：本地 MP4 + SRT → 带 mov_text 轨 MP4 和 SRT sidecar |
| 主词任务 | 不重编码视频音频，增加可选字幕轨 |
| Ads/Planner | 不适用 |
| 满足之处 | SRT 时间校验、语言码、MP4 轨 mux、双下载和结果信息 |
| 超出/边界 | 播放器可能不显示轨；网页 video 预览也可能不显示，提供 sidecar |
| 缺口与已做优化 | 首段和结果栏明确兼容性；限制内存占用与文件大小 |
| [x] 已回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 一个 MP4 <=160 MiB 与一个 SRT <=2 MiB；仅本地 mux，输入必须是可解析 MP4。
- 解析 SRT cue 起止时间与空白间隔；禁止重叠，保留 UTF-8 文本和换行。
- 产出 MP4 + SRT sidecar；显著进度和失败/重试、示例。语言码为三字母。

## 页面模块清单

- [x] 已完成覆盖及意图审查，可进入母版实现。
