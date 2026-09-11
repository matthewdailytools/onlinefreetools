/**
 * i18n tool shard (split-a-recording-on-silence / en).
 * Master H1 is the job sentence; split audio by silence / ZIP absorb in desc and FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** English master copy for splitting a recording on silence into a ZIP. */
const en: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'Advanced settings (optional)',
  tool_split_a_recording_on_silence_article:
    'Split a recording on silence in this tab: open a local file, click Split on silence, then Download ZIP. Long pauses become cut points at the midpoint of each gap. Clips stay separate files. The recording stays on your device and is not uploaded.',
  tool_split_a_recording_on_silence_bitrate: 'MP3 bitrate',
  tool_split_a_recording_on_silence_bitrate_hint: 'Default 128 kbps. Used only when ZIP format is MP3.',
  tool_split_a_recording_on_silence_choose_file: 'Choose an audio file',
  tool_split_a_recording_on_silence_clear: 'Clear',
  tool_split_a_recording_on_silence_clip_download: 'Download clip',
  tool_split_a_recording_on_silence_clip_play: 'Play clip',
  tool_split_a_recording_on_silence_clip_row_tpl: 'Clip {n} · {dur}s ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'Clips ready for the ZIP',
  tool_split_a_recording_on_silence_desc:
    'Cut a local recording at long pauses and download a ZIP of clips—stays on the device, not uploaded.',
  tool_split_a_recording_on_silence_description:
    'Split a recording on silence on your device: cut at long pauses, pack a ZIP of clips—the file is not uploaded. Steps: Open a recording, click Split on silence (defaults −40 dB / 1.0 s / 0.3 s min clip), Download ZIP. Example: a 5.00 s sample with two 1.20 s gaps becomes three clips 1.40 / 2.00 / 1.60 s. Searches for split audio by silence, split mp3 on silence, split audio at silence, detect silence and split, or export clips as ZIP are this same multi-file job. Not one-file silence removal, not equal-duration split, not video mute.',
  tool_split_a_recording_on_silence_download_zip: 'Download ZIP',
  tool_split_a_recording_on_silence_drop_hint: 'Or drop a WAV, MP3, M4A, or OGG here. Processing stays in this tab.',
  tool_split_a_recording_on_silence_empty: 'Choose an audio file first.',
  tool_split_a_recording_on_silence_err_caps:
    'This file is over the size or duration cap for this device (about 40 MB / 20 min on desktop, 20 MB / 8 min on a narrow screen). Shorten it elsewhere first or use a shorter file.',
  tool_split_a_recording_on_silence_err_decode:
    'This browser could not decode that file. Try WAV or MP3, or a clip without DRM.',
  tool_split_a_recording_on_silence_err_empty: 'Nothing to process. Load a file or the sample first.',
  tool_split_a_recording_on_silence_err_lame: 'The MP3 encoder failed to load. Stay on this tab and try Download ZIP again.',
  tool_split_a_recording_on_silence_err_no_clips:
    'No clip long enough to keep. Lower the minimum clip length, or raise the minimum silence so short breaths are not cut points.',
  tool_split_a_recording_on_silence_err_too_many:
    'More than 50 clips. Raise the minimum silence or make the threshold more negative so nearby pauses merge, then Split on silence again. The page refuses instead of truncating.',
  tool_split_a_recording_on_silence_err_video:
    'This page does not accept video as the main input. It splits a sound file at pauses; it does not mute a video or jump-cut footage.',
  tool_split_a_recording_on_silence_err_zip: 'The ZIP library failed to load. Stay on this tab and try Download ZIP again.',
  tool_split_a_recording_on_silence_example:
    'Load sample builds a 5.00-second tone with two 1.20-second silent gaps (0.80 + 1.20 + 0.80 + 1.20 + 1.00). Split on silence at −40 dB / 1.0 s / 0.3 s min clip cuts at 1.40 s and 3.40 s, so three clips last 1.40 / 2.00 / 1.60 s. Download ZIP writes WAV files named sample-01.wav unless you pick MP3 in Advanced settings.',
  tool_split_a_recording_on_silence_example_title: 'Example',
  tool_split_a_recording_on_silence_faq_a1:
    'No. Decode, detect, split, and ZIP packing run in this tab. Scripts load from this site. The file is not posted to our servers.',
  tool_split_a_recording_on_silence_faq_a2:
    'No. A split audio by silence, split mp3 on silence, split audio at silence, detect silence and split, or download segments as ZIP search is this tool: cut a local recording at long pauses and download many files in one ZIP.',
  tool_split_a_recording_on_silence_faq_a3:
    'Different job. Remove silence from a recording cuts dead air and stitches one shorter file. This page keeps the pauses as cut points and exports many clips. Use the one-file tool if you do not want a ZIP.',
  tool_split_a_recording_on_silence_faq_a4:
    'No. Equal-duration split (every N seconds) is a different later job. Cue-sheet album splitting is also out of scope. This page only cuts where quiet gaps last long enough.',
  tool_split_a_recording_on_silence_faq_a5:
    'Start with Speech (−40 dB / 1.0 s / 0.3 s min clip). Lectures: Lecture (−40 dB / 2.0 s). Album gaps: Album (−45 dB / 1.5 s / 1.0 s min clip). If breaths become clips, raise the minimum silence.',
  tool_split_a_recording_on_silence_faq_a6:
    'Files inside the ZIP are named {stem}-01.wav (or .mp3). You can also download one clip from the list. The cap is 50 clips; over that the split is refused.',
  tool_split_a_recording_on_silence_faq_a7:
    'No. Denoise, removing um/uh, muting a video, cue/APE split, and YouTube ripping are out of scope. Use a sound file you already have rights to.',
  tool_split_a_recording_on_silence_faq_a8:
    'Desktop: about 40 MB or 20 minutes. Narrow screens: about 20 MB or 8 minutes. Over-cap files are refused before decode. Wide-dynamic music can look like silence—raise the minimum gap or skip this tool.',
  tool_split_a_recording_on_silence_faq_q1: 'Is my recording uploaded?',
  tool_split_a_recording_on_silence_faq_q2: 'I searched split audio by silence, split mp3 on silence, or ZIP clips. Is that another tool?',
  tool_split_a_recording_on_silence_faq_q3: 'I wanted one shorter file with dead air removed. Is this the silence remover?',
  tool_split_a_recording_on_silence_faq_q4: 'Does it split into equal parts or follow a cue sheet?',
  tool_split_a_recording_on_silence_faq_q5: 'Which threshold should I use? Will it split on breaths?',
  tool_split_a_recording_on_silence_faq_q6: 'How are the files named, and how many clips can I get?',
  tool_split_a_recording_on_silence_faq_q7: 'Can it denoise, split video, follow a cue file, or rip YouTube?',
  tool_split_a_recording_on_silence_faq_q8: 'How large a file can I process? What about quiet music?',
  tool_split_a_recording_on_silence_format: 'ZIP file format',
  tool_split_a_recording_on_silence_format_hint: 'WAV is lossless PCM. MP3 loads the encoder only when you click Download ZIP.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'Find quiet gaps that are long enough, cut at the midpoint of each gap, then download a ZIP of clips without uploading.',
  tool_split_a_recording_on_silence_how_item_1: 'Open a recording (or click Load sample).',
  tool_split_a_recording_on_silence_how_item_2: 'Leave the defaults, or open Advanced settings (optional) to change threshold and minimum silence.',
  tool_split_a_recording_on_silence_how_item_3: 'Click Split on silence.',
  tool_split_a_recording_on_silence_how_item_4: 'Click Download ZIP.',
  tool_split_a_recording_on_silence_how_title: 'How it works',
  tool_split_a_recording_on_silence_hud_decode: 'Decoding the file in this tab…',
  tool_split_a_recording_on_silence_hud_decoded: 'Decoded. Red marks are gaps. Click Split on silence when the settings look right.',
  tool_split_a_recording_on_silence_hud_detect: 'Measuring quiet windows…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}s elapsed',
  tool_split_a_recording_on_silence_hud_encode: 'Encoding MP3 clips…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'Fix the file or settings, then Split on silence again.',
  tool_split_a_recording_on_silence_hud_fail_title: 'Split on silence stopped',
  tool_split_a_recording_on_silence_hud_next: 'Finished. Next step: Download ZIP.',
  tool_split_a_recording_on_silence_hud_next_zip: 'Finished. Your ZIP download should start.',
  tool_split_a_recording_on_silence_hud_pack: 'Packing clips into a ZIP…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'Cutting at silence midpoints…',
  tool_split_a_recording_on_silence_hud_step_decode: 'Decode',
  tool_split_a_recording_on_silence_hud_step_detect: 'Detect',
  tool_split_a_recording_on_silence_hud_step_pack: 'Pack',
  tool_split_a_recording_on_silence_hud_step_split: 'Split',
  tool_split_a_recording_on_silence_hud_title: 'Split on silence progress',
  tool_split_a_recording_on_silence_hud_working: 'Starting…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'Minimum clip (seconds)',
  tool_split_a_recording_on_silence_min_clip_hint: 'Default 0.3 s. Shorter slices after a cut are dropped.',
  tool_split_a_recording_on_silence_min_silence: 'Minimum silence (seconds)',
  tool_split_a_recording_on_silence_min_silence_hint: 'Default 1.0 s so short breaths do not become cut points.',
  tool_split_a_recording_on_silence_pause: 'Pause',
  tool_split_a_recording_on_silence_play: 'Play',
  tool_split_a_recording_on_silence_preset_album: 'Album',
  tool_split_a_recording_on_silence_preset_hint: 'Speech is the default. Lecture waits for longer chapter pauses. Album expects gaps between tracks.',
  tool_split_a_recording_on_silence_preset_lecture: 'Lecture',
  tool_split_a_recording_on_silence_preset_speech: 'Speech',
  tool_split_a_recording_on_silence_preview_hint: 'Red bands are quiet gaps long enough to split. Play previews the current file.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}s · no pause long enough to split, so the ZIP would contain this one file. Lower the minimum silence or raise the threshold (closer to 0). Download ZIP is ready.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}s · {gaps} gap(s) → {count} clip(s): {list}. Download ZIP is ready.',
  tool_split_a_recording_on_silence_rules_body:
    'About every 50 ms the page measures RMS and converts to dB: levelDb = 20 × log10(rms). A stretch below the threshold that lasts at least the minimum silence becomes a cut at its midpoint. Clips shorter than the minimum clip are dropped. WAV is 16-bit PCM. MP3 is CBR at the selected bitrate. The ZIP is built in this tab.',
  tool_split_a_recording_on_silence_rules_item_1:
    'Speech default: −40 dB, 1.0 s minimum silence, 0.3 s minimum clip. Lecture: −40 dB / 2.0 s / 0.5 s. Album gaps: −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'Desktop cap is about 40 MB or 20 minutes; a narrow screen uses about 20 MB or 8 minutes. Over-cap files are refused, not truncated. More than 50 clips is refused.',
  tool_split_a_recording_on_silence_rules_item_3:
    'Files stay on your device; they are not uploaded to a server. JSZip and the MP3 encoder load from this site only after Download ZIP.',
  tool_split_a_recording_on_silence_rules_item_4:
    'Decode depends on the browser. DRM, some codecs, and video containers fail with an explicit error.',
  tool_split_a_recording_on_silence_rules_item_5:
    'This page exports many files in a ZIP. It does not stitch one shorter file, split by fixed duration, follow a cue sheet, denoise, mute video, or fetch YouTube.',
  tool_split_a_recording_on_silence_rules_title: 'Rules you should expect',
  tool_split_a_recording_on_silence_sample: 'Load sample',
  tool_split_a_recording_on_silence_split: 'Split on silence',
  tool_split_a_recording_on_silence_status_done: 'Done.',
  tool_split_a_recording_on_silence_threshold: 'Silence threshold (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'Default −40 dB. Closer to 0 treats more of the file as silence.',
  tool_split_a_recording_on_silence_title: 'Split a recording on silence',
  tool_split_a_recording_on_silence_usecase_1:
    'Split a lecture on silence so each chapter pause becomes its own file in a ZIP, without equal-duration chopping.',
  tool_split_a_recording_on_silence_usecase_2:
    'Split an interview at silence so answers are separate clips you can label later.',
  tool_split_a_recording_on_silence_usecase_3:
    'Split a recording on silence when a mixtape has gaps between tracks and you do not have a cue sheet.',
  tool_split_a_recording_on_silence_usecases_title: 'Good fits',
  tool_split_a_recording_on_silence_why_choose_body:
    'Built for a ZIP of clips cut at pause midpoints, with named Speech / Lecture / Album defaults you can check on the page.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'Cuts at the midpoint of long quiet gaps and packs many files in a ZIP; this page does not stitch one shorter file.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'Speech defaults (−40 dB / 1.0 s / 0.3 s min clip) avoid chopping breaths; Lecture and Album presets are named on the page.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'The file stays in this browser tab and is not uploaded; JSZip and lamejs load only when you click Download ZIP.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'Over-size files and more than 50 clips are refused before a truncated ZIP, instead of a 1 GB promise that can crash the tab.',
  tool_split_a_recording_on_silence_why_choose_title: 'Why choose our Split a recording on silence tools',
};
export default en;
