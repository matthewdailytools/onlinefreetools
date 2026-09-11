/**
 * i18n tool shard (trim-an-audio-clip-and-export / en).
 * Master H1 is the job sentence; mp3 cutter / cut mp3 absorb in desc and FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** English master copy for the audio trimmer. */
const en: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'Advanced settings (optional)',
  tool_trim_an_audio_clip_and_export_article:
    'Trim audio in this tab: open a local file, set Start and End, click Trim, then Export WAV or Export MP3. Files stay on your device. An audio trimmer or mp3 cutter job is this one cut, not a full waveform editor.',
  tool_trim_an_audio_clip_and_export_bitrate: 'MP3 bitrate',
  tool_trim_an_audio_clip_and_export_bitrate_hint: 'Default 128 kbps. Used only when you click Export MP3.',
  tool_trim_an_audio_clip_and_export_choose_file: 'Choose an audio file',
  tool_trim_an_audio_clip_and_export_clear: 'Clear',
  tool_trim_an_audio_clip_and_export_desc:
    'Trim audio or crop a local clip to start and end, then export WAV or MP3—stays on the device, not uploaded.',
  tool_trim_an_audio_clip_and_export_description:
    'Trim audio on your device: crop a local clip to start and end times, then download WAV or MP3—the file is not uploaded. Steps: Open file, click or drag the waveform (or type Start and End), Trim, Export WAV or Export MP3. Example: keep 1.00–3.00s of a 5s sample as WAV (or 128 kbps MP3). Searches for cut mp3, trim mp3, crop mp3, cut audio, mp3 cutter, mp3 trimmer, audio trimmer, audio cutter, song cutter, music cutter, or wav cutter are this same start–end export. Not a full waveform editor; video files and YouTube links are out of scope.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'Or drop a WAV, MP3, M4A, or OGG here. Processing stays in this tab.',
  tool_trim_an_audio_clip_and_export_empty: 'Choose an audio file first.',
  tool_trim_an_audio_clip_and_export_end: 'End (seconds)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'This file is over the size or duration cap for this device (about 40 MB / 20 min on desktop, 20 MB / 8 min on a narrow screen). Trim it elsewhere first or use a shorter file.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'This browser could not decode that file. Try WAV or MP3, or a clip without DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'Nothing to trim. Load a file or the sample first.',
  tool_trim_an_audio_clip_and_export_err_lame: 'The MP3 encoder failed to load. Stay on this tab and try Export MP3 again.',
  tool_trim_an_audio_clip_and_export_err_range: 'End must be after Start, inside the decoded duration.',
  tool_trim_an_audio_clip_and_export_err_video:
    'This page does not accept video as the main input. Extract audio first, then trim the sound file.',
  tool_trim_an_audio_clip_and_export_example:
    'Load sample builds a 5.00-second tone in memory, sets Start 1.00 and End 3.00, then Trim keeps about 2.00 seconds. Export WAV writes PCM; Export MP3 uses 128 kbps unless you change Advanced settings.',
  tool_trim_an_audio_clip_and_export_example_title: 'Example',
  tool_trim_an_audio_clip_and_export_export_mp3: 'Export MP3',
  tool_trim_an_audio_clip_and_export_export_wav: 'Export WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'No. Decode and slice run in this tab. Scripts load from this site. The file is not posted to our servers.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'No. An mp3 cutter, cut mp3, trim mp3, crop mp3, audio trimmer, audio cutter, cut audio, crop audio, song cutter, music cutter, wav cutter, or clip audio search is this tool: keep a start–end range of a local file, then Export WAV or Export MP3. Cutting an intro is the same Start–End job.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'By default the cut snaps to a nearby zero crossing so the splice is less likely to click. You can turn that off under Advanced settings (optional).',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV keeps the sliced PCM. MP3 is smaller (default 128 kbps) and loads the encoder only when you click Export MP3.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'No. This page only trims start and end, then exports. A full online sound editor / waveform workstation is a later, separate tool.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'You can trim to about 30 seconds, but this page does not write M4A or add an automatic fade. That ringtone spec is a different job.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'No. Video demux and YouTube ripping are out of scope. Use a sound file you already have rights to.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'Desktop: about 40 MB or 20 minutes. Narrow screens: about 20 MB or 8 minutes. Over-cap files are refused before decode, not silently truncated.',
  tool_trim_an_audio_clip_and_export_faq_q1: 'Is my audio uploaded?',
  tool_trim_an_audio_clip_and_export_faq_q2: 'I searched mp3 cutter, cut mp3, trim mp3, song cutter, or audio trimmer. Is that another tool?',
  tool_trim_an_audio_clip_and_export_faq_q3: 'Why does the cut snap? I hear a click on other sites.',
  tool_trim_an_audio_clip_and_export_faq_q4: 'Should I export WAV or MP3?',
  tool_trim_an_audio_clip_and_export_faq_q5: 'Is this an online sound editor?',
  tool_trim_an_audio_clip_and_export_faq_q6: 'Can I make an iPhone M4A ringtone?',
  tool_trim_an_audio_clip_and_export_faq_q7: 'Can I extract audio from a video or YouTube?',
  tool_trim_an_audio_clip_and_export_faq_q8: 'How large a file can I trim?',
  tool_trim_an_audio_clip_and_export_how_body:
    'Keep only the part between Start and End, then download WAV or MP3 without uploading the file.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'Open an audio file (or click Load sample).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'Click or drag on the waveform (or type Start and End) to mark the part to keep.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'Click Trim.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'Click Export WAV or Export MP3.',
  tool_trim_an_audio_clip_and_export_how_title: 'How it works',
  tool_trim_an_audio_clip_and_export_hud_decode: 'Decoding the file in this tab…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'Decoded. Set Start and End, then click Trim.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: '{s}s elapsed',
  tool_trim_an_audio_clip_and_export_hud_encode: 'Encoding MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'Fix the file or times, then Trim again.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'Trim stopped',
  tool_trim_an_audio_clip_and_export_hud_next: 'Finished. Next step: Export WAV or Export MP3.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'Finished. Your MP3 download should start.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'Decode',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'Encode',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'Trim',
  tool_trim_an_audio_clip_and_export_hud_title: 'Trim progress',
  tool_trim_an_audio_clip_and_export_hud_trim: 'Slicing the start–end range…',
  tool_trim_an_audio_clip_and_export_hud_working: 'Starting…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_trim_an_audio_clip_and_export_pause: 'Pause',
  tool_trim_an_audio_clip_and_export_play: 'Play',
  tool_trim_an_audio_clip_and_export_preview_hint: 'Click or drag the waveform to set Start and End. Play previews that range.',
  tool_trim_an_audio_clip_and_export_result_tpl: 'Kept {dur}s ({start}–{end}s). Export is ready.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'Samples between Start and End are copied into a new buffer. Default snap moves each edge to a nearby zero crossing. WAV writes 16-bit PCM. MP3 is CBR at the selected bitrate.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'Desktop cap is about 40 MB or 20 minutes; a narrow screen uses about 20 MB or 8 minutes. Over-cap files are refused, not truncated.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'Files stay on your device; they are not uploaded to a server. The MP3 encoder loads from this site only after Export MP3.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'Decode depends on the browser. DRM, some codecs, and video containers fail with an explicit error.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'This page does not mix tracks, add fades, write M4A, or fetch YouTube. One file, one range, one export.',
  tool_trim_an_audio_clip_and_export_rules_title: 'Rules you should expect',
  tool_trim_an_audio_clip_and_export_sample: 'Load sample',
  tool_trim_an_audio_clip_and_export_start: 'Start (seconds)',
  tool_trim_an_audio_clip_and_export_status_done: 'Done.',
  tool_trim_an_audio_clip_and_export_title: 'Trim an audio clip and export',
  tool_trim_an_audio_clip_and_export_trim: 'Trim',
  tool_trim_an_audio_clip_and_export_usecase_1:
    'Trim audio on a podcast file: skip the 8-second bumper and export MP3 for chat.',
  tool_trim_an_audio_clip_and_export_usecase_2:
    'Keep a 12-second quote from a meeting recording and download WAV for archive.',
  tool_trim_an_audio_clip_and_export_usecase_3:
    'Crop silence from both ends of a voice memo—the same cut people want from an mp3 cutter or crop audio tool.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'Good fits',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'Built for one cut-and-download, with caps and click-reduce you can check on the page.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'Decode and slice stay in this tab; Export MP3 is the first time an encoder script loads.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'Over-size or over-length files are refused before decode instead of silently truncated.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'Zero-cross snap is on by default so splices are less likely to click; you can turn it off.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV and MP3 are separate Export buttons, matching the How steps, with bitrate only in Advanced settings.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'Why choose our Trim an audio clip and export tools',
  tool_trim_an_audio_clip_and_export_zerocross: 'Snap Start and End to a nearby zero crossing',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'On by default. Reduces clicks at the splice. Turn off for sample-accurate edges.',
};
export default en;
