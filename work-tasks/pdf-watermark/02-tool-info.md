# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`pdf-watermark`  
**路径**：`/tools/pdf-watermark`  
**主方向**：A（A.5.2 PDF · 本地优先）  
**YMYL**：否  
**Locale briefs**：见同夹 `03-locale-briefs.md`（状态 `briefs-ready`）

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. pdf watermark
  2. add watermark to pdf
  3. stamp pdf confidential
  4. pdf text watermark
  5. watermark pdf online local
- 用户真实任务：给合同/样稿盖 DRAFT/CONFIDENTIAL 再外发。
- [x] 竞品：iLovePDF 等上传型同类能力；本站强调浏览器本地
- [x] 缺口：不上传边界；加密/损坏失败；与邻近工具分工；固定 Example；有限能力诚实声明
- [x] 增益：Rules；边界 FAQ；Use cases；References；十语；Example；Related
- [x] 长尾：**合并**进本页模块，不拆近义 URL
- [x] 权威来源：https://pdf-lib.js.org/
- [x] Use cases：办公 / 运营 / 学生或站长（见卡片）
- [x] 边界：加密 PDF；损坏；能力局限（见 FAQ）
- [x] Example：与进页样例一致
- [x] Related：`add-watermark`, `pdf-page-numbers`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Rules |
| 2 | 边界/失败 | FAQ + UI |
| 3 | 场景语境 | Use cases ×3 |
| 5 | 权威引用 | References |
| 6 | 本地隐私 | How/FAQ（设备 + 不上服务器） |
| 7 | 多语言 | `03` |
| 8 | 数值示例 | Example |
| 9 | 主题内链 | related |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | A.5.2 · P1 · 清单 #56 · `pdf` |
| 场景与行业 | 办公、运营、学生/站长 |
| 技术 | pdf-lib drawText/drawImage；位置/透明度/旋转；related add-watermark。 |
| Title (en) | `PDF Watermark — Stamp Text on Every Page Locally \| {Brand}` |
| Description 要点 | ≥120；主任务 + 设备本地不上服务器 + 样例 + 边界 |
| Schema | WebApplication + BreadcrumbList |
| FAQ ≥3 | 是否上传；与图片水印工具区别；能否去水印（否）；加密失败 |
| related | `add-watermark`, `rotate-pdf`（`pdf-page-numbers` 未上线，按 spec 回退） |
| 验收 | coverage:gate all；lint:seo；进页样例可下载 |
| 工期粗估 | ~0.5–1d |
| 本地化核查 | `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | 保留 `pdf-watermark`（清单与 A.5.2 一致；不拆近义薄页） |
| 主检索词 → title/H1 | pdf watermark / add watermark to pdf → H1「PDF Watermark — Stamp Text on Every Page Locally」 |
| 次要关键词 → desc / FAQ / Use cases | confidential draft stamp→Use cases；image watermark→FAQ；add-watermark 图片工具→FAQ；local→FAQ |
| 用户搜索习惯判断 | 用户搜 pdf watermark 要盖章后的 PDF；H1 结果向，控件参数不进副标题。 |
| 优化摘要 | 去掉 Text/Image/Opacity/Position 枚举；改为 Stamp Text…；图片水印落 FAQ。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=pdf-watermark --phase=0b`

## 交互规格（给实现用）

- 输入：1 PDF + 水印参数（可选图）
- 输出：带水印 PDF
- 核心规则：pdf-lib drawText/drawImage；位置/透明度/旋转；related add-watermark。
- 失败：加密/损坏可读错误；能力局限见 FAQ；~25MB 软警告
- 示例：2 页样例 + 文字 DRAFT → watermarked.pdf 可下载
- **进页样例**：`loadSample()` — 2 页样例 + 文字 DRAFT → watermarked.pdf 可下载

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
