import type { SiteLangDict } from '../../../types';

/**
 * English master copy for join-audio-files-in-order (F7 A2).
 * Rich description, article, How≥4, Why≥4, Rules≥4, FAQ≥5.
 * Multi-file end-to-end join → one WAV; NOT overlay mix (M1); NOT crossfade (M2).
 */
const en: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'Join audio files in order',
  tool_join_audio_files_in_order_desc:
    'Join multiple local audio clips end-to-end in list order, then download one 16-bit WAV. On-device only—not overlay mix.',
  tool_join_audio_files_in_order_description:
    'Join multiple local audio files end-to-end in list order in the browser, then download one 16-bit WAV. Steps: Add clips, reorder if needed, Join, preview, download. Example: load two short sample tones. Concatenate only—not overlay mix, not crossfade. Never uploaded.',
  tool_join_audio_files_in_order_article:
    'Podcast takes, voice memos and song sections often need to become one continuous file. This page lets you drop several local audio files, reorder them in a list, decode each clip in the browser, align sample rate and channel count, then concatenate samples in that order into a single 16-bit PCM WAV. It does not stack tracks on top of each other (overlay mix), does not crossfade between songs, and does not extract audio from video—those are different jobs. Success depends on whether your browser can decode each container. Channel count stays one or two. Keep the originals; the download is a new file. Work runs on your device.',
  tool_join_audio_files_in_order_choose: 'Add audio files',
  tool_join_audio_files_in_order_hint:
    'Drop or choose multiple WAV, MP3, M4A, AAC or OGG files. Add more anytime. Up to 20 clips, 40 MiB each, 20 minutes total after join; mono or stereo.',
  tool_join_audio_files_in_order_list_label: 'Join order',
  tool_join_audio_files_in_order_move_up: 'Up',
  tool_join_audio_files_in_order_move_down: 'Down',
  tool_join_audio_files_in_order_remove: 'Remove',
  tool_join_audio_files_in_order_convert: 'Join',
  tool_join_audio_files_in_order_download: 'Download WAV',
  tool_join_audio_files_in_order_sample: 'Load sample',
  tool_join_audio_files_in_order_clear: 'Clear',
  tool_join_audio_files_in_order_advanced: 'Join notes',
  tool_join_audio_files_in_order_settings_hint:
    'Clips are joined end-to-end in list order. Different sample rates are aligned to the first clip. This is concatenate only—not overlay mix and not crossfade.',
  tool_join_audio_files_in_order_progress: 'Join progress',
  tool_join_audio_files_in_order_read: 'Read',
  tool_join_audio_files_in_order_decode: 'Decode',
  tool_join_audio_files_in_order_join: 'Join',
  tool_join_audio_files_in_order_write: 'Write',
  tool_join_audio_files_in_order_done: 'Ready. Preview the joined WAV, then Download WAV.',
  tool_join_audio_files_in_order_failed: 'Join failed. Try fewer, shorter, valid audio files.',
  tool_join_audio_files_in_order_elapsed: '{s}s elapsed',
  tool_join_audio_files_in_order_preview: 'Listen to the joined WAV',
  tool_join_audio_files_in_order_result:
    '{files} files · {seconds}s · {channels} ch · {rate} Hz · WAV {output} KiB',
  tool_join_audio_files_in_order_sample_name: 'join-tone',
  tool_join_audio_files_in_order_empty: 'Add at least two audio files or load the sample first.',
  tool_join_audio_files_in_order_empty_state:
    'No clips yet. Drop several local audio files, or click Load sample for two short tones. This tool concatenates in list order—it does not mix tracks on top of each other.',
  tool_join_audio_files_in_order_queue_count: '{n} file(s) in queue',
  tool_join_audio_files_in_order_err_file: 'Add at least two supported audio files.',
  tool_join_audio_files_in_order_err_format:
    'Unsupported or damaged audio. Use WAV, MP3, M4A, AAC or OGG files your browser can decode.',
  tool_join_audio_files_in_order_err_limit:
    'Use up to 20 files, 40 MiB each, mono or stereo, with total joined length under 20 minutes.',
  tool_join_audio_files_in_order_err_decode:
    'The browser could not decode one of the files. Remove it or try another encoding.',
  tool_join_audio_files_in_order_err_encoder: 'Could not write the joined WAV. Try Join again.',
  tool_join_audio_files_in_order_how_title: 'How to join audio files in order',
  tool_join_audio_files_in_order_how_body:
    'Add several local clips, set the order, run Join, listen, then download one 16-bit WAV—without uploading the files.',
  tool_join_audio_files_in_order_how_item_1:
    'Add two or more audio files (or Load sample for two short tones). Drop again to append more clips.',
  tool_join_audio_files_in_order_how_item_2:
    'Use Up / Down / Remove in the list so the join order matches what you want to hear.',
  tool_join_audio_files_in_order_how_item_3:
    'Click Join and wait for Read → Decode → Join → Write to finish.',
  tool_join_audio_files_in_order_how_item_4:
    'Preview the continuous track, check the result line, then click Download WAV.',
  tool_join_audio_files_in_order_why_choose_title: 'Why choose our Join audio files in order tools',
  tool_join_audio_files_in_order_why_choose_item_1:
    'See file count, duration, channel count, sample rate and output KiB before you save.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'One clear concatenate job—list order end-to-end—with honest limits when a clip cannot decode.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'Reading, decoding and writing run on your device; the page does not upload your clips to process them.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'Changing the queue clears the old download so you never save a stale WAV by mistake.',
  tool_join_audio_files_in_order_rules_title: 'Concatenate rules and honest browser limits',
  tool_join_audio_files_in_order_rules_body:
    'Each run joins clips end-to-end in list order. Sample rates are aligned to the first clip. Export is 16-bit WAV. This is not overlay mix, not crossfade, and not video-to-audio extract.',
  tool_join_audio_files_in_order_rules_item_1:
    'Two to twenty local audio files, each up to 40 MiB. Joined length stays under twenty minutes. Channels stay one or two.',
  tool_join_audio_files_in_order_rules_item_2:
    'This page concatenates. It does not stack voice over music at the same time, and it does not crossfade song transitions.',
  tool_join_audio_files_in_order_rules_item_3:
    'Tags are not copied. Original files are never overwritten. Success depends on browser decode support per file.',
  tool_join_audio_files_in_order_rules_item_4:
    'After joining, use Trim an audio clip and export for start/end cuts. For video sources, extract audio first.',
  tool_join_audio_files_in_order_example_title: 'Try two short tones',
  tool_join_audio_files_in_order_example:
    'Load sample adds two short WAV tones (different pitches) to the queue, then Join runs automatically. You should hear tone A then tone B with no overlap. Playback never starts by itself—press play on the preview if you want to hear it.',
  tool_join_audio_files_in_order_usecases_title: 'When this helps',
  tool_join_audio_files_in_order_usecase_1:
    'Several voice-memo takes should become one continuous track—add in order, Join, download WAV.',
  tool_join_audio_files_in_order_usecase_2:
    'Song sections or podcast chapters saved as separate files need one export without uploading to a joiner site.',
  tool_join_audio_files_in_order_faq_q1: 'Is this the same as mixing or overlaying two tracks?',
  tool_join_audio_files_in_order_faq_a1:
    'No. Overlay mix plays clips at the same time (for example voice over music). This page only places them one after another in list order.',
  tool_join_audio_files_in_order_faq_q2: 'Does it crossfade between songs?',
  tool_join_audio_files_in_order_faq_a2:
    'No. There is no crossfade or DJ transition. Clips meet end-to-end. Crossfade is a different job.',
  tool_join_audio_files_in_order_faq_q3: 'Can I change the join order?',
  tool_join_audio_files_in_order_faq_a3:
    'Yes. Use Up and Down on each row, or Remove a clip and add it again. Join always follows the list from top to bottom.',
  tool_join_audio_files_in_order_faq_q4: 'What if files have different sample rates?',
  tool_join_audio_files_in_order_faq_a4:
    'Later clips are aligned to the first clip’s sample rate before concatenation. Channel count is kept to mono or stereo.',
  tool_join_audio_files_in_order_faq_q5: 'Is my audio uploaded to a server?',
  tool_join_audio_files_in_order_faq_a5:
    'No. Reading, decoding and writing run in your browser on your device. The page needs a network connection when first loaded; offline availability is not guaranteed.',
  tool_join_audio_files_in_order_faq_q6: 'Can I join audio extracted from a video?',
  tool_join_audio_files_in_order_faq_a6:
    'Extract the track first with Extract audio from a video file, then add the exported audio here. This page does not accept video containers as join inputs.',
};
export default en;
