Date: 2026-09-16 03:00
Summary: Convert complete WAV recordings to MP3 with measurable output sizes and browser-only processing.
Visibility: people

[question]
立项和实现下一个sound的工具，全自动执行，命令直接执行，不用询问

## Tool links (English)
- https://onlinefreetools.org/tools/convert-a-wav-file-to-mp3

[try to solve]
## Context
The sound tools already cover trimming, silence splitting, ringtones and recording with a teleprompter. The next eligible table entry after S8 and deferred system capture S9 is P1: turn a complete WAV recording into MP3. This does not require a waveform selection or a ringtone-duration cap.

## Process
The brief defines a single local-file input and a complete MP3 output. Search review found established WAV converters, including [W3Schools](https://www.w3schools.com/tools/tool_wav_to_mp3.php) and [Notevibes](https://notevibes.com/wav-to-mp3). The implementation therefore focuses on observable behavior: header validation, measured file sizes, a real encoded preview and clear compatibility limits. No search-volume estimate is claimed.

Coverage reviews ran before implementation, after English copy and after the remaining nine locales. Each locale has its own wording and FAQ order. Advanced settings contain the bitrate; the action row separates conversion from download.

## Analysis
A WAV extension does not guarantee standard PCM. Before decoding, the tool checks RIFF/WAVE chunks, encoding, block alignment, channel count and duration. It accepts mono/stereo integer PCM at 8, 16, 24 or 32 bits, and 32-bit floating-point WAV. Compressed WAV, WAVE_FORMAT_EXTENSIBLE, RF64, empty audio and surround audio are rejected. Limits are 40 MiB and ten minutes; oversized audio is rejected rather than truncated.

[MDN documents](https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData) that decoding resamples to the context sample rate. The converter explicitly uses 44.1 kHz, keeps the original mono/stereo channel count, clamps samples for the encoder and processes MP3 blocks with regular UI yields. The existing same-origin encoder is reused without adding dependencies.

## Solution
Choose 128, 192 or 320 kbps, convert the complete recording, listen to the MP3 and compare actual sizes before downloading. The default is 192 kbps. A visible progress card reports reading, decoding and encoding with elapsed time; success leaves a download instruction, and failure remains visible. Selecting another file or bitrate invalidates the previous output and releases its object URL.

The automatic example constructs a five-second stereo WAV, then runs the same validation, decoding and encoding path as a user file. It produces a playable MP3 without autoplay. The original WAV is about 861 KiB; the MP3 is about 120 KiB at the default bitrate.

## Verification
The browser integration script is `scripts/tool-modules/test-wav-to-mp3.mjs`. It decodes produced MP3 files again and checks duration, channel count, non-silent samples, output size and bitrate changes. It also exercises supported PCM depths, floating-point input, sample-rate conversion, invalid files, limits, encoder-load recovery, clear behavior and all ten localized pages at a mobile viewport. It checks English and Chinese homepage entry links. Mobile checks exposed a French footer link row wider than 390 pixels; a page-scoped wrapping rule fixes the overflow without changing shared footer source. Arabic tool content has explicit RTL direction.

Required executable checks are the three coverage phases, source and generated-page wiring, the full site build, SEO, vendor tracking, taxonomy and tool isolation. A sandbox restriction on the Git subprocess required running the isolation check outside the sandbox; it passed without bypassing the allowlist. Browser downloads used a workspace cache after the temporary filesystem proved too small.

## Notes and boundaries
MP3 is lossy. Higher bitrate does not make conversion lossless, and small low-rate WAV files can become larger. Output does not preserve tags or artwork. Encoder padding may slightly extend playback time. Files stay in the browser and are not sent to a server, but loading the page and encoder initially needs a connection. Batch conversion and reverse conversion are separate tasks.

This change implements and locally verifies the tool; it does not deploy the site. The production-style link above identifies its intended route.
