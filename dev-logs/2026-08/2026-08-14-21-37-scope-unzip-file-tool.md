Date: 2026-08-14 21:37
Summary: Scoped the unzip file tool brief and passed the 0b coverage gate.

[question]
立项工具：解压压缩文件

[try to solve]
Completed the `unzip-file` brief only under `work-tasks/unzip-file/` — no page implementation yet. Scoped “extract archive files” to a ZIP-first browser-local tool: H1 direction `Unzip File Online — Extract ZIP Files in Your Browser`; v1 covers ZIP file tree, text/image preview, single-file download, export all, path safety, and large/password ZIP boundaries. RAR/7Z/ISO stay in FAQ and a later `extract-archive` plan so v1 does not over-promise. `npm run coverage:gate -- --slug=unzip-file --phase=0b` passed.

[actions]
- Added `work-tasks/unzip-file/00-request.md`
- Added `work-tasks/unzip-file/01-direction-discussion.md`
- Added `work-tasks/unzip-file/02-tool-info.md`
- Added `work-tasks/unzip-file/03-locale-briefs.md`
- Ran `npm run coverage:gate -- --slug=unzip-file --phase=0b`
