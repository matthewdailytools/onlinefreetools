/**
 * i18n tool shard (linkedin-banner-size / en).
 * Master H1 is “LinkedIn banner size”; Open Graph share cards stay on the related page.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_linkedin_banner_size_article:
		'Cover-fill a photo to LinkedIn banner size 1584×396, preview the avatar overlap, and download a JPEG. Optional chips export Facebook cover, X header, and YouTube channel art. Files stay on your device and are not uploaded to a server.',
	tool_linkedin_banner_size_choose_image: 'Choose image',
	tool_linkedin_banner_size_clear: 'Clear',
	tool_linkedin_banner_size_desc:
		'Export LinkedIn banner size 1584×396 with an avatar safe-zone preview — stays on your device, not uploaded.',
	tool_linkedin_banner_size_description:
		'LinkedIn banner size: choose a landscape photo, cover-fill 1584×396 for the personal background, and download a JPEG. Example: the sample is cropped to 1584×396 on first paint. The overlay marks where the profile photo sits — it is not baked into the download. Facebook cover, X header, and YouTube channel art are chips. Files stay on your device and are not uploaded to a server. This is not an Open Graph share card.',
	tool_linkedin_banner_size_download: 'Download JPEG',
	tool_linkedin_banner_size_drop_hint: 'Drop one landscape photo. Cover-fill may crop the edges. Keep type out of the dim overlay.',
	tool_linkedin_banner_size_empty: 'Choose an image first.',
	tool_linkedin_banner_size_err_decode: 'Could not read that image. Try a JPEG, PNG, or WebP photo.',
	tool_linkedin_banner_size_example:
		'Load sample draws a wide stand-in, cover-fills 1584×396, shows the avatar overlay, and enables Download JPEG. Other chips switch the frame.',
	tool_linkedin_banner_size_example_title: 'Example',
	tool_linkedin_banner_size_faq_a1:
		'No. The photo is decoded in this tab. Nothing is uploaded to LinkedIn or our servers.',
	tool_linkedin_banner_size_faq_a2:
		'LinkedIn still documents a 1584×396 personal background. That is the default LinkedIn banner size here.',
	tool_linkedin_banner_size_faq_a3:
		'The dim patch is a preview of the profile photo overlap. Your JPEG download does not include the overlay.',
	tool_linkedin_banner_size_faq_a4:
		'Company-page covers are a different crop. Keep this H1 on the personal banner; company size is a FAQ note, not a second URL.',
	tool_linkedin_banner_size_faq_a5:
		'Share-card 1200×630 lives on the Open Graph image size tool. This page is ultra-wide cover art with a safe zone.',
	tool_linkedin_banner_size_faq_q1: 'Is my photo uploaded?',
	tool_linkedin_banner_size_faq_q2: 'Why 1584×396?',
	tool_linkedin_banner_size_faq_q3: 'Is the dark overlay in the download?',
	tool_linkedin_banner_size_faq_q4: 'What about a LinkedIn company page cover?',
	tool_linkedin_banner_size_faq_q5: 'Is this the same as an Open Graph image?',
	tool_linkedin_banner_size_how_body:
		'Pick the photo for your LinkedIn background, cover-fill 1584×396, keep type out of the avatar overlay, then download.',
	tool_linkedin_banner_size_how_item_1: 'Choose the photo for LinkedIn banner size — the job is a 1584×396 personal background.',
	tool_linkedin_banner_size_how_item_2: 'Leave LinkedIn selected unless you need the Facebook / X / YouTube chips.',
	tool_linkedin_banner_size_how_item_3: 'Read the dim overlay: keep faces and type out of the avatar overlap.',
	tool_linkedin_banner_size_how_item_4: 'Download JPEG. Load sample already ran on first paint.',
	tool_linkedin_banner_size_how_title: 'How it works',
	tool_linkedin_banner_size_load_sample: 'Load sample',
	tool_linkedin_banner_size_out_size_label: 'Output size',
	tool_linkedin_banner_size_quality_label: 'JPEG quality',
	tool_linkedin_banner_size_rules_body:
		'Personal banners are ultra-wide, cover-filled, and judged against a profile-photo overlap — not a 1.91:1 share card.',
	tool_linkedin_banner_size_rules_item_1:
		'Default canvas is 1584×396 JPEG. Cover-fill scales until the frame is full.',
	tool_linkedin_banner_size_rules_item_2:
		'The overlay is preview-only. Downloaded pixels have no mask.',
	tool_linkedin_banner_size_rules_item_3:
		'Facebook 851×315, X 1500×500, and YouTube 2560×1440 are chips. They do not change the H1.',
	tool_linkedin_banner_size_rules_item_4:
		'YouTube’s chip dims outside the 1546×423 device-safe center. This is not a channel-art pack URL.',
	tool_linkedin_banner_size_rules_title: 'Rules you should expect',
	tool_linkedin_banner_size_safe_hint: 'Dim overlay = UI overlap. It is not written into the JPEG.',
	tool_linkedin_banner_size_size_facebook: 'FB cover',
	tool_linkedin_banner_size_size_linkedin: '1584×396',
	tool_linkedin_banner_size_size_x: 'X header',
	tool_linkedin_banner_size_size_youtube: 'YT channel',
	tool_linkedin_banner_size_status_done: 'Banner ready — download or replace the photo.',
	tool_linkedin_banner_size_status_working: 'Filling the frame…',
	tool_linkedin_banner_size_title: 'LinkedIn banner size',
	tool_linkedin_banner_size_usecase_1:
		'Personal profile: export 1584×396 before you upload the LinkedIn background photo.',
	tool_linkedin_banner_size_usecase_2:
		'Keep a headline out of the avatar: check the overlay, then download.',
	tool_linkedin_banner_size_usecase_3:
		'YouTube channel art: switch the chip for 2560×1440 plus the device-safe window.',
	tool_linkedin_banner_size_usecases_title: 'Good fits',
};

export default en;
