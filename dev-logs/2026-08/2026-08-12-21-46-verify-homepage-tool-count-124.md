Date: 2026-08-12 21:46
Summary: Verified homepage tool count 124 matches catalog and related sources.

[question]
检查工具数量,首页显示124个工具是否正确

[try to solve]
Verdict: correct. Homepage “124 tools” matches the catalog.

Checks:

| Source | Count |
|------|------|
| `src/site/tool-catalog.json` | 124 (unique slugs) |
| `src/site/tool-catalog.d/` | 124 |
| `src/pages/*Page.ts` | 124 |
| `src/site/i18n/tools/` | 124 |
| English homepage tool links | 124 |

Hero number comes from `TOOL_CATALOG.length` (`scripts/site/components/content-home.mjs`), not a hard-coded constant.

By category: calculators 62, developer 28, image 19, PDF 11, design 4 — total 124.

[actions]
- Read/verified `src/site/tool-catalog.json`, `tool-catalog.d`, `src/pages`, `i18n/tools`, homepage HTML, and `content-home.mjs`
