# 工具 SEO 战略 — 基于工具方向与 Google 2026 政策

**日期**: 2026-07-09  
**标签**: `SEO`, `工具规划`, `Google`, `E-E-A-T`, `主题集群`  
**目标站点**: https://onlinefreetools.org

**关联文档**:
- [外链策略方案](./2026-07-09-external-link-strategy.md) — 入站/出站链接合规策略
- [单工具页面 SEO 策略](./2026-07-09-single-tool-page-seo.md) — 页面结构、Meta、Schema、i18n 模板
- [JS 工具包调研](./2026-07-09-js-tool-packages-survey.md) — 技术选型与工具梯队
- [SEO 分析与优化方案](./SEO_ANALYSIS_PLAN.md) — 技术 SEO 补全（Sitemap、Schema、CWV）
- [工具页面 SEO 规则](./SEO_TOOL_RULES.md) — 描述字段最低要求
- [音视频可行性](./2026-06-23-10-15-js-media-conversion-feasibility.md) — 多媒体工具约束

---

## 1. 战略定位

### 1.1 核心命题

onlinefreetools.org 的 SEO 差异化不应是「再多几个计算器」，而是：

> **多语言 + 教育式工具站** — 每个工具不仅给出结果，还教会用户公式、步骤、场景与权威来源；内容在本地浏览器处理，隐私友好。

这与 Google 2026 年强调的 **People-First Content（以人为本内容）**、**Information Gain（信息增益）**、**Topical Authority（主题权威）** 完全对齐。

### 1.2 2026 Google 政策要点（工具站必读）

| 政策来源 | 核心结论 | 对本站含义 |
|---|---|---|
| [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) | 排名奖励「为人而写」的内容；纯为操纵排名而批量生产内容违反 spam 政策 | 每个工具须有真实使用价值，附公式/步骤/示例 |
| [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)（2026-05） | AI Overviews / AI Mode **无额外技术要求**；沿用标准 SEO；**不需要** llms.txt、AI 专用 Schema、内容切块改写 | 不做「GEO 噱头」，专注标准 SEO + 深度内容 |
| E-E-A-T 框架 | Experience / Expertise / Authoritativeness / **Trust**；YMYL 主题要求更高 | 健康/财务工具须引用 WHO、CDC、Investopedia 等 |
| 2026 Core Updates（行业观察） | 主题连贯性、非商品化内容、一手经验与可验证数据权重上升 | 集群深耕，避免浅层同质化工具页 |
| Spam Policies | AI 批量生成且未编辑的内容、日期刷新无实质更新、跨主题铺量 | 控制发布节奏；`dateModified` 仅在有实质更新时变更 |

### 1.3 Google 明确反对的做法（禁止清单）

以下做法**不会**帮助 AI Overviews 收录，反而可能浪费工程精力或触发质量风险：

- 创建 `llms.txt` 或面向 AI 爬虫的专用文件
- 添加「AI 专用」Schema.org 类型
- 为 AI 阅读而刻意切块、重写整站内容结构
- 伪造作者、虚假评论、虚假 SoftwareApplication 评分
- 无实质功能差异的同类工具铺量（如 5 个面积计算器）
- 机器翻译后直接上线多语言，未经人工审核
- 健康/财务工具给出医疗或投资建议而无免责声明

---

## 2. SEO 战略框架

### 2.1 三维决策模型

每个新工具立项前，用三个维度打分（各 1–5 分）：

```
SEO 价值 = 搜索意图明确度 × 信息增益空间 × 主题集群协同度
```

| 维度 | 评估问题 | 低分信号 |
|---|---|---|
| **搜索意图明确度** | 用户搜的词是否直接对应单一工具动作？ | 意图模糊（如「online tool」） |
| **信息增益空间** | 我们能否提供竞品没有的公式推导、多语言、隐私本地处理？ | 纯 UI 壳，无说明文字 |
| **主题集群协同度** | 能否与已有工具组成支柱页 + 子页结构？ | 孤立话题，无法内链 |

**决策规则**：
- 总分 ≥ 12：优先立项
- 总分 9–11：可立项，但须强化 article 深度
- 总分 ≤ 8：暂缓或改为集群内子功能而非独立页面

### 2.2 内容金字塔（单工具页结构）

每个工具页面的可见内容须满足以下层级，兼顾用户与爬虫：

```
H1  工具名 + 核心动作（如 "JSON Formatter and Validator"）
│
├─ [工具交互区]          ← 满足即时意图，降低跳出率
│
├─ H2  How it works      ← HowTo Schema 来源；步骤 1-2-3
├─ H2  Formula / Rules   ← 公式、算法、标准（计算类必备）
├─ H2  Example           ← 至少 1 个完整输入→输出示例
├─ H2  Use cases         ← 2-3 个应用场景
├─ H2  FAQ               ← 2-4 问；FAQPage Schema
├─ H2  Related tools     ← 集群内互链
└─ H2  References        ← 权威外链（EEAT Trust）
```

**字数建议**（非 Google 硬性要求，但作为质量基线）：

| 区块 | 建议字数（英文） | 对应 i18n 字段 |
|---|---|---|
| Meta description | 80–160 字符 | `tool_*_description` |
| 正文说明 | 300–800 词 | `tool_*_article` + 页面 HTML |
| FAQ | 每答 40–120 词 | 新增 `tool_*_faq_*` 或内嵌 article |
| 权威引用 | ≥ 1 条 | article 末尾 References |

---

## 3. 主题集群规划

结合 [工具包调研](./2026-07-09-js-tool-packages-survey.md) 三梯队，将 SEO 集群从现有 5 类扩展为 **8 个支柱主题**。

### 3.1 集群总览

| 集群 ID | 支柱页 slug（建议） | 现有工具 | 第一梯队新增 | 第二梯队新增 |
|---|---|---|---|---|
| **C01 健康** | `/topics/health-calculators` | BMI | BMR、TDEE、体脂率 | 理想体重、饮水量 |
| **C02 财务** | `/topics/finance-calculators` | ROI、边际收益 | 复利、贷款月供、折扣 | NPV、盈亏平衡 |
| **C03 数学统计** | `/topics/math-calculators` | 百分比变化、梯度 | 标准差、加权平均、分数运算 | 线性回归 |
| **C04 测量单位** | `/topics/unit-converters` | 平方英尺 | 长度/温度/重量换算 | 烹饪计量、汇率（API） |
| **C05 开发者** | `/topics/developer-tools` | Headers、IP、Markdown | JSON 格式化、Base64、正则、JWT | YAML/CSV、UUID、cURL 转换 |
| **C06 文档媒体** | `/topics/file-tools` | — | 二维码、哈希、密码生成 | PDF 合并、图片压缩、OCR |
| **C07 日期时间** | `/topics/date-time-tools` | — | Unix 时间戳、日期差、时区 | Cron 解析、年龄计算 |
| **C08 设计 SEO** | `/topics/design-seo-tools` | Gradient | 颜色转换、对比度检测 | Meta 长度检测、Schema 生成 |

### 3.2 集群 SEO 要求

每个支柱页（Pillar Page）须包含：

1. **集群简介**（150–300 词）：该主题解决什么问题
2. **工具卡片列表**：链向所有子工具，含一句话描述
3. **对比表**：子工具适用场景差异（Information Gain）
4. **CollectionPage** JSON-LD
5. **面包屑**：Home → Topics → {Cluster Name}
6. **10 语言 hreflang**（与现有机制一致）

子工具页须：

- 面包屑：Home → Topics → {Cluster} → {Tool}
- 侧栏「同集群工具」链接 ≥ 3 个
- `Related tools` 段落至少链出 2 个集群内页面

---

## 4. 工具方向 × 关键词策略

### 4.1 第一梯队（Q3 2026 优先）— 高意图 / 低竞争

| 工具 | 主关键词（en） | 长尾词（en） | 集群 | SEO 总分 | 立项 |
|---|---|---|---|---|---|
| JSON Formatter | `json formatter`, `json beautifier` | `format json online`, `json validator` | C05 | 15 | ✅ |
| Base64 Encode/Decode | `base64 encode`, `base64 decode` | `base64 converter online` | C05 | 14 | ✅ |
| Hash Calculator | `sha256 hash`, `md5 hash` | `hash generator online`, `file hash check` | C06 | 14 | ✅ |
| QR Code Generator | `qr code generator` | `free qr code maker`, `wifi qr code` | C06 | 15 | ✅ |
| Password Generator | `password generator` | `strong password generator`, `random password` | C06 | 14 | ✅ |
| Unix Timestamp | `unix timestamp converter` | `epoch converter`, `timestamp to date` | C07 | 14 | ✅ |
| Unit Converter | `unit converter` | `kg to lbs`, `celsius to fahrenheit` | C04 | 15 | ✅ |
| Image Compressor | `compress image online` | `reduce image size`, `jpg compressor` | C06 | 13 | ✅ |
| PDF Merge/Split | `merge pdf online` | `combine pdf free`, `split pdf` | C06 | 15 | ✅ |

**多语言关键词策略**：

| 语言 | 策略 | 示例 |
|---|---|---|
| `zh` | 简体搜索词 + 繁体 hreflang 覆盖 | `json格式化`、`二维码生成` |
| `es` / `pt` | 拉美高频工具词 | `calculadora BMI`（已有）、`generador de contraseñas` |
| `ja` | 片假名外来语 + 汉字 | `JSON整形`、`QRコード生成` |
| `de` / `fr` | 复合词长尾 | `JSON Formatierer`, `générateur QR code` |
| `ar` | RTL 页面 + 阿拉伯语描述 | 技术词常保留英文缩写 |

> **原则**：`title` 和 `h1` 使用当地自然语言表达；`slug` 保持英文 kebab-case 以利跨语言 URL 稳定（与现站一致）。

### 4.2 第二梯队（Q4 2026）— 差异化 / WASM

| 工具 | 主关键词 | 差异化卖点（Information Gain） | 注意 |
|---|---|---|---|
| OCR | `image to text`, `ocr online` | **本地处理不上传** vs 竞品服务器上传 | 隐私声明必备 |
| Video Converter | `convert video online` | 浏览器端 FFmpeg.wasm | CWV 风险，懒加载 |
| Text Diff | `text compare`, `diff checker` | 多语言界面 + 行/词级 diff 说明 | 低 |
| Regex Tester | `regex tester` | 附带常用模式库 + 解释 | 中 |
| YAML/CSV Converter | `yaml to json`, `csv to json` | 步骤说明 + 示例文件 | 低 |

### 4.3 第三梯队 — 引流 / 不独立 SEO 投入

吉他调音器、ASCII 艺术、粒子背景等：**不单独做 SEO 落地页**，可作为集群页「More tools」或 Devlogs 引流，避免薄内容分散权重。

---

## 5. YMYL 工具合规策略

健康（C01）、财务（C02）属于 Google **YMYL（Your Money Your Life）** 范畴，须额外措施：

### 5.1 必备页面元素

| 元素 | 健康工具 | 财务工具 |
|---|---|---|
| **免责声明** | 「非医疗建议，请咨询医生」 | 「非财务建议，请咨询专业人士」 |
| **公式来源** | WHO、CDC 链接 | Investopedia、会计准则引用 |
| **适用范围** | 说明 BMI 对运动员/孕妇局限 | 说明公式假设（固定利率等） |
| **更新日期** | `dateModified` 在公式/标准变更时更新 | 同左 |
| **作者/组织** | Organization Schema + About 页 | 同左 |

### 5.2 现有 YMYL 工具优化清单

| 工具 | 待补充 |
|---|---|
| BMI | 增加「BMI 局限性」FAQ；链向 WHO BMI 说明 |
| ROI | 增加「ROI vs IRR」对比表；不同投资周期示例 |
| 边际收益 | 增加完全竞争 vs 垄断市场图示说明 |
| 新 BMR/TDEE | 引用 Mifflin-St Jeor 公式来源；活动系数表 |

---

## 6. 结构化数据策略

> 技术实现详见 [SEO_ANALYSIS_PLAN.md §4.2](./SEO_ANALYSIS_PLAN.md)；本文为**按工具类型**的 Schema 选型策略。

### 6.1 按工具类型映射

| 工具类型 | 必选 Schema | 可选 Schema | 禁止 |
|---|---|---|---|
| 交互计算器 | `WebApplication` + `HowTo` | `FAQPage` | 虚假 `aggregateRating` |
| 格式转换器 | `WebApplication` + `HowTo` | `FAQPage` | — |
| 教程型（how-to-calculate-*） | `Article` + `HowTo` | `FAQPage`, `BreadcrumbList` | — |
| 网络检测（Headers/IP） | `WebApplication` | `FAQPage` | — |
| 支柱集群页 | `CollectionPage` | `ItemList` | — |
| 全站 | `BreadcrumbList` | `Organization`（首页） | — |

### 6.2 HowTo 步骤模板（以 JSON Formatter 为例）

```json
{
  "@type": "HowTo",
  "name": "How to Format JSON Online",
  "step": [
    { "@type": "HowToStep", "position": 1, "name": "Paste JSON", "text": "Paste your raw JSON into the input area." },
    { "@type": "HowToStep", "position": 2, "name": "Click Format", "text": "Click Format to beautify with 2-space indentation." },
    { "@type": "HowToStep", "position": 3, "name": "Copy or Download", "text": "Copy the formatted output or download as .json file." }
  ]
}
```

**规则**：Schema 文本必须与页面可见内容一致（Google 明确要求）。

---

## 7. 多语言 SEO 战略

### 7.1 竞争优势

多数竞品工具站仅英文。本站 **10 语言** 是核心 SEO 资产：

- 覆盖 en / zh / es / ar / pt / id / fr / ja / ru / de
- 同一工具 10 个 URL 变体，各自竞争当地 SERP
- hreflang 已实现，须确保 **sitemap 收录全部语言 URL**

### 7.2 多语言工作流

```
英文母版（公式 + 步骤 + 示例）
    ↓ 人工翻译 / 母语审核
各语言 i18n/*.ts
    ↓ npm run lint:seo
构建 + sitemap 全语言 URL
    ↓
GSC 国际定位报告监控
```

**禁止**：GPT 批量翻译后直接上线而不审核（违反 E-E-A-T Trust）。

### 7.3 本地化关键词调研来源

| 来源 | 用途 |
|---|---|
| Google Trends（按国家过滤） | 各语言工具词热度 |
| Google Search Console（接入后） | 各语言实际展示词 |
| 竞品本地化 title 分析 | incognito 搜索当地语言 |
| Wikipedia 当地语言条目 | 术语标准译法 |

---

## 8. 技术 SEO 前置条件（P0 阻塞项）

> 以下项来自 [SEO_ANALYSIS_PLAN.md](./SEO_ANALYSIS_PLAN.md)，为工具 SEO 的**前置阻塞**——不完成则新工具难以被收录。

| 优先级 | 任务 | 当前状态 | 对新工具的影响 |
|---|---|---|---|
| **P0** | Sitemap 收录全部工具 URL（10 语言） | ❌ 仅 2 URL | 新工具无法被发现 |
| **P0** | 工具页 JSON-LD（WebApplication/HowTo/FAQ） | ❌ 无 | 无 Rich Results |
| **P0** | Google Search Console 接入 | ❌ 未配置 | 无法监控索引 |
| **P1** | 主题集群支柱页 | ❌ 无 | 无法建立主题权威 |
| **P1** | 面包屑导航 + BreadcrumbList | ❌ 工具页无 | UX + Schema 缺失 |
| **P1** | Core Web Vitals 基线测量 | ❌ 未测 | WASM 工具风险未知 |

**原则**：每批新工具上线前，须确认 sitemap 已自动包含对应 URL。

---

## 9. 发布节奏与收录策略

### 9.1 发布频率

| 节奏 | 数量 | 理由 |
|---|---|---|
| **第 1–4 周** | 技术 SEO P0 完工；随后每周 2 个工具 | 先修收录管道 |
| **第 5–12 周** | 每周 1–2 个工具 | 避免薄内容铺量信号 |
| **稳定期** | 每 2 周 1 个工具 + 1 篇集群内容深化 | 质量 > 数量 |

Google 明确反对「大量跨主题、低关注度页面铺量」。每个工具上线须同步：

1. 完整 i18n（10 语言 description + article）
2. 集群内链与支柱页更新
3. sitemap 重生成
4. GSC URL 检查（可选手动提交）

### 9.2 12 周路线图

| 周次 | SEO 基建 | 工具上线 | 集群 |
|---|---|---|---|
| W1 | Sitemap 动态生成；GSC 接入 | — | — |
| W2 | layout 层 Schema 注入 | JSON Formatter、Base64 | C05 支柱页草稿 |
| W3 | 面包屑组件 | Hash Calculator、QR Generator | C06 支柱页 |
| W4 | FAQ Schema 模板 | Password Generator、Unix Timestamp | C07 支柱页 |
| W5 | CWV 基线 + 优化 | Unit Converter | C04 支柱页上线 |
| W6 | 集群互链 | Image Compressor | C01 补充 BMR |
| W7 | EEAT：References 模块 | PDF Merge/Split | C02 补充复利计算器 |
| W8 | 优化现有 YMYL 内容 | — | C01/C02 内容深化 |
| W9 | — | Text Diff、Regex Tester | C05 扩展 |
| W10 | WASM 懒加载 SEO 验证 | YAML/CSV Converter | — |
| W11 | — | OCR（POC 通过后） | C06 更新 |
| W12 | 季度复盘：GSC 数据 | 根据搜索词调整 Q1 2027 队列 | 全集群审计 |

---

## 10. 竞品差异化清单（Information Gain）

同类工具 SERP 竞争白热化。每个新工具须至少满足 **3 条**差异化：

| # | 差异化维度 | 本站做法 | 多数竞品缺失 |
|---|---|---|---|
| 1 | **10 语言** | 全语言 title/description/article | 仅英文 |
| 2 | **教育式内容** | 公式 + 步骤 + 示例 + FAQ | 仅输入框 |
| 3 | **隐私本地处理** | 文件类工具浏览器端 WASM | 上传到服务器 |
| 4 | **权威引用** | WHO/CDC/IETF/NIST 来源链接 | 无引用 |
| 5 | **主题集群** | 相关工具互链 + 支柱页 | 孤立页面 |
| 6 | **可访问性** | Bootstrap 语义结构、对比度 | 广告堆砌 |
| 7 | **无广告干扰** | 学习项目定位，体验干净 | 满屏广告 |

---

## 11. KPI 与度量

### 11.1 北极星指标

| 阶段 | 指标 | 目标（6 个月） |
|---|---|---|
| 收录 | GSC 已索引 URL 数 | ≥ 工具数 × 10 语言 × 90% |
| 曝光 | GSC 总展示次数 | 较基线 +200% |
| 点击 | GSC 总点击次数 | 较基线 +150% |
| 质量 | 平均 CTR | ≥ 3%（工具类词） |
| 体验 | CWV 达标率（LCP/INP/CLS） | ≥ 75% URL Good |
| 权威 | 支柱页平均排名（Top 10 词） | 3 个集群进 Top 20 |

### 11.2 单工具复盘模板

每个工具上线 30 天后填写：

```markdown
## {Tool Name} — 30 天 SEO 复盘
- 索引状态：已索引 / 未索引 / 原因
- Top 5 展示查询词：
- CTR：
- 平均排名：
- 跳出率（GA4/Clarity）：
- 信息增益是否足够：是/否 — 待改进点
- 下月动作：
```

### 11.3 验证工具清单

| 检查项 | 工具 |
|---|---|
| 描述合规 | `npm run lint:seo` |
| 结构化数据 | [Rich Results Test](https://search.google.com/test/rich-results) |
| 移动端 | [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) |
| CWV | PageSpeed Insights |
| hreflang | GSC → 国际定位 |
| 索引 | GSC → 网页索引 → 网页 |

---

## 12. 新工具上线 SEO Checklist

每个工具 PR 合并前逐项确认：

- [ ] `src/site/tools.ts` 注册 slug
- [ ] 10 语言 `tool_*_title` / `description` / `article` 齐全
- [ ] `description` 含步骤/公式/示例（`npm run lint:seo` 通过）
- [ ] H1 与 title 自然包含主关键词，无堆砌
- [ ] `tool_*_article` ≥ 300 词等效内容
- [ ] FAQ ≥ 2 条（YMYL 工具 ≥ 3 条含免责声明）
- [ ] 集群归属明确，支柱页 + 侧栏互链已更新
- [ ] JSON-LD：WebApplication + HowTo + FAQPage + BreadcrumbList
- [ ] canonical / hreflang / OG 标签正确
- [ ] sitemap 自动包含全部语言 URL
- [ ] 文件类工具：隐私声明「本地处理不上传」
- [ ] YMYL 工具：免责声明 + 权威来源引用
- [ ] `datePublished` / `dateModified` 准确
- [ ] 未使用虚假评分、虚假作者、隐藏文本

---

## 13. 风险矩阵

| 风险 | 概率 | 影响 | 对策 |
|---|---|---|---|
| Sitemap 未收录工具 | 高 | 致命 | P0 动态 sitemap |
| 薄内容工具页 | 中 | 高 | article + FAQ 最低字数 |
| YMYL 无免责声明 | 中 | 高 | 模板强制插入 |
| WASM 工具 CWV 差 | 中 | 中 | 懒加载 + 加载提示 |
| 机器翻译低质 | 中 | 中 | 人工审核 + lint:seo |
| 同类工具铺量 | 低 | 高 | 每集群差异化定位 |
| AI 生成 article 未编辑 | 中 | 高 | 人工校对 + 公式核验 |

---

## 14. 文档分工说明

| 文档 | 职责 |
|---|---|
| **本文档** | 工具选型 SEO 优先级、关键词、集群、内容策略、发布节奏 |
| [SEO_ANALYSIS_PLAN.md](./SEO_ANALYSIS_PLAN.md) | 技术 SEO 实现（Sitemap 代码、Schema 注入、CWV） |
| [SEO_TOOL_RULES.md](./SEO_TOOL_RULES.md) | description 字段最低规则 |
| [工具包调研](./2026-07-09-js-tool-packages-survey.md) | npm 包选型与技术可行性 |

---

## 15. 结论

### 战略一句话

> **以 8 大主题集群为骨架，按「高意图、高信息增益、高集群协同」顺序上线工具；用 10 语言教育式内容建立差异化；标准 SEO 打通收录，不做 AI SEO 噱头。**

### 近期三项必做

1. **P0 技术 SEO**：动态 Sitemap + Schema + GSC（否则新工具无效）
2. **第一梯队 9 个工具**：JSON / Base64 / Hash / QR / 密码 / 时间戳 / 单位 / 图片压缩 / PDF
3. **8 个支柱页**：建立主题权威，支撑 AI Overviews 的「query fan-out」多链接曝光

### 排名分预期

| 阶段 | 预估排名分（参见 SEO_ANALYSIS_PLAN §7） |
|---|---|
| 当前 | ~60 / 109 |
| P0 完成后 | ~72 |
| 第一梯队 + 集群完成后 | ~82 |
| 12 周路线图完成后 | **85+**（目标） |

---

## 参考链接

- [Creating helpful, reliable, people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)
- [AI features and your website](https://developers.google.com/search/docs/appearance/ai-features)
- [Search quality rater guidelines](https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)
- [Schema.org WebApplication](https://schema.org/WebApplication)
- [Schema.org HowTo](https://schema.org/HowTo)
- [Google Search Console](https://search.google.com/search-console)

---

*维护说明：每月根据 GSC 数据更新 §4 关键词表与 §9 发布队列；新工具上线后在 §4 表标注「已上线」与索引状态。*
