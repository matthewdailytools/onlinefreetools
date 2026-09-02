---
name: keyword-to-tool-funnel
description: >-
  From keywords/SERP batches, find new tools to create or enrich existing tools
  (absorb into title/FAQ/Use cases/IG). Use for 日抽词, 关键词池, SERP 分析,
  keyword-to-tool, absorb/build/defer, 意图池, or docs/seo/keyword-to-tool-*.
  Does not auto-create work-tasks; that is only for confirmed tool creation.
---

# 关键词 → 新工具 / 丰富已有工具

**目标（本 Skill）**：从关键词中寻找**新的工具进行创建**，或**融入并丰富已有工具进行更新**。

**选题约束（2026-08-20）**：不与已有流量站抢已占位**大词**；主攻其**未覆盖/极薄长尾**与**语言缺口**。详见 [docs/seo/2026-08-20-long-tail-gap-strategy.md](../../docs/seo/2026-08-20-long-tail-gap-strategy.md)。已有 GSC 展示的大词只做 CTR 收割，不进攻立项。存量工具另走 **词根 → Keyword Planner → absorb**（策略 §4.7；词根表 [tool-keyword-roots](../../docs/seo/2026-08-20-tool-keyword-roots.md)）。

分析进池由本 Skill 完成；真正写页面 / 十语时再接 `tool-coverage-pass` 与 `work-tasks-tool-brief`。  
事项跟进文件：[docs/seo/keyword-to-tool-tracker.md](../../docs/seo/keyword-to-tool-tracker.md)  
运维操作：[ops/seo/keyword-to-tool-ops.md](../../ops/seo/keyword-to-tool-ops.md)  
展开策略：[docs/seo/keyword-to-tool-funnel.md](../../docs/seo/keyword-to-tool-funnel.md)  
**Keyword Planner CSV 归类**（固定步骤，可迭代）：[docs/seo/keyword-planner-analysis-rules.md](../../docs/seo/keyword-planner-analysis-rules.md)

## 何时必须使用

- 用户提供 / 批量导入 Google 搜索词、SERP 摘要、相关搜索、PAA
- 提到日抽词、意图池、`keyword-daily-pool`、`keywords/{theme}`、`serp-batches`、absorb / build
- 问「这个词该新建工具还是并进现有页」
- 编辑 `docs/seo/keyword-to-tool-*`、`docs/seo/keywords/` 或 `docs/seo/serp-batches/`

## 两条产出路径（二选一或并存于同一批）

| `verdict` | 含义 | 下一步 |
|---|---|---|
| **`build`** | **本站未实现**该作业（或主控件不同）+ 浏览器可做 + ≥3 条 IG；须写实现规格 | **仅记入词池**；开 `work-tasks/{slug}/` **须用户明确要创建该工具**。周进攻 KPI 优先 `long_gap`/`locale_gap`；`head` 可建但 **H1 禁硬刚头词**（用场景/G 长尾） |
| **`absorb`** | 已有 catalog slug **已能办成**同一主意图（同主控件）/ 近义长尾 | **更新已有工具**：title/description、FAQ、Use cases、Example/IG；**不新建 URL**。**禁止**对未实现作业标 absorb（含：生成器页「覆盖」校验） |
| `defer` | 意图成立但主打词/产能/YMYL/SERP 未钉死，或上线节奏靠后 | **仍须写实现/覆盖落点**（控件差 + 建议 slug）；留池；**不是**不做 |
| `drop` | 不可做成工具、重复、无增量，或 §4 服务/品牌/同形 | 留池注明理由即可 |

默认：已实现 → **`absorb`**；未实现 → **`build`/`defer`（须实现）**，差别在关键词 / title / 文案 / IG。  
**Planner 细分场景须全覆盖**（**能力**+文案落点）；见 [keyword-planner-analysis-rules.md](../../docs/seo/keyword-planner-analysis-rules.md) §0；`defer`≠不做；**生成≠校验**。  
头词已被工具占位时：按策略 **§3.3 G**（`title_gap_fallback`）——同簇长尾若在该长尾 SERP 的 organic **title 中未出现**，用该长尾作工具 **slug/H1**（一簇一 URL；满 IG）；**仍须实现能力**，默认不把头词当进攻 KPI。  
另须 **§3.3 H（全站）**：slug/H1 = 用户**实际使用场景**（情境+动作+结果），不是品类/`*-pack`；进页默认即该场景。平台只是情境的一种（如 LinkedIn 横幅）。只按作业类型拆 URL。无「使用场景」表不得标 `build`。

## 强制流程

### 1) 入库（只建池，不建页、不建 work-tasks）

1. 若输入是 **Keyword Planner CSV**：先按 [keyword-planner-analysis-rules.md](../../docs/seo/keyword-planner-analysis-rules.md) 写主题夹权威分析（量级分桶 → drop → 作业类型 → absorb/收割；未 SERP 不得 `long_gap` build）
2. 脱敏摘要写入 `docs/seo/keywords/{theme}/YYYY-MM-DD-<id>.md`（主题夹；跨主题试点仍可用 `docs/seo/serp-batches/`）
3. 本批有结论的候选追加 `docs/seo/keyword-daily-pool.tsv`（**不设条数上限**；`verdict`/`tier`/落点完全相同的纯字序近义可合并一行）
4. 回写 [keyword-to-tool-tracker.md](../../docs/seo/keyword-to-tool-tracker.md) 快照 + 决策日志

### 2) 每条候选必答

1. 用户任务？（算 / 转 / **生成** / **校验**）能否交互？须写成**实际使用场景**（情境+动作+结果）；进页默认即该场景。平台只是情境的一种  
2. **本站是否已实现该作业？** 未实现 → 必须实现；差别只在关键词 / title / 文案 / IG。生成器**不能**冒充 checker  
3. SERP 缺什么？能否 ≥3 条 IG？  
4. 已有 slug **且已能办成**同意图？→ **`absorb`**；仅有近邻页/FAQ → 不算  
5. 是否近义换词（含仅换平台名/同义词、同一套控件）？→ 禁止拆页，进芯片 / Use cases / FAQ  
6. YMYL？→ 倾向 `defer` 或加重 disclaimer 成本  
7. **竞品覆盖**：谁占位？→ 填 `competition_tier` + `gap_notes`；`head` = 禁硬刚 H1，**≠** 不做工具 

对照 catalog：`src/site/tool-catalog.json`；可行性：`docs/2026-07-28-tool-direction.md`。  
选题细则：`docs/seo/2026-08-20-long-tail-gap-strategy.md`（含 **§3.3 选长尾词策略标准：Google + Bing**，**§3.3 I Bing 用户搜法防污染**）。种子可含大词，**入池以向下展开的长尾缺口为主**（建议本批缺口类 `long_gap`/`locale_gap` **占多数**；不设入池条数上限）。  
Bing 采集默认：国际版优先、每词独立 BrowserContext、搜索框提交、剥 `pq` 串词、污染则用户搜法变体（仍脏再 `language:en`）；`unusable` / `serp_usable=false` 不得当 `long_gap`。禁止默认加引号或品牌倒置。

### 3A) `absorb` → 丰富已有工具

1. 确定 `absorb_slug`  
2. 改该工具可见文案（主词→H1；次词→desc/FAQ/usecase）；需要时改 `work-tasks/{已有slug}/` 与 i18n  
3. 有 i18n 改动时走 Skill **`tool-coverage-pass`**（按既有 slug 的 phase）  
4. **禁止**为该词新建近义 URL  
5. tracker 决策日志记：slug + 改了哪一节  

### 3B) `build` → 仅候选；创建工具另决议

1. 词池 `verdict=build`（未实现 + 可交互）；`notes` 写建议 slug + 实现规格；周进攻优先 `long_gap`/`locale_gap`  
2. `competition_tier=head`：**禁止**用该头词当唯一进攻 H1；改为场景/G 长尾承接，**仍可**记 `build`（能力必做）；有 GSC 展示的头词另可 CTR 收割  
3. **禁止**因跑本 Skill / 跟进事项而自动 `mkdir work-tasks/...`  
4. 用户明确「创建 / 立项 / 实现 {slug}」之后：  
   - 复制 `work-tasks/_template/` → `work-tasks/{slug}/`  
   - 再按 `work-tasks-tool-brief` + **`tool-coverage-pass`**（0b→…）  

### 4) 产能与合规

- 进池**不设条数上限**（进池 ≠ 建页）；周新建工具建议 ≤1–2（上限 ≤3）且须满 IG  
- SERP = 研究输入；禁止抄前排正文；禁止「标题模板 → 空壳页」  
- 对齐 `seo-google-policy` / `tool-i18n-seo`（一带多场景；禁 doorway / scaled content）

## 红线

- 不为「事项跟进」创建 `work-tasks/`  
- 不一词一 URL 日更  
- 不把本 Skill 待办只写进某次 GSC `03-todo` 而不回写 tracker  
- 不跳过 `tool-coverage-pass` 直接灌十语上线新工具  
- **不把已占位大词当作周进攻 KPI / 唯一 H1**（搜索量 ≠ 用头词硬刚；未实现能力仍须实现并用场景/G 承接） 

## 验收自检

- [ ] 本批有 serp-batches 摘要 + 词池行  
- [ ] 每条有 `verdict` 与 `competition_tier`；`absorb` 仅指向**已能办成**同一作业的真实 slug（生成器未冒充 checker）  
- [ ] `build` 均有实现规格；`head` 未当进攻唯一 H1（可用场景/G）；未擅自建 work-tasks（除非用户本回合明确要求创建该工具）  
- [ ] tracker 快照 / 决策日志已更新 
