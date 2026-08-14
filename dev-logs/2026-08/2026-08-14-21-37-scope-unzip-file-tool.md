Date: 2026-08-14 21:37
Summary: Scoped the unzip file tool brief and passed the 0b coverage gate.

[question]
立项工具：解压压缩文件

[try to solve]
已完成 `unzip-file` 立项，只新增 `work-tasks/unzip-file/` 下的 brief 文件，没有进入页面实现。立项将“解压压缩文件”收敛为 ZIP-first 的浏览器本地工具：H1 方向为 `Unzip File Online — Extract ZIP Files in Your Browser`，首版覆盖 ZIP 文件树、文本/图片预览、单文件下载、全部导出、路径安全和大文件/密码 ZIP 边界；RAR/7Z/ISO 放入 FAQ 与后续 `extract-archive` 规划，避免首版承诺过宽。`npm run coverage:gate -- --slug=unzip-file --phase=0b` 已通过。

[actions]
- Added `work-tasks/unzip-file/00-request.md`
- Added `work-tasks/unzip-file/01-direction-discussion.md`
- Added `work-tasks/unzip-file/02-tool-info.md`
- Added `work-tasks/unzip-file/03-locale-briefs.md`
- Ran `npm run coverage:gate -- --slug=unzip-file --phase=0b`
