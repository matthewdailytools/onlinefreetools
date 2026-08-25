Date: 2026-08-20 22:44
Summary: Added AdWords long-tail workflow to SEO plan; published 127-tool keyword-root review.

[question]
执行方案增加：重新review目前的工具，列出词根，然后根据大词词根手动从google adwords查询长尾关键词；根据关键词来优化功能和seo。然后重新review目前的工具，列出词根

[try to solve]
The execution plan now includes a closed loop for existing tools: roots → Google Ads Keyword Planner long-tail → feature/SEO absorb (`docs/seo/2026-08-20-long-tail-gap-strategy.md` §4.7), synced to ops / tracker / Skill / README.

Site-wide root review completed (catalog 127 tools):
- Human-readable: `docs/seo/2026-08-20-tool-keyword-roots.md` (grouped by calculator/developer/image/pdf/design)
- Machine-readable: `docs/seo/2026-08-20-tool-keyword-roots.tsv` (primary/secondary/adwords_seed)

Usage: seed Planner from primary_roots → mark head terms as non-attack → put gap long-tails into keyword-daily-pool (`absorb_slug` = existing tool) → enrich controls and title/FAQ/Use cases without near-duplicate URLs. Suggest 3–5 slugs per week.

Review takeaway: calculator roots (62) are often `{concept} calculator` (head risk—must expand); image/PDF heads are crowded, so format/size/privacy long-tails are better; developer/SEO tools more often yield long_gap.

[actions]
- docs/seo/2026-08-20-long-tail-gap-strategy.md (§4.7)
- docs/seo/2026-08-20-tool-keyword-roots.md (new)
- docs/seo/2026-08-20-tool-keyword-roots.tsv (new)
- docs/seo/README.md
- docs/seo/keyword-to-tool-tracker.md
- ops/seo/keyword-to-tool-ops.md
- .cursor/skills/keyword-to-tool-funnel/SKILL.md
