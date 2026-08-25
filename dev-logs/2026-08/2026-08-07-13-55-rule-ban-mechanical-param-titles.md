Date: 2026-08-07 13:55
Summary: Codified a ban on mechanical parameter-list titles in localization rules.

[question]
加入到规则中，避免后续出现类似的情况

[try to solve]
Recorded the rule in the localization authority files so titles like “max edge, quality, and target size” (parameter-list style) do not recur:

- `.cursor/rules/tool-i18n-localization.mdc`: added Title / H1 natural spoken tone, avoid manual-style copy; ban list now includes “parameter-enumeration titles”; tightened compliance item 6; synced round / finalize self-checks
- `work-tasks/_template/03-locale-briefs.md`: shared ban-word checklist + Title direction notes
- `.github/copilot-instructions.md`: summary sync (rules → copilot, one-way)

[actions]
- Updated `tool-i18n-localization.mdc`, `_template/03-locale-briefs.md`, `copilot-instructions.md`, `image-compress/03` checklist
