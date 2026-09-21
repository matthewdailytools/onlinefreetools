import type { SiteLangDict } from '../../../types';

/**
 * English master copy for compress-dynamic-range-of-a-voice-recording (S18).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥6.
 * ≠ MP3 size compress (S10; EN/ZH “compress”), ≠ gain (S15), ≠ peak (S16), ≠ LUFS (S17).
 */
const en: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "Compress dynamic range of a voice recording",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    "Flatten uneven voice peaks with light/medium/heavy presets and optional makeup, then download a 16-bit WAV. On-device only.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    "Compress the dynamic range of a voice recording with light, medium or heavy threshold/ratio presets and optional makeup gain. Steps: compress, preview, download WAV. Example: load the uneven sample. Dynamics reshaping—not MP3 size compress, not fixed dB gain, not peak or LUFS normalize. Audio stays on your device; never uploaded.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    "Uneven voice takes often jump from whispers to peaks. This page runs a soft-knee (light/medium) or hard-knee (heavy) peak-envelope compressor in pure JavaScript: light ≈ −18 dB / 2:1, medium ≈ −24 dB / 3:1 (default), heavy ≈ −30 dB / 6:1. Optional makeup restores overall level after peaks are tamed, with soft peak protect before writing 16-bit WAV. Loud moments are reduced more than soft ones—that is dynamic-range compression, not shrinking an MP3 to save bytes (do not confuse Chinese/English “compress”), not a fixed whole-file dB boost, not peak dBFS normalize, and not podcast LUFS matching. Channel count stays 1 or 2. Keep the original master; the download is a new file. Work runs in the browser on your device.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "Choose an audio file",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "Drop one WAV, MP3, M4A, AAC or OGG. Maximum 40 MiB and 10 minutes; mono or stereo.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "Compress",
  tool_compress_dynamic_range_of_a_voice_recording_download: "Download WAV",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "Load sample",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "Clear",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "Compressor settings",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "Intensity preset",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "Light",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "Medium",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "Heavy",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "Makeup gain",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "On",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "Off",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    "Light (−18 dB, 2:1, soft knee) is mild. Medium (−24 dB, 3:1, soft knee) suits most voiceovers. Heavy (−30 dB, 6:1, hard knee) squeezes peaks harder. Makeup (default On) restores overall level after compression with soft peak protect.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "Compress progress",
  tool_compress_dynamic_range_of_a_voice_recording_read: "Read",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "Decode",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "Compress",
  tool_compress_dynamic_range_of_a_voice_recording_write: "Write",
  tool_compress_dynamic_range_of_a_voice_recording_done: "Ready. Preview the compressed WAV, then Download WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "Compress failed. Try a smaller, valid audio file.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "{s}s elapsed",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "Listen to the compressed WAV",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds}s · {preset} · makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "two-second-uneven-voice-demo",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "Choose an audio file or load the sample first.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "Drop exactly one audio file.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format: "Unsupported or damaged audio. Use a file your browser can decode (WAV, MP3, M4A, AAC or OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "Use a file no larger than 40 MiB or 10 minutes, with one or two channels.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "The browser could not decode this audio. Try another valid recording.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "Could not write the compressed WAV. Check the preset and makeup, then try Compress again.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "Level is essentially silence—nothing to compress. Try a recording with audible level.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "How to compress dynamic range of a voice recording",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    "Pick an intensity preset, choose optional makeup, compress dynamics, listen, then download a 16-bit WAV—without uploading the file.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "Choose a voice recording, or select Load sample for a two-second uneven tone demonstration.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    "Open Compressor settings and pick Light, Medium (default), or Heavy; leave Makeup On unless you want only peak control.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "Click Compress and wait for Read → Decode → Compress → Write to finish.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "Preview the result, check preset and makeup, then click Download WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "Why choose our Compress dynamic range of a voice recording tools",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "See preset, makeup state and output KiB before you save.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "Three clear voice intensity presets—one dynamics job, not a buried MP3-size / gain / normalize wall.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3:
    "Decoding, compression and WAV writing run on your device; the page does not upload your recording to process it.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "Changing the preset, makeup or the input clears the old download so you never save a stale WAV by mistake.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "Threshold, ratio, makeup and limits",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    "A peak-envelope compressor reduces gain when the level crosses the threshold, by the chosen ratio (soft knee on Light/Medium; hard knee on Heavy). Makeup multiplies afterward; soft peak protect keeps samples under ~0.99. That reshapes loud vs soft parts—unlike fixed whole-file gain, peak normalize, LUFS match, or MP3 bitrate shrink.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    "Medium (−24 dB, 3:1, soft knee) is the default. Light is milder; Heavy uses a lower threshold, higher ratio and hard knee.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2:
    "Makeup defaults On and restores overall level after peaks are tamed. Turn Off if you only want quieter peaks without makeup lift.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "Channel count stays 1 or 2 in the export. Tags are not copied. The original file is never overwritten.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4:
    "One file up to 40 MiB and ten minutes. This is not MP3 size compression, not fixed-gain amplify, not peak normalize, and not LUFS matching.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "Try a real dynamic-range compress",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    "Load sample builds a two-second 440 Hz tone with loud and soft bursts, then Compress at Medium with Makeup On automatically. Playback never starts by itself—press play on the preview if you want to hear the flatter dynamics.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "When this helps",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "A voiceover that jumps from quiet phrases to loud peaks—pick Medium, compress, download WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "An interview track you want more even before loudness matching, without shrinking an MP3 for file size.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_3: "Whispers and peaks fight each other in one take and you want even listening level.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "Is this the same as compressing / shrinking an MP3 file size?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "No. “Compress” here means dynamic-range compression (threshold/ratio), not reducing bitrate or bytes. For smaller MP3 files, use Reduce an MP3 file size. In Chinese, 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "Is this the same as making a quiet recording louder with fixed dB gain?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "No. Fixed gain multiplies the whole clip by one dB amount. Here loud parts are reduced more than soft parts. For uniform boost, use Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "Is this peak normalize or podcast LUFS matching?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "No. Peak normalize scales so the absolute peak hits a dBFS target. LUFS matching aims at integrated loudness. This page reshapes dynamics with a compressor. Use Normalize an audio file to peak or Match podcast loudness to −16 LUFS for those jobs.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "What do Light, Medium and Heavy change?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4:
    "They set threshold, ratio and knee. Light ≈ −18 dB / 2:1 soft; Medium ≈ −24 / 3:1 soft; Heavy ≈ −30 / 6:1 hard. Makeup On/Off is separate.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "Should I leave Makeup On?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    "Usually yes—compression can make the average quieter; makeup restores level with soft peak protect. Turn Off when you only want quieter peaks without a post-boost.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "Is my audio uploaded to a server?",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "No. Decoding, compression and WAV writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed. For loudness or gain jobs, use Match podcast loudness to −16 LUFS or Make a quiet recording louder.",
};
export default en;
