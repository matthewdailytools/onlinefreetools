Date: 2026-09-09 07:42
Summary: Canonical JS sound-editor research and product design now live under `docs/sound-editor/` (trimmer page, not a DAW); work-tasks were not created.
Visibility: people

[question]
单独一个fold，形成调研文档，另外给出产品设计文档

[try to solve]
## Context
The previous turn surveyed how to implement a browser sound editor in JavaScript. The user then asked for a dedicated folder with a research note plus a separate product-design note, rather than leaving the conclusion only in chat or a short log.

## Process
1. Followed the `docs/browser-extensions/` folder pattern: README index, `00-request.md`, then numbered docs.
2. Wrote `docs/sound-editor/01-js-implementation-research.md`: four-layer pipeline (decode → waveform → AudioBuffer edits → encode), library matrix (wavesurfer is UI-only), memory math, commented algorithms, license notes, site vendor/HUD constraints.
3. Wrote `docs/sound-editor/02-product-design.md`: job-to-be-done (cut a clip from a local file), draft scene slug `cut-clip-from-audio-file`, converter-style IA (Cut clip then Download), gold HUD capsules Decode/Cut/Encode, 20 MB / 10 minute caps, WAV default and lazy MP3, explicit non-goals (DAW, format-matrix URLs, `sound-editor` slug).
4. Linked the folder from A.3 in `docs/2026-07-28-tool-direction.md`, the 2026-08-09 AV client and media-pilot docs, and the 2026-06 media feasibility note.

## Root cause / analysis
Inventory already had `audio-trim` as an engineering name. A product URL named `sound-editor` would fight the head term on SERP and collide with a trimmer job. The design therefore freezes **tier-1 cutter**, maps the old inventory row to a scene slug, and keeps `work-tasks/` uncreated until the user asks to implement — coverage 0b has not run, so H1 remains a draft.

## Solution
Single folder `docs/sound-editor/` is the source of truth. Research answers “how JS does it”; product design answers “which page this site ships.” Implementation still requires an explicit create-tool request, template copy, and coverage gates.

## Notes / boundaries
- No catalog, Page.ts, or vendor copies in this round.
- Related tools at launch may temporarily point at `file-metadata-analyzer` / `file-hash` until `audio-wav-mp3` and `audio-recorder` exist.
- Chat log `dev-logs/2026-09/2026-09-09-07-35-js-sound-editor-implementation.md` is the earlier survey; prefer the folder for ongoing work.

[actions]
- Added `docs/sound-editor/README.md`, `00-request.md`, `01-js-implementation-research.md`, `02-product-design.md`
- Linked from `docs/2026-07-28-tool-direction.md`, `docs/2026-08-09-browser-av-client-solutions.md`, `docs/2026-08-09-browser-media-ebook-pilot-options.md`, `docs/2026-06-23-10-15-js-media-conversion-feasibility.md`
