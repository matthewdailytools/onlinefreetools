# AV topic production QA (https://onlinefreetools.org)

- Started: 2026-10-11T03:55:38.931Z
- Finished: 2026-10-11T03:59:22.371Z
- Tools: 99 (video-editor 37, sound-editor 62)
- pass=98 warn=0 fail=1

## Fail

- **convert-an-aiff-file-to-wav** (sound-editor) — fail: 可见错误: —Conversion progressThis browser could not decode the AIFF or CAF. Support varies—try Chrome/Firefox or export a shorter unprotected file.Elapsed: 0.0s
        
        Read recordingDecode audioEncode WAVfive-second-aiff-demo.aiff — https://onlinefreetools.org/tools/convert-an-aiff-file-to-wav

## Warn

_none_

## Need manual (even if auto pass)

- **edit-audio-on-waveform** (pass): 波形拖拽编辑观感需肉眼
- **record-a-voice-memo-in-the-browser** (pass): 需真实麦克风权限与录音路径
- **record-a-voiceover-with-a-teleprompter** (pass): 需麦克风 + 提词器滚动观感
- **sync-song-lyrics-to-lrc-by-tapping** (pass): 需边听边点的节拍对齐

## Pass summary by topic

### video-editor (37/37 pass)

- pass: add-an-audio-track-to-a-video
- pass: add-soft-subtitles-to-an-mp4
- pass: batch-compress-video-files
- pass: batch-convert-mkv-files-to-mp4-files
- pass: batch-convert-mov-files-to-mp4-files
- pass: batch-convert-webm-files-to-mp4-files
- pass: batch-extract-audio-from-mkv-files
- pass: batch-extract-audio-from-mov-files
- pass: batch-extract-audio-from-mp4-files
- pass: batch-extract-audio-from-video-files
- pass: batch-extract-audio-from-webm-files
- pass: batch-extract-frames-from-videos
- pass: batch-trim-video-clips-by-time
- pass: burn-subtitles-into-a-video
- pass: change-video-speed
- pass: compress-a-video-file
- pass: convert-a-mov-file-to-an-mp4-file
- pass: convert-a-video-file-to-a-gif
- pass: convert-a-video-to-an-mp4-with-aac-audio
- pass: convert-a-webm-file-to-an-mp4-file
- pass: convert-an-mkv-file-to-an-mp4-file
- pass: convert-an-mp4-file-to-a-webm-file
- pass: convert-subtitle-files-between-srt-vtt-and-ass
- pass: extract-audio-from-a-mov-file
- pass: extract-audio-from-a-video-file
- pass: extract-audio-from-a-webm-file
- pass: extract-audio-from-an-mkv-file
- pass: extract-audio-from-an-mp4-file
- pass: extract-frames-from-a-video-as-images
- pass: inspect-video-file-tracks
- pass: make-a-waveform-video-from-audio
- pass: make-srt-subtitles-from-a-video-file
- pass: merge-video-clips-in-order
- pass: remove-the-audio-track-from-a-video
- pass: replace-the-audio-in-a-video-file
- pass: rotate-a-video-file
- pass: trim-a-video-clip-and-export

### sound-editor (61/62 pass)

- pass: add-reverb-to-an-audio-clip
- pass: apply-a-toy-voice-effect-to-a-recording
- pass: batch-convert-audio-files-to-mp3
- pass: batch-convert-mp3-files-to-wav
- pass: batch-make-srt-subtitles-from-audio-files
- pass: batch-normalize-audio-files-to-peak
- pass: batch-reduce-mp3-file-sizes
- pass: batch-remove-silence-from-recordings
- pass: batch-trim-the-same-intro-from-audio-files
- pass: boost-bass-on-an-mp3
- pass: bulk-convert-wav-files-to-mp3
- pass: change-audio-speed-without-changing-pitch
- pass: compress-dynamic-range-of-a-voice-recording
- pass: convert-a-flac-file-to-mp3
- pass: convert-a-wav-file-to-mp3
- fail: convert-an-aiff-file-to-wav
- pass: convert-an-m4a-file-to-mp3
- pass: convert-an-mp3-file-to-wav
- pass: convert-an-ogg-file-to-mp3
- pass: convert-audio-sample-rate-and-bit-depth
- pass: convert-stereo-audio-to-mono
- pass: crossfade-two-audio-files
- pass: de-ess-a-voiceover
- pass: edit-audio-on-waveform
- pass: edit-mp3-title-and-cover-art
- pass: embed-lyrics-in-an-mp3
- pass: eq-a-muffled-voice-recording
- pass: extract-cover-art-from-an-mp3
- pass: fade-in-and-fade-out-an-audio-clip
- pass: generate-a-sine-tone-at-a-frequency
- pass: generate-dtmf-touch-tones
- pass: join-audio-files-in-order
- pass: limit-peaks-so-a-file-does-not-clip
- pass: make-a-30-second-mp3-ringtone
- pass: make-a-nightcore-version-of-a-song
- pass: make-a-quiet-recording-louder
- pass: make-a-seamless-audio-loop
- pass: make-a-short-ui-notification-sound
- pass: make-a-slowed-and-reverb-clip
- pass: make-an-8d-panning-version-of-a-song
- pass: make-srt-subtitles-from-an-audio-file
- pass: match-podcast-loudness-to-minus-16-lufs
- pass: mix-a-voiceover-with-background-music
- pass: mix-binaural-beats-for-focus
- pass: normalize-an-audio-file-to-peak
- pass: record-a-voice-memo-in-the-browser
- pass: record-a-voiceover-with-a-teleprompter
- pass: reduce-an-mp3-file-size
- pass: reduce-background-noise-on-a-voice-memo
- pass: remove-clicks-from-a-recording
- pass: remove-mains-hum-from-a-recording
- pass: remove-silence-from-a-recording
- pass: reverse-an-audio-file
- pass: shift-a-recording-toward-a-higher-or-lower-voice
- pass: shift-the-pitch-of-a-song
- pass: split-a-disc-image-with-a-cue-sheet
- pass: split-a-recording-on-silence
- pass: split-an-audio-file-by-duration
- pass: split-stereo-into-left-and-right-files
- pass: sync-song-lyrics-to-lrc-by-tapping
- pass: transcribe-an-audio-file-to-text
- pass: trim-an-audio-clip-and-export

## Follow-up (strict Convert → Download / Export)

First-pass smoke treated any status/media text as success, so it can over-pass. A second pass dismissed the zh locale banner, waited for sample file chips, then required Download/Export or result media.

### Confirmed working (production, 2026-10-11)

| Slug | Evidence |
| --- | --- |
| extract-audio-from-an-mp4-file | Download enabled; sample `short-mp4-audio-demo.mp4` (~10s) |
| batch-extract-audio-from-mp4-files | Download enabled; `2 MP4 file(s) in queue` |
| convert-an-mkv-file-to-an-mp4-file | Download + media |
| trim-a-video-clip-and-export | Download + media |
| compress-a-video-file | Download + media (~74s) |
| add-soft-subtitles-to-an-mp4 | Download enabled |
| make-srt-subtitles-from-a-video-file | Whisper path finished (~185s); result media present |
| make-srt-subtitles-from-an-audio-file | Whisper path finished (~185s) in first strict batch |
| trim-an-audio-clip-and-export | Headed: after Load sample, **Export WAV / Export MP3** enabled (not named Download) |

### Confirmed defect

| Slug | Evidence |
| --- | --- |
| convert-an-aiff-file-to-wav | Sample `five-second-aiff-demo.aiff` is valid AIFF on disk (`FORM/AIFF`), but **Chrome decodeAudioData fails** (headless and headed). HUD: “This browser could not decode the AIFF or CAF…”. Download stays disabled. |

### Method notes

- Locale suggest dialog (“检测到你的语言是 中文”) can steal clicks; dismiss before Load sample.
- Trim audio export buttons are **Export WAV / Export MP3**, not `*Download*`.
- Mic / waveform drag / tap-to-LRC still need manual checks.
- Does not prove multi-GiB OPFS or wrong-format rejection matrices.

## Method (first pass)

- Chrome + playwright-core against production English tool URLs.
- Load sample (or `loadSample()`), then primary Convert/Extract/… if needed.
- Longer settle for Whisper/SRT (180s) and heavy extract/batch (90s).
- Script: `node scripts/qa/run-av-topic-prod-qa.mjs`
