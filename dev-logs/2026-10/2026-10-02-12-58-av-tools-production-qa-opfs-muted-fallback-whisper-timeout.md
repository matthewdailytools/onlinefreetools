Date: 2026-10-02 12:58
Summary: Production QA of 14 audio/video tools passed for small files but found five real defects: OPFS-backed MP3 blobs become unreadable, the large WebM/MKV fallback records silence at 2x speed, rAF-only yields stall in hidden tabs, a hard 90 s Whisper load timeout aborts slow downloads, and WebM pages in six locales ship Spanish body copy.
Visibility: people

[question]
对修改和新上线的工具进行线上测试

## Tool links (English)
- https://onlinefreetools.org/tools/batch-convert-mkv-files-to-mp4-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mkv-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mov-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mp4-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-webm-files
- https://onlinefreetools.org/tools/convert-an-mkv-file-to-an-mp4-file
- https://onlinefreetools.org/tools/extract-audio-from-a-mov-file
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/extract-audio-from-a-webm-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mkv-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mp4-file
- https://onlinefreetools.org/tools/make-srt-subtitles-from-a-video-file
- https://onlinefreetools.org/tools/make-srt-subtitles-from-an-audio-file

[try to solve]
## Context

After an incremental deploy (cache version 4.89), every new or modified audio/video tool was tested against the live site rather than a local build. The goal was to check real input → conversion → downloaded output, including wrong-format input, damaged files, partial batches, samples, and large files (about 54–147 MiB).

## Process

1. An in-page QA harness was served from a loopback CORS server. It was imported into each production page through the DevTools `Runtime.evaluate` method. The harness:
   - injects `File` objects via `DataTransfer`;
   - intercepts `<a download>`;
   - probes outputs: WAV header, MP3 frame bitrate, ZIP entries, and MP4 tracks via mediabunny;
   - measures RMS so that silent output is caught.
2. Fixtures covered:
   - H.264 + AAC in MP4/MOV/M4V/MKV;
   - MKV with AC-3, E-AC-3 5.1, FLAC, Opus, and HEVC;
   - WebM with VP8 + Vorbis and VP9 + Opus;
   - no-audio and corrupt files, plus a `.txt`;
   - English and Chinese speech clips;
   - large files in each container.
3. Every result that looked like a failure was re-run in isolation, and the library function was called directly, to separate harness artifacts from product defects.

## Root cause / analysis

**Passed (small and medium files):**
- All five single-file extract pages, all five batch extract pages, both MKV→MP4 pages, and both SRT pages produce correct output.
- Correct output means: the right duration, non-silent RMS, and the selected MP3 bitrate. Batches also de-duplicate ZIP names (`-2`, `-3`) and keep successes when one file fails.
- Format gates reject the wrong containers with redirect messages.
- MKV→MP4 copies H.264/HEVC video and transcodes AAC/Opus/FLAC/AC-3/E-AC-3 5.1 to stereo AAC. It also handles the 147 MiB file.

**Defects found:**

1. **OPFS-backed MP3 becomes unreadable (large MP4/MOV/M4V).**
   - `createMp3Sink().finalize()` returns `file.slice()` from an OPFS file handle and then immediately calls `removeEntry()`.
   - The returned Blob keeps its size, but any later read (ZIP packing, preview, download) throws `NotFoundError`.
   - Reproduced by calling `OftExtractAudio.extractFile()` on a 147 MiB MOV. The result was `mode: mp4-webcodecs-opfs` with size 721 KB, and `blob.arrayBuffer()` threw `NotFoundError`.
   - The code only forced the memory sink under `navigator.webdriver`, so normal Chrome hits the bug.
2. **The MediaElement fallback records silence at double speed (WebM/MKV over 40 MiB or 15 min).**
   - The probe `<video>` is created with `muted = true`, and Chrome feeds silence from a muted element into `MediaElementAudioSourceNode`. Measured RMS was 0.
   - `playbackRate = 2` is captured as-is, so a 15 s clip yields about 7.7 s of sped-up audio.
   - Overriding `muted` restored signal (RMS 0.06) but kept the half duration.
3. **rAF-only yields stall in hidden or unpainted tabs.**
   - `yieldUi()` waits for `requestAnimationFrame`, which does not fire in background tabs, so conversion freezes (seen at "Read 4%").
   - The same pattern exists in the shared library and in the page scripts.
   - A test shim that falls back to `setTimeout` after 50 ms made every stalled case pass.
4. **The Whisper loader uses a hard 90 s total timeout.**
   - On a connection of about 180 KB/s, the roughly 45 MB model needs about 4 minutes, so the load was aborted while still progressing.
   - The background prefetch continued after the abort and kept writing progress text into the error HUD, so users saw "Could not finish SRT" next to a live download percentage.
   - A retry used the HTTP cache and finished in 35 s with an accurate transcript.
5. **Localization leakage.**
   - The WebM single and batch pages in fr/pt/id/ja/ru/ar ship Spanish body copy (about 55 of 57 keys identical to `es`). Only the catalog title and H1 are localized.
   - The MP4 and MOV single pages carry about 6 English keys in every locale.
   - Their non-English `err_format` strings are generic hub text ("use MP4, MOV, WebM…") that contradicts the single-format gate, and the MOV English/Chinese strings were copied from the MP4 page.

**Harness artifacts (not product bugs):**
- Very slow runs while the embedded browser panel was in the background (timer throttling).
- Missed downloads because pages revoke the object URL synchronously after `click()`.

## Solution

Recommended fixes (pending approval):

- **OPFS sink:**
  - Do not remove the OPFS entry in `finalize()`.
  - Instead, clean up stale `out-<timestamp>-*.mp3` entries older than a few hours on the first sink creation of a page session.
  - Alternatively, copy into a memory Blob before removal.
- **Fallback:**
  - Unmute the element. Audio is still routed through a zero-gain node, so nothing is audible.
  - Capture at `playbackRate = 1`, or capture at 2x with `preservesPitch = false` and declare half the sample rate. The first is correct at full bandwidth; the second halves processing time but limits bandwidth.
- **Yields:** resolve on rAF or after a short `MessageChannel`/`setTimeout` fallback, whichever comes first, in the library and in page helpers.
- **Whisper:**
  - Replace the total timeout with an inactivity timeout.
  - Report byte-level progress from the prefetch stream.
  - Ignore progress callbacks from a superseded run.
- **Locales:**
  - Fully rewrite the 12 WebM shards (six locales × two tools) from the English master with locale briefs.
  - Fix the MP4/MOV `err_format` and the English residue keys in every locale.

## Notes / boundaries

- A Blob sliced from an OPFS `File` stays valid only while the entry exists. Delete OPFS scratch files only after every consumer has read them, or copy first.
- Never mute a media element that feeds a Web Audio graph. Silence it with a gain node instead.
- Background tabs pause rAF and clamp timers. Long client-side jobs should not depend on rAF for progress yields.
- Total timeouts on large downloads punish slow networks. Prefer stall detection with real progress events.
- Plain `curl` against the site returned 404; requests with browser `Accept`/`User-Agent` headers returned 200. Use browser-like headers for live spot checks.
- Minor copy issues: "Packed 1 audio files" and "1 cues" use plural forms. whisper-tiny auto-detect produced English gibberish for Chinese speech, while selecting Chinese explicitly worked, so the page should steer non-English users to pick a language.

[actions]
- Live functional tests on https://onlinefreetools.org for all 14 slugs via an in-page harness (`.cache/qa-media/harness.js`, not committed).
- Locale leakage scan: `.cache/qa-media/scan-locale-leak.mjs` (not committed).
