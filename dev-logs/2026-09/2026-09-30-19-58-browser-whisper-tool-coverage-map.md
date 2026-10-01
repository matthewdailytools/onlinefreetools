Date: 2026-09-30 19:58
Summary: Mapped which tools an in-browser Whisper engine can power on a static Cloudflare site, with the real limits: English-only translation, missed filler words, non-streaming word timestamps, and model files larger than the 25 MiB asset cap.
Visibility: people

[question]
以“在浏览器里跑 Whisper ”作为基础，给出能够覆盖的工具

[try to solve]
## Context
A subtitle-tool review found that the site's "make SRT from an audio file" and "transcribe an audio file" pages rely on the browser SpeechRecognition API. That API listens to the microphone, not to an uploaded file. Competitors already run OpenAI Whisper locally in the browser. The question was: if one shared Whisper module is built, which tools can it honestly support?

## Process
1. Listed the site's 50 audio/video/speech tools from the catalog, to see which could gain a transcript-based feature without a new URL.
2. Checked Whisper features in transformers.js through the project's issue tracker and release notes:
   - segment timestamps;
   - word timestamps, computed with cross-attention and dynamic time warping;
   - automatic language detection;
   - the translate task.
3. Checked speaker diarization in the browser. `diarization-js` is an ONNX port of pyannote community-1, about 33 MB of models. Its embedding model is licensed CC-BY-4.0, which requires attribution.
4. Pulled the real ONNX file sizes from the Hugging Face API for the tiny, base, small and large-v3-turbo models.
5. Ran three competitor checks (top 5 web results each): filler-word removal, editing audio by editing the transcript, and automatic lyric (LRC) alignment.

## Root cause / analysis
Whisper covers more than subtitles, but several limits decide what can be promised on a page:

- **Translation only goes into English.** "Translate subtitles to Spanish" needs a different engine.
- **Filler words are unreliable.** Whisper tends to write clean text. One competitor (navid.me) documents it dropping most "um/uh". A filler remover needs prompting, energy (loudness) analysis and a human review list.
- **Word timestamps arrive only after each 30-second chunk finishes.** Live word-by-word output is not possible, and long pauses stretch the timing of neighbouring words.
- **Diarization is a separate model**, with its own download and licence.
- **Model hosting is the real blocker.** Cloudflare static assets are capped at 25 MiB per file. Even whisper-tiny's 8-bit decoder is 29.3 MB, and whisper-base's is 51.2 MB. The project also forbids loading scripts or assets from CDNs or third-party hosts, so the models must be served from the site's own domain. The options are:
  - split each model file into chunks under 25 MiB, commit them, and reassemble them in the browser;
  - serve them from R2 through the Worker on the same domain;
  - either way, vendor only the JavaScript and WASM runtime under `public/vendor/`.

Competition is not a gap. Filler removers (SnipSound, WordCut, ScribeGrab), transcript editors (audio-editor.app, CATT, Rescript) and a local LRC aligner (subtitlekit) already exist. So new pages must win on honesty and workflow, not novelty.

## Solution
Wrote `docs/seo/keywords/subtitles/2026-09-30-whisper-capability-tool-map.md`. The map covers:

- **Fix two existing pages (P0):** the SRT maker and the audio transcriber. Accept video files, add language auto-detect, add an "English subtitles" option through the translate task, and export TXT/DOCX.
- **Add features to five existing pages:**
  - voice memo recorder: transcribe after recording (P2);
  - teleprompter voiceover: diff the transcript against the script to flag skipped or misread lines (P3);
  - waveform editor: show word blocks on the waveform (P3);
  - MP3 lyrics embedder: draft lyrics automatically (P3);
  - silence remover: only a related link, no change to its job.
- **Four new URLs or options:** remove filler words, edit audio by editing its transcript, auto-caption before burn-in, and an auto-align pass for the LRC maker. All are P2 and all have existing competitors (`mid_covered`).
- **Not recommended as standalone pages:** language detection, translate-to-English, meeting summaries (these need an LLM), live dictation (Web Speech fits better), and translation into non-English languages.

Shared module requirements:
- run inference in a Web Worker, with WebGPU first and WASM as fallback;
- decode input to 16 kHz mono;
- show a progress display for model download, decode, chunk n/N and export;
- cache the model in Cache Storage;
- use tiny as the default model and offer base;
- list known weaknesses honestly on the page.

Recorded 3 `defer` rows in the keyword pool and a decision row in the tracker.

## Notes / boundaries
- Competition levels are drafts from web-search top 5 results; no keyword volume tool was used.
- Next steps: a human decision on model hosting, then a proof of concept. It should run tiny (8-bit) on desktop Chrome with WebGPU, Safari with WASM and a mid-range Android phone, on 5 minutes of Chinese and English audio, and record first-load time, run time, peak memory and timestamp drift.
- No tool pages were changed and no `work-tasks/` were created.

[actions]
- Added `docs/seo/keywords/subtitles/2026-09-30-whisper-capability-tool-map.md`
- Appended 3 rows to `docs/seo/keyword-daily-pool.tsv`
- Updated `docs/seo/keyword-to-tool-tracker.md` and `docs/seo/keywords/README.md`
