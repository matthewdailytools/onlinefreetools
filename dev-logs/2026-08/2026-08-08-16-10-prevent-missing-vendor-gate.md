Date: 2026-08-08 16:10
Summary: Added lint:vendor gate plus rules/ops docs so Git-connected Cloudflare deploys cannot omit /vendor.

[question]
避免后续发生相同问题

[try to solve]
新增 `scripts/validate-vendor-tracked.mjs`（`npm run lint:vendor`）：校验 chrome+图片关键 vendor 落盘、git 跟踪、且 `.gitignore` 不再忽略 public/vendor 子树；已挂入 `predeploy`。更新 `project-core.mdc`、`cloudflare-workflow.mdc`、`ops/README.md`、`public/vendor/README.md`。未 commit（待用户指示）。

[actions]
- scripts/validate-vendor-tracked.mjs
- package.json（lint:vendor, predeploy）
- .cursor/rules/project-core.mdc, cloudflare-workflow.mdc
- ops/README.md, public/vendor/README.md
