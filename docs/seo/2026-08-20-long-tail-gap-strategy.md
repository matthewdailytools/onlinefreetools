# 长尾缺口优先：SEO 优化策略与执行方案

**日期**: 2026-08-20  
**标签**: `SEO`, `长尾`, `竞品缺口`, `关键词漏斗`, `Information Gain`  
**目标站点**: https://onlinefreetools.org  

**关联**:

- 漏斗执行：[keyword-to-tool-funnel.md](./keyword-to-tool-funnel.md) · Skill [`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md)
- **全站词根 Review**：[2026-08-20-tool-keyword-roots.md](./2026-08-20-tool-keyword-roots.md) · [tsv](./2026-08-20-tool-keyword-roots.tsv)
- 事项跟进：[keyword-to-tool-tracker.md](./keyword-to-tool-tracker.md)
- 运维入口：[ops/seo/keyword-to-tool-ops.md](../../ops/seo/keyword-to-tool-ops.md)
- Omni 对标（学结构不学页数）：[../2026-08-08-omnicalculator-seo-traffic-strategy.md](../2026-08-08-omnicalculator-seo-traffic-strategy.md)
- Google 落地底线：[../2026-07-28-google-seo-strategy-implementation.md](../2026-07-28-google-seo-strategy-implementation.md)
- 合规权威：`.cursor/rules/seo-google-policy.mdc` · `tool-i18n-seo.mdc`

> **一句话**：不与已有稳定流量的站点抢它们已吃满的大词；主攻其 **SERP 未覆盖 / 覆盖很薄** 的长尾意图。存量工具用 **词根 → Keyword Planner 长尾 → absorb 功能/SEO**；新意图仍走漏斗周建上限。

---

## 1. 策略变更（相对此前）

| 维度 | 旧习惯风险 | 本策略 |
|---|---|---|
| 选题 | 易被「搜索量大、竞品也强」的大词吸引 | **大词默认回避**（不作新建与主攻 KPI） |
| 对标 | 易跟 Omni / calculator.net / 泛工具站正面硬刚 | **找缺口**：它们无独立页、薄内容、错意图、或语言空白 |
| 产能 | 大词页难出效果却耗尽 IG 预算 | 周产能留给 `long_gap` / `locale_gap` |
| 已有曝光 | 与「抢大词」易混淆 | **已有 GSC 展示的大词/中词仍可做 CTR/meta 收割**（防守，非进攻立项） |

**不改变**：people-first、禁 doorway / scaled content、周建 ≤1–2 满 IG 工具、长尾默认 absorb 进一页、权威序仍以 Google Search Central 为准。

---

## 2. 核心定义

### 2.1 大词（head / 已占位流量词）

同时满足越多，越应标为 **回避**：

1. 意图泛、短、品类级（如 `bmi calculator`、`roi calculator`、`json to yaml`、`neodymium magnets`）
2. SERP 前 3–10 名被 **已有稳定流量** 的品牌/工具站反复占位（Omni、calculator.net、知名转换站、电商/百科等）
3. 前排多为成熟独立工具页或强权威页，本站无差异化入口也难进前页

**处理**：`competition_tier=head` → 默认 `verdict=drop` 或 `defer`；**禁止**为抢该词新建 URL 或把该词设为新工具唯一主词。

### 2.2 竞品已覆盖中长尾（covered）

- 竞品已有 **同意图独立页** 或深度公式/转换页
- 本站新建 = 正面分流，胜算低、合规成本高

**处理**：`competition_tier=mid_covered` → 仅当 catalog **已有同主意图 slug** 时可 `absorb` 补 FAQ/场景；否则 `defer`/`drop`，不立项硬刚。

### 2.3 未覆盖长尾缺口（本策略主战场）

满足 **≥2** 条即可标 `long_gap`（或语言维的 `locale_gap`）：

| 信号 | 说明 |
|---|---|
| SERP 无同意图工具页 | 前排是论坛、Reddit、问答、PDF、视频、泛列表 |
| 竞品页过薄 | 仅定义/广告、无可交互或无公式/边界 |
| 意图更具体 | 单位组合、边界条件、工作流步骤、错误场景、地区/语料说法 |
| 语言缺口 | 大站强 en、弱/无 zh（或本站 L1/L2 语种）；**语言空白视为缺口** |
| 可交互缺口 | 用户要「算/转/生成/校验」，前排只有文章 |

**处理**：优先 `build`（新意图且可行）或 `absorb`（并入已有 slug 的 Use cases / FAQ / Example）。

### 2.4 明确区分：「抢大词」vs「收割已曝光」

| | 抢大词（禁止作进攻） | 收割已曝光（允许） |
|---|---|---|
| 触发 | 看搜索量选大词立项 / 主 title 硬刚品牌站 | GSC **已有展示** 的查询/页面 |
| 动作 | 新建近义页、堆大词密度 | 改 title/desc、补 IG、内链 |
| KPI | 大词排名进前页 | 该 URL 的 CTR / 点击 |

---

## 3. 决策框架（每条候选必填）

在原有漏斗五问之上，**增加竞品覆盖三问**（写入 `serp_notes` / `gap_notes` / `competition_tier`）：

1. **谁在吃这个词？** 前 5–10 名站点类型（品牌工具 / 百科 / 电商 / UGC / 无工具）  
2. **他们覆盖了什么？** 是否有同意图独立页？深度如何？缺交互还是缺公式？  
3. **缺口在哪？** 长尾具体意图、语言、场景、边界——本站能否用 ≥3 条 IG 补上？

```mermaid
flowchart TD
  candidate[Candidate_query]
  classify[Classify_competition_tier]
  head[head_avoid]
  covered[mid_covered]
  gap[long_gap_or_locale_gap]
  gsc{Already_has_GSC_impressions}
  harvest[CTR_meta_harvest_only]
  absorbOrBuild[absorb_or_build]
  dropDefer[drop_or_defer]

  candidate --> classify
  classify --> head
  classify --> covered
  classify --> gap
  head --> gsc
  gsc -->|yes| harvest
  gsc -->|no| dropDefer
  covered --> gsc
  covered -->|no_existing_slug| dropDefer
  covered -->|existing_slug| absorbOrBuild
  gap --> absorbOrBuild
```

### 3.1 `competition_tier` 取值

| 值 | 含义 | 默认 `verdict` 倾向 |
|---|---|---|
| `head` | 大词 / 品牌站已占位 | `drop` / `defer`；有 GSC 展示则只做收割，不新建 |
| `mid_covered` | 竞品已有同意图深页 | 有 slug → `absorb`；无 → `defer`/`drop` |
| `long_gap` | 竞品未覆盖或极薄的具体意图 | `build` 或 `absorb`（优先） |
| `locale_gap` | 同意图在他语强、本目标语弱/无 | 优先本语种 `absorb` 或满 IG 本地化；慎新建近义 en 大词页 |

### 3.2 周选型优先级（强制）

1. `long_gap` 且 `feasibility=yes` 且 IG≥3  
2. `locale_gap`（L1/L2 语种）且可并入已有 slug 或单一新意图  
3. 已有 GSC 展示的 `absorb` 收割  
4. **最后才看** `mid_covered` / `head`（且仅收割，不立项抢位）

周 `build` 名额（≤1–2）**不得**分配给纯 `head` 进攻项。

### 3.3 选长尾词策略标准（Google + Bing 综合）

权威序不变：**Google Search Central**（people-first / 禁 doorway·scaled content）管「做什么页」；Bing Keyword Planner + Bing/Google SERP 管「选哪条词」。两引擎都服务同一目标：**具体任务意图 + 可交互缺口 + 满 Information Gain**，不是刷量。

#### A. 双引擎分工

| 来源 | 用来做什么 | 不要用来做什么 |
|---|---|---|
| **Google**（GSC / 相关搜索 / PAA / 有机 SERP） | 真实需求与 CTR 收割；验证意图是否「算/转/生成/校验」；AI Overview 只要求页已 indexed + snippet-eligible，**不为 AI 堆 schema/`llms.txt`** | 以「大词月搜」或 AI Overview 出现与否作为立项理由 |
| **Bing**（Keyword Planner 量级带 + Bing 有机 SERP） | 词表展开与量级分桶；交叉验证前排类型（工具/文档/UGC）；本站脚本默认国际版 `en-US` | 把 Planner「100–1k / 1k+」当成必须进攻；CN Bing 噪声当缺口 |

**交叉规则**：同一候选须 **至少一侧 SERP（优先 Google；本仓运维默认 Bing 国际版可先跑）** 人工看过前 5–10；草稿 `competition_tier` 不可直接立项。Google 与 Bing 结论冲突时：以 **用户任务是否一致** 为准；任一侧出现「前排工具站密集」→ 倾向 `head`/`mid_covered`，不上周 `build`。

#### B. 量级分桶（Planner / 广告工具）— 只做筛选，不做 KPI

| 量级带（约） | 默认角色 | 选词动作 |
|---|---|---|
| **1,000+**（头词） | 回避进攻 | 只作种子向下展开；有 GSC 展示则 CTR 收割；**禁止**作新工具唯一 H1 |
| **100–1,000** | 中词 / 头词邻接高风险 | 必须过 SERP：工具站密集 → `head` absorb/`defer`；仅当任务极具体且缺口清晰才进 `build` 候选 |
| **10–100** | **长尾主战场** | 优先入池；代表词做 SERP；同簇合并，不一词一页 |
| **0–10** | 微尾 / 噪声风险 | 可作 FAQ/Use case 用语；单独 `build` 须有清晰任务 + IG，否则 `absorb`/`drop` |

CIDR 实证：≥100 补扫 **无新增 P0**；P0 多来自 **任务句长尾**（如 `terraform cidrsubnet`、`private cidr ranges`），量级可在 10–1k，但 SERP 缺可交互求值/分类。

#### C. 通过标准（`build` 长尾）— 须同时满足

记分：下列 **硬条件全过**；软条件建议 ≥3/5。

**硬条件（缺一不可）**

1. **任务句**：能一句话说清用户要完成的动作（算 / 转 / 生成 / 校验 / 分类），不是「什么是 X」。  
2. **可交互**：浏览器内可做；不是纯百科、购买、品牌导航、同形词噪声。  
3. **SERP 缺口**（Google 或 Bing，人工确认）：前排以文档/论坛/PDF/薄页/错意图为主，**或**有工具但缺本任务专用控件；满足策略 §2.3 ≥2 条 → `long_gap` / `locale_gap`。  
4. **Information Gain ≥3**：相对前排可写出 ≥3 条可验证增量（边界/公式/场景/对照等）；禁换皮近义页。  
5. **非 doorway**：同簇近义进同一 `/tools/{slug}`；H1 用长尾任务句，**不用**品类头词（如不用 `CIDR Calculator` 抢头）。头词工具占位时启用 **§3.3 G**（title 字面缺口长尾 → slug/H1）。  
6. **合规**：非 YMYL 高风险硬刚；不抄前排正文；不为操纵排名批量铺 URL。

**软条件（加分，用于周排序）**

| # | 信号 | 加分含义 |
|---|---|---|
| 1 | 工作流/产品约束（Terraform、AWS VPC、Proxmox…） | 文档多、专用交互少 |
| 2 | 双向/逆向任务（range→CIDR vs CIDR→range） | 常被泛计算器吞掉一侧 |
| 3 | 边界/错误场景可产品化（越界、族混用、/31） | 易写满 IG |
| 4 | 语言问法缺口（非 en 强、本站语种弱） | → `locale_gap` |
| 5 | 本站已有相关簇可内链 | 上线后发现成本低 |

**周 `build` 排序**：硬条件全过的词中，按 软条件得分 → 再看可行性与产能；**禁止**按月搜量倒序排。

#### D. 一票否决（直接 `drop` / `defer` / 仅收割）

- 前 5 名 ≥3 个同意图成熟工具站（Google 或 Bing 任一侧稳定如此）→ `head` / `mid_covered`  
- 意图 = 定义 / 全称 / 「what is」且无交互增量 → FAQ absorb，禁独立 URL  
- 品牌导航（`mxtoolbox …`）、竞品站名、购买/本地服务  
- 同形词/错领域（如兽医 CIDR）  
- SERP 严重污染且无法确认意图（百度壳、what-is-my-ip 误匹配等）→ 重抓或 `defer`，**不**标 `long_gap` 立项  
- 仅 Planner 高量、未做 SERP → **不得**入周 `build`

#### E. `absorb` vs `build`（选定长尾之后）

| 情况 | 标准 |
|---|---|
| 与 catalog **同主意图** 或近义换词 | **`absorb`**（默认优先）：改 title/FAQ/Use cases/模式，不新建 URL |
| 用户搜该词会期望 **不同主控件/不同对象**（如 IPv6 vs IPv4；cidrsubnet 求值 vs 单块计算） | 可 **`build`** 独立 slug，仍须硬条件全过 |
| 量级高但任务 = 头词邻接 | 启用 **§3.3 G title_gap_fallback**：用 title 未出现的长尾作 slug/H1；**不**占周进攻名额（除非任务实质不同且过硬条件） |

#### F. 操作清单（每条候选 30 秒自检）

```text
[ ] 量级带已标；1k+ 未当唯一 H1
[ ] 用户任务一句；可交互 = yes
[ ] Google 和/或 Bing 前 5–10 已看；tier 人工确认
[ ] 缺口 ≥2 条或明确 mid/head
[ ] 若 head 工具占位：是否跑 §3.3 G title_gap_fallback（长尾 title 字面缺口 → slug/H1）
[ ] IG 草稿 ≥3；同簇合并计划写明
[ ] verdict = absorb | build | defer | drop；build 仅 long_gap/locale_gap
```

落地文件：主题夹 `docs/seo/keywords/{theme}/` + `keyword-daily-pool.tsv`；Bing 采集：`ops/seo/bing_serp`（`--theme`）。

#### G. 兜底规则：头词被工具占位 → 用「SERP title 未出现」的长尾作 slug/H1

**问题**：大词（如 `cidr calculator`）SERP 已被成熟工具站占满 → 禁止用大词当 H1 正面硬刚；但簇内仍要有一页可交互工具承接需求。若仍用大词做 title，既难进前页，也像 doorway。

**思路**：在**同一大词意图簇**内，找一条（或少数）长尾：用户会搜它，但前排工具页的 **organic title 并未写入该长尾字面**（仍用泛标题如 “CIDR Calculator / Subnet Calculator”）。用这条长尾做本站 **唯一主 slug + H1/title**，页面能力覆盖大词任务，次词进 FAQ/模式——**标题对齐长尾问法，功能收割簇，而不是换皮抢大词。**

##### G.1 触发条件（须同时成立）

| # | 条件 | 判定 |
|---|---|---|
| 1 | **大词工具占位** | 大词（或品类短词）SERP 前 5 中 ≥3 为同意图工具站 → `competition_tier=head`（或强 `mid_covered`） |
| 2 | **同簇长尾存在** | Planner / 相关搜索 / PAA 中，与大词**同一用户任务**的更具体问法（单位、方向、对象、产品、边界） |
| 3 | **长尾可交互** | 该长尾仍是算/转/生成/校验，不是 what-is / 购买 / 品牌导航 |
| 4 | **Title 字面缺口** | 对该长尾做 Google 或 Bing SERP：前 **5–10** 条有机结果的 **title**（大小写不敏感；忽略标点）中，**未出现**该长尾的核心区别词组（见 G.2） |

四条都满足 → 启用本兜底；记 `gap_notes`：`title_gap_fallback` + 大词种子 + 选用长尾。

##### G.2 「title 没有」怎么量（防误判）

对候选长尾 `L`，令 **区别词组** = `L` 去掉与大词共享的词干后剩余的区分部分（例：大词 `cidr calculator`，长尾 `cidr calculator ipv4` → 区别词至少含 `ipv4`；长尾 `ip range to cidr` → 整句视为区别任务句）。

| 判定 | 标准 |
|---|---|
| **缺口成立（可用）** | 前 5 title 中，含区别词组（或 `L` 全文近匹配）的条数 **≤1**；多数 title 仍是泛工具名 / 大词换皮 |
| **缺口不成立** | 前 5 已有 ≥2 条 title 明确写出该长尾任务句 → 该 `L` 可能已是 `mid_covered` 精确页，改走常规 §2.2/§3.3，**不**再当「兜底改名」素材 |
| **无效检测** | SERP 污染、错意图、空结果 → 重抓后再判；不可用噪声 SERP 宣称 title 缺口 |

**只看 title**（本规则）；snippet 里偶然出现长尾**不**否决缺口（竞品常在摘要堆词、标题仍泛化）。若需更严，可另加「可见 H1」人工抽查，不作默认门禁。

##### G.3 选用哪一条长尾（同簇多选一时）

按序挑 **一条** 作主词（其余 absorb 进同一 URL）：

1. **Title 缺口更强**（前 5 命中 0 条优先于 1 条）  
2. **任务更具体**（有对象/方向/边界：ipv4、range→cidr、host range…）  
3. **量级**：优先 **10–100**，其次 100–1k 且非纯大词同义；避免 0–10 除非任务极清  
4. **可 slug 化**：英文 kebab-case 可读；能当 H1 自然短语（非电报式堆词）  
5. **非近义刷屏**：不与已选主词仅差同义词（`calc`/`calculator`）再拆第二 URL  

选定后：

| 字段 | 写法 |
|---|---|
| `slug` | 长尾任务句 kebab（如 `cidr-host-range`、`ip-range-to-cidr`） |
| H1 / 主 title | 该长尾的自然语言标题（如 `IPv4 CIDR to host range`），**禁止**用大词 `CIDR Calculator` |
| 大词 | 仅作种子/内文提及/次要 meta；**不**作唯一主词 |
| 同簇其它长尾 | FAQ / Use cases / 控件模式；`verdict=absorb` |

##### G.4 与 `build` / 周产能的关系

| 情形 | 处理 |
|---|---|
| 仅 title 缺口、能力仍是大词同款泛计算器 | 可建 **一页** 承接簇，但标 **`defer` 不占周进攻** 或「簇内收割页」；须满 IG，H1=长尾；**不算**对大词的 `long_gap` 进攻胜利 |
| Title 缺口 + 任务相对泛工具有实质差异（逆向转换、专用对象） | 可按 §3.3 硬条件评 `long_gap` → 正常周 `build` |
| Catalog 已有同簇 slug | **只改**已有页 H1/title 到该长尾（absorb），禁止再新建 |

**禁止**：为大词簇批量生成「每条 title 缺口长尾 × 一 URL」——仍属 doorway / scaled thin。一簇 **最多一个** 兜底主 URL。

##### G.5 合规边界（Google 优先）

- People-first：页面必须真正完成该长尾任务，不是只改 title。  
- 禁 cloaking：H1/title 与可见主控件一致。  
- 禁 keyword stuffing：一条主长尾 + 有限次词，不堆 Planner 列表。  
- 有 GSC 大词展示时：可同时做 CTR 收割，但主叙事仍跟长尾 H1，避免退回大词唯一主词。

##### G.6 操作清单（兜底专用）

```text
[ ] 大词 SERP 已确认工具占位（head/mid）
[ ] 候选 L 与大词同任务簇；可交互
[ ] 已抓 L 的 SERP；前 5 title 区别词命中 ≤1
[ ] 同簇只选 1 条作 slug/H1；其余 absorb
[ ] IG≥3；H1 ≠ 大词字面
[ ] 词池 gap_notes 含 title_gap_fallback；是否占周 build 已标明
```

##### G.7 示例（CIDR）

| 大词 | 长尾候选 | 长尾 SERP title 现象 | 兜底采用 |
|---|---|---|---|
| `cidr calculator` | `cidr to ip range` / 叙事 `IPv4 CIDR to host range` | 前排多为 “Subnet Calculator - CIDR…” 泛标题 | slug=`cidr-host-range`，H1=`IPv4 CIDR to host range`（不占周进攻） |
| `cidr calculator` | `terraform cidrsubnet` | 前排多为 HashiCorp docs，少有同名求值器 title | **不是**本兜底主路径 → 独立 `long_gap` 工具（任务已不同） |
| `cidr notation` | `what is cidr` | 教育页 title 常含问法 | 定义簇 → FAQ absorb，**不**建工具 URL |

---

## 4. 执行方案（可操作节奏）

### 4.1 词源怎么取（服务于缺口，而非大词榜）

| 优先 | 来源 | 用法 |
|---|---|---|
| P0 | 相关搜索 / PAA / 自动完成中的 **具体问法** | 从大词种子 **向下展开**，只把长尾候选入池 |
| P0 | SERP 前排「非工具」结果簇 | 标记可交互缺口 → `long_gap` |
| P1 | 本站 GSC：有展示的中长尾、近零点击查询 | `absorb` 收割；勿因此新建 doorway |
| P1 | 竞品 sitemap/品类中 **本站可做且对方无页** 的意图（脱敏笔记） | 缺口清单，不抄正文 |
| P2 | Keyword Planner 量级 | **只作参考**；高量 + 强竞品 = 回避信号，不是立项信号 |

**禁止**：以「月搜量 Top」直接当 `build` 队列；禁止从大词榜逐条建页。

### 4.2 单批分析清单（Agent / 人工）

1. 种子可含大词，但入池候选须 **展开后的长尾** 为主（约 10 条里 `long_gap`/`locale_gap` 建议 ≥6）  
2. 每条填写：`competition_tier`、`gap_notes`（谁占位 + 缺什么，一句）  
3. `head` 且无本站展示 → 不占周 build 名额  
4. 回写 [keyword-daily-pool.tsv](./keyword-daily-pool.tsv) + [keyword-to-tool-tracker.md](./keyword-to-tool-tracker.md)  
5. **不**自动建 `work-tasks/`

### 4.3 内容怎么赢（缺口页的胜负手）

对 `long_gap` / `locale_gap` 上线或 absorb 时，相对「空 SERP」仍须 people-first：

- 真实可交互 + 可见 How + ≥1 Example + FAQ≥3  
- Information Gain ≥3/9 维（公式/边界/场景/对照/引用/隐私/多语/示例/内链）  
- 同簇长尾进 **同一 URL** 的 Use cases / FAQ / 控件预设（一带多场景）  
- 语种：检索向重写，非机翻（`tool-i18n-localization.mdc`）

### 4.4 已有工具页（防守盘）

- 大词已有展示：只做 meta/CTR/IG，**不**再拆近义 URL 冲大词  
- 发现用户实际以长尾进页：把该长尾写入 H2/FAQ/Use cases，强化缺口匹配  
- 排名长期很差的纯大词页：评估是否改主意图叙事到可赢的长尾簇（改文案，不铺量）

### 4.5 链接与发现

- 内链：用已收录页 Related 指向新缺口工具（簇内互链），避免孤岛  
- IndexNow：**增量**提交新 URL / 实质更新 URL，禁止十语全量刷  
- 出站：权威引用；入站：白帽，见 [2026-08-09/link-strategy-execution.md](./2026-08-09/link-strategy-execution.md)

### 4.6 节奏与产能

| 节奏 | 动作 | 产出 |
|---|---|---|
| 按批 | SERP 向下展开 → 缺口分类入池 | 词池行；`long_gap` 占比自检 |
| **存量工具** | 词根清单 → Ads Keyword Planner 拉长尾 → absorb 功能/SEO | 见 §4.7 |
| 每周 | 只从 `long_gap`/`locale_gap` 挑 ≤1–2 个 `build`；其余 absorb | 0～2 个立项候选 |
| 工具交付 | coverage 0b→2/4 → `build:site` → lint:seo | 1 个满 IG 页 |
| 每 2–4 周 | GSC：看长尾查询点击是否起量；大词只看已曝光 CTR | 调池与文案 |

### 4.7 存量工具：词根 → AdWords 长尾 → 功能 / SEO

对**已上线工具**做缺口进攻的主路径（与「日抽新意图」并行）：

```mermaid
flowchart LR
  review[Review_catalog_tools]
  roots[List_keyword_roots]
  ads[Google_Ads_Keyword_Planner]
  longtail[Filter_long_gap_locale_gap]
  pool[keyword_daily_pool]
  optimize[Absorb_features_and_SEO]

  review --> roots
  roots --> ads
  ads --> longtail
  longtail --> pool
  pool --> optimize
```

| 步骤 | 动作 | 产出 / 落点 |
|---|---|---|
| 1. Review 工具 | 按 catalog 复核意图与 EN title | 全量词根表 |
| 2. 列词根 | 每工具 1–3 个 **primary 大词词根**（仅作种子）+ secondary | [2026-08-20-tool-keyword-roots.md](./2026-08-20-tool-keyword-roots.md) · [tsv](./2026-08-20-tool-keyword-roots.tsv) |
| 3. 手动 AdWords | 用 Google Ads **Keyword Planner**（旧称 AdWords）以词根为种子查相关/长尾；脱敏记录量级与竞争 | `serp-batches/YYYY-MM-DD-adwords-<id>.md` |
| 4. 缺口过滤 | 高量头词 → `head` 不进攻；具体场景/单位/人群等 → `long_gap`/`locale_gap` | [keyword-daily-pool.tsv](./keyword-daily-pool.tsv)，`absorb_slug`=现有工具 |
| 5. 优化功能 | 长尾暴露控件缺口（单位、模式、格式、目标体积等）→ 改页面/brief，**不拆近义 URL** | PR 注明来源长尾 |
| 6. 优化 SEO | 主长尾 → H1/title；次长尾 → desc / FAQ / Use cases / Example；覆盖门禁 | i18n 分片；禁页上关键词堆砌 |

**约束**：词根只作 Planner 种子，不作 title 进攻目标；Planner「大量搜索」头词默认 `head`；同工具多长尾一带多场景；导出含账号数据不入库。

**排期**：每周 **3–5 个 slug** 跑完步骤 3→6（优先已有 GSC 展示，或 SEO/隐私/格式长尾易出缺口的工具）；计算器类必须先展开再入池。

---

## 5. 验收标准（本策略是否在执行）

- [ ] 新入池行含 `competition_tier`；`head` 未进入当周 `build` 进攻队列  
- [ ] 每批约 10 词中，缺口类（`long_gap`+`locale_gap`）占多数  
- [ ] 周建工具的主词不是品类大词，而是可验证的未覆盖具体意图  
- [ ] 无「一词一 URL」长尾拆页；同簇进 FAQ/Use cases  
- [ ] 有 GSC 展示的大词页仅 meta/IG 收割，不新建变体页  
- [ ] 存量工具有词根表；AdWords 长尾经缺口过滤后入池并 absorb  
- [ ] 合规未放宽：无空壳、无抄袭前排、无 AI 灌页

### 5.1 KPI（建议）

| KPI | 说明 |
|---|---|
| 缺口词点击 | GSC 中来自具体长尾查询的点击占比上升 |
| 新工具首词 | 上线 2–4 周内主展现查询应为长尾/场景词，而非纯大词 |
| 大词进攻 | 新建工具 title 主词命中 `head` 的数量 → **目标 0** |
| CTR 收割 | 已曝光 URL 的 CTR（与大词进攻脱钩单独看） |
| 词根批次 | 每周完成 ≥3 slug 的 Planner→absorb 闭环 |

---

## 6. 明确不做

- 为冲 Omni / 泛工具站已垄断的大词而立项或拆页  
- 用搜索量排序替代缺口分类  
- 把「竞品有大词页」当成必须跟进的清单  
- 语言未本地化就用 en 大词页去撞品牌站  
- 以 FAQ 富结果 / `llms.txt` / AI 专用 schema 为成功标准  
- 把 Keyword Planner 头词量直接当 title/立项依据  
- 为 AdWords 长尾批量拆近义 URL  

---

## 7. 与现有文档的关系

| 文档 | 关系 |
|---|---|
| [keyword-to-tool-funnel.md](./keyword-to-tool-funnel.md) | **执行漏斗**；已叠加本文的 `competition_tier` 门禁 |
| [2026-08-20-tool-keyword-roots.md](./2026-08-20-tool-keyword-roots.md) | 全站词根 Review；§4.7 步骤 1–2 产出 |
| Omni / Aconvert 对标文 | 仍「学结构不学页数」；大词正面战升级为 **默认不打** |
| GSC `reviews/*/02-next-strategy.md` | 单轮战术；与本文冲突时：**选题进攻服从本文**，索引/CTR 收割仍服从当轮 GSC |
| `seo-google-policy` | 本文不得放宽 spam / doorway；缺口策略是选题层，不是合规豁免 |

---

## 8. 权威序

冲突时：Google Search Central 现行文档 → `lint:seo` / 运行代码 → `.cursor/rules/*` → 本文 → 其它 docs。  
**冲突须给出判断并经人工确认后再改文件。**
