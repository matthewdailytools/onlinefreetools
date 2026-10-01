import type { SiteLangDict } from '../../../types';

/**
 * English master copy for batch-extract-audio-from-mov-files.
 * QuickTime .mov batch only; serial demux + ZIP; sibling MOV/hub links.
 */
const en: SiteLangDict = {
  tool_batch_extract_audio_from_mov_files_title: 'Batch extract audio from MOV files',
  tool_batch_extract_audio_from_mov_files_desc:
    'Queue local MOV/M4V only—extract one at a time, skip failures, download a ZIP of WAV or MP3; never uploaded.',
  tool_batch_extract_audio_from_mov_files_description:
    'Batch extract audio from local MOV and M4V files only—processed one at a time—then download a ZIP of WAV or MP3. Steps: add .mov files → Extract → Download ZIP. Example: Load sample builds two short synthetic MOVs and packs their audio. Each file follows the same demux+OPFS caps as the single MOV tool (about 5 GiB / 6 hours with OPFS, about 1 GiB without). Failures skip with clear codes; successes still pack. Files stay on your device; not uploaded. Not for YouTube. One MOV? Use Extract audio from an MOV file. Mixed WebM/MOV/MKV? Use Batch extract audio from video files.',
  tool_batch_extract_audio_from_mov_files_article:
    'Folders of phone MOV exports often need only the AAC tracks. This page queues .mov and .m4v files, rejects other extensions up front, extracts each file alone for stable memory, skips failures, and packs successes into a ZIP. It does not fetch YouTube playlists and is not the mixed-format batch hub.',
  tool_batch_extract_audio_from_mov_files_choose: 'Choose MOV files',
  tool_batch_extract_audio_from_mov_files_hint:
    'Up to 30 local .mov or .m4v files. Non-MOV videos are rejected—use the mixed-format batch page. Per-file demux caps match the single MOV tool.',
  tool_batch_extract_audio_from_mov_files_list_label: 'MOV queue',
  tool_batch_extract_audio_from_mov_files_convert: 'Extract',
  tool_batch_extract_audio_from_mov_files_stop: 'Stop',
  tool_batch_extract_audio_from_mov_files_download: 'Download ZIP',
  tool_batch_extract_audio_from_mov_files_sample: 'Load sample',
  tool_batch_extract_audio_from_mov_files_clear: 'Clear',
  tool_batch_extract_audio_from_mov_files_advanced: 'Export format (optional)',
  tool_batch_extract_audio_from_mov_files_format_label: 'Output format',
  tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16-bit)',
  tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_mov_files_bitrate: 'MP3 bitrate',
  tool_batch_extract_audio_from_mov_files_settings_hint:
    'Default WAV suits short MOVs. Large files may stream as MP3 per file. No URL or YouTube fetch.',
  tool_batch_extract_audio_from_mov_files_progress: 'Batch extract progress',
  tool_batch_extract_audio_from_mov_files_read: 'Read',
  tool_batch_extract_audio_from_mov_files_decode: 'Demux',
  tool_batch_extract_audio_from_mov_files_extract: 'Extract',
  tool_batch_extract_audio_from_mov_files_write: 'Write',
  tool_batch_extract_audio_from_mov_files_pack: 'Pack ZIP',
  tool_batch_extract_audio_from_mov_files_done: 'Ready. Download the ZIP of extracted audio files.',
  tool_batch_extract_audio_from_mov_files_failed: 'Batch extract failed. Remove damaged MOVs or try fewer files.',
  tool_batch_extract_audio_from_mov_files_elapsed: '{s}s elapsed',
  tool_batch_extract_audio_from_mov_files_preview: 'Batch result',
  tool_batch_extract_audio_from_mov_files_result: 'Packed {n} audio files · ZIP {output} KiB',
  tool_batch_extract_audio_from_mov_files_partial: 'OK {ok}, failed {fail} · ZIP still includes successes ({output} KiB)',
  tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
  tool_batch_extract_audio_from_mov_files_empty: 'Add at least one MOV file or load the sample first.',
  tool_batch_extract_audio_from_mov_files_empty_state:
    'No MOVs yet. Drop local .mov or .m4v files, or load the sample. YouTube links and non-MOV videos are not accepted.',
  tool_batch_extract_audio_from_mov_files_remove: 'Remove',
  tool_batch_extract_audio_from_mov_files_queue_count: '{n} MOV file(s) in queue',
  tool_batch_extract_audio_from_mov_files_status_pending: 'Waiting',
  tool_batch_extract_audio_from_mov_files_status_running: 'Extracting…',
  tool_batch_extract_audio_from_mov_files_status_ok: 'Done',
  tool_batch_extract_audio_from_mov_files_status_fail: 'Failed',
  tool_batch_extract_audio_from_mov_files_status_stopped: 'Stopped',
  tool_batch_extract_audio_from_mov_files_err_file: 'Add MOV or M4V files only.',
  tool_batch_extract_audio_from_mov_files_err_format:
    'Only .mov and .m4v are accepted. MOV, WebM or MKV belong on Batch extract audio from video files.',
  tool_batch_extract_audio_from_mov_files_err_limit:
    'An MOV exceeds the demux cap (about 5 GiB / 6 hours with OPFS, else about 1 GiB). That row is skipped.',
  tool_batch_extract_audio_from_mov_files_err_container:
    'A file is not a valid ISOBMFF MOV for demux. That row is skipped.',
  tool_batch_extract_audio_from_mov_files_err_codec:
    'An MOV uses an audio codec the demux path cannot decode. That row is skipped.',
  tool_batch_extract_audio_from_mov_files_err_channels:
    'An MOV uses a channel layout the extractor cannot handle. That row is skipped.',
  tool_batch_extract_audio_from_mov_files_err_decode: 'The browser could not decode audio from an MOV. That row is skipped.',
  tool_batch_extract_audio_from_mov_files_err_encoder: 'Could not write an audio file. Check the format, then try Extract again.',
  tool_batch_extract_audio_from_mov_files_err_zip: 'Could not build the ZIP. Try fewer MOV files.',
  tool_batch_extract_audio_from_mov_files_err_too_many: 'Queue limit is 30 MOV files.',
  tool_batch_extract_audio_from_mov_files_err_sample:
    'Could not build sample MOVs in this browser. Drop your own local .mov files instead.',
  tool_batch_extract_audio_from_mov_files_err_unsupported: 'This browser lacks Web Audio needed for extraction.',
  tool_batch_extract_audio_from_mov_files_err_empty: 'No usable audio was captured from the MOV queue.',
  tool_batch_extract_audio_from_mov_files_forced_mp3: 'A long/large MOV used streaming MP3 for that row.',
  tool_batch_extract_audio_from_mov_files_how_title: 'How to batch extract audio from MOV files',
  tool_batch_extract_audio_from_mov_files_how_body:
    'Queue local MOVs, extract each track one-by-one, then download a ZIP—without uploading or pasting URLs.',
  tool_batch_extract_audio_from_mov_files_how_item_1:
    'Choose several local .mov or .m4v files, or click Load sample for two short synthetic MOVs.',
  tool_batch_extract_audio_from_mov_files_how_item_2: 'Open Export format if you need MP3 instead of WAV, then set bitrate when needed.',
  tool_batch_extract_audio_from_mov_files_how_item_3:
    'Click Extract and watch Read → Demux → Extract → Write per file; use Stop to cancel the rest.',
  tool_batch_extract_audio_from_mov_files_how_item_4:
    'When the HUD finishes, click Download ZIP. Failed rows skip; successes still pack when at least one works.',
  tool_batch_extract_audio_from_mov_files_why_choose_title: 'Why choose our Batch extract audio from MOV files tools',
  tool_batch_extract_audio_from_mov_files_why_choose_item_1:
    'MOV-only accept matches “bulk mov to mp3” folders without silently mixing WebM or MOV into the queue.',
  tool_batch_extract_audio_from_mov_files_why_choose_item_2:
    'Sequential extract keeps memory stable when each phone export can be gigabytes with AAC inside ISOBMFF.',
  tool_batch_extract_audio_from_mov_files_why_choose_item_3:
    'Per-row status shows waiting, extracting, done, or failed—one bad MOV does not wipe the whole ZIP.',
  tool_batch_extract_audio_from_mov_files_why_choose_item_4:
    'Stop aborts mid-batch; Download ZIP stays disabled until a real archive exists.',
  tool_batch_extract_audio_from_mov_files_rules_title: 'MOV queue, sequential extract and ZIP',
  tool_batch_extract_audio_from_mov_files_rules_body:
    'Each MOV is classified, extracted alone, then stored in the ZIP. Partial ZIPs keep successes. Not YouTube-to-MP3 and not mute-video export.',
  tool_batch_extract_audio_from_mov_files_rules_item_1:
    'Up to 30 .mov/.m4v files; each follows demux caps (about 5 GiB / 6 hours with OPFS).',
  tool_batch_extract_audio_from_mov_files_rules_item_2:
    'Non-MOV files are rejected at enqueue with err_format—use the mixed-format batch hub for MOV/WebM/MKV.',
  tool_batch_extract_audio_from_mov_files_rules_item_3:
    'One failure skips that row; other MOVs still pack when at least one succeeds.',
  tool_batch_extract_audio_from_mov_files_rules_item_4:
    'Processing stays on your device; not uploaded to a server.',
  tool_batch_extract_audio_from_mov_files_example_title: 'Try a real MOV batch',
  tool_batch_extract_audio_from_mov_files_example:
    'Load sample builds two short MOV clips with tones (when MediaRecorder supports H.264+AAC), runs Extract, and packs two audio files into a ZIP.',
  tool_batch_extract_audio_from_mov_files_usecases_title: 'When this helps',
  tool_batch_extract_audio_from_mov_files_usecase_1:
    'You shot a folder of phone MOVs and want mp4-to-MP3 style audio in one ZIP without cloud upload.',
  tool_batch_extract_audio_from_mov_files_usecase_2:
    'A week of screen-recording MOVs should become shareable audio files on disk—not from YouTube.',
  tool_batch_extract_audio_from_mov_files_usecase_3:
    'Bulk rip AAC tracks from camera MOV exports while keeping originals untouched.',
  tool_batch_extract_audio_from_mov_files_faq_q1: 'Can I paste a YouTube URL or playlist?',
  tool_batch_extract_audio_from_mov_files_faq_a1:
    'No. Only local MOV/M4V files you drop or choose. Save videos to your device first.',
  tool_batch_extract_audio_from_mov_files_faq_q2: 'I only have one MOV—should I use this page?',
  tool_batch_extract_audio_from_mov_files_faq_a2:
    'Use Extract audio from an MOV file for a single file. This batch page is for many MOVs and a ZIP download.',
  tool_batch_extract_audio_from_mov_files_faq_q3: 'My folder has .mov and .mov—what now?',
  tool_batch_extract_audio_from_mov_files_faq_a3:
    'This page accepts only .mov/.m4v. Open Batch extract audio from video files for mixed containers.',
  tool_batch_extract_audio_from_mov_files_faq_q4: 'Is this bulk mov to mp3 online?',
  tool_batch_extract_audio_from_mov_files_faq_a4:
    'Similar goal for local MOVs: demux AAC and pack MP3 or WAV in a ZIP on your device—no URL fetch.',
  tool_batch_extract_audio_from_mov_files_faq_q5: 'Why process one MOV at a time?',
  tool_batch_extract_audio_from_mov_files_faq_a5:
    'Decoding every MOV at once can spike memory. Sequential extract stores only the current file’s audio blob in the ZIP.',
  tool_batch_extract_audio_from_mov_files_faq_q6: 'Is my video uploaded to a server?',
  tool_batch_extract_audio_from_mov_files_faq_a6:
    'No. Reading, demux and ZIP packing run in your browser on your device.',
};
export default en;
