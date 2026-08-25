Date: 2026-08-08 22:24
Summary: Clarified that ~/.cf-turnstile-token is optional for day-to-day; .dev.vars secret is what local lookup needs.

[question]
本地的apitoken是否还需要

[try to solve]
Day-to-day site / domain-lookup does **not** need `~/.cf-turnstile-token` (that is the Cloudflare management API for creating widgets, deploying the siteverify Worker, changing secrets). Runtime uses the public sitekey plus `TURNSTILE_SECRET_KEY` in the Worker / `.dev.vars`. Keep the secret in `.dev.vars` for local `wrangler dev`; production already has `wrangler secret put`. If no dashboard-level ops soon, the token file can be deleted and recreated later via the Spin flow.

[actions]
- No code changes
