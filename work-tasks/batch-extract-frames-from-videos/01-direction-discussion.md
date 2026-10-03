# 01 — Direction

**Primary direction A: extract the same requested timestamps from multiple independent videos.** Several videos, each with its own folder in one ZIP; each image name includes its actual seek time. This differs from the existing single-video frame extractor. Use a serial video-element/canvas queue, enforce per-video and total frame/pixel/output budgets, and skip a too-short or undecodable video without losing prior results. Large inputs are streamed by the browser's media element rather than copied wholesale into JS memory. ZIP output needs a bounded path and OPFS where available.

Related tools: `extract-frames-from-a-video-as-images`, `batch-trim-video-clips-by-time`, `batch-compress-video-files`. No scene detection or transcription in this tool.
