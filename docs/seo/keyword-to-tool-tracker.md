# 独立项跟踪：SERP 日抽词 → 工具 → IG

**事项 ID**：`seo-keyword-to-tool-funnel`  
**状态**：`active`  
**启动日**：2026-08-11  
**负责人**：（填）  
**目标站点**：https://onlinefreetools.org  

> **本文件 = 重要事项的跟进入口**（节奏、待办、决策），不是工具工程目录。  
> **可执行流程**：Skill [`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md)（规则镜像：`.cursor/rules/keyword-to-tool-funnel.mdc`）。  
> **选题战略**：[2026-08-20-long-tail-gap-strategy.md](./2026-08-20-long-tail-gap-strategy.md)（回避大词、主攻未覆盖长尾）。  
> **`work-tasks/{slug}/` 只在真正要创建某个工具时再建**；本事项不因「跟进/分析」自动建 work-tasks。  
> 漏斗说明：[keyword-to-tool-funnel.md](./keyword-to-tool-funnel.md)。勿与单次 GSC `docs/seo/YYYY-MM-DD/03-todo.md` 混写。

---

## 1. 一句话目标

批量 Google SERP 取词进意图池 → **竞品覆盖分类（不抢已占位大词）** → 合并过滤 → **每周最多推动 1–2 个**缺口类可交互工具（满 IG + 覆盖门禁 + 实质多语）；长尾优先 absorb；禁止一词一页日建。

---

## 2. 权威与资产索引

| 类型 | 路径 |
|---|---|
| **Skill（执行）** | [`.cursor/skills/keyword-to-tool-funnel/SKILL.md`](../../.cursor/skills/keyword-to-tool-funnel/SKILL.md) |
| **选题战略** | [2026-08-20-long-tail-gap-strategy.md](./2026-08-20-long-tail-gap-strategy.md) |
| **全站词根** | [2026-08-20-tool-keyword-roots.md](./2026-08-20-tool-keyword-roots.md) · [tsv](./2026-08-20-tool-keyword-roots.tsv) |
| **运维操作说明** | [`ops/seo/keyword-to-tool-ops.md`](../../ops/seo/keyword-to-tool-ops.md) |
| 规则（编辑词池时） | `.cursor/rules/keyword-to-tool-funnel.mdc` |
| 漏斗说明 | [keyword-to-tool-funnel.md](./keyword-to-tool-funnel.md) |
| 意图池运行表 | [keyword-daily-pool.tsv](./keyword-daily-pool.tsv) |
| **主题词表 / 分析** | [keywords/](./keywords/)（每主题一夹，如 [`keywords/cidr/`](./keywords/cidr/)） |
| SERP 批次（跨主题试点） | [serp-batches/](./serp-batches/) |
| GSC 策略交叉引用 | [reviews/2026-08-12/02-next-strategy.md](./reviews/2026-08-12/02-next-strategy.md) |
| 合规 / IG | `.cursor/rules/seo-google-policy.mdc` · `tool-i18n-seo.mdc` |
| 覆盖门禁（写工具时） | `.cursor/skills/tool-coverage-pass/SKILL.md` |
| 工具立项（仅创建工具时） | `work-tasks/{slug}/` — **不由本事项自动创建** |

---

## 3. 当前状态快照

| 字段 | 值 |
|---|---|
| 最近更新 | 2026-08-28 |
| 最近批次 | [keywords/cidr/2026-08-28-cidr-keyword-planner.md](./keywords/cidr/2026-08-28-cidr-keyword-planner.md)（§3.3 G 重跑选词/slug） |
| 池内 `build` 候选 | **`measuring-magnetic-fields`**（已立项）；CIDR P0：`terraform-cidrsubnet`、`ip-range-to-cidr`、`private-cidr-ranges`；P1：`ipv6-cidr`、`cidr-cheat-sheet`；P2：`aws-vpc-cidr-planner`；收割：`cidr-to-ip-range` — **均未确认创建** |
| 本周新建工具页 | 0 |
| 阻塞 | CIDR slug 已重跑；等用户点名 slug 再建 work-tasks |

---

## 4. 里程碑

| ID | 里程碑 | 状态 | 日期 / 备注 |
|---|---|---|---|
| M0 | 漏斗文档 + 词池模板 + 策略交叉引用 + **本跟踪文件** | done | 2026-08-11 |
| M1 | 首批 SERP 分析进池（~10 候选） | done | pilot01；含 absorb/build/defer |
| M2 | 常态：连续 ≥2 周「抽词进池 / 周审 verdict」可复盘 | todo | |
| M3 | （可选、另决议）对某 `build` 开 `work-tasks` 并上线满 IG 工具 | in progress | 2026-08-28 已开 `work-tasks/measuring-magnetic-fields/`（0b ready）；页面未实现 |
| M4 | 首轮 GSC 对照（有新工具或 absorb 改动后 2–4 周） | todo | |
| M5 | 长尾缺口策略落地：词池字段 + 漏斗/Skill 对齐；后续批次按 `competition_tier` 入池 | done | 2026-08-20；见 `2026-08-20-long-tail-gap-strategy.md` |
| M6 | 全站工具词根 Review + §4.7 AdWords 长尾闭环写入执行方案 | done | 2026-08-20；`2026-08-20-tool-keyword-roots.*` |
| M7 | 首轮 Keyword Planner：≥3 slug 长尾入池并完成 absorb | todo | 用词根表种子手动查询 |

---

## 5. 进行中 / 待办

### P0 — 事项节奏（本文件职责）

- [x] 下一 SERP 批次 → `serp-batches/YYYY-MM-DD-*.md`，抽约 10 条写入 `keyword-daily-pool.tsv`（2026-08-13 磁铁批已完成）
- [x] 周审（2026-08-25）：补全词池 `competition_tier`；两条原 `build` 改为 `defer`（`mid_covered`）；**未**建 work-tasks
- [ ] 下一周审：仅当新批次出现 `long_gap`/`locale_gap` 且 `feasibility=yes` 时才标 `build`；`head` 不进进攻立项
- [ ] **词根→AdWords**：每周 3–5 slug，用 [tool-keyword-roots](./2026-08-20-tool-keyword-roots.md) 种子进 Keyword Planner，长尾过滤后入池并 absorb（策略 §4.7）
- [x] 若人工决定创建工具：确认属 `long_gap`/`locale_gap` 后，在决策日志写明 slug，再另开 `work-tasks/{slug}/`（2026-08-28：`measuring-magnetic-fields`）

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
| 2026-08-20 | GSC 高展示零点击簇 **absorb**：`ru/image-merge`、`en/schema-jsonld-generator`、`es/how-to-calculate-volume`、`en/how-to-calculate-npv` 改 title/description（及 schema home_*）；不新建 URL | 用户确认优先现有工具 CTR/排名；对齐 2026-08-12 P0 meta |
| 2026-08-20 | **选题战略变更**：不与已有流量站抢已占位大词；主攻未覆盖长尾 / 语言缺口；词池新增 `competition_tier`/`gap_notes`；文档 `2026-08-20-long-tail-gap-strategy.md` + 漏斗/Skill/ops 对齐 | 用户确认策略；已有 GSC 展示大词仅 CTR 收割，不作进攻立项 |
| 2026-08-20 | 执行方案 §4.7：存量工具 **词根 → Google Ads Keyword Planner 长尾 → 功能/SEO absorb**；完成 127 工具词根 Review（`2026-08-20-tool-keyword-roots.md`/.tsv） | 用户要求；计算器头词须展开后再入池 |
| 2026-08-25 | 周审：池内 **0** 个合格 `build` slug。`safe-paste-cleaner`、`magnet-pull-force-calculator` 由 `build` 改为 `defer`（`mid_covered`）。产品 P0 待建 ≠ 漏斗周建名额。 | 用户要求分析符合门禁的 slug；SERP 复核见词池与两份 serp-batches 周审节 |
| 2026-08-28 | 用户确认立项：slug/主词改为 **measuring magnetic fields**（`measuring-magnetic-fields`），替换 `magnet-pull-force-calculator`。开 `work-tasks/measuring-magnetic-fields/`；吸力/N 级/尺寸 absorb 进该页，禁止拆近义 URL。H1 不用商店吸力头词。 | 明确「开始立项」；主 SERP 为测量/读数而非 pull force；交互缺口=换算+解读 |
| 2026-08-28 | 按 `docs/seo/keywords/measuring-magnet-fields/keywords-search-volumns.txt` 优化立项关键词：H1 核心仍是 measuring magnetic fields；副标题 Field strength calculator；force/formula/chart/bar magnet 一带多场景；库仑/张力/洛伦兹作业题 drop。 | 用户要求用该词表做页面关键词；禁 doorway 拆页与 keyword stuffing |
| 2026-08-28 | CIDR Bing Planner 批（345 词）只出 `/cidr` 主题簇方案：主题页 + 最多 3–4 个子工具；`cidr calculator`/`cidr notation` 维持 `head` 不进攻；兽医 CIDR 同形词 drop。建议 path：`/cidr`、`/cidr/calculator`、`/cidr/ip-range`、`/cidr/cidrsubnet`（可选 `/cidr/vpc`）。**未**建 work-tasks。 | 用户要求按 `/主题/工具slug` 先给方案；空壳 hub 与一词一页禁止；平台仍硬编码 `/tools/{slug}` |
| 2026-08-28 | CIDR 方案修订：取消主题页；URL 一律 `/tools/{slug}`。按意图拆出 11 个须满 IG 的候选 slug（IPv4 host-range / mask / chart / range→CIDR / IP list / IPv6 / VLSM / overlap / terraform / VPC / private checker）。近义与头词不拆。**仍未**建 work-tasks。 | 用户要求沿用原路由、尽量拆长尾且每页有足够 Information Gain |
| 2026-08-28 | CIDR IA 以「意图聚类」为主表校正独立工具：长尾优先；IPv6→独立 `ipv6-cidr`；私网→`private-cidr-ranges`；overlap/expander/mask absorb 进 `cidr-host-range`；Bing serp×12 人工复核后更新词池。P0=`terraform-cidrsubnet`/`ip-range-to-cidr`/`private-cidr-ranges`。 | 用户要求聚类权威、第一时间满足长尾需求、用 bing_serp 选长尾 |
| 2026-08-28 | 主题文件归档约定：CIDR 分析/词表/SERP 一律放 `docs/seo/keywords/cidr/`；`bing_serp --theme` 写主题夹；`serp-batches` 仅跨主题试点。 | 用户要求每个主题对应文件保存在 keywords/{keyword}/ |
| 2026-08-28 | CIDR Planner ≥100 未扫词 Bing SERP×29（含 `cidr notation`）；人工复核**无新增 P0**；计算器近义→`cidr-host-range`，定义/chart→`cidr-prefix-chart`；`ipv6 cidr` 确认独立 P1。 | 用户要求补做 100+ 流量词 SERP |
| 2026-08-28 | 选题增加兜底 **title_gap_fallback**（策略 §3.3 G）：大词被工具占位时，同簇长尾若在该长尾 SERP 的 organic title 中未出现区别词，则用该长尾作工具 slug/H1（一簇一 URL、满 IG；默认不占周进攻）。 | 用户要求分析完善该规则 |
| 2026-08-28 | CIDR Planner **重跑选词/slug**：收割页 `cidr-to-ip-range`（H1=CIDR to IP range，title_gap）；速查 `cidr-cheat-sheet`；VPC `aws-vpc-cidr-planner`；废止 `cidr-host-range`/`cidr-prefix-chart`/`vpc-cidr-planner`。P0 仍为 terraform / ip-range-to-cidr / private-cidr-ranges。 | 用户要求按新标准重跑 |

---

## 8. 明确不做（本项红线）

- 一词一工具日更；SERP 标题 → 空壳页  
- 抄袭前排正文；未过 0b / 无 IG 占位进 sitemap  
- 以 FAQ 富结果 / `llms.txt` / AI 专用 schema 为 KPI  
- **为「跟进本事项」自动创建 `work-tasks/`**  
- 把本事项待办拆散只写进某次 GSC `03-todo` 而不回写本文件  
- **纯大词进攻立项**（与流量站硬刚已占位头词）  

---

## 9. 状态取值

`active` | `paused` | `done`  

暂停或结项时改顶部状态，并在决策日志追加一行。
