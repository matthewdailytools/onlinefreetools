import type { SiteLangDict } from '../../../types';

/**
 * English master for add-an-audio-track-to-a-video (F7 V2).
 * Rich How≥4 Why≥4 Rules≥4 FAQ≥5. Merge local audio onto local video; NOT YouTube; NOT mute-only; NOT extract-only.
 */
const en: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'Add an audio track to a video',
  tool_add_an_audio_track_to_a_video_desc:
    'Add an audio track to a local video by merging picture with a soundtrack, then download. On-device only—no YouTube download.',
  tool_add_an_audio_track_to_a_video_description:
    'Add an audio track to a local video in the browser by merging picture with a chosen soundtrack, then download the result. Steps: Choose a video and an audio file, Add audio, preview, download. Example: mute clip plus a short WAV bed. Uses captureStream plus MediaRecorder—often WebM; not lossless remux. Never uploaded. No YouTube download.',
  tool_add_an_audio_track_to_a_video_article:
    'Silent or weakly voiced clips often need a new soundtrack before sharing. This page lets you open a local video and a local audio file, capture video frames without the original audio tracks, decode the soundtrack in AudioContext, combine tracks, re-encode with MediaRecorder, then download—often WebM depending on the browser. Output length follows the video; longer audio is cut to match, shorter audio ends early. It does not download YouTube or other URLs, does not only mute without adding sound, and does not extract audio as a standalone file. Success depends on whether your browser can play both files and support MediaRecorder with audio. Keep the originals; the download is a new file. Work runs on your device.',
  tool_add_an_audio_track_to_a_video_choose_video: 'Choose a video file',
  tool_add_an_audio_track_to_a_video_hint_video:
    'Drop or choose a local MP4, WebM, MOV or M4V your browser can play. Up to 80 MiB and about 3 minutes. No YouTube or URL paste.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'Choose an audio file',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'Drop or choose a local WAV, MP3, M4A or similar your browser can decode. Up to 40 MiB.',
  tool_add_an_audio_track_to_a_video_convert: 'Add audio',
  tool_add_an_audio_track_to_a_video_download: 'Download video',
  tool_add_an_audio_track_to_a_video_sample: 'Load sample',
  tool_add_an_audio_track_to_a_video_clear: 'Clear',
  tool_add_an_audio_track_to_a_video_advanced: 'Merge notes',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'Browsers usually re-encode via MediaRecorder after dropping the original audio tracks and attaching your soundtrack. Output is often WebM, not a lossless remux of the original MP4. This page never downloads YouTube.',
  tool_add_an_audio_track_to_a_video_progress: 'Add-audio progress',
  tool_add_an_audio_track_to_a_video_read: 'Read',
  tool_add_an_audio_track_to_a_video_decode: 'Decode',
  tool_add_an_audio_track_to_a_video_merge: 'Merge',
  tool_add_an_audio_track_to_a_video_write: 'Write',
  tool_add_an_audio_track_to_a_video_done: 'Ready. Preview the merged video, then Download video.',
  tool_add_an_audio_track_to_a_video_failed: 'Could not merge audio onto this video. Try shorter files your browser can play.',
  tool_add_an_audio_track_to_a_video_elapsed: '{s}s elapsed',
  tool_add_an_audio_track_to_a_video_preview: 'Preview merged video',
  tool_add_an_audio_track_to_a_video_result:
    '{seconds}s · with audio · {mime} · {output} KiB',
  tool_add_an_audio_track_to_a_video_sample_name: 'add-audio-sample',
  tool_add_an_audio_track_to_a_video_empty: 'Choose a local video and an audio file, or load the sample first.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'No files yet. Drop a local video and a soundtrack, or click Load sample. This tool merges audio onto picture—it does not mute-only, does not extract audio alone, and does not download YouTube.',
  tool_add_an_audio_track_to_a_video_video_label: 'Video: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'Audio: {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'Choose one supported local video and one audio file.',
  tool_add_an_audio_track_to_a_video_err_format:
    'Unsupported or unplayable files. Use common video/audio types your browser can decode. No YouTube URLs.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'Use a local video up to 80 MiB / about 3 minutes, and audio up to 40 MiB.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'The browser could not decode the video or audio. Try another container or a shorter clip.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'MediaRecorder could not write a merged video. Try Chrome/Edge or shorter WebM/MP4 plus WAV/MP3.',
  tool_add_an_audio_track_to_a_video_how_title: 'How to add an audio track to a video',
  tool_add_an_audio_track_to_a_video_how_body:
    'Choose a local video and audio file, run Add audio, preview the merge, then download—without uploading and without YouTube download.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'Choose a local video file and a local audio file (or Load sample). Do not paste YouTube links.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    'Click Add audio and wait for Read → Decode → Merge → Write to finish.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'Preview the result. You should hear the new soundtrack with the picture.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'Check the result line, then click Download video.',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'Why choose our Add an audio track to a video tools',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'See duration, MIME type and output KiB before you save.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'One clear merge job with honest MediaRecorder limits—not a fake lossless remux promise.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'Reading and recording run on your device; the page does not upload your files to process them.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'Changing either file clears the old download so you never save a stale merge by mistake.',
  tool_add_an_audio_track_to_a_video_rules_title: 'Merge rules and honest browser limits',
  tool_add_an_audio_track_to_a_video_rules_body:
    'Each run drops original audio tracks, attaches your soundtrack, and re-encodes with MediaRecorder. Output is often WebM. This is not YouTube download, not mute-only, and not audio extract.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'One local video up to 80 MiB and about three minutes, plus one local audio up to 40 MiB. Playback/decode must succeed first.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'Output length follows the video. Longer audio is truncated; shorter audio ends before the picture does.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'No YouTube, podcast URL, or remote download. Paste is not supported.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'Containers and codecs may change versus the source. Keep originals; the download is a new re-encoded file.',
  tool_add_an_audio_track_to_a_video_example_title: 'Try a short silent clip plus a tone bed',
  tool_add_an_audio_track_to_a_video_example:
    'Load sample builds a short canvas video and a simple tone, then Add audio runs automatically. You should see picture with the new soundtrack. Playback never starts by itself—press play if you want to watch.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'When this helps',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'You have a silent screen recording and a WAV bed—merge them here, then download for sharing.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'You want to replace a weak built-in track with a clearer local soundtrack without installing a desktop editor.',
  tool_add_an_audio_track_to_a_video_faq_q1: 'Can it download YouTube or paste a URL?',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'No. Only local files you already have. There is no YouTube downloader and no remote fetch.',
  tool_add_an_audio_track_to_a_video_faq_q2: 'Is this the same as removing audio from a video?',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'No. Mute/remove is a different job. This page attaches a new soundtrack to the picture.',
  tool_add_an_audio_track_to_a_video_faq_q3: 'Does it extract audio as a separate download?',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'No. Extracting audio from a video is a different tool. Here the result is a video file with merged sound.',
  tool_add_an_audio_track_to_a_video_faq_q4: 'Will the output be the same MP4 as my source?',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'Usually not. Browsers typically re-encode with MediaRecorder, often to WebM. Quality and container can change.',
  tool_add_an_audio_track_to_a_video_faq_q5: 'Is anything uploaded to a server?',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'No. Decode and recording run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed.',
  tool_add_an_audio_track_to_a_video_faq_q6: 'What if my audio is longer than the video?',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'The merge follows video duration. Extra audio past the end of the picture is not kept in the download.',
};
export default en;
