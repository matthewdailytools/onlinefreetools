# AGENTS.md

This repository uses Cursor rules as the project source of truth for durable
project conventions. Agents that support `AGENTS.md` must treat this file as the
entry point, then load the relevant `.cursor` rule or skill files before making
changes.

## Required Rule Loading

Always read these files before editing this repository:

- `.cursor/rules/project-core.mdc`
- `.cursor/rules/dev-logs.mdc`

Read additional rules based on the work area:

- Tool pages, catalog shards, tool i18n, tool icons, README tool list, or site
  generation: `.cursor/rules/tool-creation.mdc`
- SEO copy, metadata, structured data, canonical URLs, hreflang, sitemap, or
  indexing behavior: `.cursor/rules/seo-google-policy.mdc`,
  `.cursor/rules/tool-i18n-seo.mdc`, `.cursor/rules/seo-html-defaults.mdc`
- Tool localization or multilingual copy:
  `.cursor/rules/tool-i18n-localization.mdc`
- New-tool briefs in `work-tasks/`:
  `.cursor/rules/work-tasks-tool-brief.mdc`
- Cloudflare, Wrangler, vendor assets, deploy scripts, Workers, R2, or Pages:
  `.cursor/rules/cloudflare-workflow.mdc`
- Keyword-to-tool analysis, SERP batches, daily keyword pool, absorb/build/defer
  decisions, or keyword tracker work:
  `.cursor/rules/keyword-to-tool-funnel.mdc`

## Repository Skills

The repository-local Cursor skills are workflow documents. They are not a
substitute for the current agent runtime's native skill mechanism, but agents
must follow them when their trigger conditions match:

- `.cursor/skills/keyword-to-tool-funnel/SKILL.md`: use for keyword batches,
  SERP analysis, keyword pools, absorb/build/defer decisions, and edits under
  `docs/seo/keyword-to-tool-*` or `docs/seo/serp-batches/`.
- `.cursor/skills/tool-coverage-pass/SKILL.md`: use for new tool creation,
  multi-tool plans, coverage gates, title/keyword optimization, and any change
  that marks a tool brief ready or i18n-done.

## Verification

Prefer executable gates over prose-only checks.

- General pre-ship check: `npm run verify`
- Single-tool ship check: `npm run verify:tool -- --slug=<slug>`
- Coverage only: `npm run coverage:gate -- --slug=<slug> --phase=all`
- Isolation only: `TOOL_SLUG=<slug> npm run lint:tool-isolation`

For new or modified tools, do not stop at `npm run merge:tools`; run
`npm run build:site` or a wrapper that includes it so home pages, prerendered
tool pages, sitemap, and vendor chrome are refreshed.

## Edit Boundaries

- Keep edits scoped to the user's request and the relevant tool or workflow.
- Do not manually edit generated files unless the relevant rule explicitly
  allows it; update source shards and run the generator instead.
- Do not write secrets or credentials to the repository.
- Preserve user changes in the working tree. Do not revert unrelated changes.

If instructions conflict, apply this order: system/developer instructions,
explicit user request, Google Search Central policy where SEO is involved,
running validation scripts and code, `.cursor/rules/*`, `docs/*`, then other
assistant guidance files.
