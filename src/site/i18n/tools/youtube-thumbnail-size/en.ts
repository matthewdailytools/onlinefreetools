/**
 * i18n tool shard (youtube-thumbnail-size / en).
 * Master H1 is “YouTube thumbnail size”; OG share cards and 9:16 Shorts stay off this title.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_youtube_thumbnail_size_article:
		'Cover-fill a still to YouTube thumbnail size 1280×720 (16:9) and download a JPEG. 640×360 is the minimum chip. Files stay on your device and are not uploaded to a server.',
	tool_youtube_thumbnail_size_choose_image: 'Choose image',
	tool_youtube_thumbnail_size_clear: 'Clear',
	tool_youtube_thumbnail_size_desc:
		'Export YouTube thumbnail size 1280×720 (16:9) — stays on your device, not uploaded.',
	tool_youtube_thumbnail_size_description:
		'YouTube thumbnail size: choose a still, cover-fill 1280×720 (16:9), and download a JPEG. Example: the sample is cropped to the thumbnail frame on first paint. 640×360 is the minimum chip. Files stay on your device and are not uploaded to a server. This is not an Open Graph 1200×630 share card and not a 9:16 Shorts cover.',
	tool_youtube_thumbnail_size_download: 'Download JPEG',
	tool_youtube_thumbnail_size_drop_hint: 'Drop one photo. Cover-fill may crop the edges.',
	tool_youtube_thumbnail_size_empty: 'Choose an image first.',
	tool_youtube_thumbnail_size_err_decode: 'Could not read that image. Try a JPEG, PNG, or WebP photo.',
	tool_youtube_thumbnail_size_example:
		'Load sample draws a landscape stand-in, cover-fills 1280×720, and enables Download JPEG. 640×360 is the minimum chip.',
	tool_youtube_thumbnail_size_example_title: 'Example',
	tool_youtube_thumbnail_size_faq_a1:
		'No. The still is decoded in this tab. Nothing is uploaded to YouTube or our servers.',
	tool_youtube_thumbnail_size_faq_a2:
		'YouTube still recommends 1280×720 for custom thumbnails. That is the default YouTube thumbnail size here.',
	tool_youtube_thumbnail_size_faq_a3:
		'Share cards are about 1200×630. Keep this H1 on the video thumbnail; use the related Open Graph page for link previews.',
	tool_youtube_thumbnail_size_faq_a4:
		'Shorts covers are 9:16. That job lives on the Instagram story size page, not this 16:9 thumbnail.',
	tool_youtube_thumbnail_size_faq_a5:
		'640×360 is YouTube’s documented minimum. Use it only when you need the smaller file; 1280×720 stays the default.',
	tool_youtube_thumbnail_size_faq_q1: 'Is my photo uploaded?',
	tool_youtube_thumbnail_size_faq_q2: 'Why 1280×720?',
	tool_youtube_thumbnail_size_faq_q3: 'Is this the same as an Open Graph card?',
	tool_youtube_thumbnail_size_faq_q4: 'What about a Shorts cover?',
	tool_youtube_thumbnail_size_faq_q5: 'When do I use 640×360?',
	tool_youtube_thumbnail_size_how_body:
		'Pick the still for today’s video, cover-fill 1280×720, then download. Link cards and Shorts covers live on related pages.',
	tool_youtube_thumbnail_size_how_item_1:
		'Choose the still for YouTube thumbnail size — the job is a 1280×720 16:9 video thumbnail.',
	tool_youtube_thumbnail_size_how_item_2:
		'Leave 1280×720 selected unless you specifically need the 640×360 minimum chip.',
	tool_youtube_thumbnail_size_how_item_3: 'Download the JPEG. Cover-fill may crop edges so the frame has no bars.',
	tool_youtube_thumbnail_size_how_item_4: 'Load sample already ran on first paint. OG cards and Shorts covers are related pages.',
	tool_youtube_thumbnail_size_how_title: 'How it works',
	tool_youtube_thumbnail_size_load_sample: 'Load sample',
	tool_youtube_thumbnail_size_out_size_label: 'Output size',
	tool_youtube_thumbnail_size_quality_label: 'JPEG quality',
	tool_youtube_thumbnail_size_rules_body:
		'Video thumbnails are 16:9 cover-fill, not a 1.91:1 share card and not a 9:16 Shorts cover.',
	tool_youtube_thumbnail_size_rules_item_1:
		'Default canvas is 1280×720 JPEG. Cover until the 16:9 frame is full.',
	tool_youtube_thumbnail_size_rules_item_2:
		'640×360 is the documented minimum chip. It does not change the H1.',
	tool_youtube_thumbnail_size_rules_item_3:
		'Open Graph 1200×630 is a different job. Use the related share-card page.',
	tool_youtube_thumbnail_size_rules_item_4:
		'Shorts and Stories stay 9:16 on the related story page.',
	tool_youtube_thumbnail_size_rules_title: 'Rules you should expect',
	tool_youtube_thumbnail_size_size_360: '640×360 min',
	tool_youtube_thumbnail_size_size_720: '1280×720',
	tool_youtube_thumbnail_size_status_done: 'Thumbnail ready — download or replace the still.',
	tool_youtube_thumbnail_size_status_working: 'Cover-filling…',
	tool_youtube_thumbnail_size_title: 'YouTube thumbnail size',
	tool_youtube_thumbnail_size_usecase_1:
		'Today’s upload: export 1280×720 before you set the custom thumbnail.',
	tool_youtube_thumbnail_size_usecase_2:
		'A vertical still: cover-fill 16:9 so the faces stay in the middle of the frame.',
	tool_youtube_thumbnail_size_usecase_3:
		'You exported 1200×630 by mistake: recrop here to 1280×720 instead of using the share-card page.',
	tool_youtube_thumbnail_size_usecases_title: 'Good fits',
};

export default en;
