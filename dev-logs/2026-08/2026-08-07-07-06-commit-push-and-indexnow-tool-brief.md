Date: 2026-08-07 07:06
Summary: Pushed IndexNow ops migration; opened work-tasks brief for /tools/indexnow page.

[question]
commit and push；然后立项工具页面：bing seo indexnow

[try to solve]
1) 已提交并推送 `a287dcb`：`ops(seo): move IndexNow submit script under ops/seo with bash wrapper`（含 bash 包装与 dig-logs）。
2) 立项完成：`work-tasks/indexnow/`（`00`–`03`）。主方向 A.12；slug `indexnow`（`/tools/indexnow`）；合并 key check / Bing submit / 状态码说明，不拆薄页；`02` 状态 `ready`，`03` `briefs-ready`。Related：`website-headers`、`add-www-to-dns`。实现需 Worker 代理 Check/Submit（CORS）；强调 202≠key 已通过、通知≠收录。

[actions]
- commit/push: `a287dcb`
- added: `work-tasks/indexnow/00-request.md`, `01-direction-discussion.md`, `02-tool-info.md`, `03-locale-briefs.md`
