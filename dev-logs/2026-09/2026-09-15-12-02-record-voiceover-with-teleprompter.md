Date: 2026-09-15 12:02
Summary: Added a ten-language teleprompter that records narration while the script scrolls.
Visibility: people

[question]
立项和实现下一个工具，不要再询问，直接执行相关的命令，直到工具上线到生产环境

## Tool links (English)
- https://onlinefreetools.org/tools/record-a-voiceover-with-a-teleprompter

[try to solve]
## Context

The next unfinished sound-roadmap job was S8: read a prepared script while recording a voiceover. It needs a script input and a rehearsal workflow in addition to the microphone controls of the earlier memo recorder.

## Process

The tool-coverage-pass and tool-token-efficiency workflows established the scenario, same-intent keyword mapping and ten locale briefs before implementation. Search observations distinguished fixed-speed prompters, voice-following tools and video recorders. This page deliberately implements microphone narration with adjustable visual scrolling. It does not claim search volume or unique market features.

The page keeps the script in a large reading area with adjustable text size and speed. Rehearsal does not request microphone access. Recording starts the script from the top, while Pause and Resume affect both the audio and text. Reaching the last paragraph stops scrolling but leaves the microphone running until the user stops or the active recording reaches ten minutes.

## Implementation decisions

Text is displayed with textContent, so pasted markup stays inert. The recording uses the browser's actual MIME type and corresponding file extension. Script and audio remain on the device and are not uploaded. They are not persisted across reloads. A previous audio result remains available if microphone permission is refused or cancelled; beginning a successful new take replaces it.

The sample consists of three localized practice paragraphs plus a generated three-second tone WAV. It demonstrates playback and download without pretending to read the script aloud. Entering the page does not automatically play sound, scroll the text or request permission.

## Validation

Chromium tests with a synthetic microphone verified real recording, playable WebM output, synchronized pause/resume, exclusion of paused time, stopping while paused, delayed permission cancellation, denied permissions, empty scripts and literal rendering of markup-like text. Hidden-tab pause and the active-time limit were tested, with the limit exercised by advancing the test clock. All ten locales passed mobile width, sample, H1 and hreflang checks, including right-to-left Arabic. No browser JavaScript exceptions occurred in the final run.

A mobile test exposed a French footer overflow, fixed with wrapping scoped to this page. The tests use simulated audio input; physical microphones and Safari remain outside this run's coverage.

## Notes and references

[A2Z Tools](https://a2z.tools/teleprompter) was reviewed as a combined prompting/recording baseline, and [Screenrecording.app](https://screenrecording.app/tools/teleprompter) as a standalone prompter. Browser behavior was checked against [MDN MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder) and [MDN getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

The release uses a full site build, R2 S3 API uploads and GitHub-triggered Cloudflare deployment. Credentials stay outside Git. Release validation checks the R2 content hash, live Worker version and production page responses.

[actions]
- Added S8 brief, standalone tool page, icon and ten locale dictionaries.
- Added rehearsal, adjustable scrolling, synchronized recording controls and downloadable audio.
- Updated the tool list and sound-roadmap implementation status.
- Ran phased coverage gates and native browser recording, failure-path and mobile-layout tests.
