# 02 — 工具信息与覆盖决策

**状态**：`implemented`（本地验收，未部署）  
**slug**：`inspect-video-file-tracks`  
**路径**：`/tools/inspect-video-file-tracks`  
**方向**：单功能诊断；多文件为同页模式  
**YMYL**：否

| 字段 | 内容 |
|---|---|
| 主任务 | 本地检查一个或多个视频的容器、全部音视频轨、语言、编码及当前浏览器解码能力 |
| Title/H1 (en) | Inspect video and audio tracks in a local file |
| Description 方向 | Check MP4, MOV, WebM or MKV tracks without uploading. See actual video/audio codecs, extra audio languages, channels, starts, metadata duration and this browser's decoding support; download JSON. |
| Catalog `page.style` | `opts` |
| 技术 | Mediabunny `BlobSource` + `Input.getTracks()` 在 Worker 中按需 demux，元数据时长非全片扫描；串行多文件并保留部分结果 |
| IG | 多音轨逐条报告、无声与编码不支持分开、语言/声道/起点、容器≠codec、当前浏览器解码测试、MP4/WebM 目标容器 codec 族预检、结构化 JSON |
| 验收 | 真多语言音轨 MP4 与 ffprobe 对照、无音轨、WebM/MOV/MKV、损坏文件、>80 MiB 按需读取、20+ 文件队列/部分失败、停止重试、十语移动端 JSON 下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留独立 inspect-video-file-tracks：诊断全部轨道的主任务与转换/抽音页的导出任务不同 |
| 主检索词→title/H1 | inspect video tracks / check audio tracks in video → Inspect video and audio tracks in a local file |
| 次词→desc/FAQ/Use cases | video codec checker、MP4 audio track checker、why video has no sound、video metadata viewer、check video language tracks 自然进入首段与 FAQ |
| 用户搜法判断 | 用户要知道视频为何无声、某播放器为何打不开、是否有第二条音轨，以及源文件是否该转换 |
| 优化摘要 | 不做泛泛“metadata”词页；首页直接给真实轨道表和当前设备解码结果，比较容器和编码，区分无音轨与不可解码 |
| [x] 已回写 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| inspect video tracks online | 主任务 | H1/首段 | 本页 |
| video codec checker | 同意图 | 首段/结果/FAQ | 本页 |
| check audio tracks in MP4 | 同意图 | 首段/Use case/FAQ | 本页 |
| how many audio tracks in video / language tracks | 同意图 | 结果/FAQ | 本页 |
| video metadata viewer / video file info | 同意图 | 容器/时长/分辨率/结果 | 本页 |
| video has no sound | 诊断情境 | 用例/FAQ：无音轨 vs 不能解码 | 本页 |
| extract audio from video / convert video codec | 异任务 | related 转到抽音/转换页；不冒充输出 | 不建本页模式 |

- [x] 同意图搜法已列全，诊断不与格式转换混同。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表。

## Ads / Keyword Planner 长尾

- [x] 仓库未找到本意图的 Planner/Ads 长尾材料；不捏造搜索量。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：选文件后报告全部轨道而非仅播放器选择的主轨道，说明无声原因并可下载 JSON |
| 主词用户任务 | 明确容器里有几条视频/音频轨及其 codec、语言、声道、尺寸、时长和本机可解码情况 |
| 满足处 | `BlobSource` 按需读取、逐轨表、当前浏览器解码探测、逐文件成功/失败、JSON 报告 |
| 超出/边界 | 元数据时长是估计，`canDecode()` 仅当前浏览器/设备能力；不承诺其他设备和软件可播放，不把检查当修复 |
| 缺口与回写 | 首段和结果清楚解释容器≠codec、无轨 vs 不可解码；How 先查文件再看轨道；大文件不先整文件载入内存 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入规格 |

## 页面模块清单

- [x] 英语母版、真实多轨检查和 JSON 下载完成。
- [x] 十语文案、覆盖 2/4/all、全站构建和多文件/大文件浏览器验收完成。
