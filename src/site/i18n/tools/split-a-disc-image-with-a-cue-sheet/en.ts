/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / en).
 * Master H1 is the job sentence; cue splitter / split flac cue absorb in desc and FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** English master copy for splitting a disc image with a cue sheet into named ZIP tracks. */
const en: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'Advanced settings (optional)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'Split a disc image with a cue sheet in this tab: open the image and the .cue file, click Split tracks, then Download ZIP. Cuts follow INDEX 01 (75 frames per second). Files stay on your device and are not uploaded.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'MP3 bitrate',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: 'Default 128 kbps. Used only when ZIP format is MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'Choose a disc image and a .cue file',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'Clear',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'Download track',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'Play track',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'Cue sheet',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'Cut a local disc image at cue INDEX 01 and download named tracks as a ZIP—stays on the device, not uploaded.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'Split a disc image with a cue sheet on your device: INDEX 01 cuts, named tracks in a ZIP—the files are not uploaded. Steps: Open the image and .cue (or paste the sheet), click Split tracks, Download ZIP. Example: a 6.00 s sample with INDEX 01 at 0 / 2 / 4 s becomes three tracks 2.00 / 2.00 / 2.00 s named Intro / Middle / Outro. Searches for cue splitter, split flac cue, split wav cue, split ape cue, or bin cue are this same album-split job. Not silence split, not equal-duration chunks, not YouTube chapters, not trim.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'Download ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'Drop both files together: WAV, FLAC, MP3, or BIN plus the .cue. Processing stays in this tab.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'Add a disc image and a cue sheet first.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'Add the matching disc image (WAV, FLAC, MP3, or BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: 'Add a .cue file or paste the cue sheet.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'This browser cannot decode APE. Convert the image to WAV or FLAC, keep the same cue sheet, then Split tracks again.',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'This image is over the size or duration cap for this device (about 80 MB / 30 min on desktop, 30 MB / 10 min on a narrow screen). A full 700 MB CD .bin will not fit in this tab.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'That text is not a usable cue sheet. It needs TRACK lines and INDEX 01 times as MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'This cue describes a data disc (MODE tracks), not an audio image. This page only splits AUDIO tracks.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'This browser could not decode that image. Try WAV or FLAC, or a file without DRM. APE is not decoded here.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'Nothing to process. Load files or the sample first.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'The MP3 encoder failed to load. Stay on this tab and try Download ZIP again.',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'This cue lists more than one FILE. That layout is already one file per track, so there is nothing to split here.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'No INDEX 01 timestamps were found. A cue splitter needs those MM:SS:FF start times.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'More than 50 tracks. The page refuses instead of truncating. Split a shorter sheet or use desktop shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'This page does not accept video as the main input. It splits an audio disc image with a cue sheet.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'The ZIP library failed to load. Stay on this tab and try Download ZIP again.',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'Load sample builds a 6.00-second image (440 / 550 / 660 Hz, two seconds each) and a cue sheet with INDEX 01 at 00:00:00, 00:02:00, and 00:04:00 titled Intro Tone, Middle Tone, and Outro Tone. Split tracks yields three files 2.00 / 2.00 / 2.00 s. Download ZIP writes 01 Intro Tone.wav unless you pick MP3 in Advanced settings.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'Example',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'No. Parse, decode, split, and ZIP packing run in this tab. Scripts load from this site. The image and cue sheet are not posted to our servers.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'Yes. A cue splitter, split flac cue, split wav cue, split ape cue, bin cue, or extract tracks from cue search is this tool: follow INDEX 01 and download many named files in one ZIP. APE as a search is the same job, but this browser cannot decode .ape — convert that image to WAV or FLAC and keep the cue.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 is the track start (MM:SS:FF at 75 frames per second). INDEX 00 marks a pregap or hidden-track-one audio; this page shows it but cuts at INDEX 01. The last track runs to the end of the image.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'No. Split a recording on silence cuts at long pauses. Split an audio file by duration cuts every N seconds. This page only follows a cue sheet. YouTube chapter lists without FILE/INDEX are out of scope.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'Paste the cue text under the dropzone if you do not have a separate .cue file. Dropping a .cue file does the same parse.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'Files inside the ZIP are named {nn} {title}.wav (or .mp3). You can also download one track from the list. The cap is 50 tracks; over that the split is refused.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'No. Denoise, muting a video, equal-duration chunks, hand-marked trim, YouTube ripping, and ISO data discs are out of scope. Use an audio image you already have rights to.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'Desktop: about 80 MB or 30 minutes. Narrow screens: about 30 MB or 10 minutes. A full 700 MB CD .bin is refused. Over-cap files are refused before decode.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'Are my disc image and cue sheet uploaded?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2:
    'I searched cue splitter, split flac cue, split ape cue, or bin cue. Is that another tool?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'What is INDEX 01 versus INDEX 00?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4:
    'Does it split on silence, by duration, or from YouTube chapters?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: 'Can I paste a cue sheet instead of a .cue file?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'How are the files named, and how many tracks can I get?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7:
    'Can it decode APE, split video, cut equal parts, or rip YouTube?',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'How large an image can I process?',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'ZIP file format',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV is lossless PCM. MP3 loads the encoder only when you click Download ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'Read INDEX 01 times from the cue sheet, cut the matching disc image there, and download a ZIP of named tracks without uploading.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'Open a disc image and its .cue file (or click Load sample).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'Or paste the cue sheet if you only have the text.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'Click Split tracks.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'Click Download ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'How it works',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'Decoding the disc image in this tab…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'Cue parsed and image decoded. White marks are INDEX 01 starts. Click Split tracks when the list looks right.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: '{s}s elapsed',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'Encoding MP3 tracks…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'Fix the cue sheet or image, then Split tracks again.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'Cue split stopped',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'Finished. Next step: Download ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'Finished. Your ZIP download should start.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'Packing tracks into a ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'Reading the cue sheet…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'Cutting tracks at INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'Decode',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'Pack',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'Parse',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'Split',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'Cue split progress',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'Starting…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'Disc image',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}s · {rate} Hz · {ch} ch · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'Paste a full cue sheet (FILE, TRACK, INDEX 01). Not a YouTube chapter list.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'Or paste the cue sheet',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'Pause',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'Play',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'White marks are INDEX 01 track starts. Play previews the whole image.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl:
    '{orig}s · {count} track(s): {list}. Download ZIP is ready.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'Each INDEX 01 time is mm:ss:ff with 75 frames per second: t = mm×60 + ss + ff/75. Track n runs from that time to the next INDEX 01, and the last track runs to the end of the image. WAV/BIN 16-bit PCM is sliced by byte offset. Other formats use the browser decoder. The ZIP is built in this tab.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'INDEX 01 is the cut. INDEX 00 is shown as a pregap marker and is not the default cut. Times use CD frames, not milliseconds.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'Desktop cap is about 80 MB or 30 minutes; a narrow screen uses about 30 MB or 10 minutes. Over-cap files are refused, not truncated. More than 50 tracks is refused. A 700 MB CD .bin will not fit.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'Files stay on your device; they are not uploaded to a server. JSZip and the MP3 encoder load from this site only after Download ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE and BINARY (.bin, 2352-byte CDDA sectors) can be sliced without a full codec. MP3/FLAC/M4A need the browser decoder. APE/TTA/WavPack fail with an explicit error.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'This page follows one FILE plus INDEX 01. It does not cut on silence, equal duration, YouTube chapters, file size, video mute, or rip YouTube. A cue with several FILE lines is already split.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'Rules you should expect',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'Load sample',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'Split tracks',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'Done.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'Split a disc image with a cue sheet',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}s ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'Tracks ready for the ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'Split a FLAC+CUE album rip from Exact Audio Copy or XLD into named tracks without installing shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'Split a WAV or BIN disc image with a cue sheet from a vinyl side or CD image, then take a ZIP of tracks.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'Extract tracks from a DJ-set file that shipped with a cue sheet, using INDEX 01 instead of guessing silence gaps.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'Good fits',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'Built for INDEX 01 album splits with named ZIP tracks, and honest about APE and oversized .bin images.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'Cuts at cue INDEX 01 (75 frames/s) and names ZIP files from TITLE, instead of equal-second chunks or silence gaps.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'One dropzone for the image plus .cue, with paste for the same sheet — not a YouTube-chapter editor pretending to be a cue splitter.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'The files stay in this browser tab and are not uploaded; JSZip and lamejs load only when you click Download ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'APE decode, multi-FILE cues, and over-size images are refused in plain language instead of a 700 MB promise that can crash the tab.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title:
    'Why choose our Split a disc image with a cue sheet tools',
};
export default en;
