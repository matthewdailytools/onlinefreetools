Date: 2026-09-06 21:35
Summary: Split Compress all onto its own highlighted row, put each option category on a separate line with a None choice (now the first-paint default), stopped auto-filling the sample, and made selected option chips a teal filled state that beats the site outline-button CSS.
Visibility: people

[question]
https://onlinefreetools.org/tools/bulk-compress-product-photos  1、Compress ALL第一行，要单独一行，突出显示。后续都是选项，要区分开来。2、不同类别选择项，要单独一行，且都提供不选择的选项。3、剔除提前填充的example

## Tool links (English)
- https://onlinefreetools.org/tools/bulk-compress-product-photos
Chinese: https://onlinefreetools.org/zh/tools/bulk-compress-product-photos

[try to solve]
## Context
The bulk product-photo compressor mixed the primary action with shortcut chips on one wrapping toolbar. Format chips (`.jpg` / JPEG / WebP / PNG) sat next to size-cap chips (200 KB / 100 KB) and the Compress all button, so the main job was easy to miss. A second flex row then piled output format, resize, size rule, pixels, and quality together. Opening the page also synthesized two sample JPEGs and ran `compressAll()` immediately, which filled the results table before the visitor had chosen any files.

The request was three UI changes on that page: put Compress all first and alone, make each option category a separate row with a true “none” choice, and stop pre-filling the example.

## Process
The page source is `src/pages/bulkCompressProductPhotosPage.ts`. The old toolbar was a single `tools-bar` of buttons; presets lived in one `<select>` with three optgroups (listing scenes, size-only, KB-only). Hidden behind that, `probeAll().then(loadSample)` always queued two canvas JPEGs.

The new layout, after the dropzone, is:

1. **Action row** — Compress all as a larger primary button (`bcp-action-row`), not `btn-sm`.
2. **Format row** — None (keep each file’s jpeg/webp/png, otherwise fall back to JPEG) · JPEG (.jpg) · WebP · PNG.
3. **Target size row** — None (no KB search) · 500 / 200 / 100 / 50 / 30 KB, plus a number field when a cap is on.
4. **Size rule row** — None (do not downscale) · longest side / max width / max height · px input · a pixel shortcut select that also starts with None.
5. **Listing preset row** — None, then the scene presets only (HD / listing / email / social / thumb / tiny).
6. **Quality row** and **JPEG background row**.
7. **Secondary actions** — Download ZIP, Load sample, Clear, visually quieter under a dashed rule.

Chip groups are Bootstrap `btn-check` radios so “none” and a real value are exclusive. Hidden `#bcpOutput` / `#bcpResizeOn` / `#bcpTargetOn` / `#bcpSizeRule` keep the existing encode pipeline. `mimeForFile()` uses the selected format when one is set; empty format keeps the source MIME. `loadSample()` remains for the button and for `lint:tool-page`; init only calls `probeAll()` then `syncOptionsUi()`.

Copy that claimed “the sample already ran on first paint” was updated in all ten locale shards (`description`, `how_item_5`), and `opt_none` was added (English “None”, Chinese “不选择”, and matching short labels in the other locales).

## Root cause / analysis
The first-row confusion was layout, not missing features: Compress all was one `btn-sm` among chips. Categories were mixed because chips were treated as a single toolbar rather than radio groups. Auto-sample is required by `tool-creation.mdc` for most new tools, but an explicit product request to stop pre-filling wins over that default; keeping the Load sample button still satisfies the `loadSample` HTML gate.

“None” is now the first-paint default for format, KB, size rule, and JPEG fill. JPEG / 200 KB / longest-side remain available chips so a listing batch still works in two clicks. Quality stays at 0.8 because it is a slider, not a chip.

## Solution
After `merge:tools` / `build:site`, prerendered English HTML has `bcp-action-row` first, then format / KB / size none chips, and `probeAll().then` no longer calls `loadSample`. Chinese HTML contains “全部压缩” and “不选择”. `npm run lint:tool-page -- --slug=bulk-compress-product-photos --require-html` and `lint:seo` passed. `verify:tool` isolation reported unrelated dirty files (`open-graph-preview`), not this slug’s shards.

Load sample still builds two stand-in listing JPEGs and compresses them when clicked. Files still never leave the tab.

Review follow-up: “JPEG background” was a format-named control for an alpha-flattening step. JPEG has no transparency, so a matte is only needed when writing JPEG from pixels that may be empty. The row is now **Fill transparent pixels**, shown only when output is JPEG, with None (no matte). PNG/WebP keep alpha. Picking a KB cap no longer silently switches PNG to WebP/JPEG. `.jpg` and JPEG chips were the same encode and are merged to **JPEG (.jpg)**.

A follow-up asked for a **clearer selected button**. The first fill used `#292931` on `.btn-check:checked + .btn`, but site.css still wins on `.btn-outline-secondary` (`background: #ffffff !important`, and hover/focus reset to white). Selected chips therefore looked almost the same as idle chips.

The reliable selected state is now:

1. Every option label gets `bcp-chip`. Compress all / ZIP / Sample / Clear stay ordinary buttons.
2. Default-checked labels also ship with `bcp-chip-on` in the HTML so first paint is already filled. After the later request to start on None, those classes sit on the None chips (format, KB, size, fill), not JPEG / 200 KB / longest side / White.
3. `syncChipLooks()` runs from `syncOptionsUi()` and toggles `bcp-chip-on` from the matching radio’s `checked`.
4. Page CSS under `#content .tool-panel .bcp-opt-row` uses brand teal (`--brand` `#0f6e8c`), white type, 2px border, and a 3px ring, all `!important`, so it beats the site outline rule. Listing and pixel `<select>`s keep `bcp-select-on` when the value is not None.

Prerendered English HTML shows `bcp-chip-on` on the None chips. `lint:tool-page --require-html` passed after slug prerender + gzip.

A later request set **every option row to None** on first paint: keep each file’s jpeg/webp/png, skip resize, skip the KB search, hide fill-until JPEG is picked. Copy in all ten locales no longer says the 200 KB chip is already on. Load sample follows the current chips.

A later request: clicking Compress all now **clears the yellow warning first**, so the PNG+KB hint is not glued onto “PNG output often stays large” from the same run. Switching off PNG or the KB chip also drops that specific hint.

## Notes / boundaries
- JPEG (.jpg) is one chip: `.jpg` and JPEG were the same encode (`image/jpeg`).
- Fill transparent pixels includes None (skip the matte). The row is JPEG-only because PNG/WebP keep alpha.
- Local wrangler was not running for a click-through in this pass; selected classes and CSS were checked on `public/_pages/en/tools/bulk-compress-product-photos.html`. Production still needs deploy (or `start:dev` / local R2 upload) to show the new look.

[actions]
- `src/pages/bulkCompressProductPhotosPage.ts` — action row, per-category option rows with None, keep-original MIME, no auto sample; selected chips use `bcp-chip` / `bcp-chip-on`; Compress all clears leftover PNG/KB yellow warnings before this batch writes new ones
- `src/site/i18n/tools/bulk-compress-product-photos/{en,zh,de,fr,es,ja,id,pt,ru,ar}.ts` — `opt_none` plus first-paint copy
- `src/site/tool-catalog.d/bulk-compress-product-photos.json` — `updatedAt` via `tool:touch`
- `work-tasks/bulk-compress-product-photos/02-tool-info.md` — sample spec matches “button only”
- `npm run verify:tool -- --slug=bulk-compress-product-photos` (isolation noise from other dirty files)
