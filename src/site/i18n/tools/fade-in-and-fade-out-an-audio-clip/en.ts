import type { SiteLangDict } from '../../../types';

/**
 * English master copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥6.
 * ≠ seamless loop wrap crossfade (S5), ≠ limiter/EQ.
 */
const en: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "Fade in and fade out an audio clip",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "Soften abrupt starts and stops with 0.5–3 s fade chips and linear or equal-power curves, then download a 16-bit WAV. On-device only.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "Fade in and fade out an audio clip with 0.5, 1, 2 or 3 second chips at each end and a linear or equal-power curve. Steps: Fade, preview, download WAV. Example: load the abrupt sample. Edge fades only—not a seamless loop wrap crossfade, not a limiter or EQ. Audio stays on your device; never uploaded.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "Hard cuts at the start or end of a clip click on speakers and feel abrupt in video timelines. This page applies a fade-in envelope at the head and a fade-out envelope at the tail. Pick 0.5, 1, 2 or 3 seconds for each end, then choose Linear (straight gain ramp) or Equal-power (sine/cosine ramps that keep perceived loudness steadier). If fade-in plus fade-out would exceed the clip length, both sides shrink proportionally so the middle still exists. This is edge fading on one clip—not wrapping the tail into the head for a seamless loop, not limiting peaks, and not equalizing tone. Channel count stays 1 or 2. Keep the original file; the download is a new 16-bit WAV. Work runs in the browser on your device.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "Choose an audio file",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "Drop one WAV, MP3, M4A, AAC or OGG. Maximum 40 MiB and 10 minutes; mono or stereo.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "Fade",
  tool_fade_in_and_fade_out_an_audio_clip_download: "Download WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "Load sample",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "Clear",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "Fade settings",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "Fade in",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "Fade out",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "Curve",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "Linear",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "Default is 1 s in, 1 s out, Equal-power. Shorter chips suit drums; longer chips suit pads and speech. If both ends would overlap past the clip length, they shrink together.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "Fade progress",
  tool_fade_in_and_fade_out_an_audio_clip_read: "Read",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "Decode",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "Fade",
  tool_fade_in_and_fade_out_an_audio_clip_write: "Write",
  tool_fade_in_and_fade_out_an_audio_clip_done: "Ready. Preview the faded WAV, then Download WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "Fade failed. Try a smaller, valid audio file.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "{s}s elapsed",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "Listen to the faded WAV",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds}s · in {fadeIn}s · out {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "four-second-abrupt-demo",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "Choose an audio file or load the sample first.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "Drop exactly one audio file.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "Unsupported or damaged audio. Use a file your browser can decode (WAV, MP3, M4A, AAC or OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "Use a file no larger than 40 MiB or 10 minutes, with one or two channels.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "The browser could not decode this audio. Try another valid recording.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "Could not write the faded WAV. Check the fade settings, then try Fade again.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "Level is essentially silence—nothing to fade. Try a recording with audible level.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "Clip is too short to fade meaningfully. Use a file longer than about 50 ms.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "How to fade in and fade out an audio clip",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "Pick fade-in and fade-out lengths, choose a curve, apply, listen, then download a 16-bit WAV—without uploading the file.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "Choose an audio file, or select Load sample for a four-second abrupt demonstration.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "Open Fade settings and pick fade-in and fade-out chips (0.5 / 1 / 2 / 3 s). Default is 1 s each.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "Choose Linear or Equal-power (default), click Fade, and wait for Read → Decode → Fade → Write.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "Preview the soft start and soft end, check the result line, then click Download WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title: "Why choose our Fade in and fade out an audio clip tools",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "See fade-in, fade-out, curve name and output KiB before you save.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "Clear duration chips and two curves—one edge-fade job, not a buried seamless-loop wrap or a limiter/EQ chain.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "Decoding, envelope fades and WAV writing run on your device; the page does not upload your recording to process it.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "Changing chips, curve or the input clears the old download so you never save a stale WAV by mistake.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "Fade lengths, curves and limits",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "Fade-in rises from silence at the head; fade-out falls to silence at the tail. Linear uses a straight ramp; Equal-power uses sine/cosine ramps. Overlapping requests shrink proportionally.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "Each end offers 0.5, 1, 2 or 3 seconds. Defaults are 1 s in and 1 s out with Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "This fades the edges of one clip. It does not wrap the tail into the head for a seamless loop, and it does not limit peaks or reshape EQ bands.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "Channel count stays 1 or 2 in the export. Tags are not copied. The original file is never overwritten.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "One file up to 40 MiB and ten minutes. If fade-in plus fade-out exceeds length, both sides scale down so a middle region remains.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "Try a real edge fade",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "Load sample builds a four-second tone that starts and stops abruptly, then Fade at 1 s / 1 s Equal-power automatically. Playback never starts by itself—press play on the preview if you want to hear the soft edges.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "When this helps",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "A voiceover or music bed that clicks at the cut points—pick 1 s / 1 s, Fade, download WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "A clip that needs soft edges before you trim elsewhere or drop it on a timeline—without building a seamless loop.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "Is this the same as Make a seamless audio loop?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "No. That tool wraps the selected tail into the head with a crossfade so the join loops cleanly. This page only softens the start and end of one clip. For seamless looping, use Make a seamless audio loop.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "Does this limit peaks or equalize tone?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "No. It only multiplies samples by a fade envelope. For peak limiting use Limit peaks so a file does not clip; for bass shelf use Boost bass on an MP3; for muffled speech EQ use EQ a muffled voice recording.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "What is Equal-power versus Linear?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "Linear ramps gain in a straight line. Equal-power uses sine for fade-in and the matching cosine shape for fade-out so loudness feels smoother. Default is Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "What if 3 s in plus 3 s out is longer than my clip?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "Both ends shrink in proportion so fade-in plus fade-out never exceeds the clip length. The result line shows the actual seconds applied.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "Can I fade only one end?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "Chips always set both ends; use the shortest chip (0.5 s) on the end you barely want to touch, or trim first with Trim an audio clip and export, then fade.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "Is my audio uploaded to a server?",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "No. Decoding, fades and WAV writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed. For seamless loops use Make a seamless audio loop; for cutting length use Trim an audio clip and export.",
};
export default en;
