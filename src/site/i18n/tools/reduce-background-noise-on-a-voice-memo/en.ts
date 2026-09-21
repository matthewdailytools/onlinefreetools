import type { SiteLangDict } from '../../../types';

/**
 * English master copy for reduce-background-noise-on-a-voice-memo (S24).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥6.
 * ≠ Adobe Enhance (S25), ≠ dehum (S26), ≠ muffled EQ (S20).
 */
const en: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "Reduce background noise on a voice memo",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "Cut steady fan or AC hiss on a voice memo with Light, Medium or Strong high-pass + noise-floor gate presets, then download a 16-bit WAV. On-device approx only.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "Reduce background noise on a voice memo with Light, Medium or Strong high-pass plus noise-floor gate presets. Steps: Denoise, preview, download WAV. Example: load the hissy sample. Browser approx for steady hiss—not Adobe Enhance Speech, not 50/60 Hz dehum, not muffled EQ. Audio stays on your device; never uploaded.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "Voice memos often sit on a steady fan, air-conditioner or room hiss that masks speech. This page applies a high-pass to drop rumble, estimates a noise floor from quiet frames, then gently gates samples near that floor. Light, Medium and Strong trade how aggressively quiet frames are attenuated. That is an honest browser approximation for steady background noise—not cloud Adobe Enhance Speech, not a narrow 50/60 Hz hum notch, and not a three-band muffled-voice EQ. Music and drums can sound dulled. Channel count stays 1 or 2. Keep the original file; the download is a new 16-bit WAV. Work runs in the browser on your device.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "Choose an audio file",
  tool_reduce_background_noise_on_a_voice_memo_hint: "Drop one WAV, MP3, M4A, AAC or OGG. Maximum 40 MiB and 10 minutes; mono or stereo.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "Denoise",
  tool_reduce_background_noise_on_a_voice_memo_download: "Download WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "Load sample",
  tool_reduce_background_noise_on_a_voice_memo_clear: "Clear",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "Denoise strength",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "Noise reduction strength",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "Light",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "Medium",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "Strong",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "Default Medium balances speech and steady hiss. Light is gentler when speech is soft. Strong attenuates quiet frames more and may thin consonants. This is a high-pass plus noise-floor gate—not machine-learning enhance.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "Denoise progress",
  tool_reduce_background_noise_on_a_voice_memo_read: "Read",
  tool_reduce_background_noise_on_a_voice_memo_decode: "Decode",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "Denoise",
  tool_reduce_background_noise_on_a_voice_memo_write: "Write",
  tool_reduce_background_noise_on_a_voice_memo_done: "Ready. Preview the denoised WAV, then Download WAV.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "Denoise failed. Try a smaller, valid audio file.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "{s}s elapsed",
  tool_reduce_background_noise_on_a_voice_memo_preview: "Listen to the denoised WAV",
  tool_reduce_background_noise_on_a_voice_memo_result:
    "{seconds}s · {preset} · noise floor {floor} · WAV {output} KiB",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "three-second-hissy-voice-memo-demo",
  tool_reduce_background_noise_on_a_voice_memo_empty: "Choose an audio file or load the sample first.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "Drop exactly one audio file.",
  tool_reduce_background_noise_on_a_voice_memo_err_format:
    "Unsupported or damaged audio. Use a file your browser can decode (WAV, MP3, M4A, AAC or OGG).",
  tool_reduce_background_noise_on_a_voice_memo_err_limit:
    "Use a file no larger than 40 MiB or 10 minutes, with one or two channels.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode:
    "The browser could not decode this audio. Try another valid recording.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder:
    "Could not write the denoised WAV. Check the strength, then try Denoise again.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence:
    "Level is essentially silence—nothing to denoise. Try a recording with audible level.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "How to reduce background noise on a voice memo",
  tool_reduce_background_noise_on_a_voice_memo_how_body:
    "Pick a strength, run the high-pass and noise-floor gate, listen, then download a 16-bit WAV—without uploading the file.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1:
    "Choose an audio file, or select Load sample for a three-second hissy voice-memo demonstration.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2:
    "Open Denoise strength and pick Light, Medium (default) or Strong.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3:
    "Click Denoise and wait for Read → Decode → Denoise → Write to finish.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4:
    "Preview the quieter bed, check the result line, then click Download WAV.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "Why choose our Reduce background noise on a voice memo tools",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1:
    "See strength name, estimated noise floor and output KiB before you save.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2:
    "Three clear strengths—one memo denoise job, not a buried DAW rack or a cloud Enhance upsell.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3:
    "Decoding, high-pass, noise-floor gate and WAV writing run on your device; the page does not upload your recording to process it.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4:
    "Changing strength or the input clears the old download so you never save a stale WAV by mistake.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "Strength, noise floor and honest browser limits",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "Each strength runs a high-pass, estimates a noise floor from quiet frames, then gently gates near that floor. Steady fan or AC hiss improves most; speech consonants and music can thin. Soft peak protection keeps the WAV under full scale.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1:
    "Light, Medium and Strong change high-pass cutoff and how far quiet frames drop. Default is Medium.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2:
    "This is a browser approximation. It is not Adobe Enhance Speech, not a 50/60 Hz hum notch, and not muffled-voice EQ.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3:
    "Channel count stays 1 or 2 in the export. Tags are not copied. The original file is never overwritten.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4:
    "One file up to 40 MiB and ten minutes. Strong may leave artifacts; if speech sounds hollow, step back to Light or Medium.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "Try a real hissy memo",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "Load sample builds a three-second speech-like tone under steady hiss, then Denoise at Medium automatically. Playback never starts by itself—press play on the preview if you want to hear the quieter bed.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "When this helps",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1:
    "A phone voice memo with fan or AC hiss under the talk—pick Medium, Denoise, download WAV.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2:
    "A quick field note that needs less room hiss before you fade edges or EQ tone elsewhere.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "Is this the same as Adobe Enhance Speech?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "No. Cloud enhance tools rebuild speech with large models. This page only high-passes and gently gates to a noise floor in your browser. Results are modest and honest—not studio AI clarity.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "Does this remove 50/60 Hz mains hum?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "Not as a dedicated dehum job. Steady broadband hiss and rumble improve most. For a narrow 50/60 Hz electrical hum notch, use Remove mains hum from a recording.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "Is this the same as EQ a muffled voice recording?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "No. That page reshapes tone with Clarity, Warmth or Presence bands. This page reduces steady background noise. For muffled tone after denoise, use EQ a muffled voice recording.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "Will Strong ruin speech or music?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "It can. Strong attenuates quiet frames harder and may thin consonants or dull drums. Prefer Medium for most memos; use Light when speech is already soft.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "What do Light, Medium and Strong change?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "They raise the high-pass cutoff slightly and lower how much gain remains when a frame sits near the estimated noise floor. Default is Medium.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "Is my audio uploaded to a server?",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "No. Decoding, denoise and WAV writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed. For soft edges use Fade in and fade out an audio clip; for muffled tone use EQ a muffled voice recording.",
};
export default en;
