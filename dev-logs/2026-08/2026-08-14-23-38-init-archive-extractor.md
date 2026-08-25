Date: 2026-08-14 23:38
Summary: Created the archive-extractor work-task brief and passed the 0b coverage gate.

[question]
立项：archive-extractor

[try to solve]
Completed the `archive-extractor` brief: added the four work-task files, status to `ready` / `briefs-ready`, and passed `npm run coverage:gate -- --slug=archive-extractor --phase=0b`. The tool is a multi-format archive extractor with a clear split from live `unzip-file`: ZIP-only high-frequency intent stays on `unzip-file`; `archive-extractor` covers ZIP/TAR/TAR.GZ as core paths, plus click-to-load read-only candidates for RAR/7Z/ISO.

[actions]
- Added `work-tasks/archive-extractor/00-request.md`
- Added `work-tasks/archive-extractor/01-direction-discussion.md`
- Added `work-tasks/archive-extractor/02-tool-info.md`
- Added `work-tasks/archive-extractor/03-locale-briefs.md`
- Ran `npm run coverage:gate -- --slug=archive-extractor --phase=0b`
