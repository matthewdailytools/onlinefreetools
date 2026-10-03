# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-mp3-files-to-wav`  
**路径**：`/tools/batch-convert-mp3-files-to-wav`  
**主方向**：A  
**YMYL**：否

## IG 预审

- 主词：batch MP3 to WAV converter；convert multiple MP3 files to WAV；bulk MP3 to WAV。
- 用户任务：把多份 MP3 转为音频编辑软件可读取的独立 PCM WAV，事前看输出膨胀估算，事后逐行检查真正的文件大小和声道，再按需下载。
- SERP 样本：`01` 中 PremiereLY、256-tools、AnyFyle；常见批量与 ZIP，但对 PCM 膨胀、原音质不可恢复和多文件存储预算解释不足。
- 独立 IG：每行输入与 WAV 字节差额、按 `秒数×采样率×声道×2+44` 估算；真 16-bit PCM RIFF 头；多文件逐项下载、损坏行不中断、同名去重、停止/重试；浏览器内存和 OPFS 限制可见。
- 权威依据：[MDN decodeAudioData](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData)、[Microsoft RIFF](https://learn.microsoft.com/en-us/windows/win32/xaudio2/resource-interchange-file-format--riff-)。
- Related：`convert-an-mp3-file-to-wav`、`batch-reduce-mp3-file-sizes`、`bulk-convert-wav-files-to-mp3`。

| §3.1 维度 | 本页体现 |
|---|---|
| 公式/数值 | WAV 输出字节 ≈ 44 + 秒数 × 采样率 × 声道 × 2；每行实测输入/输出 |
| 边界/失败 | MP3→PCM 体积通常大幅增加；WAV 不能还原 MP3 已丢失信息；坏文件逐行失败 |
| 场景语境 | 批量送入 DAW、采样器或需要 PCM 的系统 |
| 对照 | MP3 原件大小、WAV 结果大小、采样率、声道 |
| 本地隐私 | 文件留在设备，由浏览器解码与写出，不上传服务器 |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 优先级 | §11.4 第二批候选；前两个本地批量工具完成后继续 |
| Title (en) | Batch MP3 to WAV Converter |
| H1 | Batch convert MP3 files to WAV |
| Description 方向 | Convert multiple MP3s to separate 16-bit PCM WAV files in one local queue; estimate expansion, compare actual sizes, download independently. |
| Catalog `page.style` | `opts` |
| 技术 | MP3 帧预检 → Web Audio 顺序解码 → 分块 WAV 写出到 OPFS；无 OPFS 采用严格输出内存上限 |
| Schema | WebApplication + BreadcrumbList，和可见正文一致 |
| FAQ | WAV 是否更好、会变大多少、采样率、坏文件/部分成功、隐私 |
| 验收 | 0b→2→4→all、`verify:tool`、真实下载 WAV RIFF/PCM 验证与批量/限额测试 |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-03 |
| slug 结论 | 保留；单件页无法管理一批 MP3 的各自 WAV 输出和膨胀预算 |
| 主检索词 → title/H1 | `batch MP3 to WAV converter` → Batch MP3 to WAV Converter / Batch convert MP3 files to WAV |
| 次要关键词 → desc / FAQ / Use cases | `convert multiple MP3 files to WAV` 进首段；`bulk MP3 to WAV` 进 How；`16-bit PCM WAV` 进设置和 FAQ；`MP3 to WAV for editing` 进场景 |
| 用户搜索习惯判断 | 先说明输入 MP3、多结果 WAV、真实大小与下载；音质恢复是错误期望，在前段拆解 |
| 优化摘要 | 从单件格式转换扩展为可检查每项膨胀和失败的多文件队列；让 PCM 体积成本与可下载结果成为页面独有价值 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | 已回写 |

## 同意图相关搜索词（页面生成必吸）

| 相关搜法 | 判定 | 页面生成落点 | 近义不拆 URL |
|---|---|---|---|
| batch MP3 to WAV converter | absorb 主词 | H1、desc | 本页 |
| convert multiple MP3 files to WAV | absorb 次词 | desc、FAQ | 本页 |
| bulk MP3 to WAV | absorb 次词 | How | 本页 |
| MP3 to WAV for editing | absorb 次词 | usecase | 本页 |
| 16-bit PCM WAV | absorb 结果规格 | 首段、规则 | 本页 |
| WAV makes MP3 lossless | 不吸，错误意图 | FAQ 说明原有损失无法恢复 | 不做虚假页面 |
| WAV to MP3 | drop，反向作业 | related | 现有 batch 页 |

- [x] 上表已列全本轮同意图相关搜索词
- [x] 生成 title / description / FAQ / Use cases 时按上表写入，禁止漏词只留本表（实现后再次核对）

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析；已检索仓库目录）

## 用户意图审查

| 项 | 结论 |
|---|---|
| 日期 | 2026-10-03 |
| 总判 | 满足：一组独立 MP3 得到一组独立的真实 PCM WAV，尺寸预估与实测可见 |
| 主词搜索者任务 | 给 DAW/采样器准备多个 WAV，而非缩小文件 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | 多文件、共同格式设置、逐行真实结果、部分成功、独立下载 |
| 超出 / 应划边界 | 不恢复已损失音质；不默认拼 ZIP；不承诺任意多 GiB 文件或无限浏览器配额 |
| 缺口与已做优化 | 先算 PCM 输出预算，选择分块写出，避免输入 MP3 小但结果 WAV 超内存 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | 已回写规格 |

## 交互规格

- 输入：最多 20 个 MP3；单文件上限需由浏览器解码和输出预算验证后定，不继承其他页上限作为实测结论。
- 输出：每个源一份独立 16-bit PCM WAV；输出采样率默认 44.1 kHz，可选 48 kHz，保留 1/2 声道；每行显示实际前后字节和膨胀倍数。
- 失败：损坏 MP3、解码失败、预算/配额不足逐行提示，成功项保留；停止后续跑，失败可重试。
- 样例：页面自动生成短 MP3 并转成真正 WAV，显示膨胀倍数，下载后可由外部 RIFF 解析器确认。
- 稳定性：串行解码、分块写出、限制内存回退；不把全部 WAV 做成一个内存 ZIP。

## 本地实测验收（2026-10-03）

- `node scripts/tool-modules/test-batch-mp3-to-wav-browser.mjs`：十语移动端自动样例均产出可下载 WAV，页面无横向溢出，阿语 RTL 正常；内置 WAV 经 RIFF/PCM 头与浏览器解码检查为 16-bit、44.1 kHz、双声道、约 3.03 秒非静音音频。
- 20 个同名短 MP3 产生 20 份独立 WAV、下载名去重；有效+损坏混合输入部分成功，失败项重试不丢成功项；停止后可续跑，20 MiB+1 字节输入在解码前拒绝。
- 48 kHz + 单声道设置的实际下载 WAV 头正确。4 分钟真实 MP3 经 OPFS 分块写出 >40 MiB WAV，`ffprobe` 验证 `pcm_s16le`、44.1 kHz、双声道、240 秒；清空队列后 OPFS 文件移除。禁用 OPFS 后，内存回退也产出可下载 WAV。
- 代码硬上限为 MP3 单件 20 MiB/5 分钟、WAV 单件 60 MiB、队列 20 项；本地实测最大成功输入为 4 分钟 MP3、输出 >40 MiB，不能写作已验证 20 MiB 输入或完整 20 件长文件。浏览器配额耗尽与崩溃后的临时目录清理未做故障注入。
