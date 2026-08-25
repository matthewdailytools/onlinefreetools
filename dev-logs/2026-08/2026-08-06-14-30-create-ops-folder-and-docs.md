Date: 2026-08-06 14:30
Summary: Created the `ops/` folder, moved dev start/stop scripts into it, and added an ops README.

[question]
创建运维文件夹，将脚本放入，以及写运维文档

[try to solve]
Created the `ops/` operations directory and moved start/stop scripts into it:

```
ops/
├── README.md           # runbook (env, start/stop, build, deploy, troubleshooting)
├── lib/dev-process.mjs
└── dev/                # start/stop (mjs + ps1 + sh)
```

- `package.json` npm scripts point at `ops/dev/`
- Removed the former start/stop scripts under `scripts/`
- Updated `README.md`, `.cursor/rules/cloudflare-workflow.mdc`, and `project-core.mdc`

[actions]
- `ops/README.md`, `ops/lib/`, `ops/dev/*`
- `package.json`, `README.md`
- `.cursor/rules/cloudflare-workflow.mdc`, `project-core.mdc`
- Deleted `scripts/start-dev.*`, `scripts/stop-dev.*`, `scripts/lib/dev-process.mjs`
