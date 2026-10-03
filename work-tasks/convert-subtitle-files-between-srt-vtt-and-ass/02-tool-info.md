# 02 — 工具信息与覆盖决策

**状态**：`implemented`（本地验收，未部署）  
**slug**：`convert-subtitle-files-between-srt-vtt-and-ass`  
**路径**：`/tools/convert-subtitle-files-between-srt-vtt-and-ass`  
**方向**：综合格式转换，不拆方向页  
**YMYL**：否

| 字段 | 内容 |
|---|---|
| 主任务 | 将设备上的字幕文件转换为播放器/网页所需格式；可单件或批量 |
| Title/H1 (en) | Convert subtitle files for a video player or web track |
| Description 方向 | Convert SRT, VTT, ASS/SSA, SBV or LRC locally. Preview cue timing and text, see formatting losses, choose source encoding, then download UTF-8 output or a bounded batch ZIP. |
| Catalog `page.style` | `opts` |
| 技术 | 纯 JS 流式/有界读取、TextDecoder 候选、逐格式 parse/serialize、逐行报告；小批量 fflate ZIP，超预算逐项下载 |
| IG | 前后 cue 预览；编码与 BOM；丢失的样式/定位/逐字时间计数；每文件时长/首末时间、输出字节；坏文件单行失败 |
| 验收 | 6 种格式的实际输入输出与反向边界，编码覆盖，坏文件/部分成功，同名、30 文件、较大文本、取消重试、十语移动端实际下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 用一条综合字幕格式转换 URL 吸收 SRT↔VTT 两个方向；对齐 09-30 研究，不建立近义 pair URL |
| 主检索词→title/H1 | subtitle file converter → Convert subtitle files for a video player or web track；场景句避免只硬抢 srt to vtt 头词 |
| 次词→desc/FAQ/Use cases | `srt to vtt`、`vtt to srt`、`ASS to SRT`、`convert captions for HTML5 video`、`fix garbled subtitles`、`batch subtitle converter` 自然写在首段、模式说明和 FAQ |
| 用户搜法判断 | 用户持有字幕文件，希望在目标播放器/网页能读、时序与文字不丢；乱码时要手动选编码；多个文件要逐项拿到结果 |
| 优化摘要 | 由能力图双向 SRT/VTT 延伸为既有关键词研究同任务综合页；通过可见丢失报告、编码覆盖、逐项结果证明差异 |
| [x] 已回写 Title / Description 与 slug | 已回写上表 |

## 同意图相关搜索词

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| convert subtitle file online | 主任务 | H1/首段 | 本页 |
| srt to vtt / convert SRT for HTML5 video | 同意图方向 | 首段、默认设置、How/FAQ | 本页 |
| vtt to srt / WebVTT to SubRip | 同意图反向 | 首段、格式选择、FAQ | 本页 |
| ass to srt / ssa to srt | 同意图格式输入 | 格式说明、丢失报告 | 本页 |
| sbv to srt / lrc to srt | 同意图格式输入 | 格式说明和用例 | 本页 |
| fix garbled subtitles / GBK to UTF-8 subtitle | 同上传→输出任务 | 编码控件、FAQ、用例 | 本页 |
| batch subtitle converter / multiple SRT to VTT | 同任务多文件 | 批量行/下载/FAQ | 本页 |
| translate subtitles / transcribe audio to SRT | 异任务 | 不吸；对应生成/翻译流程 | 不建本页模式 |

- [x] 同意图搜法已列全；SRT↔VTT 按格式切换而非拆 URL。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表。

## Ads / Keyword Planner 长尾

- [x] 现有字幕研究为 WebSearch 与词池，不是 Planner CSV；仓库未找到本意图的 Planner/Ads 数据，不捏造量级。
- 参考 `docs/seo/keywords/subtitles/2026-09-30-subtitle-tools-deep-scan.md` §5.2 和 `docs/seo/keyword-daily-pool.tsv` 第 251–252 行；所有列出的格式、编码覆盖和批量能力进入交互规格。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：上传字幕→选输出格式/编码→预览时序与损失→真实下载；多文件逐行处理 |
| 主词用户任务 | 获得目标播放器/网页可读的字幕，不只是替换扩展名；乱码、丢失的高级特性要提前知道 |
| 满足处 | 真格式解析与序列化、时间戳校验、编码选择、损失报告、下载后重新解析、批量部分成功 |
| 超出/边界 | 本页不生成或翻译字幕，不保证 ASS 特效、VTT CSS/定位、LRC 逐字时间保留；编码识别为启发式，需可手选 |
| 缺口与回写 | 首屏只放文件和输出格式，编码/BOM 放高级设置；How 先写完成转换，Rules 清楚说明不可逆损失；每行可下载 |
| [x] 已按审查回写 How / 默认流程 / FAQ / desc | 已写入方向和页面规格 |

## 页面模块清单

- [x] 英语母版、6 格式真实输出、重解析与下载完成。
- [x] 十语文案、覆盖 2/4/all、全站构建、移动端和批量大任务验收完成。
