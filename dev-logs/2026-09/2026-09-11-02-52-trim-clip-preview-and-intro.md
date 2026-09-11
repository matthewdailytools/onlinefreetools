Date: 2026-09-11 02:52
Summary: Browser-verified waveform play/drag, a readable selection (dim outside + handles), and the same tool-lead intro as other tools.
Visibility: people

[question]
1、应该增加界面的预览播放，点击界面来选择裁剪。2、没有想其他工具一样的介绍

## Tool links (English)
- https://onlinefreetools.org/tools/trim-an-audio-clip-and-export
Chinese: https://onlinefreetools.org/zh/tools/trim-an-audio-clip-and-export

[try to solve]
## Context
The first ship of `trim-an-audio-clip-and-export` was a start/end number form plus Trim / Export. It did not let the user hear the selection or pick the cut on a waveform. The visible intro was also thinner than sibling tools: H1 had a short `_desc` line, and the long `_description` used by other pages as `.tool-lead` was missing from the body. How / FAQ already existed but sat under an auto-shown gold HUD after `loadSample()`, so they felt absent.

## Process
1. Compared a typical opts tool (`flip-image`): H1, interactive UI, then `<p class="tool-lead">` filled with `_description`, then How / Why / Example / FAQ from `renderToolIgSections`.
2. Added a single-track preview under the dropzone: Play / Pause on the preview chrome (not in the Trim/Export row), a canvas waveform, a selection overlay, and a playhead. Play uses `AudioBufferSourceNode` for the current Start–End range only.
3. Pointer handling: drag near an edge moves that handle; drag on empty canvas paints a new range; a click without drag moves the nearer handle so “click the wave to choose the cut” works.
4. Switched `.tool-lead` to `_description` (same pattern as other tools). Ten locales now say click-or-drag in How step 2 and the preview hint.
5. Stopped opening the gold HUD on the silent in-page sample so the lead, How, and FAQ are not pushed below a progress card. User-initiated Trim / Export still uses Decode / Trim / Encode HUD.
6. Local wrangler kept serving yesterday’s HTML after disk prerender. Root cause was Workers Cache API keyed by `PAGES_CACHE_VERSION`, which survives restart. Fix: gzip the new pages, seed local R2 while wrangler is stopped, bump `PAGES_CACHE_VERSION`, then start `--no-build`.
7. Browser pass on `http://127.0.0.1:8799/zh/tools/trim-an-audio-clip-and-export`: Play toggled to 暂停 and ran the 1–3s range; drag 5%→80% set Start 0.25 / End 4.00; a click moved the nearer handle. First screenshot showed a solid blue block over a constant-amplitude tone. Follow-up: dim unselected audio, draw white start/end handles, peak-normalize the canvas, and give the 5s sample a louder 1–3s envelope so the default cut is visible.

## Root cause / analysis
Preview was never a second product (not a mini DAW). It is the missing input for the same start–end job. The “no intro” report was layout + copy: other tools put the SERP description in `.tool-lead` after the UI; this page did not, and the sample HUD covered the sections that did exist. Local preview also lied until the HTML cache version changed, because R2 updates alone do not bust `caches.default`. A constant 0.22 sine fills every peak column after normalize, so the selection looked like a painted rectangle until the sample envelope changed.

## Solution
Waveform preview + click/drag + Play on the preview bar; `.tool-lead` = `_description`; silent `loadSample()`; dim-outside selection + handles; louder middle on the built-in tone. `lint:tool-page --slug=trim-an-audio-clip-and-export` is green. Verified in the in-editor browser: play, drag-select, intro and How visible. `PAGES_CACHE_VERSION` 4.67.

## Notes / boundaries
- Play stays off the primary Trim / Export row.
- Changing Start/End invalidates the trimmed buffer; Export stays disabled until Trim again.
- Do not iframe AudioMass. Do not related-link Hub slug `edit-audio-on-waveform`.
- After HTML edits, local check is: stop wrangler → `upload:r2:local` → bump or purge Cache API → start. Hard-refresh the tab.

[actions]
- `src/pages/trimAnAudioClipAndExportPage.ts` waveform preview, click/drag, silent sample, dim/handles, sample envelope
- ten-locale How / preview hint; `.tool-lead` uses `_description`
- `work-tasks/trim-an-audio-clip-and-export/02-tool-info.md` How step 2
- `wrangler.jsonc` `PAGES_CACHE_VERSION` 4.67
- prerender + gzip + local R2 seed for this slug
