Date: 2026-08-13 23:43
Summary: Added Codex-facing project instructions and executable verification gates.

[question]
执行落地方案

[try to solve]
Implemented the automation bridge so repository Cursor rules and skills are more likely to be loaded by Codex-compatible agents and backed by executable checks. Added a root `AGENTS.md` that points agents to the relevant `.cursor/rules` and `.cursor/skills` files, added `npm run verify` for general pre-ship validation, added `npm run verify:tool -- --slug=<slug>` for single-tool validation, and added a GitHub Actions workflow that runs the same verify command on pull requests and pushes to `main`.

[actions]
- Added `AGENTS.md`.
- Added `scripts/verify-tool.mjs`.
- Updated `package.json` scripts with `verify` and `verify:tool`.
- Added `.github/workflows/verify.yml`.
- Ran `npm run verify`.
- Ran `node --check scripts/verify-tool.mjs`.
