# Keyword Planner 归类分析规则（可复用）

- **状态**：权威 playbook（2026-09-01 自 CIDR / magnets / text-diff / prompt-builder 批次提炼）
- **迭代**：只追加修订节；改硬条件须同步 `2026-08-20-long-tail-gap-strategy.md` §3.3 与 Skill
- **执行入口**：Skill [`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md) · 运维 [`ops/seo/keyword-to-tool-ops.md`](../../ops/seo/keyword-to-tool-ops.md)
- **策略权威**：[`2026-08-20-long-tail-gap-strategy.md`](./2026-08-20-long-tail-gap-strategy.md) §3.3 / G / H / I（本文件是**操作清单**，不放宽策略）

> **一句话**：把 Planner 导出当**词表展开**；先问**本站是否已实现该作业**；未实现的必须实现；差别只在 **slug / title（H1）/ 主打关键词 / 文案 / IG** 怎么承接；仅当已有页**已能办成同一作业**才 absorb；头词禁作进攻唯一 H1；未人工 SERP 不得标 `long_gap` 作周进攻。

---

## 0. 核心原则：能力先判 → 场景全覆盖 ≠ 一词一 URL

**覆盖 = 用户能办成事**（可交互能力），不是「相关页写了 FAQ」。  
**不**用「defer / 次要 / 并进别的页」当借口整类不做。

### 0.1 能力是否已实现（先于 absorb/build 文案判断）

| 本站现状 | 正确动作 | 禁止 |
|---|---|---|
| catalog 已有页，**主控件已能办成**该作业 | **`absorb`**：改 title/FAQ/Use cases/IG；不新建 URL | 为近义换词再拆 URL |
| **未实现**该作业（含：仅有近邻品类页、仅有 FAQ、仅有「生成」却无「校验」） | **必须实现**；差别只在用什么关键词 / title / 正文 / IG 承接 | 把校验并进生成器、把查别人家 IP 并进「我的 IP」、用划界 FAQ 假装覆盖 |
| §4 drop（服务/品牌/同形/噪声） | 不做产品 | — |

**生成 ≠ 校验**（典型反例）：`robots.txt generator`（表单写出文件）与 `robots.txt checker`（拉取线上文件并解释）主控件与结果不同 → 未实现 checker 时须实现 checker；**禁止**写「场景并进生成器页」当作覆盖。同理：sitemap 生成 vs sitemap 检查；证书实验室探测 vs 响应头里有无 HSTS。

工具的存在理由是**提高办成该作业的效率**；文案 absorb 不能替代缺失的交互。

### 0.2 两层：产品覆盖 vs 主打定位

| 层 | 必须回答 | 常见错误 |
|---|---|---|
| **覆盖（能力）** | 用户能不能在本站办成这事？未实现 → 实现规格写在哪个 slug / 新页？ | 只写 absorb 进无关页；或 verdict=defer 后从产品计划消失 |
| **主打定位（SEO）** | 该 URL 的 **slug、title/H1、主打关键词**选哪一条场景长尾？同页其余场景用次词/芯片 | 用头词硬刚当唯一 H1；或每个近义标签拆 URL |

**选 slug / title / 主打词（摘要）**：

1. 先列全作业类型（§5）→ 每类先答「已实现？」→ 未实现写**实现规格**（控件 + 进页默认场景）。  
2. 同主控件 / 同作业类型且**已实现** → **一 URL** absorb；选一条场景长尾作 **主打**（slug≈H1）。  
3. 主控件实质不同或未实现 → **独立实现**（可新 URL）；各自主打长尾；`competition_tier=head` 时 H1 走 §6 G / 场景句，**不是**放弃实现。  
4. 头词占位 → §6 G：用 title 缺口长尾当主打，**不是**放弃同簇其它场景，也**不是**不做工具。  
5. 仅 **drop 清单**（服务/品牌/同形/噪声）不进产品覆盖；百科 what-is 最多 FAQ 消歧。

立项后仍服从 `work-tasks-tool-brief.mdc`：归属长尾 **文案融入 + 功能覆盖**。

**主题级命名框（若用户/权威分析写明）**：例如 `prompt-builder` 要求 slug/H1/主打词含 `prompt`+(`builder`|`generator`)、宜含 `ai`；场景只来自 Planner 搜法，举例（视频/论文/代码）无命中则不臆造。主题约束写进该主题 `*-keyword-planner.md` §0，不放宽本 playbook 的场景全覆盖义务。

---

## 1. 输入与落盘

| 项 | 约定 |
|---|---|
| CSV | 放 `docs/seo/keywords/{theme}/`（Google/Bing Keyword Planner 导出均可；脱敏：无账号凭证） |
| 主题夹名 | 英文 kebab-case（种子词根或产品主题，如 `prompt-builder`、`cidr`） |
| 权威分析 | `docs/seo/keywords/{theme}/YYYY-MM-DD-{theme}-keyword-planner.md` |
| 主题 README | 列出 CSV / 分析 / SERP 文件；指向本规则 |
| 词池 | 本批有结论的候选**均可**追加 `keyword-daily-pool.tsv`（**不设条数上限**）；`verdict`/`tier`/`落点` 完全相同的纯字序近义可合并一行，勿机械重复 |
| Tracker | `keyword-to-tool-tracker.md` 决策日志一行 |
| work-tasks | **禁止**因本分析自动创建 |

列名常见：`广告组` / `关键词` / `平均每月搜索量`（或英文等价）。广告组**只当近义簇标签**，**不是**拆 URL 的理由。

---

## 2. 固定步骤（顺序勿跳）

```text
0  量级分桶（只筛选）
1  先剔除 drop（同形 / 品牌 / 购买 / 服务 / 噪声）— 仅此类可不做产品覆盖
2  §3.3 H：用户实际任务 → 作业类型表（情境+动作+结果）；**每类写覆盖落点**
3  对照 catalog：已有 slug？主控件是否相同？
4  为每 URL 选定 **主打** slug / title(H1) / 主打关键词；同页其余场景标次词落点
5  头词簇：收割页 + 可选 §3.3 G title_gap_fallback（改主打，不删场景）
6  意图聚类权威表：主选长尾 / slug / H1 / verdict / tier / 覆盖方式
7  关键词归属：广告组·代表词 → slug 落点（H1|desc|FAQ|usecase|芯片）
8  （可选）Bing/Google SERP 人工复核 → 才可标 long_gap / 周 build
9  词池（本批结论行，不设上限）+ tracker；不建 work-tasks
```

实证模板（抄结构，勿抄结论）：

| 主题 | 文件 |
|---|---|
| CIDR | [`keywords/cidr/2026-08-28-cidr-keyword-planner.md`](./keywords/cidr/2026-08-28-cidr-keyword-planner.md) |
| text-diff / compare-text-seeds | [`keywords/text-diff/2026-09-01-compare-text-scene-slugs.md`](./keywords/text-diff/2026-09-01-compare-text-scene-slugs.md) |
| prompt-builder | [`keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md`](./keywords/prompt-builder/2026-09-01-prompt-builder-keyword-planner.md) |

---

## 3. 量级分桶（只筛选，不做 KPI）

| 带（约） | 角色 | 动作 |
|---|---|---|
| **1,000+** | 头词种子 | 禁作进攻唯一 H1；向下展开；有 GSC 则 CTR 收割 |
| **100–1,000** | 中词 / 头词邻接 | 须过 SERP；工具密集 → `head` absorb/defer |
| **10–100** | 长尾主战场 | 优先入池观察；同簇合并 |
| **0–10** | 微尾 | 默认 FAQ；慎独立 URL |

**禁止**：按月搜量倒序排周 `build`。

---

## 4. 先剔除（drop）清单

仅下列类型**不做产品覆盖**（可 FAQ 消歧一句）。**真实使用场景不得因「次要」进本表。**

| 类型 | 例 | 处理 |
|---|---|---|
| 同形/错领域 | 兽医 `cidr for cattle` | drop；必要时 FAQ 消歧 |
| 品牌导航 | `betterprompt`、`diffchecker`、`mxtoolbox …` | drop |
| 购买/下载/评测 | `buy …`、`… download`、`best … software` | drop |
| 代写/服务/代理 | `… services`、agency | drop |
| 纯百科 what-is | 无可交互增量 | FAQ absorb，禁独立 URL |
| 桌面/IDE/库 API | WinMerge、VS Code、numpy | drop 或一句 FAQ |
| Planner 噪声/截断 | 半截词、错意图串味 | drop |

---

## 5. 作业类型（§3.3 H）— 全覆盖；主打决定 slug/title

**拆页看主控件 / 对象 / 工作流是否不同**；不看 Free / Online / Tool / Best / AI 前缀。  
**每一类真实场景都要写覆盖计划**；表上的差别主要是「谁当主打」与「同页还是另页」。

每类写清：

| 列 | 含义 |
|---|---|
| 作业类型 | 一句话任务 |
| 情境+动作+结果 | 打开页要对准的事 |
| 典型搜法（Planner） | 代表词 + 量级带 |
| 主控件是否已有 | catalog slug 或「否」 |
| **覆盖落点** | 归属 slug + H1 / desc / FAQ / Use cases / 芯片 /（若独立页）交互规格 — **不可空** |
| **主打？** | 本 URL 是否以该场景为 slug/H1 主词；同页仅一条主打 |
| URL / 节奏 | 同页 absorb · 独立 URL（须控件差）· 主打词待 SERP 后再钉死（仍先写覆盖落点） |

**禁止**：

- 品类头词或 `*-pack` 当主 slug  
- 按广告组（Free / Online / Maker / Creator）拆第二 URL  
- 无「使用场景」表就标 `build`  
- 细分场景只标 `defer` 却不写覆盖落点（当成不做）

平台名（Midjourney、Copilot、LinkedIn…）只是**情境**：同结构 → 芯片/Use case 覆盖；主控件实质不同 → 可另页，**另页也须自有主打 slug/title**（仍须 SERP + IG）。

---

## 6. 头词 → 收割 + §3.3 G

当大词 SERP 工具站密集（`head`）：

1. 同簇**一页**承接（已有则 absorb；无则收割候选，**默认不占周进攻**）— 簇内细分场景仍全覆盖  
2. **主打** H1 ≠ 品类头词（如不用 `AI Prompt Generator` / `CIDR Calculator` 硬刚）  
3. 跑 **title_gap_fallback**：同簇长尾在 organic **title** 中未出现区别词 → 可作 **主打** slug/H1  
4. `gap_notes` 写：`title_gap_fallback|seed=…|chosen=…` 或 `harvest|seed=…`

G 不触发时：保持场景长尾作主打 H1，头词只进 FAQ「也叫 …」。G 只改主打选词，**不**删同簇其它场景的覆盖义务。

---

## 7. verdict / competition_tier

| verdict | 含义（相对**覆盖 / 能力**） | 相对**主打 slug/title** |
|---|---|---|
| **absorb** | 指定 slug **已实现**同意图作业；补次词/芯片/FAQ/Use cases/IG | 不改或巩固已有主打；**禁止**对未实现作业标 absorb |
| **build** | **必须实现**（新 URL 或实质新控件）；写清实现规格 + 主场景 | slug/H1 = 场景长尾或 G 兜底；周进攻名额仍优先 `long_gap`/`locale_gap`；`head` 也可 `build` 但 **H1 禁硬刚头词** + 须用户确认 work-tasks |
| **defer** | **仍须实现/覆盖计划**：写明待定 slug + 主打词候选 + 控件差；节奏靠后 | 主打词 / 上线周次未钉死；**不是**不做，也**不是**并进错误作业页 |
| **drop** | **不做产品覆盖**（仅服务/品牌/同形/噪声等 §4） | 无 slug；最多 FAQ 消歧一句 |

| competition_tier | 含义 |
|---|---|
| `head` | 前排同意图工具密集；禁用该词当**进攻主打 H1**；**不**等于不做工具——用场景/G 长尾 + IG 承接 |
| `mid_covered` | 文档/专用页已覆盖；交互增量弱或须强 IG |
| `long_gap` | **人工 SERP** 确认缺口 ≥2 |
| `locale_gap` | 语言问法缺口 |

**未做 SERP**：tier 最多写「暂估 head/mid + 待 SERP」；`verdict` 用 `absorb`/`defer`/`drop`，**不要**写 `build`+`long_gap`。

产品**有意不做**的能力（如本站不调用 LLM）：对该搜法仍要 **FAQ/划界覆盖**，并指向可办成的主打场景；禁止静默忽略整类词。

---

## 8. 权威分析 Markdown 模板

```markdown
# {Theme} Keyword Planner — 归类与选词

- date: **YYYY-MM-DD HH:MM**
- locale / gl: en / us（或实际）
- source: `[Keyword Planner ….csv](./…)`（N 词）
- catalog：已有 `/tools/{slug}` …
- 规则：[`../../keyword-planner-analysis-rules.md`](../../keyword-planner-analysis-rules.md) + 策略 §3.3
- SERP：无 | 路径…

> **结论先行**：主打 slug/H1/主打词；其余场景如何全覆盖（一句话）。

## 0. 量级分桶
## 1. 先剔除（drop）— 仅非工具意图
## 2. 用户实际任务 → 作业类型（每类：覆盖落点 + 是否主打）
## 3. 每 URL 主打定位：slug / title / 主打关键词
## 4. 头词 → 收割 / title_gap（若适用）
## 5. 意图聚类 → 选词 / slug（权威表）
## 6. 关键词归属（广告组 → 落点；含非主打场景）
## 7. SERP 复核（有则写；无则写「待采」）
## 8. 对已有 slug 的 SEO/功能动作（全场景覆盖清单）
## 9. 周产能 / 下一步
```

独立 URL 一览表：**已实现同意图 → absorb**；**未实现 → 写实现规格**（可 `build`）；每个独立 URL 写清**主打**长尾；同页并入场景列入「覆盖落点」列。生成≠校验。

---

## 9. 词池与立项边界

- 词池 `source_batch` = 分析文件名或主题批 id  
- **不设「约 10 行」上限**：权威表里的主选 / absorb / defer / drop 代表词该进就进；进池 ≠ 建 URL  
- `absorb_slug` 必须是 catalog **真实** slug（或空 + notes 说明暂缓主打钉死，但覆盖落点仍要写）  
- 立项后：归属长尾须 **文案融入 + 功能覆盖**（`work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」）  
- §4 **drop** 词不进功能；其余细分场景禁止「只分析不覆盖」

---

## 10. 验收自检（每批）

```text
[ ] 广告组未当拆页轴；作业类型表已写
[ ] 每个非 drop 场景有覆盖落点（slug + H1|desc|FAQ|usecase|芯片）
[ ] 每个 URL 仅一条主打：slug / title / 主打关键词已写明
[ ] 1k+ 头词未当进攻主打 H1
[ ] drop 表仅服务/品牌/同形等；未把真实场景误 drop
[ ] absorb 仅当已实现同意图；独立 URL 有主控件差异理由；生成≠校验
[ ] 无 SERP → 无 long_gap 进攻 KPI；未实现仍可记 build（须实现规格 + 场景/G H1）
[ ] 词池已追加本批结论行（不设条数上限）+ tracker；未自动建 work-tasks
[ ] 主题 README 已链到本批分析与本规则
```

---

## 11. 修订日志

| 日期 | 变更 |
|---|---|
| 2026-09-01 | 初版：合并 CIDR / text-diff / magnets / prompt-builder 操作共性；与 §3.3 对齐 |
| 2026-09-01 | **剔除词池「约 10 行」上限**；进池不设条数限制，仅合并完全同结论近义 |
| 2026-09-01 | **场景全覆盖**：细分作业类型均须覆盖；差异在 slug/title/主打关键词；`defer`≠不做 |
| 2026-09-02 | **能力先判**：未实现必须实现；生成≠校验；absorb 仅当已有页已能办成同一作业；`head` 只禁硬刚 H1，不禁实现 |
