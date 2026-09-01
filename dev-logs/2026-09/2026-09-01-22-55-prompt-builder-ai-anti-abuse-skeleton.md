Date: 2026-09-01 22:55
Summary: Shipped Cloudflare Workers AI skeleton, anti-abuse layers, dual-mode compliance copy, and S0 Expand/Polish UI for prompt-template-builder before topic/writing/midjourney work-tasks.

[question]
Implement the plan「Prompt-builder 立项前：AI 与防刷提前量」— AI binding, protected API, Turnstile/rate limits, privacy/FAQ dual-mode copy, verify skeleton, then open work-tasks for topic hub + writing/midjourney + S0 AI UI.

[try to solve]
## Context
Before expanding the prompt-builder topic cluster (writing-prompt-generator, midjourney-prompt-builder, topic hub), the site needed a **local-first + opt-in Cloudflare Workers AI** path with Neurons protection. S0 `prompt-template-builder` was already live as pure local assembly; no `ai` binding or API existed.

## Process
1. **Decisions** — Recorded quotas in `work-tasks/prompt-template-builder/notes-ai-infra.md`: Free tier 10k Neurons/day, model `@cf/meta/llama-3.2-1b-instruct`, IP daily 8 / minute 4 / site daily 200, input cap 6000 chars, `PROMPT_AI_ENABLED` rollback.
2. **Wrangler** — Added `ai.binding`, `RATE_LIMIT_KV` (placeholder id pending Dashboard create), and `PROMPT_AI_*` vars in `wrangler.jsonc`; ran `npx wrangler types`.
3. **Worker API** — `src/endpoints/promptTemplateBuilderAi.ts`: `GET …/ai/health`, `POST …/ai` with action whitelist, Turnstile (`verifyTurnstileToken`), Origin check (`allowedSiteOrigin.ts`), minute memory + KV daily limits (`promptAiRateLimit.ts`), `env.AI.run`, mapped error codes.
4. **Anti-abuse** — Reused domain-lookup Turnstile secret pattern; Origin/Referer allowlist; input/max_tokens caps; no prompt body logging.
5. **Compliance** — Ten-locale privacy `workers_ai` section; tool FAQ q7 + AI UI strings in all ten locales; updated faq_a1/a2 for local vs optional AI.
6. **Frontend** — `promptTemplateBuilderPage.ts`: AI panel, consent modal (localStorage), Turnstile widget, fetch API, health-driven hide when disabled.
7. **Work-tasks** — Opened drafts: `writing-prompt-generator`, `midjourney-prompt-builder`, `ai-prompt-template-builder` topic hub; updated S0 `02-tool-info.md` dual-mode.
8. **Verify** — `merge:tools`, `lint:tool-page --require-html` green; `wrangler dev` blocked without `CLOUDFLARE_API_TOKEN` and real KV id.

## Root cause / analysis
- **Why KV + minute limit**: indexnow-style in-memory limits are per-isolate; AI Neurons cost requires cross-isolate daily caps.
- **Why health endpoint**: Lets prerendered HTML hide AI buttons when `PROMPT_AI_ENABLED=false` without breaking local mode.
- **Placeholder KV id**: `wrangler kv namespace create` needs authenticated Dashboard/CLI — must be replaced before production daily limits apply globally.

## Solution
| Layer | Path |
| --- | --- |
| Config | `wrangler.jsonc` — `ai`, `RATE_LIMIT_KV`, `PROMPT_AI_*` |
| API | `src/endpoints/promptTemplateBuilderAi.ts` |
| Limits | `src/lib/promptAiRateLimit.ts`, `src/lib/allowedSiteOrigin.ts` |
| UI | `src/pages/promptTemplateBuilderPage.ts` Expand/Polish + Turnstile |
| Privacy | `scripts/site/pages/privacy.mjs`, `i18n-site-pages.mjs` |
| Ops | `ops/cloudflare-workers-ai-access.md` §4.1 checklist updated |

Rollback: set `PROMPT_AI_ENABLED=false` → API 503, frontend hides `#ptbAiPanel`.

## Notes / boundaries
- **Manual before prod**: Create KV namespace, paste id into `wrangler.jsonc`; confirm Workers AI + billing alerts in Dashboard; baseline Neurons 3 days.
- **Local wrangler dev**: Requires `CLOUDFLARE_API_TOKEN`; dev calls consume Neurons.
- **Not in this PR**: Topic hub implementation (`topics.ts`), writing/midjourney tool pages — work-tasks only.
- **No separate ChatGPT/Gemini/Claude/DeepSeek URLs** — platforms stay in copy/chips on S0.

[actions]
- `wrangler.jsonc`, `src/index.ts`, `src/endpoints/promptTemplateBuilderAi.ts`, `src/lib/*`, `src/pages/promptTemplateBuilderPage.ts`
- Ten-locale tool i18n + privacy site pages
- `work-tasks/{writing-prompt-generator,midjourney-prompt-builder,ai-prompt-template-builder}/`
- `ops/cloudflare-workers-ai-access.md`, `work-tasks/prompt-template-builder/{02-tool-info,notes-ai-infra}.md`
