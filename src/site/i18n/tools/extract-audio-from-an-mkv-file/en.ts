import type { SiteLangDict } from '../../../types';

/**
 * English master for extract-audio-from-an-mkv-file.
 * MKV-only; MediaElement fallback ~500 MiB / 4 h.
 * D1 honesty: multi-GB / DDP-Atmos → desktop ffmpeg to AAC stereo MP4, then MP4 extract page.
 */
const en: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'Extract audio from an MKV file',
  tool_extract_audio_from_an_mkv_file_desc:
    'Extract audio from one local MKV to WAV or MP3 in the browser when the file fits the ~500 MiB / 4 h fallback path. Multi-gigabyte or DDP/Atmos MKV: convert to AAC MP4 on your computer first, then use the MP4 extract tool.',
  tool_extract_audio_from_an_mkv_file_description:
    'Extract the audio track from one local MKV in the browser, then download WAV or MP3. Steps: choose MKV → Extract → preview → download. Example: Load sample builds a short synthetic stand-in when MediaRecorder works—prefer a real .mkv under about 500 MiB. This page uses MediaElement fallback (about 500 MiB / 4 hours); oversize files fail fast with err_container. Multi-gigabyte MKV or Dolby Digital Plus / Atmos (E-AC-3) tracks are not supported here—on your computer run ffmpeg to make an AAC stereo MP4 (video can copy), then open Extract audio from an MP4 file for large demux. Local only—not YouTube URL download. Never uploaded. Many MKVs? Use Batch extract audio from MKV files.',
  tool_extract_audio_from_an_mkv_file_article:
    'Screen recordings and captures often ship as MKV. This page accepts only .mkv, uses the shared fallback extract path, and writes WAV or MP3 without uploading. It does not claim ISOBMFF demux or multi-gigabyte OPFS streaming—that path is for MP4/MOV with AAC. It does not decode E-AC-3 / DTS in the browser. For a multi-GB rip or Atmos track, convert on-device with ffmpeg to AAC MP4, then use the MP4 extract landing. Mixed folders belong on the video hub or hub batch.',
  tool_extract_audio_from_an_mkv_file_choose: 'Choose a MKV file',
  tool_extract_audio_from_an_mkv_file_hint:
    'Drop one local .mkv within about 500 MiB / 4 hours. Larger or DDP/Atmos MKV: on your PC, ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4, then use Extract audio from an MP4 file.',
  tool_extract_audio_from_an_mkv_file_convert: 'Extract',
  tool_extract_audio_from_an_mkv_file_download: 'Download',
  tool_extract_audio_from_an_mkv_file_download_wav: 'Download WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'Download MP3',
  tool_extract_audio_from_an_mkv_file_sample: 'Load sample',
  tool_extract_audio_from_an_mkv_file_clear: 'Clear',
  tool_extract_audio_from_an_mkv_file_advanced: 'Export format',
  tool_extract_audio_from_an_mkv_file_format_label: 'Output format',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16-bit)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'MP3 bitrate',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'Default WAV suits short MKVs. Larger clips may stream MP3. Cap is fallback (~500 MiB), not MP4 demux. No URL fetch.',
  tool_extract_audio_from_an_mkv_file_progress: 'Extract progress',
  tool_extract_audio_from_an_mkv_file_read: 'Read',
  tool_extract_audio_from_an_mkv_file_decode: 'Decode',
  tool_extract_audio_from_an_mkv_file_extract: 'Extract',
  tool_extract_audio_from_an_mkv_file_write: 'Write',
  tool_extract_audio_from_an_mkv_file_done: 'Ready. Preview the audio, then download WAV or MP3.',
  tool_extract_audio_from_an_mkv_file_failed: 'Extract failed. Try a smaller MKV, or convert to AAC MP4 with ffmpeg first.',
  tool_extract_audio_from_an_mkv_file_elapsed: '{s}s elapsed',
  tool_extract_audio_from_an_mkv_file_preview: 'Listen to the extracted audio',
  tool_extract_audio_from_an_mkv_file_result: '{seconds}s · {channels} ch · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: 'short-mkv-audio-demo',
  tool_extract_audio_from_an_mkv_file_empty: 'Choose a MKV file or load the sample first.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'No file yet. Drop a local .mkv within about 500 MiB, or Load sample. Multi-GB / DDP: convert to AAC MP4 with ffmpeg first. Not YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'Drop exactly one MKV file.',
  tool_extract_audio_from_an_mkv_file_err_format: 'Unsupported file. Use a .mkv only on this page.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'This MKV exceeds a duration or size guard on the fallback path.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'This MKV is over the fallback cap (about 500 MiB / 4 hours) or not decodable here. On your computer: ffmpeg to AAC stereo MP4 (copy video), then Extract audio from an MP4 file—or use a smaller MKV.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'This MKV audio codec is not supported in the browser (often E-AC-3 / DDP / Atmos). Convert to AAC in an MP4 with ffmpeg, then use the MP4 extract page.',
  tool_extract_audio_from_an_mkv_file_err_channels: 'This track uses a channel layout the extractor cannot handle. Downmix to stereo AAC in an MP4 first.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'The browser could not decode audio from this MKV.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'Could not write the audio file. Try Extract again.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'Could not build a sample MKV. Drop your own .mkv instead.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'This browser lacks Web Audio needed for extraction.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'No usable audio samples were captured.',
  tool_extract_audio_from_an_mkv_file_stop: 'Stop',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'Stopped. No partial audio file is kept.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'Long/large input used stream MP3 on the fallback path.',
  tool_extract_audio_from_an_mkv_file_how_title: 'How to extract audio from an MKV file',
  tool_extract_audio_from_an_mkv_file_how_body:
    'For small local MKV: drop, Extract, download. For multi-GB or DDP/Atmos: convert to AAC MP4 with ffmpeg on your device first, then use the MP4 extract tool.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'Choose a local .mkv within about 500 MiB, or Load sample when MediaRecorder works. If the file is multi-GB or uses DDP/Atmos, stop here and convert with ffmpeg first.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'Open Export format and pick WAV or MP3; set bitrate if needed.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'Click Extract and wait for Read → Decode → Extract → Write (or Stop).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'Preview, then Download WAV or Download MP3.',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'Why choose our Extract audio from an MKV file tools',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1: 'MKV-only accept so Matroska files are not mixed with MP4 landings.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2: 'Honest fallback caps—no fake 5 GiB demux marketing for MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3: 'Clear path for oversize/DDP files: desktop ffmpeg → AAC MP4 → MP4 extract page.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'Processing stays on your device; Stop cancels mid-run.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'MKV only and fallback limits',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'One local MKV per run on the MediaElement fallback path. Not YouTube-to-MP3. Not mute-video export. Large or exotic-codec MKV need an on-device AAC MP4 first.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    'About 500 MiB / 4 hours fallback. Oversize → err_container. Large demux is MP4/MOV only today.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'No URL or YouTube download.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS usually fail with err_codec. Example on your computer: ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 then Extract audio from an MP4 file.',
  tool_extract_audio_from_an_mkv_file_rules_item_4: 'Original MKV is never overwritten. Batch MKVs use the MKV batch tool.',
  tool_extract_audio_from_an_mkv_file_example_title: 'Try a real MKV extract',
  tool_extract_audio_from_an_mkv_file_example:
    'Load sample builds a short synthetic stand-in when MediaRecorder works, then Extract runs. Prefer your own .mkv under the fallback cap. Multi-GB rips: convert to AAC MP4 with ffmpeg, then use the MP4 page.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'When this helps',
  tool_extract_audio_from_an_mkv_file_usecase_1: 'Browser screen capture MKV under ~500 MiB → shareable MP3 without uploading.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'A short MKV interview clip needs only the audio track as WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'You know the file is a huge MKV or DDP—convert to AAC MP4 locally, then use the MP4 extract tool instead of this page.',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'Can I paste a YouTube URL?',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'No. Local .mkv only.',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'Why not 5 GiB like the MP4 page?',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'Large demux today is ISOBMFF (MP4/MOV). MKV uses MediaElement fallback about 500 MiB until a Matroska demux ships.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'My MKV is multi-GB or Dolby Atmos / DDP—what should I do?',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'This page will reject it (err_container and/or err_codec). On your computer, convert to AAC stereo MP4, for example: ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. Then open Extract audio from an MP4 file for the large demux path. Pure remux without AAC still fails if the track stays E-AC-3.',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'Does this mute a MKV (silent video)?',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'No. It extracts audio into WAV/MP3 only.',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'Is my file uploaded?',
  tool_extract_audio_from_an_mkv_file_faq_a5: 'No. Decode and write run in your browser. The ffmpeg step (if needed) also stays on your computer.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'I have many MKVs—which page?',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'Small MKV folders: Batch extract audio from MKV files. Huge or DDP files: convert each to AAC MP4 first, then use Batch extract audio from MP4 files or the single MP4 page.',
  tool_extract_audio_from_an_mkv_file_faq_q7: 'Can I trim after extract?',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'Not here. Download, then use Trim an audio clip and export.',
};
export default en;
