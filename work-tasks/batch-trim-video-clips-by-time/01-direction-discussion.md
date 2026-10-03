# 01 — Direction

**Primary direction A: trim multiple videos by the same time interval.** Several independent inputs each produce a separate H.264 MP4, whereas `trim-a-video-clip-and-export` handles one clip. Users provide start/end seconds once. A video shorter than the end is rejected per row with its measured duration; the queue continues. No merged timeline, no storyboard editor, no promise of lossless or keyframe-only copying. A serial bounded queue keeps per-row output and errors and uses OPFS for larger results instead of a huge in-memory ZIP.

Related tools: `trim-a-video-clip-and-export`, `batch-compress-video-files`, `batch-convert-webm-files-to-mp4-files`.
