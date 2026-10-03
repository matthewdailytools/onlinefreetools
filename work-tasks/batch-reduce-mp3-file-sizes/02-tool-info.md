# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-reduce-mp3-file-sizes`  
**路径**：`/tools/batch-reduce-mp3-file-sizes`  
**主方向**：A  
**YMYL**：否

## IG 预审

- 主词：batch MP3 compressor；bulk reduce MP3 file size；compress multiple MP3 files；shrink MP3 files in bulk。
- 用户任务：将一组已有高码率 MP3 录音或音乐以共同的较低码率重新编码，逐项确认是否真的变小，再分别下载值得替换的结果。
- SERP 样本：`01` 中的 123Converter、Lacuna、SonicBatch、AnyFyle；它们覆盖批量导入、设置和下载，但常把“缩小”写成无条件保证。
- 三个页面缺口：混合高/低输入中，低码率文件可能被放大；再次有损编码的质量成本要和节省率并列；输出 ZIP 对大量文件可能额外占内存，逐项结果更安全。
- 可验证 IG：每行真实输入/输出字节与节省百分比；“未缩小”独立状态且默认不误导替换；统一码率设置对应不同来源的实际结果；损坏/不可解码文件不影响成功项；示例同时含高码率和低码率 MP3，展示不同判定。
- 权威依据：[MDN decodeAudioData](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData)、[lamejs README](https://github.com/zhuker/lamejs)。
- Related：`reduce-an-mp3-file-size`、`batch-convert-audio-files-to-mp3`、`bulk-convert-wav-files-to-mp3`。

| §3.1 维度 | 本页体现 |
|---|---|
| 公式/数值 | 输入与输出实际大小；节省率 `(1−输出/输入)×100%`，预测只作参考 |
| 边界/失败 | 低码率会放大；损坏输入逐行拒绝；每个结果独立 |
| 场景语境 | 批量缩小会议录音/播客，和为音乐保留较高码率区分 |
| 对照 | 每行原件与结果体积及“更小/未缩小” |
| 本地隐私 | 设备内读取、编码和输出，不上传服务器 |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.4 第二批；与 MP3→WAV 二选一先行 |
| Title (en) | Batch Reduce MP3 File Sizes Online |
| H1 | Batch reduce MP3 file sizes |
| Description 方向 | Shrink several local MP3 files in one queue; choose a lower bitrate, compare each real before/after size, and download only results that are smaller. Show files that fail or grow. |
| Catalog `page.style` | `opts` |
| 技术 | MP3 帧校验 → Web Audio 串行解码 → lamejs 64/96/128/192 kbps；逐项下载 |
| Schema | WebApplication + BreadcrumbList，和可见正文一致 |
| FAQ | 有损成本、是否保证缩小、目标大小与码率、失败/部分成功、隐私 |
| 验收 | 0b→2→4→all，`verify:tool`，真实高/低码率批次下载解码 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留 `batch-reduce-mp3-file-sizes`；与现有单件页的重复输入任务不同 |
| 主检索词 → title/H1 | `batch reduce MP3 file size` → Batch Reduce MP3 File Sizes Online / Batch reduce MP3 file sizes |
| 次要关键词 → desc / FAQ / Use cases | `compress multiple MP3 files` 进描述；`bulk MP3 compressor` 进 How；`MP3 smaller for email` 进 usecase；`low bitrate MP3` 进 FAQ |
| 用户搜索习惯判断 | 搜索者要的是多文件真实减重，不是一个“codec converter”名词；首屏先讲输入、变小结果与不能保证每项都减重 |
| 优化摘要 | 从泛“MP3 压缩器”改成批次真实体积对比；把有损与低码率放大边界前移，避免精确目标体积虚假承诺 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch reduce MP3 file size | absorb 主词 | H1、desc | 本页 |
| batch MP3 compressor | absorb 次词 | title/How | 本页 |
| bulk compress MP3 | absorb 次词 | How/FAQ | 本页 |
| compress multiple MP3 files | absorb 次词 | desc/usecase | 本页 |
| shrink MP3 files for email | absorb 次词 | usecase/FAQ | 本页 |
| compress MP3 to exact MB | 有意不满足精确值 | FAQ 解释码率只给估算，结果按实测 | 本页不承诺精确 MB |
| convert MP3 to WAV | drop，不同输出 | related / 后续 batch 立项 | 独立作业 |
| normalize MP3 volume | drop，不同处理 | FAQ 指向响度任务 | 另一工具 |

- [x] 上表已列全本意图相关搜索（本轮 SERP 与已有方向文档；后续发现新词继续补）
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析；已检索仓库目录）

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：同一设置缩小多份 MP3，逐项量出是否真的节省，并分别取回较小的结果 |
| 主词搜索者任务 | 快速处理一组 MP3，并减少发送/存储占用，不误把变大的结果当压缩成功 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 多文件、统一码率、逐项输入/输出/节省率、部分成功与独立下载 |
| 超出 / 应划边界 | 精确目标 MB、无损压缩、音量标准化、元数据保持均不在第一版承诺内 |
| 缺口与已做优化 | 增加“未缩小”状态、低码率示例、有损警告和结果下载筛选；回写首屏与 FAQ 规格 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已回写交互规格 |

## 交互规格

- 输入：最多 20 个 MP3，单文件 40 MiB/10 分钟上限；高、低码率混合，禁止只看扩展名。
- 输出：每个源可得新 MP3；每行显示真实输入/输出大小、变化百分比、时长、码率和“确实更小/未缩小/失败”；用户可选择下载未缩小项作对比，但不标成节省。
- 算法：复用单件页 MP3 帧校验，串行 `decodeAudioData`→lamejs；64/96/128/192 kbps，声道保留或语音单声道；较低码率也不保证每个结果更小。
- 失败：损坏、超限、浏览器解码/编码、存储不足逐行报错；停止后保留成功项，失败可重试；不覆盖原文件。
- 进页样例：真实高码率与低码率短 MP3 自动处理，和 Example 的两个不同结果一致。
- 进度 HUD：Read / Decode / Encode、当前文件/总进度/耗时、完成下载提示。
- 本地验收：`node scripts/tool-modules/test-batch-reduce-browser.mjs` 已通过：3 秒 192→128 kbps 样例 71.0→47.8 KiB（缩小 32.8%），64→128 kbps 样例 24.0→48.6 KiB（明确标为未缩小）；下载首个结果后解码为 3.056 秒非静音音频；立体声→单声道设置的下载产物确为 1 声道；20 个同名 3 秒文件独立输出且下载名去重；十语移动端自动样例无横向溢出，阿语 RTL；损坏文件逐行失败与重试、停止后续跑、40 MiB+1 字节拒绝均通过。
- 验收边界：40 MiB 是代码上限，本轮没有用接近 40 MiB 的真实 MP3 做完成转换；OPFS 回退与磁盘配额不足未做环境故障注入，不能写作实测通过。下载文件名使用 `-reencoded.mp3`，避免低码率结果变大时误称已缩小。
