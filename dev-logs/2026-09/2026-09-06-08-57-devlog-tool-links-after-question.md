Date: 2026-09-06 08:57
Summary: Tool links (English) in tool-touching logs must sit right after [question], before [try to solve].
Visibility: people

[question]
@.cursor/rules/dev-logs.mdc dtool links​ 位置放在 question 后面

[try to solve]
## Context
The `dev-logs.mdc` rule previously told agents to put **Tool links (English)** under Solution or Notes (and for Project logs, optionally at the end). The user wants that block immediately after `[question]` so acceptance URLs are easy to find.

## Process
1. Read `.cursor/rules/dev-logs.mdc`.
2. Updated §2 placement wording and example snippet.
3. Moved the subsection in §5 new-log template from after Solution to after `[question]`.
4. Aligned Project-log guidance to the same placement.

## Root cause / analysis
Template and §2 disagreed with the desired UX: links buried in Solution/Notes make manual QA harder. Putting them after the question surfaces production URLs before the narrative.

## Solution
Canonical placement is now:

```markdown
[question]
...

## Tool links (English)
- https://onlinefreetools.org/tools/<slug>

[try to solve]
```

Omit the subsection when the log does not touch tool pages. No tool page code changed in this turn.

## Notes / boundaries
- Path: `.cursor/rules/dev-logs.mdc` §2 and §5 only.
- Historical logs are not rewritten; new logs follow the new placement.

[actions]
- Updated `.cursor/rules/dev-logs.mdc` Tool links placement to after `[question]`
