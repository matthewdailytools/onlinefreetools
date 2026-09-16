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
- Topic hub/leaf copy (`/topics/{id}`, `scripts/site/topic-ig-copy-*.mjs`):
  `.cursor/rules/tool-i18n-localization.mdc`, `.cursor/rules/tool-i18n-seo.mdc`
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
  `docs/seo/keyword-to-tool-*`, `docs/seo/keywords/`, or `docs/seo/serp-batches/`.
- `.cursor/skills/tool-coverage-pass/SKILL.md`: use for new tool creation,
  multi-tool plans, coverage gates, title/keyword optimization, and any change
  that marks a tool brief ready or i18n-done.
- `.cursor/skills/tool-token-efficiency/SKILL.md`: use alongside coverage pass
  when implementing or shipping a single tool and token/context cost matters;
  optimizes reads, session splits, and command output handling without skipping
  gates or lowering i18n/SEO quality.
- `.cursor/skills/converter-serp-landing-seo/SKILL.md`: use when writing
  convert/compress/screenshot/batch-convert copy, or when learning competitor
  converter SERP structure (title/H1/meta/How/settings). Does not replace
  coverage-pass or Google scaled-content rules.
- `.cursor/skills/converter-input-ui/SKILL.md`: use when implementing converter
  input UI (URL vs file, Convert then Download, collapsed advanced settings,
  gold-standard progress HUD matching batch-convert-web-pages-to-jpg). Do not
  add cloud-drive uploads. Complementary to converter SERP SEO. Hard gate:
  `.cursor/rules/tool-creation.mdc` 「处理中进度必须明显」.

Codex-native adapter skills live under `.agents/skills/`. Each adapter routes
to the corresponding canonical `.cursor/skills/*/SKILL.md`; do not duplicate
the canonical workflow in the adapter. Cursor skill files remain the source of
truth.

## Mandatory Skill Preflight

Before planning, editing, or delegating repository work:

1. Classify every work area in the request.
2. List every matching repository skill from the trigger matrix below.
3. Read each matching `SKILL.md` completely, including the canonical Cursor
   skill referenced by a Codex adapter.
4. Read all mandatory rules and references selected by those skills.
5. State in commentary which skills are active and why.

Do not edit files before completing this preflight. If the task expands into a
new work area, stop and repeat the preflight for the newly applicable skills.

### Skill Trigger Matrix

- Keyword batches, SERP analysis, keyword pools, or absorb/build/defer
  decisions: **must use `keyword-to-tool-funnel`**.
- Any new or modified tool, multi-tool plan, coverage gate, title/keyword
  optimization, or brief marked ready/i18n-done: **must use
  `tool-coverage-pass`**.
- Implementing or shipping one tool: **must use `tool-coverage-pass` and
  `tool-token-efficiency` together**.
- Converter/compressor/screenshot/batch-convert copy or SERP structure: **must
  additionally use `converter-serp-landing-seo`**.
- Converter/compressor/screenshot/batch-convert input UI or interaction: **must
  additionally use `converter-input-ui`**.

Before reporting completion, state which repository skills were applied, which
required executable gates ran and their results, and any skipped gate with its
reason. A prose-only self-check does not replace an executable gate when the
repository provides one.

## Verification

Prefer executable gates over prose-only checks.

- General pre-ship check: `npm run verify`
- Single-tool ship check: `npm run verify:tool -- --slug=<slug>`
- Coverage only: `npm run coverage:gate -- --slug=<slug> --phase=all`
- Page wiring / template-escape / loadSample smoke: `npm run lint:tool-page -- --slug=<slug> [--require-html]`
- Isolation only: `TOOL_SLUG=<slug> npm run lint:tool-isolation`

For new or modified tools, do not stop at `npm run merge:tools`; run
`npm run build:site` or a wrapper that includes it so home pages, prerendered
tool pages, sitemap, and vendor chrome are refreshed. New tools must use
catalog `page.style: "opts"` (not `pair`).

## Delivery and recovery contract

- “立项和实现” authorizes the complete local brief-to-verified-implementation
  workflow. A/B/C/D are checkpoints, not reasons to end the task or ask the user
  to authorize the next phase again. Deployment is separate unless requested.
- Confirm the Git root before editing. A command's working directory does not
  change the patch tool's base directory. Use resolved paths for patches.
- Recover from local syntax/patch errors in the same task. Do not substitute
  scaffolding, copied completion checkboxes, or a plan for implementation.
- Keep command session IDs and poll to a definitive exit. A yielded command is
  not a timeout; silence, file timestamps and existing caches prove neither
  success nor failure. `verify:tool` stores unique-run logs/results under
  `.cache/verify-tool/`; `running` or missing evidence is not a pass.
- Mechanical gates do not establish semantic or runtime correctness. Review
  conversion direction, codec/container claims and settings per locale. Exercise
  real input → conversion → downloaded output, plus invalid input/retry and
  automatic sample behavior; record the command/test and actual outcome.
- Keep local implementation, local verification, remote upload and live-site
  verification distinct. A prior tool's remote DNS failure is not a dependency
  of the next tool's local work. A genuine blocker must name the failed command,
  evidence, remaining work and required external change; never claim completion.
- See `docs/tool-workflow-reliability.md` for this incident's evidence and the
  acceptance/recovery checklist.

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
