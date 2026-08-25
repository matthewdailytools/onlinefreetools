Date: 2026-08-13 00:42
Summary: Default deploy uses GitHub push instead of wrangler deploy; live verify after CF.

[question]
注释掉，替换成github

[try to solve]
`scripts/deploy-site.mjs` now comments out the default `wrangler deploy` and prints git push → Cloudflare pull-repo steps instead; `verify:r2:live` is skipped by default (use `--live` or a separate command). Emergency path remains `--wrangler-deploy` / `deploy:worker-only`. Synced ops/worker-r2-ops, ops/README, design, cloudflare-workflow, and SEO checklist.

[actions]
- Updated `scripts/deploy-site.mjs`
- Updated `ops/worker-r2-ops.md`, `ops/README.md`, `docs/worker+R2架构/design.md`, `.cursor/rules/cloudflare-workflow.mdc`, `docs/SEO_PUBLISH_CHECKLIST.md`
