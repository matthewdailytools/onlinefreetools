# 内链与外链落地执行案（2026-08-09）

> 权威：Google [Link best practices](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)、[Qualify outbound links](https://developers.google.com/search/docs/crawling-indexing/qualify-outbound-links)、[Link spam](https://developers.google.com/search/docs/essentials/spam-policies#link-spam)。  
> 摘要回链：[策略文档 §7](../../2026-07-28-google-seo-strategy-implementation.md#7-链接策略摘要)。  
> 入站月度清单：[ops/seo/inbound-link-outreach.md](../../../ops/seo/inbound-link-outreach.md)。

## 1. 目标

用可爬、描述性锚文本的内链强化主题理解与发现；用权威出站强化 Trust；白帽获链，禁止买链/交换/PBN。

## 2. 内链三级

| 级 | 作用 | 本站落点 | 锚文本 |
|---|---|---|---|
| L1 发现 | 爬取与可达 | 首页卡片、nav、taxonomy、侧栏、sitemap | 本地化工具 **title**（主锚）；Open 仅次要 CTA |
| L2 主题 | 主题相关信号 | `tool-catalog.d/*/related` ≥ 2；同簇互链优先 | 目标工具 title |
| L3 语境 | 上下文权重 | How / Use cases 内自然 `<a href>`（优先健康/财务/PDF） | 自然工具名，禁堆砌 |

规范 URL：默认语（en）内容链用 **无前缀** `/tools/...`（`withLangPath`）；语言切换器才用 `withExplicitLangPath`（含 `/en/`）。

## 3. 出站（References）

- 每工具 ≥ **1** 条可点击权威链；YMYL ≥ **2**。
- WHO / CDC / IETF / NIST / Schema.org / CommonMark / Investopedia 等 → **dofollow**（`noopener noreferrer` 即可）。
- 用户提交 URL → `ugc` 或 `nofollow`；付费 → `sponsored`（当前无）。
- **不对**权威 References 一律加 nofollow。

## 4. 入站（获链）

- 自然优先；每月 2–4 次白帽触点（见 ops 清单）。
- 锚文本品牌或自然描述；不要求 exact-match。
- Disavow 仅 Manual Action / 明显攻击。

## 5. 主题簇映射（对齐策略 §4）

| 簇 | scenario / category | 典型 slug |
|---|---|---|
| C01 健康 | `health` | bmi, bmr-tdee, body-fat, ideal-weight, macros, heart-rate |
| C02 财务 | `finance` | roi, cagr, npv, irr, margins, debt-payoff, inflation… |
| C03 数学统计 | `math` | mean, median, z-score, sample-size, slope… |
| C04 测量/施工 | `construction` / unit | square-feet, unit-converter, tile, concrete, paint |
| C05 开发者 | `developer` | yaml-json, text-diff, markdown, headers, dns… |
| C06 文档媒体 | `pdf` / `image` | compress-pdf, merge-pdf, image-compress… |
| C07 日常/体育 | `everyday` / `sports` | tip, age, pace, one-rep-max |
| C08 设计 | `design` | brand-*, wcag, color-from-image |

`related` 优先同簇；跨簇仅当真实工作流上下游（如 pdf-to-jpg ↔ images-to-pdf）。

## 6. 工程门禁

`npm run lint:seo` → `validate-tool-links.mjs`：

| 规则 | 级别 |
|---|---|
| related ≥ 2；slug 存在；无自链/重复 | fail |
| 零 inbound related | warn（修完可升 fail） |
| 页面 References ≥1；YMYL ≥2 | fail |

## 7. 验收

- 默认语首页/nav 工具链 → `/tools/...`（与 sitemap 一致）
- Related 同标签打开；锚文本 = 工具 title
- 零 inbound related 清零或仅剩个位数 warn
- 不做获链数量 KPI；辅证看 GSC「已发现未编入」是否改善

## 8. 明确不做

新建全集 `/topics/*`、买链/交换、FAQ 富文本引擎大改、为 AI Overview 单独做链接花样。
