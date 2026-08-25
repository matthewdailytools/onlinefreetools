Date: 2026-08-08 23:55
Summary: Briefed how-to-calculate-compound-interest to ready with coverage gate 0b green.

[question]
立项工具：how-to-calculate-compound-interest

[try to solve]
Briefing complete (no page code yet):

- `work-tasks/how-to-calculate-compound-interest/00-request.md` — original request and constraints
- `01-direction-discussion.md` — primary direction C (C-V4 finance YMYL); merge simple-interest / frequency long-tail on one page
- `02-tool-info.md` — status **ready**; IG≥3; interaction spec (compound formula + simple mode + loadSample P=10000, r=5%, t=10, n=1); pre-checklist coverage table filled
- `03-locale-briefs.md` — ten-locale briefs; status `briefs-ready`; multi-round row **0b** written

Gate: `npm run coverage:gate -- --slug=how-to-calculate-compound-interest --phase=0b` → OK.

Inventory §9 row 99 marked in progress. Next: implement Page/i18n only when the user explicitly asks (`tool-creation`: master → phase=2 → ten locales → phase=4).

[actions]
- Added `work-tasks/how-to-calculate-compound-interest/{00,01,02,03}.md`
- Updated `docs/2026-08-08-tool-inventory-table.md` §9/#99, §12
- Updated `omnicalculator-intent-merge-howto.tsv` progress
- `npm run coverage:gate -- --slug=how-to-calculate-compound-interest --phase=0b`
