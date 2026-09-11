/**
 * i18n tool shard (make-a-seamless-audio-loop / en).
 * Master H1 is the job sentence; audio looper / loop maker absorb in desc and FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** English master copy for making a seamless looping audio file. */
const en: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'Advanced settings (optional)',
  tool_make_a_seamless_audio_loop_article:
    'Make a seamless audio loop in this tab: open a local file, mark Start and End, set Crossfade, click Make loop, then Export WAV or Export MP3. Equal-power wrap blends the tail into the head so the join is less likely to click. Files stay on your device. An audio looper or loop maker job is this one loop, not a full waveform editor.',
  tool_make_a_seamless_audio_loop_bitrate: 'MP3 bitrate',
  tool_make_a_seamless_audio_loop_bitrate_hint: 'Default 128 kbps. Used only when you click Export MP3.',
  tool_make_a_seamless_audio_loop_choose_file: 'Choose an audio file',
  tool_make_a_seamless_audio_loop_clear: 'Clear',
  tool_make_a_seamless_audio_loop_crossfade: 'Crossfade (ms)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    'Default 50 ms. Use 20 ms for drums; 200–500 ms for pads, drones, and ambient beds.',
  tool_make_a_seamless_audio_loop_desc:
    'Make a seamless audio loop on your device: crossfade a local clip so it repeats without a click, then export WAV or MP3—not uploaded.',
  tool_make_a_seamless_audio_loop_description:
    'Make a seamless audio loop on your device: crossfade the end of a local clip into its start, then download WAV or MP3—the file is not uploaded. Steps: Open file, mark Start and End, set Crossfade (default 50 ms), Make loop, Play to hear the join, Export WAV or Export MP3. Example: 1.00–3.00s of a 5s sample with 50 ms equal-power wrap becomes about 1.95s. Searches for seamless loop, audio loop crossfade, loop audio, audio looper, loop maker, loop mp3, or looping background music are this same wrap-and-export. Not a full waveform editor; two-song DJ crossfades, ringtone M4A, and YouTube links are out of scope.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'You must have the right to process the file. This page does not grant music licenses and does not fetch streams.',
  tool_make_a_seamless_audio_loop_drop_hint: 'Or drop a WAV, MP3, M4A, or OGG here. Processing stays in this tab.',
  tool_make_a_seamless_audio_loop_empty: 'Choose an audio file first.',
  tool_make_a_seamless_audio_loop_end: 'End (seconds)',
  tool_make_a_seamless_audio_loop_equal_power: 'Equal-power crossfade',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'On by default so the join keeps a steadier loudness. Turn off for a linear blend.',
  tool_make_a_seamless_audio_loop_err_bake:
    'Baked output would be longer than about 3 minutes. Lower Repeats or shorten the region.',
  tool_make_a_seamless_audio_loop_err_caps:
    'This file is over the size or duration cap for this device (about 40 MB / 20 min on desktop, 20 MB / 8 min on a narrow screen). Trim it elsewhere first or use a shorter file.',
  tool_make_a_seamless_audio_loop_err_decode:
    'This browser could not decode that file. Try WAV or MP3, or a clip without DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'Nothing to loop. Load a file or the sample first.',
  tool_make_a_seamless_audio_loop_err_fade:
    'Crossfade must be shorter than the selected region. Lower the milliseconds or lengthen Start–End.',
  tool_make_a_seamless_audio_loop_err_lame: 'The MP3 encoder failed to load. Stay on this tab and try Export MP3 again.',
  tool_make_a_seamless_audio_loop_err_range: 'End must be after Start, inside the decoded duration.',
  tool_make_a_seamless_audio_loop_err_video:
    'This page does not accept video as the main input. Extract audio first, then make the loop from the sound file.',
  tool_make_a_seamless_audio_loop_example:
    'Load sample builds a 5.00-second tone in memory, marks Start 1.00 and End 3.00, uses 50 ms equal-power wrap, then Make loop writes about 1.95 seconds (one cycle). Export WAV writes PCM; Export MP3 uses 128 kbps unless you change Advanced settings.',
  tool_make_a_seamless_audio_loop_example_title: 'Example',
  tool_make_a_seamless_audio_loop_export_mp3: 'Export MP3',
  tool_make_a_seamless_audio_loop_export_wav: 'Export WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    'No. Decode and the wrap run in this tab. Scripts load from this site. The file is not posted to our servers.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'No. An audio looper, loop maker, seamless loop, loop audio, loop mp3, loop wav, or looping background music search is this tool: mark a region, crossfade the join, then Export WAV or Export MP3.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'Crossfade blends the tail of the region into its head. Default 50 ms equal-power wrap. Short fades (about 20 ms) suit drums; 200–500 ms suit pads and ambient loops.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'The exported cycle is shorter than Start–End by the crossfade length because the overlap is mixed once. A 2.00s region with 50 ms fade is about 1.95s.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV keeps the looped PCM for game engines that loop a file. MP3 is smaller (default 128 kbps) and loads the encoder only when you click Export MP3.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'Default Repeats is 1 (one cycle for a player that can loop). Open Advanced settings (optional) for 4 or 8 baked copies if your livestream app will not loop. Output longer than about 3 minutes is refused. This is not a 10-hour generator.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'No. This page wraps one region onto itself. Crossfading two different songs is a different job. It is not a full online sound editor. It does not write iPhone M4A ringtones, auto-find loop points, detect BPM, or rip YouTube.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'Desktop: about 40 MB or 20 minutes. Narrow screens: about 20 MB or 8 minutes. Over-cap files are refused before decode, not silently truncated.',
  tool_make_a_seamless_audio_loop_faq_q1: 'Is my audio uploaded?',
  tool_make_a_seamless_audio_loop_faq_q2: 'I searched audio looper, loop maker, seamless loop, or loop audio. Is that another tool?',
  tool_make_a_seamless_audio_loop_faq_q3: 'How does audio loop crossfade remove the click?',
  tool_make_a_seamless_audio_loop_faq_q4: 'Why is the export shorter than the region I marked?',
  tool_make_a_seamless_audio_loop_faq_q5: 'Should I export WAV or MP3?',
  tool_make_a_seamless_audio_loop_faq_q6: 'Can I bake several repeats for a livestream bed?',
  tool_make_a_seamless_audio_loop_faq_q7: 'Is this a DJ crossfade, sound editor, ringtone maker, or AI loop finder?',
  tool_make_a_seamless_audio_loop_faq_q8: 'How large a file can I process?',
  tool_make_a_seamless_audio_loop_how_body:
    'Mark the region to repeat, blend the end into the start with a crossfade, then download WAV or MP3 without uploading the file.',
  tool_make_a_seamless_audio_loop_how_item_1: 'Open an audio file (or click Load sample).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'Click or drag the waveform (or type Start and End). Set Crossfade if 50 ms is not right (chips: 20 / 50 / 200 / 500 ms).',
  tool_make_a_seamless_audio_loop_how_item_3: 'Click Make loop.',
  tool_make_a_seamless_audio_loop_how_item_4: 'Click Play to hear the join loop, then Export WAV or Export MP3.',
  tool_make_a_seamless_audio_loop_how_title: 'How it works',
  tool_make_a_seamless_audio_loop_hud_decode: 'Decoding the file in this tab…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'Decoded. Set Start, End, and Crossfade, then click Make loop.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: '{s}s elapsed',
  tool_make_a_seamless_audio_loop_hud_encode: 'Encoding MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'Fix the file, times, or crossfade, then Make loop again.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'Make loop stopped',
  tool_make_a_seamless_audio_loop_hud_loop: 'Wrapping the tail into the head…',
  tool_make_a_seamless_audio_loop_hud_next: 'Finished. Next step: Play to hear the join, then Export WAV or Export MP3.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'Finished. Your MP3 download should start.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'Decode',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'Encode',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'Loop',
  tool_make_a_seamless_audio_loop_hud_title: 'Loop progress',
  tool_make_a_seamless_audio_loop_hud_working: 'Starting…',
  tool_make_a_seamless_audio_loop_make: 'Make loop',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_make_a_seamless_audio_loop_pause: 'Pause',
  tool_make_a_seamless_audio_loop_play: 'Play',
  tool_make_a_seamless_audio_loop_preview_hint:
    'Click or drag the waveform to set Start and End. After Make loop, Play repeats the result so you can hear the join.',
  tool_make_a_seamless_audio_loop_repeats: 'Repeats (baked copies)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    'Default 1 cycle for engines that loop a file. Use 4 or 8 if the player will not loop. Output over about 3 minutes is refused.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'Loop is {dur}s from {start}–{end}s with {fade} ms crossfade ({n} repeat(s)). Export is ready.',
  tool_make_a_seamless_audio_loop_rules_body:
    'The region is copied, then an equal-power (or linear) wrap mixes the last fade samples into the first. Output length is region minus fade. Repeats tile that cycle end-to-end. WAV writes 16-bit PCM. MP3 is CBR at the selected bitrate.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'Desktop cap is about 40 MB or 20 minutes; a narrow screen uses about 20 MB or 8 minutes. Over-cap files are refused, not truncated.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'Files stay on your device; they are not uploaded to a server. The MP3 encoder loads from this site only after Export MP3.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'Crossfade must be shorter than the region. The exported cycle is shorter by that overlap. Equal-power is the default curve.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'Decode depends on the browser. DRM, some codecs, and video containers fail with an explicit error.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'This page does not mix two songs, write M4A, detect BPM, auto-find loop points, or fetch YouTube. One file, one region, one loop.',
  tool_make_a_seamless_audio_loop_rules_title: 'Rules you should expect',
  tool_make_a_seamless_audio_loop_sample: 'Load sample',
  tool_make_a_seamless_audio_loop_start: 'Start (seconds)',
  tool_make_a_seamless_audio_loop_status_done: 'Done.',
  tool_make_a_seamless_audio_loop_title: 'Make a seamless audio loop',
  tool_make_a_seamless_audio_loop_usecase_1:
    'Turn a two-second game bed into a seamless audio loop and export WAV for an engine that repeats the file.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'Build a livestream pad: mark the groove, keep 50 ms crossfade, bake 8 repeats in Advanced settings, export MP3.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'Smooth an ambient or drone loop with a 200–500 ms audio loop crossfade so the join disappears.',
  tool_make_a_seamless_audio_loop_usecases_title: 'Good fits',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'Built for one wrap-and-export, with a fade you can hear and caps you can check on the page.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'Decode and the wrap stay in this tab; Export MP3 is the first time an encoder script loads.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'Equal-power crossfade is on by default; 20 / 50 / 200 / 500 ms chips match drums versus pads.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'Play loops the result after Make loop so you can judge the join before download.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'Over-size files and baked output longer than about 3 minutes are refused instead of silently truncated.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'Why choose our Make a seamless audio loop tools',
  tool_make_a_seamless_audio_loop_zerocross: 'Snap Start and End to a nearby zero crossing',
  tool_make_a_seamless_audio_loop_zerocross_hint: 'On by default. Helps the region edges before the wrap. Turn off for sample-accurate edges.',
};
export default en;
