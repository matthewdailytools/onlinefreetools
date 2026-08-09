# SeaOcean 工具清单快照（SEO + GEO 审计平台）

**抓取日期**: 2026-08-09  
**入口**: [https://seaocean.io/features](https://seaocean.io/features) · [Free SEO Audit](https://seaocean.io/free-seo-audit) · [GEO Audit](https://seaocean.io/free-geo-audit) · [AISEO](https://seaocean.io/aiseo) · [Compare](https://seaocean.io/compare) · [Directory](https://seaocean.io/directory)

> **用途**：枚举「即时 SEO Audit + GEO（生成式引擎优化）」SaaS 的能力簇与信息架构，供本站 SEO / 站长工具清单对照与裁决。  
> **产品形态**：SeaOcean 是**单一 SaaS 平台**（Free / Pro $19·mo / Agency $49·mo，对比页自报对标 SEMrush / Ahrefs / SE Ranking），**不是独立工具墙**；核心入口为「贴 URL → 140+ 检查项 → 分数 + 修复建议」，GEO 侧为订阅内 AI 可见性工具。  
> **与本站定位冲突点**：服务端抓站 + 分数黑箱 + AI 引用率承诺（GEO / llms.txt / AI SoV）——见 §4 裁决。

## 竞品结论（一句话）

把「全站审计 SaaS（140+ checks、监控、排名、报告）+ GEO 营销（AI 可见性、llms.txt、9 factors）」绑成一款订阅产品；本站吸收其**单页检查器**的产品形态与检查项清单，**不跟**全站爬虫审计、付费监控与 llms.txt / AI 引用率叙事。

---

## 1. 产品与信息架构（三层）

| 层 | 代表 URL | 做什么 |
|---|---|---|
| 产品主页 | `/features` | 「SEO & GEO Growth」三大支柱；能力名词墙（见 §2） |
| 审计入口 | `/free-seo-audit` | 贴 URL → **142 检查项**报告：分数、passed/warnings/failed、修复建议（实测演示 `seaocean.io/audit/stripe.com`） |
| GEO 营销页 | `/aiseo` `/free-geo-audit` | LLM Visibility、llms.txt 生成、AI-Ready Content Audit（9 factors）、AI SoV、PDF 报告 |
| 对比 / 目录 | `/compare` `/directory` | 对标 SEMrush/Ahrefs/SE Ranking；SaaS/AI 产品目录带 SEO 分 |

**产品特征（2026-08-09 快照）**：

- 审计维度：Basic SEO / Social Tags / Technical / Performance 四个 0–100 分块 + 汇总分（如 stripe.com 82/100）。
- 免费层「No signup」「<5 秒出结果」；监控 / 排名跟踪 / 竞争对比 / PDF 报告 / AI 修复 / GEO 均落在 Pro/Agency。
- 多语言：11 语 UI（含 en/ru/uk/es/de/fr/pt/zh/ar/ko/ja）；目录页「Submit → 免费 backlink + 详细审计」为获客钩子。
- AI 叙事：`+527% AI traffic`、`62% users trust AI answers`、`40% searches end without click`、`6 AI engines tracked`（ChatGPT/Gemini/Claude/Perplexity/Grok/Copilot）。

---

## 2. 功能清单（features 页「Three Pillars」）

### 2.1 Search Engine Optimization（SEO 侧）

| 能力 | 一句话 | 本站对照 |
|---|---|---|
| **Audit** | 贴 URL → 140+ 检查项（meta/OG/JSON-LD/性能/安全） | ✅ 吸收为**单页检查器**（§3 `on-page-seo-checker`） |
| **Compare** | 多站分数对比 | ⚠️ 若做检查器可同页多 URL 对比，勿拆页 |
| **Monitor** | 周期重跑 + 分数趋势 | ❌ 持续抓站 + 存储，偏离本站 |
| **Fix Guide** | 每条 issue 附可复制修复 | ✅ 检查器页内给「修复建议 + References」作 IG |
| **Reports** | PDF 报告（Agency） | ❌ 不做（形态偏离） |
| **Keywords** | 关键词功能（对比页特性） | ❌ 无自有数据；不做密度/排名 |
| **AI Recs** | AI 修复建议（Agency） | ⚠️ 不引第三方 AI；用静态规则表替代 |
| **Battlefield / Gaps** | 竞争差距分析 | ❌ 数据壳；不做 |
| **OG Images** | OG 图/社交标签验证 | ✅ 已有规划 `open-graph-preview` |

### 2.2 Generative Engine Optimization（GEO 侧）

| 能力 | 一句话 | 本站裁决 |
|---|---|---|
| **GEO Score / GEO Audit** | AI 引用可见性 0–100 分 | ❌ 黑箱 + 无自有数据 |
| **AI SoV（Share of Voice）** | 6 引擎品牌提及份额跟踪 | ❌ 爬取 AI 引擎 + 提及监测；数据壳 |
| **Visibility / Citations** | AI 是否引用本站 | ❌ 同上；且涉操纵 AI 摘要叙事 |
| **llms.txt** | 生成 llms.txt 文件 | ❌ **红线**：`seo-google-policy` 官方明确可忽略；禁为操纵 AI 摘要做专用页 |
| **AI Audit** | AI-Ready Content Audit | ⚠️ 仅吸收为「内容清单」模式（见 §4） |
| **GEO Content Copilot** | AI 内容改写副驾驶 | ❌ 本站非 AI 生成内容平台 |
| **AI Models** | 跟踪 6 引擎 | ❌ 不做 |

### 2.3 free-seo-audit 的 142 检查项拆解（本站可吸收的「检查项字典」）

| 维度 | 检查项（页面明示） | 本站落点 |
|---|---|---|
| **Basic SEO** | Title tag（长度/唯一性）、Meta description（质量/长度）、H1 存在性、Canonical URL | `meta-serp-preview`（已有 P0）；H1/canonical → `on-page-seo-checker` |
| **Social & OG** | og:title/og:description/og:image、Twitter Card、社交预览验证 | `open-graph-preview`（已有 §3.1 推荐） |
| **Technical** | HTTPS/SSL、sitemap.xml 存在性、robots.txt 校验、**mixed content** 检测 | `ssl-certificate-checker`（已有 §3.2）；mixed content → `on-page-seo-checker` |
| **Performance** | 页面大小、压缩（GZIP/Brotli）、缓存头、render-blocking 资源 | 扩展 `website-headers`（缓存头已有规划）；render-blocking → `on-page-seo-checker` |

---

## 3. 能力吸收矩阵（SeaOcean → 本站）

| SeaOcean 能力簇 | 决策 | 落点 |
|---|---|---|
| 单 URL 审计（142 项） | **做单页检查器**，禁拆 140 个薄页 | **P2 新增 `on-page-seo-checker`**：贴 URL 或粘贴 HTML → H1/canonical/meta 质量/OG/Twitter/JSON-LD 检测/mixed content/render-blocking 汇总表 + 修复建议；合并原 `canonical-url-checker` 候选（同页多场景，不拆 URL） |
| OG / Twitter 标签验证 | **已有规划** | `open-graph-preview`（P2）维持 |
| SSL / HTTPS 检查 | **已有规划** | `ssl-certificate-checker`（P2）维持；可在检查器内给摘要 |
| sitemap / robots 存在性 + 校验 | **已有规划** | `sitemap-xml-validator` / `robots-txt-analyzer`（§3.2）维持 |
| 缓存头 / 压缩检测 | **做深已有** | 扩展 `website-headers`：cache-control / gzip-br 提示（S1 已排） |
| AI 修复建议 | **不引 AI** | 检查器内用静态「检查项 → 修复步骤 + Search Central 引用」作 IG |
| 全站爬虫审计 / 监控 / 排名跟踪 / PDF | **不做** | 形态偏离（存储、成本、滥用） |
| GEO Score / AI SoV / Visibility / Citations | **不做** | 黑箱 + 无自有数据 |
| llms.txt 生成 | **禁止** | `seo-google-policy` 红线 |
| 9 GEO factors 内容审计 | **谨慎吸收** | 不新增独立 URL；作 `seo-launch-checklist` 的「内容可索引」条目 + people-first 说明（见 §4） |
| 11 语 UI | **不做** | 本站 10 语检索向重写，非全量 UI 语言墙 |
| 产品目录换外链 | **不做** | 外链策略红线（不出售/交换链接） |

---

## 4. Google SEO 冲突裁决（权威序：Search Central → lint → rules → docs）

| SeaOcean 打法 | 判定 | 本站对策 |
|---|---|---|
| 「140+ checks」黑箱总分 | 分数无公开公式 | 本站检查器逐项给「判定规则 + 来源」；不给无公式总分 |
| llms.txt 生成器 | 官方可忽略（ai-optimization-guide 2026-05 明确不要求） | **不做**；不把 GEO 当 KPI 文案 |
| AI SoV / 引用率承诺（+527% 等） | 不可验证数据 + 操纵 AI 摘要叙事风险 | **不做**；AI features 引用前提是 indexed + snippet-eligible |
| 9 GEO factors（统计/专家引/权威源/直接回答/技术可访问…） | 内容原则与 Helpful Content 重叠，本身非黑科技 | 吸收为**普通内容清单**：进 `seo-launch-checklist`；**不叫 GEO**、不承诺引用率 |
| 全站爬虫 + 监控 SaaS | 形态偏离本站；存储与滥用成本 | **不做**；单页检查器即边界 |
| 多 URL 对比（Compare） | 非独立工具页 | 检查器同页「多 URL 或双列对比」即可，不拆页 |
| 目录提交换外链 | 外链交易风险 | **不做** |

---

## 5. 本站建议摘要

| 可做 / 做深 | 谨慎 / 默认不做 |
|---|---|
| **P2 新增 `on-page-seo-checker`**（单 URL/HTML 一键检查：H1、canonical、meta 质量、OG/Twitter、JSON-LD 检测、mixed content、render-blocking；合并 canonical 检查候选） | llms.txt / GEO Score / AI SoV / 引用率承诺 |
| 吸收其「检查项 → 修复建议 + 权威引用」结构作 IG | 全站审计 / 监控 / 排名跟踪 SaaS |
| 扩展 `website-headers` 缓存头与压缩提示 | 多 URL 对比拆页、目录换外链 |
| `seo-launch-checklist` 加入「内容可索引」people-first 条目（不标 GEO） | 9 factors 独立成页（薄 + 黑科技叙事） |

**优先级（不插队现有 P0/P1）**：

1. 维持 S1（`meta-serp-preview` → Schema → robots/sitemap）不动；
2. P2 候选：`on-page-seo-checker`（SeaOcean 式单页检查器）——立项时与 `open-graph-preview`、`ssl-certificate-checker`、`website-headers` 增强同波评估；
3. `seo-launch-checklist` 内容条目吸收 9 factors 的 people-first 部分（不叫 GEO）；
4. 本文「不做」清单约束后续 Agent：禁 llms.txt、禁 AI SoV/引用率、禁 140 项薄页化。

---

## 6. 关联

- 调研主文：`docs/2026-08-09-seo-webmaster-tools-survey.md`（SEO / 站长工具品类地图 + 本站裁决）
- 清单总表：`docs/2026-08-08-tool-inventory-table.md`（§6 SEO / 站长）
- SEO 政策：`.cursor/rules/seo-google-policy.mdc`（llms.txt / AI features 官方立场）、`tool-i18n-seo.mdc`、`docs/2026-07-28-google-seo-strategy-implementation.md`
- 邻近竞品快照： [SEOitis 等在调研主文 §1.2](https://github.com/onlinefreetools/docs) · [Aconvert](../aconvert-2026-08-09/README.md)（同「吸收能力、不抄结构」方法论）
