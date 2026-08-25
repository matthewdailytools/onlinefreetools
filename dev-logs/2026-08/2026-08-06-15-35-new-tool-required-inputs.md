Date: 2026-08-06 15:35
Summary: Documented the required inputs for creating a new tool and page under the latest SEO/IG strategy.

[question]
按照最新的策略，如果需要创建一个新的工具和页面，需要提供什么信息

[try to solve]
Under the latest strategy (tool direction + Information Gain + tool-creation / tool-i18n-seo), ship a new tool page only after an IG pre-review of product and content; engineering then follows the checklist. Minimum inputs:

1) Product and selection
- Tool name (EN/ZH), suggested slug, one-sentence real user job
- Primary direction (A browser JS / B scenario bridge / C vertical — pick one)
- Head term plus 1–5 long-tail intents; fold long-tails into Use cases/FAQ on this page by default; split URLs only when function/params/algorithm differ materially
- Whether YMYL; whether file/paste flows stay local

2) IG pre-review (strategy §3.8; ship gate ≥3 items from §3.1)
- What SERP top 5–10 competitors have and lack (≥3 gaps)
- Which ≥3 gains this site adds (nine-dimension ids + which page section)
- Authority source URLs; industry/scenario Use case drafts; edge/failure drafts
- How results land in indexable Example/FAQ; Related ≥2 internal-link plan

3) Copy and SEO blanks (all 10 locales eventually; brief may start with en, but all must be ready before ship)
- title / description (≥120 chars, with steps or formula + example or scenario)
- article: How it works, Use cases 2–3, boundaries, etc.
- example: fixed Input→Output
- FAQ ≥3; YMYL also needs disclaimer; recommend references ≥2

4) Interaction and tech
- Inputs/outputs, core algorithm or rules, boundary behavior
- Tier (WASM lazy load or not), dependencies, local-processing statement

Authority: `docs/2026-07-28-google-seo-strategy-implementation.md` §3.8/§8.2; `.cursor/rules/tool-creation.mdc`; `tool-i18n-seo.mdc`; `docs/2026-07-28-per-tool-dev-seo-plans.md` card fields.

[actions]
- Read-only review of rules and SEO strategy docs; no code changes
