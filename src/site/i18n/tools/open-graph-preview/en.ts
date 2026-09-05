/**
 * i18n 工具分片（open-graph-preview / en 母版）。
 * 内容方向：粘贴 og:/twitter: 标签或 URL，预览 Facebook / X / WhatsApp 分享卡片，检查缺失字段与图片比例。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_og_home_title: 'Open Graph Preview',
	tool_og_home_desc:
		'Make every social share of your page earn clicks — preview how it looks on Facebook, X and messaging apps from your browser.',
	tool_og_title: 'Open Graph Preview — Check social share cards',
	tool_og_description:
		'Missing OG image or title costs share clicks. Paste og/twitter tags or a URL to preview Facebook, X, and chat cards. Local paste. Example: 1200×630 card.',
	tool_og_tags_tab: 'Paste tags',
	tool_og_url_tab: 'Fetch URL',
	tool_og_tags_ph:
		'Paste your <meta property="og:*"> and <meta name="twitter:*"> tags here…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'Fetch URL',
	tool_og_preview: 'Preview',
	tool_og_sample: 'Load sample',
	tool_og_clear: 'Clear',
	tool_og_copy: 'Copy',
	tool_og_copied: 'Copied',
	tool_og_running: 'Checking…',
	tool_og_error_prefix: 'Error: ',
	tool_og_url_error: 'Enter a valid http(s) URL.',
	tool_og_fetch_failed:
		'Could not fetch the URL. The page may be offline, block bots, or return non-HTML content.',
	tool_og_no_tags: 'No OG tags detected',
	tool_og_no_tags_fallback:
		'Without Open Graph tags, Facebook, X and WhatsApp build the preview from the page title, description and first image instead.',
	tool_og_required_label: 'Required',
	tool_og_optional_label: 'Optional',
	tool_og_missing_label: 'Missing',
	tool_og_ok_label: 'Present',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'Tag status',
	tool_og_ratio_warning: 'og:image should be around 1200×630 px (1.91:1).',
	tool_og_ratio_ok: 'og:image is close to 1200×630 px (1.91:1).',
	tool_og_ratio_unknown: 'Could not read the image size from the URL.',
	tool_og_dimensions: '{w}×{h} px',
	tool_og_platform_facebook: 'Facebook',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'Messaging apps (WhatsApp style)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred:
		'No twitter:card set — platforms infer a summary card from the og: tags.',
	tool_og_how_title: 'How it works',
	tool_og_how_body:
		'The preview parses the og:/twitter: tags you paste (or extracts them from the HTML fetched for a URL) and renders three share cards. Facebook uses the 1.91:1 image on the left with title, description and domain below. X follows twitter:card: summary_large_image shows a big image on top, summary shows a small one beside the text. Messaging apps such as WhatsApp show one large card. A field table marks the four protocol-required fields and lists the optional ones.',
	tool_og_how_item_1: 'Paste og:/twitter: meta tags, or fetch a URL.',
	tool_og_how_item_2: 'Click Preview (or Load sample).',
	tool_og_how_item_3: 'Compare the Facebook, X, and messaging cards.',
	tool_og_how_item_4: 'Fix any missing protocol-required fields in the table.',
	tool_og_rules_title: 'Rules used by the preview',
	tool_og_rules_body:
		'These are the image sizes and fallbacks the platforms use, based on the Open Graph protocol and the X Cards docs.',
	tool_og_rules_item_1:
		'Required by the Open Graph protocol: og:title, og:type, og:image and og:url. og:description is optional in the spec, but every major platform renders it — omit it and the platform writes its own summary from page text.',
	tool_og_rules_item_2:
		'og:image at 1200×630 px (1.91:1) works on all major platforms. Facebook now also accepts 2:1 and 1:1 crops; smaller images are often compressed.',
	tool_og_rules_item_3:
		'twitter:card summary_large_image pairs with a large image; summary pairs with a smaller one. Without twitter:card, platforms infer a summary card from the og: tags.',
	tool_og_rules_item_4:
		'When og:title or og:image is missing, platforms fall back to the HTML title, meta description and the first image of the page.',
	tool_og_rules_item_5:
		'Image sizes are measured with a browser image load; if the image cannot be loaded (blocked, offline or wrong URL) the ratio check reports unknown.',
	tool_og_example_title: 'Example',
	tool_og_example:
		'The sample tags describe a blog post with a 1200×630 og:image and twitter:card summary_large_image. The preview shows a Facebook card with the image on the left, a large X card, a WhatsApp-style card, and a tag table where every required field is present.',
	tool_og_usecases_title: 'Good use cases',
	tool_og_usecase_1:
		'Before publishing a post or landing page, paste the tags once and confirm the share card looks right on Facebook, X and messaging apps.',
	tool_og_usecase_2:
		'When a shared link shows no image or a cropped one, paste the og: tags to check whether og:image is missing or has a wrong ratio.',
	tool_og_usecase_3:
		'After a CMS or theme update, fetch the live URL and verify that the og: tags still match the page.',
	tool_og_faq_q1: 'What happens if a page has no Open Graph tags?',
	tool_og_faq_a1:
		'Facebook, X and WhatsApp fall back to the HTML title, meta description and an image found on the page. Fallbacks differ per platform and change over time, so the card may be incomplete or pick the wrong image — that is why the og: fields exist.',
	tool_og_faq_q2: 'How large should og:image be?',
	tool_og_faq_a2:
		'The safe size is 1200×630 px, a 1.91:1 ratio that all major platforms accept. Facebook now also supports 2:1 and 1:1 crops. Very small images are often upscaled and look blurry.',
	tool_og_faq_q3: 'How does twitter:card relate to the og: tags?',
	tool_og_faq_a3:
		'twitter:card selects the layout: summary_large_image shows a wide image, summary shows a small one. When twitter:title, twitter:description or twitter:image are missing, X falls back to the corresponding og: tag.',
	tool_og_faq_q4: 'What does a platform do when og:image is missing?',
	tool_og_faq_a4:
		'It falls back to the first image found in the page HTML, or shows the card without an image. A missing og:image is the most common cause of a shared link without a preview picture.',
	tool_og_faq_q5: 'Why does the ratio check report “unknown”?',
	tool_og_faq_a5:
		'The preview tries to load og:image with a browser image load to read its real size. When the image is blocked, offline, slow or on a server that rejects the request, the size cannot be read and the check reports unknown.',
	tool_og_faq_q6: 'Are my tags uploaded anywhere?',
	tool_og_faq_a6:
		'No. In paste mode the parsing and preview run on your device. URL mode fetches the page once through our worker and does not store it.',
	tool_og_references: 'ogp.me — The Open Graph protocol; X — Cards markup.',
	tool_og_ref_ogp_label: 'ogp.me — The Open Graph protocol',
	tool_og_ref_x_label: 'X — Cards markup',
};

export default en;
