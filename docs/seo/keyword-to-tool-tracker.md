# 独立项跟踪：SERP 日抽词 → 工具 → IG

**事项 ID**：`seo-keyword-to-tool-funnel`  
**状态**：`active`  
**启动日**：2026-08-11  
**负责人**：（填）  
**目标站点**：https://onlinefreetools.org  

> **本文件 = 重要事项的跟进入口**（节奏、待办、决策），不是工具工程目录。  
> **可执行流程**：Skill [`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md)（规则镜像：`.cursor/rules/keyword-to-tool-funnel.mdc`）。  
> **`work-tasks/{slug}/` 只在真正要创建某个工具时再建**；本事项不因「跟进/分析」自动建 work-tasks。  
> 策略说明：[keyword-to-tool-funnel.md](./keyword-to-tool-funnel.md)。勿与单次 GSC `docs/seo/YYYY-MM-DD/03-todo.md` 混写。

---

## 1. 一句话目标

批量 Google SERP 取词进意图池（分析）→ 合并过滤 → **每周最多推动 1–2 个**可交互工具（满 IG + 覆盖门禁 + 实质多语）；长尾优先 absorb；禁止一词一页日建。

---

## 2. 权威与资产索引

| 类型 | 路径 |
|---|---|
| **Skill（执行）** | [`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md) |
| **运维操作说明** | [`ops/seo/keyword-to-tool-ops.md`](../../ops/seo/keyword-to-tool-ops.md) |
| 规则（编辑词池时） | `.cursor/rules/keyword-to-tool-funnel.mdc` |
| 漏斗说明 | [keyword-to-tool-funnel.md](./keyword-to-tool-funnel.md) |
| 意图池运行表 | [keyword-daily-pool.tsv](./keyword-daily-pool.tsv) |
| SERP 批次目录 | [serp-batches/](./serp-batches/) |
| GSC 策略交叉引用 | [2026-08-08/02-next-strategy.md](./2026-08-08/02-next-strategy.md) |
| 合规 / IG | `.cursor/rules/seo-google-policy.mdc` · `tool-i18n-seo.mdc` |
| 覆盖门禁（写工具时） | `.cursor/skills/tool-coverage-pass/SKILL.md` |
| 工具立项（仅创建工具时） | `work-tasks/{slug}/` — **不由本事项自动创建** |

---

## 3. 当前状态快照

| 字段 | 值 |
|---|---|
| 最近更新 | 2026-08-13 |
| 最近批次 | [serp-batches/2026-08-13-keyword-planner-magnets.md](./serp-batches/2026-08-13-keyword-planner-magnets.md) |
| 池内 `build` 候选 | `safe-paste-cleaner`、`magnet-pull-force-calculator`（均仅词池标记；**未**建 work-tasks） |
| 本周新建工具页 | 0 |
| 阻塞 | 无；等待下一批 SERP / 人工决定是否对某候选开工具立项 |

---

## 4. 里程碑

| ID | 里程碑 | 状态 | 日期 / 备注 |
|---|---|---|---|
| M0 | 漏斗文档 + 词池模板 + 策略交叉引用 + **本跟踪文件** | done | 2026-08-11 |
| M1 | 首批 SERP 分析进池（~10 候选） | done | pilot01；含 absorb/build/defer |
| M2 | 常态：连续 ≥2 周「抽词进池 / 周审 verdict」可复盘 | todo | |
| M3 | （可选、另决议）对某 `build` 开 `work-tasks` 并上线满 IG 工具 | todo | 与本事项跟进分离；开夹才算工具立项 |
| M4 | 首轮 GSC 对照（有新工具或 absorb 改动后 2–4 周） | todo | |

---

## 5. 进行中 / 待办

### P0 — 事项节奏（本文件职责）

- [x] 下一 SERP 批次 → `serp-batches/YYYY-MM-DD-*.md`，抽约 10 条写入 `keyword-daily-pool.tsv`（2026-08-13 磁铁批已完成）
- [ ] 周审：更新各行 `verdict`；优先 `absorb`；`build` 仅记入池与本日志，**默认不建 work-tasks**
- [ ] 若人工决定创建工具：在决策日志写明 slug，再另开 `work-tasks/{slug}/`（工具流程，不在本夹）

### P1 — 与既有页协同

- [ ] 池中 `absorb`：排期改既有 title/FAQ（可写进当轮 GSC todo，结论回写本决策日志）

### P2 — 复盘

- [ ] 每 2–4 周：对照 GSC；更新快照与决策日志
- [ ] 评估是否维持「周 ≤3 新工具」且 IG 不塌（若当期有开工具）

---

## 6. 周节奏检查表（复制用）

```markdown
### Week YYYY-Www（日期范围）

- [ ] SERP 批次：`serp-batches/…`
- [ ] 词池新增约 N 行（目标 ~10）
- [ ] 周审 verdict 变更：…
- [ ] 是否另开工具立项（work-tasks）：slug=… / 否
- [ ] absorb 动作：…
- [ ] 风险 / 延期：…
```

---

## 7. 决策日志（只追加）

| 日期 | 决策 | 理由 |
|---|---|---|
| 2026-08-11 | 独立事项启动；日抽进池、周审；周建工具 ≤1–2 | 避免 scaled content / doorway |
| 2026-08-11 | 词源 = 批量 Google SERP（分析用） | 词表不固定；GSC/Omni 仅校验 |
| 2026-08-11 | 本跟踪文件 ≠ work-tasks；误建的 `safe-paste-cleaner` 夹已删除 | work-tasks 只为创建工具；事项跟进用本 md |
| 2026-08-11 | 词池仍保留 `safe-paste-cleaner` 为 `build` 候选 | 仅分析结论；开工具须另决议 |
| 2026-08-11 | 落地 Skill + 规则 `keyword-to-tool-funnel` | 目标：从关键词找新工具创建，或融入丰富已有工具更新 |
| 2026-08-12 | 运维文档：`ops/seo/keyword-to-tool-ops.md` + README §4.2 | 有一批词时的操作入口写入 ops |
| 2026-08-13 | 分析 Keyword Planner 磁铁批（~700 词）进池；无既有 slug 可 absorb；主 build 候选 `magnet-pull-force-calculator`（未建 work-tasks） | 磁铁批约 9 成为商业购买/产品规格/品牌导航意图 → drop；可交互缺口集中在吸力/强度/等级/尺寸 |
| 2026-08-13 | `magnet-pull-force-calculator` 的等级对照/材料对比/尺寸换算记为同一工具的子意图，禁止按 grades/material/size 拆近义 URL | 对齐 doorway / scaled content 红线；一带多场景 |

---

## 8. 明确不做（本项红线）

- 一词一工具日更；SERP 标题 → 空壳页  
- 抄袭前排正文；未过 0b / 无 IG 占位进 sitemap  
- 以 FAQ 富结果 / `llms.txt` / AI 专用 schema 为 KPI  
- **为「跟进本事项」自动创建 `work-tasks/`**  
- 把本事项待办拆散只写进某次 GSC `03-todo` 而不回写本文件  

---

## 9. 状态取值

`active` | `paused` | `done`  

暂停或结项时改顶部状态，并在决策日志追加一行。
