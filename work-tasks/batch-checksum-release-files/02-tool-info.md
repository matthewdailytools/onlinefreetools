# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-checksum-release-files`  
**路径**：`/tools/batch-checksum-release-files`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 发版目录出校验和表 | batch checksum release files; batch checksum | 多文件哈希 → 表/CSV/SUMS | **默认**：SHA-256；导出 SUMS + CSV |
| 对照官方 SHA256SUMS | verify sha256sums | 同意图 | 粘贴清单逐行对照 |
| 只要 MD5 | md5 multiple files | 同意图芯片 | 芯片：同时算 MD5 |
| 单文件哈希 | file hash | 单文件近邻 | related `file-hash` |
| 元数据表 | file metadata | **另一作业** | related `file-metadata-analyzer` |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch checksum release files；batch checksum；hash multiple files；sha256sums；checksum several files
- 用户真实任务：给发版目录算出校验和表，能对照已有 SUMS，导出 CSV 或 SUMS 文本——不是把安装包打 ZIP。
- [x] 竞品常见：单文件哈希页反复点；桌面 sha256sum。
- [x] 缺口：① 粘贴 SUMS 对照；② 大文件进度；③ CSV 与 SUMS 双导出；④ 重名用相对路径。
- [x] 本页增益：对照列 match/mismatch；分块进度；双导出；路径列。
- [x] 长尾：hash multiple files 并进。不拆 MD5 第二 URL。
- [x] 权威来源 URL：https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest ；https://www.rfc-editor.org/rfc/rfc6234
- [x] Use case：GitHub Release 附件清单；镜像校验。
- [x] 边界：读失败 skip；空队列无导出；SUMS 多出来的行标 missing。
- [x] Example：两份样例字节 → 表上两行 SHA-256，导出文本与 CSV。
- [x] Related：`file-hash`、`file-metadata-analyzer`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | SHA-256（Web Crypto）；可选 MD5 |
| 2 | 边界/失败 | 读失败 skip；分块；上限约 20 |
| 3 | 场景语境 | 发版校验和 |
| 4 | 对照表 | 粘贴 SUMS match/mismatch |
| 5 | 权威引用 | SubtleCrypto、RFC 6234 |
| 6 | 本地隐私 | 设备内、不上服务器 |
| 7 | 多语言 | 03 |
| 8 | 数值示例 | 两份样例哈希 |
| 9 | 主题内链 | file-hash、file-metadata-analyzer |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | developer / P0 batch checksum 行 |
| 场景与行业 | 发版文件批量校验和 |
| 技术 | Web Crypto SHA-256；MD5 懒加载对齐 file-hash；Tier 0/1；`localProcessing: true` |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch checksum release files** |
| Description 要点 | Add release files, hash them with SHA-256 in this tab, paste a SHA256SUMS list to compare, export CSV or SUMS text. Example: two dummy binaries show hashes and a match column. Files stay on the device; they are not uploaded to a server. This page does not ZIP the originals. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点（≥3） | 会把文件打包下载吗？会上传吗？和单文件哈希有何不同？MD5 在哪？重名怎么办？ |
| Disclaimer / References | 非 YMYL；MDN SubtleCrypto |
| related | `file-hash`, `file-metadata-analyzer` |
| 验收 | `coverage:gate` 0b→2→4；`verify:tool` |
| 工期粗估 | 本 slug 一完整实现会话 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `batch-checksum-release-files`（发版场景句 + batch；不用品类 hash-pack） |
| 主检索词 → title/H1 | 英文 H1 原句 **Batch checksum release files**；zh 用「批量计算发版文件校验和」当地句，不把 batch 硬塞进中文 H1 |
| 次要关键词 → desc / FAQ / Use cases | batch checksum → desc / How；hash multiple files → Use case；sha256sums → 粘贴对照 + 导出；checksum several files → desc |
| 用户搜索习惯判断 | 英语发版说 checksum / SHA256SUMS；中文搜「批量校验和 / 文件哈希」 |
| 优化摘要 | 相对单文件页加 multiple：H1 发版场景；产物改为表/CSV/SUMS 而非 ZIP 原文件；对照清单写入交互 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-checksum-release-files --phase=0b`

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
| 总判 | 满足：进页样例算出两行 SHA-256 并可导出；默认发版校验和，不把原文件 ZIP 或元数据分析抢首屏 |
| 主词搜索者任务 | 给多个发版文件一份校验和表，并能对一下别人给的 SUMS |
| Ads/Planner 长尾任务 | 不适用 |
| 满足之处 | How 先写选文件、算 SHA-256、可贴清单对照、导出 CSV 或 SUMS |
| 超出 / 应划边界 | 不打包原文件；desc 无元叙述；元数据字段不是本页主表 |
| 缺口与已做优化 | 明确无 ZIP-of-files 按钮；相对路径列；MD5 为芯片 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：`input multiple` 任意文件；上限 **20**。共享：算法 SHA-256 默认；芯片加 MD5。文本框粘贴 SHA256SUMS。
- 输出：**表**（路径、大小、SHA-256、可选 MD5、对照结果）；按钮导出 CSV 与 SUMS 文本。**不**把成功文件打 ZIP。
- 核心规则：串行 `File.slice` 分块 `digest`；对照按文件名匹配（重名用 webkitRelativePath 或队列序号）。
- 失败：读失败 skip，其余继续。
- 示例：两个小 Blob → 两行哈希；粘贴其中一行 SUMS → match。
- **进页样例**：`loadSample()` 两个固定字节样例文件自动哈希，表非空，导出按钮可用。
- **实现防呆**：`opts`；`\\w`；`lint:tool-page -- --slug=batch-checksum-release-files`

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
