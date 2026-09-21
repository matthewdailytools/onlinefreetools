import type { SiteLangDict } from '../../../types';

/**
 * English master copy for remove-the-audio-track-from-a-video (F7 V1).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥5.
 * Mute local video via captureStream (video-only) + MediaRecorder; NOT YouTube download; NOT extract-audio.
 */
const en: SiteLangDict = {
  tool_remove_the_audio_track_from_a_video_title: 'Remove the audio track from a video',
  tool_remove_the_audio_track_from_a_video_desc:
    'Mute a local video in the browser and download a clip without audio. On-device only—no YouTube download.',
  tool_remove_the_audio_track_from_a_video_description:
    'Remove the audio track from a local video in the browser and download a muted clip. Steps: Choose a video, Remove audio, preview, download. Example: load a short sample with tone. Uses captureStream without audio tracks and MediaRecorder—often WebM output; not lossless remux. Never uploaded. No YouTube download.',
  tool_remove_the_audio_track_from_a_video_article:
    'Short clips sometimes need picture only so you can add a new soundtrack later. This page lets you open a local video, capture its video frames without audio tracks, re-encode with MediaRecorder, then download a muted file—often WebM depending on the browser. It does not download YouTube or other URLs, does not extract the soundtrack as an audio file, and does not promise bit-identical MP4 remux without re-encoding. Success depends on whether your browser can play the container and support MediaRecorder. Keep the original; the download is a new file. Work runs on your device.',
  tool_remove_the_audio_track_from_a_video_choose: 'Choose a video file',
  tool_remove_the_audio_track_from_a_video_hint:
    'Drop or choose a local MP4, WebM, MOV or M4V your browser can play. Up to 80 MiB and about 3 minutes. No YouTube or URL paste.',
  tool_remove_the_audio_track_from_a_video_convert: 'Remove audio',
  tool_remove_the_audio_track_from_a_video_download: 'Download muted video',
  tool_remove_the_audio_track_from_a_video_sample: 'Load sample',
  tool_remove_the_audio_track_from_a_video_clear: 'Clear',
  tool_remove_the_audio_track_from_a_video_advanced: 'Mute notes',
  tool_remove_the_audio_track_from_a_video_settings_hint:
    'Browsers usually re-encode via MediaRecorder after dropping audio tracks. Output is often WebM, not a lossless remux of the original MP4. This page never downloads YouTube.',
  tool_remove_the_audio_track_from_a_video_progress: 'Mute progress',
  tool_remove_the_audio_track_from_a_video_read: 'Read',
  tool_remove_the_audio_track_from_a_video_capture: 'Capture',
  tool_remove_the_audio_track_from_a_video_record: 'Record',
  tool_remove_the_audio_track_from_a_video_write: 'Write',
  tool_remove_the_audio_track_from_a_video_done: 'Ready. Preview the muted video, then Download muted video.',
  tool_remove_the_audio_track_from_a_video_failed: 'Could not mute this video. Try a shorter clip your browser can play.',
  tool_remove_the_audio_track_from_a_video_elapsed: '{s}s elapsed',
  tool_remove_the_audio_track_from_a_video_preview: 'Preview muted video',
  tool_remove_the_audio_track_from_a_video_result:
    '{seconds}s · muted · {mime} · {output} KiB',
  tool_remove_the_audio_track_from_a_video_sample_name: 'mute-sample',
  tool_remove_the_audio_track_from_a_video_empty: 'Choose a local video or load the sample first.',
  tool_remove_the_audio_track_from_a_video_empty_state:
    'No video yet. Drop a local file, or click Load sample for a short clip with tone. This tool mutes picture-only output—it does not extract audio and does not download YouTube.',
  tool_remove_the_audio_track_from_a_video_file_label: 'Video: {name}',
  tool_remove_the_audio_track_from_a_video_err_file: 'Choose a supported local video file.',
  tool_remove_the_audio_track_from_a_video_err_format:
    'Unsupported or unplayable video. Use MP4, WebM, MOV or M4V your browser can decode. No YouTube URLs.',
  tool_remove_the_audio_track_from_a_video_err_limit:
    'Use a local video up to 80 MiB and about 3 minutes long.',
  tool_remove_the_audio_track_from_a_video_err_decode:
    'The browser could not play this video. Try another container or a shorter clip.',
  tool_remove_the_audio_track_from_a_video_err_encoder:
    'MediaRecorder could not write a muted video. Try Chrome/Edge or a shorter WebM/MP4.',
  tool_remove_the_audio_track_from_a_video_how_title: 'How to remove the audio track from a video',
  tool_remove_the_audio_track_from_a_video_how_body:
    'Choose a local video, run Remove audio, preview the silent clip, then download—without uploading and without YouTube download.',
  tool_remove_the_audio_track_from_a_video_how_item_1:
    'Choose a local video file (or Load sample for a short clip with tone). Do not paste YouTube links.',
  tool_remove_the_audio_track_from_a_video_how_item_2:
    'Click Remove audio and wait for Read → Capture → Record → Write to finish.',
  tool_remove_the_audio_track_from_a_video_how_item_3:
    'Preview the muted result. Playback should have picture with no soundtrack.',
  tool_remove_the_audio_track_from_a_video_how_item_4:
    'Check the result line, then click Download muted video.',
  tool_remove_the_audio_track_from_a_video_why_choose_title: 'Why choose our Remove the audio track from a video tools',
  tool_remove_the_audio_track_from_a_video_why_choose_item_1:
    'See duration, muted status, MIME type and output KiB before you save.',
  tool_remove_the_audio_track_from_a_video_why_choose_item_2:
    'One clear mute job with honest MediaRecorder limits—not a fake lossless remux promise.',
  tool_remove_the_audio_track_from_a_video_why_choose_item_3:
    'Reading and recording run on your device; the page does not upload your video to process it.',
  tool_remove_the_audio_track_from_a_video_why_choose_item_4:
    'Changing the file clears the old download so you never save a stale muted clip by mistake.',
  tool_remove_the_audio_track_from_a_video_rules_title: 'Mute rules and honest browser limits',
  tool_remove_the_audio_track_from_a_video_rules_body:
    'Each run captures video without audio tracks and re-encodes with MediaRecorder. Output is often WebM. This is not YouTube download, not audio extract, and not guaranteed lossless remux.',
  tool_remove_the_audio_track_from_a_video_rules_item_1:
    'One local video up to 80 MiB and about three minutes. Playback must succeed in your browser first.',
  tool_remove_the_audio_track_from_a_video_rules_item_2:
    'Audio tracks are dropped from the captured stream. Containers and codecs may change versus the source.',
  tool_remove_the_audio_track_from_a_video_rules_item_3:
    'No YouTube, podcast URL, or remote download. Paste is not supported.',
  tool_remove_the_audio_track_from_a_video_rules_item_4:
    'To keep the soundtrack as a file instead, use Extract audio from a video file. To layer new music later, use Mix a voiceover with background music.',
  tool_remove_the_audio_track_from_a_video_example_title: 'Try a short sample clip',
  tool_remove_the_audio_track_from_a_video_example:
    'Load sample builds a short WebM with a tone, then Remove audio runs. The preview should show picture with silence. Playback never starts by itself—press play if you want to check.',
  tool_remove_the_audio_track_from_a_video_usecases_title: 'When this helps',
  tool_remove_the_audio_track_from_a_video_usecase_1:
    'A phone clip needs a silent master before you add a new voiceover or bed elsewhere.',
  tool_remove_the_audio_track_from_a_video_usecase_2:
    'You want picture-only output for social upload without shipping the original room audio.',
  tool_remove_the_audio_track_from_a_video_faq_q1: 'Can I paste a YouTube link?',
  tool_remove_the_audio_track_from_a_video_faq_a1:
    'No. This page only accepts local video files. It never downloads YouTube or other remote media.',
  tool_remove_the_audio_track_from_a_video_faq_q2: 'Is the output the same MP4 with audio stripped losslessly?',
  tool_remove_the_audio_track_from_a_video_faq_a2:
    'Usually not. Browsers re-encode with MediaRecorder after capturing video-only tracks. Output is often WebM and quality may differ.',
  tool_remove_the_audio_track_from_a_video_faq_q3: 'Is this the same as extracting audio?',
  tool_remove_the_audio_track_from_a_video_faq_a3:
    'No. Extract audio keeps the soundtrack as an audio file. This page keeps the picture and removes sound.',
  tool_remove_the_audio_track_from_a_video_faq_q4: 'Why did mute fail on my file?',
  tool_remove_the_audio_track_from_a_video_faq_a4:
    'The browser must be able to play the file and support MediaRecorder for a video MIME type. Try a shorter MP4/WebM or another browser.',
  tool_remove_the_audio_track_from_a_video_faq_q5: 'Is my video uploaded to a server?',
  tool_remove_the_audio_track_from_a_video_faq_a5:
    'No. Reading and recording run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed.',
  tool_remove_the_audio_track_from_a_video_faq_q6: 'How do I add new music after muting?',
  tool_remove_the_audio_track_from_a_video_faq_a6:
    'Prepare audio separately—for example Mix a voiceover with background music—then use a video editor that can attach a new track. This page only removes audio.',
};
export default en;
