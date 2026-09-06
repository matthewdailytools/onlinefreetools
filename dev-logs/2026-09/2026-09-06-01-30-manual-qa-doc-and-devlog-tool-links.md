Date: 2026-09-06 01:30
Summary: Saved a pending Chinese-tool manual QA checklist and required English tool links in new tool-related dev logs.
Visibility: people

[question]
保存为待手动测试的文档。另外将日志生成规则中增加生成对应的工具链接（英文）

[try to solve]
## Context
Need a durable checklist of recently changed Chinese tool pages for manual QA, and make future dev-logs list English production tool URLs when tools change.

## Process
1. Regenerated the since-2026-09-04 tool set from git (pages / i18n shards / catalog), 84 slugs, newest-commit-first.
2. Wrote `docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md` with checkboxes, zh + en URLs, commit refs, and a short per-page checklist.
3. Updated `.cursor/rules/dev-logs.mdc` §2 and the new-log template: tool-touching logs must include **Tool links (English)** as `https://onlinefreetools.org/tools/{slug}` (no `/en` prefix).

## Root cause / analysis
Manual QA lists were only in chat; rule logs often omitted clickable verification URLs. English default locale has no `/en` path, so the canonical link form must be `/tools/{slug}`.

## Solution
- Checklist path: `docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md`
- Rule: always-applied `dev-logs.mdc` now requires English tool links when tool pages/i18n/catalog change.

## Notes / boundaries
- Checklist is for operators; not indexed as a product page.
- Pure ops/rule-only logs still omit the Tool links section when no tool slug changed.

[actions]
- Added `docs/manual-qa/2026-09-06-pending-zh-tool-manual-tests.md`
- Updated `.cursor/rules/dev-logs.mdc`
