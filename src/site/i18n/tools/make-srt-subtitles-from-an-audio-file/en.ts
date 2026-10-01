import type { SiteLangDict } from '../../../types';

/**
 * English master for make-srt-subtitles-from-an-audio-file.
 * On-device Whisper tiny (q8) via same-origin /vendor/whisper; optional Web Speech mic dictation.
 * Rich How≥4 Why≥4 Rules≥4 FAQ≥5; Steps + Example in description; privacy: files stay on device.
 */
const en: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'Make SRT subtitles from an audio file',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'Turn a local speech recording into timed .srt cues with an on-device Whisper model—files stay on your device and are not uploaded to a server.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'Make timed SRT subtitles from a local audio or video file in your browser with an on-device Whisper model—files stay on your device and are not uploaded to a server. Steps: Choose a speech file, pick language (or auto), Make SRT, edit cues, download .srt. Example: Load sample runs a short spoken clip through Whisper and shows SRT. First run downloads about 45 MB of model files once (then cached). Not a cloud API; timings come from Whisper segments.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'People searching for audio to srt or generate subtitles from audio want a downloadable timed caption file from a local recording. This page runs Whisper tiny on-device from same-origin vendor scripts: decode the file in the tab, get segment timestamps, format standard SRT you can edit, then download. Video with an audio track is accepted when the browser can decode it. A Dictate with mic path uses Web Speech only when the browser exposes it—missing speech APIs do not block Make SRT. First run downloads roughly 45 MB of model assets once and caches them. Cue times are Whisper segment bounds, not frame-perfect forced alignment, and this page does not burn captions into video.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'Choose a speech file',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'Local WAV, MP3, M4A, or other audio your browser can decode—up to about 120 MiB and about 2 hours after decode. Long files are transcribed in sliding windows (progress shows window n of N; Stop keeps partial SRT when possible). Video with an audio track is OK when decode succeeds; otherwise you get a clear decode error.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'Speech language',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'Auto lets Whisper detect the language. Pick a language when you know it for more stable cues. Mic dictation uses the same choice when Web Speech is available.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'Auto-detect',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'English',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'Chinese',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'Spanish',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'Japanese',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'German',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'French',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'Portuguese',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'Indonesian',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'Arabic',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'Russian',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'Make SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'Dictate with mic',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'Stop',
  tool_make_srt_subtitles_from_an_audio_file_download: 'Download SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'Load sample',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'Clear',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'Play original audio',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'Honest limits',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'Whisper tiny runs in this tab from same-origin /vendor/whisper files. First Make SRT downloads about 45 MB once, then reuses the cache. Long clips use sliding windows (~2 minutes each) so peak memory stays closer to one window after decode—not the whole file as 16 kHz PCM at once. Cue times follow Whisper segments—not frame-level forced alignment. Mic dictation is optional Web Speech and may use a browser vendor speech service. This page does not burn subtitles into video.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'Subtitle progress',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'Subtitle progress',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: 'Finished. Next step: edit cues if needed, then Download SRT.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'Could not finish SRT',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint: 'Try another file, a shorter clip, or Load sample. Files stay on your device.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'Downloading {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'Starting…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'Model',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'Decode',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'Transcribe',
  tool_make_srt_subtitles_from_an_audio_file_write: 'Write SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: 'Ready. Edit the SRT if needed, then Download SRT.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'Could not build SRT. Try Load sample, a clearer speech file, or a shorter clip under about 2 hours.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: '{s}s elapsed',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'SRT preview',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'Interim (mic)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} cues · {chars} characters',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty: 'Choose a local speech file, or use Dictate with mic when available.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'No SRT yet. Drop a speech file and click Make SRT. Load sample runs a short spoken clip through on-device Whisper. Files stay on your device.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'Media: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'Dictate with mic is unavailable in this browser (no Web Speech API). Make SRT with Whisper still works for local files.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening: 'Whisper returned little or no speech text. Try a clearer recording or pick the spoken language.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic: 'Listening to the microphone… speak clearly, then Stop. Cue times use session elapsed time.',
  tool_make_srt_subtitles_from_an_audio_file_status_model: 'Loading on-device Whisper model (first run may download ~45 MB)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'Decoding audio in this tab…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'Transcribing with Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'Transcribing window {n} of {total}…',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'Writing timed SRT cues…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'Stopped. Partial SRT kept when cues were already available.',
  tool_make_srt_subtitles_from_an_audio_file_err_file: 'Choose one local audio or video file, or use Load sample.',
  tool_make_srt_subtitles_from_an_audio_file_err_format: 'Unsupported media type. Use common audio, or video with an audio track your browser can decode.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit: 'Use media up to about 120 MiB and about 2 hours after decode. Very long clips on low-memory phones may still fail—trim or compress first.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'The browser could not decode this file as audio. Video without a usable audio track, or an unsupported codec, will fail here.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported: 'Web Audio or speech APIs needed for this path are unavailable in this browser.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission: 'Microphone permission was denied. Allow access for Dictate with mic, or use Make SRT on a file instead.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt: 'Whisper produced no usable speech text. Try another clip or language setting.',
  tool_make_srt_subtitles_from_an_audio_file_err_model: 'Could not load the on-device Whisper model from this site. Stay online for the first download, then retry.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'How to make SRT subtitles from an audio file',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'Choose a local speech file, run on-device Whisper to get timed cues, edit the preview, then download .srt.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1: 'Choose a local speech file (or Load sample), and pick Auto-detect or a speech language.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2: 'Click Make SRT. Watch the progress card: Model, Decode, then Transcribe (window n of N on long files), then Write SRT. Stop cancels and keeps partial SRT when possible.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3: 'Optional: click Dictate with mic if your browser supports Web Speech, speak, then Stop.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4: 'Edit the SRT preview if needed, then Download SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title: 'Why choose our Make SRT subtitles from an audio file tools',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'On-device Whisper tiny from same-origin vendor files—your recording is not uploaded to our servers for ASR.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Honest first-run cost: about 45 MB model download once, with a gold progress card for Model / Decode / Transcribe / Write SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3: 'Editable standard .srt preview before download—not plain TXT only, and not burned into video.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'Nearby tools cover plain transcription and waveform video without forcing a hub editor.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'SRT rules and on-device Whisper limits',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'This page runs Whisper tiny in the browser from same-origin assets. Cue times come from model segments. Size and duration caps keep the tab responsive.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'Primary path needs Web Audio decode plus the on-device Whisper stack under /vendor/whisper. Mic dictation needs Web Speech and is optional.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'About 120 MiB file size and about 2 hours after decode, transcribed in sliding windows. Longer or larger files show a clear limit error; low-memory phones may need a shorter clip.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'Timestamps are Whisper segment bounds—useful for players—not frame-perfect forced alignment.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'Your file stays on your device for Whisper. Optional mic dictation may still use a browser vendor speech service—check browser privacy settings.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'Try the sample speech clip',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'Load sample fetches a short spoken WAV, runs Make SRT through on-device Whisper, and fills the SRT preview. The page does not auto-run the sample on open so the first ~45 MB model download does not hit every visitor.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'When this helps',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'You have a local voice note or interview WAV/MP3 and need a downloadable .srt for a player or editor.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'You mainly have audio, or a short clip you treat as sound-first, and want timed subtitles without a cloud ASR upload. For MP4/WebM with picture preview, prefer the related video SRT tool.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'You need a starter SRT from on-device Whisper to edit before publishing, or you fall back to Dictate with mic when you have no file.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: 'Is this local Whisper or a cloud upload?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'Make SRT runs Whisper tiny on-device from same-origin vendor files. Your audio or video file stays on your device and is not uploaded to our servers for recognition. Optional Dictate with mic uses the browser Web Speech API, which may involve a vendor speech service.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: 'Why is the first Make SRT slow or large?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'The first run downloads about 45 MB of Whisper tiny model and WASM assets from this site into the browser cache. Later runs reuse that cache. Progress shows under the Model step. Long files then show Transcribe as window n of N; Stop can cancel and keep a partial SRT.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'How accurate are the SRT timestamps?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'They follow Whisper segment start and end times—good enough for most players and editors, not frame-perfect forced alignment from a desktop studio pipeline.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: 'Is my audio uploaded to a server?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'No for the Whisper file path: decoding and transcription happen in your tab; files stay on your device and are not uploaded to our servers. Stay online only to fetch same-origin model scripts on first use.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: 'How is this different from Transcribe an audio file to text?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'That related tool focuses on plain transcript text. This page formats numbered SRT cues with start and end times for players and editors that expect .srt.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: 'Can this burn subtitles into a video file?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'No. It only downloads a .srt sidecar. For a waveform-style video from audio, see the related waveform video tool—not burned-in captions.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q7: 'I have an MP4 or other video—should I use this page?',
  tool_make_srt_subtitles_from_an_audio_file_faq_a7:
    'This page is audio-first (voice notes, interviews as WAV/MP3, optional mic). For video files with a soundtrack and on-page video preview, use Make SRT subtitles from a video file—same on-device Whisper engine, video-first UI.',
};
export default en;
