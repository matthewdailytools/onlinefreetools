Date: 2026-08-08 22:34
Summary: Fixed tool-direction.md preview breakage by moving overlong formula-link cells out of markdown tables.

[question]
看上去已经损坏@docs/2026-07-28-tool-direction.md

[try to solve]
The file itself had no mojibake, truncation, or conflict markers. The preview broke because C.5/C.6 tables packed Omni/ToolDone link rows roughly 500–900 characters long, which markdown previewers often render poorly. Formula cross-references were changed to short in-table notes plus out-of-table link lists, and long inline links in the C.8 engineering/education rows were shortened.

[actions]
- docs/2026-07-28-tool-direction.md
