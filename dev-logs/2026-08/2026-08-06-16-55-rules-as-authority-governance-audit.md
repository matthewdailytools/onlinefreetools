Date: 2026-08-06 16:55
Summary: Proposed `.cursor/rules` as governance authority; listed conflicts for manual confirm before any edits.

[question]
以.cursor/rules为核心，所有策略需要对齐rules，如果有冲突，需要重新分析给出判断，手动确认后再修改，所有策略需要同步写入rules

[try to solve]
Proposed governance model: Agent and conflict decisions treat `.cursor/rules` as the executable source of truth; docs expand and must align with rules; runtime/code conflicts still prefer running code.

Listed priority conflicts for confirmation before edits: `project-core` ranking docs above rules; strategy §3.1 dimension 7 outdated; description length 80 vs ≥120; strategy items not yet in rules (linking cadence, tool direction, etc.) with suggested resolutions. **No rule or strategy body files were changed pending user confirmation.**

[actions]
- No code changes (awaiting confirmation)
