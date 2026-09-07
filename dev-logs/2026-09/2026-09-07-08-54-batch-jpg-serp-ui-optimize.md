Date: 2026-09-07 08:54
Summary: Rechecked the batch webpage-to-JPG brief and page against converter SERP and input-UI skills, then shortened the snippet, collapsed advanced settings, and aligned How with the Convert all button.
Visibility: people

[question]
根据这些skills，重新review ”batch convert web pages to jpg“的立项和实现，进行优化

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-web-pages-to-jpg
Chinese: https://onlinefreetools.org/zh/tools/batch-convert-web-pages-to-jpg

[try to solve]
## Context
The tool was already live as a URL-list JPEG batch (viewport, quality, full vs first screen vs the PDF sibling). Two converter skills then landed: **converter SERP landing SEO** (snippet-sized meta, How verbs = buttons, absorb head terms, no doorway) and **converter input UI** (one primary input, Convert then Download, advanced settings collapsed, short hero lead). This pass re-read the brief and the Page against those checklists and closed the gaps without changing the job or splitting `/webpage-to-jpg`.

## Process
1. Loaded both skills plus their webpage-to-jpg examples, then compared `02-tool-info.md`, English i18n, and the first-screen markup in `batchConvertWebPagesToJpgPage.ts`.
2. Kept the H1 decision from 0b: **Batch convert web pages to JPG** (batch task sentence). Planner head terms `webpage to jpg` / `url to jpg` stay absorbed (one line still works). Did not add an encyclopedia “What is JPG” block or a format matrix.
3. Rewrote `tool_*_description` so the first ~160 characters work as a SERP snippet (verb + JPG + viewport/ZIP) and a compact `Steps:` / `Example:` still satisfies `lint:seo` (≥120). Hero `.tool-lead` now uses the short home-card `desc`, not the full meta.
4. Moved wait, viewport, JPEG quality, and capture into `<details>` labeled Advanced settings (optional). Defaults stay 1280 / 0.85 / full / wait=1 so Convert all works with the accordion closed. The `tools-bar` now holds only Convert all, Download ZIP, Load sample, and Clear.
5. Reordered How: paste URLs → **Convert all** (name the defaults) → open Advanced only if you need another viewport / first screen / wait → neighbor tools → Download ZIP → Load sample. Independent rewrite in all ten locales, not an English calque.
6. Updated `02` interaction + intent tables and `03` `1b`/`2b` rows. `coverage:gate` phase 2 and 4, then `verify:tool --slug=batch-convert-web-pages-to-jpg`, all green.

## Root cause / analysis
The first ship optimized **artifact IG** (JPEG raster vs A4 PDF) but still copied a “settings always visible + meta-as-lead” layout. That fights both skills:

- A 480-character meta is a spec sheet. SERP truncates before the conversion pair and the real differentiator show up.
- Viewport and wait on the Convert row look like required steps. Searchers who only need “paste URLs → Convert all → ZIP” have to scan past four selects. Progressive disclosure does not delete IG: How/Rules/FAQ still name those controls in indexable copy.
- Dumping meta into `.tool-lead` pushes the form down. The home-card sentence is the right length for a hero.

H1 stays a task sentence on purpose. FreeConvert can own exact-match `/webpage-to-jpg`; a second slug here would be a doorway.

## Solution
- Meta (English, first window): “Batch convert web pages to JPG from a URL list (one line = webpage to jpg). Pick viewport and JPEG quality, full page or first screen, then download a ZIP.” Then `Steps:` Convert all / Download ZIP and a two-page `Example:`.
- Lead: one sentence from `desc`. Form: URL textarea → action row → collapsed Advanced → table + HUD.
- How item 2 uses the button label **Convert all** and states the defaults; item 3 points at Advanced settings.
- Isolation unchanged: capture still inlined in the Page. `loadSample()` still click-only.
- Verified in prerendered HTML: disabled Download ZIP, no `open` on `<details>`, defaults selected, Chinese lead vs meta split. `verify:tool` OK (link validator still warns of zero inbound related from neighbors; left PDF catalog untouched to keep isolation).

## Notes / boundaries
- Do not add Dropbox/Drive or a file dropzone; that job belongs to PDF to JPG.
- Do not reverse-link from the PDF batch catalog without `CROSS_TOOL_UPDATE=1`.
- Live click-through in a running preview was not available; Convert/ZIP behavior was not re-run in a browser this pass.
- Skill examples for this slug were updated so they no longer list the old first-screen gaps.

[actions]
- Collapsed wait/viewport/quality/capture in `batchConvertWebPagesToJpgPage.ts`; hero uses `desc`
- Rewrote snippet meta, How, and `advanced_label` in ten locale shards
- Updated `02-tool-info.md` / `03-locale-briefs.md` and converter skill examples
- Ran `coverage:gate` phase 2/4 and `verify:tool --slug=batch-convert-web-pages-to-jpg`
