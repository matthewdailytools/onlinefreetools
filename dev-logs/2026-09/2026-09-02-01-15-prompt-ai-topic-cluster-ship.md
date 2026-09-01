Date: 2026-09-02 01:15
Summary: Shipped ai-prompt-template-builder topic hub and 9-scene prompt cluster with shared Workers AI + Turnstile.

[question]
Prompt 工具簇：AI + 防刷 + 分场景 slug + Topic Hub — implement the plan.

[try to solve]
## Context

User required: (1) all prompt tools with optional CF AI + Turnstile anti-abuse; (2) feature highlighted in title/description; (3) separate slugs for writing, image, sketch, film, short drama, product design, Android, iOS; (4) new topic hub with Info Gain; (5) auto-run verify/deploy commands without pausing.

## Process

1. **Worker API** — Created `src/lib/promptAiSlugs.ts` (9-slug allowlist) and `src/endpoints/promptToolAi.ts` with `/api/tools/:slug/ai` + path-based slug resolution; registered all slugs in `src/index.ts`.
2. **Shared UI** — `src/pages/site/promptAiPanel.ts` for Expand/Polish, Turnstile, consent modal, fetch script.
3. **Topic hub** — Added `ai-prompt-template-builder` to `topics.ts`, `topics.mjs`, `merge-all.mjs`, ten-locale `i18n-topics.mjs` (intro/choose/limits/FAQ IG).
4. **Seven new tools** — midjourney, sketch, film, short-drama, product-design, android, ios: catalog shards, pages, icons, en + nine locales, work-tasks briefs.
5. **Upgraded S0 + writing** — primaryTopic migration; writing page wired to `promptAiPanel`; titles suffixed `— Local + Optional AI`; descriptions mention Turnstile.
6. **Gates** — Fixed 03 `1b` rows and locale description SEO keywords; `verify:tool` OK for all 9 slugs (162 tools total).

## Root cause / analysis

Original topic doc absorbed film/drama/app into S0 chips only; user override required **both** S0 chips and dedicated URLs. Doorway mitigation: distinct primary controls per slug + shared AI infra (no duplicate Worker code).

## Solution

| Deliverable | Path |
|---|---|
| Topic hub | `/topics/ai-prompt-template-builder` |
| API | `/api/tools/{slug}/ai` for 9 slugs |
| Shared panel | `src/pages/site/promptAiPanel.ts` |
| Cluster checklist | `work-tasks/ai-prompt-template-builder/03-cluster-slugs.md` |
| Strategy doc | `docs/seo/keywords/prompt-builder/2026-09-01-ai-prompt-template-builder-topic.md` §3.2 updated |

## Notes / boundaries

- Rate limits remain site-wide (shared Neurons pool).
- `prompt-template-builder` still uses inline AI script (API path compatible); other pages use shared panel.
- Deploy: `npm run deploy` uploads R2; Worker via git push.

[actions]
- Added promptToolAi endpoint, promptAiPanel, topic hub, 7 new tools, upgraded 2 existing
- README + ops checklist updated
- All 9 slugs `verify:tool` OK
