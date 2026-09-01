/**
 * i18n tool shard (instagram-post-size / en).
 * Master H1 is “Instagram post size”; Stories and OG share cards stay off this title.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_instagram_post_size_article:
		'Cover-fill a photo to Instagram post size 1080×1080 (1:1) and download a JPEG. 4:5 and landscape chips stay on this feed canvas. Files stay on your device and are not uploaded to a server.',
	tool_instagram_post_size_choose_image: 'Choose image',
	tool_instagram_post_size_clear: 'Clear',
	tool_instagram_post_size_desc:
		'Export Instagram post size 1080×1080 (1:1) — stays on your device, not uploaded.',
	tool_instagram_post_size_description:
		'Instagram post size: choose a photo, cover-fill 1080×1080 (1:1), and download a JPEG. Example: the sample is cropped to the square feed frame on first paint. 4:5 (1080×1350) and landscape (1080×566) are chips. Files stay on your device and are not uploaded to a server. This is not a 9:16 Story and not a 1200×630 Open Graph card.',
	tool_instagram_post_size_download: 'Download JPEG',
	tool_instagram_post_size_drop_hint: 'Drop one photo. Cover-fill may crop the edges.',
	tool_instagram_post_size_empty: 'Choose an image first.',
	tool_instagram_post_size_err_decode: 'Could not read that image. Try a JPEG, PNG, or WebP photo.',
	tool_instagram_post_size_example:
		'Load sample draws a square stand-in, cover-fills 1080×1080, and enables Download JPEG. 4:5 and landscape are chips.',
	tool_instagram_post_size_example_title: 'Example',
	tool_instagram_post_size_faq_a1:
		'No. The photo is decoded in this tab. Nothing is uploaded to Instagram or our servers.',
	tool_instagram_post_size_faq_a2:
		'Feed still uses 1080×1080 as the common square. That is the default Instagram post size here.',
	tool_instagram_post_size_faq_a3:
		'4:5 is 1080×1350 on this page. Switch the chip; do not open a second URL.',
	tool_instagram_post_size_faq_a4:
		'Stories are 9:16. That job lives on the Instagram story size page, not this feed post.',
	tool_instagram_post_size_faq_a5:
		'Facebook photo posts often use the same 1:1. Link-share cards around 1200×630 belong on the Open Graph page.',
	tool_instagram_post_size_faq_q1: 'Is my photo uploaded?',
	tool_instagram_post_size_faq_q2: 'Why 1080×1080?',
	tool_instagram_post_size_faq_q3: 'Where is 4:5?',
	tool_instagram_post_size_faq_q4: 'Is this a Story?',
	tool_instagram_post_size_faq_q5: 'What about a Facebook feed photo?',
	tool_instagram_post_size_how_body:
		'Pick the photo for today’s feed post, cover-fill 1080×1080, then download. Stories and link cards live on related pages.',
	tool_instagram_post_size_how_item_1:
		'Choose the photo for Instagram post size — the job is a 1080×1080 square feed post.',
	tool_instagram_post_size_how_item_2:
		'Leave the square selected unless you need the 4:5 or landscape chip.',
	tool_instagram_post_size_how_item_3: 'Download the JPEG. Cover-fill may crop edges so the frame has no bars.',
	tool_instagram_post_size_how_item_4: 'Load sample already ran on first paint. Stories and OG cards are related pages.',
	tool_instagram_post_size_how_title: 'How it works',
	tool_instagram_post_size_load_sample: 'Load sample',
	tool_instagram_post_size_out_size_label: 'Output size',
	tool_instagram_post_size_quality_label: 'JPEG quality',
	tool_instagram_post_size_rules_body:
		'Feed posts are 1:1 cover-fill by default, not a 9:16 Story and not a link-share card.',
	tool_instagram_post_size_rules_item_1:
		'Default canvas is 1080×1080 JPEG. Cover until the square is full.',
	tool_instagram_post_size_rules_item_2:
		'4:5 is 1080×1350 and landscape is 1080×566. Chips do not change the H1.',
	tool_instagram_post_size_rules_item_3:
		'Stories stay 9:16 on the related story page.',
	tool_instagram_post_size_rules_item_4:
		'Open Graph 1200×630 is a different job. Facebook square photos can use this 1:1 export.',
	tool_instagram_post_size_rules_title: 'Rules you should expect',
	tool_instagram_post_size_size_45: '4:5 1080×1350',
	tool_instagram_post_size_size_land: 'Landscape 1080×566',
	tool_instagram_post_size_size_square: 'Square 1080×1080',
	tool_instagram_post_size_status_done: 'Post ready — download or replace the photo.',
	tool_instagram_post_size_status_working: 'Cover-filling…',
	tool_instagram_post_size_title: 'Instagram post size',
	tool_instagram_post_size_usecase_1:
		'Today’s feed: export 1080×1080 before you tap Share.',
	tool_instagram_post_size_usecase_2:
		'A taller crop: switch to 4:5 so more of the portrait stays in the feed.',
	tool_instagram_post_size_usecase_3:
		'You opened Story by mistake: recrop here to 1:1 instead of 9:16.',
	tool_instagram_post_size_usecases_title: 'Good fits',
};

export default en;
