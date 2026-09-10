# 下一步 SEO 策略（2026-09-10）

> 基于 [`01-analysis-review.md`](./01-analysis-review.md)；可执行任务见 [`03-todo.md`](./03-todo.md)。  
> 上轮策略：[`../2026-08-12/02-next-strategy.md`](../2026-08-12/02-next-strategy.md)。**08-08/08-20「有展示 → 只改 title」在 P0 原名单上未带来点击**（见下节门禁）。本轮禁止把同一模式再套到 title 已对齐、或排名仍 >20 的页。  
> 索引：本夹无 Coverage；消化期结论见 [`../2026-09-07/04-crawled-not-indexed.md`](../2026-09-07/04-crawled-not-indexed.md)。

---

## 战略优先级（P0 → P2）

### 先换规则：08 月「只改 title」在哪些页已经失败

那套打法是：有展示、0 点击 → title 前置检索词 + description 首句重复意图。  
用 09-10 的 7 天窗验收 **08-08 / 08-20 点名页**：

| 结果 | 页 | 所以 |
|---|---|---|
| 排名几乎不动、0 点击 | de IP（89→90）、pt/fr ROI（仍 70+）、es sqft（钉在 ~24） | **禁止**再只改 title。头词 / 未进前 20 = 换 FAQ·Example·时间，或接受展示但不作为 CTR KPI |
| 主词已在 H1、已在前十、仍 0 点击 | ja 限界収入（8.8→6.7，title 已含「求め方」） | **禁止**再改 H1。先看真实 snippet / 意图是不是教材页 |
| 排名变好、仍不在可点区、0 点击 | en MR（65→23）、schema（76→49） | 一次 title 可以帮排名；**同一 URL 不连改第二轮 title** 来「再挤 CTR」 |
| 窗口里几乎消失 | es 体积、ru image-merge、en NPV | 不够数据；**不**用同一模式重做一遍当补救 |

整站点击变多，来自 **从未走过这套 P0 名单、却已经排到 1–7 名** 的页（磁力解码 CTR 7%）。说明「前十会点」仍成立；失败的是 **对错页反复只改 title**。

**以后改 title 必须同时满足**：① 平均排名 ≤15；② 现行 title **缺**查询里用户会扫到的词（不是近义换皮）；③ 该 locale 的这条 URL **还没做过**「前置该主词」的一轮。缺任一条 → 不改 title。

### P0：只动「缺词 / 坏 snippet」，不动「已经对齐过」

| 页面 | 是否过门禁 | 策略 |
|---|---|---|
| 两篇 Cursor SOCKS / settings.json 日志 | **过**：排名 ~6.4，title 不含 `disableHttp2` / `http.proxy` | 改 HTML title 前置这些键。People 可索引。禁止 `Visibility: project` |
| `/tools/find-and-validate-xml-sitemap` | **过**：查询 checker 排名 1，title 无 checker | title 纳入 **XML sitemap checker**（校验 ≠ 生成） |
| `/zh/tools/how-to-calculate-percentage-change` | **过**：前十，title 是「百分比变化计算」缺「计算器」 | 补「计算器」**一轮**。德语同页已出点击 |
| `/zh/tools/how-to-calculate-payback-period`、`debt-payoff` 及同源中文计算器 | 改的是 **重复免责**，不是再前置主词 | 去重 description。这是质量债，不是 08 月 title 模式 |
| `/ja/tools/square-feet` | 窄：`⇔` 会破坏 snippet，不是换主词 | 去掉 `⇔`，不另堆关键词 |
| `/es/tools/how-to-calculate-aspect-ratio` | **不过**：title 已是 Calculadora de relación de aspecto，排名 9，形态 = ja MR | **禁止**再拧 title（含加 16:9）。只抽查 SERP snippet |
| `/zh/tools/how-to-calculate-concrete` | **不过**：title 已是「混凝土计算器」 | **禁止**再改 H1。只抽查 snippet；禁止吸收楼板配筋词 |
| `/id/` `/ru/` `linkedin-banner-size` | **不过**：H1 已是查询原句 ukuran / размер баннера LinkedIn | **禁止**再改 title（含补 1584×396 也算同一模式）。先看 snippet 是否已显示尺寸 |
| `/ja/tools/how-to-calculate-marginal-revenue` | **不过**（08-08 已对齐） | **停改 H1**。只看 SERP 是否被改写 |

中文计算器仍是 L1 观察面。进前十且 title 已含「计算器」的，**观察 28 天**，不批量再写一轮 H1。

### P0：devlogs 注意力隔离（不是 noindex）

- People 篇继续可索引、进 sitemap — 这是规则，也符合本周 Cursor 查询真实需求。
- 两篇高展示日志必须像工具页一样做 **检索向 title**，否则会继续用排名 6 吸走展示、0 点击，拉低全站 CTR。
- 工程噪声日志（R2 key、health-check、Cache API 等小展示）保持现状即可；不必批量改 title。

### P1：深排名页 — 换杠杆，停空转 title

| 页面簇 | 依据 | 策略 |
|---|---|---|
| de IP | 265 展示 / 排名 90；title 已是「Was ist meine IP-Adresse?」 | **触发 08-12 门**：de FAQ/Example 补 **IPv6 是什么、VPN 退出 IP**。H1 不再改。头词不进进攻 KPI |
| compare-two-text-files-online | 183～254 展示 / ~73 | 维持一页；近义查询进 FAQ。禁止再拆 compare/diff URL |
| es/de/fr/zh square-feet | es 94 / 24.3 | 未稳在 ≤20。房产 Use cases 微调可以；不拆 URL |
| fr/es/pt/de ROI、es CAGR | 排名 70+ | 第三轮只改 meta **无效**。要动就按 locale brief 做 Example/FAQ，且排在前十收割之后 |
| pt mean | 75 / 19.5 | 观察。即使下轮 ≤15 且 0 点击：先看 title 是否已含 média/calculadora；已含则 **不**再拧 title |

### P1：语种产能分层（按本轮修正）

| 层级 | 语言 | 策略 |
|---|---|---|
| L1 | en、**zh** | zh 计算器满 IG + 本轮 CTR 收割；en 继续 magnet / compare / 开发者工具 |
| L2 | es、de、pt、fr、ja、ru、**id** | id 因 LinkedIn 前十升观察；ru 本周有磁场/薪资/安全 hub 点击 |
| L3 | ar | 展示仍薄；不急 IndexNow 全量 |

**不砍语种。** 德/法/西展示高，是排名深，不是语种错。

### P1：索引（沿用 09-07，本夹无新 Coverage）

- 工具多语仍是消化期；禁止为凑收录批量改 thin 页或砍语种。
- `/en/` 301、`Disallow: /api/` 保持。
- 新工具 / 本轮 meta 大改后 **IndexNow 增量**（改过的 slug + 两篇日志 URL），禁止十语全站重推。
- 下轮导出必须带 Coverage，才能判断 09-07 的 92 条「已抓取未索引」是否在滚。

### P2：漏斗 / 深度 IG

- GSC 查询 **优先 absorb**。本批没有新的 `long_gap` 立项信号。
- 俄语「раскладка плит перекрытия / расчет плиты」= 结构布置，**drop/defer**，不并进混凝土体积页、不本周开 work-tasks。
- 排名持续 >70 且长窗口仍有展示的 ROI / de IP：brief 第二轮排在 P0 收割之后。
- 周新建工具配额不变（≤1–2，满 IG）；**不**用本 GSC 批去占 build 名额。

---

## 明确不做

| 动作 | 原因 |
|---|---|
| 为 compare / sqft / ROI / IP 再拆近义 URL | doorway / scaled content |
| 把 Cursor 日志改 project/noindex 以「美化 CTR」 | 对人有用、已有真实查询；应改 title |
| 对 title 已含主词的页再走「前置检索词」 | 08-08 ja MR / es sqft / de IP 已证伪只改 title 能换 CTR |
| 第四次只改 de IP / fr ROI 的 H1 | 头词 + 已对齐；杠杆换成 FAQ/时间 |
| 给 es 宽高比 / zh 混凝土 / id LinkedIn 再改 H1 | 主词已在 title，与 ja MR 同一失败类 |
| 把楼板配筋查询做成混凝土体积页的 Use case | 意图不同，且近 YMYL 结构安全 |
| 用查询表 CTR=0 判定「所有词都没人点」 | GSC 匿名化；点击在网页维度 |
| 用 7 日数据结案 08-20 meta（schema / es volume / en NPV / ru merge） | 窗口仍短于 28 天；这些 slug 本周未再成为 Top 展示 |
| 以 FAQ 富结果为 KPI | 2026-05 已退役；本轮呈现报表为空，符合预期 |
| 因未编入索引砍语种 | 09-07 已定性为消化期 |
| SERP/GSC 日抽后日建工具页 | keyword-to-tool-funnel |

---

## 下轮导出与决策门

**建议时间**：2026-09-24～2026-10-08  
**强制**：效果报告选 **过去 28 天**；**同时**导出 Coverage（及如有「已抓取未索引」drilldown）。

**决策门**：

1. **两篇 Cursor 日志**在 title 改后 14 天内 CTR>0 → 只把「title 缺查询键」这条套到其他 **同样缺词** 的 People 日志；若仍 0 → 看 SERP 是否被改写，**不**再写第三版 title。
2. **es 宽高比 / zh 混凝土 / id LinkedIn / ja MR**：28 天仍 0 点击 → 接受信息型 SERP 上限，或只动 FAQ/Example；**禁止**再改 title。
3. **sitemap checker / zh 百分比变化**（本轮仅有的工具 title 实验）：14～28 天 CTR>0 才算「缺词补词」有效；若仍 0，该模式对工具页也停用。
4. **es sqft**：取消「排名 ≤20 再拧 title」。title 已含 calculadora；继续 0 点击只观察。
5. **de IP** 不设「必须进前 20」。成功标准：`meine ipv6 adresse` 是否离开 80，或 de 页出现任何点击。
6. **已抓取未索引** 若仍以 PDF/prompt/计算器同构簇为主 → 消化 + 内链；禁止批量请求编入索引。

---

## 与站内规则对齐

- 权威序：`seo-google-policy.mdc` → `lint:seo` → rules → docs  
- 文案：`tool-i18n-localization.mdc`（重写非翻译；改 description 时去掉重复免责）  
- 漏斗：[`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md)；absorb 结论回写 [`../keyword-to-tool-tracker.md`](../keyword-to-tool-tracker.md)  
- 发布：`SEO_PUBLISH_CHECKLIST.md`  
- 归档：[`../README.md`](../README.md)
