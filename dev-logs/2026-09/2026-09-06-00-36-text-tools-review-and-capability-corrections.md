Date: 2026-09-06 00:36
Summary: Reviewed subject=text tools and corrected privacy tags, security edges, SEO fact errors, Prompt-cluster localization pollution, and loadSample wiring.
Visibility: people

[question]
review 文本工具和修正

[try to solve]
## Context
After Excel and PDF capability reviews, the same pass was applied to text-related tools (catalog `subject: text`, plus text-compare / SEO-growth / AI-prompt clusters that process text). The goal was information-gain honesty: copy must match real behaviour, and tools must not teach incorrect Google Search Central or RFC rules.

## Process
1. Inventoried tools via taxonomy (`subject=text` = 30) and related compare/SEO/prompt pages.
2. Audited Page implementations against i18n How/Rules/FAQ and `lint:tool-page --require-html`.
3. Fixed code where behaviour, privacy, or security diverged from claims.
4. Rewrote English masters for SEO tools that stated false normative rules, then synced all ten locales.
5. Cleared Prompt-cluster non-English leftovers / Spanish-template pollution (`audit-prompt-i18n.mjs` → TOTAL 0) and replaced “Load sample already ran on first paint” with actionable How steps.
6. Housekeeping: keyword pool `build` → `absorb` for four live text-compare slugs; tracker decision log; work-task review notes; `merge:tools` + `build:site`.

## Root cause / analysis
- **Privacy**: nine Prompt tools marked `localProcessing: true` while optional Expand/Polish POSTs text to Workers AI — homepage “no upload” was false.
- **Trust / SEO**: `on-page-seo-checker` claimed duplicate H1s hurt rankings; Google’s position is that heading count is not a ranking penalty. `robots-txt-generator` claimed “last matching group wins”; RFC 9309 selects the most specific user-agent group and merges same-agent groups. Several SEO tools overstated sitemap indexing speed, OG required fields, hreflang exclusivity, and SERP preview via URL Inspection / Rich Results Test.
- **Correctness**: JWT claims used `atob` without UTF-8 decode; password generation had modulo bias; HTML entity multi-pass decode could truncate on `</textarea>`; hreflang XML lacked attribute escaping; on-page/OG fetch followed redirects without per-hop host checks (SSRF).
- **Engineering contract**: markdown-to-html, on-page-seo-checker, and magnet-link-decoder ran samples inline without a literal `loadSample()` — prerender lint failed until functions were named and `build:site` refreshed HTML.
- **Localization**: Prompt shards had large English leftovers and Spanish template copies; mechanical audit length ≥12 chars dropped from ~2100 polluted strings to 0.

## Solution
### Implementation
- Prompt catalog: `localProcessing: false`; AI apply writes full Markdown; Turnstile verifies hostname + `action={slug}-ai` (skip hostname on localhost).
- `htmlEntityPage`, `jwtDecoderPage`, `passwordGeneratorPage`, `hreflangGeneratorPage`, `onPageSeo.ts` / `openGraphPreview.ts` (manual redirect following), `onPageSeoCheckerPage` (Paste-HTML default + loadSample), `markdownToHtmlPage`, `magnetLinkDecoderPage`.
- Open Graph field table: protocol-required `og:title` / `og:type` / `og:image` / `og:url`; `og:description` optional in the table.

### Copy / SEO facts (ten locales)
- on-page-seo, robots-txt, open-graph, hreflang, sitemap, meta-serp, meta-tag, chatgpt-export: normative wording aligned with Search Central / RFC 9309 / ogp.me.
- Prompt cluster: native rewrites; How steps call Load sample explicitly; zh titles for film/short-drama adjusted away from param-enum heuristics.
- Removed user-visible “second URL / thin URL / doorway” site-structure meta-narrative from convert/export FAQs.

### Verification
- `node scripts/tmp/audit-prompt-i18n.mjs` → TOTAL 0
- `lint:tool-page --require-html` OK for previously failing loadSample slugs
- `lint:seo` title/coverage OK (inbound related WARN only)
- `npm run merge:tools` + `npm run build:site` (205 tools × 10 langs)

## Notes / boundaries
- Twenty older converters still use prose `how_body` without ordered `how_item_*` — deferred (large i18n volume); not failing current lint.
- PDF template pollution (`add-text-to-pdf-file` / `write-pdf-document-online` OCR leftovers) and PDF near-duplicate URL strategy remain outside this text pass.
- Intentional shared English tokens in Prompt Markdown section headers (`Role` / `Task` / `JSON`) may still match `en` for short strings; audit ignores values shorter than 12 characters.
- Deploy / IndexNow not run in this pass.

[actions]
- Updated Page/endpoint/tool modules under `src/pages/`, `src/endpoints/`, `src/tools/`
- Updated `src/site/tool-catalog.d/` Prompt + touched SEO/convert tools; i18n shards under `src/site/i18n/tools/`
- Updated `docs/seo/keyword-daily-pool.tsv`, `docs/seo/keyword-to-tool-tracker.md`, `work-tasks/*/02-tool-info.md`
- Ran `npm run merge:tools` and `npm run build:site`
