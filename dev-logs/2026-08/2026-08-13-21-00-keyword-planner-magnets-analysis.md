Date: 2026-08-13 21:00
Summary: 分析 Google Keyword Planner 磁铁批（~700 词）进意图池；主 build 候选 magnet-pull-force-calculator；未建 work-tasks

[question]
按 keyword-to-tool-funnel 分析“Keyword Planner 08-13-2026 at 12-51-05.csv”这批词，写入 serp-batches + keyword-daily-pool，更新 tracker；先 absorb 优先。不要自动建 work-tasks。

[try to solve]
按 Skill keyword-to-tool-funnel 完成整批分析并入库（只建池、不建页、不建 work-tasks）：

1. 批次摘要：docs/seo/serp-batches/2026-08-13-keyword-planner-magnets.md
   - 来源 Google Keyword Planner 批量导出（~700 词，en/us）；含搜索量区间/竞争/建议出价
   - 意图聚类：磁铁强度/吸力、磁铁等级、材料对比、尺寸规格、磁铁类型知识、原理科普、用途列表、购买渠道、定制/冰箱磁铁、品牌厂家、产品规格

2. 词池追加 10 行（keyword-daily-pool.tsv，source_batch=2026-08-13-keyword-planner-magnets）：
   - build ×4：magnet strength calculator（主工具候选，建议 slug magnet-pull-force-calculator）、magnet grades、neodymium vs regular、magnet sizes——后三条并入主工具（等级/材料/尺寸），禁止拆近义 URL
   - defer ×2：types of magnets、different magnetic materials（知识意图，待主工具上线后吸收为 How/FAQ 素材）
   - drop ×4：how do magnets work、everyday uses of magnets（纯教育/列表）、buy magnets online（商业购买意图）、custom magnets（定制产品意图）

3. tracker 更新（keyword-to-tool-tracker.md）：快照最近批次/池内 build 候选 += magnet-pull-force-calculator；P0 勾掉本批；决策日志追加 2 行（主候选立项理由 + 一带多场景禁拆页）。

结论要点：
- catalog 无磁铁类既有 slug 可 absorb（magnet-link-decoder 是 BitTorrent 磁力链接，非物理磁铁）
- 本批约 9 成为商业购买/产品规格/品牌导航意图 → drop；可交互工具缺口集中在吸力/强度/等级/尺寸
- 磁铁吸力计算器 SERP 竞品是磁铁商店自带计算器（K&J 等），通用工具站空白；IG 缺口：估算公式+误差边界、N 级对照表、材料对比、inch↔mm 换算、安全提示
- 未创建任何 work-tasks

[actions]
- docs/seo/serp-batches/2026-08-13-keyword-planner-magnets.md（新建批次摘要）
- docs/seo/keyword-daily-pool.tsv（追加 10 行候选，含 verdict）
- docs/seo/keyword-to-tool-tracker.md（快照 + P0 + 决策日志 2 行）
