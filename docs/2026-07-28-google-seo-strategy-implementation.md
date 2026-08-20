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
- Agent 镜像：`.cursor/rules/seo-google-policy.mdc`（最高合规）及 `tool-i18n-seo` / `tool-i18n-localization` / `tool-creation`
- **选题执行（2026-08-20）**：[seo/2026-08-20-long-tail-gap-strategy.md](./seo/2026-08-20-long-tail-gap-strategy.md) — 回避已占位大词，主攻竞品未覆盖长尾

> **权威序**：Google Search Central 现行文档 → 运行代码 / `lint:seo` → `.cursor/rules/*` → 本文（须对齐前三者）。  
> **本文职责**：回答「工具页如何符合最新 Google 规则，以及如何用 Information Gain 胜过同类页并落地」。  
> **IG 定位**：内容策略原则（对齐 Helpful Content），**不是**已确认的独立排名因子；长尾默认「一带多场景」，禁止空壳变体铺量（§3.0、§3.3）。  
> **选题**：不与流量站抢已占位大词；缺口长尾见上链策略文。  
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

写作与上线时以 **Google Search Central 现行官方文档**为准（仓库镜像：`.cursor/rules/seo-google-policy.mdc`）。下表为工具站摘要。

### 2.1 政策要点

| 来源 | 结论 | 对本站 |
|---|---|---|
| [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | 奖励为人而写；主要为操纵排名而批量生产违反 spam | 每工具须真实可交互 + 公式/步骤/示例 |
| [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features) | AI Overviews / AI Mode **无额外技术要求**；须 indexed 且 snippet-eligible | 标准 SEO + 深度内容即可；勿 `nosnippet` 阻断 |
| [Optimizing for generative AI features](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide)（**2026-05** 官方指南） | AI features 用相同索引与排名系统；明确可忽略 chunking / `llms.txt` / AI 专用改写 / AI 专用 schema / 刷不实提及 | 做扎实基础 SEO，不做 AEO/GEO hack |
| [Spam policies](https://developers.google.com/search/docs/essentials/spam-policies)（含 **2026-05** 澄清） | 现行三新政（2024-03 起执行）：**scaled content abuse**（方法无关，禁无价值批量页含未实质编辑的 AI 生成）、**site reputation abuse**（禁借本站排名的第三方寄生页，2025-01 澄清不论是否有第一方监督）、**expired domain abuse**；spam 定义覆盖操纵 **generative AI responses** | 控节奏；禁空壳铺量；禁操纵 AI 摘要伎俩；第三方/赞助内容逐一评估 |
| E-E-A-T | Trust 对 YMYL 权重最高 | 健康/财务：免责 + 权威引用 |
| Core Web Vitals | LCP ≤ 2.5s、INP ≤ 200ms、CLS ≤ 0.1 | Tier 2 WASM 点击后加载 |
| [Link spam](https://developers.google.com/search/docs/essentials/spam-policies#link-spam) | 买卖链、交换链、PBN、灌链等违规 | 出站权威引用 + 白帽获链；见 §7 |

### 2.2 禁止清单

- 创建 `llms.txt` 或「AI 专用」Schema.org 类型；为 AI 刻意 chunking / AI 专用改写  
- 刷不实提及（inauthentic mentions）以影响 AI 对本站/工具的描述  
- 伪造作者、虚假评论、虚假 `aggregateRating`  
- 无实质功能差异的同类工具铺量（doorway / scaled content abuse，方法无关）  
- 第三方寄生页借本站排名信号（site reputation abuse）；利用过期域名历史权重（expired domain abuse）  
- 禁止 `Translate to {lang}` 或机翻/AI 直出后未经实质编辑（须 locale brief + 检索向重写 + ≥3 轮；见 `tool-i18n-localization.mdc`）  
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

- **现行事实（2026）**：FAQ 富结果已于 **2026-05-07 全站停止展示**（此前 2023-08 仅限政府/健康站；GSC 报告与 Rich Results Test 支持 2026-06 移除、GSC API 2026-08 移除）；HowTo 富结果 **2023-09** 桌面端弃用。  
- **保留**可见 FAQ 与一致的 `FAQPage`（及可选 `HowTo`）JSON-LD：二者仍是有效 Schema.org 类型，Google 仍解析用于**理解页面**，无需移除，但**不再产出任何 SERP 富结果**。  
- **不以** FAQ/HowTo 富结果展示或点击为 KPI（问答仍为用户服务）。  
- 禁止仅爬虫可见的问答。

---

## 3. Information Gain 作战手册

### 3.0 定义与定位（先读）

**Information Gain（信息增益）**：相对 SERP 上已收录、已排名的同类页面，本页是否提供了**新增、可验证、对用户任务有用**的信息。

| 是 | 不是 |
|---|---|
| 内容策略原则：对齐 [People-First / Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | **已确认的独立排名因子**（Google 有相关专利表述，未官方确认为可开关的信号） |
| 相对竞品的差异：场景、边界、公式、示例、引用 | 关键词密度、单纯拉长字数、同义 title 堆砌 |
| 解决别人没讲清、没结构化表达的问题 | 「又一个免费工具 + Upload / Click / Download」空壳页 |

**一句话**：不要只做「又一个免费工具页」，而要在用户任务、场景解释、失败边界、参数建议、案例与结构化内容上，明显比现有 SERP 多一层价值。

### 3.1 九维差异（上线前至少勾选 3 项）

| # | 增益维度 | 本站做法 | 多数竞品缺失 |
|---|---|---|---|
| 1 | 公式 / 规则推导 | 写出计算式、字段映射、算法步骤 | 仅输入框 |
| 2 | 边界与失败案例 | 非法输入、局限、常见坑 FAQ | 无错误解释 |
| 3 | 行业或场景语境 | Use cases 绑定岗位/流水线（见工具方向） | 泛化「anyone can use」 |
| 4 | 对照表 | 模型价差、单位假设、引擎字符限制 | 无表 |
| 5 | 权威引用 | IETF / WHO / NIST / Schema.org 等可点外链 | 无 References |
| 6 | 本地隐私 | 浏览器处理；明确「不上传」 | 强制上传 |
| 7 | 多语言术语 | 10 语按当地检索习惯重写（locale brief + ≥3 轮；见 `tool-i18n-localization.mdc`）；禁止 Translate 直出 | 仅英文或未实质编辑的机翻 |
| 8 | 完整数值示例 | ≥1 组 Input → Output（含边界例更佳） | 无具体数字 |
| 9 | 主题内链 | Related tools ≥ 2；同场景链互链 | 孤立页 |

**文案上优先写清（相对「三步怎么用」）**：

- 用户为什么会遇到这个问题  
- 不同输入类型的处理差异  
- 失败边界与何时不建议使用  
- 如何选择参数 / 等级  
- 与其他方法或竞品的适用场景差异  
- 常见问题（FAQ）  

仅写 `Upload → Click → Download` 视为零增益（见 §3.4）。

### 3.2 每工具 IG 最低配额（硬性）

上线 PR 必须满足：

1. ≥ **3** 项 §3.1 增益，在 PR 中写明「页面哪一节体现」。  
2. 可见正文含 **How it works** + 至少 **1** 个完整 Example（计算/转换类另加 Formula/Rules）。  
3. **FAQ ≥ 3**（与 `SEO_TOOL_RULES` 一致；YMYL 须含局限性/免责类问题）。  
4. 至少 **1** 条可点击权威引用（YMYL 建议 ≥ 2），或说明「规范即页内规则表」。  
5. 文件/粘贴类工具必须有 **本地处理** FAQ 或声明。

### 3.3 长尾需求：默认「一带多场景」，慎拆页

长尾查询（意图更具体、搜索量更小）是 IG 的主战场，但 **不等于每个长尾词建一个工具 URL**。

| 做法 | 何时用 | 示例（PDF 压缩类） |
|---|---|---|
| **默认：单工具页覆盖多场景** | 同一上传/处理流程，仅场景文案不同 | 同一 Compressor：Use cases + FAQ 覆盖「邮件附件 / 签证 500KB / 扫描件」 |
| **可拆独立页** | 功能、参数、算法或可见正文有**实质差异**，且能独立满足 §3.2 | 专用「扫描件压缩」若有不同 DPI/灰度流程与独立 Example |
| **禁止** | 仅 title/H1 换词、主体仍是同一上传框 + 泛化说明 | `compress-pdf` / `free-pdf-compressor` / `pdf-compressor-online` 三壳页 |

拆页前自检（任一「否」则合并回核心工具页）：

1. 去掉 title 后，正文是否仍与核心页明显不同？  
2. 是否有独立 Example / 边界 / 参数说明？  
3. 是否会形成 doorway / scaled content 观感？（见 §2.2）

场景信息示例（写入核心页模块即可，不必先拆 URL）：目标大小（500KB / 1MB）、平台限制、清晰度权衡、失败原因、移动端/浏览器差异、隐私与文件删除机制。

### 3.4 反面模式（零增益）

| 反面 | 正确做法 |
|---|---|
| 只有输入框 | 补 How / Example / FAQ |
| 只有「快、安全、免费」口号 | 补场景限制、边界、对照表、隐私机制 |
| FAQ 整段抄竞品 | 加入本地处理、行业边界、本站对照表 |
| 空壳长尾变体页 | 合并为一带多场景的真工具（§3.3） |
| title 堆砌同义词 | 一个主关键词 + 品牌 |
| 首屏拉 5MB WASM | 点击后懒加载 |
| 结果区只有 Download | 稳定可见文案中保留示例与解读（§3.5） |

### 3.5 工具结果区与可索引内容

工具完成后的摘要（大小变化、比例、适用场景提示、质量提示）对用户有价值，也有助于体验指标。

**SEO 注意**：Google 主要索引**稳定可见**文案。动态结果若要贡献排名相关信息，须同步落到：

- Example（固定 Input → Output 数字）  
- FAQ / Use cases（平台限制、推荐用途）  
- How / Formula（为何出现该结果）  

勿假设「仅交互态文案」会被充分索引。

### 3.6 从 SERP 反推信息缺口

针对目标主词与 1–3 个长尾意图，打开前 10 名，列出：

1. 它们都提供了什么（上传框、三步说明、泛化卖点？）  
2. 它们没讲清什么（边界、场景限制、失败路径、参数权衡？）  
3. 本站工具独有能力是什么（本地处理、公式、多语言、对照表？）  
4. 对应补哪几条 §3.1，落在页面哪一节  

缺口示例（`compress pdf to 500kb`）：平台为何卡 500KB、扫描件为何难压、灰度/降 DPI、图片型 vs 文字型 PDF、清晰度预览说明、批量 vs 单文件差异——优先写入核心页模块，满足 §3.3 后再考虑拆页。

### 3.7 AI Overviews 友好写法（仍是标准 SEO）

- 步骤用有序列表，动词开头，与 UI 一致。  
- 公式单独成段，符号与示例数值一致。  
- FAQ 一问一答、直接回答，避免「见上文」。  
- **不需要**额外 AI SEO 文件或特殊 Schema。

### 3.8 IG 预审模板（立项衔接）

```markdown
## IG 预审 — {Tool Name}
- 目标主词 / 长尾意图（列 1–5）：
- 用户真实任务：
- [ ] 竞品 SERP 前 5–10 都提供了什么？
- [ ] 它们没讲清什么？（列 ≥3 条缺口）
- [ ] 我们补哪 ≥3 条增益？（对应 §3.1 编号 + 页面章节）
- [ ] 长尾：合并进本页模块，还是满足 §3.3 后拆页？理由：
- [ ] 权威来源 URL：
- [ ] 行业/场景 Use case 文案草稿：
- [ ] 边界/失败案例草稿：
- [ ] 结果区信息如何落到可索引 Example / FAQ：
- [ ] Related / 主题内链计划：
```

### 3.9 如何判断页是否真有 IG（与 §8.4 对齐）

| 可用作观察 | 不作 KPI / 不作 IG 证据 |
|---|---|
| GSC：长尾 / 非主词 impressions 与点击是否扩展 | FAQ / HowTo / Featured Snippet / PAA **展示本身**（§2.4、§8.4） |
| 平均排名是否随内容深化稳定改善 | 单纯字数、关键词密度 |
| 索引是否覆盖合理变体查询（非空壳堆词） | 「又多开了 N 个近义 URL」 |
| 抽查：相对 SERP 是否仍有 §3.1 增量 | — |
| （辅证）工具完成率、任务成功率 | 不可替代 GSC + IG 审计 |

---

## 4. 主题集群（最小必要）

主题集群服务于 **内链与 Information Gain**，不是为了铺工具数量。长尾意图优先落在支柱/核心工具页的场景模块上（§3.3），再谈子 URL。工具「做哪些」见 [工具方向](./2026-07-28-tool-direction.md) §5.3。

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
| description | `tool_*_description` | **≥ 120** 字符（建议 120–160）；步骤/公式 + 示例（`lint:seo`） |
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

- 10 语言是资产：`title` / `h1` / `description` / FAQ **按当地检索习惯本地化（重写，非英→X 直译）**。  
- 工作流：英文（或中文）母版（公式+步骤+示例）→ **每语 locale brief**（检索词 / title 方向 / 按钮说法）→ **按 brief 重写** → **≥3 轮核查**（母版+lint → 检索向重写+禁词 → 抽查再 lint）→ `build:site`。  
- 禁止 GPT/模型批量「Translate to {lang}」直出；`lint:seo` 通过 ≠ 本地化完成。  
- 落地细则与禁词表：`.cursor/rules/tool-i18n-localization.mdc`；立项填空：`work-tasks/{slug}/03-locale-briefs.md`。

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
| Bing IndexNow | ✅ `public/{key}.txt` + `ops/seo/submit-indexnow.mjs`；日常增量 `indexnow:incremental` / `--since-git`（见 `ops/README.md` §4.1） |
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
| 结构化数据 | [Rich Results Test](https://search.google.com/test/rich-results)（仅测仍支持的类型如 `BreadcrumbList`；FAQ 支持 2026-06 已移除）；语法可用 [Schema.org Validator](https://validator.schema.org/) |
| CWV | PageSpeed Insights |
| 索引与国际定向 | Google Search Console |

---

## 7. 链接策略（摘要）

完整战术见执行案 [`docs/seo/2026-08-09/link-strategy-execution.md`](./seo/2026-08-09/link-strategy-execution.md) 与入站清单 [`ops/seo/inbound-link-outreach.md`](../ops/seo/inbound-link-outreach.md)。本节为摘要。

**内链三级**：L1 发现（首页/nav/taxonomy/侧栏）→ L2 主题（`related` ≥ 2、同簇互链）→ L3 语境（How/Use cases 自然 `<a>`）。主锚文本 = 本地化工具 title；默认语内容 URL 无 `/en` 前缀。

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

官方依据：[Link spam](https://developers.google.com/search/docs/essentials/spam-policies#link-spam)、[Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)、[Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)。

---

## 8. 发布节奏、Checklist 与 KPI

### 8.1 节奏

- 先保证收录管道（sitemap / GSC），再每周 **1–2** 个高质量工具（含 10 语）。  
- 稳定期把时间花在深化 IG，而非加薄页。  
- `dateModified` 仅实质更新时变更。

### 8.2 上线 Checklist（PR 合并前）

- [ ] `tool-catalog.json` / 路由注册完成  
- [ ] 10 语言 title / description / article（或等价）齐全  
- [ ] 每语 `03-locale-briefs`（或等价）已填；按 brief **重写**非直译；禁词表已勾选  
- [ ] 本地化 ≥3 轮核查完成（见 `tool-i18n-localization.mdc`）；`lint:seo` 通过 ≠ 本地化完成  
- [ ] `npm run lint:seo` 通过  
- [ ] IG ≥ 3 项（§3.1）已在 PR 写明  
- [ ] 长尾意图：已写入本页 Use cases/FAQ，或满足 §3.3 才拆页（附理由）  
- [ ] How + Example（+ Formula 如适用）可见  
- [ ] 结果区关键解读已落到可索引 Example/FAQ（若适用，§3.5）  
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
| 长尾查询 | GSC 出现行业/场景词与非主词点击扩展（优先来自核心页深化，非空壳拆页） |
| IG 质量 | 抽查页相对 SERP 仍满足 §3.1 ≥3；见 §3.9 |
| 质量 | 无 Manual Action；抽查多语言非机翻感 |
| CWV | 关键工具页达标 |
| 富结果 / PAA / Snippet 展示 | **非 KPI**（FAQ/HowTo；问答仍为人服务，见 §2.4） |

---

## 9. 文档分工

| 文档 | 职责 |
|---|---|
| **Google 官方** + `seo-google-policy.mdc` | 最高合规权威（镜像） |
| **本文** | Google 合规展开、IG、单页模板、技术现状、链接摘要、Checklist（须对齐 rules） |
| `SEO_TOOL_RULES` | lint 硬规则摘要（须对齐 `tool-i18n-seo` / lint 脚本） |
| `SEO_PUBLISH_CHECKLIST` | 发版 / GSC / 质量抽查 |
| 工具方向 | 立项与工具清单 |
| 每工具方案 | 开发 + SEO 卡片 |
| `.cursor/rules/*` | Agent 可执行落地（对齐 Google） |
| `work-tasks/` + `tool-i18n-localization.mdc` | 立项、每语 brief、禁词、本地化多轮核查 |

**已合并（历史文件已移至 [bak/](./bak/)）**：`tool-seo-strategy`、`single-tool-page-seo`、`SEO_ANALYSIS_PLAN`、`external-link-strategy`、`online-tools-competitor-roadmap`。

---

## 10. 结论

合规底线 + 每页 ≥3 条可验证 Information Gain（内容原则，非确认排名开关）+ 行业/场景语境 + 多语言教育式说明 + **长尾默认一带多场景（§3.3）** = 可排名、可被引用的工具页。

近期执行：新工具严格走 §8.2、§3.8 预审与本地化 brief/≥3 轮核查；存量页按 §3.1 补齐；慎拆近义长尾 URL；工具选型只看 [工具方向](./2026-07-28-tool-direction.md)。

### 参考（官方）

- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)  
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)  
- [Spam policies for Google web search](https://developers.google.com/search/docs/essentials/spam-policies)  
- [Search quality rater guidelines](https://developers.google.com/search/docs/fundamentals/search-quality-rater-guidelines-overview)  
- [Schema.org WebApplication](https://schema.org/WebApplication)

---

*维护：每月根据 GSC 抽检 3 个工具页的 IG；政策变更时更新 §2。*
