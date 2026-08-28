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

## 何时必须使用

- 用户提供 / 批量导入 Google 搜索词、SERP 摘要、相关搜索、PAA
- 提到日抽词、意图池、`keyword-daily-pool`、`keywords/{theme}`、`serp-batches`、absorb / build
- 问「这个词该新建工具还是并进现有页」
- 编辑 `docs/seo/keyword-to-tool-*`、`docs/seo/keywords/` 或 `docs/seo/serp-batches/`

## 两条产出路径（二选一或并存于同一批）

| `verdict` | 含义 | 下一步 |
|---|---|---|
| **`build`** | 新意图 + 浏览器可做 + ≥3 条 IG + **`competition_tier` 为 `long_gap`/`locale_gap`**（禁止纯大词进攻） | **仅记入词池**；开 `work-tasks/{slug}/` **须用户明确要创建该工具** |
| **`absorb`** | 与已有 catalog slug 同一主意图 / 近义长尾 | **更新已有工具**：title/description、FAQ、Use cases、Example/IG；**不新建 URL** |
| `defer` | 意图成立但产能/YMYL/技术未就绪，或 `mid_covered` 暂不硬刚 | 留池，决策日志一行 |
| `drop` | 不可做成工具、重复、无增量，或纯 `head` 且无本站展示 | 留池注明理由即可 |

默认优先 **`absorb` 丰富已有**，再谈 `build`。周 `build` 名额只给缺口类，不给 `head`。  
头词已被工具占位时：按策略 **§3.3 G**（`title_gap_fallback`）——同簇长尾若在该长尾 SERP 的 organic **title 中未出现**，用该长尾作工具 **slug/H1**（一簇一 URL；满 IG；默认不占周进攻，除非任务实质不同）。

## 强制流程

### 1) 入库（只建池，不建页、不建 work-tasks）

1. 脱敏摘要写入 `docs/seo/keywords/{theme}/YYYY-MM-DD-<id>.md`（主题夹；跨主题试点仍可用 `docs/seo/serp-batches/`）
2. 从本批抽约 **10** 条候选追加 `docs/seo/keyword-daily-pool.tsv`
3. 回写 [keyword-to-tool-tracker.md](../../docs/seo/keyword-to-tool-tracker.md) 快照 + 决策日志

### 2) 每条候选必答

1. 用户任务？（算 / 转 / 生成 / 校验）能否交互？  
2. SERP 缺什么？能否 ≥3 条 IG？  
3. 是否已有 slug 同意图？→ **`absorb`**  
4. 是否近义换词？→ 禁止拆页，进 Use cases / FAQ  
5. YMYL？→ 倾向 `defer` 或加重 disclaimer 成本  
6. **竞品覆盖**：谁占位？→ 填 `competition_tier`（`head` / `mid_covered` / `long_gap` / `locale_gap`）+ `gap_notes`  

对照 catalog：`src/site/tool-catalog.json`；可行性：`docs/2026-07-28-tool-direction.md`。  
选题细则：`docs/seo/2026-08-20-long-tail-gap-strategy.md`（含 **§3.3 选长尾词策略标准：Google + Bing**）。种子可含大词，**入池以向下展开的长尾缺口为主**（建议每批缺口类 ≥6/10）。

### 3A) `absorb` → 丰富已有工具

1. 确定 `absorb_slug`  
2. 改该工具可见文案（主词→H1；次词→desc/FAQ/usecase）；需要时改 `work-tasks/{已有slug}/` 与 i18n  
3. 有 i18n 改动时走 Skill **`tool-coverage-pass`**（按既有 slug 的 phase）  
4. **禁止**为该词新建近义 URL  
5. tracker 决策日志记：slug + 改了哪一节  

### 3B) `build` → 仅候选；创建工具另决议

1. 词池 `verdict=build`，且 `competition_tier` 为 `long_gap` 或 `locale_gap`；`notes` 可写建议 slug  
2. 若实为 `head` 进攻 → 改为 `drop`/`defer`，或仅在有 GSC 展示时走既有页 CTR 收割  
3. **禁止**因跑本 Skill / 跟进事项而自动 `mkdir work-tasks/...`  
4. 用户明确「创建 / 立项 / 实现 {slug}」之后：  
   - 复制 `work-tasks/_template/` → `work-tasks/{slug}/`  
   - 再按 `work-tasks-tool-brief` + **`tool-coverage-pass`**（0b→…）  

### 4) 产能与合规

- 日抽约 10 词 = **进池**；周新建工具建议 ≤1–2（上限 ≤3）且须满 IG  
- SERP = 研究输入；禁止抄前排正文；禁止「标题模板 → 空壳页」  
- 对齐 `seo-google-policy` / `tool-i18n-seo`（一带多场景；禁 doorway / scaled content）

## 红线

- 不为「事项跟进」创建 `work-tasks/`  
- 不一词一 URL 日更  
- 不把本 Skill 待办只写进某次 GSC `03-todo` 而不回写 tracker  
- 不跳过 `tool-coverage-pass` 直接灌十语上线新工具  
- **不把已占位大词当作周 build 进攻队列**（搜索量 ≠ 立项理由）  

## 验收自检

- [ ] 本批有 serp-batches 摘要 + 词池行  
- [ ] 每条有 `verdict` 与 `competition_tier`；`absorb` 已指向真实 slug 或已说明暂缓改文案  
- [ ] `build` 均为缺口类；未擅自建 work-tasks（除非用户本回合明确要求创建该工具）  
- [ ] tracker 快照 / 决策日志已更新  
