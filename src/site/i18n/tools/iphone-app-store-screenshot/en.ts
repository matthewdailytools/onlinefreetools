/**
 * i18n tool shard (iphone-app-store-screenshot / en).
 * Master H1 is the locked long-tail “iPhone 6.9 screenshot size”; 6.7 stays in FAQ only.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_iphone_app_store_screenshot_article:
		'Export one screenshot to the current iPhone 6.9 App Store pixel sizes, then download a JPEG or a ZIP of all three. Files stay on your device and are not uploaded to a server.',
	tool_iphone_app_store_screenshot_choose_image: 'Choose screenshot',
	tool_iphone_app_store_screenshot_clear: 'Clear',
	tool_iphone_app_store_screenshot_desc:
		'Export an iPhone 6.9 App Store screenshot at 1320×2868 — stays on your device, not uploaded.',
	tool_iphone_app_store_screenshot_description:
		'iPhone 6.9 screenshot size: choose a screenshot, cover-fill it to 1320×2868 (or 1290×2796 / 1260×2736), and download a JPEG. Example: the sample is cropped to the 6.9-inch required size on first paint. Files stay on your device and are not uploaded to a server. 6.7-inch sizes are folded into 6.9. This is not App Review.',
	tool_iphone_app_store_screenshot_download: 'Download JPEG',
	tool_iphone_app_store_screenshot_download_zip: 'Download all sizes ZIP',
	tool_iphone_app_store_screenshot_drop_hint: 'Drop one screenshot. Cover-fill may crop the edges.',
	tool_iphone_app_store_screenshot_empty: 'Choose a screenshot first.',
	tool_iphone_app_store_screenshot_err_decode: 'Could not read that image. Try a PNG or JPEG screenshot.',
	tool_iphone_app_store_screenshot_err_fflate: 'ZIP engine failed to load. Check your network and retry.',
	tool_iphone_app_store_screenshot_example:
		'Load sample draws a portrait stand-in, cover-fills 1320×2868, and enables Download JPEG. The other 6.9 sizes are chips; ZIP packs all three.',
	tool_iphone_app_store_screenshot_example_title: 'Example',
	tool_iphone_app_store_screenshot_faq_a1:
		'No. Bytes stay in this tab. Nothing is uploaded to Apple or to our servers.',
	tool_iphone_app_store_screenshot_faq_a2:
		'Apple’s current required iPhone class is 6.9-inch. Older 6.7-inch pixel lists are folded into these three sizes. This page does not use 6.7 as the H1.',
	tool_iphone_app_store_screenshot_faq_a3:
		'Default is 1320×2868. 1290×2796 and 1260×2736 are the other accepted 6.9-inch pairs. Pick one, or download a ZIP of all three.',
	tool_iphone_app_store_screenshot_faq_a4:
		'Yes. Cover-fill scales until the frame is full, then crops overflow. Use the related Crop tool if you need a different framing.',
	tool_iphone_app_store_screenshot_faq_a5:
		'iPad screenshot sizes are out of the first screen. This page is the iPhone 6.9 required set.',
	tool_iphone_app_store_screenshot_faq_q1: 'Is my screenshot uploaded?',
	tool_iphone_app_store_screenshot_faq_q2: 'Why not iPhone 6.7 screenshot size?',
	tool_iphone_app_store_screenshot_faq_q3: 'What are 1320×2868, 1290×2796, and 1260×2736?',
	tool_iphone_app_store_screenshot_faq_q4: 'Will the edges be cropped?',
	tool_iphone_app_store_screenshot_faq_q5: 'Does this export iPad screenshots?',
	tool_iphone_app_store_screenshot_how_body:
		'Pick the screenshot that must go into App Store Connect, cover-fill the 6.9-inch size, then download. Extra sizes are chips, not a second designer.',
	tool_iphone_app_store_screenshot_how_item_1: 'Choose the screenshot you need for the iPhone 6.9 required set.',
	tool_iphone_app_store_screenshot_how_item_2: 'Leave 1320×2868 selected unless Connect asked for one of the other 6.9 pairs.',
	tool_iphone_app_store_screenshot_how_item_3: 'Download the JPEG, or pack all three sizes into a ZIP.',
	tool_iphone_app_store_screenshot_how_item_4: 'Load sample already ran on first paint so you can see cover-fill immediately.',
	tool_iphone_app_store_screenshot_how_title: 'How it works',
	tool_iphone_app_store_screenshot_load_sample: 'Load sample',
	tool_iphone_app_store_screenshot_out_size_label: 'Output size',
	tool_iphone_app_store_screenshot_quality_label: 'JPEG quality',
	tool_iphone_app_store_screenshot_rules_body:
		'App Store screenshot export needs exact pixels, cover-fill, and a clear 6.7-to-6.9 note.',
	tool_iphone_app_store_screenshot_rules_item_1:
		'Default canvas is 1320×2868. The other 6.9-inch accepted pairs are 1290×2796 and 1260×2736.',
	tool_iphone_app_store_screenshot_rules_item_2:
		'Cover-fill (not letterbox) so the export has no empty bars. Overflow is cropped.',
	tool_iphone_app_store_screenshot_rules_item_3:
		'6.7-inch searches are answered in FAQ only. They are not a second H1.',
	tool_iphone_app_store_screenshot_rules_item_4:
		'This is not App Review. Apple can still reject framing, text, or device chrome.',
	tool_iphone_app_store_screenshot_rules_title: 'Rules you should expect',
	tool_iphone_app_store_screenshot_size_2736: '1260×2736',
	tool_iphone_app_store_screenshot_size_2796: '1290×2796',
	tool_iphone_app_store_screenshot_size_2868: '1320×2868',
	tool_iphone_app_store_screenshot_status_done: 'Screenshot ready — download or replace the image.',
	tool_iphone_app_store_screenshot_status_working: 'Cover-filling…',
	tool_iphone_app_store_screenshot_title: 'iPhone 6.9 screenshot size',
	tool_iphone_app_store_screenshot_usecase_1:
		'App Store Connect: export the 6.9-inch required screenshot before upload.',
	tool_iphone_app_store_screenshot_usecase_2:
		'Wrong-dimensions error: re-export at 1320×2868 instead of an old 6.7 size.',
	tool_iphone_app_store_screenshot_usecase_3:
		'Pack all three 6.9 pairs into a ZIP for a teammate who uploads later.',
	tool_iphone_app_store_screenshot_usecases_title: 'Good fits',
};

export default en;
