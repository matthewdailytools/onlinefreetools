import type { SiteLangDict } from '../../../types';

/**
 * English master copy for boost-bass-on-an-mp3 (S21).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥6.
 * ≠ muffled multi-band EQ (S20), ≠ whole-file gain (S15).
 */
const en: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "Boost bass on an MP3",
  tool_boost_bass_on_an_mp3_desc:
    "Lift thin low end with Mild, Medium or Strong low-shelf presets, then download a 16-bit WAV. On-device only.",
  tool_boost_bass_on_an_mp3_description:
    "Boost bass on an MP3 with Mild, Medium or Strong low-shelf presets. Steps: Boost, preview, download WAV. Example: load the thin-bass sample. Bass shelf only—not a full muffled-voice EQ, not whole-file loudness gain. Audio stays on your device; never uploaded.",
  tool_boost_bass_on_an_mp3_article:
    "Phone exports and compressed tracks often sound thin: kick and bass body sit too quiet under the midrange. This page runs one BiquadFilter lowshelf in OfflineAudioContext with Mild (+4 dB), Medium (+8 dB) or Strong (+12 dB) around 100 Hz. That deepens low end without a ten-band graphic EQ or a three-band muffled-voice preset chain. Soft peak protection scales the buffer if the boost would clip. Channel count stays 1 or 2. Keep the original master; the download is a new 16-bit WAV. Work runs in the browser on your device.",
  tool_boost_bass_on_an_mp3_choose: "Choose an audio file",
  tool_boost_bass_on_an_mp3_hint: "Drop one WAV, MP3, M4A, AAC or OGG. Maximum 40 MiB and 10 minutes; mono or stereo.",
  tool_boost_bass_on_an_mp3_convert: "Boost",
  tool_boost_bass_on_an_mp3_download: "Download WAV",
  tool_boost_bass_on_an_mp3_sample: "Load sample",
  tool_boost_bass_on_an_mp3_clear: "Clear",
  tool_boost_bass_on_an_mp3_advanced: "Bass boost presets",
  tool_boost_bass_on_an_mp3_preset_label: "Low-shelf strength",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "Default Medium adds about +8 dB on a 100 Hz lowshelf. Mild is gentler; Strong is heavier. Soft peak protection keeps the WAV from clipping after the boost.",
  tool_boost_bass_on_an_mp3_progress: "Boost progress",
  tool_boost_bass_on_an_mp3_read: "Read",
  tool_boost_bass_on_an_mp3_decode: "Decode",
  tool_boost_bass_on_an_mp3_boost: "Boost",
  tool_boost_bass_on_an_mp3_write: "Write",
  tool_boost_bass_on_an_mp3_done: "Ready. Preview the bass-boosted WAV, then Download WAV.",
  tool_boost_bass_on_an_mp3_failed: "Boost failed. Try a smaller, valid audio file.",
  tool_boost_bass_on_an_mp3_elapsed: "{s}s elapsed",
  tool_boost_bass_on_an_mp3_preview: "Listen to the bass-boosted WAV",
  tool_boost_bass_on_an_mp3_result: "{seconds}s · {preset} · peak {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "two-second-thin-bass-demo",
  tool_boost_bass_on_an_mp3_empty: "Choose an audio file or load the sample first.",
  tool_boost_bass_on_an_mp3_err_file: "Drop exactly one audio file.",
  tool_boost_bass_on_an_mp3_err_format: "Unsupported or damaged audio. Use a file your browser can decode (WAV, MP3, M4A, AAC or OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "Use a file no larger than 40 MiB or 10 minutes, with one or two channels.",
  tool_boost_bass_on_an_mp3_err_decode: "The browser could not decode this audio. Try another valid recording.",
  tool_boost_bass_on_an_mp3_err_encoder: "Could not write the bass-boosted WAV. Check the preset, then try Boost again.",
  tool_boost_bass_on_an_mp3_err_silence: "Level is essentially silence—nothing to boost. Try a recording with audible level.",
  tool_boost_bass_on_an_mp3_how_title: "How to boost bass on an MP3",
  tool_boost_bass_on_an_mp3_how_body:
    "Pick a low-shelf strength, deepen the bass, listen, then download a 16-bit WAV—without uploading the file.",
  tool_boost_bass_on_an_mp3_how_item_1: "Choose an audio file, or select Load sample for a two-second thin-bass demonstration.",
  tool_boost_bass_on_an_mp3_how_item_2: "Open Bass boost presets and pick Mild, Medium (default) or Strong.",
  tool_boost_bass_on_an_mp3_how_item_3: "Click Boost and wait for Read → Decode → Boost → Write to finish.",
  tool_boost_bass_on_an_mp3_how_item_4: "Preview the result, check the preset and peaks, then click Download WAV.",
  tool_boost_bass_on_an_mp3_why_choose_title: "Why choose our Boost bass on an MP3 tools",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "See preset name, peak before/after and output KiB before you save.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "Three clear low-shelf strengths—one bass job, not a buried ten-band toy or muffled-voice EQ chain.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "Decoding, lowshelf boost and WAV writing run on your device; the page does not upload your recording to process it.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "Changing the preset or the input clears the old download so you never save a stale WAV by mistake.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild, Medium, Strong and limits",
  tool_boost_bass_on_an_mp3_rules_body:
    "Each preset is one lowshelf Biquad around 100 Hz. Mild is gentle, Medium is the default punch, Strong is heavier. Soft peak protection scales the result if the boost would clip.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Mild about +4 dB, Medium about +8 dB, Strong about +12 dB on a 100 Hz lowshelf. Mid and high bands are not reshaped like a full EQ.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "This is bass shelf only. It does not run Clarity/Warmth/Presence multi-band EQ, and it does not raise the whole file by a fixed dB gain.",
  tool_boost_bass_on_an_mp3_rules_item_3: "Channel count stays 1 or 2 in the export. Tags are not copied. The original file is never overwritten.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "One file up to 40 MiB and ten minutes. Soft peak protection may reduce overall level after Strong boosts so the WAV stays under digital full scale.",
  tool_boost_bass_on_an_mp3_example_title: "Try a real bass boost",
  tool_boost_bass_on_an_mp3_example:
    "Load sample builds a two-second thin tone with weak lows and brighter mids, then Boost at Medium automatically. Playback never starts by itself—press play on the preview if you want to hear the deeper result.",
  tool_boost_bass_on_an_mp3_usecases_title: "When this helps",
  tool_boost_bass_on_an_mp3_usecase_1: "A phone MP3 whose kick feels hollow—pick Medium, Boost, download WAV.",
  tool_boost_bass_on_an_mp3_usecase_2: "A track that needs thicker low end without opening a full equalizer or raising overall loudness.",
  tool_boost_bass_on_an_mp3_faq_q1: "Is this the same as EQ a muffled voice recording?",
  tool_boost_bass_on_an_mp3_faq_a1:
    "No. That tool runs three-band Clarity/Warmth/Presence presets for muffled speech. This page only lifts bass with a lowshelf. For multi-band muffled EQ, use EQ a muffled voice recording.",
  tool_boost_bass_on_an_mp3_faq_q2: "Does this make the whole file louder?",
  tool_boost_bass_on_an_mp3_faq_a2:
    "Not as a flat gain. It boosts low frequencies on a shelf; mids and highs stay mostly as they were. For whole-file amplification, use Make a quiet recording louder.",
  tool_boost_bass_on_an_mp3_faq_q3: "What do Mild, Medium and Strong do?",
  tool_boost_bass_on_an_mp3_faq_a3:
    "They set lowshelf gain around 100 Hz: roughly +4, +8 and +12 dB. Soft peak protection prevents clipping after stronger boosts.",
  tool_boost_bass_on_an_mp3_faq_q4: "The slug says MP3—can I use WAV or M4A?",
  tool_boost_bass_on_an_mp3_faq_a4:
    "Yes. Any browser-decodable audio (WAV, MP3, M4A, AAC, OGG) works. The download is always a 16-bit WAV.",
  tool_boost_bass_on_an_mp3_faq_q5: "What if Strong makes peaks too hot?",
  tool_boost_bass_on_an_mp3_faq_a5:
    "After the filter, soft peak protection scales the buffer if peaks would exceed about −0.2 dBFS, so the WAV stays safe.",
  tool_boost_bass_on_an_mp3_faq_q6: "Is my audio uploaded to a server?",
  tool_boost_bass_on_an_mp3_faq_a6:
    "No. Decoding, bass boost and WAV writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed. For muffled speech EQ, use EQ a muffled voice recording; for overall level, use Make a quiet recording louder.",
};
export default en;
