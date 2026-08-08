Date: 2026-08-08 22:15
Summary: Wired Turnstile on domain-lookup (widget + server siteverify) after user confirmed frontend edits.

[question]
yes

[try to solve]
已把 Turnstile 接到 `domain-lookup`：表单内嵌 widget（sitekey `0x4AAAAAAEKPkweeKKHYjYJX`），提交前要求 token；真正 siteverify 在同源 `/api/tools/domain-lookup`（token 只能校验一次，故不先打 Spin Worker 再打业务 API）。`TURNSTILE_SECRET_KEY` 已写入 `onlinefreetools` Worker Secret 与本地 `.dev.vars`。十语增加 captcha 文案并 `merge:tools`。Spin `validate.sh` 因本机访问 `*.workers.dev` 超时失败（health）；需你在可达网络下复验或部署后浏览器实测。是否把 Spin skill 持久化到 `.claude/skills/turnstile-spin/`？

[actions]
- `src/pages/domainLookupPage.ts` — Turnstile script/widget + 门闩；进页样例等 callback
- `src/endpoints/turnstileSiteverify.ts` — 新增 Cloudflare siteverify 封装
- `src/endpoints/domainLookup.ts` — 查上游前强制 Turnstile
- `src/index.ts` — `Env.TURNSTILE_SECRET_KEY`
- `src/site/i18n/tools/domain-lookup/*` + merge 生成物 — captcha 三键
- `npx wrangler secret put TURNSTILE_SECRET_KEY --name onlinefreetools`
- 本地 `.dev.vars`（gitignore）写入同密钥
- `bash …/validate.sh` → health 失败（workers.dev 不可达）
