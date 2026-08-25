Date: 2026-08-06 18:21
Summary: Tightened i18n compliance rules (stable workflow, anti-batch isomorphic) and rewrote all ten markdown locales; cleared pending-native-review.

[question]
要收紧合规，下一步可对 所有语言（及任意一句式雷同的语）做一轮母语向重写，并在 03 标「待母语抽查」清掉。把收紧合规策略和稳妥常态写成rules

[try to solve]
Wrote the rules and applied a ten-locale rewrite for this tool:

**Rules (steady workflow + tighter compliance)** — primary file `.cursor/rules/tool-i18n-localization.mdc`:
- Steady path: brief → one master locale → rewrite each locale (or batches of ≤3) independently → ≥3 rounds; scripts may only persist already-reviewed copy
- Ban: isomorphic fill of remaining locales after en/zh; marking `i18n-done` while “pending native review” remains
- Synced: `work-tasks-tool-brief.mdc`, `tool-i18n-seo.mdc`, `tool-creation.mdc`, `work-tasks/_template/03`, `work-tasks/README.md`, `.github/copilot-instructions.md`

**This tool**: SEO blocks (title/description/How/Rules/FAQ/Use cases) independently rewritten per brief to break isomorphic sentence patterns; ar/ja/ru “pending native review” cleared in `03`; `lint:seo` OK; status remains `i18n-done`.

[actions]
- Updated: `.cursor/rules/tool-i18n-localization.mdc`
- Updated: `.cursor/rules/work-tasks-tool-brief.mdc`, `tool-i18n-seo.mdc`, `tool-creation.mdc`
- Updated: `.github/copilot-instructions.md`
- Updated: `work-tasks/_template/03-locale-briefs.md`, `work-tasks/README.md`
- Updated: `work-tasks/markdown-to-html/03-locale-briefs.md`
- Updated: `src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts` (markdown SEO keys)
- Ran: `npm run lint:seo`
