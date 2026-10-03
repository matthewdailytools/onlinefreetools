# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`batch-convert-webm-files-to-mp4-files`  
**路径**：`/tools/batch-convert-webm-files-to-mp4-files`  
**方向**：B  
**YMYL**：否

## IG 预审与使用场景

| 场景 | 任务 | 默认交互 |
|---|---|---|
| 浏览器录屏归档 | 多个 VP8/VP9 WebM 分别成为可播放 H.264/AAC MP4 | 多文件队列，一次 Convert all |
| 编辑器交接 | 找到坏片与缺失轨道，下载其余成功结果 | 逐行 codec、时长、体积、错误与下载 |
| 大批量素材 | 避免 ZIP 占满浏览器内存 | 串行处理与逐项下载、停止/重试 |

至少四项独立 IG：源/输出轨道实测报告；每行时长和体积；部分成功保留和具体失败原因；同名去重；大结果的独立下载与浏览器存储限制。Related：单件 WebM→MP4、现有 MKV 批量→MP4、MOV 单件→MP4。

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.3 第一项；WebM 单件已通过本地实测 |
| Title / H1 (en) | Batch Convert WebM Files to H.264 MP4 |
| Description 方向 | Batch convert multiple WebM recordings to separate H.264/AAC MP4 files in your browser. Inspect each clip's codec, duration, size, error and download. |
| Catalog `page.style` | `opts` |
| 技术 | 独立队列→逐文件 WebM/codec 预检→AVC/AAC 转换→重读产物→逐行保留可下载 Blob/OPFS File |
| FAQ | 多文件会合并吗、VP9 能直接换后缀吗、坏文件影响其他行吗、无音轨怎么办、能下载大结果吗 |
| 验收 | 0b→2→4→all、全量 build/verify、20 行及坏文件混入、同名输出、停止重试、大文件输入与真实下载 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug | 保留 `batch-convert-webm-files-to-mp4-files`，强调多个独立文件，不与单件 WebM 页撞意图 |
| 主检索词→title/H1 | `batch WebM to MP4` → Batch Convert WebM Files to H.264 MP4 |
| 次词→desc/FAQ/Use cases | `convert multiple WebM files to MP4` 进 description；`bulk WebM converter` 进 FAQ；`browser recordings to MP4` 进 Use cases |
| 用户搜法判断 | 搜索者想一次选多段录屏、各得一个可用 MP4，并能找出失败项，不是把片段拼成一段 |
| 优化摘要 | 标题写明 batch 与目标编码；首段写 multiple、separate MP4 和逐行报告；操作默认是多选，结果默认逐项下载以支持大产物 |
| [x] 已回写 Title / Description 与 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 | URL |
|---|---|---|---|
| batch WebM to MP4 converter | 主词 | H1、description | 本页 |
| bulk convert WebM to MP4 | 同意图 | FAQ、How | 本页 |
| convert multiple WebM files to MP4 | 同意图 | description、Use cases | 本页 |
| WebM files to separate MP4 files | 结果要求 | 首段、How、FAQ | 本页 |
| batch browser recordings to MP4 | 场景 | Use cases | 本页 |
| download all converted WebM MP4 | 下载意图 | FAQ，说明逐项下载及大文件边界 | 本页 |
| VP9 WebM to H.264 MP4 batch | 编码意图 | Rules、FAQ | 本页 |
| WebM to MP4 one file | 单件意图 | related | 单件页 |
| merge WebM videos into one MP4 | 合并意图，不吸 | FAQ 边界 | 合并页候选 |
| WebM to MP3 | 音频输出，不吸 | related | 抽音页 |

- [x] 同意图搜法已列全，近义词共用自然句，不拆页面。
- [x] 生成 title/description/FAQ/Use cases 时按上表写入。

## Ads / Keyword Planner 长尾

- [x] 仓库 `docs/seo/keywords`、`docs/seo/serp-batches` 未检出本意图 Planner/Ads 归属长尾；常规 0b 仍执行。

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：多个 WebM 各出一个真实 H.264 MP4，逐行可见结果并可下载；不误称合并或无上限 ZIP |
| 主词用户任务 | 一次处理多段录屏并找到每段对应 MP4；一段失败时拿到其他成功片 |
| 满足处 | 多选、串行转换、逐行预检/编码/产物验证、成功项单独保留、同名去重 |
| 超出/边界 | 不把 ZIP 作为默认交付或抢首屏；不提供剪辑/合并；无法编码时明确报错 |
| 缺口与回写 | How 第一段改为“每段独立 H.264/AAC 输出”；首屏一个多选+Convert all；FAQ 解释为什么大结果逐项下载、为什么 VP9 不能只改后缀 |
| [x] 已回写 How / 默认流程 / FAQ / desc | 已回写规格 |

## 交互规格

- 进入页自动加载两段短 WebM 样例并真实处理；大块引擎点击/样例运行时懒载。多文件选择/拖拽，上限 20，队列可移除；一个 Convert all 主按钮。下载只在成功项启用，逐项下载按钮在每行。
- 高级设置折叠，保留 H.264 质量和 AAC 单/双声道；非输入操作不挤主按钮。金标 HUD 有百分比、当前文件、步骤、已用时间、进度条，开始编码前 yield UI。
- 每行保存经二次轨道验证的 MP4；批量模式中的 OPFS 临时文件即使较小也保留到下载/清除，避免 20 份结果复制进内存。无 OPFS 时，已留存结果合计最多 128 MiB；超过时该行失败，提示先下载并移除已完成行。大 ZIP 暂不提供，页面明确说明逐项下载；停机保留成功行，重试只跑未成功行；更改统一设置时须清空过时产物。

## 页面模块清单

- [x] 0b 检索覆盖和用户意图审查已完成，`coverage:gate --phase=0b` 通过。
- [x] 母版页与 i18n、phase=2。
- [x] 十语文案已写齐，phase=4/all 待执行。
- [ ] 全量构建、工具验证和真实批量浏览器测试。
