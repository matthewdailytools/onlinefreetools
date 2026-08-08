Date: 2026-08-08 21:36
Summary: Turnstile setup blocked: CLOUDFLARE_API_TOKEN missing; asked user for Custom token with Turnstile+Workers scopes.

[question]
继续

[try to solve]
Wrangler 4.58.0 可用。`auth-probe.sh` 返回 `missing_token`（未设置 `CLOUDFLARE_API_TOKEN`）。需用户在 Cloudflare 创建含 `Account.Turnstile:Edit` 与 `Account.Workers Scripts:Edit` 的 Custom token，再通过 export/文件/粘贴之一提供后继续。

[actions]
- `npx wrangler --version` → 4.58.0
- `auth-probe.sh` → missing_token
