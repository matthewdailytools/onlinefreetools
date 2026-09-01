/**
 * i18n tool shard (open-graph-image-size / en).
 * Master H1 is “Open Graph image size”; short “og image” stays out of the title.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_open_graph_image_size_article:
		'Crop one photo to a 1200×630 Open Graph share card (about 1.91:1) and download a JPEG. Files stay on your device and are not uploaded to a server.',
	tool_open_graph_image_size_choose_image: 'Choose image',
	tool_open_graph_image_size_clear: 'Clear',
	tool_open_graph_image_size_desc:
		'Export an Open Graph image at 1200×630 — stays on your device, not uploaded.',
	tool_open_graph_image_size_description:
		'Open Graph image size: choose a photo, cover-fill 1200×630 (about 1.91:1), and download a JPEG. Example: the sample is cropped to the share-card frame on first paint. LinkedIn’s 1200×627 is a chip. Files stay on your device and are not uploaded to a server. To check og:image tags, use the related preview page — not this H1. Short “og image” is not the title.',
	tool_open_graph_image_size_download: 'Download JPEG',
	tool_open_graph_image_size_drop_hint: 'Drop one photo. Cover-fill may crop the edges.',
	tool_open_graph_image_size_empty: 'Choose an image first.',
	tool_open_graph_image_size_err_decode: 'Could not read that image. Try a JPEG, PNG, or WebP photo.',
	tool_open_graph_image_size_example:
		'Load sample draws a landscape stand-in, cover-fills 1200×630, and enables Download JPEG. 1200×627 is the LinkedIn chip.',
	tool_open_graph_image_size_example_title: 'Example',
	tool_open_graph_image_size_faq_a1:
		'No. The photo stays in this tab. Nothing is uploaded to Facebook, LinkedIn, or our servers.',
	tool_open_graph_image_size_faq_a2:
		'Short “og image” queries get slang hijack. This page’s H1 is the full phrase Open Graph image size.',
	tool_open_graph_image_size_faq_a3:
		'1200×630 is the common 1.91:1 card. 1200×627 is a near-identical LinkedIn chip. Stories and channel art are out of scope.',
	tool_open_graph_image_size_faq_a4:
		'This page only exports pixels. Use the related Open Graph preview tool to inspect og:image tags on a URL.',
	tool_open_graph_image_size_faq_a5:
		'Yes. Cover-fill scales until the 1200×630 frame is full. Overflow is cropped.',
	tool_open_graph_image_size_faq_q1: 'Is my photo uploaded?',
	tool_open_graph_image_size_faq_q2: 'Why not title this “og image”?',
	tool_open_graph_image_size_faq_q3: '1200×630 vs 1200×627?',
	tool_open_graph_image_size_faq_q4: 'Where do I check if og:image is showing?',
	tool_open_graph_image_size_faq_q5: 'Will the edges be cropped?',
	tool_open_graph_image_size_how_body:
		'Pick the photo that should appear when a link is shared, cover-fill 1200×630, then download. Tag debugging lives on the preview page.',
	tool_open_graph_image_size_how_item_1: 'Choose the photo for the Open Graph share card — that is the job.',
	tool_open_graph_image_size_how_item_2: 'Leave 1200×630 selected unless you specifically need the 1200×627 chip.',
	tool_open_graph_image_size_how_item_3: 'Download the JPEG. Cover-fill may crop edges so the card has no bars.',
	tool_open_graph_image_size_how_item_4: 'Load sample already ran on first paint. Check tags on the related preview tool.',
	tool_open_graph_image_size_how_title: 'How it works',
	tool_open_graph_image_size_load_sample: 'Load sample',
	tool_open_graph_image_size_out_size_label: 'Output size',
	tool_open_graph_image_size_quality_label: 'JPEG quality',
	tool_open_graph_image_size_rules_body:
		'Share-card export needs a 1.91:1 frame, cover-fill, and a split from tag preview.',
	tool_open_graph_image_size_rules_item_1:
		'Default canvas is 1200×630. Optional chip is 1200×627. Ratio is about 1.91:1.',
	tool_open_graph_image_size_rules_item_2:
		'Cover-fill (not letterbox). Overflow is cropped.',
	tool_open_graph_image_size_rules_item_3:
		'og:image tag debugging is the related preview page, not this H1.',
	tool_open_graph_image_size_rules_item_4:
		'Stories, YouTube thumbs, and channel art are out of scope.',
	tool_open_graph_image_size_rules_title: 'Rules you should expect',
	tool_open_graph_image_size_size_627: '1200×627',
	tool_open_graph_image_size_size_630: '1200×630',
	tool_open_graph_image_size_status_done: 'Share card ready — download or replace the photo.',
	tool_open_graph_image_size_status_working: 'Cover-filling…',
	tool_open_graph_image_size_title: 'Open Graph image size',
	tool_open_graph_image_size_usecase_1:
		'Blog post: export a 1200×630 JPEG before you set og:image.',
	tool_open_graph_image_size_usecase_2:
		'Product URL: crop a pack shot to the share-card frame without opening a design app.',
	tool_open_graph_image_size_usecase_3:
		'LinkedIn: use the 1200×627 chip when a partner asked for that exact pair.',
	tool_open_graph_image_size_usecases_title: 'Good fits',
};

export default en;
