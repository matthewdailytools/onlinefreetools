Date: 2026-08-20 20:46
Summary: Confirmed strategy: prioritize existing tools CTR/ranking over new tools; outlined P0 absorb cluster from GSC 2026-08-12.

[question]
目前有展现很少点击，优先优化现有工具的排名和点击

[try to solve]
同意：阶段已是「广覆盖、有展示、近零点击」，应优先 absorb 丰富已有工具，暂缓新建。

诊断（GSC 2026-08-12，24h）：展示 ~302、点击 0、加权排名 ~70；矛盾是 SERP 深位 + title/描述未对齐检索主词，不是缺 URL。

本周执行优先级（CTR meta，不拆页）：
1. ru image-merge（展示 Top）— title 对齐 объединить/склеить фото онлайн
2. en schema-jsonld-generator — 前置 JSON-LD / Schema generator
3. es how-to-calculate-volume — 前置 calcular volumen
4. en how-to-calculate-npv — 对齐 how to calculate npv（排名深，先 meta）
5. es square-feet — 排名已 ~18，长窗口仍 0 点击再微调前 30 字

并行：索引噪声（robots /api、devlogs noindex、信息页尾斜杠）；导出 ≥28 天效果再验 CTR。

明确不做：日建新工具、砍语种、按未收录 URL 扫射改页。

[actions]
- 只读对照 docs/seo/reviews/2026-08-12 与高展示页现行 title；未改代码
