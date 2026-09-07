Date: 2026-09-07 08:40
Summary: Encoded FreeConvert-style converter SERP structure (slug/H1/snippet meta/How=buttons/indexable settings; no format-matrix doorways) as the converter-serp-landing-seo skill.
Visibility: project

[question]
学习这个网站的seo优点，沉淀为skill

[try to solve]
## Context
Follow-up to the FreeConvert webpage-to-jpg structure review. The team needed a durable, executable checklist so convert/compress/screenshot copy follows those landing-page wins without copying scaled “X to JPG” hubs.

## Process
Read create-skill rules and existing repo skills (`tool-coverage-pass`, `keyword-to-tool-funnel`). Distilled only structural wins that survive Google people-first / scaled-content policy. Wired discovery: `AGENTS.md`, `tool-creation.mdc`, coverage-pass prompt 9.

## Root cause / analysis
Competitor strength is alignment (query = slug = H1 = How labels) plus snippet-sized meta and settings-as-IG. Weakness is conversion-matrix doorway lists and encyclopedia filler. Head-term exact H1 is not always allowed here (batch vs single; long-tail H1 policy) — the skill therefore uses a decision table (conversion pair vs task sentence vs absorb).

## Solution
Added `.cursor/skills/converter-serp-landing-seo/` (`SKILL.md` + `example-webpage-to-jpg.md`). Coverage-pass and tool-creation now point at it for `*-to-*` copy. Does not replace `coverage:gate` or absorb/build.

## Notes / boundaries
Calculators and prompt builders must not use the `{A} to {B}` title formula. Reverse related still needs `CROSS_TOOL_UPDATE=1`.

[actions]
- Added `.cursor/skills/converter-serp-landing-seo/SKILL.md` and example
- Linked from `AGENTS.md`, `.cursor/rules/tool-creation.mdc`, `.cursor/skills/tool-coverage-pass/SKILL.md`
