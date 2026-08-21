Date: 2026-08-21 09:27
Summary: Removed remaining untracked local files so the working tree matches origin/main.

[question]
本地未提交清掉

[try to solve]
已用 `git clean -fd` 删除全部未跟踪文件与目录。工作区现为 clean，`main` 与 `origin/main` 一致。

删除内容包括：`.tmp/`、若干未入库的 `dev-logs/2026-08/*.md`、`docs/seo/2026-08-20-focus-five-clicks.md`。此前已跟踪但未提交的修改已在上一轮 `reset --hard` 中丢弃。

[actions]
- `git clean -fd`
