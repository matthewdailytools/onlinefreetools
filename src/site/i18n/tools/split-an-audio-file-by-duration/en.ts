/**
 * i18n tool shard (split-an-audio-file-by-duration / en).
 * Master H1 is the job sentence; split mp3 into parts / equal parts absorb in desc and FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** English master copy for splitting an audio file into equal-duration ZIP clips. */
const en: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'Advanced settings (optional)',
  tool_split_an_audio_file_by_duration_article:
    'Split an audio file by duration in this tab: open a local file, set the chunk length, click Split by duration, then Download ZIP. Each clip is N seconds long except the last, which keeps the remainder. The file stays on your device and is not uploaded.',
  tool_split_an_audio_file_by_duration_bitrate: 'MP3 bitrate',
  tool_split_an_audio_file_by_duration_bitrate_hint: 'Default 128 kbps. Used only when ZIP format is MP3.',
  tool_split_an_audio_file_by_duration_chip_180: '3 min',
  tool_split_an_audio_file_by_duration_chip_30: '30 s',
  tool_split_an_audio_file_by_duration_chip_300: '5 min',
  tool_split_an_audio_file_by_duration_chip_60: '60 s',
  tool_split_an_audio_file_by_duration_choose_file: 'Choose an audio file',
  tool_split_an_audio_file_by_duration_chunk: 'Chunk length (seconds)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    'Default 2 s matches the sample. For a lecture, tap 60 s or 3 min. The last clip keeps any leftover time.',
  tool_split_an_audio_file_by_duration_clear: 'Clear',
  tool_split_an_audio_file_by_duration_clip_download: 'Download clip',
  tool_split_an_audio_file_by_duration_clip_play: 'Play clip',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'Clip {n} · {dur}s ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'Clips ready for the ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'Cut a local file into equal-length clips and download a ZIP—stays on the device, not uploaded.',
  tool_split_an_audio_file_by_duration_description:
    'Split an audio file by duration on your device: equal-length clips, last piece holds the remainder, ZIP download—the file is not uploaded. Steps: Open a file, set chunk length (sample uses 2 s; chips include 30 / 60 / 180 / 300 s), click Split by duration, Download ZIP. Example: a 5.00 s sample at 2 s becomes three clips 2.00 / 2.00 / 1.00 s. Searches for split mp3 into parts, split into equal parts, chunk audio, or split every 60 seconds are this same multi-file job. Not silence split, not cue sheets, not trim, not video mute.',
  tool_split_an_audio_file_by_duration_download_zip: 'Download ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: 'Or drop a WAV, MP3, M4A, or OGG here. Processing stays in this tab.',
  tool_split_an_audio_file_by_duration_empty: 'Choose an audio file first.',
  tool_split_an_audio_file_by_duration_equal_parts: 'Or split into N equal parts',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'Leave empty to use the seconds field. 2–50 parts sets chunk length to total duration ÷ N for this split.',
  tool_split_an_audio_file_by_duration_err_caps:
    'This file is over the size or duration cap for this device (about 40 MB / 20 min on desktop, 20 MB / 8 min on a narrow screen). Shorten it elsewhere first or use a shorter file.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'Chunk length must be between 0.5 and 1200 seconds. Raise it if you hit the 50-clip ceiling.',
  tool_split_an_audio_file_by_duration_err_decode:
    'This browser could not decode that file. Try WAV or MP3, or a clip without DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'Nothing to process. Load a file or the sample first.',
  tool_split_an_audio_file_by_duration_err_lame: 'The MP3 encoder failed to load. Stay on this tab and try Download ZIP again.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'More than 50 clips. Increase the chunk length (try 60 s or 3 min) so fewer pieces are created. The page refuses instead of truncating.',
  tool_split_an_audio_file_by_duration_err_video:
    'This page does not accept video as the main input. It splits a sound file by duration; it does not mute a video.',
  tool_split_an_audio_file_by_duration_err_zip: 'The ZIP library failed to load. Stay on this tab and try Download ZIP again.',
  tool_split_an_audio_file_by_duration_example:
    'Load sample builds a 5.00-second 440 Hz tone. Split by duration at 2.00 s cuts at 2.00 s and 4.00 s, so three clips last 2.00 / 2.00 / 1.00 s (the last clip keeps the remainder). Download ZIP writes WAV files named sample-01.wav unless you pick MP3 in Advanced settings.',
  tool_split_an_audio_file_by_duration_example_title: 'Example',
  tool_split_an_audio_file_by_duration_faq_a1:
    'No. Decode, split, and ZIP packing run in this tab. Scripts load from this site. The file is not posted to our servers.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'Yes. A split mp3 into parts, split into equal parts, chunk audio, split every 60 seconds, or download segments as ZIP search is this tool: cut a local file every N seconds and download many files in one ZIP. Equal parts N lives under Advanced settings.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'The last clip keeps leftover time. A 5.00 s file at 2 s becomes 2.00 / 2.00 / 1.00 s, not a padded silent tail.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'No. Split a recording on silence cuts at long pauses. This page ignores quiet gaps and cuts on the clock. Cue-sheet album splitting and split-by-file-size are also out of scope.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'Start with 2 s on the sample, then tap 30 s or 60 s for social clips, or 3 min / 5 min for a lecture commute slice. If you want four equal files, type 4 in Advanced settings.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'Files inside the ZIP are named {stem}-01.wav (or .mp3). You can also download one clip from the list. The cap is 50 clips; over that the split is refused.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'No. Denoise, muting a video, cue/APE split, hand-marked trim, and YouTube ripping are out of scope. Use a sound file you already have rights to.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'Desktop: about 40 MB or 20 minutes. Narrow screens: about 20 MB or 8 minutes. Over-cap files are refused before decode.',
  tool_split_an_audio_file_by_duration_faq_q1: 'Is my audio file uploaded?',
  tool_split_an_audio_file_by_duration_faq_q2:
    'I searched split mp3 into parts, split into equal parts, or chunk audio. Is that another tool?',
  tool_split_an_audio_file_by_duration_faq_q3: 'What happens to leftover time on the last clip?',
  tool_split_an_audio_file_by_duration_faq_q4: 'Does it split on silence, follow a cue sheet, or split by file size?',
  tool_split_an_audio_file_by_duration_faq_q5: 'Which chunk length should I use?',
  tool_split_an_audio_file_by_duration_faq_q6: 'How are the files named, and how many clips can I get?',
  tool_split_an_audio_file_by_duration_faq_q7: 'Can it denoise, split video, follow a cue file, or rip YouTube?',
  tool_split_an_audio_file_by_duration_faq_q8: 'How large a file can I process?',
  tool_split_an_audio_file_by_duration_format: 'ZIP file format',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV is lossless PCM. MP3 loads the encoder only when you click Download ZIP.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'Cut the file every N seconds on the clock, keep leftover time on the last clip, then download a ZIP of clips without uploading.',
  tool_split_an_audio_file_by_duration_how_item_1: 'Open an audio file (or click Load sample).',
  tool_split_an_audio_file_by_duration_how_item_2: 'Keep 2 seconds, or tap a chip / type the chunk length.',
  tool_split_an_audio_file_by_duration_how_item_3: 'Click Split by duration.',
  tool_split_an_audio_file_by_duration_how_item_4: 'Click Download ZIP.',
  tool_split_an_audio_file_by_duration_how_title: 'How it works',
  tool_split_an_audio_file_by_duration_hud_decode: 'Decoding the file in this tab…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'Decoded. White marks are planned cuts. Click Split by duration when the length looks right.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: '{s}s elapsed',
  tool_split_an_audio_file_by_duration_hud_encode: 'Encoding MP3 clips…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'Fix the file or chunk length, then Split by duration again.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'Split by duration stopped',
  tool_split_an_audio_file_by_duration_hud_next: 'Finished. Next step: Download ZIP.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'Finished. Your ZIP download should start.',
  tool_split_an_audio_file_by_duration_hud_pack: 'Packing clips into a ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'Cutting equal-length clips…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'Decode',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'Pack',
  tool_split_an_audio_file_by_duration_hud_step_split: 'Split',
  tool_split_an_audio_file_by_duration_hud_title: 'Split by duration progress',
  tool_split_an_audio_file_by_duration_hud_working: 'Starting…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch',
  tool_split_an_audio_file_by_duration_pause: 'Pause',
  tool_split_an_audio_file_by_duration_play: 'Play',
  tool_split_an_audio_file_by_duration_preview_hint: 'White marks are planned cuts every N seconds. Play previews the current file.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}s · chunk length is at least the whole file, so the ZIP would contain this one file. Shorten the chunk length, then Split by duration again. Download ZIP is ready.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}s · every {chunk}s → {count} clip(s): {list}. Download ZIP is ready.',
  tool_split_an_audio_file_by_duration_rules_body:
    'Cut points sit at k × D seconds, where D is the chunk length. The last clip is [floor(T / D) × D, T] and may be shorter. If you set N equal parts, D = T / N for that run. WAV is 16-bit PCM. MP3 is CBR at the selected bitrate. The ZIP is built in this tab.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'Default sample chunk is 2 s. Chips write 30 s, 60 s, 180 s (3 min), or 300 s (5 min) into the same field. Equal parts N (2–50) is optional under Advanced settings.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'Desktop cap is about 40 MB or 20 minutes; a narrow screen uses about 20 MB or 8 minutes. Over-cap files are refused, not truncated. More than 50 clips is refused.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'Files stay on your device; they are not uploaded to a server. JSZip and the MP3 encoder load from this site only after Download ZIP.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'Decode depends on the browser. DRM, some codecs, and video containers fail with an explicit error.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'This page exports many files in a ZIP on the clock. It does not cut on silence, follow a cue sheet, split by megabytes, denoise, mute video, or fetch YouTube.',
  tool_split_an_audio_file_by_duration_rules_title: 'Rules you should expect',
  tool_split_an_audio_file_by_duration_sample: 'Load sample',
  tool_split_an_audio_file_by_duration_split: 'Split by duration',
  tool_split_an_audio_file_by_duration_status_done: 'Done.',
  tool_split_an_audio_file_by_duration_title: 'Split an audio file by duration',
  tool_split_an_audio_file_by_duration_usecase_1:
    'Split a lecture by duration into 3-minute commute slices and download a ZIP, without waiting for silence gaps.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'Split mp3 into parts for 60-second social clips from a longer episode.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'Chunk a long voice memo into equal parts that fit a chat app time cap, with the last clip keeping the remainder.',
  tool_split_an_audio_file_by_duration_usecases_title: 'Good fits',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'Built for a ZIP of clock-cut clips, with named 30 s / 60 s / 3 min / 5 min chips and an honest shorter last piece.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'Cuts every N seconds and packs many files in a ZIP; the last clip keeps the remainder instead of padding silence.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    '30 s / 60 s / 3 min / 5 min chips plus optional equal-parts N; this page is not a silence detector pretending to slice evenly.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'The file stays in this browser tab and is not uploaded; JSZip and lamejs load only when you click Download ZIP.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'Over-size files and more than 50 clips are refused before a truncated ZIP, instead of a 1 GB promise that can crash the tab.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'Why choose our Split an audio file by duration tools',
};
export default en;
