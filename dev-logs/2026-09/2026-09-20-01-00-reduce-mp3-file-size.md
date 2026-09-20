Date: 2026-09-20 01:00
Summary: Reduce MP3 attachment size with measured savings and an honest re-encoding workflow.
Visibility: people

[question]
立项和实现下一个sound工具

## Tool links (English)
- https://onlinefreetools.org/tools/reduce-an-mp3-file-size

[try to solve]
## Context
The sound catalog already contains recording, trimming, splitting and three format-conversion jobs. S9 system-audio capture remains deferred in the sound plan. S10 addresses a different task: making an existing MP3 attachment smaller while retaining the whole recording.

## Process
The brief separates file compression from dynamic-range compression. The page offers 64, 96, 128 and 192 kbps, keeps the source channel count by default, and optionally mixes stereo to mono. A generated three-second stereo MP3 at 192 kbps runs through the same compression pipeline on entry. Audio does not autoplay.

The browser inspects MPEG Layer III frames before decoding, enforcing the duration limit before allocating decoded audio. ID3v2 leading tags and ID3v1 trailing tags are recognized. Malformed frames, free-format streams, changing channel layouts and unusual trailing tags are rejected explicitly. Encoding yields between chunks so the progress card remains usable.

## Analysis
Mono does not halve an MP3 at the same total bitrate. It averages left and right, which can also cancel opposite-phase content. Lowering bitrate is what reduces the main byte budget. A source already using a lower bitrate may become larger; a successful encoding is therefore not proof of successful size reduction.

## Solution
The output displays measured input/output KiB, savings, duration and channels. A larger result receives a visible warning. The user can audition the encoded output before downloading. Changes to settings or input revoke the old output and disable download. MP3 re-encoding loses additional detail; tags and cover art are not preserved, and encoder padding can slightly increase duration.

Coverage reviews are recorded in the tool brief. The implementation uses the existing same-origin encoder, with no new dependency or server upload. Full build, mechanical checks and browser acceptance evidence are recorded in `work-tasks/reduce-an-mp3-file-size/notes.md` as they complete.

## Boundaries
This is a local implementation task, not a deployment. The tool accepts one MP3, up to 40 MiB and ten minutes, with one or two channels. It does not promise lossless compression, exact MB targets, batch operation or dynamic-range adjustment. The page and encoder need a connection when first loaded; offline availability is not guaranteed.
