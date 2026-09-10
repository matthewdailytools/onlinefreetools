# 下一步 SEO 策略（2026-09-10）

> 基于 [`01-analysis-review.md`](./01-analysis-review.md)；可执行任务见 [`03-todo.md`](./03-todo.md)。  
> 上轮策略：[`../2026-08-12/02-next-strategy.md`](../2026-08-12/02-next-strategy.md)（CTR 原则仍有效；本轮把 P0 从「深排名改 title」切到「前十收割」）。  
> 索引：本夹无 Coverage；消化期结论见 [`../2026-09-07/04-crawled-not-indexed.md`](../2026-09-07/04-crawled-not-indexed.md)。

---

## 战略优先级（P0 → P2）

### P0：CTR 收割 — 已经排进前 10～15 的零点击页

**原则**：有展示、排名已可点、无点击 → **title 前 40 字符 = 检索主词 + 用户扫一眼能确认的数字/产品词**；description 首句重复意图。不先扩 URL、不先对头词再改第四版 H1。

金标（本周已转化）：`/tools/magnet-link-decoder` 排名 5.8、CTR 7%。复制的是「查询原句在 title 最前」，不是「再堆同义词」。

| 页面 | 依据（7 日） | 策略 |
|---|---|---|
| 两篇 Cursor SOCKS / settings.json 日志 | 418+146 展示、排名 ~6.4、0 点击；占全站展示 14% 的大头 | **改 HTML title/description**：前置 `cursor.general.disableHttp2`、`http.proxy`、`http.proxySupport`、settings.json。保持 People 可索引。禁止改 `Visibility: project` 清展示 |
| `/es/tools/how-to-calculate-aspect-ratio` | 84 / 8.99 | 抽查真实 SERP snippet；title 前半可加 16:9 / 1920×1080 |
| `/zh/tools/how-to-calculate-concrete` | 56 / 7.70 | 维持「混凝土计算器」；snippet 对齐「方量 / m³」；**禁止**承接俄语楼板配筋查询 |
| `/zh/tools/how-to-calculate-payback-period` | 17 / **5.53** | 去重 description 重复免责；首句保留「回收期计算器」 |
| `/zh/tools/how-to-calculate-percentage-change` | 21 / 6.29 | title 改为含「计算器」（德语同页已出点击） |
| `/zh/tools/how-to-calculate-debt-payoff` | 34 / 7.26 | 去重免责；YMYL 口吻保持克制，但不要让套话占满 snippet |
| `/id/tools/linkedin-banner-size`（及 ru 同 slug） | 11 / ~9.7；查询 ukuran banner linkedin 排名 9.5 | title 补 **1584×396**；不新建尺寸变体 URL |
| `/tools/find-and-validate-xml-sitemap` | 查询 sitemap xml checker **排名 1**、0 点击 | title 纳入 **XML sitemap checker**（校验 ≠ 生成；现 title 缺 checker） |
| `/ja/tools/how-to-calculate-marginal-revenue` | 10 / 6.70；查询 限界収入 求め方 | **停改 H1**（已含求め方）。人工打开 Google SERP 看 snippet 是否被改写成不像计算器。下一步才是 FAQ 首问「求め方」对齐教材口径 |
| `/ja/tools/square-feet` | 19 / 10.21 | title 去掉 `⇔`，改成「平方フィートを平方メートルに換算」 |

中文计算器是本轮新 L1 资产（多页排名 5–10）。收割时顺手修 **description 重复免责**（质量债，见复盘 §7）。

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
| pt mean | 75 / 19.5 | P1 观察；若下轮 ≤15 仍 0 点击再拧 title |

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
| 第四次只改 de IP / fr ROI 的 H1 | 头词 + 已对齐；杠杆换成 FAQ/时间 |
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

1. **两篇 Cursor 日志**在 title 改后 14 天内 CTR>0 → 把同一 title 模式（查询键名前置）套到其他高展示 People 日志；若仍 0 → 人工看 SERP 是否被改写成站名/文件名。
2. **es aspect-ratio / 任一 zh 前十计算器 / id LinkedIn** 28 天 CTR>0 → 复制该 title 模式到同 slug 其他高排 locale。
3. **ja MR** 28 天仍 0 点击且排名 ≤10 → 不再改 title；只允许 FAQ/Example 教材口径，或接受「求め方」信息型 SERP 点击上限很低。
4. **es sqft** 28 天排名仍 ≤20 且 CTR=0 → 再改 title 前 30 字（08-12 门延期到真正 28 天）。
5. **de IP** 不设「必须进前 20」。成功标准改为：`meine ipv6 adresse` 子查询排名是否离开 80，或 de 页出现任何点击。
6. **已抓取未索引** 若 Coverage 仍以 PDF/prompt/计算器同构簇为主 → 维持消化 + 内链；禁止批量请求编入索引。

---

## 与站内规则对齐

- 权威序：`seo-google-policy.mdc` → `lint:seo` → rules → docs  
- 文案：`tool-i18n-localization.mdc`（重写非翻译；改 description 时去掉重复免责）  
- 漏斗：[`../keyword-to-tool-funnel.md`](../keyword-to-tool-funnel.md)；absorb 结论回写 [`../keyword-to-tool-tracker.md`](../keyword-to-tool-tracker.md)  
- 发布：`SEO_PUBLISH_CHECKLIST.md`  
- 归档：[`../README.md`](../README.md)
