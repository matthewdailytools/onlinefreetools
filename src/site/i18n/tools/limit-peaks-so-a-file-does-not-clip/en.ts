import type { SiteLangDict } from '../../../types';

/**
 * English master copy for limit-peaks-so-a-file-does-not-clip (S19).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥6.
 * ≠ compressor (S18), ≠ peak normalize (S16), ≠ gain (S15), ≠ LUFS (S17).
 */
const en: SiteLangDict = {
  tool_limit_peaks_so_a_file_does_not_clip_title: "Limit peaks so a file does not clip",
  tool_limit_peaks_so_a_file_does_not_clip_desc:
    "Cap hot peaks at −0.1 or −1 dBFS with soft or brickwall limiting, then download a 16-bit WAV. On-device only.",
  tool_limit_peaks_so_a_file_does_not_clip_description:
    "Limit peaks so a file does not clip with −0.1 or −1 dBFS ceilings and soft or brickwall modes. Steps: limit, preview, download WAV. Example: load the hot sample. Peak limiting only—not a compressor, not peak normalize, not fixed dB gain, not LUFS. Audio stays on your device; never uploaded.",
  tool_limit_peaks_so_a_file_does_not_clip_article:
    "Delivery and mix templates often forbid samples that slam into digital full scale. This page applies a ceiling limiter in pure JavaScript: choose −0.1 or −1 dBFS (default −1) and Soft (gentle knee) or Brickwall (hard clamp). Samples under the knee or ceiling pass unchanged—nothing is boosted. That is peak limiting to prevent clipping, not dynamic-range compression that reshapes loud vs soft over time, not peak normalize that scales the whole clip to hit a target, not a fixed whole-file dB boost, and not podcast LUFS matching. Channel count stays 1 or 2. Keep the original master; the download is a new 16-bit WAV. Work runs in the browser on your device.",
  tool_limit_peaks_so_a_file_does_not_clip_choose: "Choose an audio file",
  tool_limit_peaks_so_a_file_does_not_clip_hint: "Drop one WAV, MP3, M4A, AAC or OGG. Maximum 40 MiB and 10 minutes; mono or stereo.",
  tool_limit_peaks_so_a_file_does_not_clip_convert: "Limit",
  tool_limit_peaks_so_a_file_does_not_clip_download: "Download WAV",
  tool_limit_peaks_so_a_file_does_not_clip_sample: "Load sample",
  tool_limit_peaks_so_a_file_does_not_clip_clear: "Clear",
  tool_limit_peaks_so_a_file_does_not_clip_advanced: "Limiter settings",
  tool_limit_peaks_so_a_file_does_not_clip_ceiling_label: "Ceiling (dBFS)",
  tool_limit_peaks_so_a_file_does_not_clip_mode_label: "Limiter mode",
  tool_limit_peaks_so_a_file_does_not_clip_mode_soft: "Soft",
  tool_limit_peaks_so_a_file_does_not_clip_mode_brickwall: "Brickwall",
  tool_limit_peaks_so_a_file_does_not_clip_settings_hint:
    "Default −1 dBFS Soft starts a gentle knee below the ceiling. −0.1 is hotter. Brickwall hard-clamps every sample at the ceiling. Material under the limit is never boosted.",
  tool_limit_peaks_so_a_file_does_not_clip_progress: "Limit progress",
  tool_limit_peaks_so_a_file_does_not_clip_read: "Read",
  tool_limit_peaks_so_a_file_does_not_clip_decode: "Decode",
  tool_limit_peaks_so_a_file_does_not_clip_limit: "Limit",
  tool_limit_peaks_so_a_file_does_not_clip_write: "Write",
  tool_limit_peaks_so_a_file_does_not_clip_done: "Ready. Preview the limited WAV, then Download WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_failed: "Limit failed. Try a smaller, valid audio file.",
  tool_limit_peaks_so_a_file_does_not_clip_elapsed: "{s}s elapsed",
  tool_limit_peaks_so_a_file_does_not_clip_preview: "Listen to the limited WAV",
  tool_limit_peaks_so_a_file_does_not_clip_result: "{seconds}s · Ceiling {ceiling} dBFS · {mode} · limited · peak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_limit_peaks_so_a_file_does_not_clip_result_passthrough: "{seconds}s · Ceiling {ceiling} dBFS · {mode} · no peaks over limit · peak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_limit_peaks_so_a_file_does_not_clip_limited_yes: "yes",
  tool_limit_peaks_so_a_file_does_not_clip_limited_no: "no",
  tool_limit_peaks_so_a_file_does_not_clip_sample_name: "two-second-hot-peaks-demo",
  tool_limit_peaks_so_a_file_does_not_clip_empty: "Choose an audio file or load the sample first.",
  tool_limit_peaks_so_a_file_does_not_clip_err_file: "Drop exactly one audio file.",
  tool_limit_peaks_so_a_file_does_not_clip_err_format: "Unsupported or damaged audio. Use a file your browser can decode (WAV, MP3, M4A, AAC or OGG).",
  tool_limit_peaks_so_a_file_does_not_clip_err_limit: "Use a file no larger than 40 MiB or 10 minutes, with one or two channels.",
  tool_limit_peaks_so_a_file_does_not_clip_err_decode: "The browser could not decode this audio. Try another valid recording.",
  tool_limit_peaks_so_a_file_does_not_clip_err_encoder: "Could not write the limited WAV. Check the ceiling and mode, then try Limit again.",
  tool_limit_peaks_so_a_file_does_not_clip_err_silence: "Level is essentially silence—nothing to limit. Try a recording with audible level.",
  tool_limit_peaks_so_a_file_does_not_clip_how_title: "How to limit peaks so a file does not clip",
  tool_limit_peaks_so_a_file_does_not_clip_how_body:
    "Pick a ceiling and mode, limit only the peaks that exceed it, listen, then download a 16-bit WAV—without uploading the file.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_1: "Choose an audio file, or select Load sample for a two-second hot-peaks demonstration.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_2: "Open Limiter settings and pick −0.1 or −1 dBFS (default −1) and Soft (default) or Brickwall.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_3: "Click Limit and wait for Read → Decode → Limit → Write to finish.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_4: "Preview the result, check whether peaks were limited, then click Download WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_title: "Why choose our Limit peaks so a file does not clip tools",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_1: "See ceiling, mode, peak before/after and output KiB before you save.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_2: "Two clear ceilings and Soft/Brickwall—one limiter job, not a buried normalize/compressor/gain wall.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_3:
    "Decoding, limiting and WAV writing run on your device; the page does not upload your recording to process it.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_4: "Changing the ceiling, mode or the input clears the old download so you never save a stale WAV by mistake.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_title: "Ceiling, Soft vs Brickwall and limits",
  tool_limit_peaks_so_a_file_does_not_clip_rules_body:
    "A limiter attenuates samples that exceed the ceiling (or soft knee). Soft starts gently below the ceiling; Brickwall hard-clamps. Samples under the limit are never boosted—unlike peak normalize, which scales the whole clip up or down to hit a target peak.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_1:
    "Default −1 dBFS Soft leaves modest headroom with a gentle knee. −0.1 is hotter. Brickwall never lets a sample exceed the ceiling.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_2:
    "If nothing exceeds the limit, peaks pass through unchanged and the result line says so. No makeup gain is applied.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_3: "Channel count stays 1 or 2 in the export. Tags are not copied. The original file is never overwritten.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_4:
    "One file up to 40 MiB and ten minutes. This is not a dynamic compressor, not peak normalize, not fixed-gain amplify, and not LUFS matching.",
  tool_limit_peaks_so_a_file_does_not_clip_example_title: "Try a real peak limit",
  tool_limit_peaks_so_a_file_does_not_clip_example:
    "Load sample builds a two-second 440 Hz tone with hot bursts above full scale, then Limit at −1 dBFS Soft automatically. Playback never starts by itself—press play on the preview if you want to hear the capped peaks.",
  tool_limit_peaks_so_a_file_does_not_clip_usecases_title: "When this helps",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_1: "A mix that occasionally spikes into clipping—pick Soft −1, limit, download WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_2: "A delivery that forbids peaks above a ceiling after you already set overall level, without running a full compressor.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q1: "Is this the same as peak normalize?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a1:
    "No. Peak normalize scales the whole clip so the absolute peak hits a target (it can boost quiet material). This limiter only attenuates samples over the ceiling. For peak normalize, use Normalize an audio file to peak.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q2: "Is this a dynamic compressor?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a2:
    "No. A compressor uses threshold/ratio over time to reshape loud vs soft. Here only peaks above the ceiling (or soft knee) are capped. For voice dynamics, use Compress dynamic range of a voice recording.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q3: "Is this fixed dB gain or LUFS matching?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a3:
    "No. Fixed gain multiplies everything by one amount. LUFS matching aims at integrated loudness. This page only prevents clipping at a ceiling. Use Make a quiet recording louder or Match podcast loudness to −16 LUFS for those jobs.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q4: "What is the difference between Soft and Brickwall?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a4:
    "Soft starts a gentle knee below the ceiling so peaks curve in. Brickwall hard-clamps every sample at ±ceiling with no knee.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q5: "What if my file never exceeds the ceiling?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a5:
    "You can still click Limit. Peaks pass through and the result line reports that nothing was over the limit.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q6: "Is my audio uploaded to a server?",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a6:
    "No. Decoding, limiting and WAV writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed. For compressor or peak-normalize jobs, use Compress dynamic range of a voice recording or Normalize an audio file to peak.",
};
export default en;
