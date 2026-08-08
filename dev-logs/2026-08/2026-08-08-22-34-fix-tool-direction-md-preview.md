Date: 2026-08-08 22:34
Summary: Fix tool-direction.md preview breakage by moving overlong formula-link cells out of markdown tables.

[question]
看上去已经损坏@docs/2026-07-28-tool-direction.md

[try to solve]
文件本身无乱码、截断或冲突标记；问题出在 C.5/C.6 表格内塞入超长 Omni/ToolDone 链接行（约 500–900 字符），Markdown 预览易显示异常。已将公式对照改为表内短注 + 表外链接列表，并缩短 C.8 工程/教育行内的链接触达。

[actions]
- docs/2026-07-28-tool-direction.md
