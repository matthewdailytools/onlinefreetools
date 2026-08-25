Date: 2026-08-08 22:52
Summary: Clarified that how-to-calculate can be a selective naming pattern versus Omni, not a mass URL factory.

[question]
是否可以走how to calculate xxx模式来对标

[try to solve]
Yes—as an intent-layer naming strategy, not as a template for batch-building URLs like Omni’s catalog.

Conclusion: `how to calculate xxx` can match Omni’s “formula education” intent. Choose slug/title by intent; one URL per intent; never ship both how-to and calculator URLs for the same topic; never mass-clone shells.

Vs Omni: Omni mostly uses short paths (`/finance/roi`, `/health/bmi`) and captures “how to” traffic with long on-page copy. This site already has 5/6 calculators using `how-to-calculate-*`, and GSC shows educational queries such as `how to calculate marginal revenue`, `como calcular el roi`, and the Japanese query for marginal-revenue how-to—the pattern is already validated.

Recommended rules:
1. If the primary query is educational “how to calculate” (including local equivalents) → slug may be `how-to-calculate-{topic}`; title/H1 use natural local phrasing (not an English shell).
2. If the primary query is “X calculator” or a task name → use a short slug (inventory examples: `compound-interest`, `loan-emi`, `bmr-tdee`); title can still cover “how to calculate”.
3. Never split one topic into `how-to-calculate-roi` + `roi-calculator` (doorway / Bing duplicate).
4. Never rewrite Omni’s ~3867 pages into a how-to-calculate matrix—skin-swaps are still scaled content.
5. Multilingual: slug may stay English kebab-case; visible titles use local phrasing.

Ship guidance: keep the five live how-to pages; for P1 finance/health tools use short inventory slugs and cover dual intent via title + body; only choose the how-to-calculate prefix when coverage shows “how to” clearly stronger than “calculator”.

[actions]
- No code changes; clarified strategy vs the Omni SEO plan
