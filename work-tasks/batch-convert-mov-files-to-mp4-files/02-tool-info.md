# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`batch-convert-mov-files-to-mp4-files`  
**路径**：`/tools/batch-convert-mov-files-to-mp4-files`  
**方向**：B  
**YMYL**：否

## IG 预审与使用场景

| 场景 | 实际任务 | 默认交互 |
|---|---|---|
| iPhone 视频交给 Windows/网页编辑器 | 多个 MOV 各成一个 H.264/AAC MP4 | 多文件队列、一次 Convert all |
| 摄像机与 QuickTime 混合素材 | 分辨 H.264 可复制、PCM 要转 AAC、HEVC 设备不可解 | 逐行轨道/转换方式/错误 |
| 大文件归档 | 保留 >80 MiB 输出并逐件下载 | 串行编码、OPFS 优先、无默认大 ZIP |

可验证的 IG 至少四项：H.264 视频 copy 的逐行标示；音频源/输出 codec；源/输出时长与大小；HEVC 缺解码只失败对应行；同名去重与部分成功；大 MP4 留存到下载/清除。Related：单件 MOV→MP4、批量 WebM→MP4、单件 WebM→MP4、MOV 抽音。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.3 第二项；单件 MOV 与批量 WebM 已完成本地验收 |
| Title/H1 (en) | Batch Convert MOV Files to H.264 MP4 |
| Description 方向 | Batch convert multiple iPhone or QuickTime MOV clips into separate H.264/AAC MP4 files, with per-file video-copy decisions, source/output tracks, size and errors. |
| Catalog `page.style` | `opts` |
| 技术 | MOV 轨道与 decode/encode 预检 → H.264 copy 或可行时 AVC 转码 → AAC → 输出视频+音频/时长复检 → 独立 OPFS/Blob 下载 |
| FAQ | iPhone HEVC 是否支持、H.264 是否复制、PCM→AAC、是否合并、坏片/无声轨、大结果为何不打 ZIP |
| 验收 | 0b→2→4→all、全量 build/verify、H.264/PCM/H.264/AAC/无音轨/HEVC 混合、20 项、同名、停止重试、130 MiB 输入与 >80 MiB 输出真实下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 `batch-convert-mov-files-to-mp4-files`；多独立源及逐行轨道决策，和单件 MOV 页显著不同 |
| 主检索词→title/H1 | `batch MOV to MP4` → Batch Convert MOV Files to H.264 MP4 |
| 次词→desc/FAQ/Use cases | `convert multiple MOV files to MP4` 进首段；`batch iPhone MOV to MP4` 进场景；`QuickTime MOV bulk converter` 进 FAQ/How |
| 用户搜法判断 | 用户一次处理多段手机/相机视频，既要每段可用 MP4，也要知道哪段因 HEVC/音频轨失败；不想把片段拼接 |
| 优化摘要 | 标题明确 batch 与兼容编码；前 160 字将 multiple/iPhone/MOV→separate MP4/逐行差异写清；默认多选并逐项下载，避免“unlimited ZIP”空承诺 |
| [x] 已回写 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| batch MOV to MP4 converter | 主词 | H1、desc | 本页 |
| convert multiple MOV files to MP4 | 同意图 | desc、How | 本页 |
| bulk MOV to MP4 | 同意图 | FAQ、Use cases | 本页 |
| batch iPhone MOV to MP4 | 场景 | 首段、Use cases | 本页 |
| QuickTime MOV files to MP4 batch | 源搜法 | How、FAQ | 本页 |
| H.264 MOV to MP4 without re-encoding | 条件意图 | 规则、FAQ；源符合时视频 copy | 本页 |
| HEVC MOV to H.264 MP4 batch | 条件意图 | 规则、FAQ；设备缺解码报错 | 本页，不承诺通用支持 |
| download all MOV MP4 results | 交付意图 | FAQ：逐件下载和大产物边界 | 本页 |
| one MOV to MP4 | 单件，不吸 | related | 单件页 |
| merge MOV clips into one MP4 | 合并，不吸 | FAQ 边界 | 合并页候选 |
| MOV to MP3 | 抽音，不吸 | related | MOV 抽音页 |

- [x] 同意图搜法已列全；近义词共用自然句，不拆页面。
- [x] 页面 title/description/FAQ/Use cases 须按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库未检出本意图的 Planner/Ads 长尾分析；常规 0b 仍执行。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：多个 MOV 各出一个视频+可用音频的 H.264/AAC MP4，逐行说明 copy/重编码/失败，实际产物可下载 |
| 主词用户任务 | 把一批 iPhone/QuickTime MOV 交给只收 MP4 的应用，同时找出无法处理的片段 |
| 满足处 | 多选、串行、H.264 复制、PCM→AAC、HEVC 条件预检、产物视频轨/时长复核、部分成功与重试 |
| 超出/边界 | 不宣称任意 HEVC/ProRes/HDR、原质无损、保留全部元数据或无限大小；不提供剪辑/合并/大 ZIP |
| 缺口与回写 | How 第一段先说“每段独立 MP4”；首屏一个多选+Convert all；规则解释 H.264 copy 与 HEVC 条件失败；FAQ 解释批量下载逐项和音频处理 |
| [x] 已回写 How / 默认流程 / FAQ / desc | 已回写规格 |

## 交互规格

- 自动样例加载两段短 MOV 并真实转换；一次选择/拖拽至多 20 个 .mov，逐项可移除；一个 Convert all 主动作，结果后逐行 Download MP4。统一 AAC 声道/质量设置折叠。
- 金标 HUD 在耗时操作前可见，显示总百分比、当前文件、预检/转换/复检、耗时；每行报告源 codec、目标 codec、视频 copy/重编码、尺寸、时长和体积。停止保留成功项；重试仅处理未成功项。
- OPFS 优先保留各 MP4 至下载/移除/清除；无 OPFS 时设内存总产物预算，不把大结果默认打 ZIP。逐行预检源解码能力和 AVC 编码能力；输出缺视频或时长异常视作失败。

## 页面模块清单

- [x] 清单前检索覆盖和用户意图审查已完成，`coverage:gate --phase=0b` 通过。
- [x] 母版 i18n 已完成，phase=2 通过。
- [x] 十语文案齐全，每种 96 个键；phase=4/all 通过。
- [x] 全站构建、`CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=batch-convert-mov-files-to-mp4-files` 与单件 MOV 回归验证通过；真实浏览器下载通过，包括 H.264 视频包哈希一致、PCM→单声道 AAC、HEVC 混合队列、20 项、130 MiB 输入→>80 MiB 输出及十语移动端。
