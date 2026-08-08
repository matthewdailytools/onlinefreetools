# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`split-pdf`（不新建 `extract-pdf-pages` / `pdf-splitter` 近义薄页）  
**路径**：`/tools/split-pdf`  
**主方向**：A（A.5.2 PDF · 本地优先）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. split pdf / 拆分 PDF  
  2. extract pdf pages / 按页拆 PDF  
  3. split pdf by page range（控件 → Rules，不拆页）  
  4. pdf to multiple files / zip（输出 → FAQ）  
  5. split pdf local / no upload（隐私 → FAQ）
- 用户真实任务：从多页 PDF 抽出某几页，或把全书拆成每页一文件再分别发送。
- [x] 竞品：按页/范围拆分、ZIP 下载、云端上传
- [x] 缺口：本地边界；1-based 范围规则；加密失败；与 merge 分工
- [x] 增益：Rules；边界 FAQ；Use cases；pdf-lib + fflate References；十语；Example；Related
- [x] 长尾：每页/范围合并本页，不拆 doorway
- [x] 权威来源：https://pdf-lib.js.org/ ；https://github.com/101arrowz/fflate
- [x] Use cases：抽合同某一页；课件按章拆；扫描件单页归档
- [x] 边界：空范围；越界页码；加密；单文件无需 ZIP
- [x] Example：3 页样例 → 每页一文件 ZIP
- [x] Related：`merge-pdf`, `images-to-pdf`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 1-based 范围；每页/范围模式；ZIP 命名 |
| 2 | 边界/失败 | FAQ + UI |
| 3 | 场景语境 | Use cases |
| 5 | 权威引用 | pdf-lib / fflate |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | Example：3→ZIP |
| 9 | 主题内链 | related |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | A.5.2 · P0 · 清单 #51 · `pdf` |
| 场景与行业 | 办公、运营 |
| 技术 | Tier 1：pdf-lib + CDN fflate；每页/范围；>1 文件 ZIP |
| Title (en) | `Split PDF — Extract Pages Locally \| {Brand}` |
| Description 要点 | ≥120；按页或范围拆分、本地、样例、ZIP 规则 |
| Schema | WebApplication + BreadcrumbList |
| FAQ ≥3 | 是否上传；范围语法；何时 ZIP；加密 PDF |
| related | `merge-pdf`, `images-to-pdf` |
| 验收 | coverage:gate all；lint:seo；进页样例 ZIP/PDF |
| 工期粗估 | ~0.5–1d |
| 本地化核查 | `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `split-pdf`（主搜 split pdf / extract pages） |
| 主检索词 → title/H1 | split pdf / extract pages → H1「Split PDF — Extract Pages Locally」 |
| 次要关键词 → desc / FAQ / Use cases | page range→Rules+FAQ；zip→FAQ；local→desc；merge 互链 |
| 用户搜索习惯判断 | 搜「split pdf」要抽出页/拆成多文件；H1 结果向，不写「每页、范围、ZIP、1-based」参数枚举 |
| 优化摘要 | 去掉副标题参数罗列；主词 Extract Pages；范围/ZIP 落 Rules/FAQ |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=split-pdf --phase=0b`

## 交互规格（给实现用）

- 输入：1 个 PDF；模式 every-page | ranges；范围字符串 `1-3,5`
- 输出：单段→单 PDF；多段/每页→ZIP（`page-N.pdf` / `pages-A-B.pdf`）
- 核心规则：页码 1-based；copyPages；不上传
- 失败：未选文件；空/越界范围；加密/损坏
- 示例：3 页样例 + every-page → ZIP 三文件
- **进页样例**：`loadSample()` 生成 3 页 PDF，按每页拆分并启用 Download

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（非 YMYL）
- [x] `03-locale-briefs.md` 已填
