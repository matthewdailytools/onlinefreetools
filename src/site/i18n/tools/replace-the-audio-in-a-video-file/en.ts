import type { SiteLangDict } from '../../../types';

/**
 * English master for replace-the-audio-in-a-video-file (F7 V3).
 * Rich How≥4 Why≥4 Rules≥4 FAQ≥5. Replace local video soundtrack; NOT YouTube; NOT mute-only; NOT add-only framing.
 */
const en: SiteLangDict = {
  tool_replace_the_audio_in_a_video_file_title: 'Replace the audio in a video file',
  tool_replace_the_audio_in_a_video_file_desc:
    'Replace a local video’s soundtrack with another audio file, then download. On-device only—no YouTube download.',
  tool_replace_the_audio_in_a_video_file_description:
    'Replace the soundtrack of a local video with another audio file in the browser, then download. Steps: Choose a video and a new audio file, Replace audio, preview, download. Example: clip with an old tone swapped for a new WAV. Uses captureStream plus MediaRecorder—often WebM; not lossless remux. Never uploaded. No YouTube download.',
  tool_replace_the_audio_in_a_video_file_article:
    'Wrong BGM or a weak built-in track often needs a full soundtrack swap before sharing. This page opens a local video and a local replacement audio file, drops the original audio tracks, captures picture, decodes the new soundtrack in AudioContext, re-encodes with MediaRecorder, then downloads—often WebM depending on the browser. Output length follows the video; longer audio is cut to match, shorter audio ends early. It does not download YouTube or other URLs, does not only mute without adding sound, and is not framed as “add audio to a silent clip” alone. Success depends on whether your browser can play both files and support MediaRecorder with audio. Keep the originals; the download is a new file. Work runs on your device.',
  tool_replace_the_audio_in_a_video_file_choose_video: 'Choose a video file',
  tool_replace_the_audio_in_a_video_file_hint_video:
    'Drop or choose a local MP4, WebM, MOV or M4V your browser can play. Up to 80 MiB and about 3 minutes. No YouTube or URL paste.',
  tool_replace_the_audio_in_a_video_file_choose_audio: 'Choose a new audio file',
  tool_replace_the_audio_in_a_video_file_hint_audio:
    'Drop or choose a local WAV, MP3, M4A or similar your browser can decode. Up to 40 MiB. This becomes the new soundtrack.',
  tool_replace_the_audio_in_a_video_file_convert: 'Replace audio',
  tool_replace_the_audio_in_a_video_file_download: 'Download video',
  tool_replace_the_audio_in_a_video_file_sample: 'Load sample',
  tool_replace_the_audio_in_a_video_file_clear: 'Clear',
  tool_replace_the_audio_in_a_video_file_advanced: 'Replace notes',
  tool_replace_the_audio_in_a_video_file_settings_hint:
    'Browsers usually re-encode via MediaRecorder after dropping the original audio tracks and attaching your new soundtrack. Output is often WebM, not a lossless remux of the original MP4. This page never downloads YouTube.',
  tool_replace_the_audio_in_a_video_file_progress: 'Replace-audio progress',
  tool_replace_the_audio_in_a_video_file_read: 'Read',
  tool_replace_the_audio_in_a_video_file_decode: 'Decode',
  tool_replace_the_audio_in_a_video_file_merge: 'Replace',
  tool_replace_the_audio_in_a_video_file_write: 'Write',
  tool_replace_the_audio_in_a_video_file_done: 'Ready. Preview the video with the new soundtrack, then Download video.',
  tool_replace_the_audio_in_a_video_file_failed:
    'Could not replace the audio on this video. Try shorter files your browser can play.',
  tool_replace_the_audio_in_a_video_file_elapsed: '{s}s elapsed',
  tool_replace_the_audio_in_a_video_file_preview: 'Preview replaced soundtrack',
  tool_replace_the_audio_in_a_video_file_result: '{seconds}s · replaced audio · {mime} · {output} KiB',
  tool_replace_the_audio_in_a_video_file_sample_name: 'replace-audio-sample',
  tool_replace_the_audio_in_a_video_file_empty: 'Choose a local video and a new audio file, or load the sample first.',
  tool_replace_the_audio_in_a_video_file_empty_state:
    'No files yet. Drop a local video and a replacement soundtrack, or click Load sample. This tool swaps the soundtrack—it does not mute-only, and does not download YouTube.',
  tool_replace_the_audio_in_a_video_file_video_label: 'Video: {name}',
  tool_replace_the_audio_in_a_video_file_audio_label: 'New audio: {name}',
  tool_replace_the_audio_in_a_video_file_err_file: 'Choose one supported local video and one new audio file.',
  tool_replace_the_audio_in_a_video_file_err_format:
    'Unsupported or unplayable files. Use common video/audio types your browser can decode. No YouTube URLs.',
  tool_replace_the_audio_in_a_video_file_err_limit:
    'Use a local video up to 80 MiB / about 3 minutes, and audio up to 40 MiB.',
  tool_replace_the_audio_in_a_video_file_err_decode:
    'The browser could not decode the video or audio. Try another container or a shorter clip.',
  tool_replace_the_audio_in_a_video_file_err_encoder:
    'MediaRecorder could not write a replaced-audio video. Try Chrome/Edge or shorter WebM/MP4 plus WAV/MP3.',
  tool_replace_the_audio_in_a_video_file_how_title: 'How to replace the audio in a video file',
  tool_replace_the_audio_in_a_video_file_how_body:
    'Choose a local video and a new audio file, run Replace audio, preview the swap, then download—without uploading and without YouTube download.',
  tool_replace_the_audio_in_a_video_file_how_item_1:
    'Choose a local video file and a local replacement audio file (or Load sample). Do not paste YouTube links.',
  tool_replace_the_audio_in_a_video_file_how_item_2:
    'Click Replace audio and wait for Read → Decode → Replace → Write to finish.',
  tool_replace_the_audio_in_a_video_file_how_item_3:
    'Preview the result. You should hear the new soundtrack instead of the old one.',
  tool_replace_the_audio_in_a_video_file_how_item_4:
    'Check the result line, then click Download video.',
  tool_replace_the_audio_in_a_video_file_why_choose_title: 'Why choose our Replace the audio in a video file tools',
  tool_replace_the_audio_in_a_video_file_why_choose_item_1:
    'See duration, MIME type and output KiB before you save.',
  tool_replace_the_audio_in_a_video_file_why_choose_item_2:
    'One clear soundtrack-swap job with honest MediaRecorder limits—not a fake lossless remux promise.',
  tool_replace_the_audio_in_a_video_file_why_choose_item_3:
    'Reading and recording run on your device; the page does not upload your files to process them.',
  tool_replace_the_audio_in_a_video_file_why_choose_item_4:
    'Changing either file clears the old download so you never save a stale swap by mistake.',
  tool_replace_the_audio_in_a_video_file_rules_title: 'Replace rules and honest browser limits',
  tool_replace_the_audio_in_a_video_file_rules_body:
    'Each run drops original audio tracks, attaches your new soundtrack, and re-encodes with MediaRecorder. Output is often WebM. This is not YouTube download and not mute-only.',
  tool_replace_the_audio_in_a_video_file_rules_item_1:
    'One local video up to 80 MiB and about three minutes, plus one local audio up to 40 MiB. Playback/decode must succeed first.',
  tool_replace_the_audio_in_a_video_file_rules_item_2:
    'Output length follows the video. Longer audio is truncated; shorter audio ends before the picture does.',
  tool_replace_the_audio_in_a_video_file_rules_item_3:
    'No YouTube, podcast URL, or remote download. Paste is not supported.',
  tool_replace_the_audio_in_a_video_file_rules_item_4:
    'Containers and codecs may change versus the source. Keep originals; the download is a new re-encoded file.',
  tool_replace_the_audio_in_a_video_file_example_title: 'Try swapping an old tone for a new one',
  tool_replace_the_audio_in_a_video_file_example:
    'Load sample builds a short video that already has an old tone, plus a higher new tone, then Replace audio runs automatically. You should hear the new soundtrack with the picture. Playback never starts by itself—press play if you want to watch.',
  tool_replace_the_audio_in_a_video_file_usecases_title: 'When this helps',
  tool_replace_the_audio_in_a_video_file_usecase_1:
    'You recorded with the wrong BGM and have a better local WAV—swap it here, then download for sharing.',
  tool_replace_the_audio_in_a_video_file_usecase_2:
    'You want to replace a weak built-in track with a clearer local soundtrack without installing a desktop editor.',
  tool_replace_the_audio_in_a_video_file_faq_q1: 'Can it download YouTube or paste a URL?',
  tool_replace_the_audio_in_a_video_file_faq_a1:
    'No. Only local files you already have. There is no YouTube downloader and no remote fetch.',
  tool_replace_the_audio_in_a_video_file_faq_q2: 'Is this the same as removing audio from a video?',
  tool_replace_the_audio_in_a_video_file_faq_a2:
    'No. Mute/remove leaves a silent video. This page attaches a new soundtrack in place of the old one.',
  tool_replace_the_audio_in_a_video_file_faq_q3: 'How is this different from adding an audio track to a video?',
  tool_replace_the_audio_in_a_video_file_faq_a3:
    'Adding often targets silent or weakly voiced clips. This page’s job is explicitly to replace the existing soundtrack with another file.',
  tool_replace_the_audio_in_a_video_file_faq_q4: 'Will the output be the same MP4 as my source?',
  tool_replace_the_audio_in_a_video_file_faq_a4:
    'Usually not. Browsers typically re-encode with MediaRecorder, often to WebM. Quality and container can change.',
  tool_replace_the_audio_in_a_video_file_faq_q5: 'Is anything uploaded to a server?',
  tool_replace_the_audio_in_a_video_file_faq_a5:
    'No. Decode and recording run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed.',
  tool_replace_the_audio_in_a_video_file_faq_q6: 'What if my new audio is longer than the video?',
  tool_replace_the_audio_in_a_video_file_faq_a6:
    'The swap follows video duration. Extra audio past the end of the picture is not kept in the download.',
};
export default en;
