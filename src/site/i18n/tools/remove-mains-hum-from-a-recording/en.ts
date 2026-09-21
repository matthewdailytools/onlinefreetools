import type { SiteLangDict } from '../../../types';

/**
 * English master copy for remove-mains-hum-from-a-recording (S26).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥6.
 * ≠ broadband denoise (S24), ≠ declick (S27), ≠ muffled EQ (S20).
 */
const en: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "Remove mains hum from a recording",
  tool_remove_mains_hum_from_a_recording_desc:
    "Cut 50 or 60 Hz electrical hum with notch filters and optional harmonics, then download a 16-bit WAV. On-device only.",
  tool_remove_mains_hum_from_a_recording_description:
    "Remove mains hum from a recording with 50 or 60 Hz notch filters and optional 2nd–5th harmonics. Steps: Dehum, preview, download WAV. Example: load the humming sample. Narrow notches for electrical hum—not broadband denoise, not declick, not muffled EQ. Audio stays on your device; never uploaded.",
  tool_remove_mains_hum_from_a_recording_article:
    "Recordings near power supplies, dimmers or poorly grounded gear often pick up a steady 50 or 60 Hz mains hum, sometimes with audible harmonics. This page chains BiquadFilter notch stages in OfflineAudioContext at the chosen fundamental and, optionally, the 2nd through 5th harmonics below Nyquist. That targets narrow electrical tones—not fan hiss broadband denoise, not click/pop repair, and not a three-band muffled-voice EQ. Music bass near the notch can thin slightly. Channel count stays 1 or 2. Keep the original file; the download is a new 16-bit WAV. Work runs in the browser on your device.",
  tool_remove_mains_hum_from_a_recording_choose: "Choose an audio file",
  tool_remove_mains_hum_from_a_recording_hint: "Drop one WAV, MP3, M4A, AAC or OGG. Maximum 40 MiB and 10 minutes; mono or stereo.",
  tool_remove_mains_hum_from_a_recording_convert: "Dehum",
  tool_remove_mains_hum_from_a_recording_download: "Download WAV",
  tool_remove_mains_hum_from_a_recording_sample: "Load sample",
  tool_remove_mains_hum_from_a_recording_clear: "Clear",
  tool_remove_mains_hum_from_a_recording_advanced: "Mains frequency and harmonics",
  tool_remove_mains_hum_from_a_recording_hz_label: "Mains frequency",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 Hz",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 Hz",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "Harmonics",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "Fundamental only",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "Include harmonics",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "Default 50 Hz with harmonics notches the fundamental plus 2nd–5th harmonics under Nyquist. Pick 60 Hz for North America and similar grids. Fundamental only is gentler on nearby bass.",
  tool_remove_mains_hum_from_a_recording_progress: "Dehum progress",
  tool_remove_mains_hum_from_a_recording_read: "Read",
  tool_remove_mains_hum_from_a_recording_decode: "Decode",
  tool_remove_mains_hum_from_a_recording_dehum: "Dehum",
  tool_remove_mains_hum_from_a_recording_write: "Write",
  tool_remove_mains_hum_from_a_recording_done: "Ready. Preview the dehummed WAV, then Download WAV.",
  tool_remove_mains_hum_from_a_recording_failed: "Dehum failed. Try a smaller, valid audio file.",
  tool_remove_mains_hum_from_a_recording_elapsed: "{s}s elapsed",
  tool_remove_mains_hum_from_a_recording_preview: "Listen to the dehummed WAV",
  tool_remove_mains_hum_from_a_recording_result:
    "{seconds}s · {hz} Hz · {harmonics} · {notches} notches · WAV {output} KiB",
  tool_remove_mains_hum_from_a_recording_sample_name: "three-second-mains-hum-demo",
  tool_remove_mains_hum_from_a_recording_empty: "Choose an audio file or load the sample first.",
  tool_remove_mains_hum_from_a_recording_err_file: "Drop exactly one audio file.",
  tool_remove_mains_hum_from_a_recording_err_format:
    "Unsupported or damaged audio. Use a file your browser can decode (WAV, MP3, M4A, AAC or OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit:
    "Use a file no larger than 40 MiB or 10 minutes, with one or two channels.",
  tool_remove_mains_hum_from_a_recording_err_decode:
    "The browser could not decode this audio. Try another valid recording.",
  tool_remove_mains_hum_from_a_recording_err_encoder:
    "Could not write the dehummed WAV. Check frequency and harmonics, then try Dehum again.",
  tool_remove_mains_hum_from_a_recording_err_silence:
    "Level is essentially silence—nothing to dehum. Try a recording with audible level.",
  tool_remove_mains_hum_from_a_recording_how_title: "How to remove mains hum from a recording",
  tool_remove_mains_hum_from_a_recording_how_body:
    "Pick 50 or 60 Hz, choose harmonics, run the notches, listen, then download a 16-bit WAV—without uploading the file.",
  tool_remove_mains_hum_from_a_recording_how_item_1:
    "Choose an audio file, or select Load sample for a three-second humming demonstration.",
  tool_remove_mains_hum_from_a_recording_how_item_2:
    "Open Mains frequency and harmonics: pick 50 or 60 Hz, then Fundamental only or Include harmonics.",
  tool_remove_mains_hum_from_a_recording_how_item_3:
    "Click Dehum and wait for Read → Decode → Dehum → Write to finish.",
  tool_remove_mains_hum_from_a_recording_how_item_4:
    "Preview the quieter electrical bed, check the result line, then click Download WAV.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "Why choose our Remove mains hum from a recording tools",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1:
    "See mains Hz, harmonics mode, notch count and output KiB before you save.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2:
    "One clear dehum job—50/60 Hz notches with optional harmonics, not a buried DAW rack.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3:
    "Decoding, notch filtering and WAV writing run on your device; the page does not upload your recording to process it.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4:
    "Changing frequency, harmonics or the input clears the old download so you never save a stale WAV by mistake.",
  tool_remove_mains_hum_from_a_recording_rules_title: "Notch frequency, harmonics and honest browser limits",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "Each run chains narrow notch filters at the chosen fundamental and, if enabled, harmonics 2–5 below Nyquist. True mains tones improve most; broadband hiss needs denoise elsewhere. Soft peak protection keeps the WAV under full scale.",
  tool_remove_mains_hum_from_a_recording_rules_item_1:
    "50 Hz or 60 Hz sets the fundamental. Include harmonics adds notches at 2×–5× that frequency when under Nyquist. Defaults are 50 Hz with harmonics.",
  tool_remove_mains_hum_from_a_recording_rules_item_2:
    "This is a browser notch chain. It is not broadband denoise, not click/pop repair, and not muffled-voice EQ.",
  tool_remove_mains_hum_from_a_recording_rules_item_3:
    "Channel count stays 1 or 2 in the export. Tags are not copied. The original file is never overwritten.",
  tool_remove_mains_hum_from_a_recording_rules_item_4:
    "One file up to 40 MiB and ten minutes. Bass near the notch can thin; if lows sound hollow, try Fundamental only.",
  tool_remove_mains_hum_from_a_recording_example_title: "Try a real humming clip",
  tool_remove_mains_hum_from_a_recording_example:
    "Load sample builds a three-second speech-like tone under 50 Hz hum plus harmonics, then Dehum at 50 Hz with harmonics automatically. Playback never starts by itself—press play on the preview if you want to hear the quieter bed.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "When this helps",
  tool_remove_mains_hum_from_a_recording_usecase_1:
    "A voice note with steady electrical buzz from a charger or dimmer—pick your grid Hz, Dehum, download WAV.",
  tool_remove_mains_hum_from_a_recording_usecase_2:
    "A field recording that needs the mains tone gone before you denoise broadband hiss or EQ muffled speech elsewhere.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "Is this the same as reduce background noise on a voice memo?",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "No. That page high-passes and gates steady fan or AC hiss. This page notches narrow 50/60 Hz electrical tones. Use Reduce background noise on a voice memo for broadband hiss.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "Does this remove clicks and pops?",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "No. Clicks, mouth pops and vinyl crackle need a declick job. This page only notches mains fundamentals and optional harmonics.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "Is this the same as EQ a muffled voice recording?",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "No. That page reshapes tone with Clarity, Warmth or Presence bands. This page removes electrical hum. For muffled tone after dehum, use EQ a muffled voice recording.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "Should I pick 50 Hz or 60 Hz?",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "Match your power grid. Most of Europe, Asia, Africa and Australia use 50 Hz. North America and parts of Japan and South America use 60 Hz. Wrong Hz leaves the hum mostly untouched.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "What does Include harmonics do?",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "It adds notches at two to five times the fundamental when those frequencies sit under Nyquist. Buzz often has harmonics; Fundamental only is gentler on nearby bass.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "Is my audio uploaded to a server?",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "No. Decoding, notch filtering and WAV writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed. For broadband hiss use Reduce background noise on a voice memo; for muffled tone use EQ a muffled voice recording.",
};
export default en;
