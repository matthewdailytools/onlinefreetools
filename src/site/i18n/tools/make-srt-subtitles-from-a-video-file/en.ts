import type { SiteLangDict } from '../../../types';

/**
 * English master for make-srt-subtitles-from-a-video-file.
 * Video-first on-device Whisper → SRT; no mic; rejects pure audio (point to audio SRT tool).
 */
const en: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'Make SRT subtitles from a video file',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'Turn a local video with speech into timed .srt cues with on-device Whisper—files stay on your device and are not uploaded to a server.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'Make timed SRT subtitles from a local video file in your browser with an on-device Whisper model—files stay on your device and are not uploaded to a server. Steps: Choose a video with dialogue, play it to check the clip, pick language (or auto), Make SRT, edit cues, download .srt. Example: Load sample runs a short spoken MP4 through Whisper. First run downloads about 45 MB once (then cached). Audio-only WAV/MP3 belongs on the related audio SRT tool. Not burn-in; timings from Whisper segments.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'People searching for video to srt or generate subtitles from video want a downloadable timed caption file from local footage—not a voice-memo page. This tool runs Whisper tiny on-device from same-origin vendor scripts: decode the video audio track in the tab, show a video preview so you can check dialogue against the picture, get segment timestamps, format editable standard SRT, then download. Pure audio files are rejected with a clear link to Make SRT subtitles from an audio file. There is no microphone path here. First run downloads about 45 MB of model assets once and caches them. Cue times are Whisper segment bounds, not frame-perfect forced alignment, and this page does not burn captions into the video.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'Choose a video file',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'Local MP4, WebM, MOV, or other video your browser can decode—up to about 120 MiB and about 2 hours after decode. The file must include a usable audio track. Long clips use sliding windows (window n of N; Stop keeps partial SRT when possible). Pure audio belongs on the related audio SRT tool.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'Speech language',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'Auto lets Whisper detect the spoken language on the soundtrack. Pick a language when you know it for more stable cues.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'Auto-detect',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'English',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'Chinese',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'Spanish',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'Japanese',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'German',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'French',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'Portuguese',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'Indonesian',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'Arabic',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'Russian',
  tool_make_srt_subtitles_from_a_video_file_convert: 'Make SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: 'Stop',
  tool_make_srt_subtitles_from_a_video_file_download: 'Download SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: 'Load sample',
  tool_make_srt_subtitles_from_a_video_file_clear: 'Clear',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'Play original video',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'Honest limits',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'Whisper tiny runs in this tab from same-origin /vendor/whisper files. First Make SRT downloads about 45 MB once, then reuses the cache. Long clips use sliding windows (~2 minutes each). Cue times follow Whisper segments—not frame-level forced alignment. This page accepts video only and does not burn subtitles into the file. For voice notes without picture, use the related audio SRT tool.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'Subtitle progress',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'Subtitle progress',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'Finished. Next step: edit cues if needed, then Download SRT.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'Could not finish SRT',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint: 'Try another video, a shorter clip, or Load sample. Files stay on your device.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'Downloading {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'Starting…',
  tool_make_srt_subtitles_from_a_video_file_model: 'Model',
  tool_make_srt_subtitles_from_a_video_file_decode: 'Decode',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'Transcribe',
  tool_make_srt_subtitles_from_a_video_file_write: 'Write SRT',
  tool_make_srt_subtitles_from_a_video_file_done: 'Ready. Edit the SRT if needed, then Download SRT.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'Could not build SRT. Try Load sample, a clearer spoken video, or a shorter clip under about 2 hours.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: '{s}s elapsed',
  tool_make_srt_subtitles_from_a_video_file_preview: 'SRT preview',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} cues · {chars} characters',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'Choose a local video file with speech on the soundtrack.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'No SRT yet. Drop a video with dialogue and click Make SRT. Load sample runs a short spoken MP4 through on-device Whisper. Play the preview to check the picture against cues. Files stay on your device.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'Video: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'Loading on-device Whisper model (first run may download ~45 MB)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'Decoding the video soundtrack in this tab…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'Transcribing with Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'Transcribing window {n} of {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'Writing timed SRT cues…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'Stopped. Partial SRT kept when cues were already available.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'Choose one local video file, or use Load sample.',
  tool_make_srt_subtitles_from_a_video_file_err_format: 'Unsupported type. Use a common video container your browser can decode (for example MP4 or WebM) with an audio track.',
  tool_make_srt_subtitles_from_a_video_file_err_limit: 'Use video up to about 120 MiB and about 2 hours after decode. Very long clips on low-memory phones may still fail—trim or compress first.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'The browser could not decode a usable audio track from this video. Silent video, missing audio, or an unsupported codec will fail here.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio needed for this path is unavailable in this browser.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'Whisper produced no usable speech text. Try another clip or language setting.',
  tool_make_srt_subtitles_from_a_video_file_err_model: 'Could not load the on-device Whisper model from this site. Stay online for the first download, then retry.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'This page accepts video files only. For WAV, MP3, or other audio-only speech, use Make SRT subtitles from an audio file.',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'How to make SRT subtitles from a video file',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'Choose a local video with speech, preview the clip, run on-device Whisper for timed cues, edit the SRT, then download.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1: 'Choose a local video file (or Load sample), and pick Auto-detect or a speech language.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2: 'Play original video if you want to check dialogue against the picture, then click Make SRT.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'Watch the progress card: Model, Decode, Transcribe (window n of N on long files), then Write SRT. Stop cancels and keeps partial SRT when possible.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'Edit the SRT preview if needed, then Download SRT.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'Why choose our Make SRT subtitles from a video file tools',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'Video-first landing: preview the clip in-page, then build .srt from the soundtrack with on-device Whisper—files are not uploaded to our servers for ASR.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'Clear split from the audio SRT tool: this page rejects pure audio and has no mic path, so video-to-srt searchers are not dropped into a voice-memo UI.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'Honest first-run cost (~45 MB once) plus gold HUD with sliding-window progress on long footage.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'Editable .srt sidecar only—not burned into the video. Related tools cover audio-only SRT and waveform video.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'SRT rules and video Whisper limits',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'Whisper tiny runs in the browser from same-origin assets. The browser must decode a usable audio track from your video. Size and duration caps keep the tab usable.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'Video containers only (for example MP4, WebM, MOV). Audio-only files must use the related audio SRT page.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'About 120 MiB and about 2 hours after decode, transcribed in sliding windows. Longer or larger files show a clear limit error.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'Timestamps are Whisper segment bounds—useful for players—not frame-perfect forced alignment to picture cuts.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'Your video stays on your device for Whisper. This page does not burn captions into the file and does not download captions from video platforms.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'Try the sample video clip',
  tool_make_srt_subtitles_from_a_video_file_example:
    'Load sample fetches a short spoken MP4, runs Make SRT through on-device Whisper, and fills the SRT preview. The page does not auto-run the sample on open so the first ~45 MB model download does not hit every visitor.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'When this helps',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'You have a local interview, talking-head, or screen-recording MP4 and need a downloadable .srt for a player or editor.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'You want to caption a video file without uploading the footage to a cloud ASR site, and you need to preview the picture while checking cues.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'You already exported an MP4/WebM from a camera or editor and need a starter SRT to revise before publishing.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'Is this local Whisper or a cloud upload?',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'Make SRT runs Whisper tiny on-device from same-origin vendor files. Your video stays on your device and is not uploaded to our servers for recognition.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: 'Why is the first Make SRT slow or large?',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'The first run downloads about 45 MB of Whisper tiny model and WASM assets from this site into the browser cache. Later runs reuse that cache. Long videos show Transcribe as window n of N; Stop can cancel and keep a partial SRT.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: 'How is this different from Make SRT subtitles from an audio file?',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'That related tool is for voice notes and other audio-first files (and optional mic dictation). This page is for video files: video preview, video-only accept list, and video-to-srt wording. Same on-device Whisper engine underneath.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: 'Can I use a WAV or MP3 here?',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'No. Pure audio is rejected so searchers who want video to srt are not mixed into an audio UI. Open Make SRT subtitles from an audio file for WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'How accurate are the SRT timestamps?',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'They follow Whisper segment start and end times on the soundtrack—good enough for most players, not frame-perfect sync to every picture cut.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: 'Can this burn subtitles into the video?',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'No. It only downloads a .srt sidecar. It also does not fetch auto-captions from YouTube or other platforms.',
};
export default en;
