Date: 2026-08-09 17:37
Summary: Encoded two hard rules: coverage keywords land in H1/description/FAQ/Use cases, and keywords are re-run per locale search habits.

[question]
在规则确保两点：1、相关关键词落入到H1，description，FAQ，USE case等文案中。2、相关关键词必须根据各个语言习惯和用户搜索习惯重新跑

[try to solve]
Hardened both requirements in rules and companion files:

1. Land in visible copy: primary term → H1 (`tool_*_title`); secondary terms → natural sentences in description / FAQ / Use cases. Ban on-page “related keywords” lists or tag clouds; ban leaving terms only in the brief without writing them back to the page. Coverage tables must show per-term landing spots.

2. Re-run per locale: each language records 3–5 local search terms in `03-locale-briefs` (not English calques); steps 0b→3→4 update primary/secondary terms and landing spots against local search habits; ban sharing one English keyword skeleton across all ten locales.

Landed in: `tool-i18n-localization.mdc` (section “相关关键词落地” / landing related keywords, plus self-check/red lines), `tool-i18n-seo.mdc`, `work-tasks-tool-brief.mdc`, `tool-creation.mdc` (ship Checklist), `.cursor/skills/tool-coverage-pass/SKILL.md`, `.github/copilot-instructions.md`.

[actions]
- `.cursor/rules/tool-i18n-localization.mdc`
- `.cursor/rules/tool-i18n-seo.mdc`
- `.cursor/rules/work-tasks-tool-brief.mdc`
- `.cursor/rules/tool-creation.mdc`
- `.cursor/skills/tool-coverage-pass/SKILL.md`
- `.github/copilot-instructions.md`
