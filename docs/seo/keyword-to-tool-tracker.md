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
| 最近更新 | 2026-09-04 |
| 最近批次 | [excel Planner](./keywords/excel/2026-09-04-excel-keyword-planner.md)（软件品牌种子 1162 词；约七成 drop；0 absorb；场景 slug 现 **8** 页在 catalog：公式+发票/预算/工时；**N9–N12 已下线**；禁 online-excel 壳；**未 SERP**） |
| 池内 `build` 候选 | Excel 公式/模板 8 slug 在 catalog；N9–N12 用户下线；YAML/XML P2 仍 defer |
| 本周新建工具页 | Excel 场景保留 8 slug（嵌套 IF / IFS / IFNA / COUNTIF / 公式速查 / 发票·预算·工时表） |
| 阻塞 | 发版：`npm run deploy` / upload:r2；SSL 为 crt.sh CT 非握手 |

---

## 4. 里程碑

| ID | 里程碑 | 状态 | 日期 / 备注 |
|---|---|---|---|
| M0 | 漏斗文档 + 词池模板 + 策略交叉引用 + **本跟踪文件** | done | 2026-08-11 |
| M1 | 首批 SERP 分析进池（~10 候选） | done | pilot01；含 absorb/build/defer |
| M2 | 常态：连续 ≥2 周「抽词进池 / 周审 verdict」可复盘 | todo | |
| M3 | （可选、另决议）对某 `build` 开 `work-tasks` 并上线满 IG 工具 | in progress | 2026-08-28 已开 `measuring-magnetic-fields/` 与 `terraform-cidrsubnet/`（0b ready）；页面未实现 |
| M4 | 首轮 GSC 对照（有新工具或 absorb 改动后 2–4 周） | todo | |
| M5 | 长尾缺口策略落地：词池字段 + 漏斗/Skill 对齐；后续批次按 `competition_tier` 入池 | done | 2026-08-20；见 `2026-08-20-long-tail-gap-strategy.md` |
| M6 | 全站工具词根 Review + §4.7 AdWords 长尾闭环写入执行方案 | done | 2026-08-20；`2026-08-20-tool-keyword-roots.*` |
| M7 | 首轮 Keyword Planner：≥3 slug 长尾入池并完成 absorb | todo | 用词根表种子手动查询 |

---

## 5. 进行中 / 待办

### P0 — 事项节奏（本文件职责）

- [x] 下一 SERP 批次 → `serp-batches/YYYY-MM-DD-*.md`，结论写入 `keyword-daily-pool.tsv`（2026-08-13 磁铁批已完成；**不设约 10 条上限**）
- [x] 周审（2026-08-25）：补全词池 `competition_tier`；两条原 `build` 改为 `defer`（`mid_covered`）；**未**建 work-tasks
- [ ] 下一周审：仅当新批次出现 `long_gap`/`locale_gap` 且 `feasibility=yes` 时才标 `build`；`head` 不进进攻立项
- [ ] **词根→AdWords**：每周 3–5 slug，用 [tool-keyword-roots](./2026-08-20-tool-keyword-roots.md) 种子进 Keyword Planner，长尾过滤后入池并 absorb（策略 §4.7）
- [x] 若人工决定创建工具：确认属 `long_gap`/`locale_gap` 后，在决策日志写明 slug，再另开 `work-tasks/{slug}/`（2026-08-28：`measuring-magnetic-fields`；同日 `terraform-cidrsubnet`）

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
- [ ] 词池新增 N 行（不设上限；记实际条数）
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
| 2026-08-28 | 用户点名立项 **`terraform-cidrsubnet`**：开 `work-tasks/terraform-cidrsubnet/`（0b+0i ready）。H1=Terraform cidrsubnet；cidrhost/cidrnetmask/cidrsubnets/hashicorp subnets cidr absorb 本页；不拆近义 URL；不做 VPC 规划器。 | 明确「立项」；long_gap 可交互求值缺口 |
| 2026-08-28 | 用户点名「cidr notation calculator」→ 按 Planner absorb 开收割页 **`cidr-to-ip-range`**（`work-tasks/` 0b+0i ready）。H1=CIDR to IP range；notation/calculator/mask/expand absorb；禁 H1=CIDR Calculator。 | 明确「立项」；title_gap_fallback 收割 |
| 2026-08-31 | 用户点名 token 效率模式立项并实现剩余 CIDR build slug：`ipv6-cidr`、`cidr-cheat-sheet`、`aws-vpc-cidr-planner`（十语 + coverage 0b/2/4 + build:site）。`vlsm-subnet-calculator` 仍不立项。 | 明确「立项并实现」；P1/P2 阻塞清除 |
| 2026-08-31 | 选题增加 **§3.3 H**：slug 须细化到用户**实际使用场景**（情境+动作+结果），全站适用；平台/渠道只是例子。废止品类/`*-pack` 作主 URL。社交草案见 [`keywords/social-share/`](./keywords/social-share/README.md)。**未**建 work-tasks。 | 用户要求 slug 落到真实使用场景 |
| 2026-08-31 | 澄清 §3.3 H **不是**「只适用于平台」：拓宽为全站使用场景表；社交平台拆法仅为示例。同步漏斗 / Skill / work-tasks / 覆盖门禁表述。 | 用户要求规则拓宽 |
| 2026-08-31 | 重梳产品待办 P0/P1/P2（清单 §0）：P0=`create-zip-file`、`amazon-main-image-size`、`iphone-app-store-screenshot`、`apple-touch-icon`、`open-graph-image-size`。`safe-paste-cleaner`/`ai-token-counter` 降为 P2 defer。废止 pack 名作进攻 slug。 | 用户要求按使用场景重排优先级 |
| 2026-08-31 | P0 Bing SERP×种子/长尾/改写三批；CN 国际版大量劫持且 Related 为空。人工选词：H1=`Open Graph image size`、`apple-touch-icon 180×180`、`Amazon main image size`（2000×2000 为 title_gap）、`iPhone 6.9 screenshot size`（弃 6.7）；`zip files online`/`apple-touch-icon generator` 标 head 不进攻。词池 10 行均为 defer/drop，**未**建 work-tasks。 | 用户要求为 P0 跑 Bing SERP 并用用户也搜选长尾 |
| 2026-09-01 | Compare-Text（733）+ text-diff（491）Planner 按使用场景聚类；Bing SERP×15 全 `usable`。收割页保持 `/tools/text-diff`（H1=Compare Two Texts Online）。Word/JSON/Excel 记 defer 建议 slug，**不占周 build**。禁止 `compare-text` 近义 URL。词池 +10 行；**未**建 work-tasks。 | 用户要求场景细化 slug、关键词归属、bing_serp、统一 SEO 策略 |
| 2026-09-01 | 用户点名 **text-compare topic**：保留 `/tools/text-diff`，H1 改为 **Check difference between two texts**；分场景建 `compare-two-text-files-online`、`compare-two-word-documents-for-differences`、`json-diff-checker-online`、`excel-compare-files`。H1=Planner 长尾原句。权威表 `keywords/text-compare/`。 | 明确立项并实现；细化操作场景、少控件 |
| 2026-09-01 | 固化 **Keyword Planner 归类 playbook**（`keyword-planner-analysis-rules.md`）；对 `keywords/prompt-builder` 98 词归类：**0 build**；结构化簇 absorb → `prompt-template-builder`；generator 头词/服务/品牌 drop 或划界；图像·写作·随机 defer。未 SERP、未建 work-tasks。 | 用户要求综合既往分析并保存可复用规则 |
| 2026-09-01 | **剔除词池「约 10 行」上限**：playbook / Skill / ops / 漏斗 / 策略 / bing_serp 模板对齐；进池不设条数限制，周 build 名额不变 | 用户要求 |
| 2026-09-01 | **docs/seo 整理**：枢纽 README；`magnet`→`measuring-magnet-fields`；`Compare-Text`→`compare-text-seeds`；补 reviews README；修出图方案坏链 | 用户要求整理 md |
| 2026-09-01 | prompt-builder **SERP 复核**（Google×6）：generator/builder/text-to/midjourney/random=**head**；`prompt template builder`=**mid_covered**（多页已用该 title）→ **G 不触发**；**0 long_gap / 0 build**。批次 `keywords/prompt-builder/2026-09-01-prompt-builder-serp.md` | 用户要求 SERP 复核；Bing CloakBrowser 本机未就绪 |
| 2026-09-01 | prompt-builder **场景修订**：① slug/H1/主打须含 prompt+(builder\|generator)，宜含 ai；② 按 Planner 搜法切 S0–S7（图像/写作/随机有证据；视频·论文·代码本批 0 不臆造）；③ 全覆盖仍成立，周 build 仍 0。Bing 批次已入库。 | 用户约束命名词族 + 按真实搜法场景 |
| 2026-09-01 | 调研 Feedough Prompt 工具线，落盘清单 `keywords/prompt-builder/2026-09-01-feedough-prompt-tools-inventory.md`（通用/模型/图像/视频/技法/格式/库；对照本站本地结构化路径） | 用户要求调研 feedough.com prompt 工具 |
| 2026-09-01 | 本地+CF AI **二合一方案** + 独立 **Workers AI 免费/付费接入**手册（未实现 binding） | 用户要求两份文档 |
| 2026-09-01 | **Topic 分析**：`2026-09-01-ai-prompt-template-builder-topic.md` — 可分场景+IG+进页即用；禁 Feedough 换皮 | 用户问竞品分场景与新 topic |
| 2026-09-01 | prompt-builder topic **修订：立项不看 SERP**；建议 3 工具页（S0 强化 + writing-prompt-generator + midjourney-prompt-builder） | 用户明确无需考虑 SERP |
| 2026-09-02 | 调研 lissy93/web-check：看板≠搜索作业。WHOIS/DNS/头/跳转/OG absorb 现页；SSL/DMARC defer（头词+未 SERP）；端口/WAF/威胁/碳排/Wayback drop。**0 build**，未建 work-tasks。 | 用户要求工具分析+搜索词分析 |
| 2026-09-02 | CloakBrowser Bing×15（web-check 主题）：15 usable；Related 全空。人工 **0 long_gap**。whois/headers 草稿 mid→head；security.txt 专用检查器墙→head（库存长尾猜测作废）；ssl certificate **G 不触发**。未建 work-tasks。 | 用户要求调用 cloakbrowser bing serp |
| 2026-09-02 | **能力先判**：未实现必须实现；生成≠校验；absorb 仅已能办成同一作业。订正 robots/sitemap/security.txt/SSL/DMARC 为 `build`（须实现）+ 场景/G H1；禁并进 generator。同步 playbook §0 / 策略 §E / Skill / rule。未建 work-tasks。 | 用户指出判断逻辑错误 |
| 2026-09-02 | CloakBrowser Bing Related 选 H1：头词×5 + 长尾×20；**Related/PAA 全空**。按有机 title 代理定实现队列 H1/slug（见 `keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`）。未建 work-tasks。 | 用户要求用 Bing 侧栏关联长尾定词 |
| 2026-09-02 | 用户点名「按照建议立项工具和实现」：开 work-tasks 并实现五工具（opts + Worker API + 十语 + build:site）。SSL 用 crt.sh CT（Workers 无对端证书）。未自动 deploy。 | 明确立项并实现 |
| 2026-09-03 | 批量能力改为**独立工具**：新 slug（含 bulk **或** batch，按搜法二选一）、独立 IG、单独 brief。按作业类型聚类；P0 五条场景 slug。单文件页不加 multiple 冒充覆盖。**未**跑 Planner/SERP，**未**建 work-tasks，不占周 long_gap。 | 用户要求单独立项+独立 slug，并评估 bulk/batch 搜法 |
| 2026-09-03 | 批量转换**按目标格式拆 URL**：`bulk-convert-images-to-jpg` / `-png` / `-webp`；进页即该格式、无下拉。用户不熟编码器，搜的是 jpg/png 结果文件。png→jpg、heic→jpg absorb 进 JPG 页。禁万能 `bulk-image-converter`。AVIF defer 仍用独立 slug。未建 work-tasks。 | 用户指出 to-webp 一页不够，须区分格式 slug |
| 2026-09-03 | 批量**压缩**可做三条独立 URL：商品图（jpg/照片）、PNG 保格式、PDF；GIF 后排。禁万能 compressor、禁与 convert 合并。 | 用户问批量压缩 slug 哪些可做 |
| 2026-09-03 | PDF Planner 批（1333 词，Adobe 种子）：~62% 品牌/下载/安装 → drop；16 已有 PDF slug **absorb**（merge/compress/pdf-to-jpg 等头词禁 H1）；**未实现**编辑/填表/签名/Word↔PDF/HTML→PDF → **defer**（须实现规格+场景 H1）；**未 SERP → 0 long_gap / 0 周 build**；未建 work-tasks。 | 用户要求分析 keywords/pdf Planner |
| 2026-09-03 | PDF Planner **按用户细分场景重拆**：对象/方向/约束能分开就独立 slug（对照 text-compare / bulk 按输出拆）。9 条 absorb 现页；**22 条新 slug defer**（混文件合成、Word↔PDF、HTML、改字/盖字、编域/填表/做可填/建表、手写签/证书签、浏览打开、在线撰写、可编辑化、PDF/A 转与校、对比、抽文本、翻页书、打印、DWG）。**禁** `online-pdf-editor` / `pdf-converter` / `pdf-maker` 壳页（改 FAQ 分发）。未 SERP → 0 周 build；未建 work-tasks。 | 用户要求意图可细分即单独 slug |
| 2026-09-04 | Excel Planner 批（1162 词，Microsoft Excel 软件种子）：约七成品牌/下载/教程/版本/拼写 → drop。本批 **0** 条可 absorb 进 `excel-compare-files`/`csv-json`（无 compare、无 csv 转换搜法）。抽出 **12** 条场景 slug **defer**（嵌套 IF / IFS / IFNA / COUNTIF、公式速查、发票/预算/工时表、出图/看板/透视、浏览器打开）。**禁** `online-excel` 套件壳。文件作业（xlsx↔csv、合并、Excel→PDF）本 CSV **0 命中**，不臆造 slug。未 SERP → 0 周 build；未建 work-tasks。 | 用户要求分析 keywords/excel Planner |
| 2026-09-04 | 用户确认对 Excel 批 **12 条 defer 新 slug 立项并实现**：`work-tasks/` + catalog/i18n/Page；场景 H1；发票/预算 `ymyl`；禁 `online excel` / `IFS Excel` / `Pivot table Excel` 头词进攻。一次 `build:site` 进首页与 sitemap。 | 用户要求以效率优化模式逐条立项并实现 |
| 2026-09-04 | 用户要求**下线** Excel N9–N12：`create-graph-from-spreadsheet-data`、`create-excel-dashboard`、`build-pivot-table-from-spreadsheet`、`open-excel-file-in-browser`（catalog/i18n/Page/icon/work-tasks/README）。公式与发票·预算·工时 8 页保留。词池四行改 `drop`。 | 用户要求删除出图/看板/透视/浏览器打开 |
| 2026-09-05 | PDF 工具能力复审后回写 N1–N22：19 项真实同意图作业已上线，词池由 `defer / implement_owed` 改为对应 slug 的 `absorb`；N12 证书 PKI/PAdES 签名、N17 profile-aware PDF/A 标准验证、N22 专有 DWG/矢量描图仍未实现，继续 `defer`，不得用可见哈希标记、五指标筛查或 ASCII DXF 文本导出冒充覆盖。 | PDF review-and-fix 能力边界校正 |

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
