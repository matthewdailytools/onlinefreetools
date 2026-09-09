Date: 2026-09-09 08:34
Summary: Speaker-identity voice change in JS is feasible as OpenVoice-style embedding transfer from several reference clips, not as in-page RVC training or pitch shift.
Visibility: people

[question]
变声用js是否可行，用js如何实现根据一系列sound个人的声音实现变声

[try to solve]
## Context
The user asked whether JavaScript can change a voice using a **series of recordings of a specific person** (speaker conversion), not cartoon pitch shift. That is a different job from the waveform editor in `docs/sound-editor/02-product-design.md`.

## Process
1. Split three products: V0 DSP pitch/formant (does not use the person’s clips); V1 tone-color transfer (OpenVoice ONNX, ~66 MB, average embeddings from many refs); V2 RVC **training** (10–50 min dataset, GPU, not a tool page).
2. Confirmed a production browser path: Timeline Studio’s OpenVoice V2 FP16 split (encoder ~1.6 MB, converter ~64 MB), STFT 22050/1024/256, Worker + WebGPU with WASM fallback, IndexedDB for embeddings.
3. RVC in the browser is inference-only if the user already has a .pth/.onnx; `rvc-web-runtime` still needs HuBERT + RMVPE. Training from a folder of wavs is not a JS catalog tool.
4. Wrote `docs/sound-editor/03-voice-conversion-from-speaker-samples.md` with the average-embedding algorithm, pipeline, and product boundary (separate slug, consent disclaimer). Linked from README, `00-request.md`, and editor 02 “never on this slug”.

## Root cause / analysis
“A series of that person’s sounds” is the **target speaker set**. V1 encodes each clip to a 256-d vector and averages them, then converts a **source utterance**. Pitch-shifting the refs never yields identity. V2 quality needs a trained checkpoint, which the page cannot produce from those wavs.

## Solution
If we ever ship this: two dropzones (refs + source), click-load ONNX, gold HUD, localProcessing true, Related to the editor, no celebrity-clone marketing. Do not fold it into `edit-audio-on-waveform` v1.

## Notes / boundaries
- No work-tasks or page this round.
- OpenVoice weights and ONNX Runtime licenses must be checked before vendoring ~66 MB into `public/vendor/`.
- Impersonation/fraud is out of scope; copy must require authorized voice.

[actions]
- Added `docs/sound-editor/03-voice-conversion-from-speaker-samples.md`
- Updated `docs/sound-editor/README.md`, `00-request.md`, `02-product-design.md`
