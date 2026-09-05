# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`make-pdf-flipbook`  
**路径**：`/tools/make-pdf-flipbook`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图：make a pdf flipbook; related Planner absorb terms
- 用户真实任务：Render pages; CSS flipbook preview; optional HTML export.
- [x] 竞品：iLovePDF / SmallPDF 类同意图页
- [x] 缺口：本地处理边界、失败案例、与邻页划界
- [x] 增益：Rules 边界、隐私、Example 自动样例、Related ≥2
- [x] Related：pdf 簇工具

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 规则 | 作业规则与失败模式 |
| 2 | 边界 | 加密/扫描/格式限制 |
| 6 | 本地隐私 | 文件不上传服务器 |
| 8 | 数值示例 | loadSample 自动演示 |
| 9 | 主题内链 | related PDF slugs |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | pdf scene N20 |
| 技术 | pdf-lib / pdf.js CDN；`page.style: opts` |
| Title (en) / H1 | **Make a PDF flipbook** |
| Description 要点 | Render pages; CSS flipbook preview; optional HTML export. Files stay on your device; not uploaded to a server. Example in page. |
| FAQ | ≥3 场景/边界/邻页划界 |
| related | merge-pdf, compress-pdf, pdf-to-jpg 等按场景选 2+ |
| 验收 | verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `make-pdf-flipbook` |
| 主检索词 → title/H1 | **Make a PDF flipbook** |
| 次要关键词 → desc / FAQ / Use cases | Planner 近义 absorb 进 FAQ（见 pdf keyword planner §5） |
| 用户搜索习惯判断 | 场景句 H1；禁品类头词 |
| 优化摘要 | 对齐 pdf planner 分场景 slug；跳过 SERP |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由 |
|---|---|---|---|---|
| make a pdf flipbook | build 主词 | H1 | 进页默认该场景 | |
| 近义 absorb | absorb | FAQ/desc | 同控件 | |

- [x] 交互规格已按上表补齐能力

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-03 |
| 总判 | 满足：进页即 make a pdf flipbook 场景 |
| 主词搜索者任务 | Render pages; CSS flipbook preview; optional HTML export. |
| Ads/Planner 长尾任务 | 主词能办成 |
| 满足之处 | canvas 翻页预览 + page-turn 动效 + 内嵌 PDF 的独立 HTML 导出 + loadSample |
| 超出 / 应划边界 | 不提供托管链接、分析、音频、页面编辑或 SaaS 发布服务 |
| 缺口与已做优化 | 2026-09-05 将原“仅预览并下载原 PDF”补成真实 HTML flipbook 导出 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入/输出：输入 PDF；输出带前后翻页控件的预览，并可下载内嵌 PDF 字节的独立 HTML。
- 核心规则 / 算法：PDF.js canvas 渲染；CSS 短翻页动效；PDF 以 Base64 嵌入导出 HTML。
- 失败与边界行为：加密/损坏文件 → 可读错误；扫描件可显示；导出文件打开时需联网加载 PDF.js。
- 示例 Input → Output：一页 “Flipbook page one.” PDF → 可预览并下载 `pdf-flipbook.html`。
- **进页样例**：loadSample() 自动跑出可见结果
- **实现防呆**：opts；`\\w` 转义；lint:tool-page

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
- [x] Disclaimer（YMYL 按需）
- [x] `03-locale-briefs.md` 已填
