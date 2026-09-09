Date: 2026-09-09 11:40
Summary: On-device celebrity singing is local singing-voice conversion, not cloud TTS; phones infer quantized RVC/SVC graphs while training and likeness rights stay off-device.
Visibility: people

[question]
如何实现手机端实现仿照明星声音唱歌，不依赖云端

[try to solve]
## Context

The question is how to make a phone imitate a celebrity singing a song without sending audio to a server. That job is singing voice conversion (SVC): keep lyrics, melody, and phrasing, change only timbre. It is not text-to-speech, and it is not the speech-only OpenVoice path documented for the browser tool.

Related research in this repo already split three voice-change layers (DSP pitch toys, reference-embedding conversion, trained speaker models), mapped “celebrity AI cover” as a high-demand but legally gated product, and estimated training cost. This note covers the missing piece: the on-device inference architecture.

## Process

The pipeline that actually preserves a tune is:

1. Optional stem split if the input is a mixed commercial track (MDX-Net / MDX23C). Karaoke dry vocal plus backing track skips this.
2. Content encoder (ContentVec / HuBERT) on 16 kHz audio — “which phonemes were sung.”
3. Fundamental-frequency contour (RMVPE for quality, DIO/Harvest for a zero-model fallback) — “how the melody moves.”
4. A generator conditioned on content, F0, and a target singer — RVC / So-VITS-SVC if that singer was fine-tuned offline, or a heavier zero-shot singing model if the user only has a short reference.
5. Overlap-add chunks, align to the instrumental, match loudness, export.

Public 2025 work showed the full split + ContentVec + RVC chain running in Core ML with INT8 weights and Accelerate STFT/iSTFT, with no librosa or WORLD vocoder on device. Android can share the same ONNX graphs via ONNX Runtime Mobile and the Qualcomm QNN execution provider. NNAPI should not be used for new work (deprecated in Android 15).

Model-size order of magnitude: ContentVec ~90–120 MB, one RVC generator ~50–90 MB (smaller after INT8), RMVPE ~10–30 MB, MDX INT8 often ~40–110 MB. Seed-VC’s singing checkpoint is about 200M parameters plus a vocoder — workable on a flagship for offline export, hostile on mid-range RAM and thermals. First launch should download weights into sandbox storage; they must not live in the IPA/APK download.

Training a celebrity checkpoint still happens on a GPU PC (minutes to an hour of compute; data and rights dominate cost). The phone never trains.

## Root cause / analysis

Speech voice conversion without F0 conditioning fails at singing: the timbre may move, the melody will not. Browser WebGPU/WASM is the wrong shell because Neural Engine/NPU access, memory caps, and background-process killing make a three-model singing stack a demo, not a product.

Two timbre strategies are easy to confuse:

- Per-singer RVC: small generator, better singing likeness, requires a pre-trained file per voice. This is the practical mobile path.
- Zero-shot singing (Seed-VC class): a 1–30 s reference, no per-person training, much heavier. Better as “clone my own singing” than as a built-in celebrity pack.

“No cloud” means inference and audio stay on device. A one-time model download is still local inference. Calling a cloning API at runtime is not.

Likeness rights and music copyright are independent gates. Shipping an unauthorized celebrity timbre pack is a product decision the roadmap already marked as out of the main build line, even though the math will run.

## Solution

Ship a native app, not a webpage:

1. Record or import dry vocal; mix against a backing track locally.
2. Run ContentVec + F0 + one imported or downloaded generator in ~5–8 s overlapping chunks.
3. Expose pitch shift (`f0_up_key`) so the user’s range can meet the target singer.
4. Add stem separation only after dry-vocal conversion works.
5. Offer zero-shot singing later, and only for the user’s own reference audio unless a license exists.

Offline export of a few-minute song on a recent flagship is the SLA to sell. Live streaming latency for singing SVC should not be promised.

Full pipeline, sizes, iOS/Android runtimes, and the legal boundary: `docs/sound-editor/08-on-device-celebrity-singing.md`. Training dollars stay in `07-voice-clone-training-cost.md`.

## Notes / boundaries

- This is research. No `work-tasks/` and no site pages were created.
- onlinefreetools.org still should not host celebrity checkpoints on a browser tool page.
- Do not treat OpenVoice-style speech V1 (~66 MB) as a singing product.
- User-facing copy must say the result is a converted cover, not a licensed impersonation.

[actions]
- Added `docs/sound-editor/08-on-device-celebrity-singing.md`
- Updated `docs/sound-editor/README.md` and `docs/sound-editor/00-request.md` for round 9
