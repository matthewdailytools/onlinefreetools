# 关键词 → 工具漏斗（运维操作）

从一批搜索词中：**找新工具创建**，或**融入并丰富已有工具**。  
选题约束：不抢竞品已占位**大词**，主攻**未覆盖长尾** — [`docs/seo/2026-08-20-long-tail-gap-strategy.md`](../../docs/seo/2026-08-20-long-tail-gap-strategy.md)。  
事项跟进（非工具夹）：[`docs/seo/keyword-to-tool-tracker.md`](../../docs/seo/keyword-to-tool-tracker.md)  
可执行 Skill：[`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md)

**边界**：`work-tasks/` 只在真正创建某个工具时再建；分析进池 ≠ 自动立项。

---

## 1. 产物落点

| 产物 | 路径 | 说明 |
|---|---|---|
| 批次摘要 | `docs/seo/keywords/{theme}/YYYY-MM-DD-*.md`（主题夹）；跨主题试点仍可用 `docs/seo/serp-batches/` | 脱敏；无完整 SERP HTML / 密钥 |
| 主题词表 | `docs/seo/keywords/{theme}/` | Planner CSV、聚类、SERP 同夹；见 [`docs/seo/keywords/README.md`](../../docs/seo/keywords/README.md) |
| 意图池（主结果表） | `docs/seo/keyword-daily-pool.tsv` | 每词一行：`verdict`、`competition_tier`、`gap_notes` 等 |
| 事项跟进 | `docs/seo/keyword-to-tool-tracker.md` | 快照 + 决策日志 |
| 选题战略 | `docs/seo/2026-08-20-long-tail-gap-strategy.md` | 回避大词、主攻长尾缺口 |
| 漏斗说明 | `docs/seo/keyword-to-tool-funnel.md` | 漏斗与合规展开 |

`verdict`：`build`（新工具候选）· `absorb`（丰富已有 slug）· `defer` · `drop`。默认优先 **absorb**。  
`competition_tier`：`long_gap` / `locale_gap` 优先进周 build；`head` 禁止进攻立项。

---

## 2. 有一批词时怎么开始

### 2.1 准备输入

词表至少含：**候选词**；建议另附 `locale` / `gl`（如 `en`/`us`）、种子词、相关搜索/PAA 备注。  
可直接交给 Agent，或写入主题夹（模板见 [`docs/seo/keywords/README.md`](../../docs/seo/keywords/README.md)；跨主题试点见 [`docs/seo/serp-batches/README.md`](../../docs/seo/serp-batches/README.md)）。

**Bing SERP 自动记录（可选）**：本机 CloakBrowser 已安装时，用公用脚本批量搜索并落**主题夹**脱敏摘要：

```bash
python ops/seo/bing_serp/run_bing_serp.py --theme cidr --queries "terraform cidrsubnet" --write-batch-md --batch-id YYYY-MM-DD-cidr-...
# 或从 Planner CSV：
python ops/seo/bing_serp/run_bing_serp.py --theme cidr --file docs/seo/keywords/cidr/Cidr_KeywordPlanner_bing.csv --column 关键词 --limit-queries 20 --write-batch-md --batch-id YYYY-MM-DD-cidr-...
```

说明见 [`bing_serp/README.md`](./bing_serp/README.md)。JSON 在 `.cache/serp/bing/`；`--theme` + `--write-batch-md` 写入 `docs/seo/keywords/{theme}/`。脚本给出的 `competition_tier` 是草稿：`unusable` 表示 SERP 污染（§3.3 I），入池前仍走下方 Agent 分析，**不得**把污染行当 `long_gap`。

### 2.2 触发分析（对 Agent 说清）

示例：

> 按 keyword-to-tool-funnel 分析下面这批词，写入 docs/seo/keywords/{theme}/ + keyword-daily-pool，更新 tracker；先 absorb 优先；填写 competition_tier（回避大词、主攻 long_gap/locale_gap）。不要自动建 work-tasks。

然后粘贴词表，或给出已保存的批次路径。

### 2.3 验收分析产出

- [ ] `docs/seo/keywords/{theme}/` 有本批 `.md`（或跨主题时 `serp-batches/`）
- [ ] `keyword-daily-pool.tsv` 已追加行且每行有 `verdict` + `competition_tier`
- [ ] 本批缺口类（`long_gap`+`locale_gap`）占多数；`head` 未进入周 build 进攻队列
- [ ] `keyword-to-tool-tracker.md` 快照 / 决策日志已更新
- [ ] **未**因本次分析新建 `work-tasks/`

### 2.4 拍板后的执行

| 池内结果 | 运维 / 产品动作 |
|---|---|
| `absorb` | 更新对应已有工具 title / FAQ / Use cases / IG（走既有 i18n + `tool-coverage-pass`）；不新建 URL |
| `build` | 人工确认 slug 后，再开 `work-tasks/{slug}/` → coverage 0b → 实现 → `build:site` + `lint:seo` → **`npm run deploy`**（upload/verify）→ **git push** → `verify:r2:live` |
| `defer` / `drop` | 留池即可；理由写在 `notes` 或 tracker 决策日志 |

发版与 IndexNow 仍按 [`ops/README.md`](../README.md) §4 / §4.1 与 [`ops/worker-r2-ops.md`](../worker-r2-ops.md)；本流程不替代 `build:site`，也不替代 R2 灌桶、**git push（CF）** 与版本校验。

---

## 2.5 存量工具：词根 → Keyword Planner（每周）

1. 打开 [`docs/seo/2026-08-20-tool-keyword-roots.md`](../../docs/seo/2026-08-20-tool-keyword-roots.md)，选 3–5 个 slug  
2. 用该行 `primary_roots` / `adwords_seed_suggested` 在 Google Ads **Keyword Planner** 查相关与长尾（脱敏笔记）  
3. 头词标 `head` 丢弃进攻；长尾写入 `keyword-daily-pool.tsv`（`absorb_slug`=该工具，`competition_tier`=`long_gap`/`locale_gap`）  
4. 按长尾优化该工具功能与 SEO（FAQ/Use cases/控件），不新建近义 URL  
5. 细节见策略 [`2026-08-20-long-tail-gap-strategy.md`](../../docs/seo/2026-08-20-long-tail-gap-strategy.md) §4.7  

---

## 3. 节奏建议

| 节奏 | 动作 |
|---|---|
| 按批 / 每天 | 词进池（约 10 条），0 新 URL |
| 每周 | 审 `verdict`；**3–5 slug 词根→Keyword Planner→absorb**（§2.5）；`build` 仅确认创建时开 work-tasks（≤1–2） |
| 每 2–4 周 | GSC 复盘；结论回写 tracker |

---

## 4. 红线（运维须知）

- 禁止一词一 URL 日更；禁止 SERP 标题套空壳页  
- 禁止抄前排正文入库当文案  
- 禁止为「跟进本事项」自动创建 `work-tasks/`  
- 合规对齐：`.cursor/rules/seo-google-policy.mdc`、`tool-i18n-seo.mdc`

---

## 5. 相关链接

| 文档 | 用途 |
|---|---|
| [keyword-to-tool-tracker.md](../../docs/seo/keyword-to-tool-tracker.md) | 事项状态 |
| [2026-08-20-long-tail-gap-strategy.md](../../docs/seo/2026-08-20-long-tail-gap-strategy.md) | 选题：回避大词、主攻长尾缺口；§4.7 AdWords |
| [2026-08-20-tool-keyword-roots.md](../../docs/seo/2026-08-20-tool-keyword-roots.md) | 127 工具词根 |
| [keyword-to-tool-funnel.md](../../docs/seo/keyword-to-tool-funnel.md) | 漏斗展开 |
| [keyword-daily-pool.tsv](../../docs/seo/keyword-daily-pool.tsv) | 运行表 |
| [keywords/](../../docs/seo/keywords/) | **主题词表与分析**（每主题一夹） |
| [serp-batches/](../../docs/seo/serp-batches/) | 跨主题/试点批次（主题批优先 keywords/） |
| Skill `keyword-to-tool-funnel` | Agent 强制流程 |
| Skill `tool-coverage-pass` | 真正改/建工具时的覆盖门禁 |
| [inbound-link-outreach.md](./inbound-link-outreach.md) | 入站获链（另一条 SEO 运维线） |
