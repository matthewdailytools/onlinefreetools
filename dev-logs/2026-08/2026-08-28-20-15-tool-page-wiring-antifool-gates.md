Date: 2026-08-28 20:15
Summary: Added lint:tool-page and ship antifool rules so catalog style mismatches and template-literal \\w bugs fail before ten-locale work wastes tokens.

[question]
需要（落地：自动化门禁 + 规则/Skill 防呆清单）

[try to solve]
Turned the terraform-cidrsubnet failure modes into executable gates and short process text.

New `npm run lint:tool-page` (`scripts/validate-tool-page-wiring.mjs`) checks: (1) catalog `page.style` matches Page export shape — new tools must be `opts`, not `pair`; (2) Page source does not bake a single-backslash `/{(\w+)}/` inside template strings; (3) with `--require-html`, prerendered HTML must exist, must not contain literal `/{(w+)}/`, and must include `loadSample`. `verify:tool` now calls `node scripts/…` directly (Windows-safe), runs wiring before build and HTML smoke after, and still runs coverage/seo/vendor/isolation.

Isolation allowlist now includes `docs/seo/`, `work-tasks/_template/`, and `.cursor/skills/`; `__pycache__` / `*.pyc` are ignored as noise. Rules/skills updated: `tool-creation.mdc` (style table, escape hard rule, ship antifool, checklist), `tool-token-efficiency` + `tool-coverage-pass` skills, `AGENTS.md`, and `_template/02-tool-info.md`.

[actions]
- Added `scripts/validate-tool-page-wiring.mjs`; rewrote `scripts/verify-tool.mjs`; updated `scripts/check-tool-isolation.mjs`
- `package.json`: `lint:tool-page`
- Updated `.cursor/rules/tool-creation.mdc`, `.cursor/skills/tool-token-efficiency/SKILL.md`, `.cursor/skills/tool-coverage-pass/SKILL.md`, `AGENTS.md`, `work-tasks/_template/02-tool-info.md`
