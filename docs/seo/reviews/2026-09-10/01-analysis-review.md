# GSC 分析复盘（2026-09-10）

**原始数据**：同目录 [`https___onlinefreetools.org_-Performance-on-Search-2026-09-10/`](./https___onlinefreetools.org_-Performance-on-Search-2026-09-10/)  
**效果区间**：**过去 7 天**（图表日 **2026-09-01～2026-09-07**；导出日 09-10，末两日延迟属正常）  
**搜索类型**：网络  
**本夹没有** Coverage / 「已抓取未索引」导出。索引结论仍以 [`../2026-09-07/01-analysis-review.md`](../2026-09-07/01-analysis-review.md) 为准。  
**对照基线**：[`../2026-08-08/01-analysis-review.md`](../2026-08-08/01-analysis-review.md)（4 日）、[`../2026-08-12/01-analysis-review.md`](../2026-08-12/01-analysis-review.md)（24h）。窗口不同，**禁止**用绝对点击数直接判上轮 meta 成败；可看日均展示、平均排名量级、以及「已进前十仍 0 点击」名单。

---

## 0. 数据边界（先读）

| 项 | 本轮 | 上轮效果（08-12） | 含义 |
|---|---|---|---|
| 效果窗口 | 7 日 | 24 小时 | 本轮首次能看见稳定点击，但仍短于上轮要求的 28 天 |
| 日均展示 | **~616/日**（4314 / 7） | ~300/日 | 发现面约翻倍 |
| 效果点击 | **19** | 0（24h） | 站点离开「零点击」阶段 |
| 整体 CTR | **0.44%** | 0% | 仍远低于健康站点；见 §2 分层 |
| 加权平均排名 | **37.4** | ~70.6（24h） | 排名中枢明显前移 |
| Coverage | 未导出 | 08-12 已编入 267 | 本轮不更新索引绝对数 |
| 查询表 | 1000 行、**点击列全 0**、展示合计 1949 | — | GSC 对低频查询**匿名化点击**；真实 19 次点击只在「网页 / 图表 / 国家 / 设备」里。**禁止**用查询表 CTR=0 下结论 |

**复盘结论（一句话）**：站点已从「广覆盖、几乎零点击」进入「**日均展示 600+、前十页开始出点击、CTR 仍被深排名展示和两篇 Cursor 日志稀释**」。杠杆不再是「再改一轮深排名头词 title」，而是 **收割已经排到前 10～15 的零点击页**，并把 **devlogs 14% 展示**从噪音变成可点或从工具注意力里隔离。

---

## 1. 总览

图表合计（权威）：

| 日期 | 点击 | 展示 | CTR | 排名 |
|---|---|---|---|---|
| 2026-09-01 | 1 | 339 | 0.29% | 28.6 |
| 2026-09-02 | 0 | 483 | 0% | 36.8 |
| 2026-09-03 | 4 | 726 | 0.55% | 43.2 |
| 2026-09-04 | 2 | 723 | 0.28% | 42.2 |
| 2026-09-05 | 4 | 622 | 0.64% | 38.4 |
| 2026-09-06 | 1 | 661 | 0.15% | 37.4 |
| 2026-09-07 | **7** | **760** | **0.92%** | **31.0** |
| **合计** | **19** | **4314** | **0.44%** | **37.4**（展示加权） |

网页表 655 URL、展示 4530、点击 19（与图表差 ~5%，GSC 维度合计常见差异，用图表作总量）。

查询排名桶（查询表 1949 展示，**低估**真实分布，但形状可信）：

| 排名桶 | 查询表展示 | 查询表点击 |
|---|---|---|
| 1–10 | 94 | （匿名） |
| 11–20 | 87 | （匿名） |
| 21–40 | 105 | （匿名） |
| 41–70 | 609 | （匿名） |
| 71–100 | 1054 | （匿名） |

约 **85%** 的可归因查询展示仍在 41 名之后。CTR 低的主因是 **位置**，不是「本站 snippet 永远没人点」。

---

## 2. 点击从哪来（可复制模式）

本周 **17 个 URL、19 次点击**。几乎全部发生在 **平均排名 ≤15**（唯一例外：`/de/tools/how-to-calculate-percentage-change` 平均 61 仍拿 2 次点击，说明该德语簇里有更靠前的子查询）。

| URL | 点击 | 展示 | CTR | 排名 |
|---|---|---|---|---|
| `/tools/magnet-link-decoder` | 2 | 28 | **7.14%** | **5.82** |
| `/de/tools/how-to-calculate-percentage-change` | 2 | 28 | 7.14% | 61.07 |
| `/fr/tools/file-hash` | 1 | 12 | 8.33% | 2.75 |
| `/es/tools/unzip-file` | 1 | 11 | 9.09% | 14.45 |
| `/ja/tools/website-headers` | 1 | 6 | 16.67% | 6.5 |
| `/tools/image-merge` | 1 | 6 | 16.67% | 30.5 |
| `/fr/tools/domain-lookup` | 1 | 5 | 20% | 54.8 |
| `/zh/tools/images-to-ppt` | 1 | 3 | 33% | 3 |
| `/es/tools/markdown-to-html` | 1 | 3 | 33% | 4.33 |
| `/es/tools/how-to-calculate-confidence-interval` | 1 | 3 | 33% | 6.33 |
| `/ru/tools/measuring-magnetic-fields` | 1 | 3 | 33% | 22.67 |
| 其余 6 页（BMR、截图、DNS、OG、商品图压缩、ru security hub） | 各 1 | 1–2 | 50–100% | 1–3 |

**模式**：title 与查询字面重合、且排名进入前十时，本站 CTR **可以到 7%+**（magnet decoder 是金标）。问题页是「已经进前十、title 看起来也对、却 0 点击」——要么 snippet 被改写、要么意图是教程/官方站而非工具、要么 title 缺用户扫一眼就能确认的数字或产品词（如 1584×396、checker、计算器）。

---

## 3. 高展示页面：两类完全不同的问题

### 3.1 P0 收割：排名 ≤15、展示 ≥8、0 点击

这些页 **已经赢了发现**，差的是 SERP 卡片。优先改 title 前 40 字符 + description 首句，不扩 URL。

| URL | 展示 | 排名 | 现行 title（仓库） | 缺口 |
|---|---|---|---|---|
| `/devlogs/2026-08-21-23-47-cursor-socks-proxy-settings-json.html` | **418** | **6.40** | Summary：Give complete settings.json snippet… | 查询是 `cursor.general.disablehttp2` / `http.proxy`；title 未前置这些键。**单页占全站 ~9% 展示、0 点击** |
| `/devlogs/2026-08-06-21-21-cursor-ssh-socks-proxy-setup.html` | **146** | **6.54** | Summary：Explained Cursor SOCKS proxy… | 同上簇第二篇 |
| `/es/tools/how-to-calculate-aspect-ratio` | **84** | **8.99** | Calculadora de relación de aspecto — … | title 已含主词；须抽查真实 snippet 是否被改写；可把 16:9 / 1920×1080 放进 title 前半 |
| `/zh/tools/how-to-calculate-concrete` | **56** | **7.70** | 混凝土计算器 — 如何估算混凝土方量 | 词面对；0 CTR → 查 snippet / 是否被当成博客。勿把俄语「楼板配筋」意图并进来（见 §5） |
| `/pt/tools/how-to-calculate-percentage-change` | 42 | 11.24 | Calculadora de variação percentual — … | 葡语已对齐；观察，次优先 |
| `/zh/tools/how-to-calculate-debt-payoff` | 34 | 7.26 | 债务还清计算器 — 多久还清余额 | YMYL；description **重复粘贴免责声明**（质量信号差） |
| `/es/tools/how-to-calculate-gradient` | 26 | 10.46 | Calculadora de gradiente — ∇f… | 查询含 `calculadora de gradiente` / `formula gradiente`；∇f 对中学生可能过陡 |
| `/ru/tools/how-to-calculate-salary-hourly` | 23 | 8.39 | Калькулятор зарплаты в час — … | 词面对；补 FAQ 时薪/月薪场景 |
| `/es/tools/timezone-converter` | 23 | 9.35 | Convertidor de zona horaria — … | 可前置「convertidor de zona horaria / horario」 |
| `/zh/tools/how-to-calculate-percentage-change` | 21 | 6.29 | 百分比变化计算 — 旧值到新值的涨跌幅 | 缺「计算器」；德语同页已出点击，中文 title 应向「百分比变化计算器」靠 |
| `/ja/tools/square-feet` | 19 | 10.21 | 平方フィート⇔平方メートル換算 — … | `⇔` 不利于 snippet；改用「を」或「と」 |
| `/zh/tools/how-to-calculate-acceleration` | 18 | 10.00 | 加速度计算器 — 速度变化 | 对齐尚可；次优先 |
| `/zh/tools/how-to-calculate-payback-period` | 17 | 5.53 | 回收期计算器 — 多久收回投资 | 排名最好的中文页之一；description 同样重复免责 |
| `/zh/tools/how-to-calculate-profit-margin` | 11 | 4.82 | 利润率计算器 — … | 前五仍 0 点击 → snippet 抽查 |
| `/id/tools/linkedin-banner-size` | 11 | 9.73 | ukuran banner LinkedIn | 查询 **ukuran banner linkedin**（8 展示 / 排名 9.5）已字面命中；title **缺 1584×396** |
| `/ru/tools/linkedin-banner-size` | 11 | 9.64 | размер баннера LinkedIn | 同上，补像素 |
| `/ja/tools/how-to-calculate-marginal-revenue` | 10 | 6.70 | 限界収入の求め方 — MR計算ツール… | **上轮 08-08 起的 P0**。title 已含「求め方」。7 日仍 0 点击 → 下一杠杆是 description 首句 / 真实 SERP，不是再改 H1 |

查询层同样扎眼：

| 查询 | 展示 | 排名 | 动作 |
|---|---|---|---|
| sitemap xml checker | 4 | **1.0** | 现 title 是 *Find and validate XML sitemap*，**不含 checker** |
| 限界収入 求め方 | 5 | 6.60 | 见上 ja MR |
| ukuran banner linkedin | 8 | 9.50 | 见 id LinkedIn |
| magnet link decoder / magnet decoder | 3+3 | 4.3 / 6.7 | 已在出点击，维持 |
| check robots.txt online | 3 | 7.67 | 对照 `/tools/check-robots-txt-url-blocked` title 是否含 checker |

### 3.2 不要再空转 title：高展示、排名仍深

| URL | 展示 | 排名 | 判定 |
|---|---|---|---|
| `/de/tools/ip-address` | **265** | **90.22** | 08-08 起已改过 title（现 *Was ist meine IP-Adresse?*）。头词 SERP（whatismyip 类）**硬刚无效**。08-12 决策门「28 天仍 >70 → 开 de FAQ/Example」**已触发**。优先 IPv6（查询 Top1 `meine ipv6 adresse` 42 展示 / 83 名） |
| `/tools/compare-two-text-files-online` | 183 | 73.41 | slug 聚合 254 展示。title 已是查询原句。竞争簇，**禁止**再拆 compare/diff 近义 URL |
| `/es/tools/square-feet` | 94 | 24.26 | 08-12 曾 18.1；本窗口略退后。title 已含 calculadora / sq ft。未到「稳在 ≤20 且可再拧 title」；观察 + Use cases 房产场景 |
| `/de/tools/square-feet` | 85 | 53.34 | 深；维持 |
| `/pt/tools/how-to-calculate-mean` | 75 | 19.45 | 接近前 20；葡语 média 收割候选（P1） |
| `/fr/tools/how-to-calculate-roi` | 70 | 72.70 | 08-08 已改 title；仍深。**不要第三次只改 meta** |
| `/es/tools/how-to-calculate-cagr` | 49 | 73.78 | 同 ROI 簇，深排名 |

按 slug 聚合展示 Top：`ip-address` 311 · `square-feet` 290 · `compare-two-text-files-online` 254 · `compare-two-word-documents-for-differences` 160 · `how-to-calculate-roi` 152 · `how-to-calculate-percentage-change` 139（**已有点击**）· `how-to-calculate-aspect-ratio` 102（几乎全是 es 前十）。

---

## 4. 页面类型 / 语种 / 国家 / 设备

### 4.1 类型（网页表 4530 展示）

| 类型 | 展示 | 点击 | 占比 |
|---|---|---|---|
| 工具页 | 3697 | 18 | 81.6% |
| **devlogs** | **652** | **0** | **14.4%** |
| topics / hub | 154 | 1 | 3.4% |
| 信息页 | 16 | 0 | 0.4% |

47 个 devlog URL 有展示。两篇 Cursor SOCKS / `settings.json` 合计 **564**。它们按 `dev-logs.mdc` 是 **People 默认可索引**（对人有用），不是误收录。问题是 **title 与查询不对齐 + 站点品牌看起来不像 Cursor 文档**，所以前 6 名仍 0 点击。

`robots.txt` 允许 `/devlogs/`；`Disallow: /api/` 已在（08-12 待办此项可视为代码侧完成）。**不要**为了「清展示」把这两篇改 `Visibility: project`——那是有需求的人向内容。正确动作是改 HTML title/description 对齐 `http.proxy` / `disableHttp2`。

### 4.2 语种（devlogs 单列）

| 语种 | 展示 | 点击 | 占比 |
|---|---|---|---|
| en | 699 | 5 | 15.4% |
| es | 675 | 3 | 14.9% |
| **devlogs** | 652 | 0 | 14.4% |
| de | 605 | 2 | 13.4% |
| fr | 537 | 3 | 11.9% |
| **zh** | **467** | **3** | **10.3%** |
| pt | 311 | 0 | 6.9% |
| ru | 299 | 2 | 6.6% |
| ja | 164 | 1 | 3.6% |
| id | 90 | 0 | 2.0% |
| ar | 31 | 0 | 0.7% |

中文计算器大量进入前十，是本轮**新基本盘**。08-12 时 zh 几乎不可见。L1 产能应把 **zh 计算器 CTR** 与 en 并列。id LinkedIn 已有前十信号，可升观察层。仍 **无数据支持砍语种**。

### 4.3 国家（图表总量 4314）

| 国家/地区 | 点击 | 展示 | CTR | 排名 |
|---|---|---|---|---|
| 美国 | 0 | **1001** | 0% | 26.0 |
| 法国 | 0 | 432 | 0% | 61.8 |
| 德国 | 1 | 430 | 0.23% | 65.2 |
| 西班牙 | 1 | 280 | 0.36% | 53.5 |
| 巴西 | 0 | 236 | 0% | 23.8 |
| 俄罗斯 | 0 | 176 | 0% | 37.7 |
| 日本 | **2** | 168 | **1.19%** | 24.2 |
| 台湾 | 1 | 155 | 0.65% | **17.1** |
| 墨西哥 | 1 | 120 | 0.83% | 21.5 |
| 瑞士 | 0 | 115 | 0% | 89.6 |
| 印尼 | 0 | 102 | 0% | **15.3** |
| 中国 | 1 | 41 | 2.44% | **7.2** |

美国 1000 展示 0 点击 ≈ Cursor 日志 + compare-text + 英语深排名工具。德国展示几乎被 de IP（排名 90）吃掉。台湾/中国排名好、对应 zh 计算器。印尼排名 15 对应 LinkedIn banner。日本 CTR 相对最好。

### 4.4 设备

| 设备 | 点击 | 展示 | CTR | 排名 |
|---|---|---|---|---|
| 桌面 | 13 | 3343 | 0.39% | 42.2 |
| 移动 | 6 | 957 | **0.63%** | **21.0** |
| 平板 | 0 | 14 | 0% | 30.1 |

移动排名仍显著更好，CTR 也更高。title **前 30～40 字符**必须是检索主词；品牌后缀不要抢前位（当前 layout 也未强制加 `\| Brand`）。

搜索结果呈现 CSV 为空：无 FAQ/HowTo 富结果（2026-05 后退役，符合预期）。

---

## 5. 查询簇（漏斗含义）

查询表 1000 词、点击列全空，只能看展示与排名。粗聚类：

| 簇 | 约展示 | 均排 | verdict |
|---|---|---|---|
| compare files / word / text | ~401 | 67 | **absorb** 现有 compare-* 页；禁止再拆 URL |
| IP / meine IP / IPv6 | ~268 | 89 | **head 收割**；de 改 FAQ（IPv6/VPN），不改进攻 H1 |
| square feet / sqft / m² | ~116 | 52 | absorb 现页；es 观察 |
| ROI | ~114 | 74 | 深；不第三次只改 title |
| PDF 杂项 | ~72 | 43 | 已有 PDF 工具则 absorb；不新建近义 |
| 磁场测量 | ~53 | 69 | 已有 `measuring-magnetic-fields`（本周 ru 已出点击） |
| LinkedIn banner | ~47 | 39 | absorb；title 补像素 |
| **俄语楼板/重叠板 калькулятор** | **40** | **70** | **不要 absorb 进混凝土体积页**。用户要的是结构布置/配筋，不是板体积。YMYL 结构安全 → `drop`/`defer`，本周不立项 |
| 百分比变化 | ~50 | 73 | 德语已出点击；zh/pt 收割 title |
| Cursor settings.json | ~18（查询表）+ 564 页展示 | **~8** | 改 devlog title，不是新工具 |
| magnet decoder | 6 | **5.5** | 已在转化，维持 |

`ru/where-to-use-tools/construction/` 有 40 展示 / 排名 70，与楼板查询同簇——hub 页在抢本该给工具页的展示，但意图仍不是体积计算器。

---

## 6. 上轮决策门对照

| 门（08-12） | 本轮证据 | 结论 |
|---|---|---|
| 28 天总点击 ≥5 或 CTR≥1% | 7 日 19 点击、CTR 0.44% | 点击目标已超；CTR 未到 1%。复制「前十 + 主词前置」模式，不要复制深排名改 title |
| es sqft 28 天 CTR=0 且排名 ≤20 | 7 日：94 展示、排名 **24.3**、0 点击 | **未触发**「再拧前 30 字」。继续观察 |
| ja MR / es ROI 长窗口 | ja MR 再次露出（排名 ~6.7，仍 0 点击）；es ROI 本窗口几乎看不见 | ja MR：**停止改 H1**，改抽 SERP snippet；es/fr ROI 仍深 |
| de IP 28 天排名仍 >70 | **90.2**、265 展示 | **触发** → de IPv6/VPN FAQ + Example，非第四次 title |
| ru image-merge Top 且 CTR=0 | 本窗口 en `/tools/image-merge` 6 展示 1 点击；ru 合并页未进 Top | 08-20 ru meta 无法用本窗口证伪；不回滚 |
| 已抓取未编入下降 | 本夹无 Coverage | 沿用 09-07：主体仍是消化期 + `/en/` 噪声 |

08-12 待办「重新导出 28 天」**未满足**（本次是 7 天）。下轮必须补 28 天 + Coverage。

---

## 7. 内容质量债（与 CTR 相关）

多个中文计算器 `description` 把免责声明复制了两遍（至少 `how-to-calculate-debt-payoff`、`how-to-calculate-payback-period`；同句式还出现在 acceleration / present-value / IRR 等）。Google 可能把重复套话抽进 snippet，**直接伤害已进前十的中文页**。收割 zh 计算器时一并去重。

---

## 8. 待下轮对比的基准线

| 指标 | 本轮值 | 下轮目标（参考） |
|---|---|---|
| 导出窗口 | 7 日 | **≥28 天** + Coverage 全量 |
| 日均展示 | ~616 | 维持或升 |
| 7 日点击 / CTR | 19 / 0.44% | 28 日点击按比例 ≥70，或 CTR ≥1%（排除 devlogs 后应更高） |
| 工具页 CTR（剔 devlogs） | 18/3697 ≈ 0.49% | ≥1% |
| 两篇 Cursor 日志 CTR | 0% @ 排名 ~6.4 | title 改后 >0%，或明确接受为品牌外流量 |
| es aspect-ratio CTR | 0% @ 8.99 / 84 展示 | >0% |
| zh concrete / payback / %change CTR | 0% @ 前十 | 至少一页 >0% |
| id LinkedIn CTR | 0% @ 9.7 | >0%（title 含 1584×396 后） |
| ja MR CTR | 0% @ 6.7 | snippet 抽查后再定；不再以改 H1 为成功标准 |
| de IP 排名 | 90 | 不指望进前 20；看 IPv6 子查询是否离开 80+ |
| sitemap xml checker | 排名 1、0 点击 | title 含 checker 后 CTR>0 |
