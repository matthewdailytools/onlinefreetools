/**
 * i18n tool shard (ios-app-icon-size / en).
 * Master H1 is “iOS app icon size”; generator-pack wording stays out of the title.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'Export a logo to an opaque 1024×1024 iOS app icon PNG for App Store Connect, with optional iPhone 180, iPad 167, and Play 512 sizes in a ZIP. Files stay on your device and are not uploaded to a server.',
	tool_ios_app_icon_size_bg_label: 'Opaque background',
	tool_ios_app_icon_size_choose_image: 'Choose logo',
	tool_ios_app_icon_size_clear: 'Clear',
	tool_ios_app_icon_size_desc:
		'Export iOS app icon size 1024×1024 as an opaque PNG — stays on your device, not uploaded.',
	tool_ios_app_icon_size_description:
		'iOS app icon size: choose a logo, place it on an opaque 1024×1024 square for App Store Connect, and download a PNG. Example: the sample logo is fitted to 1024×1024 on first paint. Optional chips export iPhone 180, iPad 167, and Play 512 in a ZIP. Files stay on your device and are not uploaded to a server. This is not an app-icon-generator pack.',
	tool_ios_app_icon_size_download: 'Download PNG',
	tool_ios_app_icon_size_download_zip: 'Download sizes ZIP',
	tool_ios_app_icon_size_drop_hint: 'Drop one square logo. It is centered on an opaque square with no rounded mask.',
	tool_ios_app_icon_size_empty: 'Choose a logo first.',
	tool_ios_app_icon_size_err_decode: 'Could not read that image. Try a PNG or JPEG.',
	tool_ios_app_icon_size_err_fflate: 'ZIP engine failed to load. Check your network and retry.',
	tool_ios_app_icon_size_example:
		'Load sample draws a stand-in mark, contains it on a 1024×1024 opaque square, and enables Download PNG. ZIP adds 180, 167, Play 512, and smaller iOS slots.',
	tool_ios_app_icon_size_example_title: 'Example',
	tool_ios_app_icon_size_faq_a1:
		'No. The logo is decoded in this tab. Nothing is uploaded to our servers.',
	tool_ios_app_icon_size_faq_a2:
		'App Store Connect still asks for a 1024×1024 PNG with no transparency. That is the default iOS app icon size on this page.',
	tool_ios_app_icon_size_faq_a3:
		'Apple composites the squircle. Export a full square; do not pre-round the corners.',
	tool_ios_app_icon_size_faq_a4:
		'180 is iPhone 60pt @3x. 167 is iPad Pro 83.5pt @2x. They are chips, not a second H1.',
	tool_ios_app_icon_size_faq_a5:
		'Play high-res icon 512 rides in the ZIP. Adaptive icon XML is out of scope; this page does not split a Play asset pack URL.',
	tool_ios_app_icon_size_faq_q1: 'Is my logo uploaded?',
	tool_ios_app_icon_size_faq_q2: 'Why 1024×1024?',
	tool_ios_app_icon_size_faq_q3: 'Should I round the corners?',
	tool_ios_app_icon_size_faq_q4: 'What are 180 and 167?',
	tool_ios_app_icon_size_faq_q5: 'Where is the Google Play icon?',
	tool_ios_app_icon_size_how_body:
		'Pick the logo that should appear on the App Store and home screen, export 1024×1024 opaque PNG, then optionally ZIP extra iOS and Play sizes.',
	tool_ios_app_icon_size_how_item_1: 'Choose the logo for iOS app icon size — the job is a 1024 App Store PNG.',
	tool_ios_app_icon_size_how_item_2: 'Leave 1024 selected unless you need the 180 / 167 / Play 512 chips.',
	tool_ios_app_icon_size_how_item_3: 'Keep the opaque background so App Store Connect does not reject a transparent icon.',
	tool_ios_app_icon_size_how_item_4: 'Download PNG or the sizes ZIP. Load sample already ran on first paint.',
	tool_ios_app_icon_size_how_title: 'How it works',
	tool_ios_app_icon_size_load_sample: 'Load sample',
	tool_ios_app_icon_size_out_size_label: 'Output size',
	tool_ios_app_icon_size_rules_body:
		'App Store icons need a square, an opaque fill, and a clear split from website apple-touch-icon pages.',
	tool_ios_app_icon_size_rules_item_1:
		'Default canvas is 1024×1024 PNG. The logo is contained (not stretched) and centered.',
	tool_ios_app_icon_size_rules_item_2:
		'Background is opaque (default white). Alpha is flattened on purpose.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 are extra ZIP entries. They do not change the H1.',
	tool_ios_app_icon_size_rules_item_4:
		'This is not an Assets.xcassets project and not an Adaptive Icon XML pack.',
	tool_ios_app_icon_size_rules_title: 'Rules you should expect',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'Icon ready — download or replace the logo.',
	tool_ios_app_icon_size_status_working: 'Drawing the square…',
	tool_ios_app_icon_size_title: 'iOS app icon size',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect: export the 1024×1024 iOS app icon before you attach screenshots.',
	tool_ios_app_icon_size_usecase_2:
		'iPhone home screen: grab 180 from the ZIP to preview 60pt @3x.',
	tool_ios_app_icon_size_usecase_3:
		'Play listing: take the 512 high-res chip without renaming this page a Play asset pack.',
	tool_ios_app_icon_size_usecases_title: 'Good fits',
};

export default en;
