# 02 — Batch compress video files

**状态**：`ready`  
**slug**：`batch-compress-video-files`  
**路径**：`/tools/batch-compress-video-files`  
**方向**：A  
**YMYL**：否

| 字段 | 决定 |
|---|---|
| 主任务 | 一次选多个本地视频，逐项压缩为多个独立 MP4，保留成功项和失败报告 |
| Title/H1 (en) | Batch compress video files and compare each result |
| Description | Choose several local videos, apply a shared size-saving preset, then review each MP4's actual input/output bytes and download successful files separately. |
| 场景 | 为邮件或交付分别缩小多个录屏/手机短片；统一预设、逐项检查 |
| 技术 | Mediabunny BlobSource + OPFS，串行 H.264/AAC，复用单件能力，前后验轨；`page.style: opts` |
| IG | 每行源/目标体积与百分比；已高压缩源变大时诚实报告；逐行 codec/分辨率/时长；部分成功不丢；大输出逐项下载 |
| 边界 | 输入代码上限和设备内存/配额分列；不承诺全部缩小、精确目标体积或任意 codec |
| Related | `compress-a-video-file`, `batch-convert-webm-files-to-mp4-files`, `batch-convert-mov-files-to-mp4-files` |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 batch-compress-video-files，明确多个独立压缩结果，不与单文件页重复 |
| 主检索词→title/H1 | batch compress video files → Batch compress video files and compare each result |
| 次词→desc/FAQ/Use cases | compress multiple videos, bulk reduce video size, batch video compressor, compress MP4 files, no upload → 首段/FAQ/场景自然吸收 |
| 搜索习惯 | 用户要统一设置处理一批文件，并看到每件是否真变小，不是把视频拼成一个 |
| 优化摘要 | H1 增加逐项结果，首段说明独立 MP4、实际字节和部分成功；高级设置说明估算/编码代价 |
| [x] 已回写 SEO 卡片 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 页面落点 | URL |
|---|---|---|---|
| batch compress video files / batch video compressor | 主任务 | H1、desc、How | 本页 |
| compress multiple videos / bulk reduce video size | 同意图 | lead、usecase | 本页 |
| batch compress MP4 files | 来源场景 | FAQ、usecase | 本页 |
| compress videos without upload | 隐私条件 | desc、FAQ | 本页 |
| set target size for each video | 近义但非精确保证 | 高级设置、Rules、FAQ | 本页 |
| merge videos / convert format only | 异意图 | Related 划界 | 不吸 |

- [x] 同意图词与异意图划界已列全当前能力图和 SERP 中可见搜法。
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁贴关键词列表。

## Ads / Keyword Planner 长尾

- [x] 不适用：仓库当前无本意图的 Google/Bing Planner 分析。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：同一预设串行处理多件，逐件产物/错误和真实节省率可见 |
| 主词任务 | 将多个视频分别缩小并拿到每个可下载文件 |
| Ads/Planner | 不适用 |
| 满足之处 | 多文件输入、逐行进度、独立 MP4、部分成功、实测前后体积 |
| 超出/边界 | 不提供多段合并、视频编辑器或精确体积保证；高级设置折叠 |
| 缺口与已做优化 | How 先说明选择共同压缩目标，再让用户逐行检查真结果；FAQ 明确可能变大、不可解码和设备容量 |
| [x] 已回写 How / 交互 / FAQ / desc | 已回写 |

## 交互规格

- 输入 2–20 个本地视频；共用质量/高度预设，顺序队列，一件失败不终止其他件。
- 输出逐项 H.264/AAC MP4、原/后体积、尺寸、时长、节省率和错误；一件一个下载按钮。
- 默认样例两段短视频，首屏自动处理并显示两条真实结果；Load sample 可重跑。
- 进度 HUD 有 Read / Compress / Verify / Download 步骤、当前文件、百分比、耗时、停止/重试；成功保持 100%。
- 限制分层：20 件为代码上限；单件仍受共享引擎与 OPFS 配额限制。大输出不汇集到内存 ZIP。

## 页面模块清单

- [x] 已完成覆盖及意图审查，可开始 H1/交互/How/Why/Rules/Example/Use cases/FAQ/Related/References 十语实现。
