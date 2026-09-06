Date: 2026-09-06 17:26
Summary: After a successful full site build, npm run deploy still exits 2 because description SEO-WARN sets lint:seo’s exit code; COVER-WARN and LINK-WARN do not.
Visibility: people

[question]
@/Users/xuli/.cursor/projects/Users-xuli-vscodeai-onlinefreetools/terminals/1.txt:375-574

[try to solve]
## Context

`npm run deploy` runs `predeploy` (`build:site` + `lint:seo` + `lint:vendor`). The selected terminal range is the `lint:seo` block after a full prerender (205 tools × 10 langs, 2050 pages, sitemap 3269 URLs). The deploy command then exited 2. The operator next ran `npm run upload:r2` directly, which bypasses that gate.

## Process

1. Confirm `build:site` completed: vendor copy, lang homes, sitemap, prerender, gzip `_pages`.
2. Read `scripts/validate-tool-seo.mjs`: missing process/example keywords or meta description length &lt; 120 sets `exitCode = 2`.
3. Compare other warning families in the same run: title parameter-enumeration `COVER-WARN` is documented as legacy debt and does not fail CI; inbound `LINK-WARN` orphans increment a warn count only.

## Root cause / analysis

`lint:seo` treats description keyword/length issues as a hard gate even though it prints `[SEO-WARN]`. That is why a green build plus “WARNINGS detected” still blocks `predeploy`/`deploy`.

The failing descriptions in this run were:

- `convert-html-to-pdf` — all 10 locales: no calculation/process/example token from the per-language keyword list (e.g. English needs `steps` / `process` / `example`; Chinese needs `步骤` / `过程` / `示例`).
- `make-pdf-flipbook` — en/ja/zh missing those tokens; zh also under 120 characters (`样例` does not match `示例`).
- Chinese `add-text-to-pdf-file` and `write-pdf-document-online` — length &lt; 120 (they already contain `示例`).

`COVER-WARN` (15 legacy titles) and `LINK-WARN` (18 tools with no inbound `related`) are inventory, not this deploy blocker.

## Solution

To make `npm run deploy` pass `predeploy`, edit the **i18n shards** (`src/site/i18n/tools/{slug}/{lang}.ts`) for those three tools: keep people-first copy, naturally include a listed process/example word, and bring meta descriptions to ≥120 characters. Then `merge:tools` / `build:site` and re-run `lint:seo`.

Do not “fix” this by stuffing keyword lists, rewriting unrelated titles, or adding inbound related links unless those tools are already being edited. Skipping `predeploy` with a raw `upload:r2` uploads HTML but leaves the description gate red for the next `deploy`.

## Notes / boundaries

- Validator reads merged `src/site/i18n/{lang}.ts`; edit shards, do not hand-edit the merge output.
- Keyword check is substring-based. Near-synonyms such as Chinese `样例` or a long how-to sentence without `steps`/`example` still fail.
- Icon, title/coverage (strict), coverage-rounds, topic-leaf, and related≥2 outbound checks were OK in this run.

[actions]
- Explained which lint:seo lines fail deploy versus which are non-blocking warnings
