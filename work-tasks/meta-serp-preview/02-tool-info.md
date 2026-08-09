# 02 — 工具信息定稿

**状态**：`ready`
**slug**：`meta-serp-preview`
**路径**：`/tools/meta-serp-preview`
**主方向**：A（浏览器 JS 能力）+ B3 场景
**YMYL**：否

> IG：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 权威：Google Search Central — [控制搜索结果标题](https://developers.google.com/search/docs/appearance/title-link) / [meta description](https://developers.google.com/search/docs/appearance/snippet)。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. SERP preview / meta description preview
  2. title length checker / title tag preview
  3. Google snippet preview
  4. meta 标题长度 / 描述长度检测（中文）
  5. 搜索结果预览 / 截断（场景，不拆页）
- 用户真实任务：写完 title 与 description 后，在发布前看它在 Google 桌面与移动搜索结果里会显示多少、会不会被截断。
- [x] 竞品 SERP 前 5–10 都提供了什么？URL 输入框、title/desc 文本框、桌面预览图、字符计数。多数只做字符数，不做像素估算。
- [x] 它们没讲清什么？（≥3 条缺口）
  1. 像素估算与字符估算的差别、何时会先截断（视觉宽度 vs 字符数）
  2. 移动端标题截断与桌面端不同
  3. Google 改标题/描述的规则边界（不必逐字一致）
  4. 结构化数据富结果的占位提示
- [x] 我们补哪 ≥3 条增益？
  - **① 公式/规则**：像素宽度估算规则 + Google 截断近似阈值（桌面约 600px 标题 / 移动约 460px；描述约 2 行）
  - **② 边界**：空输入、超长、宽字符（CJK）与窄字符宽度差异的 FAQ
  - **⑤ 权威引用**：Search Central title-link / snippet 文档
  - **⑧ 数值示例**：固定样例 title + description → 显示截断点
  - **⑨ Related ≥2**
- [x] 长尾：合并进本页（title 长度 / desc 长度 / 字符 vs 像素 一带多场景，禁拆 URL）
- [x] 权威来源 URL：
  - https://developers.google.com/search/docs/appearance/title-link
  - https://developers.google.com/search/docs/appearance/snippet
- [x] 行业/场景 Use case 文案草稿：发布前预览；A/B 两个 title 并排比较（同页两个输入）；中文标题的像素截断
- [x] 边界/失败案例草稿：title 空 / desc 空；超长文本；emoji 与 CJK 宽度差异
- [x] 结果区信息如何落到可索引 Example / FAQ：固定样例 + FAQ（为什么字符数一样显示长度不同）
- [x] Related / 主题内链计划（≥2）：`website-headers`、`indexnow`、`core-web-vitals-checker`

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 像素估算规则 + 桌面/移动截断近似阈值表 |
| 2 | 边界/失败 | FAQ：空输入、超长、CJK/emoji 宽度 |
| 3 | 场景语境 | Use cases：发布前预览 / 双 title 对比 / 中文截断 |
| 5 | 权威引用 | Search Central title-link + snippet |
| 8 | 数值示例 | 固定样例 Input→Output |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | SEO where2use · Meta·SERP 模块 · P0 S1 |
| 场景与行业 | 站长 / SEO / 内容运营：发布前标题与描述预览 |
| 技术 | Tier 0；纯浏览器 Canvas `measureText` + 近似表；`localProcessing: true` |
| Title (en) | Google SERP Preview — Check title & description snippets |
| Description 要点 | A title or description that gets cut off in the results can quietly cost you clicks from Google. Paste a title and description to preview Google search result truncation on desktop and mobile. Enter title, description, and optional URL; see character counts, estimated pixel widths, and snippet cut points; compare two titles side by side. Everything runs in your browser—nothing is uploaded. Example: a 60-char ASCII title and a 30-char CJK title can reach the pixel limit at different counts. |
| Schema | WebApplication + BreadcrumbList（与可见文案一致） |
| FAQ ≥3 | 像素 vs 字符；为什么同字符数显示不同；移动与桌面差异 |
| related | website-headers, indexnow, core-web-vitals-checker |
| 验收 | coverage:gate all；lint:seo；进页样例；README |
| 工期粗估 | 0.5–1d（含 10 语） |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | 保留 `meta-serp-preview`（检索主词 SERP preview + meta description；禁拆 title/desc 两 URL） |
| 主检索词 → title/H1 | **Google SERP Preview** — Check title & description snippets（H1 含主词 SERP Preview） |
| 次要关键词 → desc / FAQ / Use cases | meta description preview → desc/FAQ；title length → desc/FAQ；Google snippet → desc；搜索结果预览 → Use cases/FAQ；CJK 截断 → FAQ |
| 用户搜索习惯判断 | en 搜 “google serp preview / meta description preview / title length checker”；zh 搜「标题长度检测 / 描述预览 / 搜索结果预览」 |
| 优化摘要 | H1 结果向「Check title & description snippets」；desc 含像素/字符双维度 + 本地处理；次词落点 FAQ/Use cases |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## 交互规格（给实现用）

- 输入：title（最多 ~110 字符输入上限不硬切，仅提示）、description（多行）、URL（选填）
- 输出：桌面预览 + 移动预览两卡片；每卡片显示字符数与估算像素宽，超出阈值处以截断点样式显示
- 核心规则 / 算法：
  - 桌面标题：Google 约 600px 视口 → 超出按约 1.0–1.1x 字符宽估算截断
  - 移动标题：约 460px
  - description：桌面/移动均约 2 行截断（宽 ~600px / ~460px）
  - 宽度用 Canvas `measureText`；CJK 宽度近似 ≈ 1.0 em，ASCII ≈ 0.5–0.6 em（表驱动 fallback）
- 失败与边界行为：title/desc 空 → 提示；非法代理字符 → 按替代字符处理；不做「分数」，只展示与阈值差多少字符/像素
- 示例 Input → Output：title「Meta SERP Preview — How to Preview Google Title & Description Truncation Online」→ 桌面显示到约 57 字符处截断 + “…”；移动更早
- **进页样例（必填）**：`loadSample()` 填默认 title + desc + URL，自动跑出两预览结果；与 H2 Example 文案一致

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成上一节「清单前检索覆盖优化」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer — 非 YMYL
- [x] `03-locale-briefs.md` 已填（实现十语前）
