Date: 2026-09-30 19:44
Summary: Subtitle deep scan found no long-gap or locale-gap tool; the priority is verifying whether the existing audio-to-SRT page really transcribes files, then a single subtitle converter page as the cluster base, with last round's two subtitle P1 candidates downgraded to P2.
Visibility: project

[question]
专项调研字幕工具

[try to solve]
## Context
Follow-up to the same-day industry gap scan, which had listed two subtitle candidates as P1: fixing out-of-sync subtitles and checking reading speed. The user asked for a dedicated study of subtitle tools. This was planning only: no tool pages, no `work-tasks/`, no deploy.

## Process
1. Inventoried subtitle-related slugs. The site has `make-srt-subtitles-from-an-audio-file` and `transcribe-an-audio-file-to-text`, and no tool that processes existing SRT/VTT files.
2. Read the SRT page source. Its header comment says there is no built-in Whisper/wasm, that timings are estimated from recognition events, and that file input relies on playback/loopback with a microphone fallback.
3. Cross-checked `docs/seo/reviews/2026-09-21/tool-backlog-priority.md`. It flags that the transcribe page calls `recognition.start()` without an audio track, which per MDN listens to the microphone.
4. Checked vendored engines:
   - available: tesseract, diff, docx, xlsx, jszip;
   - absent: transformers.js/Whisper, ffmpeg.wasm, mediabunny, a Matroska demuxer, OpenCC.

   Existing video tools use captureStream + MediaRecorder, which records in real time and outputs WebM.
5. Ran 23 WebSearch top-5 checks:
   - formats, bilingual merge, SDH cleanup, encoding repair, ASS to SRT, TXT to SRT;
   - burn-in, MKV extraction, in-browser Whisper, LRC, SCC, translation;
   - sync pages in es/de/ja/ru/ar, hardsub OCR;
   - PGS to SRT, subtitle diff, word count, DOCX/XLSX export, Chinese simplified/traditional conversion.

## Root cause / analysis
- Subtitle tooling is dominated by dedicated suites that publish dozens of browser-local pages in many languages: subtitlekit, AllSubConverter, gottrix, subvideo.ai, CutConvert, SubExtractor, maestra, formatter. Every category checked already had 5+ local competitors, including non-English sync pages.
- The previous IG idea for out-of-sync fixing (two-point calibration plus fps presets) is already implemented by metool, voice2sub and syncflow. CPS/CPL checking is covered by termiva, socaptions and AllSubConverter (with CJK counting).
- The largest risk is internal: the site's audio-to-SRT page promises file transcription that its engine may not deliver. Competitors already run Whisper in the browser.

## Solution
- Wrote `docs/seo/keywords/subtitles/2026-09-30-subtitle-tools-deep-scan.md` (Chinese). It covers:
  - site status with source evidence;
  - competitor map;
  - category matrix with reusable engines;
  - multilingual observations, including CJK CPS thresholds and legacy encodings;
  - candidate specs, drops and next steps.
- Appended 16 rows to `docs/seo/keyword-daily-pool.tsv`: 15 `defer` (14 `mid_covered`, 1 `head`) and 1 `drop` for downloading platform subtitles. All rows were validated at 15 fields.
- Priorities:
  - P0: verify and then fix or narrow the existing audio-to-SRT and transcribe pages;
  - P1: one `convert-subtitle-files-between-srt-vtt-and-ass` page with encoding repair folded in and no per-format-pair URLs;
  - P2: time sync, reading-speed QC (word count folded in), SDH cleanup, bilingual merge, burn-in, LRC tapping;
  - P3: the rest.
- Registered the `subtitles/` folder in the keywords README. Added a tracker row that records the downgrade of the two earlier P1 rows; the old pool rows were left unchanged.

## Notes / boundaries
- Tiers are drafts from WebSearch top 5. No manual Google/Bing SERP and no Keyword Planner. There are no GSC signals yet: the subtitle pages launched 09-21 and the latest export is 09-10.
- Adding local Whisper needs a POC for repository size and mobile memory, because weights must be vendored under `public/vendor/` and CDNs are forbidden.
- Burn-in via MediaRecorder is real-time only. Pages must disclose duration and WebM output.
- New URLs need explicit user approval before `work-tasks/`.

[actions]
- Added `docs/seo/keywords/subtitles/2026-09-30-subtitle-tools-deep-scan.md`
- Appended 16 rows to `docs/seo/keyword-daily-pool.tsv`
- Updated `docs/seo/keywords/README.md` and `docs/seo/keyword-to-tool-tracker.md`
