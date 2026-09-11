/**
 * i18n tool shard (make-a-30-second-mp3-ringtone / en).
 * Master H1 is the job sentence; ringtone maker / mp3 to ringtone absorb in desc and FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** English master copy for making a 30-second MP3 ringtone. */
const en: SiteLangDict = {
  tool_make_a_30_second_mp3_ringtone_advanced: 'Advanced settings (optional)',
  tool_make_a_30_second_mp3_ringtone_article:
    'Make a 30-second MP3 ringtone in this tab: open a local song, keep about 30 seconds, add fade in and fade out, click Make ringtone, then Export MP3. Files stay on your device. A ringtone maker or mp3 to ringtone job is this one cut, not a full waveform editor and not an iPhone M4R installer.',
  tool_make_a_30_second_mp3_ringtone_bitrate: 'MP3 bitrate',
  tool_make_a_30_second_mp3_ringtone_bitrate_hint: 'Default 128 kbps. Used only when you click Export MP3.',
  tool_make_a_30_second_mp3_ringtone_choose_file: 'Choose an audio file',
  tool_make_a_30_second_mp3_ringtone_clear: 'Clear',
  tool_make_a_30_second_mp3_ringtone_desc:
    'Make a 30-second MP3 ringtone on your device: cut a local song, fade the edges, then export MP3—not uploaded.',
  tool_make_a_30_second_mp3_ringtone_description:
    'Make a 30-second MP3 ringtone on your device: cut a local song, fade the edges, then download MP3—the file is not uploaded. Steps: Open file, set Start and Duration (default 30s; chips 15 / 20 / 30 / 40), set Fade in 0.5s and Fade out 1.5s, Make ringtone, Play, Export MP3. Example: Start 1.00 and Duration 30 on a 32s sample keeps about 30.00s with those fades. Searches for ringtone maker, mp3 to ringtone, song to ringtone, ringtone cutter, android ringtone, custom ringtone, or fade in fade out ringtone are this same cut-and-fade. Not a full waveform editor; iPhone M4R install, arbitrary-length trim, seamless loops, and YouTube links are out of scope.',
  tool_make_a_30_second_mp3_ringtone_disclaimer:
    'You must have the right to process the file. This page does not grant music licenses, does not write iPhone M4R, and does not fetch streams.',
  tool_make_a_30_second_mp3_ringtone_drop_hint: 'Or drop a WAV, MP3, M4A, or OGG here. Processing stays in this tab.',
  tool_make_a_30_second_mp3_ringtone_duration: 'Duration (seconds)',
  tool_make_a_30_second_mp3_ringtone_duration_hint:
    'Default 30 seconds. Chips set 15 / 20 / 30 / 40 from the current Start. Longer than 40s is refused.',
  tool_make_a_30_second_mp3_ringtone_empty: 'Choose an audio file first.',
  tool_make_a_30_second_mp3_ringtone_err_caps:
    'This file is over the size or duration cap for this device (about 40 MB / 20 min on desktop, 20 MB / 8 min on a narrow screen). Trim it elsewhere first or use a shorter file.',
  tool_make_a_30_second_mp3_ringtone_err_decode:
    'This browser could not decode that file. Try WAV or MP3, or a clip without DRM.',
  tool_make_a_30_second_mp3_ringtone_err_empty: 'Nothing to turn into a ringtone. Load a file or the sample first.',
  tool_make_a_30_second_mp3_ringtone_err_fade:
    'Fade in plus fade out must be shorter than Duration. Lower the fades or lengthen the clip.',
  tool_make_a_30_second_mp3_ringtone_err_lame: 'The MP3 encoder failed to load. Stay on this tab and try Export MP3 again.',
  tool_make_a_30_second_mp3_ringtone_err_long:
    'A ringtone clip cannot be longer than 40 seconds. Shorten Duration or move Start.',
  tool_make_a_30_second_mp3_ringtone_err_range: 'Duration must sit after Start, inside the decoded file.',
  tool_make_a_30_second_mp3_ringtone_err_video:
    'This page does not accept video as the main input. Extract audio first, then make the ringtone from the sound file.',
  tool_make_a_30_second_mp3_ringtone_example:
    'Load sample builds a 32.00-second tone in memory, sets Start 1.00 and Duration 30, uses fade in 0.5s and fade out 1.5s, then Make ringtone writes about 30.00 seconds. Export MP3 uses 128 kbps unless you change Advanced settings.',
  tool_make_a_30_second_mp3_ringtone_example_title: 'Example',
  tool_make_a_30_second_mp3_ringtone_export_mp3: 'Export MP3',
  tool_make_a_30_second_mp3_ringtone_fade_hint:
    'Default fade in 0.5s and fade out 1.5s so the hook does not start or stop dead. Linear gain; fades do not shorten the file.',
  tool_make_a_30_second_mp3_ringtone_fade_in: 'Fade in (seconds)',
  tool_make_a_30_second_mp3_ringtone_fade_out: 'Fade out (seconds)',
  tool_make_a_30_second_mp3_ringtone_faq_a1:
    'No. Decode and the fades run in this tab. Scripts load from this site. The file is not posted to our servers.',
  tool_make_a_30_second_mp3_ringtone_faq_a2:
    'No. A ringtone maker, mp3 to ringtone, ringtone cutter, cut song to ringtone, custom ringtone, or mp3 ringtone maker search is this tool: keep about 30 seconds, fade the edges, then Export MP3.',
  tool_make_a_30_second_mp3_ringtone_faq_a3:
    'Thirty seconds is the usual ringtone length people expect. Chips also offer 15, 20, and 40 seconds. More than 40 seconds is refused so the file stays ringtone-sized.',
  tool_make_a_30_second_mp3_ringtone_faq_a4:
    'Fade in and fade out are linear volume ramps on the selected region. Defaults are 0.5s in and 1.5s out. They change loudness, not the exported duration. Together they must stay shorter than Duration.',
  tool_make_a_30_second_mp3_ringtone_faq_a5:
    'This page writes MP3 only (default 128 kbps). It does not write M4R or M4A. Android and most phones can use the MP3 as an android ringtone. iPhone still needs a separate GarageBand or Finder step; this browser cannot install a system ringtone.',
  tool_make_a_30_second_mp3_ringtone_faq_a6:
    'On Android, download the MP3, copy it to the ringtones folder or pick it under Settings → Sound. Samsung and other skins use the same MP3 file.',
  tool_make_a_30_second_mp3_ringtone_faq_a7:
    'No. Arbitrary start–end trim without a 30s cap is the trim page. A seamless audio loop is a wrap-crossfade, not a ringtone fade. This is not a full online sound editor. It does not rip YouTube.',
  tool_make_a_30_second_mp3_ringtone_faq_a8:
    'Desktop: about 40 MB or 20 minutes. Narrow screens: about 20 MB or 8 minutes. Over-cap files are refused before decode, not silently truncated. The ringtone region itself cannot exceed 40 seconds.',
  tool_make_a_30_second_mp3_ringtone_faq_q1: 'Is my audio uploaded?',
  tool_make_a_30_second_mp3_ringtone_faq_q2:
    'I searched ringtone maker, mp3 to ringtone, or ringtone cutter. Is that another tool?',
  tool_make_a_30_second_mp3_ringtone_faq_q3: 'Why is the default a 30-second ringtone?',
  tool_make_a_30_second_mp3_ringtone_faq_q4: 'How do fade in and fade out work on the ringtone?',
  tool_make_a_30_second_mp3_ringtone_faq_q5: 'Can this make an iPhone M4R ringtone?',
  tool_make_a_30_second_mp3_ringtone_faq_q6: 'How do I set an Android or Samsung MP3 ringtone?',
  tool_make_a_30_second_mp3_ringtone_faq_q7: 'Is this an audio trimmer, seamless loop, or sound editor?',
  tool_make_a_30_second_mp3_ringtone_faq_q8: 'How large a file can I process?',
  tool_make_a_30_second_mp3_ringtone_how_body:
    'Keep about 30 seconds of a local song, fade the edges so the hook is not a hard cut, then download MP3 without uploading the file.',
  tool_make_a_30_second_mp3_ringtone_how_item_1: 'Open an audio file (or click Load sample).',
  tool_make_a_30_second_mp3_ringtone_how_item_2:
    'Drag the waveform or type Start and Duration (default 30s; chips 15 / 20 / 30 / 40). Set Fade in / Fade out if 0.5s / 1.5s is not right.',
  tool_make_a_30_second_mp3_ringtone_how_item_3: 'Click Make ringtone.',
  tool_make_a_30_second_mp3_ringtone_how_item_4: 'Click Play to hear it loop, then Export MP3.',
  tool_make_a_30_second_mp3_ringtone_how_title: 'How it works',
  tool_make_a_30_second_mp3_ringtone_hud_decode: 'Decoding the file in this tab…',
  tool_make_a_30_second_mp3_ringtone_hud_decoded: 'Decoded. Set Start, Duration, and fades, then click Make ringtone.',
  tool_make_a_30_second_mp3_ringtone_hud_elapsed_tpl: '{s}s elapsed',
  tool_make_a_30_second_mp3_ringtone_hud_encode: 'Encoding MP3…',
  tool_make_a_30_second_mp3_ringtone_hud_fail_hint: 'Fix the file, times, or fades, then Make ringtone again.',
  tool_make_a_30_second_mp3_ringtone_hud_fail_title: 'Make ringtone stopped',
  tool_make_a_30_second_mp3_ringtone_hud_fade: 'Applying fade in and fade out…',
  tool_make_a_30_second_mp3_ringtone_hud_next: 'Finished. Next step: Play to hear the ringtone, then Export MP3.',
  tool_make_a_30_second_mp3_ringtone_hud_next_mp3: 'Finished. Your MP3 download should start.',
  tool_make_a_30_second_mp3_ringtone_hud_pct_tpl: '{pct}%',
  tool_make_a_30_second_mp3_ringtone_hud_step_decode: 'Decode',
  tool_make_a_30_second_mp3_ringtone_hud_step_encode: 'Encode',
  tool_make_a_30_second_mp3_ringtone_hud_step_fade: 'Fade',
  tool_make_a_30_second_mp3_ringtone_hud_title: 'Ringtone progress',
  tool_make_a_30_second_mp3_ringtone_hud_working: 'Starting…',
  tool_make_a_30_second_mp3_ringtone_make: 'Make ringtone',
  tool_make_a_30_second_mp3_ringtone_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_make_a_30_second_mp3_ringtone_pause: 'Pause',
  tool_make_a_30_second_mp3_ringtone_play: 'Play',
  tool_make_a_30_second_mp3_ringtone_preview_hint:
    'Click or drag the waveform to set Start and Duration. After Make ringtone, Play repeats the faded clip like a ringing phone.',
  tool_make_a_30_second_mp3_ringtone_result_tpl:
    'Ringtone is {dur}s from {start}–{end}s with fade in {fadeIn}s and fade out {fadeOut}s. Export MP3 is ready.',
  tool_make_a_30_second_mp3_ringtone_rules_body:
    'The region is copied at Start + Duration (capped at 40s). Linear fade-in and fade-out change gain only; output length stays the region length. MP3 is CBR at the selected bitrate after Export MP3.',
  tool_make_a_30_second_mp3_ringtone_rules_item_1:
    'Desktop cap is about 40 MB or 20 minutes; a narrow screen uses about 20 MB or 8 minutes. Over-cap files are refused, not truncated. The ringtone region cannot exceed 40 seconds.',
  tool_make_a_30_second_mp3_ringtone_rules_item_2:
    'Files stay on your device; they are not uploaded to a server. The MP3 encoder loads from this site only after Export MP3.',
  tool_make_a_30_second_mp3_ringtone_rules_item_3:
    'Default Duration is 30 seconds. Fade in 0.5s and fade out 1.5s must add up to less than Duration. Fades do not shorten the file.',
  tool_make_a_30_second_mp3_ringtone_rules_item_4:
    'Decode depends on the browser. DRM, some codecs, and video containers fail with an explicit error.',
  tool_make_a_30_second_mp3_ringtone_rules_item_5:
    'This page does not write M4R/M4A, install an iPhone ringtone, trim any length without the 40s cap, wrap a seamless loop, or fetch YouTube. One file, one window, one MP3.',
  tool_make_a_30_second_mp3_ringtone_rules_title: 'Rules you should expect',
  tool_make_a_30_second_mp3_ringtone_sample: 'Load sample',
  tool_make_a_30_second_mp3_ringtone_start: 'Start (seconds)',
  tool_make_a_30_second_mp3_ringtone_status_done: 'Done.',
  tool_make_a_30_second_mp3_ringtone_title: 'Make a 30-second MP3 ringtone',
  tool_make_a_30_second_mp3_ringtone_usecase_1:
    'Cut the chorus of a song you own into a 30-second MP3 ringtone and set it as an Android or Samsung ringtone.',
  tool_make_a_30_second_mp3_ringtone_usecase_2:
    'Make a shorter alarm or notification clip with the 15s or 20s duration chip, keep the fade out, then Export MP3.',
  tool_make_a_30_second_mp3_ringtone_usecase_3:
    'Export the MP3 first, then bring that file into GarageBand if you still need an iPhone custom tone—this page does not write M4R.',
  tool_make_a_30_second_mp3_ringtone_usecases_title: 'Good fits',
  tool_make_a_30_second_mp3_ringtone_why_choose_body:
    'Built for one ringtone-length MP3, with fades you can hear and a 40-second cap you can check on the page.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_1:
    'Decode and the fades stay in this tab; Export MP3 is the first time an encoder script loads.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_2:
    'Duration defaults to 30 seconds with 15 / 20 / 40 chips; clips longer than 40 seconds are refused.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_3:
    'Fade in 0.5s and fade out 1.5s are on the first screen so a hard cut is not the default ringtone.',
  tool_make_a_30_second_mp3_ringtone_why_choose_item_4:
    'The page does not pretend to write M4R or install an iPhone ringtone from the browser.',
  tool_make_a_30_second_mp3_ringtone_why_choose_title: 'Why choose our Make a 30-second MP3 ringtone tools',
  tool_make_a_30_second_mp3_ringtone_zerocross: 'Snap the window edges to a nearby zero crossing',
  tool_make_a_30_second_mp3_ringtone_zerocross_hint:
    'On by default. Helps the cut before the fades. Turn off for sample-accurate edges.',
};
export default en;
