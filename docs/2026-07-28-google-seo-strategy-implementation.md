# Google SEO 策略与落地方案

**日期**: 2026-07-28  
**标签**: `SEO`, `Google`, `Information Gain`, `E-E-A-T`, `落地`  
**目标站点**: https://onlinefreetools.org

**关联文档**:
- [工具方向](./2026-07-28-tool-direction.md) — 做什么工具（A 浏览器 JS / B 场景桥接 / C 行业专属，三方向并列）
- [每工具开发与 SEO 方案](./2026-07-28-per-tool-dev-seo-plans.md) — 逐工具卡片
- [工具页面 SEO 规则](./SEO_TOOL_RULES.md) — description / FAQ / YMYL lint 硬规则
- [SEO 发布清单](./SEO_PUBLISH_CHECKLIST.md) — 发版与 GSC 操作
- [JS 工具包调研](./2026-07-09-js-tool-packages-survey.md) — 技术可行性（非 SEO 优先级）

> **本文职责**：回答「工具页如何符合最新 Google 规则，以及如何用 Information Gain 胜过同类页并落地」。  
> **不做工具选型清单**（见工具方向文档）。

---

## 1. 核心命题与站点定位

**合规（People-First / Spam / E-E-A-T）是底线；Information Gain 是相对竞品工具页的胜负手。**

差异化一句话：

> **多语言 + 教育式工具站** — 每个工具给出结果，并教会用户公式、步骤、场景与权威来源；本地处理、隐私友好；绑定行业或工作流语境，而非泛化空壳。

单页同时服务三方：

| 受众 | 页面须回答 |
|---|---|
| 用户 | 做什么？怎么用？结果可信吗？和我的行业/场景有何关系？ |
| Google 爬虫 | 主题是什么？与哪些查询匹配？与站内其他页关系？ |
| AI Overviews | 能否提取清晰步骤、公式、示例、边界作为引用片段？ |

**不做**：`llms.txt`、AI 专用 Schema、为 AI 阅读而刻意切块整站 — 见 [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)。

---

## 2. Google 2026 政策速查（单一权威）

写作与上线时以官方文档为准；下表为工具站摘要。

### 2.1 政策要点

| 来源 | 结论 | 对本站 |
|---|---|---|
| [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | 奖励为人而写；主要为操纵排名而批量生产违反 spam | 每工具须真实可交互 + 公式/步骤/示例 |
| [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | AI Overviews / AI Mode **无额外技术要求** | 标准 SEO + 深度内容即可 |
| [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)（含 **2026-05** 澄清） | Spam 定义覆盖操纵 **generative AI responses**（含 AI Overviews / AI Mode）；Scaled content abuse 仍禁止无价值批量页（含未实质编辑的 AI 生成） | 控节奏；禁空壳铺量；禁操纵 AI 摘要的伎俩 |
| E-E-A-T | Trust 对 YMYL 权重最高 | 健康/财务：免责 + 权威引用 |
| Core Web Vitals | LCP ≤ 2.5s、INP ≤ 200ms、CLS ≤ 0.1 | Tier 2 WASM 点击后加载 |
| [Link spam](https://developers.google.com/search/docs/essentials/spam-policies#link-spam) | 买卖链、交换链、PBN、灌链等违规 | 出站权威引用 + 白帽获链；见 §7 |

### 2.2 禁止清单

- 创建 `llms.txt` 或「AI 专用」Schema.org 类型  
- 伪造作者、虚假评论、虚假 `aggregateRating`  
- 无实质功能差异的同类工具铺量（doorway / scaled content）  
- 机器翻译后未经人工审核直接上线  
- 健康/财务给出医疗或投资建议而无免责声明  
- 仅对爬虫可见、对用户隐藏的 FAQ（cloaking）  
- Schema 文本与可见内容不一致或夸大  
- `dateModified` 无实质更新却刷新  
- 购买链接、强制交换链、目录灌链、PBN  

### 2.3 YMYL（健康 / 财务）

| 元素 | 健康 | 财务 |
|---|---|---|
| 免责声明 | 非医疗建议，咨询医生 | 非财务/投资建议，咨询专业人士 |
| 公式来源 | WHO、CDC 等 | Investopedia、公开会计准则等 |
| 适用范围 | 运动员/孕妇等局限 | 利率假设、固定期限等 |
| 字段 | `tool_*_disclaimer` + 建议 `tool_*_references` | 同左 |

硬规则见 [`SEO_TOOL_RULES.md`](./SEO_TOOL_RULES.md)。目录标记：`tool-catalog.json` 中 `ymyl: true`。

### 2.4 FAQ / HowTo 与富结果

- **保留**可见 FAQ 与一致的 FAQPage（及可选 HowTo）JSON-LD。  
- **不以** FAQ/HowTo 富结果展示或点击为 KPI（Google 已调整相关展示；问答仍为用户服务）。  
- 禁止仅爬虫可见的问答。

---

## 3. Information Gain 作战手册

**Information Gain（信息增益）**：相对 SERP 上同类工具页，用户读完本页后多带走的、可验证的信息。

### 3.1 九维差异（上线前至少勾选 3 项）

| # | 增益维度 | 本站做法 | 多数竞品缺失 |
|---|---|---|---|
| 1 | 公式 / 规则推导 | 写出计算式、字段映射、算法步骤 | 仅输入框 |
| 2 | 边界与失败案例 | 非法输入、局限、常见坑 FAQ | 无错误解释 |
| 3 | 行业或场景语境 | Use cases 绑定岗位/流水线（见工具方向） | 泛化「anyone can use」 |
| 4 | 对照表 | 模型价差、单位假设、引擎字符限制 | 无表 |
| 5 | 权威引用 | IETF / WHO / NIST / Schema.org 等可点外链 | 无 References |
| 6 | 本地隐私 | 浏览器处理；明确「不上传」 | 强制上传 |
| 7 | 多语言术语 | 10 语言本地化（人工审核） | 仅英文 |
| 8 | 完整数值示例 | ≥1 组 Input → Output（含边界例更佳） | 无具体数字 |
| 9 | 主题内链 | Related tools ≥ 2；同场景链互链 | 孤立页 |

### 3.2 每工具 IG 最低配额（硬性）

上线 PR 必须满足：

1. ≥ **3** 项 §3.1 增益，在 PR 中写明「页面哪一节体现」。  
2. 可见正文含 **How it works** + 至少 **1** 个完整 Example（计算/转换类另加 Formula/Rules）。  
3. **FAQ ≥ 3**（与 `SEO_TOOL_RULES` 一致；YMYL 须含局限性/免责类问题）。  
4. 至少 **1** 条可点击权威引用（YMYL 建议 ≥ 2），或说明「规范即页内规则表」。  
5. 文件/粘贴类工具必须有 **本地处理** FAQ 或声明。

### 3.3 反面模式（零增益）

| 反面 | 正确做法 |
|---|---|
| 只有输入框 | 补 How / Example / FAQ |
| FAQ 整段抄竞品 | 加入本地处理、行业边界、本站对照表 |
| 空壳长尾变体页 | 合并为一带多场景的真工具 |
| title 堆砌同义词 | 一个主关键词 + 品牌 |
| 首屏拉 5MB WASM | 点击后懒加载 |

### 3.4 AI Overviews 友好写法（仍是标准 SEO）

- 步骤用有序列表，动词开头，与 UI 一致。  
- 公式单独成段，符号与示例数值一致。  
- FAQ 一问一答、直接回答，避免「见上文」。  
- **不需要**额外 AI SEO 文件或特殊 Schema。

### 3.5 IG 预审模板（立项衔接）

```markdown
## IG 预审 — {Tool Name}
- [ ] 竞品 SERP 前 5 缺失什么？（列 3 条）
- [ ] 我们补哪 3 条增益？（对应 §3.1 编号）
- [ ] 权威来源 URL：
- [ ] 行业/场景 Use case 文案草稿：
- [ ] 边界/失败案例草稿：
```

---

## 4. 主题集群（最小必要）

主题集群服务于 **内链与 Information Gain**，不是为了铺工具数量。工具「做哪些」见 [工具方向](./2026-07-28-tool-direction.md) §5.3。

| 集群 ID | 支柱页（若做） | 说明 |
|---|---|---|
| C01 健康 | `/topics/health-calculators` | YMYL |
| C02 财务 | `/topics/finance-calculators` | YMYL |
| C03 数学统计 | `/topics/math-calculators` | 须绑定场景，非泛化 |
| C04 测量单位 | `/topics/unit-converters` | **默认不铺超市** |
| C05 开发者 | `/topics/developer-tools` | AI/数据交换主战场 |
| C06 文档媒体 | `/topics/file-tools` | Tier 2 谨慎 |
| C07 日期时间 | `/topics/date-time-tools` | 暂缓 |
| C08 设计 SEO | `/topics/design-seo-tools` | 站长工具 |

支柱页若做须含：主题简介、工具列表、场景对比表、CollectionPage JSON-LD、hreflang。  
子工具：Related tools ≥ 2，优先同行业或同一场景链上下游。

---

## 5. 单工具页实施规范

### 5.1 页面结构（自上而下）

```
Header
├─ 面包屑（Home → Topics? → Tool）
├─ H1 + 一句话摘要
├─ 【工具交互区】← 首屏，满足即时意图
├─ H2 How it works
├─ H2 Formula / Rules / Algorithm（计算与转换类）
├─ H2 Example
├─ H2 Use cases（行业或场景，2–3 条）
├─ H2 FAQ
├─ H2 Related tools
├─ H2 References
└─ Disclaimer（YMYL 必备）
Footer
```

原则：仅一个 H1；交互区尽量首屏可见；Canvas/纯图结果须另附可索引文字示例。

### 5.2 与 i18n / 代码字段

| 区块 | 字段 / 实现 | 要求 |
|---|---|---|
| `<title>` | `tool_*_title` + brand | 主词靠前，约 50–60 英文字符 |
| description | `tool_*_description` | 80–160 字符；步骤/公式 + 示例（`lint:seo`） |
| 正文 | `tool_*_article` 或分节 | ≥ 约 300 词等效可见说明 |
| How 步骤 | article 内 `ol` 或分字段 | 3–5 步 |
| FAQ | `tool_*_faq_qN` / `tool_*_faq_aN` | ≥ 3 |
| References | `tool_*_references` | YMYL 建议必有 |
| Disclaimer | `tool_*_disclaimer` | `ymyl: true` 必有 |
| Related | `tool-catalog.json` → `related` | ≥ 2 |
| JSON-LD | `src/pages/site/toolContent.ts` | BreadcrumbList + WebApplication |
| hreflang | `renderLayout` alternates + x-default | 与 sitemap 一致 |

### 5.3 Meta 要点

- **Title**：`{Primary Keyword + Action} | {Brand}` — 不堆砌；各语言本地化。  
- **Description 三段式**：`{一句话价值} + {Process/Formula} + {Example}`  
- **Canonical**：apex `https://onlinefreetools.org`；默认语无前缀；其他 `/{lang}/tools/{slug}`。  
- **slug**：英文 kebab-case，跨语言稳定。

### 5.4 Schema 映射

| 工具类型 | 建议 Schema | 禁止 |
|---|---|---|
| 交互工具 | `WebApplication` +（可选）步骤说明 | 虚假 `aggregateRating` |
| 教程型 `how-to-calculate-*` | 可见步骤 + 与 WebApplication 一致 | 夸大功效 |
| 支柱/集合页 | `CollectionPage` / `ItemList` | — |
| 全站导航 | `BreadcrumbList` | — |

规则：JSON-LD 每句须能在页面上找到对应可见文案。实现见 `src/pages/site/toolContent.ts`。

### 5.5 多语言 SEO

- 10 语言是资产：`title` / `h1` / `description` / FAQ 本地化。  
- 工作流：英文母版（公式+步骤+示例）→ **人工翻译审核** → `lint:seo` → `build:site`。  
- 禁止 GPT 批量翻译直出。

### 5.6 三种工具类型差异（摘要）

| 类型 | Formula/Rules | Example 重点 | Schema |
|---|---|---|---|
| Calculator | 必备公式 | 数值 Input→Output | WebApplication |
| Converter / Bridge | 字段映射 / 算法步骤 | 前后对比样例 | WebApplication |
| Checker / Validator | 规则与错误路径 | 通过 vs 失败用例 | WebApplication |

---

## 6. 技术 SEO 现状与剩余任务

### 6.1 现状快照（2026-07-28）

以下以代码与发布清单为准（覆盖旧分析文档中过时的「sitemap 仅 2 URL / 无 Schema」描述）：

| 要素 | 状态 |
|---|---|
| 多语言 URL / hreflang / canonical / x-default | ✅ |
| 自动 sitemap（工具 × 语言 + hreflang） | ✅ `build:site` |
| Favicon / OG 资产 | ✅ |
| `/en` → 无前缀 301 | ✅ |
| About 页 | ✅ |
| 工具页可见 FAQ / YMYL / Related tools | ✅ |
| BreadcrumbList + WebApplication JSON-LD | ✅ |
| `tool-catalog.json` + `lint:seo` | ✅ |
| Google Search Console | ⚠️ 需确认属性验证与 sitemap 提交 |
| 主题支柱页 `/topics/*` | ❌ 未做（非阻塞新工具） |
| Core Web Vitals 基线测量 | ⚠️ 待系统测量 |
| GA4 | 可选 P2 |

### 6.2 剩余优先级

| 优先级 | 任务 |
|---|---|
| P0 | 确认 GSC 验证 + 提交 `https://onlinefreetools.org/sitemap.xml` |
| P0 | 新工具严格走 §8 Checklist + IG ≥ 3 |
| P1 | 存量页补齐公式/示例/边界/References（按九维审计） |
| P1 | CWV：尤其未来 Tier 2 WASM 工具 |
| P2 | `/topics/` 支柱页（与工具方向垂直对齐后再做） |
| P2 | 自定义 404、CSP 等增强 |

### 6.3 滥用风险立场

当前站点风险总体 **低**（无付费链、无 UGC 灌链、工具可交互）。主要风险来自 **扩容失控**（机翻堆页、空壳变体）— 用发布节奏与 `lint:seo` + 人工抽查控制。

### 6.4 验证工具

| 检查 | 工具 |
|---|---|
| 描述与 FAQ | `npm run lint:seo` |
| 结构化数据 | [Rich Results Test](https://search.google.com/test/rich-results) |
| CWV | PageSpeed Insights |
| 索引与国际定向 | Google Search Console |

---

## 7. 链接策略（摘要）

完整战术（外展邮件、Awesome List、日历等）原详案已收敛为本节 + 历史文件 stub。执行以本节为准。

### 7.1 优先级

```
1. 出站权威引用（References）     ← 低成本、高 Trust
2. 可链接资产（真工具 + 教程深度）
3. 白帽获链（资源页、开源、社区、断链修复）
✗ 不做：买链、交换链、目录灌链、PBN
```

### 7.2 出站

- References 链向 WHO / CDC / IETF / NIST / Schema.org / Google Search Central / Investopedia 等。  
- 用户提交的 URL（若有）使用 `rel="nofollow"` 或 `ugc`。  
- 付费/ affiliate 使用 `rel="sponsored"`（本站当前无）。

### 7.3 入站

- 自然获得优先；冷启动可每月少量高质量外展（教育站、相关 awesome 列表）。  
- 锚文本自然，避免关键词堆砌。  
- Disavow 仅在 Manual Action 或明显 spam 攻击时使用。

官方依据：[Link spam](https://developers.google.com/search/docs/essentials/spam-policies#link-spam)、[Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)。

---

## 8. 发布节奏、Checklist 与 KPI

### 8.1 节奏

- 先保证收录管道（sitemap / GSC），再每周 **1–2** 个高质量工具（含 10 语）。  
- 稳定期把时间花在深化 IG，而非加薄页。  
- `dateModified` 仅实质更新时变更。

### 8.2 上线 Checklist（PR 合并前）

- [ ] `tool-catalog.json` / 路由注册完成  
- [ ] 10 语言 title / description / article（或等价）齐全  
- [ ] `npm run lint:seo` 通过  
- [ ] IG ≥ 3 项（§3.1）已在 PR 写明  
- [ ] How + Example（+ Formula 如适用）可见  
- [ ] FAQ 数量达标；YMYL 有 disclaimer + references  
- [ ] Related tools ≥ 2（场景链优先）  
- [ ] JSON-LD 与可见内容一致；无虚假评分  
- [ ] canonical / hreflang / x-default 正确  
- [ ] sitemap 构建后含本工具全语言 URL  
- [ ] 文件/粘贴类：本地处理声明  
- [ ] `datePublished` / `dateModified` 真实  

发版操作另见 [`SEO_PUBLISH_CHECKLIST.md`](./SEO_PUBLISH_CHECKLIST.md)。

### 8.3 30 天复盘模板

```markdown
## {Tool Name} — 30 天 SEO 复盘
- 索引状态：
- Top 5 展示查询：
- CTR / 平均排名：
- IG 是否足够：是/否 — 缺哪条 §3.1
- 下月动作：
```

### 8.4 KPI（站点级）

| 指标 | 说明 |
|---|---|
| 索引覆盖 | 工具 × 语言 URL 进入索引 |
| 长尾查询 | 出现行业/场景词（非仅品牌） |
| 质量 | 无 Manual Action；抽查多语言非机翻感 |
| CWV | 关键工具页达标 |
| 富结果 | **非 KPI**（FAQ/HowTo） |

---

## 9. 文档分工

| 文档 | 职责 |
|---|---|
| **本文** | Google 合规、IG、单页模板、技术现状、链接摘要、Checklist |
| `SEO_TOOL_RULES` | lint 硬规则（最短约束） |
| `SEO_PUBLISH_CHECKLIST` | 发版 / GSC / 质量抽查 |
| 工具方向 | 立项与工具清单 |
| 每工具方案 | 开发 + SEO 卡片 |

**已合并（历史文件已移至 [bak/](./bak/)）**：`tool-seo-strategy`、`single-tool-page-seo`、`SEO_ANALYSIS_PLAN`、`external-link-strategy`、`online-tools-competitor-roadmap`。

---

## 10. 结论

合规底线 + 每页 ≥3 条可验证 Information Gain + 行业/场景语境 + 多语言教育式说明 = 可排名、可被引用的工具页。

近期执行：新工具严格走 §8.2；存量页按 §3.1 补齐；工具选型只看 [工具方向](./2026-07-28-tool-direction.md)。

### 参考（官方）

- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)  
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)  
- [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies)  
- [Search quality rater guidelines](https://developers.google.com/search/docs/fundamentals/search-quality-rater-guidelines-overview)  
- [Schema.org WebApplication](https://schema.org/WebApplication)

---

*维护：每月根据 GSC 抽检 3 个工具页的 IG；政策变更时更新 §2。*
