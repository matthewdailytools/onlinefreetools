import type { SiteLangDict } from '../../../types';

/**
 * English master for mix-binaural-beats-for-focus (F9 G7).
 * Rich How≥4 Why≥4 Rules≥4 FAQ≥5. Stereo L/R beat WAV; NOT therapy; NOT mono sine.
 */
const en: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'Mix binaural beats for focus',
  tool_mix_binaural_beats_for_focus_desc:
    'Mix binaural beats for focus from a carrier and beat difference, then download a stereo WAV. On-device only—entertainment ambient, not treatment.',
  tool_mix_binaural_beats_for_focus_description:
    'Mix binaural beats for focus from a carrier and beat difference in the browser, then download a stereo 16-bit WAV. Steps: Set carrier and beat Hz or tap a preset, pick duration, Mix, preview on headphones, download. Example: 200 Hz carrier with a 10 Hz difference for 10 seconds. Entertainment and ambient focus sound only—not medical treatment. Never uploaded.',
  tool_mix_binaural_beats_for_focus_article:
    'People looking for binaural beats for a focus session often want a simple stereo file they can keep. This page lets you set a carrier frequency for the left ear and a slightly higher frequency for the right ear so the difference is the beat rate, pick a duration, synthesize stereo PCM in the browser at 44.1 kHz, then download a 16-bit WAV. Use headphones—the left/right difference is the point. Presets only change Hertz values; they are ambient shortcuts, not medical protocols. This page does not claim therapeutic efficacy, does not diagnose or treat any condition, and is for entertainment or personal ambient listening only. It is not a mono sine generator and not a UI notification beep maker. Work runs on your device.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'Carrier (left ear, Hz)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'Left channel frequency, 80–500 Hz typical. Default 200 Hz.',
  tool_mix_binaural_beats_for_focus_beat_label: 'Beat difference (Hz)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'Right ear plays carrier + this value. Keep the difference between 1 and 40 Hz.',
  tool_mix_binaural_beats_for_focus_preset_label: 'Ambient beat presets',
  tool_mix_binaural_beats_for_focus_dur_label: 'Duration',
  tool_mix_binaural_beats_for_focus_convert: 'Mix',
  tool_mix_binaural_beats_for_focus_download: 'Download WAV',
  tool_mix_binaural_beats_for_focus_sample: 'Load sample',
  tool_mix_binaural_beats_for_focus_clear: 'Clear',
  tool_mix_binaural_beats_for_focus_advanced: 'Binaural notes',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'Output is a stereo 16-bit WAV at 44.1 kHz with short fades. Headphones required for the left/right difference. Entertainment and ambient focus sound only—not medical treatment or therapy.',
  tool_mix_binaural_beats_for_focus_progress: 'Mix progress',
  tool_mix_binaural_beats_for_focus_synth: 'Synth',
  tool_mix_binaural_beats_for_focus_write: 'Write',
  tool_mix_binaural_beats_for_focus_done: 'Ready. Preview on headphones, then Download WAV.',
  tool_mix_binaural_beats_for_focus_failed: 'Mix failed. Check carrier, beat difference and duration.',
  tool_mix_binaural_beats_for_focus_elapsed: '{s}s elapsed',
  tool_mix_binaural_beats_for_focus_preview: 'Listen to the binaural WAV',
  tool_mix_binaural_beats_for_focus_result:
    'L {left} Hz · R {right} Hz · beat {beat} Hz · {seconds}s · stereo · {rate} Hz · WAV {output} KiB',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'Set carrier and beat Hz or tap Load sample first.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'Set a carrier and beat difference (or tap a preset), pick a duration, then Mix—or Load sample for 200 Hz / 10 Hz / 10 s. Use headphones. Entertainment ambient only—not medical treatment.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'Enter a carrier between 80 and 1000 Hz.',
  tool_mix_binaural_beats_for_focus_err_beat: 'Enter a beat difference between 1 and 40 Hz (right = carrier + beat).',
  tool_mix_binaural_beats_for_focus_err_limit: 'Duration must be between 0 and 120 seconds.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'Could not write the stereo WAV. Try Mix again.',
  tool_mix_binaural_beats_for_focus_how_title: 'How to mix binaural beats for focus',
  tool_mix_binaural_beats_for_focus_how_body:
    'Set carrier and beat Hz, pick duration, Mix, listen on headphones, then download one stereo WAV—without uploading files and without therapy claims.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'Enter a carrier Hz for the left ear (or keep the default 200 Hz) and a beat difference for the right ear.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'Optionally tap an ambient beat preset (4, 10 or 16 Hz difference)—presets only change numbers, not medical protocols.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'Choose a duration chip, click Mix, and wait for Synth → Write to finish.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'Preview on headphones, check the result line, then click Download WAV.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'Why choose our Mix binaural beats for focus tools',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'See left Hz, right Hz, beat difference, duration and output KiB before you save.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'One clear stereo binaural job with honest YMYL limits—entertainment ambient, not treatment.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'Synthesis and writing run on your device; nothing is uploaded to process the tones.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'Changing carrier, beat or duration clears the old download so you never save a stale WAV by mistake.',
  tool_mix_binaural_beats_for_focus_rules_title: 'Binaural rules and honest limits',
  tool_mix_binaural_beats_for_focus_rules_body:
    'Each run synthesizes left = carrier and right = carrier + beat at 44.1 kHz with short edge fades. Export is stereo 16-bit WAV. This is entertainment/ambient only—not medical treatment—and not a mono sine or UI beep tool.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'Carrier stays between 80 and 1000 Hz. Beat difference stays between 1 and 40 Hz. Duration stays at or under 120 seconds. Output is stereo.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'Headphones are required for a true left/right difference. Speakers sum channels and hide the beat effect.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'This page does not claim medical, sleep, or therapeutic efficacy. Labels are ambient shortcuts only—not treatment protocols.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'Short fades reduce clicks. The download is a new file; nothing is uploaded. This is not a mono sine generator and not a UI notification sound.',
  tool_mix_binaural_beats_for_focus_example_title: 'Try 200 Hz carrier with a 10 Hz beat for 10 seconds',
  tool_mix_binaural_beats_for_focus_example:
    'Load sample sets 200 Hz carrier, 10 Hz difference and 10 seconds, then Mix runs automatically. You should hear a steady stereo pair on headphones. Playback never starts by itself—press play if you want to listen.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'When this helps',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'You want a reusable ambient focus WAV—set carrier and beat, Mix, download, and keep the file for headphones.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'You need a quick stereo beat demo without installing a desktop tone app or trusting therapy claims.',
  tool_mix_binaural_beats_for_focus_faq_q1: 'Is this medical treatment or therapy?',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'No. This page makes entertainment and personal ambient focus sound only. It does not diagnose, treat or cure any condition and makes no therapeutic efficacy claims.',
  tool_mix_binaural_beats_for_focus_faq_q2: 'Do I need headphones?',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'Yes for the intended left/right difference. On speakers the channels mix and the beat effect is reduced or lost.',
  tool_mix_binaural_beats_for_focus_faq_q3: 'Is this the same as a mono sine tone generator?',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'No. A sine tone page makes one frequency in mono. This page always writes stereo with two slightly different frequencies.',
  tool_mix_binaural_beats_for_focus_faq_q4: 'What do the ambient presets mean?',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'They only set the beat difference in Hertz (for example 4, 10 or 16 Hz). They are not medical protocols and do not promise sleep or focus outcomes.',
  tool_mix_binaural_beats_for_focus_faq_q5: 'Is anything uploaded to a server?',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'No. Synthesis and writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed.',
  tool_mix_binaural_beats_for_focus_faq_q6: 'What format is the download?',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'A stereo 16-bit PCM WAV at 44.1 kHz. It is a new file you can keep as a reusable ambient clip.',
};
export default en;
