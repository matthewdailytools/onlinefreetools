Date: 2026-08-08 22:15
Summary: Wired Turnstile on domain-lookup (widget + server siteverify) after user confirmed frontend edits.

[question]
yes

[try to solve]
Wired Turnstile into `domain-lookup`: form embeds the widget (sitekey `0x4AAAAAAEKPkweeKKHYjYJX`) and requires a token before submit; real siteverify runs in same-origin `/api/tools/domain-lookup` (token is single-use, so do not hit the Spin Worker first then the business API). `TURNSTILE_SECRET_KEY` written to the `onlinefreetools` Worker Secret and local `.dev.vars`. Added captcha copy for ten locales and ran `merge:tools`. Spin `validate.sh` failed health because local access to `*.workers.dev` timed out; recheck on a reachable network or in the browser after deploy. Asked whether to persist the Spin skill under `.claude/skills/turnstile-spin/`.

[actions]
- `src/pages/domainLookupPage.ts` — Turnstile script/widget + gate; sample load waits for callback
- `src/endpoints/turnstileSiteverify.ts` — new Cloudflare siteverify helper
- `src/endpoints/domainLookup.ts` — require Turnstile before upstream lookups
- `src/index.ts` — `Env.TURNSTILE_SECRET_KEY`
- `src/site/i18n/tools/domain-lookup/*` + merge outputs — three captcha keys
- `npx wrangler secret put TURNSTILE_SECRET_KEY --name onlinefreetools`
- Local `.dev.vars` (gitignored) with the same secret
- `bash …/validate.sh` → health fail (workers.dev unreachable)
