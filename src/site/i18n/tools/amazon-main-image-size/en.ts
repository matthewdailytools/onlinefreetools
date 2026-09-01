/**
 * i18n tool shard (amazon-main-image-size / en).
 * Master H1 is the locked long-tail “Amazon main image size”; pixels stay in description.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_amazon_main_image_size_article:
		'Turn one product photo into a square Amazon main image on a white background, then download a JPEG. Files stay on your device and are not uploaded to a server.',
	tool_amazon_main_image_size_check_fill: 'Fit about 85% of the frame',
	tool_amazon_main_image_size_choose_image: 'Choose image',
	tool_amazon_main_image_size_clear: 'Clear',
	tool_amazon_main_image_size_desc:
		'Export an Amazon main image at 2000×2000 on white, with a 1000px zoom check — stays on your device.',
	tool_amazon_main_image_size_description:
		'Amazon main image size: choose a product photo, export a 2000×2000 JPEG on a white RGB 255 background, and check the 1000px zoom floor. Example: the sample photo is fitted to about 85% of a 2000×2000 square. Files stay on your device and are not uploaded to a server. This is not an official Seller Central review.',
	tool_amazon_main_image_size_download: 'Download JPEG',
	tool_amazon_main_image_size_drop_hint: 'Drop one product photo. Processing stays in this tab.',
	tool_amazon_main_image_size_empty: 'Choose a product photo first.',
	tool_amazon_main_image_size_err_decode: 'Could not read that image. Try a JPEG, PNG, or WebP photo.',
	tool_amazon_main_image_size_example:
		'Load sample draws a stand-in product photo, fits it on a 2000×2000 white square at about 85% of the frame, and enables Download JPEG. The zoom chip shows the longest edge is above 1000px.',
	tool_amazon_main_image_size_example_title: 'Example',
	tool_amazon_main_image_size_faq_a1:
		'No. The photo is decoded in this browser tab. Nothing is uploaded to our servers. This is not Seller Central.',
	tool_amazon_main_image_size_faq_a2:
		'Default export is 2000×2000. 1600 is an older common size still offered as a chip. Pixels do not go in the H1.',
	tool_amazon_main_image_size_faq_a3:
		'Amazon zoom usually wants at least 1000 pixels on the longest side. The chip compares your export edge against that floor. Upscaling a tiny photo can pass the number and still look soft.',
	tool_amazon_main_image_size_faq_a4:
		'Main images are expected on pure white. This page fills RGB 255,255,255 and optionally keeps the product at about 85% of the square so it is not cropped to the edges.',
	tool_amazon_main_image_size_faq_a5:
		'Gallery and A+ images have other jobs. This page is the main image only. For freeform crop sizes use the related Crop tool.',
	tool_amazon_main_image_size_faq_q1: 'Is my photo uploaded to Amazon or this site?',
	tool_amazon_main_image_size_faq_q2: 'Why 2000×2000 instead of 1600?',
	tool_amazon_main_image_size_faq_q3: 'Why does Amazon zoom fail under 1000px?',
	tool_amazon_main_image_size_faq_q4: 'What about white background and 85% of the frame?',
	tool_amazon_main_image_size_faq_q5: 'Does this export secondary images too?',
	tool_amazon_main_image_size_fill_label: 'Fill of frame',
	tool_amazon_main_image_size_how_body:
		'Pick the product photo that should become the main image, keep it on white, export 2000×2000, and read the zoom chip. Extra sizes are chips, not a second tool.',
	tool_amazon_main_image_size_how_item_1: 'Choose the photo you want as the Amazon main image — that is the job.',
	tool_amazon_main_image_size_how_item_2: 'Leave 2000×2000 selected unless you still need the older 1600 square.',
	tool_amazon_main_image_size_how_item_3: 'Keep the 85% fit unless the product already fills the frame the way you want.',
	tool_amazon_main_image_size_how_item_4: 'Download the JPEG and read the zoom floor chip. Load sample already ran on first paint.',
	tool_amazon_main_image_size_how_title: 'How it works',
	tool_amazon_main_image_size_load_sample: 'Load sample',
	tool_amazon_main_image_size_out_size_label: 'Output size',
	tool_amazon_main_image_size_quality_label: 'JPEG quality',
	tool_amazon_main_image_size_rules_body:
		'Main-image export in the browser needs a square canvas, a white fill, a zoom floor, and a clear “not official review” boundary.',
	tool_amazon_main_image_size_rules_item_1:
		'Default canvas is 2000×2000. 1600×1600 is optional. The photo is contained (not stretched) on RGB 255 white.',
	tool_amazon_main_image_size_rules_item_2:
		'Optional 85% fit scales the product inside the square so it does not touch the edges.',
	tool_amazon_main_image_size_rules_item_3:
		'Zoom chip: longest output edge should be ≥1000px. The page does not claim Amazon will accept the file.',
	tool_amazon_main_image_size_rules_item_4:
		'Secondary images, infographics, and A+ modules are out of scope. This is not Seller Central.',
	tool_amazon_main_image_size_rules_title: 'Rules you should expect',
	tool_amazon_main_image_size_size_1600: '1600×1600',
	tool_amazon_main_image_size_size_2000: '2000×2000',
	tool_amazon_main_image_size_status_done: 'Main image ready — download or replace the photo.',
	tool_amazon_main_image_size_status_working: 'Building the square…',
	tool_amazon_main_image_size_title: 'Amazon main image size',
	tool_amazon_main_image_size_usecase_1:
		'New listing: turn a phone photo into a 2000×2000 white main image before you open Seller Central.',
	tool_amazon_main_image_size_usecase_2:
		'Zoom broken: check whether the longest edge is still under 1000px, then re-export at 2000.',
	tool_amazon_main_image_size_usecase_3:
		'Replace a small inherited main image, then compress further on the related Image Compressor if the JPEG is heavy.',
	tool_amazon_main_image_size_usecases_title: 'Good fits',
	tool_amazon_main_image_size_zoom_fail: 'Longest edge is under 1000px — zoom may fail.',
	tool_amazon_main_image_size_zoom_ok: 'Longest edge meets the 1000px zoom floor.',
	tool_amazon_main_image_size_zoom_label: 'Zoom floor',
};

export default en;
