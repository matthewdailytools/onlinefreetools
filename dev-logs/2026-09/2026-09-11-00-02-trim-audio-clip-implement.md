Date: 2026-09-11 00:02
Summary: Shipped trim-an-audio-clip-and-export as a local start/end trimmer with WAV/MP3 export, ten-locale copy, and lazy lamejs under the sound-editor topic.
Visibility: people

[question]
实现

## Tool links (English)
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
Chinese: https://onlinefreetools.org/zh/tools/trim-an-audio-clip-and-export

[try to solve]
## Context

The brief (`work-tasks/trim-an-audio-clip-and-export/`, 02 status `ready`) asked for scene job **S1**: one local file, Start/End, **Trim**, then **Export WAV** / **Export MP3**. Not a mini DAW, not an AudioMass host, and not a `/mp3-cutter` doorway. Topic id is `sound-editor`; Hub slug `edit-audio-on-waveform` stays unbuilt and off related links.

## Process

- Copied `@breezystack/lamejs@1.2.7` IIFE + LICENSE into `public/vendor/lamejs/` via `scripts/copy-tool-libs-vendor.mjs`, and listed both paths in `scripts/validate-vendor-tracked.mjs`.
- Catalog shard `page.style: "opts"`, `primaryTopic: "sound-editor"`, `localProcessing: true`, related `file-metadata-analyzer` and `file-hash`. Icon is a small waveform-plus-cut SVG.
- Page `src/pages/trimAnAudioClipAndExportPage.ts`: one dropzone; Start/End; Advanced (zero-cross default on, MP3 96/128/192); action row Trim / Export WAV / Export MP3 / Load sample / Clear. HUD capsules Decode / Trim / Encode (gold `.bcw-hud`). Caps refuse oversize before decode (~40 MB / 20 min desktop; ~20 MB / 8 min under 768px). Duration over-cap is refused after decode, not silently truncated. Video MIME rejected. `loadSample()` builds a 5 s tone, sets 1.00–3.00, auto-Trims; lamejs loads only on Export MP3.
- English master i18n, then nine independent locale shards (zh/es/ar/pt/id/fr/ja/ru/de) from `03` briefs. Privacy copy states device + not uploaded to a server in each language. How verbs match buttons. `mp3 cutter` / local synonyms absorb in desc/FAQ; *sound editor* stays off attacking H1.
- First prerender failed: `buildToolJsonLd` now requires `tool` + `defaultLang`, not `slug`/`howto`. Fixed to the same pattern as `fileMetadataAnalyzerPage.ts`.
- `npm run coverage:gate -- --slug=trim-an-audio-clip-and-export --phase=2` then `--phase=4` then `--phase=all` green. `lint:tool-page --require-html` green. `lint:seo` green.
- `lint:vendor` required `git add` of the two lamejs files (not a commit). Isolation vs `origin/main` is red without `CROSS_TOOL_UPDATE=1` because 立项 already touched topic IG, core labels, and `docs/sound-editor/`. With that flag: `CROSS_TOOL_UPDATE=1 npm run verify:tool -- --slug=trim-an-audio-clip-and-export` → OK.
- README Tools List (zh + en) and doc 12/README S1 status updated to implemented.

## Root cause / analysis

S1 search intent is “keep a range and download.” A waveform workstation would steal the Hub query and violate the brief. Lazy lamejs keeps the first paint free of the encoder. JSON-LD had drifted to a catalog-object API; passing a slug left `opts.tool` undefined and crashed prerender. Vendor lint is a Git-track check because Cloudflare Pages deploys from Git, not from a local copy step.

## Solution

- One-task trimmer at `/tools/trim-an-audio-clip-and-export` (English default path, no `/en`).
- WAV is a local 16-bit PCM writer; MP3 is CBR after a same-origin `/vendor/lamejs/` load.
- `02` status `implemented`; `03` status `i18n-done` (ar/ja/ru pending-native-review left unchecked after round 3).
- Prerendered `public/_pages/en/tools/trim-an-audio-clip-and-export.html` contains `loadSample()`, Trim / Export labels, and `/vendor/lamejs/lamejs.iife.js`.

## Notes / boundaries

- Do not iframe audiomass.co or copy AudioMass into this page.
- Do not add `/mp3-cutter` / `/cut-mp3` URLs.
- Related graph warns this slug has zero inbound related links until other tools point at it; outbound related is already two live file tools.
- Isolation for a future single-file tweak can drop `CROSS_TOOL_UPDATE` once topic registration is on `main`.
- No browser MCP in this session: Trim/Export clicks were not exercised in a live tab; gates + prerender HTML smoke only.
- Commit (when asked) must include `public/vendor/lamejs/*` or production will 404 the encoder.

[actions]
- Added catalog, Page, ten-locale shards, icon, lamejs vendor copy + lint paths
- `npm run merge:tools` / `build:site` / `verify:tool` (with `CROSS_TOOL_UPDATE=1`)
- README Tools List; docs/sound-editor README + 12 S1 status; 02 `implemented`; 03 `i18n-done`
