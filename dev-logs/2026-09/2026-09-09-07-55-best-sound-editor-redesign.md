Date: 2026-09-09 07:55
Summary: Re-aimed the sound-editor docs at a best-in-class no-upload waveform editor (EDL, preview, LUFS, RNNoise) instead of a clip trimmer.
Visibility: people

[question]
重新分析和调研，要做一个最好的sound editor

[try to solve]
## Context
Round 1–2 scoped a one-job trimmer (`cut-clip-from-audio-file`) because wavesurfer is not an editor and a DAW looked too large for a catalog tool page. The user then asked to re-research with the goal of shipping the **best** sound editor. That invalidates “trimmer as the product”: people who search *sound editor* need cut/copy/paste, fades, loudness, denoise, undo, and export — not a single region download.

## Process
1. Re-surveyed 2026 browser editors: AudioMass (local, now multitrack, MIT shell), TwistedWave (upload, free mono/5 min), mp3cut/123apps (upload cutter), Kapwing/VEED (account/AI paywall), Wavacity (Audacity WASM, GPL-2).
2. Defined an internal quality bar (Q1–Q13): no upload, stereo, no watermark/time wall, real edits + undo, zero-cross, effect preview, LUFS, RNNoise (speech), tempo without pitch (SoundTouch, not GPL Rubber Band), gold HUD, OS shortcuts, honest format table.
3. Chose architecture: read-only source PCM + edit decision list so undo does not clone whole buffers (AudioMass’s own write-up calls GC crackle from full-buffer copies).
4. Rewrote `docs/sound-editor/` README, 00, 01, 02. Draft slug `edit-audio-on-waveform`. Inventory rows `audio-trim` / `audio-recorder` / `audio-wav-mp3` absorb into that one URL. v1 = full single timeline; v1.5 = voice+bed; v2 ≤4 tracks. Banned embedding Wavacity or forking AudioMass into Page chrome.
5. Updated A.3 and the 2026-06 media feasibility pointer so they no longer describe a trimmer-only page.

## Root cause / analysis
“Best” on the web is not “most tracks.” Cloud editors win on big files and accounts; desktop Audacity wins on plugins. The open lane is **best no-upload everyday editor**: beat AudioMass on preview, metering, a11y, i18n, and shortcuts; beat mp3cut/TwistedWave on privacy and stereo/no paywall. A trimmer cannot occupy that lane. GPL ports (Wavacity, rubberband-wasm) would fail license and site chrome, so “best” has to be a first-party EDL editor with allowlisted libs (lamejs, RNNoise wasm, SoundTouch, lufs-web).

## Solution
Product is one waveform editor page, not three thin audio tools. Shipping order: EDL + waveform + delete/undo + WAV export POC, then previewable FX, then denoise/time-stretch, then two-track. Do not cut preview, undo, zero-cross, or watermark-free export to save time — that would collapse back to the trimmer.

## Notes / boundaries
- Still no `work-tasks/`, catalog, or Page.ts.
- H1 remains a draft until coverage 0b. Head term *sound editor* belongs in title/FAQ, not the URL.
- User-facing copy must not say “best”; the bar is internal QA.
- Older logs in this theme describe the trimmer; this folder is the source of truth.

[actions]
- Rewrote `docs/sound-editor/README.md`, `00-request.md`, `01-js-implementation-research.md`, `02-product-design.md`
- Updated `docs/2026-07-28-tool-direction.md` A.3 and `docs/2026-06-23-10-15-js-media-conversion-feasibility.md`
