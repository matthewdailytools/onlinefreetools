/**
 * i18n tool shard (utm-builder / en master).
 * Content direction: build a campaign tracking URL from a landing page URL and the five UTM parameters.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_utm_home_title: 'UTM Builder',
	tool_utm_home_desc:
		'Measure which campaigns really drive your traffic — build clean campaign tracking URLs with utm_source, medium, campaign, term and content from your browser.',
	tool_utm_title: 'UTM Builder — Create campaign tracking URLs',
	tool_utm_description:
		'Clean UTM tags are the only way to prove which campaigns, emails or posts actually drive your traffic — without them, your SEO and marketing efforts are invisible in analytics. Build a campaign tracking link from your landing page URL and utm_source, utm_medium, utm_campaign, utm_term and utm_content. Steps: paste the base URL, fill the five parameters, copy the generated link with correct URL encoding. Existing query parameters are kept and merged, not overwritten. Runs entirely on your device—nothing is uploaded. Example: https://example.com/page with source=newsletter, medium=email and campaign=summer_sale.',
	tool_utm_url_label: 'Landing page URL',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'Enter the landing page URL.',
	tool_utm_url_invalid: 'The URL looks invalid. Check the address and try again.',
	tool_utm_url_protocol: 'No protocol detected — https:// was added automatically.',
	tool_utm_source_label: 'Campaign source (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'Where the link is seen: newsletter, facebook, google.',
	tool_utm_medium_label: 'Campaign medium (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'How the link is delivered: email, cpc, social, referral.',
	tool_utm_campaign_label: 'Campaign name (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'The promotion or product the link belongs to.',
	tool_utm_campaign_required: 'Campaign name (utm_campaign) is required.',
	tool_utm_term_label: 'Campaign term (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'Optional. Identifies paid search keywords.',
	tool_utm_content_label: 'Campaign content (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'Optional. Distinguishes ads or links that point to the same URL.',
	tool_utm_generate: 'Generate',
	tool_utm_sample: 'Load sample',
	tool_utm_clear: 'Clear',
	tool_utm_copy: 'Copy',
	tool_utm_copied: 'Copied',
	tool_utm_error_prefix: 'Error: ',
	tool_utm_output_label: 'Generated URL',
	tool_utm_table_title: 'Parameter breakdown',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'Value',
	tool_utm_param_status: 'Status',
	tool_utm_param_required: 'Required',
	tool_utm_param_optional: 'Optional',
	tool_utm_param_empty: 'Empty',
	tool_utm_encoding_note:
		'Values are encoded with encodeURIComponent: spaces become %20 and non-ASCII characters are percent-encoded.',
	tool_utm_case_note:
		'Google Analytics treats parameter values as case-sensitive. Use a consistent lowercase style so the same channel groups together.',
	tool_utm_how_title: 'How it works',
	tool_utm_how_body:
		'The builder parses your base URL, keeps its existing query parameters and appends the UTM parameters with & separators. Each value is percent-encoded so spaces, Chinese characters and special symbols survive in the link. If the URL has a hash, it is moved after all parameters. The five UTM parameters are what Google Analytics reads to attribute the visit to a source, medium and campaign.',
	tool_utm_rules_title: 'Rules used by the builder',
	tool_utm_rules_body:
		'These are the UTM parameter definitions and encoding rules from the Google Analytics documentation.',
	tool_utm_rules_item_1:
		'utm_source identifies where the link was seen; utm_medium identifies how it was delivered. Both are required for attribution.',
	tool_utm_rules_item_2:
		'utm_campaign is the promotion name and is required here. utm_term and utm_content are optional: term for paid keywords, content to tell two links apart.',
	tool_utm_rules_item_3:
		'When the base URL already has query parameters, they are kept and the UTM parameters are appended with &; an existing parameter with the same name is replaced.',
	tool_utm_rules_item_4:
		'Parameter values are percent-encoded: spaces become %20 and non-ASCII characters are encoded. A URL fragment (#anchor) always stays after the query string.',
	tool_utm_rules_item_5:
		'Use a consistent lowercase style for values. UTM values are case-sensitive in Google Analytics, so facebook and Facebook would split into two sources.',
	tool_utm_example_title: 'Example',
	tool_utm_example:
		'The sample input is https://example.com/page with utm_source=newsletter, utm_medium=email and utm_campaign=summer_sale. The generated link is https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'Good use cases',
	tool_utm_usecase_1:
		'Social campaigns: build one link per platform with the same utm_campaign, so GA4 reports the whole promotion in one row.',
	tool_utm_usecase_2:
		'Email sends: use utm_source=newsletter, utm_medium=email and separate content values to compare two banners that point to the same page.',
	tool_utm_usecase_3:
		'QR codes and printed links: a full UTM URL is long, but you can shorten it after generating while keeping the parameters.',
	tool_utm_faq_q1: 'What is the difference between utm_source and utm_medium?',
	tool_utm_faq_a1:
		'utm_source tells you where the link was seen (newsletter, facebook, google), while utm_medium tells you how it was delivered (email, cpc, social, referral). GA4 combines them with utm_campaign to name the traffic source.',
	tool_utm_faq_q2: 'The URL already has query parameters. Will they be lost?',
	tool_utm_faq_a2:
		'No. Existing parameters are kept and the UTM parameters are appended with &. If the URL already contains a parameter with the same name, the new value replaces it.',
	tool_utm_faq_q3: 'What about spaces, Chinese characters or special symbols in values?',
	tool_utm_faq_a3:
		'Every value is percent-encoded: spaces become %20 and non-ASCII characters are encoded too. The generated link stays valid in email clients, messengers and browsers.',
	tool_utm_faq_q4: 'Are UTM parameter values case-sensitive?',
	tool_utm_faq_a4:
		'Yes. Google Analytics treats utm_source=Facebook and utm_source=facebook as two different sources. Use a consistent lowercase style so the same channel groups together.',
	tool_utm_faq_q5: 'When should I use utm_term and utm_content?',
	tool_utm_faq_a5:
		'utm_term identifies paid search keywords, useful for Google Ads. utm_content distinguishes two links or ads that point to the same URL, such as a header banner and a footer link.',
	tool_utm_faq_q6: 'Is my URL sent anywhere?',
	tool_utm_faq_a6:
		'No. The builder runs entirely in your browser and nothing is uploaded.',
	tool_utm_references: 'Google Analytics — Custom campaigns (UTM); Google Search Central — URL parameters.',
	tool_utm_ref_ga_label: 'Google Analytics — Custom campaigns (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central — URL parameters',
};

export default en;
