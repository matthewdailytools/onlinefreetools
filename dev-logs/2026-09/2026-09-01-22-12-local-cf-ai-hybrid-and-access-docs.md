Date: 2026-09-01 22:12
Summary: Wrote hybrid local+Workers AI product scheme and a separate free/paid CF AI access ops guide.
Visibility: people

[question]
本地和CF AI二合一，形成方案文档。单独文档给出怎么免费和付费接入CF AI

[try to solve]
## Context
After concluding local structure and Cloudflare Workers AI can run in parallel, the user asked for a durable product scheme plus a separate ops guide for free vs paid Workers AI access.

## Process
Checked current `wrangler.jsonc` (no `ai` binding yet), `/api/` routing in the Worker, and Cloudflare docs for pricing (10k Neurons/day), Paid overage, Paid-only models, limits, and Wrangler binding setup. Drafted two linked documents without implementing code.

## Solution
1. Product scheme: `docs/seo/keywords/prompt-builder/2026-09-01-local-and-cf-ai-hybrid-scheme.md` — default local Role/Task path; optional Expand/Polish via Worker; SEO/privacy; phased rollout; decision checklist.
2. Ops access: `ops/cloudflare-workers-ai-access.md` — Free daily Neurons, Workers Paid billing, binding snippet, local-dev billing warning, checklists, security notes.

## Notes / boundaries
No wrangler/AI code shipped in this step. Official Cloudflare pricing/limits remain source of truth when numbers drift.

[actions]
- Added hybrid scheme + ops access doc; linked from prompt-builder README, ops README, tracker
