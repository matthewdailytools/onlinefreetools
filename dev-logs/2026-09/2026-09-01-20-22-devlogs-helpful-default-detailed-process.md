Date: 2026-09-01 20:22
Summary: Dev-log policy now defaults to writing whenever content helps people, with a required detailed process-and-solution narrative.

[question]
规则改为，对人有帮助的，都写devlog，且详细写解决过程和解决方案。

[try to solve]
## Context
Previously `.cursor/rules/dev-logs.mdc` used a narrow “relevance screen”: agents often skipped helpful Q&A (for example IDE/proxy troubleshooting) unless it matched reusable-rules / shipping / formal root-cause buckets. The user asked to flip the default: if it helps people, log it, and write the solving process and solution in detail—not a one-line verdict.

## Process
1. Re-read `dev-logs.mdc`, the one-line pointer in `project-core.mdc`, and the agent summary in `.github/copilot-instructions.md`.
2. Rewrote the screen: **default write** when the answer is helpful to future readers (delivery, debugging, howto, env/IDE tips, architecture trade-offs, SEO/i18n decisions, etc.).
3. Kept only hard skip cases that still protect quality and safety: pure git add/commit/push, empty confirmations, secrets/PII, log-file-only turns, and scaled thin / no-increment shells.
4. Expanded `[try to solve]` requirements and the new-log template to force Context → Process → Root cause/analysis → Solution → Notes/boundaries.
5. Synced wording in `project-core.mdc`, `copilot-instructions.md`, and `dev-logs/_archive/README.md`.

## Root cause / analysis
The old filter optimized against thin pages by under-logging. That conflicted with people-first knowledge capture: many useful chats never reached `/devlogs/`. The new bar is “helpful to people,” while SEO spam policy still blocks empty shells—so we write more often, but each post must carry a reusable process narrative.

## Solution
- Source of truth: `.cursor/rules/dev-logs.mdc` (alwaysApply).
- Pointers updated so agents and Copilot do not keep the old “do not log every Q&A” default.
- Same-topic multi-turn still consolidates into **one** detailed log (avoid many thin posts).
- Historical append-only behavior unchanged; curation still moves unhelpful/thin entries to `dev-logs/_archive/`.

## Notes / boundaries
- Pure commit/push sessions remain unlogged (no reader value).
- Never put secrets or personal data in logs even if the chat mentioned them.
- After adding many new `.md` sources, run `npm run build:logs` (or a ship path that includes it) before expecting new HTML under `public/devlogs/`.

[actions]
- `.cursor/rules/dev-logs.mdc`: helpful-default screen + detailed process template
- `.cursor/rules/project-core.mdc`: one-line pointer
- `.github/copilot-instructions.md`: agent summary sync
- `dev-logs/_archive/README.md`: archive criteria wording
