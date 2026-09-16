Date: 2026-09-16 08:10
Summary: Audit unfinished M4A-to-MP3 work and harden local delivery evidence.
Visibility: project

[question]
Why did the earlier GPT-5 attempt not finish the M4A-to-MP3 tool, and how can the workflow be improved?

[try to solve]
The current tool has draft briefs but no implementation artifacts. The recorded
attempt ended after a tool-wrapper syntax error. Repository workflow guidance
also prescribed splitting conversations at intermediate stages, while the user
had authorized full local implementation. This is not sufficient evidence of a
model-backend failure.

Updated AGENTS and the canonical token-efficiency skill to require persistent
stage checkpoints, recovery from local errors and evidence-based handoff. Added
an artifact inventory before expensive verification and a stage runner with
unique logs, heartbeat and explicit exit/signal/error records. Existing full
build and downstream gates remain mandatory for tool delivery.

Tests reproduced missing piped child output in this environment. Direct file
descriptor logging preserved both output streams and passed all seven workflow
tests. P1 inventory passes; P3 intentionally fails early with missing artifacts
and draft status, without starting a build. This does not establish what caused
an earlier unobserved build to stop.

The detailed evidence, deployment-manifest correction, recovery instructions and
acceptance boundaries are in `docs/tool-workflow-reliability.md`. Existing dirty
tool/generated files were preserved. P2's semantic copy defects and P3's missing
implementation are not repaired by this workflow-only change. No full site build
or deployment was performed.
