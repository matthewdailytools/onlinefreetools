import type { SiteLangDict } from '../../../types';

/**
 * English master copy for extract-audio-from-an-mp4-file.
 * MP4/M4V only; AAC in ISOBMFF; demux+OPFS caps; anti-YouTube; hub/batch sibling links.
 */
const en: SiteLangDict = {
  tool_extract_audio_from_an_mp4_file_title: 'Extract audio from an MP4 file',
  tool_extract_audio_from_an_mp4_file_desc:
    'Pull AAC audio from one local MP4 or M4V on your device—WAV or MP3—with demux+OPFS for large files; not uploaded.',
  tool_extract_audio_from_an_mp4_file_description:
    'Extract the audio track from one local MP4 or M4V in your browser—AAC inside the container—then download WAV or MP3. Steps: choose MP4 → Extract → preview → download. Example: Load sample builds a short synthetic MP4 when your browser can record H.264+AAC. Large phone exports use ISOBMFF demux with WebCodecs and OPFS streaming (about 5 GiB / 6 hours with private-file storage, about 1 GiB without). Files stay on your device; not uploaded to a server. Not for YouTube or URL download. WebM, MOV or MKV? Use Extract audio from a video file. Many MP4s? Use Batch extract audio from MP4 files.',
  tool_extract_audio_from_an_mp4_file_article:
    'Phone and camera MP4s usually store voice or music as AAC in ftyp/moov/mdat boxes. This page accepts only .mp4 and .m4v (or video/mp4), demuxes the audio track with the shared browser engine, and writes 16-bit WAV or MP3 without uploading the video. It does not download from YouTube, does not export a silent MP4, and is not an audio-only .m4a rename job. Mixed folders belong on the general video hub or the MP4 batch page.',
  tool_extract_audio_from_an_mp4_file_choose: 'Choose an MP4 file',
  tool_extract_audio_from_an_mp4_file_hint:
    'Drop one local .mp4 or .m4v. Large exports: about 5 GiB / 6 hours with OPFS demux (about 1 GiB without). MOV/WebM/MKV are rejected here—use the mixed-format video tool.',
  tool_extract_audio_from_an_mp4_file_convert: 'Extract',
  tool_extract_audio_from_an_mp4_file_download: 'Download',
  tool_extract_audio_from_an_mp4_file_download_wav: 'Download WAV',
  tool_extract_audio_from_an_mp4_file_download_mp3: 'Download MP3',
  tool_extract_audio_from_an_mp4_file_sample: 'Load sample',
  tool_extract_audio_from_an_mp4_file_clear: 'Clear',
  tool_extract_audio_from_an_mp4_file_advanced: 'Export format',
  tool_extract_audio_from_an_mp4_file_format_label: 'Output format',
  tool_extract_audio_from_an_mp4_file_format_wav: 'WAV (16-bit)',
  tool_extract_audio_from_an_mp4_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mp4_file_bitrate: 'MP3 bitrate',
  tool_extract_audio_from_an_mp4_file_settings_hint:
    'Default WAV suits short MP4s. Long or large files may stream to MP3 automatically to keep memory stable. Bitrate applies to MP3 only. No URL or YouTube fetch.',
  tool_extract_audio_from_an_mp4_file_progress: 'Extract progress',
  tool_extract_audio_from_an_mp4_file_read: 'Read',
  tool_extract_audio_from_an_mp4_file_decode: 'Demux',
  tool_extract_audio_from_an_mp4_file_extract: 'Extract',
  tool_extract_audio_from_an_mp4_file_write: 'Write',
  tool_extract_audio_from_an_mp4_file_done: 'Ready. Preview the audio, then download WAV or MP3.',
  tool_extract_audio_from_an_mp4_file_failed: 'Extract failed. Try another MP4 or a shorter clip.',
  tool_extract_audio_from_an_mp4_file_elapsed: '{s}s elapsed',
  tool_extract_audio_from_an_mp4_file_preview: 'Listen to the extracted audio',
  tool_extract_audio_from_an_mp4_file_result: '{seconds}s · {channels} ch · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mp4_file_sample_name: 'short-mp4-audio-demo',
  tool_extract_audio_from_an_mp4_file_empty: 'Choose an MP4 file or load the sample first.',
  tool_extract_audio_from_an_mp4_file_empty_state:
    'No MP4 loaded yet. Drop a local .mp4 or .m4v, or click Load sample. This page does not accept YouTube links or non-MP4 video formats.',
  tool_extract_audio_from_an_mp4_file_err_file: 'Drop exactly one MP4 or M4V file.',
  tool_extract_audio_from_an_mp4_file_err_format:
    'This page accepts only .mp4 or .m4v files (video/mp4). MOV, WebM, MKV or audio-only .m4a belong on other tools—see the mixed-format extract page.',
  tool_extract_audio_from_an_mp4_file_err_limit:
    'This MP4 exceeds the demux size or duration cap (about 5 GiB / 6 hours with OPFS, else about 1 GiB).',
  tool_extract_audio_from_an_mp4_file_err_container:
    'The file is not a valid ISOBMFF MP4/M4V for demux. Try re-exporting from your phone or editor as .mp4 with AAC audio.',
  tool_extract_audio_from_an_mp4_file_err_codec:
    'This AAC or audio codec is not supported on the demux path (for example some E-AC-3 tracks). Remux to AAC-LC in MP4 or pick another file.',
  tool_extract_audio_from_an_mp4_file_err_channels:
    'This track uses a channel layout the extractor cannot handle. Prefer mono or stereo AAC in MP4.',
  tool_extract_audio_from_an_mp4_file_err_decode: 'The browser could not decode audio from this MP4. Try another export or a shorter clip.',
  tool_extract_audio_from_an_mp4_file_err_encoder: 'Could not write the audio file. Check the format, then try Extract again.',
  tool_extract_audio_from_an_mp4_file_err_sample:
    'Could not build a sample MP4 in this browser. Drop your own local .mp4 instead.',
  tool_extract_audio_from_an_mp4_file_how_title: 'How to extract audio from an MP4 file',
  tool_extract_audio_from_an_mp4_file_how_body:
    'Drop a local MP4 or M4V, pick WAV or MP3, run Extract, listen, then download—without uploading or pasting a URL.',
  tool_extract_audio_from_an_mp4_file_how_item_1:
    'Choose one local .mp4 or .m4v, or click Load sample for a short synthetic MP4 when MediaRecorder supports it.',
  tool_extract_audio_from_an_mp4_file_how_item_2: 'Open Export format and pick WAV (default) or MP3; set MP3 bitrate if needed.',
  tool_extract_audio_from_an_mp4_file_how_item_3:
    'Click Extract and wait for Read → Demux → Extract → Write (or Stop to cancel a long demux).',
  tool_extract_audio_from_an_mp4_file_how_item_4: 'Preview the track, check the result line, then click Download WAV or Download MP3.',
  tool_extract_audio_from_an_mp4_file_why_choose_title: 'Why choose our Extract audio from an MP4 file tools',
  tool_extract_audio_from_an_mp4_file_why_choose_item_1:
    'MP4-only accept keeps the first screen aligned with “mp4 to mp3” searches—no mixed dropzone pretending every container is equal.',
  tool_extract_audio_from_an_mp4_file_why_choose_item_2:
    'Honest ISOBMFF demux caps with OPFS streaming for multi-gigabyte phone exports, plus clear err_codec messages in MP4 context.',
  tool_extract_audio_from_an_mp4_file_why_choose_item_3:
    'Decoding runs in your browser tab; the MP4 never uploads to our servers for processing.',
  tool_extract_audio_from_an_mp4_file_why_choose_item_4:
    'Related links point to the mixed-format hub, MP4 batch ZIP, and trim tools without doorway-style duplicate URLs.',
  tool_extract_audio_from_an_mp4_file_rules_title: 'MP4/M4V only, AAC demux and caps',
  tool_extract_audio_from_an_mp4_file_rules_body:
    'Each run reads one local MP4/M4V, demuxes AAC (or browser-decodable audio) from ISOBMFF boxes, then writes WAV or MP3. This is not YouTube-to-MP3, not mute-video export, and not a bulk folder job.',
  tool_extract_audio_from_an_mp4_file_rules_item_1:
    'Large MP4/M4V: up to about 5 GiB and six hours with OPFS demux (about 1 GiB without OPFS). Small files may decode in one pass.',
  tool_extract_audio_from_an_mp4_file_rules_item_2:
    'Only .mp4, .m4v and video/mp4 are accepted. MOV with .mov extension is rejected even if the engine could read some MOV files elsewhere.',
  tool_extract_audio_from_an_mp4_file_rules_item_3:
    'No URL or YouTube download. Paste links are not accepted—save the MP4 to your device first.',
  tool_extract_audio_from_an_mp4_file_rules_item_4:
    'Audio-only .m4a without video is out of scope here. For many MP4s, open Batch extract audio from MP4 files.',
  tool_extract_audio_from_an_mp4_file_example_title: 'Try a real MP4 extract',
  tool_extract_audio_from_an_mp4_file_example:
    'Load sample records a short synthetic MP4 with a tone when H.264+AAC MediaRecorder is available, then Extract runs. Prefer your own phone MP4 when the sample cannot be built.',
  tool_extract_audio_from_an_mp4_file_usecases_title: 'When this helps',
  tool_extract_audio_from_an_mp4_file_usecase_1:
    'You exported one phone MP4 and only need mp4-to-MP3 or WAV for a podcast clip—Extract, then download.',
  tool_extract_audio_from_an_mp4_file_usecase_2:
    'A long screen-recording MP4 should become shareable audio without uploading gigabytes to a cloud converter.',
  tool_extract_audio_from_an_mp4_file_usecase_3:
    'You want to rip the AAC audio track from a camera MP4 while keeping the original video file untouched.',
  tool_extract_audio_from_an_mp4_file_faq_q1: 'Can I paste a YouTube URL or any link?',
  tool_extract_audio_from_an_mp4_file_faq_a1:
    'No. Only a local MP4 or M4V you drop or choose. Save the video to your device first—this is not YouTube-to-MP3.',
  tool_extract_audio_from_an_mp4_file_faq_q2: 'Is this the same as mp4 to mp3 online?',
  tool_extract_audio_from_an_mp4_file_faq_a2:
    'Same task for one local MP4: demux AAC and download MP3 or WAV on your device. Many sites imply URL fetch; this page does not.',
  tool_extract_audio_from_an_mp4_file_faq_q3: 'My file is .mov or .webm—why was it rejected?',
  tool_extract_audio_from_an_mp4_file_faq_a3:
    'This slug is MP4-only. Open Extract audio from a video file for mixed containers, or remux to .mp4 with AAC first.',
  tool_extract_audio_from_an_mp4_file_faq_q4: 'What about audio-only .m4a?',
  tool_extract_audio_from_an_mp4_file_faq_a4:
    'M4A-only drops are not the main task here. Use a dedicated audio converter, or wrap audio in a video MP4 if you need this demux path.',
  tool_extract_audio_from_an_mp4_file_faq_q5: 'Is my MP4 uploaded to a server?',
  tool_extract_audio_from_an_mp4_file_faq_a5:
    'No. Reading, demux and writing run in your browser on your device. The page needs a network connection when first loaded to fetch scripts.',
  tool_extract_audio_from_an_mp4_file_faq_q6: 'I have many MP4 files—use this page?',
  tool_extract_audio_from_an_mp4_file_faq_a6:
    'This page is for one MP4. For a folder of .mp4 files, use Batch extract audio from MP4 files—it queues sequentially and packs a ZIP.',
  tool_extract_audio_from_an_mp4_file_faq_q7: 'Can I trim the audio after extracting?',
  tool_extract_audio_from_an_mp4_file_faq_a7:
    'Not on this page. Download WAV or MP3, then use Trim an audio clip and export for start/end cuts.',
  tool_extract_audio_from_an_mp4_file_stop: 'Stop',
  tool_extract_audio_from_an_mp4_file_status_stopped: 'Stopped. No partial audio file is kept for this run.',
  tool_extract_audio_from_an_mp4_file_forced_mp3:
    'Long/large MP4 used demux/stream MP3 (full WAV PCM would peak too much memory).',
  tool_extract_audio_from_an_mp4_file_err_unsupported: 'This browser lacks Web Audio needed for extraction.',
  tool_extract_audio_from_an_mp4_file_err_empty: 'No usable audio samples were captured from the MP4.',
};
export default en;
