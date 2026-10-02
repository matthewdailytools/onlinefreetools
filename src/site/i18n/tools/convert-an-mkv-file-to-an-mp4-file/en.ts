import type { SiteLangDict } from '../../../types';

/**
 * English master for convert-an-mkv-file-to-an-mp4-file (D2).
 * Browser MKV→MP4 with AAC stereo (mediabunny + ac3 + aac-encoder); not pure remux; not YouTube.
 */
const en: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'Convert an MKV file to an MP4 file',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'Convert one local MKV to MP4 in the browser with AAC stereo audio. Video copies when possible. About 5 GiB with OPFS streaming (about 1 GiB without). Not uploaded.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'Convert one local MKV to MP4 on your device with AAC stereo (video copies when possible). Steps: choose MKV → Convert → Download. Example: Load sample converts a short Matroska clip. Multi-gigabyte files stream via private OPFS (about 5 GiB; about 1 GiB without). Local only—not YouTube. Never uploaded. Need voice afterward? Extract audio from an MP4 file.',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'Editors and phones often want MP4, while captures arrive as MKV. This page remuxes when safe and always writes AAC stereo so the result is not a silent remux of E-AC-3. Large MKVs stream through private OPFS (about 5 GiB). It does not fetch remote URLs and does not replace audio extract landings—those stay related after you have an AAC MP4. Many files: Batch convert MKV files to MP4 files.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'Choose a MKV file',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'Drop one local .mkv (about 5 GiB with OPFS streaming, about 1 GiB without). Audio becomes AAC stereo. Not YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'Convert',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'Download',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'Load sample',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'Clear',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'Stop',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'Audio settings (optional)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'Audio channels',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'Stereo (default)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'Mono',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'AAC quality',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'Lower size',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'Balanced',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'Higher quality (default)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'Defaults work for most files: stereo AAC at higher quality. Changing settings clears a finished download.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'Convert progress',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'Load engine',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'Read',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'Decode',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'Encode',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'Write',
  tool_convert_an_mkv_file_to_an_mp4_file_done: 'Ready. Download the MP4, or open the MP4 extract tool for audio-only.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed: 'Convert failed. Try a smaller MKV or another audio track.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: '{s}s elapsed',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'Converted MP4 preview',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'Input {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'short-mkv-to-mp4-demo',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'Choose a MKV file or load the sample first.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'No file yet. Drop a local .mkv within about 5 GiB (OPFS) or about 1 GiB without, or Load sample. Not YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'Stopped. No partial MP4 is kept.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'Drop exactly one MKV file.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'Unsupported file. Use a .mkv only on this page.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'This MKV exceeds the browser convert cap (about 5 GiB with OPFS streaming, about 1 GiB without). Use desktop ffmpeg for larger files, or free disk space for private OPFS.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'Could not open this as a Matroska file, or no usable video/audio track remained.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'An audio or video codec could not be decoded or encoded here. Try another track, or convert on your computer with ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'Could not write the MP4. Try Convert again.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'Could not load the sample MKV. Drop your own file.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'Could not load the convert engine in this browser.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'Convert was stopped.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'How to convert an MKV file to an MP4 file',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'Drop a local MKV, run Convert, then Download the MP4—audio becomes AAC stereo so later extract tools work.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1: 'Choose a local .mkv within about 5 GiB (OPFS path), or click Load sample.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2: 'Optionally open Audio settings for mono or a smaller AAC quality.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3: 'Click Convert and wait for Load engine → Read → Decode → Encode → Write (or Stop). Large files stream to private OPFS.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4: 'Preview if offered, then click Download. For voice-only next, use Extract audio from an MP4 file.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title: 'Why choose our Convert an MKV file to an MP4 file tools',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1: 'AAC stereo is written on purpose—not a remux that keeps E-AC-3 unplayable in many browsers.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2: 'Multi-gigabyte MKVs stream through OPFS so the whole MP4 need not sit in RAM.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3: 'Processing stays on your device; the first engine load is from this site only.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4: 'Clear next step to extract audio: related MP4 extract page after Download.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV to MP4 with AAC honesty',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'One local MKV per run. Audio is re-encoded to AAC. Caps and codecs are honest—over about 5 GiB still needs desktop ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'About 5 GiB with private OPFS streaming; about 1 GiB without OPFS. Oversize → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'No URL or YouTube download.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3 / DDP can decode via the bundled AC-3 helper, then encode AAC stereo. Exotic video codecs may still fail with err_codec.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'Original MKV is never overwritten. For many files at once, use Batch convert MKV files to MP4 files (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'Try a real convert',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    'Load sample fetches a short on-site MKV, then Convert runs. Prefer your own .mkv under the cap for real checks.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'When this helps',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1: 'A screen capture MKV must open in an editor that only accepts MP4.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2: 'A DDP/Atmos MKV needs AAC before Extract audio from an MP4 file.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3: 'You want a shareable MP4 without uploading the Matroska file to a cloud converter.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'Can I paste a YouTube URL?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'No. Local .mkv only.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'Is this just a remux (same audio codec)?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'No. Audio is always re-encoded to AAC so browser demux and many players work. Video may still copy without re-encoding.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'My MKV has Dolby Atmos / DDP / E-AC-3—will it work?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'Often yes for files under the size cap: the page loads an AC-3/E-AC-3 decoder, downmixes to stereo AAC, and writes MP4. Huge multi-GB rips may still fail or be too slow—use desktop ffmpeg there.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'Is my file uploaded?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4: 'No. Convert runs in your browser. The engine scripts load from this site once.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'I only need the audio track—should I use this page?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'If the MKV already fits the extract fallback and has a browser-friendly codec, use Extract audio from an MKV file. If it is DDP or too large for extract, Convert here first, then Extract audio from an MP4 file.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'WebM or MOV instead of MKV?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6: 'This page accepts .mkv only. Other containers need their own convert landings later.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'Can I convert many MKVs at once?',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7: 'Not as a ZIP batch on this page yet. Convert one file at a time for now.',
};
export default en;
