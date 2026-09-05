# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`convert-pdf-to-dwg`  
**路径**：`/tools/convert-pdf-to-dwg`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图：convert pdf to dwg; related Planner absorb terms
- 用户真实任务：Extract vector paths to SVG/DXF best-effort; CAD limits honest.
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
| 集群 / 优先级 | pdf scene N22 |
| 技术 | pdf-lib / pdf.js CDN；`page.style: opts` |
| Title (en) / H1 | **Convert PDF to DWG** |
| Description 要点 | Extract vector paths to SVG/DXF best-effort; CAD limits honest. Files stay on your device; not uploaded to a server. Example in page. |
| FAQ | ≥3 场景/边界/邻页划界 |
| related | merge-pdf, compress-pdf, pdf-to-jpg 等按场景选 2+ |
| 验收 | verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-03 |
| slug 结论 | 保留 `convert-pdf-to-dwg` |
| 主检索词 → title/H1 | **Export PDF text to DXF for AutoCAD**；DWG 主词仅作未覆盖边界 |
| 次要关键词 → desc / FAQ / Use cases | Planner 近义 absorb 进 FAQ（见 pdf keyword planner §5） |
| 用户搜索习惯判断 | 场景句 H1；禁品类头词 |
| 优化摘要 | 对齐 pdf planner 分场景 slug；跳过 SERP |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由 |
|---|---|---|---|---|
| convert pdf to dwg | defer | FAQ/边界说明 | 未覆盖专有 DWG 转换 | 当前输出 ASCII DXF，只含 TEXT 与页框 LINE |
| 近义 absorb | absorb | FAQ/desc | 同控件 | |

- [x] 交互规格已按上表补齐能力

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-03 |
| 总判 | 不覆盖专有 DWG；页面仅办成 PDF 文本到 ASCII DXF 交换文件 |
| 主词搜索者任务 | 将 PDF 图形、文字与几何转换为可编辑 DWG 或高保真 CAD。 |
| Ads/Planner 长尾任务 | DWG 主词尚未办成，继续 defer |
| 满足之处 | 从文本层生成 DXF TEXT，并为每页添加矩形 LINE 页框 |
| 超出 / 应划边界 | 不写 DWG 二进制，不描摹矢量路径，不 OCR 扫描图 |
| 缺口与已做优化 | 十语 H1 明示 DXF 与文本范围，FAQ 保留 DWG/扫描件边界 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入/输出：输入带文本层的 PDF；输出 AutoCAD 可打开的 ASCII `.dxf`。
- 核心规则 / 算法：PDF.js 提取文字位置，写入 DXF TEXT；每页仅补一个矩形 LINE 页框。
- 失败与边界行为：无文本层、加密或损坏文件 → 可读错误；不生成 DWG。
- 示例 Input → Output：包含 “Hello PDF to DWG sample.” 的一页 PDF → ASCII DXF TEXT。
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
