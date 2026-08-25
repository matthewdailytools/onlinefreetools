Date: 2026-08-08 14:22
Summary: Renamed archive tool slugs to match search word order (create-zip-file, unzip-file) instead of API-style zip-create.

[question]
slug：zip-create，没有考虑用户搜索习惯

[try to solve]
Changed recommended slugs to search-word order: `create-zip-file` (create zip file), `unzip-file` (unzip online); synced `extract-archive` / `gzip-file` / `convert-archive-to-zip`. Added “Slug naming principles” under A.5: verb/task word first; ban API-style names like zip-create. Inventory table and direction doc aligned; Chinese “compress online”-style phrases land in title/H1, not as separate slugs.

[actions]
- docs/2026-07-28-tool-direction.md
- docs/2026-08-08-tool-inventory-table.md
