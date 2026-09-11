/**
 * i18n tool shard (remove-silence-from-a-recording / en).
 * Master H1 is the job sentence; silence remover / dead air absorb in desc and FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** English master copy for the silence remover. */
const en: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'Advanced settings (optional)',
  tool_remove_silence_from_a_recording_article:
    'Remove silence from a recording in this tab: open a local file, click Remove silence, then Export WAV or Export MP3. Dead air and long pauses are cut; speech is stitched into one shorter file. The file stays on your device.',
  tool_remove_silence_from_a_recording_bitrate: 'MP3 bitrate',
  tool_remove_silence_from_a_recording_bitrate_hint: 'Default 128 kbps. Used only when you click Export MP3.',
  tool_remove_silence_from_a_recording_choose_file: 'Choose an audio file',
  tool_remove_silence_from_a_recording_clear: 'Clear',
  tool_remove_silence_from_a_recording_desc:
    'Cut dead air from a local recording and download one shorter WAV or MP3—stays on the device, not uploaded.',
  tool_remove_silence_from_a_recording_description:
    'Remove silence from a recording on your device: cut dead air and long pauses, keep one shorter file, then download WAV or MP3—the file is not uploaded. Steps: Open a recording, click Remove silence (defaults −40 dB / 0.5 s / 0.15 s keep), Export WAV or Export MP3. Example: a 5.00 s sample with two 1.20 s gaps becomes about 2.90 s. Searches for silence remover, delete silence, cut silence, remove dead air, truncate silence, strip silence, auto cut silence, gap remover, or remove silence from audio are this same one-file job. Not a split-by-silence ZIP, not video mute, not noise reduction.',
  tool_remove_silence_from_a_recording_drop_hint: 'Or drop a WAV, MP3, M4A, or OGG here. Processing stays in this tab.',
  tool_remove_silence_from_a_recording_empty: 'Choose an audio file first.',
  tool_remove_silence_from_a_recording_err_caps:
    'This file is over the size or duration cap for this device (about 40 MB / 20 min on desktop, 20 MB / 8 min on a narrow screen). Shorten it elsewhere first or use a shorter file.',
  tool_remove_silence_from_a_recording_err_decode:
    'This browser could not decode that file. Try WAV or MP3, or a clip without DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'Nothing to process. Load a file or the sample first.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'Nothing left to keep. Lower the threshold (more negative) or raise the minimum silence so speech is not treated as a gap.',
  tool_remove_silence_from_a_recording_err_lame: 'The MP3 encoder failed to load. Stay on this tab and try Export MP3 again.',
  tool_remove_silence_from_a_recording_err_video:
    'This page does not accept video as the main input. It shortens a sound file; it does not mute a video or jump-cut footage.',
  tool_remove_silence_from_a_recording_example:
    'Load sample builds a 5.00-second tone with two 1.20-second silent gaps (0.80 + 1.20 + 0.80 + 1.20 + 1.00). Remove silence at −40 dB / 0.5 s / 0.15 s keep stitches about 2.90 seconds. Export WAV writes PCM; Export MP3 uses 128 kbps unless you change Advanced settings.',
  tool_remove_silence_from_a_recording_example_title: 'Example',
  tool_remove_silence_from_a_recording_export_mp3: 'Export MP3',
  tool_remove_silence_from_a_recording_export_wav: 'Export WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    'No. Decode, detect, and cut run in this tab. Scripts load from this site. The file is not posted to our servers.',
  tool_remove_silence_from_a_recording_faq_a2:
    'No. A silence remover, delete silence, cut silence, remove dead air, truncate silence, strip silence, auto cut silence, gap remover, or remove silence from audio search is this tool: cut long quiet gaps from a local recording and export one shorter WAV or MP3.',
  tool_remove_silence_from_a_recording_faq_a3:
    'Same job, different software. Audacity Truncate Silence shortens passages that stay below a threshold for long enough. This page does that in the browser with defaults −40 dB, 0.5 s minimum, and 0.15 s kept at each gap. It is not an Audacity install guide.',
  tool_remove_silence_from_a_recording_faq_a4:
    'Start with Speech (−40 dB / 0.5 s / 0.15 s keep). Noisy rooms: raise the threshold toward −30 dB and the minimum toward 0.8 s. Quiet studio voice: Gentle (−50 dB). If word endings disappear, make the threshold more negative or raise the minimum so breaths stay.',
  tool_remove_silence_from_a_recording_faq_a5:
    'Trim an audio clip and export is a hand-set start and end. This page also removes quiet gaps in the middle and stitches one file. If you only want to crop edges by hand, use the trimmer.',
  tool_remove_silence_from_a_recording_faq_a6:
    'No. Split-on-silence into many files or a ZIP is a different job. This page always exports one file.',
  tool_remove_silence_from_a_recording_faq_a7:
    'No. Noise reduction keeps the duration and tries to clean hiss. Removing um/uh needs a transcript. Muting a video or YouTube ripping is out of scope. Use a sound file you already have rights to.',
  tool_remove_silence_from_a_recording_faq_a8:
    'Desktop: about 40 MB or 20 minutes. Narrow screens: about 20 MB or 8 minutes. Over-cap files are refused before decode. Wide-dynamic music (quiet passages that are meant to stay) can be cut by mistake—raise the minimum gap or skip this tool.',
  tool_remove_silence_from_a_recording_faq_q1: 'Is my recording uploaded?',
  tool_remove_silence_from_a_recording_faq_q2: 'I searched silence remover, delete silence, dead air, or truncate silence. Is that another tool?',
  tool_remove_silence_from_a_recording_faq_q3: 'How is this different from Audacity Truncate Silence?',
  tool_remove_silence_from_a_recording_faq_q4: 'Which threshold should I use? Will it cut breaths?',
  tool_remove_silence_from_a_recording_faq_q5: 'I only wanted to trim the start and end. Is this the audio trimmer?',
  tool_remove_silence_from_a_recording_faq_q6: 'Does it split the recording into many files?',
  tool_remove_silence_from_a_recording_faq_q7: 'Can it denoise, remove um, mute a video, or rip YouTube?',
  tool_remove_silence_from_a_recording_faq_q8: 'How large a file can I process? What about quiet music?',
  tool_remove_silence_from_a_recording_how_body:
    'Find quiet gaps that are long enough, shorten them, stitch the speech back into one file, then download WAV or MP3 without uploading.',
  tool_remove_silence_from_a_recording_how_item_1: 'Open a recording (or click Load sample).',
  tool_remove_silence_from_a_recording_how_item_2: 'Leave the defaults, or open Advanced settings (optional) to change threshold and minimum silence.',
  tool_remove_silence_from_a_recording_how_item_3: 'Click Remove silence.',
  tool_remove_silence_from_a_recording_how_item_4: 'Click Export WAV or Export MP3.',
  tool_remove_silence_from_a_recording_how_title: 'How it works',
  tool_remove_silence_from_a_recording_hud_cut: 'Cutting gaps and stitching one file…',
  tool_remove_silence_from_a_recording_hud_decode: 'Decoding the file in this tab…',
  tool_remove_silence_from_a_recording_hud_decoded: 'Decoded. Red marks are gaps. Click Remove silence when the settings look right.',
  tool_remove_silence_from_a_recording_hud_detect: 'Measuring quiet windows…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: '{s}s elapsed',
  tool_remove_silence_from_a_recording_hud_encode: 'Encoding MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'Fix the file or settings, then Remove silence again.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'Remove silence stopped',
  tool_remove_silence_from_a_recording_hud_next: 'Finished. Next step: Export WAV or Export MP3.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'Finished. Your MP3 download should start.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'Cut',
  tool_remove_silence_from_a_recording_hud_step_decode: 'Decode',
  tool_remove_silence_from_a_recording_hud_step_detect: 'Detect',
  tool_remove_silence_from_a_recording_hud_step_encode: 'Encode',
  tool_remove_silence_from_a_recording_hud_title: 'Remove silence progress',
  tool_remove_silence_from_a_recording_hud_working: 'Starting…',
  tool_remove_silence_from_a_recording_keep: 'Keep at each gap (seconds)',
  tool_remove_silence_from_a_recording_keep_hint: 'Default 0.15 s so cuts are not jump-cuts. 0 removes the whole gap.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_remove_silence_from_a_recording_min_silence: 'Minimum silence (seconds)',
  tool_remove_silence_from_a_recording_min_silence_hint: 'Default 0.5 s. Shorter pauses between words stay.',
  tool_remove_silence_from_a_recording_pause: 'Pause',
  tool_remove_silence_from_a_recording_play: 'Play',
  tool_remove_silence_from_a_recording_preset_gentle: 'Gentle',
  tool_remove_silence_from_a_recording_preset_hint: 'Speech is the default. Gentle keeps more pauses. Tight cuts more aggressively.',
  tool_remove_silence_from_a_recording_preset_speech: 'Speech',
  tool_remove_silence_from_a_recording_preset_tight: 'Tight',
  tool_remove_silence_from_a_recording_preview_hint: 'Red bands are quiet gaps long enough to cut. Play previews the current file (or the result after Remove silence).',
  tool_remove_silence_from_a_recording_remove: 'Remove silence',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}s → {next}s. Removed {removed}s ({pct}%) in {gaps} gap(s). Export is ready.',
  tool_remove_silence_from_a_recording_rules_body:
    'About every 50 ms the page measures RMS and converts to dB: levelDb = 20 × log10(rms). A stretch below the threshold that lasts at least the minimum silence is shortened to the keep length, then speech is concatenated. WAV is 16-bit PCM. MP3 is CBR at the selected bitrate.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'Speech default: −40 dB, 0.5 s minimum, 0.15 s keep. Noisy room: try −30 dB / 0.8 s / 0.20 s. Quiet studio: −50 dB / 0.4 s / 0.15 s.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'Desktop cap is about 40 MB or 20 minutes; a narrow screen uses about 20 MB or 8 minutes. Over-cap files are refused, not truncated.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'Files stay on your device; they are not uploaded to a server. The MP3 encoder loads from this site only after Export MP3.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'Decode depends on the browser. DRM, some codecs, and video containers fail with an explicit error.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'This page exports one file. It does not write a ZIP of clips, denoise, remove filler words, mute video, or fetch YouTube.',
  tool_remove_silence_from_a_recording_rules_title: 'Rules you should expect',
  tool_remove_silence_from_a_recording_sample: 'Load sample',
  tool_remove_silence_from_a_recording_status_done: 'Done.',
  tool_remove_silence_from_a_recording_threshold: 'Silence threshold (dB)',
  tool_remove_silence_from_a_recording_threshold_hint: 'Default −40 dB. Closer to 0 treats more of the file as silence.',
  tool_remove_silence_from_a_recording_title: 'Remove silence from a recording',
  tool_remove_silence_from_a_recording_usecase_1:
    'Remove dead air from a podcast conversation so the episode plays tighter without splitting it into clips.',
  tool_remove_silence_from_a_recording_usecase_2:
    'Shorten a meeting recording by cutting stretches where nobody spoke, then export one MP3.',
  tool_remove_silence_from_a_recording_usecase_3:
    'Clean thinking pauses out of a voice memo with a silence remover-style pass and keep a single file to send.',
  tool_remove_silence_from_a_recording_usecases_title: 'Good fits',
  tool_remove_silence_from_a_recording_why_choose_body:
    'Built for one shorter file, with a threshold table and seconds-removed line you can check on the page.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'Gaps are cut and speech is stitched into one file; this page does not download a ZIP of clips.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'Speech defaults (−40 dB / 0.5 s / 0.15 s keep) match spoken recordings; the result line shows seconds removed.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'The file stays in this browser tab and is not uploaded; Export MP3 loads the encoder only when you click it.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'Over-size or over-length files are refused before decode instead of a 1 GB promise that can crash the tab.',
  tool_remove_silence_from_a_recording_why_choose_title: 'Why choose our Remove silence from a recording tools',
};
export default en;
