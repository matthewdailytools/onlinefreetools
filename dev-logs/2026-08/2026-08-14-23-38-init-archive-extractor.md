Date: 2026-08-14 23:38
Summary: Created the archive-extractor work-task brief and passed the 0b coverage gate.

[question]
立项：archive-extractor

[try to solve]
已完成 `archive-extractor` 立项：新增 work-task 四件套，状态到 `ready` / `briefs-ready`，并通过 `npm run coverage:gate -- --slug=archive-extractor --phase=0b`。该工具定位为多格式归档解压，和已上线 `unzip-file` 明确分工：ZIP-only 高频意图继续由 `unzip-file` 承接，`archive-extractor` 覆盖 ZIP/TAR/TAR.GZ 核心路径，以及点击加载后的 RAR/7Z/ISO 只读候选。

[actions]
- Added `work-tasks/archive-extractor/00-request.md`
- Added `work-tasks/archive-extractor/01-direction-discussion.md`
- Added `work-tasks/archive-extractor/02-tool-info.md`
- Added `work-tasks/archive-extractor/03-locale-briefs.md`
- Ran `npm run coverage:gate -- --slug=archive-extractor --phase=0b`
