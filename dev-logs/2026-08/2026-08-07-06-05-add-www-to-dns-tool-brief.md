Date: 2026-08-07 06:05
Summary: Created work-tasks brief for Add WWW to DNS tool (slug add-www-to-dns).

[question]
工具页面立项:add www to dns

[try to solve]
已在 `work-tasks/add-www-to-dns/` 完成立项，`02` 状态 `ready`，`03` 为 `briefs-ready`。

**结论摘要**
- **slug**：`add-www-to-dns`（`/tools/add-www-to-dns`）
- **主方向**：A（A.10 DoH + A.12 站长场景）
- **形态**：生成 A/CNAME 记录表 + 可选 DoH 查现网；讲清 apex 禁裸 CNAME、DNS ≠ 301
- **Related**：`website-headers`、`ip-address`
- **不拆** `www-cname` / `non-www-to-www` 近义薄页

下一步：用户确认后按 `tool-creation.mdc` 实现。

[actions]
- Added `work-tasks/add-www-to-dns/00-request.md`
- Added `work-tasks/add-www-to-dns/01-direction-discussion.md`
- Added `work-tasks/add-www-to-dns/02-tool-info.md`
- Added `work-tasks/add-www-to-dns/03-locale-briefs.md`
