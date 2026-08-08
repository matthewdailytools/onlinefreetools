Date: 2026-08-08 19:15
Summary: Require build:site in tool-creation and related rules after homepage miss.

[question]
将build:site步骤放入规则中

[try to solve]
已将 `npm run build:site` 定为新工具交付硬性步骤，写入：

1. `.cursor/rules/tool-creation.mdc` — 流程第 3 步、工程清单、首页节、上线前 Checklist（强调仅 `merge:tools` 不刷新 `/` `/zh/` 静态首页）
2. `.cursor/rules/project-core.mdc` — 新工具实现收尾须 build:site
3. `.cursor/rules/cloudflare-workflow.mdc` — 本地命令表补充 build:site 与 `--no-build` 注意
4. `.github/copilot-instructions.md` — 与 rules 摘要同步

[actions]
- .cursor/rules/tool-creation.mdc
- .cursor/rules/project-core.mdc
- .cursor/rules/cloudflare-workflow.mdc
- .github/copilot-instructions.md
