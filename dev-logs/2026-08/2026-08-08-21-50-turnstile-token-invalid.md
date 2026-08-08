Date: 2026-08-08 21:50
Summary: ~/.cf-turnstile-token present but Cloudflare API returns Invalid API Token (401); asked user to recreate token.

[question]
2已经完成

[try to solve]
已从 `~/.cf-turnstile-token` 读取 token（未回显）。`https://api.cloudflare.com/client/v4/user/tokens/verify` 返回 401 Invalid API Token。`wrangler whoami --json` 在本机 wrangler 4.58 也不支持。需用户重建含 Turnstile:Edit + Workers Scripts:Edit 的 Custom token 并覆盖写入该文件后再继续。

[actions]
- 读取 `~/.cf-turnstile-token`；verify API → 401
