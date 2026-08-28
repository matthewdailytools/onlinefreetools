Date: 2026-08-28 13:23
Summary: Shipped the measuring-magnetic-fields calculator with a convert-first UI, optional magnet estimate, ten-locale copy, and coverage gates.

[question]
开始实现“measuring magnetic fields” 工具

[try to solve]
Implemented `/tools/measuring-magnetic-fields` as a physics calculator. The first screen converts a meter reading (T / mT / µT / nT / G / mG / kG) and shows all B equivalents plus a comparison to Earth’s ~50 µT; Load sample / on-load fill 200 G → 0.02 T (20 mT, 2×10⁴ µT, about 400× Earth). A collapsed second panel estimates axial B from N35–N52 remnant midpoints and disc or block size using the uniform-axial disc formula (blocks use an equivalent radius). A visible magnet-strength chart covers Earth, fridge magnets, NdFeB faces, and MRI as order-of-magnitude only. How steps start with instrument choice and probe placement, not form-filling. Related tools are Ohm’s law and density; magnetic force / Lorentz stay in FAQ only.

English H1 is “Measuring Magnetic Fields — Field strength calculator”; Chinese is “测量磁场 — 磁场强度计算器”. Coverage gates passed for phases 0b, 2, 4, and all. `npm run build:site` and `lint:seo` passed. Isolation reported leftover briefing/rule files from the earlier brief work, not other-tool shards. Browser tools were not available; prerendered HTML was checked for H1, sample copy, sitemap, and home cards.

[actions]
- Added catalog shard, page, icon, and ten i18n locales for measuring-magnetic-fields
- Updated README tool lists and work-tasks 02/03 statuses
- Ran coverage:gate phase=all, build:site, and lint:seo
