Date: 2026-08-08 19:15
Summary: Require build:site in tool-creation and related rules after homepage miss.

[question]
将build:site步骤放入规则中

[try to solve]
Made `npm run build:site` a hard ship step for new tools in:

1. `.cursor/rules/tool-creation.mdc` — flow step 3, engineering checklist, home section, pre-ship checklist (notes that `merge:tools` alone does not refresh `/` `/zh/` static homes)
2. `.cursor/rules/project-core.mdc` — new-tool wrap-up must run build:site
3. `.cursor/rules/cloudflare-workflow.mdc` — local command table adds build:site and `--no-build` caveat
4. `.github/copilot-instructions.md` — synced summary from rules

[actions]
- .cursor/rules/tool-creation.mdc
- .cursor/rules/project-core.mdc
- .cursor/rules/cloudflare-workflow.mdc
- .github/copilot-instructions.md
