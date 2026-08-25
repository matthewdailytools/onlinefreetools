Date: 2026-08-15 10:48
Summary: Explained how to bump PAGES_CACHE_VERSION for site-wide HTML cache invalidation.

[question]
PAGES_CACHE_VERSION 怎么修改

[try to solve]
The source of `PAGES_CACHE_VERSION` is `wrangler.jsonc` under `vars.PAGES_CACHE_VERSION` (currently `"4"`). To invalidate HTML cache site-wide, bump it to a new string version such as `"5"`.

For production to take effect, rebuild and upload R2 HTML so R2 `_meta/pages-build.json` stores the same version, then git-push so Worker vars ship, wait for the Cloudflare deploy, and run live verification. Typical order:

```bash
npm run build:site
npm run upload:r2
npm run verify:r2
git push
# after Cloudflare Dashboard deploy succeeds
npm run verify:r2:live
```

Or use the project wrapper:

```bash
npm run deploy
git push
# after Cloudflare Dashboard deploy succeeds
npm run verify:r2:live
```

Caveat: changing only `wrangler.jsonc` without `upload:r2` can leave Worker on the new version while R2 meta/HTML stay old; uploading R2 without push leaves the live Worker on the old `PAGES_CACHE_VERSION`.

[actions]
- Read `.cursor/rules/project-core.mdc`, `.cursor/rules/dev-logs.mdc`, and `.cursor/rules/cloudflare-workflow.mdc`.
- Checked `wrangler.jsonc` and `ops/worker-r2-ops.md` for the active cache version workflow.
