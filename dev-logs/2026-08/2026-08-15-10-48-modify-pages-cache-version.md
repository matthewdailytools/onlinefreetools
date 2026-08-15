Date: 2026-08-15 10:48
Summary: Explain how to update PAGES_CACHE_VERSION.

[question]
PAGES_CACHE_VERSION 怎么修改

[try to solve]
`PAGES_CACHE_VERSION` 的源头在 `wrangler.jsonc` 的 `vars.PAGES_CACHE_VERSION`，当前是 `"4"`。要全站 HTML 缓存失效时，把它递增为新的字符串版本，例如 `"5"`。

修改后要让生产生效，推荐流程是先重新构建并上传 R2 HTML，使 R2 `_meta/pages-build.json` 写入同一个版本，然后通过 git push 让 Worker vars 上线，最后等 Cloudflare 部署完成后跑 live 校验。常用顺序：

```bash
npm run build:site
npm run upload:r2
npm run verify:r2
git push
# 等 Cloudflare Dashboard 部署成功后
npm run verify:r2:live
```

也可以直接用项目封装：

```bash
npm run deploy
git push
# 等 Cloudflare Dashboard 部署成功后
npm run verify:r2:live
```

注意：只改 `wrangler.jsonc` 但不 `upload:r2`，容易出现 Worker 版本变了、R2 meta/HTML 还是旧的；只 `upload:r2` 但不 push，则线上 Worker 还用旧 `PAGES_CACHE_VERSION`。

[actions]
- Read `.cursor/rules/project-core.mdc`, `.cursor/rules/dev-logs.mdc`, and `.cursor/rules/cloudflare-workflow.mdc`.
- Checked `wrangler.jsonc` and `ops/worker-r2-ops.md` for the active cache version workflow.
