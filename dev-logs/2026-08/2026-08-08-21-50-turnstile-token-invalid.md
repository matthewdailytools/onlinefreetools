Date: 2026-08-08 21:50
Summary: ~/.cf-turnstile-token present but Cloudflare API returns Invalid API Token (401); asked user to recreate token.

[question]
2已经完成

[try to solve]
Read token from `~/.cf-turnstile-token` (not echoed). `https://api.cloudflare.com/client/v4/user/tokens/verify` returned 401 Invalid API Token. Local `wrangler whoami --json` is also unsupported on wrangler 4.58. User must recreate a Custom token with Turnstile:Edit + Workers Scripts:Edit, overwrite that file, then continue.

[actions]
- Read `~/.cf-turnstile-token`; verify API → 401
