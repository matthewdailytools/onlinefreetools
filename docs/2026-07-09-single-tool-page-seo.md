# 单工具页面 SEO 策略

**日期**: 2026-07-09  
**标签**: `SEO`, `工具页`, `模板`, `Schema`, `E-E-A-T`  
**目标站点**: https://onlinefreetools.org

**关联文档**:
- [工具 SEO 战略（站点级）](./2026-07-09-tool-seo-strategy.md) — 集群、关键词优先级、发布节奏
- [SEO 分析与优化方案](./SEO_ANALYSIS_PLAN.md) — Sitemap、技术基建
- [工具页面 SEO 规则](./SEO_TOOL_RULES.md) — description 最低要求

---

## 1. 单页 SEO 目标

一个工具页面的 SEO 目标是：**在单一搜索意图下，同时满足 Google 爬虫、AI Overviews 与用户三方需求**。

| 受众 | 页面须回答的问题 |
|---|---|
| **用户** | 这个工具做什么？怎么用？结果可信吗？ |
| **Google 爬虫** | 页面主题是什么？与哪些查询匹配？与其他页面关系？ |
| **AI Overviews** | 能否提取清晰步骤、公式、示例作为引用片段？ |

### 1.1 单页 SEO 成功标准

- 主关键词（如 `bmi calculator`）在 **title / H1 / description** 中自然出现
- 页面有 **≥ 300 词**可见说明文字（非隐藏、非仅 JS 渲染）
- 含 **HowTo 步骤 + 至少 1 个完整示例**
- **JSON-LD** 与可见内容一致
- **10 语言** hreflang 完整
- YMYL 类工具含 **免责声明 + 权威引用**
- Core Web Vitals 不因工具脚本而恶化

### 1.2 Google 2026 对单页的明确要求

来自 [Creating helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) 与 [AI features](https://developers.google.com/search/docs/appearance/ai-features)：

- **People-First**：页面首先服务直接使用工具的人，而非仅为排名而写
- **Information Gain**：须比 SERP 竞品多提供公式、步骤、场景或隐私优势
- **无额外 AI SEO**：不需要 llms.txt、AI 专用 Schema、内容切块
- **Schema 与可见文本一致**：结构化数据不得夸大或虚构
- **E-E-A-T**：YMYL 页面 Trust 信号权重最高

---

## 2. 页面结构模板

### 2.1 标准布局（自上而下）

```
┌─────────────────────────────────────────────────┐
│ Header（导航 + 语言切换）                          │
├──────────┬──────────────────────────────────────┤
│ Sidebar  │ ① 面包屑（待实现）                      │
│ 同集群    │ ② H1 + 一句话描述（= description 摘要）   │
│ 工具导航  │ ③ 【工具交互区】← 首屏，满足即时意图       │
│          │ ④ H2 How it works（步骤 1-2-3）         │
│          │ ⑤ H2 Formula / Algorithm（计算/转换类）  │
│          │ ⑥ H2 Example（输入 → 输出）             │
│          │ ⑦ H2 Use cases（2-3 场景）              │
│          │ ⑧ H2 FAQ（2-4 问）                      │
│          │ ⑨ H2 Related tools（集群内链）           │
│          │ ⑩ H2 References（权威外链，EEAT）        │
│          │ ⑪ Disclaimer（YMYL 必备）              │
└──────────┴──────────────────────────────────────┘
│ Footer                                            │
└─────────────────────────────────────────────────┘
```

### 2.2 与现有代码的映射

| SEO 区块 | 当前实现 | 目标 i18n / 代码字段 | 状态 |
|---|---|---|---|
| `<title>` | `renderLayout({ title })` | `{tool_title} \| {brand}` | ✅ 已有 |
| `<meta description>` | `tool_*_description` | 80–160 字符，含步骤+示例 | ⚠️ 部分偏短 |
| `<h1>` | 页面 `contentHtml` 内 | 与 title 主词一致，可不完全相同 | ✅ 已有 |
| 工具交互区 | `contentHtml` 表单/脚本 | 首屏可见，`<main>` 内 | ✅ 已有 |
| 说明正文 | `tool_*_article` | 扩展为多段落 + H2 分节 | ⚠️ 偏短 |
| FAQ | 无 | 新增 `tool_*_faq` 字段 | ❌ 缺失 |
| Related tools | 侧栏全站工具列表 | 侧栏 + 正文集群内链 | ⚠️ 无集群过滤 |
| References | 无 | 新增 `tool_*_references` | ❌ 缺失 |
| JSON-LD | 无 | `layout.ts` 或页面注入 | ❌ 缺失 |
| 面包屑 | 无 | 新增 `renderBreadcrumb()` | ❌ 缺失 |
| Disclaimer | 部分 YMYL 有 interpretation | 独立 `tool_*_disclaimer` | ⚠️ 不完整 |

**参考实现**：`src/pages/howToCalculateBmiPage.ts` — 结构最接近目标，但 FAQ / Schema / 面包屑仍缺。

---

## 3. Meta 标签规范

### 3.1 Title

**格式**：

```
{Primary Keyword + Action} | {Brand}
```

**规则**：

| 规则 | 示例（✅） | 反例（❌） |
|---|---|---|
| 主关键词靠前 | `JSON Formatter and Validator \| Online Free Tools` | `Online Free Tools - JSON` |
| 长度 50–60 字符（英文） | — | 超过 70 字符被截断 |
| 不堆砌同义词 | `BMI Calculator` | `BMI Calculator BMI Calc Body Mass Index Tool` |
| 各语言本地化 | `如何计算BMI \| 在线免费工具` | 中文页用英文 title |
| 品牌统一后缀 | `\| Online Free Tools` | 每页品牌名不一致 |

**代码位置**：各 `src/pages/*Page.ts` 中：

```typescript
const title = `${t(opts.lang, 'tool_{slug}_title')} | ${t(opts.lang, 'brand')}`;
```

### 3.2 Meta Description

**格式（三段式）**：

```
{一句话价值} + {Process/Formula 步骤} + {Example 具体数值示例}
```

**规则**（参见 [SEO_TOOL_RULES.md](./SEO_TOOL_RULES.md)）：

- 长度：**80–160 字符**（英文）；中文建议 60–120 字
- 必须含：`步骤/过程/公式` 之一 + `示例/例子` 之一
- 须通过 `npm run lint:seo` 关键词启发式检查
- 与 `<h1>` 下摘要可相同或略短，但不得矛盾

**示例（BMI，英文）**：

```
Calculate Body Mass Index (BMI) = weight(kg) / (height(m))². Process: choose units, enter weight and height, compute BMI, map to category. Example: 70 kg & 175 cm → BMI 22.9 (Normal).
```

**示例（JSON Formatter，英文，新工具模板）**：

```
Format and validate JSON online with syntax highlighting. Process: paste raw JSON, click Format, review indented output or error message. Example: {"name":"Ada"} → pretty-printed 2-space JSON.
```

**代码位置**：`src/site/i18n/{lang}.ts` → `tool_*_description`

### 3.3 Canonical

**规则**：

- 统一 apex 域名：`https://onlinefreetools.org`
- 默认语言无前缀：`/tools/{slug}`
- 其他语言：`/{lang}/tools/{slug}`
- 每页仅一个 canonical，指向当前语言版本

**代码位置**：`renderLayout({ canonicalPath })` → `<link rel="canonical">`

### 3.4 Open Graph / Twitter

**当前**：`layout.ts` 已输出 `og:title`、`og:description`、`og:url`、`og:image`、`twitter:card`。

**待优化**：

| 字段 | 建议 |
|---|---|
| `og:type` | 工具页改为 `website`（当前 OK）；若强调应用属性可试 `article` |
| `og:image` | 每个工具集群一张专用 OG 图（1200×630），替代通用 `og-image.png` |
| `og:locale` | 补充 `og:locale` + `og:locale:alternate` |

### 3.5 hreflang

**规则**：

- 10 语言各一条 `<link rel="alternate" hreflang="{lang}">`
- 追加 `hreflang="x-default"` 指向默认语言 URL
- URL 必须与 sitemap 中 URL 完全一致

**当前**：各页面已生成 `alternates` 数组传入 `renderLayout`。**待补充**：`x-default` 链接。

---

## 4. 可见内容区块规范

### 4.1 H1 与首屏摘要

```html
<div class="tool-intro">
  <h1>{tool_*_title}</h1>
  <p class="text-muted">{tool_*_description 或 tool_*_intro}</p>
</div>
<!-- 紧接着是工具交互区，首屏内可见 -->
```

**原则**：

- 页面**只有一个 H1**
- 工具表单/输入框在 **首屏**（移动端 375px 宽度下尽量可见）
- 用户无需滚动即可开始使用 → 降低跳出率 → 间接 SEO 信号

### 4.2 工具交互区

| 工具类型 | SEO 要点 |
|---|---|
| **计算器** | 输入字段有 `<label>`；结果区用文本输出（非仅 Canvas） |
| **转换器** | 输入/输出均为 `<textarea>` 或文本，爬虫可索引 |
| **文件处理** | 说明「本地处理不上传」；文件内容不进 DOM |
| **网络检测** | 结果以 `<pre>` / 表格输出 HTTP 头等信息 |

**注意**：Google 能索引静态 HTML 文本；纯 Canvas/WebGL 结果对 SEO 无贡献，须在下方补充文字版示例。

### 4.3 H2：How it works（操作步骤）

**用途**：HowTo Schema 来源；AI Overviews 步骤引用。

**结构**：

```html
<section id="how-it-works">
  <h2>How it works</h2>
  <ol>
    <li><strong>Step 1:</strong> {action}</li>
    <li><strong>Step 2:</strong> {action}</li>
    <li><strong>Step 3:</strong> {action}</li>
  </ol>
</section>
```

**i18n 字段建议**：

```typescript
tool_{slug}_how_title: 'How it works',
tool_{slug}_how_step1: 'Enter your weight and height in metric or imperial units.',
tool_{slug}_how_step2: 'Click Calculate to compute your BMI.',
tool_{slug}_how_step3: 'Review your BMI value and category interpretation.',
```

**规则**：3–5 步；每步一句动词开头；与工具 UI 实际流程一致。

### 4.4 H2：Formula / Algorithm（公式/算法）

**适用**：计算器、转换器、哈希工具。

```html
<section id="formula">
  <h2>Formula</h2>
  <p>BMI = weight (kg) / height (m)²</p>
  <p>Imperial: BMI = (weight (lbs) × 703) / height (in)²</p>
</section>
```

**i18n**：`tool_{slug}_formula` 或 `tool_{slug}_formula_imperial`

**非计算类替代标题**：

| 工具类型 | H2 标题 |
|---|---|
| Markdown 转换 | Processing rules |
| HTTP Headers | Request flow |
| Hash | Algorithm |
| QR Code | Encoding standard |

### 4.5 H2：Example（完整示例）

**要求**：至少 1 个 **输入 → 输出** 完整示例，最好 2 个（常规 + 边界）。

```html
<section id="example">
  <h2>Example</h2>
  <div class="example-block">
    <p><strong>Input:</strong> Weight 70 kg, Height 175 cm</p>
    <p><strong>Output:</strong> BMI = 22.9 (Normal weight)</p>
  </div>
</section>
```

**i18n**：`tool_{slug}_example1_input` / `tool_{slug}_example1_output`

**Information Gain 关键**：竞品常缺具体数值示例，这是最低成本的差异化。

### 4.6 H2：Use cases（应用场景）

2–3 个 bullet，回答「谁会在什么情况下用这个工具」。

```html
<section id="use-cases">
  <h2>Use cases</h2>
  <ul>
    <li>Health screening and fitness planning</li>
    <li>Medical intake forms requiring BMI</li>
    <li>Comparing weight status across different unit systems</li>
  </ul>
</section>
```

**i18n**：`tool_{slug}_use_case1` … `tool_{slug}_use_case3`  
**也可复用**：现有 `tool_*_article` 中的 "Scenarios:" 部分，拆为独立字段。

### 4.7 H2：FAQ

**数量**：普通工具 2–4 问；YMYL 工具 3–5 问（含局限性/免责声明类问题）。

**结构**：

```html
<section id="faq">
  <h2>Frequently asked questions</h2>
  <details>
    <summary>What is a healthy BMI range?</summary>
    <p>A BMI between 18.5 and 24.9 is generally considered normal weight for adults (WHO).</p>
  </details>
  <details>
    <summary>Is BMI accurate for athletes?</summary>
    <p>BMI may overestimate body fat in muscular individuals. Consider body composition tests for athletes.</p>
  </details>
</section>
```

**i18n 字段命名**：

```typescript
tool_{slug}_faq_q1: 'What is a healthy BMI range?',
tool_{slug}_faq_a1: 'A BMI between 18.5 and 24.9...',
tool_{slug}_faq_q2: '...',
tool_{slug}_faq_a2: '...',
```

**SEO 价值**：FAQPage Schema → Rich Results；AI Overviews 问答引用。

### 4.8 H2：Related tools（内链）

**规则**：

- 至少 **2 个**同集群工具链接
- 链接文字用描述性 anchor（非「点击这里」）
- 放在正文末尾，侧栏另有全站导航

```html
<section id="related-tools">
  <h2>Related tools</h2>
  <ul>
    <li><a href="/tools/how-to-calculate-roi">ROI Calculator</a> — measure investment returns</li>
    <li><a href="/tools/square-feet">Square Feet Calculator</a> — compute area from dimensions</li>
  </ul>
</section>
```

**i18n**：`tool_{slug}_related_{n}_label` + `tool_{slug}_related_{n}_desc`

### 4.9 H2：References（权威引用）

**用途**：EEAT 中 **Trust** 信号；YMYL 必备。

```html
<section id="references">
  <h2>References</h2>
  <ul>
    <li><a href="https://www.who.int/..." rel="noopener noreferrer">WHO — Body mass index (BMI)</a></li>
    <li><a href="https://www.cdc.gov/..." rel="noopener noreferrer">CDC — About Adult BMI</a></li>
  </ul>
</section>
```

**i18n**：`tool_{slug}_ref1_label` + URL 可硬编码或放配置

**引用来源速查**：

| 领域 | 推荐来源 |
|---|---|
| 健康 | WHO, CDC |
| 财务 | Investopedia, SEC |
| 编码 | IETF RFC, MDN |
| 单位 | NIST |
| 数学 | Wolfram MathWorld |

### 4.10 Disclaimer（YMYL 免责声明）

**适用**：健康（C01）、财务（C02）及任何给出「建议性」结果的工具。

```html
<aside class="tool-disclaimer" role="note">
  <p><strong>Disclaimer:</strong> This tool is for informational purposes only and does not constitute medical advice. Consult a healthcare professional for personalized guidance.</p>
</aside>
```

**i18n**：`tool_{slug}_disclaimer`

---

## 5. 结构化数据（JSON-LD）

每个工具页 `<head>` 内注入一段或多段 JSON-LD，**文本必须与可见内容一致**。

### 5.1 必选 Schema 组合

| Schema 类型 | 用途 |
|---|---|
| `WebApplication` | 标识为在线工具 |
| `HowTo` | 步骤说明 → Rich Results |
| `BreadcrumbList` | 导航路径 |
| `FAQPage` | FAQ 区块 → 展开问答 |

### 5.2 WebApplication 模板

```json
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "BMI Calculator",
  "description": "Calculate Body Mass Index (BMI) from weight and height.",
  "url": "https://onlinefreetools.org/tools/how-to-calculate-bmi",
  "applicationCategory": "HealthApplication",
  "operatingSystem": "Any",
  "browserRequirements": "Requires JavaScript",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  }
}
```

**`applicationCategory` 取值参考**：

| 集群 | Category |
|---|---|
| 健康 | `HealthApplication` |
| 财务 | `FinanceApplication` |
| 开发者 | `DeveloperApplication` |
| 通用工具 | `UtilitiesApplication` |

**禁止**：虚构 `aggregateRating`、`reviewCount`。

### 5.3 HowTo 模板

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Calculate BMI",
  "description": "Calculate your Body Mass Index in three steps.",
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Enter measurements",
      "text": "Enter your weight and height in metric or imperial units."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Calculate",
      "text": "Click Calculate to compute BMI using the standard formula."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Review result",
      "text": "Review your BMI value and weight category."
    }
  ]
}
```

### 5.4 FAQPage 模板

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a healthy BMI range?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A BMI between 18.5 and 24.9 is generally considered normal weight for adults."
      }
    }
  ]
}
```

### 5.5 BreadcrumbList 模板

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://onlinefreetools.org/" },
    { "@type": "ListItem", "position": 2, "name": "Health Calculators", "item": "https://onlinefreetools.org/topics/health-calculators" },
    { "@type": "ListItem", "position": 3, "name": "BMI Calculator", "item": "https://onlinefreetools.org/tools/how-to-calculate-bmi" }
  ]
}
```

### 5.6 注入方式（建议）

在 `src/pages/site/layout.ts` 或新建 `src/pages/site/schema.ts`：

```typescript
/**
 * 生成工具页 JSON-LD 脚本标签。
 * @param schemas - 一个或多个 Schema.org 对象
 * @returns 可插入 <head> 的 script 字符串
 */
export function renderJsonLd(schemas: Record<string, unknown>[]): string {
  const payload = schemas.length === 1 ? schemas[0] : schemas;
  return `<script type="application/ld+json">${JSON.stringify(payload)}</script>`;
}
```

各页面通过 `extraHeadHtml` 传入。

---

## 6. i18n 字段完整清单

每个新工具在 `src/site/i18n/{lang}.ts` 中须有以下字段（10 语言全部补齐）：

### 6.1 必填字段

| 字段 | 用途 | 字数要求 |
|---|---|---|
| `tool_{slug}_title` | H1、title 前半 | 简洁含主关键词 |
| `tool_{slug}_description` | meta description、首屏摘要 | 80–160 字符 en |
| `tool_{slug}_article` | 正文主说明（可拆为各 H2） | ≥ 150 词 en |
| `tool_{slug}_how_step1..3` | How it works | 每步 1 句 |
| `tool_{slug}_example1_input` | 示例输入 | 具体值 |
| `tool_{slug}_example1_output` | 示例输出 | 具体值 |
| `tool_{slug}_faq_q1..2` | FAQ 问题 | 自然语言问句 |
| `tool_{slug}_faq_a1..2` | FAQ 答案 | 40–120 词 |

### 6.2 条件字段

| 字段 | 何时需要 |
|---|---|
| `tool_{slug}_formula` | 计算/转换类 |
| `tool_{slug}_disclaimer` | YMYL 类 |
| `tool_{slug}_ref1_label` | 有权威来源可引用 |
| `tool_{slug}_use_case1..3` | article 未覆盖场景 |
| `tool_{slug}_privacy_note` | 文件本地处理类 |

### 6.3 英文写作模板（复制即用）

```typescript
// === 计算器类工具 i18n 模板 ===
tool_{slug}_title: '{Primary Keyword}',
tool_{slug}_description:
  '{One-line value}. Process: {step1}, {step2}, {step3}. Example: {input} → {output}.',
tool_{slug}_article:
  '{What the tool does}. {Who should use it}. {Key benefit vs alternatives}.',
tool_{slug}_how_step1: '{Verb} {input/action}.',
tool_{slug}_how_step2: 'Click {button name} to {compute/convert/process}.',
tool_{slug}_how_step3: 'Review the {result type} and {optional export}.',
tool_{slug}_formula: '{Formula in standard notation}.',
tool_{slug}_example1_input: '{Concrete input values}',
tool_{slug}_example1_output: '{Concrete output with units}',
tool_{slug}_faq_q1: 'What is {concept}?',
tool_{slug}_faq_a1: '{Definition with authority reference}.',
tool_{slug}_faq_q2: 'How accurate is this {tool}?',
tool_{slug}_faq_a2: '{Limitations and scope}.',
tool_{slug}_disclaimer: 'This tool is for informational purposes only...',
```

---

## 7. 三种工具类型差异化

### 7.1 计算器（Calculator）

**示例**：BMI、ROI、边际收益、百分比变化

| SEO 重点 | 要求 |
|---|---|
| 公式 | 必须可见，含变量说明 |
| 示例 | 带具体数字 |
| 结果解读 | 分类表/阈值（如 BMI 四档） |
| Schema | WebApplication + HowTo + FAQPage |
| YMYL | 健康/财务须 Disclaimer + References |

### 7.2 转换器（Converter / Formatter）

**示例**：Markdown→HTML、JSON Formatter、Base64、单位换算

| SEO 重点 | 要求 |
|---|---|
| 处理规则 | 说明支持/不支持哪些语法或格式 |
| 示例 | 转换前后对比（before / after） |
| 隐私 | 本地处理声明（如适用） |
| Schema | WebApplication + HowTo |
| FAQ | 「支持哪些格式？」「数据是否上传？」 |

### 7.3 检测器（Checker / Fetcher）

**示例**：Website Headers、IP Address

| SEO 重点 | 要求 |
|---|---|
| 流程说明 | 请求如何发出、返回什么 |
| 结果解读 | 常见 Header 含义表 |
| 限制说明 | 如「不请求 localhost」 |
| Schema | WebApplication + FAQPage |
| EEAT | 引用 IETF RFC、MDN |

---

## 8. 现有工具页差距审计

以 BMI 页（最佳范例）为基准，对比各现有工具：

| 工具 | title/desc | H1 | 工具区 | article | 公式 | 示例 | FAQ | Schema | 面包屑 | References |
|---|---|---|---|---|---|---|---|---|---|---|
| BMI | ✅ | ✅ | ✅ | ⚠️ 短 | ✅ 图表 | ⚠️ 隐含 | ❌ | ❌ | ❌ | ❌ |
| ROI | ✅ | ✅ | ✅ | ⚠️ | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| Headers | ⚠️ desc | ✅ | ✅ | ⚠️ 短 | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| IP Address | ⚠️ desc | ✅ | ✅ | ⚠️ 短 | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Markdown | ⚠️ desc | ✅ | ✅ | ⚠️ | ❌ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| Square Feet | ✅ | ✅ | ✅ | ⚠️ | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| Percentage | ✅ | ✅ | ✅ | ⚠️ | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ |
| Gradient | ✅ | ✅ | ✅ | ⚠️ | ✅ | ⚠️ | ❌ | ❌ | ❌ | ❌ |

**共性问题**（新工具页须避免）：

1. 无 JSON-LD
2. 无 FAQ 区块
3. 无面包屑
4. 无 References
5. `article` 偏短，未拆 H2 分节
6. 侧栏为全站工具列表，非集群过滤

**存量优化优先级**：

1. **P0**：layout 层统一注入 Schema + 面包屑（一次改动覆盖全站）
2. **P1**：BMI / ROI 补 FAQ + References + Disclaimer（YMYL 示范）
3. **P2**：Headers / IP / Markdown 扩展 description + article
4. **P3**：全部工具补 example 数值块

---

## 9. 新工具页实施 Checklist

### 9.1 内容（Content）

- [ ] 主关键词在 title、H1、description 中各出现 1 次（自然）
- [ ] description 80–160 字符，含步骤 + 示例
- [ ] `npm run lint:seo` 通过
- [ ] How it works 3 步，与 UI 一致
- [ ] 至少 1 个输入→输出数值示例
- [ ] FAQ ≥ 2 条
- [ ] Related tools ≥ 2 个同集群链接
- [ ] References ≥ 1 条（YMYL ≥ 2 条）
- [ ] YMYL 含 Disclaimer
- [ ] 文件类含「本地处理不上传」说明
- [ ] 10 语言全部字段齐全，人工审核翻译

### 9.2 技术（Technical）

- [ ] `src/site/tools.ts` 注册 slug
- [ ] `src/pages/{name}Page.ts` 按模板渲染
- [ ] `src/index.ts` 注册路由
- [ ] canonical 正确（apex + 语言前缀）
- [ ] hreflang 10 语言 + x-default
- [ ] JSON-LD：WebApplication + HowTo + FAQPage + BreadcrumbList
- [ ] Schema 文本与可见内容一致
- [ ] sitemap 包含全部语言 URL
- [ ] 工具脚本不阻塞 LCP（WASM 懒加载）
- [ ] 表单元素有 `<label>` 和 `aria-*`

### 9.3 验证（Validation）

- [ ] [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [ ] PageSpeed Insights（LCP / INP / CLS）
- [ ] 人工 incognito 搜索主关键词，对比 SERP 竞品
- [ ] GSC URL Inspection（接入后）

---

## 10. 完整示例：JSON Formatter 单页 SEO 草案

### 10.1 Meta

```
Title:    JSON Formatter and Validator | Online Free Tools
Slug:     /tools/json-formatter
Cluster:  C05 Developer Tools
```

**Description (en)**:

```
Format and validate JSON online with instant error detection. Process: paste raw JSON, click Format, review indented output or syntax error. Example: {"name":"Ada","age":36} → pretty-printed 2-space JSON.
```

### 10.2 可见内容大纲

```html
<h1>JSON Formatter and Validator</h1>
<p class="text-muted">{description}</p>

<!-- 工具区：textarea 输入 + Format 按钮 + 输出区 -->

<h2>How it works</h2>
<ol>
  <li>Paste your raw JSON into the input area.</li>
  <li>Click <strong>Format</strong> to beautify with 2-space indentation.</li>
  <li>Copy the result or fix any syntax error shown.</li>
</ol>

<h2>Processing rules</h2>
<p>Supports standard JSON (RFC 8259). Does not support JSON5 comments or trailing commas.</p>

<h2>Example</h2>
<p><strong>Input:</strong> <code>{"name":"Ada","skills":["math","computing"]}</code></p>
<p><strong>Output:</strong></p>
<pre>{
  "name": "Ada",
  "skills": ["math", "computing"]
}</pre>

<h2>Use cases</h2>
<ul>
  <li>Debug API responses during development</li>
  <li>Prepare JSON config files for deployment</li>
  <li>Validate JSON before importing into applications</li>
</ul>

<h2>FAQ</h2>
<details>
  <summary>Is my JSON data uploaded to a server?</summary>
  <p>No. Formatting runs entirely in your browser. Data never leaves your device.</p>
</details>
<details>
  <summary>What JSON formats are supported?</summary>
  <p>Standard JSON per RFC 8259. For JSON5 (comments, trailing commas), use our JSON5 converter.</p>
</details>

<h2>Related tools</h2>
<ul>
  <li><a href="/tools/base64-encode-decode">Base64 Encoder/Decoder</a></li>
  <li><a href="/tools/markdown-to-html">Markdown to HTML</a></li>
</ul>

<h2>References</h2>
<ul>
  <li><a href="https://www.rfc-editor.org/rfc/rfc8259">RFC 8259 — The JavaScript Object Notation (JSON) Data Interchange Format</a></li>
</ul>
```

### 10.3 JSON-LD（精简）

```json
[
  {
    "@type": "WebApplication",
    "name": "JSON Formatter and Validator",
    "applicationCategory": "DeveloperApplication",
    "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
  },
  {
    "@type": "HowTo",
    "name": "How to Format JSON Online",
    "step": [
      { "@type": "HowToStep", "position": 1, "name": "Paste JSON", "text": "Paste raw JSON into the input area." },
      { "@type": "HowToStep", "position": 2, "name": "Format", "text": "Click Format to beautify with 2-space indentation." },
      { "@type": "HowToStep", "position": 3, "name": "Copy result", "text": "Copy the formatted output or fix syntax errors." }
    ]
  }
]
```

---

## 11. 单页 SEO 常见错误

| 错误 | 后果 | 正确做法 |
|---|---|---|
| 只有输入框，无说明文字 | 薄内容；AI 无法引用 | 补充 How it works + Example |
| description 仅一句话 | CTR 低；lint:seo 警告 | 三段式：价值+步骤+示例 |
| title 堆砌关键词 | 可能被视为 spam | 一个主关键词 + 品牌 |
| Schema 评分/评论造假 | 手动处罚风险 | 不加 aggregateRating |
| 10 语言机器翻译直出 | E-E-A-T Trust 低 | 人工审核 |
| 隐藏关键词文本 | spam 政策违规 | 所有文字可见 |
| 每工具独立 ad 页无关联 | 无集群权重 | Related tools 内链 |
| dateModified 频繁刷新无改内容 | 信任降低 | 仅实质更新时变更 |
| WASM 工具首屏加载 5MB | CWV 差，排名受损 | 点击后懒加载 |
| FAQ 答案复制竞品 | 无 Information Gain | 加入本地处理等独特 FAQ |

---

## 12. 与站点级策略的关系

| 层级 | 文档 | 关注点 |
|---|---|---|
| **单页（本文）** | 单工具页面 SEO 策略 | 页面结构、Meta、内容区块、Schema、i18n 模板 |
| **站点** | 工具 SEO 战略 | 集群、关键词优先级、发布节奏 |
| **技术** | SEO_ANALYSIS_PLAN | Sitemap、GSC、CWV 基建 |
| **规则** | SEO_TOOL_RULES | description 最低要求 |

---

## 13. 结论

单工具页 SEO 的核心公式：

> **即时可用的工具 + 结构化说明（步骤/公式/示例/FAQ）+ 一致 Schema + 集群内链 + 多语言 = 可排名、可引用、可转化的工具页**

**新工具页最低交付标准**（不可妥协）：

1. 三段式 description（`lint:seo` 通过）
2. H1 + 首屏工具区 + 4 个 H2 区块（How / Example / FAQ / Related）
3. 4 种 JSON-LD（WebApplication / HowTo / FAQPage / BreadcrumbList）
4. 10 语言 i18n 完整
5. YMYL 加 Disclaimer + References

**下一步工程建议**：在 `layout.ts` 或新建 `schema.ts` + `breadcrumb.ts` 中统一注入 Schema 与面包屑，避免每个工具页重复实现。

---

*维护说明：每新增工具时，在 §8 差距审计表追加一行；每季度抽检 3 个工具页的 Rich Results 与 GSC 表现。*
