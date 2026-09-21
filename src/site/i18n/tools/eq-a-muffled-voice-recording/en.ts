import type { SiteLangDict } from '../../../types';

/**
 * English master copy for eq-a-muffled-voice-recording (S20).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥6.
 * ≠ bass-only (S21), ≠ denoise (S24), ≠ de-ess (S31).
 */
const en: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "EQ a muffled voice recording",
  tool_eq_a_muffled_voice_recording_desc:
    "Open a dull voice with Clarity, Warmth or Presence three-band presets, then download a 16-bit WAV. On-device only.",
  tool_eq_a_muffled_voice_recording_description:
    "EQ a muffled voice recording with Clarity, Warmth or Presence three-band presets. Steps: EQ, preview, download WAV. Example: load the muffled sample. Tone shaping only—not a bass-only booster, not noise reduction, not a de-esser. Audio stays on your device; never uploaded.",
  tool_eq_a_muffled_voice_recording_article:
    "Phone calls, masked speech and distant mics often sound muffled: too much mud below a few hundred hertz and not enough clarity in the speech band. This page runs three BiquadFilter stages in OfflineAudioContext—lowshelf, peaking and highshelf—as named presets. Clarity cuts mud and lifts speech presence; Warmth gently boosts body and softens harsh highs; Presence focuses mid-high presence and air. That is tonal EQ for a muffled voice, not a single-band bass booster, not background-noise reduction, and not a de-esser that only tames sibilance. Channel count stays 1 or 2. Keep the original master; the download is a new 16-bit WAV. Work runs in the browser on your device.",
  tool_eq_a_muffled_voice_recording_choose: "Choose an audio file",
  tool_eq_a_muffled_voice_recording_hint: "Drop one WAV, MP3, M4A, AAC or OGG. Maximum 40 MiB and 10 minutes; mono or stereo.",
  tool_eq_a_muffled_voice_recording_convert: "EQ",
  tool_eq_a_muffled_voice_recording_download: "Download WAV",
  tool_eq_a_muffled_voice_recording_sample: "Load sample",
  tool_eq_a_muffled_voice_recording_clear: "Clear",
  tool_eq_a_muffled_voice_recording_advanced: "EQ presets",
  tool_eq_a_muffled_voice_recording_preset_label: "Voice EQ preset",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Default Clarity cuts mud and opens speech. Warmth adds body with softer highs. Presence lifts mid-high presence and air. Soft peak protection keeps the WAV from clipping after boosts.",
  tool_eq_a_muffled_voice_recording_progress: "EQ progress",
  tool_eq_a_muffled_voice_recording_read: "Read",
  tool_eq_a_muffled_voice_recording_decode: "Decode",
  tool_eq_a_muffled_voice_recording_eq: "EQ",
  tool_eq_a_muffled_voice_recording_write: "Write",
  tool_eq_a_muffled_voice_recording_done: "Ready. Preview the EQ’d WAV, then Download WAV.",
  tool_eq_a_muffled_voice_recording_failed: "EQ failed. Try a smaller, valid audio file.",
  tool_eq_a_muffled_voice_recording_elapsed: "{s}s elapsed",
  tool_eq_a_muffled_voice_recording_preview: "Listen to the EQ’d WAV",
  tool_eq_a_muffled_voice_recording_result: "{seconds}s · {preset} · peak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_eq_a_muffled_voice_recording_sample_name: "two-second-muffled-voice-demo",
  tool_eq_a_muffled_voice_recording_empty: "Choose an audio file or load the sample first.",
  tool_eq_a_muffled_voice_recording_err_file: "Drop exactly one audio file.",
  tool_eq_a_muffled_voice_recording_err_format: "Unsupported or damaged audio. Use a file your browser can decode (WAV, MP3, M4A, AAC or OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "Use a file no larger than 40 MiB or 10 minutes, with one or two channels.",
  tool_eq_a_muffled_voice_recording_err_decode: "The browser could not decode this audio. Try another valid recording.",
  tool_eq_a_muffled_voice_recording_err_encoder: "Could not write the EQ’d WAV. Check the preset, then try EQ again.",
  tool_eq_a_muffled_voice_recording_err_silence: "Level is essentially silence—nothing to EQ. Try a recording with audible level.",
  tool_eq_a_muffled_voice_recording_how_title: "How to EQ a muffled voice recording",
  tool_eq_a_muffled_voice_recording_how_body:
    "Pick a three-band preset, reshape the tone, listen, then download a 16-bit WAV—without uploading the file.",
  tool_eq_a_muffled_voice_recording_how_item_1: "Choose an audio file, or select Load sample for a two-second muffled-voice demonstration.",
  tool_eq_a_muffled_voice_recording_how_item_2: "Open EQ presets and pick Clarity (default), Warmth or Presence.",
  tool_eq_a_muffled_voice_recording_how_item_3: "Click EQ and wait for Read → Decode → EQ → Write to finish.",
  tool_eq_a_muffled_voice_recording_how_item_4: "Preview the result, check the preset and peaks, then click Download WAV.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "Why choose our EQ a muffled voice recording tools",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "See preset name, peak before/after and output KiB before you save.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "Three clear voice presets—one muffled-EQ job, not a buried ten-band toy or bass-only wall.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "Decoding, Biquad EQ and WAV writing run on your device; the page does not upload your recording to process it.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "Changing the preset or the input clears the old download so you never save a stale WAV by mistake.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity, Warmth, Presence and limits",
  tool_eq_a_muffled_voice_recording_rules_body:
    "Each preset is three Biquad stages (lowshelf, peaking, highshelf). Clarity opens muffled speech; Warmth adds body; Presence lifts presence and air. Soft peak protection scales the result if boosts would clip.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Default Clarity cuts muddy lows and boosts speech clarity. Warmth lifts low body and softens harsh highs. Presence focuses mid-high presence.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "This is tonal EQ only. It does not remove fan noise, does not solo bass boost, and does not target sibilance like a de-esser.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "Channel count stays 1 or 2 in the export. Tags are not copied. The original file is never overwritten.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "One file up to 40 MiB and ten minutes. Soft peak protection may reduce overall level after strong boosts so the WAV stays under digital full scale.",
  tool_eq_a_muffled_voice_recording_example_title: "Try a real muffled EQ",
  tool_eq_a_muffled_voice_recording_example:
    "Load sample builds a two-second dull tone with strong lows and weak highs, then EQ at Clarity automatically. Playback never starts by itself—press play on the preview if you want to hear the clearer result.",
  tool_eq_a_muffled_voice_recording_usecases_title: "When this helps",
  tool_eq_a_muffled_voice_recording_usecase_1: "A phone or masked take that sounds boxed-in—pick Clarity, EQ, download WAV.",
  tool_eq_a_muffled_voice_recording_usecase_2: "A podcast voice that needs warmer body or more presence without running a full DAW EQ.",
  tool_eq_a_muffled_voice_recording_faq_q1: "Is this the same as a bass booster?",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "No. A bass booster mainly lifts low frequencies. This page offers three multi-band voice presets for muffled speech. Bass-only boosting is a different job (Boost bass on an MP3 when that tool is available).",
  tool_eq_a_muffled_voice_recording_faq_q2: "Does this remove background noise?",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "No. EQ reshapes tone; it does not suppress fans, hiss or room noise. For denoise, use a dedicated noise-reduction tool when available (Reduce background noise on a voice memo).",
  tool_eq_a_muffled_voice_recording_faq_q3: "Is this a de-esser?",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "No. A de-esser targets harsh sibilance (S/Sh). These presets shape overall muffled tone across low, mid and high bands. Use De-ess a voiceover for sibilance.",
  tool_eq_a_muffled_voice_recording_faq_q4: "What do Clarity, Warmth and Presence do?",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity cuts mud and opens speech. Warmth adds low body and softens harsh highs. Presence lifts mid-high presence and air. Soft peak protection prevents clipping after boosts.",
  tool_eq_a_muffled_voice_recording_faq_q5: "What if EQ makes the file hotter?",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "After the filter chain, soft peak protection scales the buffer if peaks would exceed about −0.2 dBFS, so the WAV stays safe. For dedicated peak limiting, use Limit peaks so a file does not clip.",
  tool_eq_a_muffled_voice_recording_faq_q6: "Is my audio uploaded to a server?",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "No. Decoding, EQ and WAV writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed. For dynamics after EQ, use Compress dynamic range of a voice recording or Limit peaks so a file does not clip.",
};
export default en;
