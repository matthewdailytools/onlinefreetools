import type { SiteLangDict } from '../../../types';

/**
 * English master copy for mix-a-voiceover-with-background-music (F7 M1).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥5.
 * Overlay mix voice + bed → one WAV; NOT concatenate (A2); NOT crossfade (M2).
 */
const en: SiteLangDict = {
  tool_mix_a_voiceover_with_background_music_title: 'Mix a voiceover with background music',
  tool_mix_a_voiceover_with_background_music_desc:
    'Mix a local voiceover with background music so both play at once, then download one 16-bit WAV. On-device only—not concatenate.',
  tool_mix_a_voiceover_with_background_music_description:
    'Mix a local voiceover with background music in the browser—both play at once—with voice and bed gain sliders and optional simple ducking, then download one 16-bit WAV. Steps: Add voice, add bed, set gains, Mix, preview, download. Example: load two short sample tones. Overlay only—not concatenate, not crossfade. Never uploaded.',
  tool_mix_a_voiceover_with_background_music_article:
    'Podcast intros and short videos often need a spoken take and a music bed heard together. This page lets you drop a local voiceover and a local background clip, set relative gains, optionally duck the bed when the voice is active, decode both in the browser, align sample rate and channels, then mix samples into one 16-bit PCM WAV. It does not place clips end-to-end (concatenate), does not crossfade song transitions, and does not pull audio from video—those are different jobs. Success depends on browser decode support. Channels stay one or two. Keep the originals; the download is a new file. Work runs on your device.',
  tool_mix_a_voiceover_with_background_music_choose_voice: 'Add voiceover',
  tool_mix_a_voiceover_with_background_music_choose_bed: 'Add background music',
  tool_mix_a_voiceover_with_background_music_hint_voice:
    'Drop or choose one WAV, MP3, M4A, AAC or OGG voiceover. Up to 40 MiB; mono or stereo.',
  tool_mix_a_voiceover_with_background_music_hint_bed:
    'Drop or choose one background clip. Up to 40 MiB. Mixed length stays under 20 minutes.',
  tool_mix_a_voiceover_with_background_music_voice_gain: 'Voiceover gain',
  tool_mix_a_voiceover_with_background_music_bed_gain: 'Background gain',
  tool_mix_a_voiceover_with_background_music_duck: 'Duck background when voice is active',
  tool_mix_a_voiceover_with_background_music_duck_hint:
    'Simple energy ducking: when the voiceover is louder, the bed is reduced. Not a studio sidechain compressor.',
  tool_mix_a_voiceover_with_background_music_convert: 'Mix',
  tool_mix_a_voiceover_with_background_music_download: 'Download WAV',
  tool_mix_a_voiceover_with_background_music_sample: 'Load sample',
  tool_mix_a_voiceover_with_background_music_clear: 'Clear',
  tool_mix_a_voiceover_with_background_music_advanced: 'Mix notes',
  tool_mix_a_voiceover_with_background_music_settings_hint:
    'Both clips play at the same time. Sample rates align to the voiceover. This is overlay mix only—not concatenate and not crossfade.',
  tool_mix_a_voiceover_with_background_music_progress: 'Mix progress',
  tool_mix_a_voiceover_with_background_music_read: 'Read',
  tool_mix_a_voiceover_with_background_music_decode: 'Decode',
  tool_mix_a_voiceover_with_background_music_mix: 'Mix',
  tool_mix_a_voiceover_with_background_music_write: 'Write',
  tool_mix_a_voiceover_with_background_music_done: 'Ready. Preview the mixed WAV, then Download WAV.',
  tool_mix_a_voiceover_with_background_music_failed: 'Mix failed. Try shorter, valid audio files.',
  tool_mix_a_voiceover_with_background_music_elapsed: '{s}s elapsed',
  tool_mix_a_voiceover_with_background_music_preview: 'Listen to the mixed WAV',
  tool_mix_a_voiceover_with_background_music_result:
    '{seconds}s · {channels} ch · {rate} Hz · voice {voice}% · bed {bed}% · WAV {output} KiB',
  tool_mix_a_voiceover_with_background_music_sample_name: 'mix-tone',
  tool_mix_a_voiceover_with_background_music_empty: 'Add a voiceover and a background clip, or load the sample first.',
  tool_mix_a_voiceover_with_background_music_empty_state:
    'No clips yet. Add a voiceover and background music, or click Load sample for two short tones. This tool overlays tracks—it does not join them end-to-end.',
  tool_mix_a_voiceover_with_background_music_voice_label: 'Voiceover: {name}',
  tool_mix_a_voiceover_with_background_music_bed_label: 'Background: {name}',
  tool_mix_a_voiceover_with_background_music_err_file: 'Add both a voiceover and a background audio file.',
  tool_mix_a_voiceover_with_background_music_err_format:
    'Unsupported or damaged audio. Use WAV, MP3, M4A, AAC or OGG files your browser can decode.',
  tool_mix_a_voiceover_with_background_music_err_limit:
    'Use files up to 40 MiB each, mono or stereo, with mixed length under 20 minutes.',
  tool_mix_a_voiceover_with_background_music_err_decode:
    'The browser could not decode one of the files. Try another encoding.',
  tool_mix_a_voiceover_with_background_music_err_encoder: 'Could not write the mixed WAV. Try Mix again.',
  tool_mix_a_voiceover_with_background_music_how_title: 'How to mix a voiceover with background music',
  tool_mix_a_voiceover_with_background_music_how_body:
    'Add a voiceover and a bed, set gains, optionally duck, run Mix, listen, then download one 16-bit WAV—without uploading the files.',
  tool_mix_a_voiceover_with_background_music_how_item_1:
    'Add a local voiceover file and a local background music file (or Load sample for two short tones).',
  tool_mix_a_voiceover_with_background_music_how_item_2:
    'Set Voiceover gain and Background gain. Optionally enable ducking so the bed dips when the voice is active.',
  tool_mix_a_voiceover_with_background_music_how_item_3:
    'Click Mix and wait for Read → Decode → Mix → Write to finish.',
  tool_mix_a_voiceover_with_background_music_how_item_4:
    'Preview the overlay mix, check the result line, then click Download WAV.',
  tool_mix_a_voiceover_with_background_music_why_choose_title: 'Why choose our Mix a voiceover with background music tools',
  tool_mix_a_voiceover_with_background_music_why_choose_item_1:
    'See duration, channel count, sample rate, gain percentages and output KiB before you save.',
  tool_mix_a_voiceover_with_background_music_why_choose_item_2:
    'One clear overlay job—voice and bed at once—with honest limits when a clip cannot decode.',
  tool_mix_a_voiceover_with_background_music_why_choose_item_3:
    'Reading, decoding and writing run on your device; the page does not upload your clips to process them.',
  tool_mix_a_voiceover_with_background_music_why_choose_item_4:
    'Changing either file or the gains clears the old download so you never save a stale WAV by mistake.',
  tool_mix_a_voiceover_with_background_music_rules_title: 'Overlay mix rules and honest browser limits',
  tool_mix_a_voiceover_with_background_music_rules_body:
    'Each run stacks voice and bed on the same timeline. Sample rates align to the voiceover. Export is 16-bit WAV. This is not concatenate, not crossfade, and not video-to-audio extract.',
  tool_mix_a_voiceover_with_background_music_rules_item_1:
    'Two local audio files, each up to 40 MiB. Mixed length stays under twenty minutes. Channels stay one or two.',
  tool_mix_a_voiceover_with_background_music_rules_item_2:
    'This page overlays. It does not join clips end-to-end, and it does not crossfade song transitions.',
  tool_mix_a_voiceover_with_background_music_rules_item_3:
    'Optional ducking is a simple energy gate on the bed—not a studio-grade sidechain compressor.',
  tool_mix_a_voiceover_with_background_music_rules_item_4:
    'Tags are not copied. Originals are never overwritten. Success depends on browser decode support per file.',
  tool_mix_a_voiceover_with_background_music_example_title: 'Try two short tones',
  tool_mix_a_voiceover_with_background_music_example:
    'Load sample adds a short voice-like tone and a lower bed tone, then Mix runs automatically. You should hear both at once. Playback never starts by itself—press play on the preview if you want to hear it.',
  tool_mix_a_voiceover_with_background_music_usecases_title: 'When this helps',
  tool_mix_a_voiceover_with_background_music_usecase_1:
    'A spoken take needs a quiet music bed underneath—add both, lower bed gain or enable ducking, Mix, download WAV.',
  tool_mix_a_voiceover_with_background_music_usecase_2:
    'You already extracted audio from a video and want to layer a new voiceover without uploading to an online mixer.',
  tool_mix_a_voiceover_with_background_music_usecase_3: 'A dry VO needs quieter bed music underneath without a full mixer.',
  tool_mix_a_voiceover_with_background_music_faq_q1: 'Is this the same as joining audio files end-to-end?',
  tool_mix_a_voiceover_with_background_music_faq_a1:
    'No. Joining places clips one after another. This page plays voice and bed at the same time (overlay mix).',
  tool_mix_a_voiceover_with_background_music_faq_q2: 'Does it crossfade between songs?',
  tool_mix_a_voiceover_with_background_music_faq_a2:
    'No. There is no crossfade or DJ transition. Crossfade is a different job.',
  tool_mix_a_voiceover_with_background_music_faq_q3: 'What do the gain sliders do?',
  tool_mix_a_voiceover_with_background_music_faq_a3:
    'They scale voiceover and background levels before mixing. 100% is unity gain for that track; lower values make it quieter.',
  tool_mix_a_voiceover_with_background_music_faq_q4: 'How does ducking work?',
  tool_mix_a_voiceover_with_background_music_faq_a4:
    'When enabled, short windows where the voiceover energy is high reduce the bed gain. It is a simple browser approximation, not a full compressor.',
  tool_mix_a_voiceover_with_background_music_faq_q5: 'Is my audio uploaded to a server?',
  tool_mix_a_voiceover_with_background_music_faq_a5:
    'No. Reading, decoding and writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed.',
  tool_mix_a_voiceover_with_background_music_faq_q6: 'What if the clips have different lengths?',
  tool_mix_a_voiceover_with_background_music_faq_a6:
    'The mix lasts as long as the longer clip. The shorter track is padded with silence for the remaining time.',
};
export default en;
