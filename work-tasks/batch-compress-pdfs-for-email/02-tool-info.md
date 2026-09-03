# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-compress-pdfs-for-email`  
**路径**：`/tools/batch-compress-pdfs-for-email`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 一叠 PDF 过邮箱体积闸 | batch compress pdfs for email; batch compress pdf | 多 PDF 同档压缩 → ZIP | **默认**：邮件档（中等栅格质量） |
| 打印仍要较清晰 | compress pdf print | 同意图不同档 | 芯片：打印档 |
| 尽量最小 | compress pdf maximum | 同意图 | 芯片：最大压缩 |
| 合成一本 | merge pdf | **另一作业** | 有意不满足 → `merge-pdf` |
| 单份压缩 | compress pdf | 单文件近邻 | related `compress-pdf` |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch compress PDFs for email；batch compress pdf；compress pdfs；batch pdf compressor；reduce pdf size email
- 用户真实任务：多个 PDF 各自变小，仍是多份文件，打 ZIP 发邮件，不要合并成一本。
- [x] 竞品常见：云端批量压缩、有的会默认 merge。
- [x] 缺口：① N→ZIP 还是 merge；② 文本 vs 扫描差；③ 单份撑爆内存；④ 合计节省字节。
- [x] 本页增益：明确 ZIP 多文件；对照表；单项中止；合计节省。
- [x] 长尾：batch compress pdf 并进。不拆 bulk-compress-pdf。合并有意不满足。
- [x] 权威来源 URL：https://mozilla.github.io/pdf.js/ ；https://pdf-lib.js.org/
- [x] Use case：报价单一叠过 25MB 邮箱；扫描件外发。
- [x] 边界：加密 PDF 跳过；超内存只停该项；文本型收益可能很小并标明。
- [x] Example：两份样例 PDF → ZIP 内仍两份 PDF。
- [x] Related：`compress-pdf`、`merge-pdf`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 共享档位栅格/重嵌 JPEG（对齐单页 compress-pdf） |
| 2 | 边界/失败 | 单项超内存 skip；加密 skip；上限 20 |
| 3 | 场景语境 | 邮件附件闸 |
| 4 | 对照表 | 文本型 vs 扫描型；vs 合并 PDF |
| 5 | 权威引用 | pdf.js、pdf-lib |
| 6 | 本地隐私 | 设备内、不上服务器 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 两份样例、合计节省 |
| 9 | 主题内链 | compress-pdf、merge-pdf |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | pdf / P0 batch 邮件压缩行 |
| 场景与行业 | 多份 PDF 过邮箱体积 |
| 技术 | pdf.js + pdf-lib（懒加载）；fflate ZIP；Tier 1；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch compress PDFs for email** |
| Description 要点 | Add several PDFs, apply one email-size preset to each file, skip a file that is too heavy or encrypted, download a ZIP of separate PDFs—not one merged booklet. Example: two quotes toward an attachment cap. Files stay on the device; they are not uploaded to a server. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会合并成一个 PDF 吗？会上传吗？扫描件和文字稿差多少？和单份压缩有何不同？ |
| Disclaimer / References | 非 YMYL；pdf.js |
| related | `compress-pdf`, `merge-pdf` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `batch-compress-pdfs-for-email`（邮件场景句 + batch；不拆 bulk-compress-pdf） |
| 主检索词 → title/H1 | 英文 H1 原句 **Batch compress PDFs for email**；zh 用「批量压缩 PDF 以便发邮件」当地句，不把 batch 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | batch compress pdf → desc / How；compress pdfs → Use case；batch pdf compressor → desc；reduce pdf size email → 默认邮件档 |
| 用户搜索习惯判断 | 英语说 batch compress pdf；中文搜「批量压缩 PDF / 压缩多个 PDF」 |
| 优化摘要 | 相对单页加 multiple：H1 带 email 场景；明确 ZIP 不合并；文本/扫描对照进 FAQ |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-compress-pdfs-for-email --phase=0b`

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [ ] 已引用分析路径：`docs/seo/keywords/…`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| — | — | 无 Ads CSV | — | 不适用 |

- [ ] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-03 |
| 总判 | 满足：进页样例压两份 PDF 打 ZIP；默认邮件档；不把合并 PDF 抢首屏 |
| 主词搜索者任务 | 一叠 PDF 各自变小好发邮件，仍是多份文件 |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写选多份 PDF、选邮件档、逐份压缩、看合计节省、下 ZIP |
| 超出 / 应划边界 | 无合并按钮；desc 无元叙述；不做加密/解锁当主路径 |
| 缺口与已做优化 | FAQ 写清不是 merge；单项失败继续；默认邮件芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple` `application/pdf`；上限 **20**。共享档位：email（默认）/ print / max。
- 输出：汇总表（原/后体积、跳过原因、合计节省）；成功 **ZIP** 内仍是各自 PDF。
- 核心规则：串行调用与 `compress-pdf` 同类栅格重嵌；不 concatenate 页面。ZIP 重名 `stem (2).pdf`。
- 失败：加密/损坏/超内存 skip。
- 示例：两份短样例 PDF → ZIP 两份。
- **进页样例**：`loadSample()` 生成两份极简 PDF（pdf-lib）并自动压缩。
- **实现防呆**：`opts`；`\\w`；懒加载 pdf.js；`lint:tool-page -- --slug=batch-compress-pdfs-for-email`

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
