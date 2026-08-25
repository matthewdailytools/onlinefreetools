Date: 2026-08-12 00:04
Summary: Committed Ops UI integration into start/stop-dev scripts.

[question]
commit

[try to solve]
已提交 `e243967`：`ops: start/stop-dev also manage local Ops UI`（12 files）。仅含 ops 启停与本条相关 dev-log；未纳入 keyword funnel / sitemap 等无关改动。`main` 领先 `origin/main` 3 个提交。未 push。

[actions]
- `git add` ops/* + integrate-ops-ui dev-log
- `git commit` → `e243967`
