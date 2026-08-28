Date: 2026-08-28 13:15
Summary: Added a project Skill that cuts single-tool Agent token use via session splits and read allowlists without skipping coverage gates or i18n quality.

[question]
单独一个skill做token优化约束，但绝对不要降低生成工具的质量

[try to solve]
Created `.cursor/skills/tool-token-efficiency/SKILL.md` as a companion to `tool-coverage-pass`. It optimizes **how** agents work (A/B/C/D session boundaries at brief / master i18n / locales / ship; read only `work-tasks/{slug}/` and slug shards; forbid merged `src/site/i18n/{lang}.ts` and full `tool-catalog.json`; reference pages via ≤150-line slices; filter lint output to the active slug; prefer `npm run verify:tool -- --slug=`).

**Quality is non-negotiable** and listed explicitly: 0b, 0i, phase 2/4, ten-locale search-oriented rewrites, ≥3 rounds, IG/FAQ/how_items/loadSample, and full ship gates. Conflict order: SEO/localization rules and coverage pass beat this Skill.

Registered in `AGENTS.md`, one-line pointers in `tool-creation.mdc` and `tool-coverage-pass/SKILL.md`, and `.github/copilot-instructions.md`.

Full analysis (causes, factor weights, tool-count conclusion): `dev-logs/2026-08/2026-08-28-13-36-single-tool-agent-token-analysis.md`.

[actions]
- Added `.cursor/skills/tool-token-efficiency/SKILL.md`
- Updated `AGENTS.md`, `.cursor/rules/tool-creation.mdc`, `.cursor/skills/tool-coverage-pass/SKILL.md`, `.github/copilot-instructions.md`
