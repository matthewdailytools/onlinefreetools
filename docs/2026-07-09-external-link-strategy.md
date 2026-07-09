# 外链策略方案 — 符合 Google 规则

**日期**: 2026-07-09  
**标签**: `SEO`, `外链`, `E-E-A-T`, `Spam Policy`, `链接建设`  
**目标站点**: https://onlinefreetools.org

**关联文档**:
- [单工具页面 SEO 策略](./2026-07-09-single-tool-page-seo.md) — References 出站引用规范
- [工具 SEO 战略](./2026-07-09-tool-seo-strategy.md) — 集群与内容策略
- [SEO 分析与优化方案](./SEO_ANALYSIS_PLAN.md) — 站点级 SEO 基建

**Google 官方依据**:
- [Spam Policies — Link spam](https://developers.google.com/search/docs/essentials/spam-policies#link-spam)
- [Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)
- [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

---

## 1. 概述

### 1.1 「外链」在本方案中的定义

| 类型 | 方向 | SEO 作用 | 本方案章节 |
|---|---|---|---|
| **入站外链（Backlinks）** | 其他网站 → onlinefreetools.org | 传递权威与发现流量 | §4、§4A |
| **出站外链（Outbound Links）** | onlinefreetools.org → 权威来源 | 增强 E-E-A-T Trust | §3 |
| **内链（Internal Links）** | 站内页面互链 | 主题集群权重分配 | 参见单页 SEO 策略 |

> Google 2026 立场：**链接仍是排名信号之一**，但 SpamBrain 对操纵性链接的识别能力持续增强。合规策略的核心是 **「自然获得 + 真实价值」**，而非购买或批量制造链接。

### 1.2 本项目现状

| 维度 | 现状 | 风险 |
|---|---|---|
| 入站外链 | 几乎无（SEO_ANALYSIS_PLAN 估算 F07 得分 ~10/100） | 无惩罚风险，但权威积累慢 |
| 出站外链 | 工具页几乎未引用权威来源 | 错失 EEAT Trust 信号 |
| 付费/交换链接 | 无 | ✅ 安全 |
| Affiliate 链接 | 无 | ✅ 安全 |
| 用户生成链接 | 无 UGC 评论区 | ✅ 无 UGC spam 风险 |

**结论**：当前 **零链接 spam 风险**；策略重点是从「无外链」转向 **合规、可持续的链接积累**，同时规范出站引用。

### 1.3 战略定位（工具站特化）

工具站天然不易获得大量外链（SEO_ANALYSIS_PLAN 已将外部链接权重从 6 调至 3）。因此：

```
优先级排序
  1. 出站权威引用（References）     ← 低成本、高 Trust、完全可控
  2. 可链接资产（Linkable Assets）  ← 工具本身 + 开源 + 教程
  3. 获取外链执行（§4A）            ← 资源页 / Awesome List / 教程 / 社区
  4. 白帽外展（Outreach）           ← 教育站、断链修复、HARO
  ─────────────────────────────────
  ✗ 不做：购买链接、交换链接、目录灌链、PBN、自动化灌链
```

**入站外链月度目标**（冷启动期）：约 11h/月 → **2–5 个新引用域**（详见 §4A.15）。

---

## 2. Google 链接政策解读

### 2.1 什么是 Link Spam（链接垃圾）

Google 明确定义：**主要为操纵排名而创建链接** 即为 link spam。

| 违规行为 | 示例 | 后果 |
|---|---|---|
| 买卖链接（传递 PageRank） | 付费客座文章含 dofollow 链接 | 算法忽略或 Manual Action |
| 过度链接交换 | 「你链我、我链你」专页 | 链接价值被忽略 |
| 自动化链接建设 | 软件批量发评论/目录/论坛签名 | Manual Action |
| 关键词堆砌锚文本 | `best free json formatter online tool` | 锚文本模式被识别 |
| 低质量目录/书签站 | 批量提交 500 个目录 | 链接被忽略 |
| Widget/模板/footer 灌链 | 嵌入代码强制带 keyword 链接 | Manual Action |
| 付费软文未标注 | Advertorial 无 `rel="sponsored"` | 违规 |
| 强制链接条款 | ToS 要求 dofollow 链接 | 违规 |

来源：[Google Spam Policies — Link spam](https://developers.google.com/search/docs/essentials/spam-policies#link-spam)

### 2.2 Google 允许的做法

| 做法 | 条件 |
|---|---|
| 广告/赞助链接 | 必须加 `rel="sponsored"` 或 `rel="nofollow"` |
| 用户生成内容链接 | 建议 `rel="ugc"` |
| 自然编辑链接 | 他人因内容价值主动引用，无需特殊属性 |
| 购买链接用于流量（非 SEO） | 加 `rel="sponsored"` 即合规 |
| 引用权威来源 | 正常 dofollow 出站链接，为用户服务 |

### 2.3 rel 属性使用规范

| 属性 | 用途 | 本项目场景 |
|---|---|---|
| **（无 rel）** | 正常编辑链接，愿意传递信号 | References 引用 WHO/CDC/RFC |
| `rel="sponsored"` | 付费/赞助/广告 | 未来若有赞助推广 |
| `rel="ugc"` | 用户评论/论坛 | 未来若有评论区 |
| `rel="nofollow"` | 不信任或不希望关联 | 用户提交的 URL 结果页 |
| `rel="noopener noreferrer"` | 安全（防 tabnabbing） | 所有 `target="_blank"` 外链 |

**References 权威引用**：使用 **正常 dofollow** + `rel="noopener noreferrer"`，**不加 nofollow**——这是向 Google 展示「我们引用可信来源」的 EEAT 信号。

**Website Headers 工具结果**：用户查询的第三方 URL 若为页面内展示链接，建议 `rel="nofollow noopener noreferrer"`（非编辑性链接，不应传递排名信号）。

### 2.4 2026 年 SpamBrain 趋势（行业观察）

2026 年 3 月 Spam Update 及后续系统更新重点识别：

- AI 批量生成的链接方案
- 伪装「自然」的付费链接
- 跨站链接操纵模式
-  aged domain PBN 网络

**对本项目的含义**：即使不主动买链，也须 **监控反向链接**，发现异常垃圾链时用 GSC Disavow（仅在 Manual Action 或明确 spam 时）。

---

## 3. 出站外链策略（Outbound Links）

出站链接是本项目 **最优先、完全可控** 的外链工作。

### 3.1 目标

- 每个工具页 **References ≥ 1 条**权威来源（YMYL ≥ 2 条）
- 增强 E-E-A-T 中 **Trust** 与 **Expertise**
- 为用户提供可验证的公式/标准来源

### 3.2 权威来源白名单

| 领域 | 推荐来源 | 适用工具 |
|---|---|---|
| 健康 | [WHO](https://www.who.int)、[CDC](https://www.cdc.gov) | BMI、BMR、TDEE |
| 财务 | [Investopedia](https://www.investopedia.com)、[SEC EDGAR](https://www.sec.gov) | ROI、边际收益、复利 |
| 数学 | [Wolfram MathWorld](https://mathworld.wolfram.com) | 梯度、百分比、统计 |
| 物理/单位 | [NIST](https://www.nist.gov) | 单位换算、测量 |
| 编码/网络 | [IETF RFC](https://www.rfc-editor.org)、[MDN](https://developer.mozilla.org) | Headers、Base64、JSON |
| 通用 | [Wikipedia](https://www.wikipedia.org)（作入门参考，非唯一来源） | 概念解释 |

### 3.3 出站链接 HTML 规范

```html
<!-- References：编辑性权威引用，正常 dofollow -->
<a href="https://www.who.int/..."
   rel="noopener noreferrer"
   target="_blank">
  WHO — Body mass index (BMI)
</a>

<!-- 用户查询结果/第三方 URL：非编辑性，nofollow -->
<a href="{user_queried_url}"
   rel="nofollow noopener noreferrer"
   target="_blank">
  {display_url}
</a>
```

### 3.4 出站链接禁止事项

| 禁止 | 原因 |
|---|---|
| 链接到内容农场、仿站、恶意站 | Trust 受损 |
| 付费推荐链接不加 `sponsored` | 违反 spam 政策 |
| 与工具无关的 affiliate 链接 | 被视为操纵 |
| 隐藏出站链接（CSS 隐藏、1px 文字） | Hidden link abuse |
| 交换链接专页（「Partners」仅互链） | Link exchange spam |

### 3.5 实施计划

| 阶段 | 动作 | 涉及文件 |
|---|---|---|
| P1 | BMI / ROI 页添加 References（WHO、Investopedia） | `i18n/*.ts`、各 `*Page.ts` |
| P1 | 新建 `src/site/references.ts` 统一管理来源 URL | 新文件 |
| P2 | 全部 8 个现有工具补 References | i18n + 页面 |
| P2 | Website Headers 结果链接加 `nofollow` | `websiteHeadersPage.ts` |
| P3 | 新工具模板强制包含 References 区块 | 单页 SEO Checklist |

---

## 4. 入站外链策略（Backlink Acquisition）

入站外链无法完全控制，策略是 **创造值得被引用的资产** + **白帽传播**。

### 4.1 可链接资产（Linkable Assets）

优先建设「他人会自然引用」的内容形态：

| 资产类型 | 描述 | 被引场景 | 优先级 |
|---|---|---|---|
| **免费实用工具** | JSON 格式化、PDF 合并等高频刚需 | 博客「best free tools」列表 | P0 |
| **多语言工具** | 10 语言覆盖 | 非英语教程引用 | P0 |
| **公式+教程一体化** | HowTo 步骤 + 示例 | 教育站、Wiki 外链 | P1 |
| **开源组件** | GitHub 公开工具逻辑 | 开发者引用 | P1 |
| **Devlogs 技术文章** | 实现细节、踩坑记录 | Hacker News、Reddit | P2 |
| **嵌入代码（Embed）** | 提供 iframe/badge 嵌入 | 博客嵌入计算器 | P3 |

**关键原则**（Google Helpful Content）：

> 链接应因 **内容真实有用** 而产生，不是因为付费或交换。

### 4.2 白帽获客渠道

#### Tier A — 自然传播（零 outreach 成本）

| 渠道 | 动作 | 合规性 |
|---|---|---|
| **GitHub 开源** | 仓库 README 链向 live 工具；MIT 许可 | ✅ 自然品牌链接 |
| **Devlogs** | 发布工具开发日志，含项目链接 | ✅ |
| **Reddit** | r/InternetIsBeautiful、r/webdev 分享（非 spam） | ✅ 真实分享；❌ 重复刷帖 |
| **Hacker News** | Show HN 发布新工具 | ✅ |
| **Product Hunt** | 工具合集发布 | ✅ |
| **社交媒体** | Twitter/X、Mastodon 分享 | ✅ 品牌曝光，链接为附带 |

#### Tier B — 内容营销（人工 outreach）

| 渠道 | 动作 | 合规要点 |
|---|---|---|
| **教程投稿** | Dev.to / Medium / 掘金 发布「如何用 X 工具」 | 文中 1–2 条自然链向工具页；❌ 不付费买 dofollow |
| **资源页外展** | 联系「free online tools」清单页请求收录 | ✅ 邮件推荐有价值工具；❌ 付费收录 |
| **教育站合作** | 向数学/财务教学站提供免费嵌入计算器 | ✅ 双方用户受益；❌ 不强制 dofollow 交换 |
| **维基/社区编辑** | 在相关 Wikipedia「External links」讨论页提议 | ✅ 严格遵循 Wikipedia 外链政策 |

#### Tier C — 谨慎使用

| 渠道 | 风险 | 建议 |
|---|---|---|
| 客座博客（Guest Post） | 付费 dofollow 软文 = spam | 仅接受真正 editorial、无链接要求或 1 条自然链 |
| 新闻稿分发 | 关键词锚文本 press release = spam | 不做，除非有真实新闻价值 |
| 目录提交 | 低质量目录 = 忽略或负面 | 仅提交 5–10 个高质量目录（见 §4.4） |
| 论坛签名链接 | 优化锚文本 = spam | 不做 |

### 4.3 锚文本策略

自然外链的锚文本分布应接近：

| 锚文本类型 | 建议占比 | 示例 |
|---|---|---|
| 品牌词 | 40–50% | `Online Free Tools`、`onlinefreetools.org` |
| 裸 URL | 20–30% | `https://onlinefreetools.org/tools/...` |
| 通用词 | 10–15% | `here`、`this tool`、`click here` |
| 精确匹配关键词 | **≤ 10%** | `json formatter`、`bmi calculator` |
| 部分匹配 | 10–15% | `free BMI calculator online` |

**禁止**：

- 批量 outreach 要求对方使用 `best free json formatter 2026` 作锚文本
- 所有外链锚文本高度一致

### 4.4 高质量目录（可选，低优先级）

仅提交 **编辑精选、非自动接受** 的目录：

| 目录 | 类型 | 备注 |
|---|---|---|
| AlternativeTo | 工具对比 | 用户驱动，需真实工具 |
| Product Hunt | 产品发布 | 社区投票 |
| Slant.co | 工具推荐 | 社区编辑 |
| ToolFinder 类独立站 | 需人工审核 | 避免自动提交 100+ 目录 |

**不做**：Fiverr 目录包、自动 ping 服务、书签站灌链。

### 4.5 嵌入策略（Embed Widget）

提供可选嵌入代码，让他站引用工具：

```html
<!-- 示例：BMI 计算器嵌入（未来实现） -->
<iframe src="https://onlinefreetools.org/embed/bmi-calculator"
        width="400" height="500"
        title="BMI Calculator by Online Free Tools"
        loading="lazy"></iframe>
<p>Powered by <a href="https://onlinefreetools.org/tools/how-to-calculate-bmi">Online Free Tools</a></p>
```

**合规要点**：

- 嵌入页 `Powered by` 链接为 **自然品牌链**，非 keyword 堆砌
- 不在 embed JS 中隐藏 keyword 链接
- 不强制 dofollow 作为使用条件
- iframe 内页可设 `noindex`（避免薄内容重复索引）

---

## 4A. 获取外链策略详解（入站）

> 本节是 §4 的扩展，聚焦 **如何主动、合规地获取指向 onlinefreetools.org 的入站链接**。所有策略均以「提供真实价值」为前提，而非操纵排名。

### 4A.1 策略总览矩阵

按 **投入成本 × 预期链接质量 × 可规模化** 评估：

| 策略 | 成本 | 链接质量 | 规模化 | 优先级 | 章节 |
|---|---|---|---|---|---|
| 资源清单页收录 | 低 | 中 | 高 | **P0** | §4A.2 |
| 开源 GitHub + Awesome Lists | 低 | 中高 | 中 | **P0** | §4A.3 |
| 教程 / HowTo 内容营销 | 中 | 中 | 高 | **P0** | §4A.4 |
| 社区真实分享 | 低 | 中 | 中 | **P1** | §4A.5 |
| 教育站 / 课程嵌入 | 中 | 高 | 低 | **P1** | §4A.6 |
| 断链修复（Broken Link） | 中 | 高 | 中 | **P1** | §4A.7 |
| 数据 / 对比型内容 | 中 | 中高 | 中 | **P1** | §4A.8 |
| 多语言本地化传播 | 中 | 中 | 高 | **P1** | §4A.9 |
| 新闻通讯 / 周刊收录 | 低 | 中 | 中 | **P2** | §4A.10 |
| 记者 / 专家引用（HARO 类） | 中 | 高 | 低 | **P2** | §4A.11 |
| 浏览器扩展 / 书签 | 中 | 中 | 低 | **P3** | §4A.12 |
| Wikipedia / 维基外链 | 高（成功率低） | 极高 | 低 | **P3** | §4A.13 |

---

### 4A.2 资源清单页收录（Resource Page Link Building）

**原理**：大量博客维护「Best Free Online Tools」类清单，编辑会收录真正有用的工具。这是工具站 **ROI 最高** 的获客方式之一。

#### 4A.2.1 目标页面类型

| 页面类型 | 搜索运算符（找目标站） | 示例 |
|---|---|---|
| 工具合集 | `"free online tools" + {category}` | free json formatter tools list |
| 开发者资源 | `"awesome" + {topic} + github` | awesome developer tools |
| 教育站资源页 | `site:.edu "online calculator"` | 大学数学资源页 |
| 教师教案 | `"lesson plan" + calculator + resources` | BMI lesson resources |
| 非英语清单 | `"herramientas online gratis"` | 西语工具合集 |

**Google 搜索模板**（每月更新一批目标站）：

```
"best free online tools" 2026
"free online tools" + "json formatter"
"useful websites" + tools + blog
inurl:resources + "online tools"
intitle:"tools I use" + developer
```

#### 4A.2.2 目标清单站（可主动提交或邮件推荐）

| 平台 / 站点类型 | 提交方式 | 语言 | 备注 |
|---|---|---|---|
| AlternativeTo | 用户提交 + 对比页 | 多语言 | 需有差异化描述 |
| Product Hunt | 产品发布 | 英文 | 一次性曝光 + 永久链 |
| Slant.co | 社区问答推荐 | 英文 | 回答「best X tool」 |
| StackShare | 工具栈分享 | 英文 | 开发者向 |
| Indie Hackers | Show IH 帖子 | 英文 | 独立开发者社区 |
| 掘金 / 思否 / V2EX | 工具分享帖 | 中文 | 真实体验，非广告 |
| Reddit Wiki / Sidebar | 部分 sub 维护工具 wiki | 英文 | 需版主认可 |
| GitHub Awesome Lists | PR 提交 | 英文 | 见 §4A.3 |

#### 4A.2.3 外展邮件模板（英文）

**主题**：`Suggestion for your {Page Title} — free {Tool Name}`

```
Hi {Name},

I came across your resource page "{Page Title}" ({URL}) — great list.

I built a free {Tool Name} at Online Free Tools that might fit your
"{Category}" section:

  {Tool URL}

It {1-sentence unique value: e.g. runs entirely in the browser / supports 10 languages / includes formula explanation}.

No signup required, no ads on the tool page. Happy for you to try it
and add it only if you find it genuinely useful — no obligation.

Thanks for curating helpful resources,
{Your name}
https://onlinefreetools.org
```

**合规要点**：

- 不付费、不承诺互链、不指定锚文本
- 每封邮件个性化（提及对方页面具体内容）
- 每周外展 **≤ 10 封**，避免 spam 式群发
- 被拒或无回复不跟进超过 1 次

#### 4A.2.4 执行节奏

| 周期 | 动作 | 目标 |
|---|---|---|
| 每月第 1 周 | 搜索 20 个新目标资源页 | 建立 outreach 表格 |
| 每月第 2 周 | 发送 8–10 封个性化邮件 | 收录 1–2 个 |
| 每月第 3 周 | 在 AlternativeTo / Slant 等自助提交 | 1–2 条新链 |
| 每月第 4 周 | GSC 检查新外链，记录转化率 | 优化邮件模板 |

---

### 4A.3 开源与 Awesome List 策略

**原理**：开发者生态中，GitHub README 和 Awesome List 的链接是 **高相关性、长期存在** 的自然外链。

#### 4A.3.1 GitHub 仓库优化

| 要素 | 要求 |
|---|---|
| README 首屏 | 项目简介 + **live demo 链接**（链向具体工具页，非仅首页） |
| Tools 表格 | 每个工具一行：名称、描述、Live URL、语言支持 |
| LICENSE | MIT / Apache-2.0，降低引用门槛 |
| Topics | `online-tools`, `calculator`, `cloudflare-workers`, `free-tools` |
| Releases | 新工具上线打 tag，便于 Awesome List 引用特定版本 |

**README 工具表示例**：

```markdown
| Tool | Live | Description |
|------|------|-------------|
| [JSON Formatter](https://onlinefreetools.org/tools/json-formatter) | ✅ | Format & validate JSON in browser |
| [BMI Calculator](https://onlinefreetools.org/tools/how-to-calculate-bmi) | ✅ | BMI with formula & WHO categories |
```

#### 4A.3.2 Awesome List PR 策略

向相关 Awesome List 提交 PR（**编辑性收录，非付费**）：

| Awesome List 主题 | 与本站关系 | PR 内容 |
|---|---|---|
| `awesome-free-software` | 免费工具 | 添加项目条目 |
| `awesome-online-tools` | 直接相关 | 按类别添加多个工具 |
| `awesome-json` | JSON 工具 | JSON Formatter 条目 |
| `awesome-calculators` | 计算器 | BMI/ROI 等 |
| `awesome-cloudflare` | 技术栈 | Cloudflare Workers 部署经验 |
| `awesome-indie-hacker` | 独立项目 | 学习项目定位 |

**PR 描述模板**：

```markdown
## Add Online Free Tools

Free online utilities (calculators, converters, dev tools).
- 10 languages, browser-local processing for file tools
- Live: https://onlinefreetools.org
- Open source: https://github.com/{org}/{repo}

Fits under: `{category section name}`
```

**规则**：每次 PR 只改 1 个 List；条目格式遵循该 List 既有风格；不批量 PR 50 个 List（会被视为 spam）。

---

### 4A.4 教程与内容营销获客

**原理**：撰写「如何使用 X」教程，在 Dev.to、Medium、掘金等平台发布，文中 **自然引用** 本站工具。链接因内容上下文而产生，合规且可规模化。

#### 4A.4.1 教程选题（与工具一一对应）

| 教程标题（英文） | 链向工具 | 目标读者 | 发布平台 |
|---|---|---|---|
| How to Format JSON Without Installing Anything | JSON Formatter | 开发者 | Dev.to, Medium |
| Calculate BMI: Formula, Examples, and Free Tool | BMI | 健康/教育 | Medium, 知乎 |
| How to Check HTTP Headers for Debugging | Website Headers | 开发者 | Dev.to, 掘金 |
| ROI vs IRR: When to Use Each (with Calculator) | ROI | 财务/创业 | Medium, LinkedIn |
| Merge PDF Files in the Browser — No Upload | PDF Merge | 办公用户 | Dev.to |
| Unix Timestamp Explained with Live Converter | Unix Timestamp | 开发者 | Dev.to, Hashnode |

#### 4A.4.2 教程结构（内置 2–3 个自然外链）

```
1. 问题背景（用户为什么需要）
2. 概念 / 公式解释（EEAT Expertise）
3. 手动方法（建立信任）
4. 「或使用免费在线工具」→ 链向本站工具页  ← 自然外链 #1
5. 逐步截图演示（Experience）
6. 常见问题 FAQ
7. 延伸阅读 → 链向集群内相关工具  ← 内链 + 可选外链 #2
8. References → WHO/MDN 等  ← 出站权威链
```

#### 4A.4.3 内容复用矩阵（一稿多用，不重复 spam）

| 原文 | 衍生版本 | 平台 | 链接策略 |
|---|---|---|---|
| 英文长文 | 中文翻译（人工） | 掘金、知乎 | 链向 `/zh/tools/...` |
| 英文长文 | 精简 Thread | Twitter/X | 链向工具页 |
| 英文长文 | Devlog HTML 版 | onlinefreetools.org/devlogs | 内链为主 |
| 教程核心 | YouTube 短视频（可选） | YouTube 描述区 | 1 条工具链 |

**禁止**：同一篇文章复制粘贴到 20 个平台（Duplicate content + spam 信号）。

---

### 4A.5 社区传播策略

#### 4A.5.1 平台 playbook

| 平台 | 适合内容 | 发帖频率 | 合规要点 |
|---|---|---|---|
| **Hacker News — Show HN** | 新工具 / 技术亮点 | 每工具 1 次 | 标题如实，不 clickbait；准备好回答评论 |
| **Reddit** r/InternetIsBeautiful | 设计好、实用的工具 | 每月 ≤ 2 次 | 不同 sub 不重复发；参与评论 |
| **Reddit** r/webdev, r/javascript | 技术实现 Devlog | 每月 ≤ 1 次 | 技术深度 > 推广 |
| **Reddit** r/math, r/personalfinance | 计算器类 | 按 relevancy | 须符合 sub 规则 |
| **Product Hunt** | 工具合集或单工具 | 重大版本 1 次 | 准备 tagline + 截图 |
| **V2EX** 分享创造 | 中文工具 | 每工具 1 次 | 真实创作者分享 |
| **Indie Hackers** | 项目进展 / 开源 | 每月 1 次 | 社区交流语气 |
| **Mastodon / Bluesky** | 新工具上线 | 随发布 | 附带工具直链 |

#### 4A.5.2 Show HN 发布 checklist

- [ ] 工具已稳定运行 ≥ 1 周
- [ ] 页面加载 < 3s（CWV 及格）
- [ ] 标题格式：`Show HN: {Tool Name} – {one-line value}`
- [ ] 首条评论准备好：技术栈、为何做、欢迎反馈
- [ ] 发布时间为美东 weekday 上午（09:00–11:00 ET）
- [ ] 发布后 2 小时内积极回复评论

---

### 4A.6 教育站与课程合作

**原理**：教师、课程博主需要 **可直接使用的计算器/工具链接** 放入教案，一旦收录很少被移除。

#### 4A.6.1 目标对象

| 对象 | 需求 | 我方提供 |
|---|---|---|
| 中学数学教师 | 百分比、面积、梯度计算 | 工具直链 + 公式说明页 |
| 大学生物/健康课 | BMI、BMR | 工具 + WHO 引用 |
| 商科课程 | ROI、边际收益 | 工具 + 计算示例 |
| MOOC 讲师 | 配套练习工具 | 嵌入代码（若已实现） |
| 编程训练营 | JSON/Markdown/Header 工具 | 开发者工具链 |

#### 4A.6.2 合作外展模板

```
Subject: Free {Tool} for your {Course Topic} students

Hi Professor {Name},

I noticed your {course page / syllabus} covers {topic}.
I maintain a free {Tool Name} that students might find useful:

  {Tool URL with formula and step-by-step explanation}

It requires no account, works on mobile, and is available in
{relevant languages}. You're welcome to link it in your
course materials if helpful.

Best,
{Name}
```

**不做**：不要求对方首页互链；不付费「课程赞助」换 dofollow。

---

### 4A.7 断链修复（Broken Link Building）

**原理**：找到目标站上已失效（404）的外部链接，推荐本站同类工具作为替代。

#### 4A.7.1 操作流程

```
1. 用 Ahrefs/Semrush（或免费 Check My Links 插件）分析竞品工具页的外链
2. 找到指向「已下线工具」的 404 链接
3. 确认本站有功能对等的工具
4. 邮件通知站长：「您页面 X 上的链接 Y 已失效，我们的 Z 工具可能适合替代」
5. 不指定锚文本，由对方编辑决定
```

#### 4A.7.2 竞品工具页（找断链的入口）

搜索已关闭或域名过期的在线工具站：

```
site:reddit.com "online tool" "shut down"
"alternative to" + {competitor tool name}
```

| 我方工具 | 可替代的失效工具类型 |
|---|---|
| JSON Formatter | 已关闭的 jsonlint 镜像、旧版 formatter |
| BMI Calculator | 下线健康计算器 |
| Markdown to HTML | 停更的在线 Markdown 预览 |
| Website Headers | 停用的 header checker |

**合规**：仅推荐 **功能确实对等** 的替代；不批量 spam  webmaster。

---

### 4A.8 数据型与对比型链接诱饵（Link Bait）

**原理**：发布 **原创数据、对比表、行业汇总**，他人引用数据时自然链回来源。

#### 4A.8.1 可执行的 Link Bait 选题

| 内容类型 | 示例标题 | 数据来源 | 预期引用方 |
|---|---|---|---|
| **工具对比表** | Free JSON Formatters Compared (2026) | 实测 10 个竞品 | 博客、Reddit |
| **公式汇总** | BMI / BMR / TDEE Formulas Side-by-Side | WHO + 学术来源 | 健康博客 |
| **基准测试** | Browser vs Server PDF Processing: Privacy & Speed | 自测数据 | 隐私/开发者博客 |
| **多语言覆盖** | Online Tools with 10-Language Support — Rare List | 自研调研 | i18n / 工具清单 |
| **年度清单** | 50 Free Online Calculators for Students | 本站 + 公开工具 | 教育站 |

#### 4A.8.2 发布位置

- 优先发布在 **本站 Devlogs**（`/devlogs/`）— 获 dofollow 内链 + 可被外部引用
- 同步摘要到 Medium / Dev.to，链回 Devlog 全文
- 对比表中 **客观列出竞品**（含链接），提升 Trust 与引用率

---

### 4A.9 多语言外链策略

10 语言是本站 **独特卖点**，应主动在非英语市场获取链接。

| 语言市场 | 目标平台 | 内容形式 | 链接目标 |
|---|---|---|---|
| **中文** | 掘金、知乎、V2EX、少数派 | 工具评测 / 教程 | `/zh/tools/...` |
| **西班牙语** | Foros de webmaster、Medium ES | Lista de herramientas | `/es/tools/...` |
| **日语** | Qiita、はてなブックマーク | 技術記事 | `/ja/tools/...` |
| **葡萄牙语** | TabNews (BR)、Medium PT | Ferramentas online | `/pt/tools/...` |
| **法语** | Developpez.com forums | Tutoriel | `/fr/tools/...` |
| **德语** | CHIP.de 论坛（若合规） | Tool-Tipp | `/de/tools/...` |

**原则**：

- 每种语言至少 1 篇 **人工撰写** 的本地化教程
- 外展邮件用 **目标语言** 撰写
- hreflang 已配置，Google 会将各语言 URL 匹配到对应 SERP

---

### 4A.10 新闻通讯与周刊收录

| 周刊 / 通讯 | 类型 | 提交方式 |
|---|---|---|
| Hacker Newsletter | 技术 | 由 HN 高票自动收录 |
| Bytes.dev / JavaScript Weekly | 前端 | 投稿 tip@ 地址 |
| Node Weekly | Node/JS | GitHub 提交 issue |
| Free Stuff Dev | 免费工具 | 网站表单 |
| TLDR Newsletter | 科技 | 投稿建议 |
| 阮一峰周刊（中文） | 工具/技术 | 读者投稿 |
| 掘金每周精选 | 中文技术 | 优质文章自动 |

**提交内容**：1 句话价值 + 工具 URL + 可选截图。**不付费**买收录位。

---

### 4A.11 记者与专家引用（Digital PR / HARO）

**原理**：记者撰写「best free tools」「how to calculate X」类文章时，需要专家引用和工具推荐。

| 平台 | 动作 | 预期 |
|---|---|---|
| **Help a BReporter (HARO)** / **Qwoted** | 回复工具/计算相关 query | 1 条高 DR 媒体链 |
| **Source of Sources** | 同上 | 同上 |
| **Twitter/X** 记者 solicit | 回复 #journorequest | 不定期 |

**回复模板要点**：

- 提供 **可验证的数据**（公式、WHO 标准）
- 附带工具链接作为「free resource for readers」
- 署名真实身份 + 项目背景
- 不付费买 placement

---

### 4A.12 浏览器扩展与 PWA（长期）

| 形态 | 外链机制 | 优先级 |
|---|---|---|
| **Chrome Extension**（如 JSON Formatter） | Chrome Web Store 页链向网站 | P3 |
| **Firefox Add-on** | Add-ons.mozilla.org 链接 | P3 |
| **PWA 安装** | manifest 中 `start_url` | P2（间接） |
| **书签小工具（Bookmarklet）** | 安装说明页链向工具 | P3 |

Chrome Web Store 列表是 **高权重、长期稳定** 的自然外链，但开发成本较高，建议在 JSON Formatter / QR 等高频工具成熟后实施。

---

### 4A.13 Wikipedia 与维基外链

**成功率低但权重极高**，仅在有充分理由时尝试。

| 步骤 | 动作 |
|---|---|
| 1 | 找到相关条目（如 Body mass index、JSON） |
| 2 | 阅读 External links 政策 |
| 3 | 在 Talk 页提出：工具是否满足「可靠、独立、非推广」 |
| 4 | 等待编辑社区共识 |
| 5 | 不自行添加链接（会被 revert + 可能封禁） |

**更易成功的路径**：中文/小语种维基（竞争较小），但仍须符合政策。

---

### 4A.14 按工具映射的获客优先级

结合 [工具包调研](./2026-07-09-js-tool-packages-survey.md) 第一梯队：

| 工具 | 首选获客策略 | 次要策略 |
|---|---|---|
| **JSON Formatter** | Awesome-json PR、Dev.to 教程、Show HN | 断链修复（替代旧 formatter） |
| **QR Code Generator** | 资源清单收录、Product Hunt | Pinterest / 设计类博客 |
| **PDF Merge** | 「no upload」隐私角度 → 隐私博客 | Reddit r/privacy |
| **Hash Calculator** | 开发者清单、安全类教程 | GitHub Awesome Lists |
| **Password Generator** | 安全/隐私清单页 | HARO 回复安全话题 |
| **Unit Converter** | 教育站合作、多语言清单 | 断链修复 |
| **BMI Calculator** | 教育站、健康博客清单 | Wikipedia Talk（长期） |
| **Image Compressor** | 摄影/设计资源页 | 对比型 Link Bait |
| **Unix Timestamp** | 开发者教程、StackShare | Dev.to |

---

### 4A.15 月度外链获取执行日历

| 周 | 任务 | 耗时 | 产出目标 |
|---|---|---|---|
| **W1** | 搜索 20 个资源页目标 + 更新 outreach 表 | 2h | 20 条目标 |
| **W1** | GSC Links 审计 + 记录新链 | 30min | 审计报告 |
| **W2** | 发送 8–10 封资源页外展邮件 | 2h | 1–2 收录 |
| **W2** | 发布 1 篇教程（Dev.to 或掘金） | 3h | 1 条内容链 |
| **W3** | 1 次社区分享（HN/Reddit/V2EX） | 1h | 0–3 条社交链 |
| **W3** | 1 个 Awesome List PR 或 AlternativeTo 提交 | 1h | 0–1 条 |
| **W4** | 断链修复外展 3–5 封 | 1.5h | 0–1 条 |
| **W4** | 月度复盘：转化率、锚文本、新引用域 | 30min | 优化下月 |

**每月合计**：约 11 小时，预期 **2–5 条新引用域**（冷启动期）。

---

### 4A.16 Outreach 追踪表模板

建议在 `docs/outreach-tracker.csv`（或 Notion）维护：

| 日期 | 目标 URL | 联系人 | 策略类型 | 我方工具 | 状态 | 获得链接 |
|---|---|---|---|---|---|---|
| 2026-07-15 | example.com/free-tools | editor@ | 资源页 | JSON Formatter | 已发送 | — |
| 2026-07-20 | github.com/awesome-xxx | — | Awesome PR | 项目整体 | PR #42 | ✅ |

**状态枚举**：待联系 → 已发送 → 已收录 → 已拒绝 → 无回复

---

### 4A.17 获取外链策略禁止事项（再次强调）

| 场景 | 正确做法 | 错误做法 |
|---|---|---|
| 资源页外展 | 个性化 1 封邮件 | 同一模板群发 500 站 |
| 教程投稿 | 1 篇原文 + 人工翻译 | 同文复制 20 平台 |
| Awesome List | 按规范 PR 1 个 List | 批量 PR 100 个 List |
| 社区发帖 | 参与讨论、回答问题 | 只发帖不互动 |
| 断链修复 | 功能对等的替代 | 推荐无关工具 |
| HARO 回复 | 提供真实专业信息 | 硬塞链接、付费买 placement |


以下做法 **一律禁止**，无论供应商如何承诺：

| # | 禁止行为 | Google 分类 |
|---|---|---|
| 1 | Fiverr/SEO  agency 购买 dofollow 链接包 | Link spam |
| 2 | 「Guest post $50 with dofollow link」 | Paid link spam |
| 3 | PBN（私有博客网络） | Link scheme |
| 4 | 自动化评论/论坛签名灌链 | Automated link spam |
| 5 | 与无关站「友情链接」互链页 | Excessive link exchange |
| 6 | 要求用户链接回来才能使用工具 | Forced link in ToS |
| 7 | Widget 强制 footer keyword 链接 | Widget link spam |
| 8 | 锚文本包：`json formatter` × 100 站 | Manipulative anchor |
| 9 | AI 批量生成「工具推荐」站群互链 | Scaled link manipulation |
| 10 | 隐藏链接（与背景同色、1px 字体） | Hidden link abuse |

**违反后果**：

- 算法级：SpamBrain **忽略**垃圾链接（链接价值归零）
- 人工级：GSC **Manual Action** — Unnatural links to/from your site
- 恢复：移除/qualify 链接 + 提交 **Reconsideration Request**

---

## 6. 链接监控与审计

### 6.1 监控工具

| 工具 | 用途 | 频率 |
|---|---|---|
| **Google Search Console** | Links report（入站外链）、Manual Actions | 每周 |
| **Bing Webmaster Tools** | 补充外链数据 | 每月 |
| **Ahrefs / Semrush 免费版** | 锚文本分布、新链发现 | 每月（可选） |
| **Google Alerts** | `onlinefreetools.org` 被提及 | 自动 |

### 6.2 入站外链审计流程

```
每月第一个周一
  ├─ GSC → Links → Top linking sites
  ├─ 检查新增域名：是否 spam / 无关 / 成人 / 赌博
  ├─ 检查锚文本：精确匹配关键词是否 > 15%
  ├─ 若发现 Manual Action → 进入 §6.3
  └─ 记录到 docs/link-audit-log.md（可选）
```

### 6.3 Disavow 决策树

Google 官方：**大多数站点不需要 Disavow**。

```
发现可疑入站链接
  ├─ 是否收到 GSC Manual Action（unnatural links）？
  │   ├─ 是 → 尝试联系站长移除 → 仍无效则 Disavow
  │   └─ 否 → 通常 **不做 Disavow**（Google 会自动忽略）
  ├─ 是否为明显 spam 攻击（大量成人/赌博链）？
  │   └─ 是 → 考虑 Disavow
  └─ 否则 → 观察，不操作
```

Disavow 文件格式（仅在必要时）：

```
# 示例：disavow.txt
domain:spam-example.com
https://bad-directory.xyz/link-page
```

通过 GSC → Disavow Links 工具提交。

### 6.4 出站链接审计

| 检查项 | 频率 |
|---|---|
| References 链接是否 404 | 每季度 |
| 是否误连到恶意/仿站 | 每季度 |
| Website Headers 结果链接是否有 nofollow | 每次发版 |
| 未来 affiliate 是否正确加 sponsored | 每次新增 |

---

## 7. 分阶段实施路线图

### Phase 0 — 基建（W1，与 SEO P0 同步）

- [ ] 接入 Google Search Console
- [ ] 确认 GSC Links 报告可用
- [ ] 创建 `src/site/references.ts` 权威来源常量

### Phase 1 — 出站引用（W2–4）

- [ ] 8 个现有工具页补 References 区块
- [ ] Website Headers / IP 等检测类结果链接加 `nofollow`
- [ ] 新工具页模板强制 References

### Phase 2 — 可链接资产（W5–8）

- [ ] 第一梯队 9 个新工具上线（JSON、QR 等高频词）
- [ ] GitHub README 完善：工具清单 + live links
- [ ] 3 篇 Devlogs 技术文章（含自然项目链）
- [ ] 启动 §4A.15 月度执行日历（outreach 追踪表）
- [ ] 提交 2–3 个 Awesome List PR
- [ ] 发布 2 篇教程（Dev.to + 掘金各 1）

### Phase 3 — 主动获客（W9–12）

- [ ] 选 1 个工具做 Show HN / Product Hunt
- [ ] 资源页外展累计 30 封（目标收录 5+）
- [ ] 断链修复外展 10 个目标站
- [ ] 1 篇对比型 Link Bait（Devlogs）
- [ ] 教育站外展 5 封（BMI/ROI 向）
- [ ] 中文：V2EX + 掘金各 1 次分享

### Phase 4 — 持续（长期）

- [ ] 每月执行 §4A.15 日历（11h/月）
- [ ] 每季度 1 个新集群工具 + 1 篇可链接教程
- [ ] 每季度 1 篇 Link Bait / 对比文章
- [ ] 评估 Embed Widget + Chrome Extension
- [ ] 锚文本分布监控
- [ ] 多语言市场各至少 1 篇本地化教程

---

## 8. KPI 与预期

| 指标 | 3 个月目标 | 6 个月目标 | 12 个月目标 |
|---|---|---|---|
| 引用域（Referring Domains） | 8–15 | 30–50 | 80–120 |
| GSC 外链总数 | 30+ | 120+ | 350+ |
| 资源页外展发送量 | 30 封 | 80 封 | 200 封 |
| 外展收录率 | ≥ 10% | ≥ 12% | ≥ 15% |
| 教程 / Devlog 发布 | 6 篇 | 15 篇 | 30 篇 |
| Awesome List PR 合并 | 2 个 | 5 个 | 10 个 |
| 工具页 References 覆盖率 | 100% | 100% | 100% |
| Manual Actions | 0 | 0 | 0 |
| 精确匹配锚文本占比 | < 15% | < 12% | < 10% |
| 品牌锚文本占比 | > 40% | > 45% | > 50% |

** realistic 预期**：按 §4A.15 每月 ~11h 投入，冷启动期 3 个月获 **8–15 引用域** 为合理目标。不应为 KPI 走灰色链接捷径。

---

## 9. 与 E-E-A-T / 单页 SEO 的协同

```
出站 References（Trust）
    ↕
单工具页深度内容（Expertise）
    ↕
可链接工具资产（Experience）
    ↕
自然入站外链（Authoritativeness）
```

| 单页 SEO 要素 | 外链策略协同 |
|---|---|
| References 区块 | 出站 dofollow 权威链 |
| FAQ | 可被教育站引用为来源 |
| HowTo 步骤 | 教程投稿自然链回 |
| 多语言 | 非英语站引用当地语言 URL |
| 隐私本地处理 | 差异化卖点 → 博客推荐 |

---

## 10. 场景 FAQ

### Q1：可以在工具页底部加「合作伙伴」互链区吗？

**不建议**。Google 明确将「partner pages exclusively for cross-linking」列为 link spam。若确有真实合作伙伴，应在相关文章内 **上下文自然提及**，而非独立互链页。

### Q2：用户分享工具到社交媒体算外链吗？

算，且是 **最自然** 的外链形式。鼓励分享，但不要求用户必须带链接才可使用工具。

### Q3：Devlogs 文章内外链怎么加？

- 链向本站工具：正常 dofollow 内链
- 链向外部参考：编辑性 dofollow + `noopener`
- 链向竞品：可以，展示客观对比（Information Gain）

### Q4：未来若接入 Google AdSense，广告链接怎么处理？

AdSense 广告由 Google 自动处理。若自行投放赞助横幅并含链接，须加 `rel="sponsored"`。

### Q5：中文 SEO 群推荐的「快排外链包」能做吗？

**不能**。批量低质量链接是 Google 明确打击对象，可能导致 Manual Action。

### Q6：Wikipedia 外链怎么做？

不在 Wikipedia 直接 spam。正确流程：在条目 Talk 页讨论是否适合添加外部链接，证明工具为 **可靠、独立、非推广性** 资源。成功率低但链接权重极高。

### Q7：资源页外展邮件没人回复怎么办？

正常。行业平均回复率 5–15%，收录率约 10%。优化方向：更精准的目标选择、提及对方页面具体内容、强调工具独特价值（多语言/本地处理）。无回复不二次骚扰。

### Q8：每月应该花多少时间在获取外链上？

建议 **11 小时/月**（见 §4A.15），约占 SEO 总投入的 30%。其余时间用于工具开发、单页 SEO 内容、技术基建。

---

## 11. 总结

### 合规外链战略三句话

1. **出站**：每个工具页引用 WHO/CDC/RFC 等权威来源（dofollow References），用户生成/第三方 URL 用 nofollow。
2. **入站**：按 §4A 执行——资源页收录 + Awesome List + 教程营销 + 社区分享 + 教育站/断链修复，**绝不购买或交换**。
3. **监控**：GSC 每月审计 + outreach 追踪表，无 Manual Action 不 Disavow，锚文本保持自然分布。

### 获取外链优先级速查（§4A）

| 优先级 | 策略 | 月投入 | 预期产出 |
|---|---|---|---|
| **P0** | 资源清单页外展（§4A.2） | 4h | 1–2 条/月 |
| **P0** | GitHub + Awesome List PR（§4A.3） | 2h | 0–1 条/月 |
| **P0** | 教程投稿 Dev.to/掘金（§4A.4） | 3h | 1–2 条/月 |
| **P1** | 社区分享 HN/Reddit/V2EX（§4A.5） | 1h | 0–3 条/月 |
| **P1** | 教育站合作（§4A.6） | 2h | 0–1 条/季 |
| **P1** | 断链修复（§4A.7） | 1.5h | 0–1 条/月 |
| **P1** | 多语言传播（§4A.9） | 3h | 1–2 条/月 |
| **P2** | 周刊投稿 + HARO（§4A.10–11） | 2h | 不定期 |
| **P3** | Chrome 扩展 / Wikipedia（§4A.12–13） | — | 长期 |

### 总体优先级速查

| 优先级 | 动作 | 成本 | 合规风险 |
|---|---|---|---|
| **P0** | 工具页 References 出站引用 | 低 | 无 |
| **P0** | GSC 接入 + 链接监控 | 低 | 无 |
| **P1** | GitHub 开源 + Devlogs | 低 | 无 |
| **P1** | 高频工具上线（可链接资产） | 中 | 无 |
| **P2** | 教程投稿 + 资源页外展 | 中 | 低（须避免付费 dofollow） |
| **P2** | Show HN / Product Hunt | 低 | 无 |
| **P3** | Embed Widget | 中 | 低（须规范 Powered by 链接） |
| **✗** | 购买链接 / PBN / 目录包 | — | **高** |

---

*维护说明：每月在 GSC Links 报告更新 §6 审计记录；在 outreach 追踪表更新 §4A.16 收录数据；若 Google 更新 Spam Policies，同步修订 §2 与 §5。*
