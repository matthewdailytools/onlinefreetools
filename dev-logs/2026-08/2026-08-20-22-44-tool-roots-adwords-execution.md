Date: 2026-08-20 22:44
Summary: Add AdWords long-tail workflow to SEO plan; publish 127-tool keyword-root review.

[question]
执行方案增加：重新review目前的工具，列出词根，然后根据大词词根手动从google adwords查询长尾关键词；根据关键词来优化功能和seo。然后重新review目前的工具，列出词根

[try to solve]
执行方案已增加「存量工具：词根 → Google Ads Keyword Planner 长尾 → 功能/SEO absorb」闭环（`docs/seo/2026-08-20-long-tail-gap-strategy.md` §4.7），并同步 ops / tracker / Skill / README。

全站词根 Review 已完成（catalog 127 工具）：
- 人读：`docs/seo/2026-08-20-tool-keyword-roots.md`（按 calculator/developer/image/pdf/design 分组）
- 机读：`docs/seo/2026-08-20-tool-keyword-roots.tsv`（primary/secondary/adwords_seed）

使用方式：以 primary_roots 为 Planner 种子拉长尾 → 头词标 head 不进攻 → 缺口长尾入 keyword-daily-pool（absorb_slug=现有工具）→ 优化控件与 title/FAQ/Use cases，不拆近义 URL。建议每周 3–5 个 slug。

Review 结论：计算器 62 个词根多为 `{概念} calculator`（head 风险，须展开）；图片/PDF 头词拥挤，格式/体积/隐私长尾更好；开发者/SEO 工具更易出 long_gap。

[actions]
- docs/seo/2026-08-20-long-tail-gap-strategy.md (§4.7)
- docs/seo/2026-08-20-tool-keyword-roots.md (new)
- docs/seo/2026-08-20-tool-keyword-roots.tsv (new)
- docs/seo/README.md
- docs/seo/keyword-to-tool-tracker.md
- ops/seo/keyword-to-tool-ops.md
- .cursor/skills/keyword-to-tool-funnel/SKILL.md
