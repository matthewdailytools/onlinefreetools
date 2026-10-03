Visibility: project

[question]
增加 video 工具分类，下面放将视频相关工具。然后增量 deploy 和 git push，以及 IndexNow 提交。

## Tool links (English)
- https://onlinefreetools.org/tools/add-an-audio-track-to-a-video
- https://onlinefreetools.org/tools/add-soft-subtitles-to-an-mp4
- https://onlinefreetools.org/tools/batch-compress-video-files
- https://onlinefreetools.org/tools/batch-convert-mkv-files-to-mp4-files
- https://onlinefreetools.org/tools/batch-convert-mov-files-to-mp4-files
- https://onlinefreetools.org/tools/batch-convert-webm-files-to-mp4-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mkv-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mov-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-mp4-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-video-files
- https://onlinefreetools.org/tools/batch-extract-audio-from-webm-files
- https://onlinefreetools.org/tools/batch-extract-frames-from-videos
- https://onlinefreetools.org/tools/batch-trim-video-clips-by-time
- https://onlinefreetools.org/tools/burn-subtitles-into-a-video
- https://onlinefreetools.org/tools/change-video-speed
- https://onlinefreetools.org/tools/compress-a-video-file
- https://onlinefreetools.org/tools/convert-a-mov-file-to-an-mp4-file
- https://onlinefreetools.org/tools/convert-a-video-file-to-a-gif
- https://onlinefreetools.org/tools/convert-a-video-to-an-mp4-with-aac-audio
- https://onlinefreetools.org/tools/convert-a-webm-file-to-an-mp4-file
- https://onlinefreetools.org/tools/convert-an-mkv-file-to-an-mp4-file
- https://onlinefreetools.org/tools/convert-an-mp4-file-to-a-webm-file
- https://onlinefreetools.org/tools/convert-subtitle-files-between-srt-vtt-and-ass
- https://onlinefreetools.org/tools/extract-audio-from-a-mov-file
- https://onlinefreetools.org/tools/extract-audio-from-a-video-file
- https://onlinefreetools.org/tools/extract-audio-from-a-webm-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mkv-file
- https://onlinefreetools.org/tools/extract-audio-from-an-mp4-file
- https://onlinefreetools.org/tools/extract-frames-from-a-video-as-images
- https://onlinefreetools.org/tools/inspect-video-file-tracks
- https://onlinefreetools.org/tools/make-a-waveform-video-from-audio
- https://onlinefreetools.org/tools/make-srt-subtitles-from-a-video-file
- https://onlinefreetools.org/tools/merge-video-clips-in-order
- https://onlinefreetools.org/tools/remove-the-audio-track-from-a-video
- https://onlinefreetools.org/tools/replace-the-audio-in-a-video-file
- https://onlinefreetools.org/tools/rotate-a-video-file
- https://onlinefreetools.org/tools/trim-a-video-clip-and-export

[try to solve]

The catalog already had seven entries with `category: video`, but the home category order and label maps did not include video. Those entries therefore had no category section on the homepage. Thirty other video workflows, including video-to-audio extraction, were still assigned to Developer.

The category maps and labels were updated for ten locales, and all 37 video workflows now have `category: video`. This is a navigation-only change: tool URLs, titles, descriptions, inputs and output behavior are unchanged. The separate topic menu and tool-type taxonomy still use their established fields.

A full site build refreshed each language homepage. The local structural check found `#cat-video` and all 37 expected links in every locale. `npm run verify` passed build, SEO, vendor and taxonomy checks. The pre-existing `scripts/build-site.mjs` whitespace edit and `.DS_Store` changes were left untouched.
