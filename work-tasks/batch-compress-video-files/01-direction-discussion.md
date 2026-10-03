# 01 — Direction

**Primary direction A: browser media processing.** This is a true batch task: several independent video inputs produce several independent MP4 downloads, whereas `compress-a-video-file` produces one file. The differentiator is a bounded sequential queue, row-level inspection and errors, partial success, and per-file size comparison. Input, output and limits must remain explicit. Reuse the tested Mediabunny/OPFS single-file engine and avoid an in-memory all-output ZIP. Related tools: `compress-a-video-file`, `batch-convert-webm-files-to-mp4-files`, `batch-convert-mov-files-to-mp4-files`.

Red lines: no claim that every video becomes smaller; no promised exact target size; no claim of unlimited files or universal codecs. Model size estimates are only estimates. Large outputs require OPFS and per-file download. The initial preset must correspond to an ordinary "reduce size" task, with advanced height/bitrate controls collapsed.
