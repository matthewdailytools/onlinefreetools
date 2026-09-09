Date: 2026-09-09 07:35
Summary: Browser sound editors are four stacked layers (decode → waveform UI → AudioBuffer edits → encode); this site should ship a single-track trimmer, not a DAW.
Visibility: people

[question]
调研 sound editor用js怎么实现

[try to solve]
## Context
The user asked how to implement an in-browser sound editor in JavaScript. The site already marked audio as direction A.3 (feasible) and listed three unbuilt slugs: `audio-trim`, `audio-wav-mp3` (POC pending), and `audio-recorder`. Searchers who type “sound editor” usually want a waveform cutter that exports MP3/WAV, not a full DAW. This note records the implementation map so a later tool brief can start from a known stack.

## Process
1. Checked existing project docs: `docs/2026-07-28-tool-direction.md` A.3, `docs/2026-08-09-browser-av-client-solutions.md`, `docs/2026-08-09-browser-media-ebook-pilot-options.md`, inventory rows 159–161.
2. Surveyed current libraries: wavesurfer.js v7 (BSD, waveform + Regions, **not** an editor), AudioMass (MIT, full single-track editor wrapping old WaveSurfer), waveform-playlist / DAWCore (multitrack, React/Tone.js), Mediabunny Conversion.trim (file-level cut without a waveform UI), lamejs / `@breezystack/lamejs` (MP3 encode).
3. Confirmed the hard split: visualization libraries do not slice PCM; export always requires copying `AudioBuffer` channel data (or a Conversion.trim) and writing WAV/MP3 ourselves.
4. Mapped operations to Web Audio primitives: `decodeAudioData`, `Float32Array.subarray` + `set` for cut/copy/paste, `GainNode` / `BiquadFilterNode` / `OfflineAudioContext` for volume and effects.

## Root cause / analysis
A “sound editor” is not one product. Three tiers exist:

| Tier | User job | Typical stack | Fit for this site |
|---|---|---|---|
| 1. Trimmer | Select start/end, keep that clip, download | wavesurfer Regions + AudioBuffer slice + WAV/lamejs | **Yes — maps to planned `audio-trim`** |
| 2. Single-track editor | Cut/copy/paste, fade, normalize, simple FX, undo | AudioMass-style: peaks UI + buffer ops + OfflineAudioContext | Optional later, same URL as trim, extra modes |
| 3. Multitrack DAW | Tracks, mixer, automation, Tone.js | waveform-playlist, AURAL | **No** — SPA-sized, not a one-job tool page |

wavesurfer.js maintainers state it is a player with a waveform. Regions give selection UX only. Export is always: `getDecodedData()` → copy samples between `start * sampleRate` and `end * sampleRate` → encode.

Memory is the real ceiling. `decodeAudioData` loads the whole file as 32-bit float PCM with no progress and no cancel. Stereo 44.1 kHz is about 21 MiB per minute; a one-hour podcast is hundreds of MiB. Any shippable editor must cap duration/file size and say so on the page.

Encoding is a second split. Browsers decode MP3/WAV/OGG/AAC (UA-dependent) but **do not encode MP3**. WAV is a tiny RIFF writer. MP3 needs `@breezystack/lamejs` (LGPL, ~65 KiB gzip) or `@mediabunny/mp3-encoder`. MediaRecorder can emit WebM/Opus without a library but is a poor “save as MP3” story.

For long files where the only job is “cut 10s–25s and re-wrap”, Mediabunny `Conversion.init({ trim: { start, end } })` can avoid holding the full PCM graph. That path is better for convert/cut than for waveform editing, because the UI still needs peaks (or a cheap downsample) to let the user pick times.

AudioMass is MIT and proves the single-track model, but it vendors an old WaveSurfer 2.x tree, custom keyboard map, and its own FX bank. Forking it into a catalog tool page would fight chrome, i18n, vendor lint, and CWV. Reuse the **algorithm** (buffer ops + offline render), not the app shell.

Existing inventory already forbids an Aconvert-style format matrix and a full transcode station. A new `/tools/sound-editor` slug that is only a trimmer would collide with `audio-trim`. Head term “sound editor” should not be the only H1; a scene slug (trim podcast intro, cut ringtone from song) can carry the head term in title/FAQ if coverage later says so.

## Solution
Recommended architecture for a first editor-like page:

```
File (local)
  → ArrayBuffer
  → AudioContext.decodeAudioData → AudioBuffer (source of truth)
  → peaks → wavesurfer.js (or canvas) + RegionsPlugin (selection)
  → edit: copy Float32 channel slices into a new AudioBuffer
  → preview: AudioBufferSourceNode → GainNode → destination
  → export: WAV writer (always) + lazy lamejs MP3 (click-load)
```

Core edit (keep region):

1. `const buf = wavesurfer.getDecodedData()`
2. `startSample = floor(region.start * buf.sampleRate)`
3. Allocate a new `AudioBuffer` with `length = endSample - startSample`
4. For each channel, `out.set(chan.subarray(startSample, endSample))`
5. Encode WAV (16-bit PCM interleaved + 44-byte header) or pass PCM into lamejs

Other ops on the same buffer model:

- Delete region: concatenate `subarray(0, start)` + `subarray(end)`
- Fade in/out: multiply samples by a linear or equal-power ramp
- Normalize: scan peak, scale so peak = 0.99
- Volume: `GainNode` for preview; bake with OfflineAudioContext for export
- EQ / low-pass: `BiquadFilterNode` in an OfflineAudioContext graph
- Undo: stack previous AudioBuffers (or copy-on-write channel arrays); cap stack because each snapshot is large

Vendor and loading (site rules):

- wavesurfer.js + regions plugin → `public/vendor/`, Git-tracked, no CDN
- lamejs loaded only after the user clicks Export MP3 (Tier 2)
- Mediabunny is the later convert/cut engine if WAV/MP3-only is too narrow; MPL-2.0 already noted in AV docs
- Do not ship FFmpeg.wasm for this job (~31 MiB)

Product shape if we later build:

- One URL, one primary job: **select a range and download the clip**
- Advanced settings collapsed: fade, normalize, output format (WAV default / MP3 click-load)
- Related: `audio-wav-mp3`, `audio-recorder` — do not split MP3/AAC/FLAC matrix pages
- Hard limits: e.g. ~20–50 MB or ~10 minutes decoded, Safari decode table in visible copy
- Progress HUD on decode/encode; cancel where possible (encode yes, `decodeAudioData` no — refuse huge files first)

What not to build in v1: multitrack timeline, Tone.js effect rack, MIDI, Autotune, cloud-drive upload, “online Audacity” branding, or embedding AudioMass as an iframe.

## Notes / boundaries
- Catalog has **no** live audio tool yet; this round did not create `work-tasks/` or a page.
- `audio-wav-mp3` remains the listed POC; a trimmer can share decode/export helpers with it.
- wavesurfer v7: wait for `ready` before `addRegion`; `getDecodedData()` is the PCM handle; Regions do not export audio.
- Safari/iOS: AudioContext must start after a user gesture; some AAC/M4A decode paths differ from Chrome.
- YMYL is not involved; still disclose “processing stays in the browser” and format support.

[actions]
- Research only; no catalog, i18n, or page changes
