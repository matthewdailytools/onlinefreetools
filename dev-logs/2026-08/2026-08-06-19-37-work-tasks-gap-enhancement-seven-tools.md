Date: 2026-08-06 19:37
Summary: Created work-tasks gap-enhancement docs for seven existing tools (not BMI/text-diff/markdown-to-html).

[question]
You are working in /Users/xuli/vscodeai/onlinefreetools. Create work-tasks folders and markdown docs for these EXISTING tools that need gap-enhancement (存量增强, NOT new products). Follow work-tasks/_template/ and rules in .cursor/rules/work-tasks-tool-brief.mdc, tool-i18n-localization.mdc, docs/2026-07-28-per-tool-dev-seo-plans.md section C, and docs/2026-07-28-google-seo-strategy-implementation.md §3.1/§3.8.

Tools to create (each folder needs 00-request.md, 01-direction-discussion.md, 02-tool-info.md status `ready`, 03-locale-briefs.md status `briefs-ready` with ALL 10 locales filled: en zh es ar pt id fr ja ru de):

1. website-headers — gaps: How steps; HTTP RFC references (clickable); FAQ privacy/local; related stays
2. ip-address — edge how IP obtained; proxy/VPN limits; less keyword stuffing
3. how-to-calculate-roi — assumptions table; not investment advice; Investopedia-class refs; YMYL
4. how-to-calculate-marginal-revenue — visible formula derivation; YMYL disclaimer; YMYL
5. square-feet — real-estate/renovation use cases (not generic unit converter feel)
6. how-to-calculate-percentage-change — full numeric example + business/data scenarios
7. how-to-calculate-gradient — clear formula; link to related calculators

DO NOT create how-to-calculate-bmi (parent agent handles BMI).
DO NOT create text-diff or markdown-to-html (already implemented).
DO NOT modify src/ code — only create/edit files under work-tasks/{slug}/.

For 00-request.md use: "根据规则和策略，review和重建其他工具（存量缺口增强）"
For each 02: mark IG dimensions planned, related from tool-catalog.json, page module checklist unchecked (implementation pending).
For each 03: fill real search-intent briefs per language (not copy English keywords into every locale). Leave round checkboxes unchecked except note "briefs-ready". Mark ar/ja/ru with 待母语抽查 checked for later.

Reference style: work-tasks/text-diff/02-tool-info.md and 03-locale-briefs.md.

Return a short summary of folders created and any open questions.

[try to solve]
已为 7 个存量工具各建 `work-tasks/{slug}/`（00–03），未改 `src/`，未建 BMI / text-diff / markdown-to-html。

| slug | 02 | 03 | related（catalog） |
|---|---|---|---|
| website-headers | ready | briefs-ready | ip-address, markdown-to-html, text-diff（保持） |
| ip-address | ready | briefs-ready | website-headers, markdown-to-html |
| how-to-calculate-roi | ready · YMYL | briefs-ready | MR, percentage-change |
| how-to-calculate-marginal-revenue | ready · YMYL | briefs-ready | ROI, percentage-change |
| square-feet | ready | briefs-ready | percentage-change, BMI |
| how-to-calculate-percentage-change | ready | briefs-ready | ROI, MR |
| how-to-calculate-gradient | ready | briefs-ready | percentage-change, ROI |

各 02：§3.1 IG 计划表已填；页面模块清单未勾。各 03：十语检索 brief；轮次未勾；ar/ja/ru 待母语抽查已勾。

开放问题：gradient 与站长/设计工具互链待 meta-serp 等上线；pt 斜率用词 BR/PT；square-feet 是否支持「坪」；ROI/MR 公式口径与现页对齐。

[actions]
- Created work-tasks/{website-headers,ip-address,how-to-calculate-roi,how-to-calculate-marginal-revenue,square-feet,how-to-calculate-percentage-change,how-to-calculate-gradient}/{00,01,02,03}.md
