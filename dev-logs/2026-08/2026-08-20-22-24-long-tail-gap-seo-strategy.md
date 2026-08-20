Date: 2026-08-20 22:24
Summary: Adopt long-tail gap SEO strategy: avoid head terms owned by traffic sites; document execution plan and align funnel.

[question]
修改策略：不能与其他已经获取流量的站抢已有大词的流量，需要抢他们没有覆盖的长尾词。基于次，制定seo优化执行方案和策略文档

[try to solve]
核心策略已立法并落到执行链：不与已有稳定流量站正面硬刚其已占位大词；主攻 SERP 未覆盖/极薄的长尾与语言缺口；本站已有 GSC 展示的大词仅做 CTR/meta 收割（防守），不作进攻立项。

主文档：`docs/seo/2026-08-20-long-tail-gap-strategy.md`（定义 head / mid_covered / long_gap / locale_gap、决策流程图、周选型优先级、取词/产能/验收/KPI、明确不做）。

已同步：
- 漏斗 `keyword-to-tool-funnel.md`：竞品覆盖三问、建站门禁第 5 条、词池新列
- Skill / rule / ops / serp-batches 模板 / README / tracker 决策日志
- 词池 TSV 新增列 `competition_tier`、`gap_notes`
- Omni 对标与 Google SEO 落地文交叉引用更新

执行要点：种子可含大词但入池以向下展开长尾为主（建议每批缺口类 ≥6/10）；周 build ≤1–2 且只给 long_gap/locale_gap；同簇长尾仍一带多场景，禁止拆 doorway。

[actions]
- docs/seo/2026-08-20-long-tail-gap-strategy.md (new)
- docs/seo/keyword-to-tool-funnel.md
- docs/seo/keyword-daily-pool.tsv
- docs/seo/keyword-to-tool-tracker.md
- docs/seo/README.md
- docs/seo/serp-batches/README.md
- docs/2026-08-08-omnicalculator-seo-traffic-strategy.md
- docs/2026-07-28-google-seo-strategy-implementation.md
- .cursor/skills/keyword-to-tool-funnel/SKILL.md
- .cursor/rules/keyword-to-tool-funnel.mdc
- ops/seo/keyword-to-tool-ops.md
