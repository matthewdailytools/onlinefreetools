/**
 * i18n tool shard (apple-touch-icon / en).
 * Master H1 is “Apple-touch-icon 180×180”; generator wording stays out of the title.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_apple_touch_icon_article:
		'Export a logo to an opaque 180×180 apple-touch-icon PNG, with optional 32 / 192 / 512 sizes in a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_apple_touch_icon_bg_label: 'Opaque background',
	tool_apple_touch_icon_choose_image: 'Choose logo',
	tool_apple_touch_icon_clear: 'Clear',
	tool_apple_touch_icon_desc:
		'Export apple-touch-icon 180×180 as an opaque PNG — stays on your device, not uploaded.',
	tool_apple_touch_icon_description:
		'Apple-touch-icon 180×180: choose a logo, place it on an opaque square, and download a PNG. Example: the sample logo is fitted to 180×180 on first paint. Optional chips export favicon 32 and PWA 192 / 512 in a ZIP. Files stay on your device and are not uploaded to a server. This is not a favicon-generator head term.',
	tool_apple_touch_icon_download: 'Download PNG',
	tool_apple_touch_icon_download_zip: 'Download sizes ZIP',
	tool_apple_touch_icon_drop_hint: 'Drop one logo. It is centered on an opaque square.',
	tool_apple_touch_icon_empty: 'Choose a logo first.',
	tool_apple_touch_icon_err_decode: 'Could not read that image. Try a PNG, JPEG, or SVG screenshot as a bitmap.',
	tool_apple_touch_icon_err_fflate: 'ZIP engine failed to load. Check your network and retry.',
	tool_apple_touch_icon_example:
		'Load sample draws a stand-in mark, contains it on a 180×180 opaque square, and enables Download PNG. ZIP adds 32, 192, and 512.',
	tool_apple_touch_icon_example_title: 'Example',
	tool_apple_touch_icon_faq_a1:
		'No. The logo is decoded in this tab. Nothing is uploaded to our servers.',
	tool_apple_touch_icon_faq_a2:
		'Generator SERPs are already crowded. This page’s H1 is the 180×180 apple-touch-icon job, not “Favicon generator”.',
	tool_apple_touch_icon_faq_a3:
		'Apple historically preferred an opaque (precomposed-style) home-screen icon. This page fills an opaque background so iOS does not composite a gloss over transparency.',
	tool_apple_touch_icon_faq_a4:
		'32 is a small favicon PNG chip. 192 and 512 are common PWA icons. They ride along in the ZIP, not in the H1.',
	tool_apple_touch_icon_faq_a5:
		'Older 167 / 152 / 120 iPad sizes are optional in the ZIP set. Default export remains 180×180.',
	tool_apple_touch_icon_faq_q1: 'Is my logo uploaded?',
	tool_apple_touch_icon_faq_q2: 'Why is this not a favicon generator?',
	tool_apple_touch_icon_faq_q3: 'Why opaque / precomposed?',
	tool_apple_touch_icon_faq_q4: 'What about favicon 32 and PWA 192/512?',
	tool_apple_touch_icon_faq_q5: 'Do you still export 167 or 152?',
	tool_apple_touch_icon_how_body:
		'Pick the logo that should appear when someone adds your site to the home screen, export 180×180 opaque PNG, then optionally ZIP extra sizes.',
	tool_apple_touch_icon_how_item_1: 'Choose the logo for apple-touch-icon 180×180 — that is the job.',
	tool_apple_touch_icon_how_item_2: 'Leave 180 selected unless you need the 32 / 192 / 512 chips.',
	tool_apple_touch_icon_how_item_3: 'Keep the opaque background so the icon is not see-through on the home screen.',
	tool_apple_touch_icon_how_item_4: 'Download PNG or the sizes ZIP. Load sample already ran on first paint.',
	tool_apple_touch_icon_how_title: 'How it works',
	tool_apple_touch_icon_load_sample: 'Load sample',
	tool_apple_touch_icon_out_size_label: 'Output size',
	tool_apple_touch_icon_rules_body:
		'Home-screen icons need a square, an opaque fill, and a clear split from favicon-generator SERPs.',
	tool_apple_touch_icon_rules_item_1:
		'Default canvas is 180×180 PNG. The logo is contained (not stretched) and centered.',
	tool_apple_touch_icon_rules_item_2:
		'Background is opaque (default white). Transparency is flattened on purpose.',
	tool_apple_touch_icon_rules_item_3:
		'32 / 192 / 512 are extra ZIP entries. They do not change the H1.',
	tool_apple_touch_icon_rules_item_4:
		'This is not RealFaviconGenerator. No ICO package, no browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'Rules you should expect',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'Icon ready — download or replace the logo.',
	tool_apple_touch_icon_status_working: 'Drawing the square…',
	tool_apple_touch_icon_title: 'Apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'Add to Home Screen: export apple-touch-icon.png at 180×180 before you write the link tag.',
	tool_apple_touch_icon_usecase_2:
		'PWA: grab 192 and 512 from the ZIP for the web app manifest.',
	tool_apple_touch_icon_usecase_3:
		'Small favicon PNG 32 for browsers that still ask for a square PNG, without renaming this page a generator.',
	tool_apple_touch_icon_usecases_title: 'Good fits',
};

export default en;
