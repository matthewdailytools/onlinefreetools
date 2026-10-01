import type { SiteLangDict } from '../../../types';

/**
 * English master for batch-convert-mkv-files-to-mp4-files (D3).
 * Queue of local MKV→MP4 AAC stereo via mediabunny; ZIP via JSZip; row failures skip.
 */
const en: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'Batch convert MKV files to MP4 files',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'Convert multiple local MKV files to MP4 with AAC stereo in the browser, then download a ZIP. About 20 files; per file about 5 GiB with OPFS (about 1 GiB without). Not uploaded.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'Batch convert local MKV files to MP4 on your device with AAC stereo audio, then download one ZIP. Steps: add MKVs → Convert all → Download ZIP. Example: Load sample queues two short clips and packs both MP4s. Per file about 5 GiB with OPFS streaming (about 1 GiB without); up to about 20 files. A failed row skips; you still get a partial ZIP of successes. Local only—not YouTube URL download. Never uploaded. One file only? Use Convert an MKV file to an MP4 file.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'Folders of Matroska captures need MP4 for many editors. This page runs the same AAC-first convert as the single-file tool, but queues many MKVs, shows per-row status, and packs successful MP4s into a ZIP. It does not extract audio tracks alone (see batch extract), does not fetch URLs, and does not replace the single-file page when you only have one clip.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'Choose MKV files',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'Drop several local .mkv files (about 5 GiB with OPFS each (about 1 GiB without), up to about 20). Audio becomes AAC stereo. Not YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'Queue',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} file(s) in queue',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'Convert all',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'Download ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'Load sample',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'Clear',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'Stop',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'Remove',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'Audio settings (optional)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'Audio channels',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'Stereo (default)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Mono',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'AAC quality',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'Lower size',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'Balanced',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'Higher quality (default)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'Defaults apply to every file in the queue. Changing settings clears a finished ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'Batch convert progress',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'Load engine',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'Read',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'Decode',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'Encode',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'Pack ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done: 'Ready. Download the ZIP, or open the single-file convert tool for one clip.',
  tool_batch_convert_mkv_files_to_mp4_files_failed: 'Batch convert failed. Check row errors or try fewer / smaller MKVs.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: '{s}s elapsed',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'ZIP result',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 file(s) packed · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} succeeded, {fail} failed · ZIP {output} KiB (partial). Download still works for successes.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'Add MKV files or load the sample first.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'No files yet. Drop local .mkv files within about 5 GiB with OPFS each, or Load sample. Not YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'Queued',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'Converting…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 ready',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'Failed',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'Stopped',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'Drop one or more MKV files.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'Unsupported file. Use .mkv only on this page.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'A file exceeds about 5 GiB with OPFS (about 1 GiB without), or the queue is too large for this browser path.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'Too many files. Keep about 20 MKVs or fewer per batch.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'Could not open a file as Matroska, or no usable video/audio track remained.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'A codec could not be decoded or encoded here. That row fails; others may still pack.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'Could not write an MP4 for a row. Try again or remove it.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'Could not build the ZIP. Try Convert all again.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'Could not load the sample MKVs. Drop your own files.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'Could not load the convert engine in this browser.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'Convert was stopped.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'How to batch convert MKV files to MP4 files',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'Queue local MKVs, run Convert all, then Download ZIP—each success is an AAC stereo MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1: 'Choose several local .mkv files within about 5 GiB with OPFS each, or click Load sample.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2: 'Optionally open Audio settings for mono or a smaller AAC quality (applies to every file).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3: 'Click Convert all and watch each row (or Stop). Failed rows skip; successes continue.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4: 'When the HUD finishes, click Download ZIP. For one clip only, use Convert an MKV file to an MP4 file.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'Why choose our Batch convert MKV files to MP4 files tools',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1: 'One ZIP of AAC MP4s without uploading a folder of Matroska files.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2: 'Per-row status and skip-on-fail so one bad track does not kill the batch.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3: 'Same AAC-first engine as the single-file convert page—honest caps, not silent remux.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4: 'Clear related path to single-file convert and to extract-audio tools after you have MP4s.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'Batch MKV to MP4 honesty',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    'Local .mkv only. Audio re-encodes to AAC. Caps and row failures are stated up front—huge rips may still need desktop ffmpeg.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    'About 5 GiB with OPFS per file (about 1 GiB without) and about 20 files per batch. Oversize → err_limit / err_too_many.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'No URL or YouTube download.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC stereo (or mono) is written on purpose. E-AC-3 may decode via the shared AC-3 helper; exotic video can still fail a row.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'Original MKVs are never overwritten. This is not batch extract audio—related pages cover voice-only ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'Try a real batch',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'Load sample queues two short on-site MKVs, Convert all packs both into a ZIP. Prefer your own files under the cap for real checks.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'When this helps',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1: 'A folder of screen-capture MKVs must become MP4s for an editor that rejects Matroska.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2: 'Several DDP/Atmos MKVs need AAC before you extract audio from the resulting MP4s.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3: 'You want one ZIP download without uploading the batch to a cloud converter.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'Can I paste YouTube URLs?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'No. Local .mkv files only.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: 'How is this different from Convert an MKV file to an MP4 file?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'That page is one file and a direct MP4 download. This page queues many files and downloads a ZIP. Same AAC convert engine.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: 'What if one MKV fails?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'That row shows Failed and is skipped. Successful MP4s still pack into a partial ZIP you can Download.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'Is this just remux (same audio codec)?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'No. Audio is always re-encoded to AAC. Video may copy when possible.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: 'I only need audio WAV/MP3 from many MKVs—wrong page?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'Yes for voice-only: use Batch extract audio from MKV files. This page outputs video MP4s in a ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'Is my folder uploaded?',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6: 'No. Convert runs in your browser. Engine scripts load from this site once.',
};

export default en;
