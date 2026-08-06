Date: 2026-08-06 13:03
Summary: Archived dev-log markdown into YYYY-MM folders and updated build to list by month.

[question]
将dev-log内容进行分月归档

[try to solve]
已将 `dev-logs/` 下全部 Markdown 迁入分月目录：

- `dev-logs/2026-01/`（57 篇）
- `dev-logs/2026-06/`（1 篇）
- `dev-logs/2026-07/`（2 篇）
- `dev-logs/2026-08/`（5 篇）

`index.html`、`viewer.html` 仍留在 `dev-logs/` 根目录。公开 URL（`/devlogs/<文件名>.html`）不变。

**构建**：`scripts/build-site.mjs` 递归读取各月目录；索引页按 `YYYY-MM` 分组展示。

**规则**：`.cursor/rules/dev-logs.mdc`、`.github/copilot-instructions.md` 路径改为 `dev-logs/YYYY-MM/`。

已运行 `npm run build:logs` 刷新 `public/devlogs/`。

[actions]
- dev-logs/2026-{01,06,07,08}/*.md（自根目录与日目录迁入）
- scripts/build-site.mjs
- scripts/site/i18n.mjs
- .cursor/rules/dev-logs.mdc
- .github/copilot-instructions.md
- public/devlogs/
