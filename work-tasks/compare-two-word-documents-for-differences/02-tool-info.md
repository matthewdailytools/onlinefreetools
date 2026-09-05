# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`compare-two-word-documents-for-differences`  
**路径**：`/tools/compare-two-word-documents-for-differences`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词：compare two Word documents for differences；word compare online；compare two documents（有意不满足）
- 用户真实任务：两份 .docx 看出文字改了什么。
- [x] 竞品：Online DOCX Diff、Microsoft 审阅-比较；工具 title 多泛 Online。
- [x] 缺口：不是修订轨；样式/页眉丢弃；加密失败。
- [x] 增益：Rules 抽段落文本；对照 Microsoft 比较；边界损坏/加密；隐私；十语；Example；Related。
- [x] 长尾：PDF 混搜不进攻。
- [x] 权威：https://github.com/mwilliamson/mammoth.js ；https://github.com/kpdecker/jsdiff
- [x] Use cases：合同改稿、会议纪要、作业 Word。
- [x] 边界：.doc 老格式、加密、仅图片无字。
- [x] Example：两份短 docx，一句不同。
- [x] Related：text-diff、compare-two-text-files-online

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 规则 | mammoth 抽可见文本再行/词 diff |
| 2 | 边界 | 加密/损坏/无文字 |
| 4 | 对照 | 不是 Word 审阅窗格 |
| 5 | 权威 | mammoth、jsdiff |
| 6 | 隐私 | 文件留在设备 |
| 7 | 多语言 | 03 |
| 8 | 示例 | 进页样例 |
| 9 | 内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 | text-compare |
| 技术 | mammoth CDN + jsdiff；opts |
| Title (en) / H1 | **Compare two Word documents for differences** |
| Description 要点 | Choose two .docx, extract visible text, highlight wording changes. Files stay on the device and are not uploaded. Not Microsoft Track Changes. Example: one sentence differs. |
| FAQ | 上传？是不是审阅-比较？样式丢了？PDF？ |
| related | text-diff, compare-two-text-files-online |
| 验收 | coverage 0b → verify:tool |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | `compare-two-word-documents-for-differences` 对齐长尾 kebab |
| 主检索词 → title/H1 | **Compare two Word documents for differences** |
| 次要关键词 → desc / FAQ / Use cases | compare two word documents / word compare online → desc/FAQ；compare two documents online → FAQ 有意不满足（混 PDF） |
| 用户搜索习惯判断 | 要看出 Word 里改了哪些字，不是泛 documents |
| 优化摘要 | 锁定 Planner 原句；FAQ 划清 Microsoft 比较与 PDF |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/text-compare/2026-09-01-text-compare-topic.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| compare two word documents for differences | build 主词 | H1 | 两 docx → 文本 diff | |
| compare two word documents / word compare online | absorb | desc/FAQ | 同上 | |
| compare two documents online | 有意不满足 | FAQ | 只要 Word | 混 PDF |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：选两份 Word 即抽文本并出差异；有意不满足 PDF/修订轨 |
| 主词搜索者任务 | 两份 Word 看出文字差 |
| Ads/Planner 长尾任务 | 主词能办成；documents 泛词 FAQ 划界 |
| 满足之处 | loadSample 生成两份最小 docx |
| 超出 / 应划边界 | 不模仿审阅窗格；不比 PDF |
| 缺口与已做优化 | How/FAQ 写清抽文本 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：两个 file，accept `.docx`；解析前按完整 `.docx` 后缀校验，拒绝 `report.docx.exe` 一类伪装名称
- 输出：抽出的纯文本 diff 高亮
- 核心：mammoth extractRawText → jsdiff
- 失败：后缀不是 `.docx`、加密/损坏、无可抽取文本、库失败
- **进页样例**：内存生成两份最小 OOXML 再 mammoth+diff
- **实现防呆**：opts；`\\w`

## 页面模块清单（与 tool-creation 对齐）

- [ ] H1 + 摘要
- [ ] 首屏交互（进页样例）
- [ ] How / Rules / Example / Use cases / FAQ / Related / References
- [ ] `03-locale-briefs.md` 已填
