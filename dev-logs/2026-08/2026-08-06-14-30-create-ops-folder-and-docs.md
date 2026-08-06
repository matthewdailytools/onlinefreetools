Date: 2026-08-06 14:30
Summary: Created ops/ folder, moved dev start/stop scripts, and added ops README.

[question]
创建运维文件夹，将脚本放入，以及写运维文档

[try to solve]
新建 `ops/` 运维目录并迁移启停脚本：

```
ops/
├── README.md           # 运维手册（环境、启停、构建、部署、排障）
├── lib/dev-process.mjs
└── dev/                # start/stop（mjs + ps1 + sh）
```

- `package.json` npm 脚本指向 `ops/dev/`
- 删除原 `scripts/` 下启停脚本
- 更新 `README.md`、`.cursor/rules/cloudflare-workflow.mdc`、`project-core.mdc`

[actions]
- ops/README.md, ops/lib/, ops/dev/*
- package.json, README.md
- .cursor/rules/cloudflare-workflow.mdc, project-core.mdc
- 删除 scripts/start-dev.*, scripts/stop-dev.*, scripts/lib/dev-process.mjs
