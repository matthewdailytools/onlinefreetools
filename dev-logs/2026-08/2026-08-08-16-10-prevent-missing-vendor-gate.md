Date: 2026-08-08 16:10
Summary: Added lint:vendor gate plus rules/ops docs so Git-connected Cloudflare deploys cannot omit /vendor.

[question]
避免后续发生相同问题

[try to solve]
Added `scripts/validate-vendor-tracked.mjs` (`npm run lint:vendor`): checks that chrome + image-related vendor files exist on disk, are git-tracked, and that `.gitignore` no longer ignores the `public/vendor` subtree; wired into `predeploy`. Updated `project-core.mdc`, `cloudflare-workflow.mdc`, `ops/README.md`, and `public/vendor/README.md`. Not committed (awaiting user direction).

[actions]
- scripts/validate-vendor-tracked.mjs
- package.json (lint:vendor, predeploy)
- .cursor/rules/project-core.mdc, cloudflare-workflow.mdc
- ops/README.md, public/vendor/README.md
