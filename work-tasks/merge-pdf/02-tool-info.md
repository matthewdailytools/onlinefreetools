# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`merge-pdf`（不新建 `combine-pdf` / `pdf-joiner` 近义薄页）  
**路径**：`/tools/merge-pdf`  
**主方向**：A（A.5.2 PDF · 本地优先）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. merge pdf / 合并 PDF  
  2. combine pdf / join pdf files  
  3. merge multiple pdf online（场景 → Use cases，不拆页）  
  4. pdf merge local / no upload（隐私 → FAQ）  
  5. reorder pdf before merge（控件能力 → Rules，不写进 H1 参数腔）
- 用户真实任务：把合同扫描件、附件、报告等多份 PDF 按顺序合成一份再发送或归档。
- [x] 竞品：上传合并、排序、下载；iLovePDF 等云端处理
- [x] 缺口：本地不上传边界；加密/损坏失败说明；与「多图转 PDF」分工；固定 Example
- [x] 增益：Rules 顺序规则；边界 FAQ；Use cases；References pdf-lib；十语；Example；Related
- [x] 长尾：**合并**进本页（排序/下载），不拆近义 URL
- [x] 权威来源：https://pdf-lib.js.org/
- [x] Use cases：办公合并附件；学生作业合订；运营资料包
- [x] 边界：不足 2 文件；加密 PDF；损坏；超大软警告
- [x] Example：两份样例 PDF → 一份 merged.pdf
- [x] Related：`split-pdf`, `images-to-pdf`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules：列表序=页序；copyPages；不上传 |
| 2 | 边界/失败 | FAQ + UI：加密/损坏/少于 2 份 |
| 3 | 场景语境 | Use cases ×3 |
| 5 | 权威引用 | pdf-lib |
| 6 | 本地隐私 | How/FAQ |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | Example：2→1 |
| 9 | 主题内链 | related |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | A.5.2 · P0 · 清单 #50 · `pdf` |
| 场景与行业 | 办公、运营、学生 |
| 技术 | Tier 1：CDN pdf-lib@1.17.1；`copyPages`；排序列表；不上传 |
| Title (en) | `Merge PDF — Combine Files in Your Browser \| {Brand}` |
| Description 要点 | ≥120；多文件排序合并、本地、样例两份→一份、加密失败说明 |
| Schema | WebApplication + BreadcrumbList |
| FAQ ≥3 | 是否上传；加密 PDF；与 images-to-pdf 区别；顺序规则 |
| related | `split-pdf`, `images-to-pdf` |
| 验收 | coverage:gate all；lint:seo；进页样例可下载 |
| 工期粗估 | ~0.5–1d |
| 本地化核查 | `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `merge-pdf`（主搜 merge pdf / combine pdf；与 split 对称） |
| 主检索词 → title/H1 | merge pdf / combine → H1「Merge PDF — Combine Files in Your Browser」 |
| 次要关键词 → desc / FAQ / Use cases | join pdf→desc；local/no upload→FAQ；reorder→Rules；images→FAQ 分工 |
| 用户搜索习惯判断 | 用户搜「merge pdf online」要结果（合成一份）；H1 结果向，不写「排序、上移、ZIP」参数目录 |
| 优化摘要 | 初稿偏「Merge / Join / Reorder / Download」枚举；改为 Combine Files in Your Browser；次词落 desc/FAQ |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=merge-pdf --phase=0b`

## 交互规格（给实现用）

- 输入：≥2 个 PDF；列表上移/下移/删除
- 输出：单个 `merged.pdf`
- 核心规则：顺序=列表序；pdf-lib copyPages；不上传
- 失败：<2 文件；加密/损坏可读错误；~25MB/文件软警告
- 示例：两份 1 页样例 → 2 页合并 PDF
- **进页样例**：`loadSample()` 生成两份迷你 PDF，自动合并，Download 可用

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
