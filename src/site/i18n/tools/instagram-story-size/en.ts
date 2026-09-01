/**
 * i18n tool shard (instagram-story-size / en).
 * Master H1 is “Instagram story size”; square posts and 16:9 thumbnails stay off this title.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_instagram_story_size_article:
		'Cover-fill a photo to Instagram story size 1080×1920 (9:16), preview the top and bottom UI overlap, and download a JPEG. Reels, TikTok, and Shorts covers are chips on the same canvas. Files stay on your device and are not uploaded to a server.',
	tool_instagram_story_size_choose_image: 'Choose image',
	tool_instagram_story_size_clear: 'Clear',
	tool_instagram_story_size_desc:
		'Export Instagram story size 1080×1920 with a UI safe-zone preview — stays on your device, not uploaded.',
	tool_instagram_story_size_description:
		'Instagram story size: choose a photo, cover-fill 1080×1920 (9:16), and download a JPEG. Example: the sample is cropped to the story frame on first paint. The overlay marks progress-bar and reply-bar overlap — it is not baked into the download. Reels, TikTok, and YouTube Shorts covers are chips. Files stay on your device and are not uploaded to a server. This is not a square Instagram post and not a 16:9 YouTube video thumbnail.',
	tool_instagram_story_size_download: 'Download JPEG',
	tool_instagram_story_size_drop_hint: 'Drop one photo. Cover-fill may crop the edges. Keep type out of the dim overlay.',
	tool_instagram_story_size_empty: 'Choose an image first.',
	tool_instagram_story_size_err_decode: 'Could not read that image. Try a JPEG, PNG, or WebP photo.',
	tool_instagram_story_size_example:
		'Load sample draws a tall stand-in, cover-fills 1080×1920, shows the Story overlay, and enables Download JPEG. Other chips keep 9:16 and change the overlay.',
	tool_instagram_story_size_example_title: 'Example',
	tool_instagram_story_size_faq_a1:
		'No. The photo is decoded in this tab. Nothing is uploaded to Instagram or our servers.',
	tool_instagram_story_size_faq_a2:
		'Stories still run at 1080×1920. That is the default Instagram story size on this page.',
	tool_instagram_story_size_faq_a3:
		'The dim bands preview UI chrome. Your JPEG download does not include the overlay.',
	tool_instagram_story_size_faq_a4:
		'Square and 4:5 feed posts are a different job. Keep this H1 on Story; do not use this page as an Instagram post size tool.',
	tool_instagram_story_size_faq_a5:
		'YouTube’s 16:9 video thumbnail is out of scope. Shorts covers stay here as a 9:16 chip.',
	tool_instagram_story_size_faq_q1: 'Is my photo uploaded?',
	tool_instagram_story_size_faq_q2: 'Why 1080×1920?',
	tool_instagram_story_size_faq_q3: 'Is the dark overlay in the download?',
	tool_instagram_story_size_faq_q4: 'Is this for Instagram posts too?',
	tool_instagram_story_size_faq_q5: 'What about a YouTube video thumbnail?',
	tool_instagram_story_size_how_body:
		'Pick the photo for today’s Story, cover-fill 1080×1920, keep type out of the overlay, then download.',
	tool_instagram_story_size_how_item_1: 'Choose the photo for Instagram story size — the job is a 1080×1920 Story.',
	tool_instagram_story_size_how_item_2: 'Leave Story selected unless you need the Reels / TikTok / Shorts chips.',
	tool_instagram_story_size_how_item_3: 'Read the dim overlay: keep faces and type out of the top and bottom chrome.',
	tool_instagram_story_size_how_item_4: 'Download JPEG. Load sample already ran on first paint.',
	tool_instagram_story_size_how_title: 'How it works',
	tool_instagram_story_size_load_sample: 'Load sample',
	tool_instagram_story_size_out_size_label: 'Output size',
	tool_instagram_story_size_quality_label: 'JPEG quality',
	tool_instagram_story_size_rules_body:
		'Stories are 9:16 cover-fills judged against UI chrome — not a 1:1 post and not a 16:9 video thumbnail.',
	tool_instagram_story_size_rules_item_1:
		'Default canvas is 1080×1920 JPEG. Cover-fill scales until the frame is full.',
	tool_instagram_story_size_rules_item_2:
		'The overlay is preview-only. Downloaded pixels have no mask.',
	tool_instagram_story_size_rules_item_3:
		'Reels / TikTok / Shorts chips stay 1080×1920. They change the overlay, not the H1.',
	tool_instagram_story_size_rules_item_4:
		'Facebook Story uses the same 9:16 frame. It is a FAQ note, not a second URL.',
	tool_instagram_story_size_rules_title: 'Rules you should expect',
	tool_instagram_story_size_safe_hint: 'Dim overlay = UI overlap. It is not written into the JPEG.',
	tool_instagram_story_size_size_reels: 'Reels',
	tool_instagram_story_size_size_shorts: 'Shorts',
	tool_instagram_story_size_size_story: 'Story 1080×1920',
	tool_instagram_story_size_size_tiktok: 'TikTok',
	tool_instagram_story_size_status_done: 'Story ready — download or replace the photo.',
	tool_instagram_story_size_status_working: 'Filling the frame…',
	tool_instagram_story_size_title: 'Instagram story size',
	tool_instagram_story_size_usecase_1:
		'Today’s Story: export 1080×1920 before you post, with type clear of the reply bar.',
	tool_instagram_story_size_usecase_2:
		'Reels cover: switch the chip, keep 9:16, and check the thicker bottom chrome.',
	tool_instagram_story_size_usecase_3:
		'Shorts or TikTok cover: same pixels, different overlay — no extra URL.',
	tool_instagram_story_size_usecases_title: 'Good fits',
};

export default en;
