Date: 2026-09-02 01:45
Summary: Fixed broken inline scripts on seven scene prompt builders and writing-prompt-generator (Build/Load sample dead on first paint).
Visibility: people

[question]
https://onlinefreetools.org/en/tools/film-prompt-builder 没有样例，点击 Build / Load sample 无反应；要求 review 所有 prompt builder 并修正。

[try to solve]
## Context
User reported film-prompt-builder (and by extension the new prompt cluster) showed UI but Build prompt / Load sample did nothing and no auto sample on first paint. Tool pages are **prerendered** to `public/_pages/` → R2; the browser runs inline `<script>` from that HTML (Worker does not SSR tool bodies).

## Process
1. Pulled prerendered `public/_pages/en/tools/film-prompt-builder.html` and ran `node --check` on the inline tool script.
2. Syntax error at `taskParts += 'Logline: ' + f.logline + '` followed by a **literal newline** — the string was broken across lines.
3. Root cause: in `extraBodyHtml` **TypeScript template literals**, `'\n'` is interpreted as a real newline in the **output JavaScript**, not as `\n` inside a JS string. Same class of bug as the existing `\\n` rule for `.join('\\n')`.
4. Grep found the same `+ '\n'` / `inputs:\n'` pattern in seven generated scene pages (film, sketch, short-drama, product-design, android, ios).
5. Extended `scripts/validate-tool-page-wiring.mjs` with `node --check` on prerendered inline scripts when `loadSample` is present.
6. Re-ran lint: **writing-prompt-generator** failed separately — `Jonah's` in a single-quoted PRESETS string (`\'` eaten by TS template → unescaped `'` in output JS).
7. Moved `WRITING_PROMPT_PRESETS` / `WRITING_PROMPT_RANDOM` to module constants and inject via `JSON.stringify()`.

## Root cause / analysis
Two template-embedding pitfalls in `extraBodyHtml`:
| Pattern in Page.ts template | Emitted into prerendered HTML | Result |
|---|---|---|
| `+ '\n'` inside backticks | String literal split by newline | **SyntaxError**, entire IIFE dead |
| `'Jonah\'s'` inside backticks | `'Jonah's'` | **SyntaxError** on apostrophe |
| `.join('\\n')` (correct) | `.join('\n')` | OK |

Midjourney / prompt-template-builder were already using `\\n` or `JSON.stringify` for dynamic strings.

## Solution
- **7 scene tools**: change `+ '\n'` → `+ '\\n'` and `inputs:\n'` → `inputs:\\n'` in `buildBlocks()`.
- **writing-prompt-generator**: `JSON.stringify(WRITING_PROMPT_PRESETS|RANDOM)` injection.
- **Lint gate**: prerendered script `node --check` in `lint:tool-page`.
- Re-prerender + gzip + `upload:r2` (250 changed gz objects); bump `PAGES_CACHE_VERSION` `4.4` → `4.5` in `wrangler.jsonc` so edge Cache API keys invalidate stale broken HTML.

## Notes / boundaries
- `_pages/` remains gitignored; production fix is R2 upload + Worker vars bump (push/deploy Worker for cache version).
- S0 (`prompt-template-builder`) script was already valid; no code change.
- Optional follow-up: move scene `PRESET` blobs to module-level `JSON.stringify` like writing tool (film food-truck sample currently inline JSON — safe today).

[actions]
- `src/pages/filmPromptBuilderPage.ts`, `sketchPromptGeneratorPage.ts`, `shortDramaPromptGeneratorPage.ts`, `productDesignPromptBuilderPage.ts`, `androidPromptBuilderPage.ts`, `iosPromptBuilderPage.ts`: escape `\\n` in inline buildBlocks strings
- `src/pages/writingPromptGeneratorPage.ts`: PRESETS/RANDOM via JSON.stringify
- `scripts/validate-tool-page-wiring.mjs`: inline script syntax check
- `wrangler.jsonc`: PAGES_CACHE_VERSION 4.5
- Re-prerender/gzip/upload:r2 for affected slugs
