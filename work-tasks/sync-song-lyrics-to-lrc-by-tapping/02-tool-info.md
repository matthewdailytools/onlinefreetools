# 02 — Tool information and coverage decision

**状态**：`implemented`（本地验收，未部署）  
**slug**：`sync-song-lyrics-to-lrc-by-tapping`  
**路径**：`/tools/sync-song-lyrics-to-lrc-by-tapping`  
**方向**：单功能；逐行手动对齐歌词并导出 LRC  
**YMYL**：否

| 字段 | 内容 |
|---|---|
| 主任务 | 听本地歌曲，逐行敲击标记歌词开始时间，回听微调，再导出行级 LRC |
| Title/H1 (en) | Sync song lyrics to LRC by tapping each line |
| Description | Paste lyric lines, load a song from this device, tap each line as it begins, adjust late/early lines and download an LRC file. The audio stays on the device. |
| `page.style` | `opts` |
| 技术 | HTMLAudioElement Blob URL; timestamps in milliseconds; no whole-file PCM decode |
| 信息增益 | 每行可重新设时、整体偏移和早晚微调、未对齐行显式提示、按时间预览和保序导出、播放器速度调整 |
| 权威参考 | https://en.wikipedia.org/wiki/LRC_(file_format) ; https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime |
| Related | `convert-subtitle-files-between-srt-vtt-and-ass`, `embed-lyrics-in-an-mp3`, `transcribe-an-audio-file-to-text` |
| 样例 | 四行示例歌词配本地短音频；可点击逐行打点并下载真实 .lrc |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留具体“by tapping”作业，区别于自动歌词识别和 LRC 纯文本转换；本页是手动时间轴制作 |
| 主检索词→title/H1 | LRC maker / sync lyrics to music → Sync song lyrics to LRC by tapping each line |
| 次词→desc/FAQ/Use cases | tap to sync lyrics、LRC lyric editor、adjust lyric timing、make LRC from MP3、export synced lyrics into lead/FAQ/usecases |
| 用户搜法判断 | 有歌词文本和音频的人要听着歌曲标每行的开始时间并下载可用的 .lrc |
| 优化摘要 | 从泛 LRC generator 改为手动打点情境，首屏直接给音频、歌词、下一行及可编辑时间；不许暗示 AI 自动识别 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已回写 |

## 同意图相关搜索词

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| LRC maker / LRC generator | absorb 主词 | title/lead/FAQ | 本页 |
| sync lyrics to music / sync song lyrics | absorb 主词 | H1/lead | 本页 |
| tap lyrics timestamps / tap to sync lyrics | absorb 次词 | H1/How | 本页 |
| make LRC from MP3 | absorb 次词 | FAQ/usecase: MP3 audio Blob URL | 本页 |
| LRC lyric editor / edit LRC timing | absorb 次词 | Rules/FAQ: retap and nudge | 本页 |
| adjust LRC offset / lyrics too late | absorb 次词 | Rules/FAQ: global offset | 本页 |
| export synced lyrics .lrc | absorb 次词 | How/download | 本页 |
| auto transcribe song lyrics / word-by-word eLRC | 不吸，异任务 | FAQ explains manual line-level only | 不建本页模式 |

- [x] 已列全本意图相关搜索，按任务吸收同义词。
- [x] 生成文案时按上表写入，而非页面关键词列表。

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库未发现该 slug 的 Planner 分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：歌曲+已有歌词输入、播放、逐行打点、修改、LRC 下载 |
| 主词搜索者任务 | 把歌词文本对齐歌曲以供播放器同步逐行显示 |
| Ads/Planner | 不适用 |
| 满足之处 | Space/按钮标下一行，逐行重设、全局偏移、速度、预览、真实 LRC 文件 |
| 超出/边界 | 不转写、不自动识别、不做逐词 eLRC；只用用户自备歌词，不提供数据库 |
| 缺口与已做优化 | How 先说明准备歌词与歌曲；失败提示未打点行；偏移和重拍在 Rules 解释；默认示例是可操作的真实结果 |
| [x] 已按审查回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 输入：一个本地音频文件（MP3/M4A/WAV/OGG/FLAC 由浏览器实际支持决定）和粘贴的逐行歌词。最大 1000 行，音频不整文件解码。
- 输出：每行 `[mm:ss.xx]` 的 UTF-8 LRC；未打点行不偷偷输出。下载前提示遗漏。
- 核心：保存整数毫秒，打点赋予当前播放位置；可以单行重新打点、±100ms 微调、整体偏移；排序保持歌词行序且提示时间逆序。
- 失败：无音频、无词、零打点、坏音频、偏移导致负时间均有可见错误；清理 Blob URL。
- 进页样例：加载本地短音频与四行文本，样例已有时间戳并可实际播放/导出；页面 Example 对齐。
- 进度 HUD：即时打点/文本计算，一帧出结果，不适用；下载无耗时转换。
- 实现：`opts` Page；B 后 `lint:tool-page`。

## 页面模块清单

- [x] H1/首段、交互和进页真实样例
- [x] How → Why → Rules → Example → Use cases → FAQ → Related/References
- [x] 十语独立文案、覆盖 gate、完整浏览器输出测试与 build:site
