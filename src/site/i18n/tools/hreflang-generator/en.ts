/**
 * i18n tool shard (hreflang-generator / en master).
 * Content direction: turn a set of language URLs into hreflang markup in three forms.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_hreflang_home_title: 'Hreflang Generator',
	tool_hreflang_home_desc:
		'Tell Google which language version of a page to show whom — turn language URLs into hreflang tags, HTTP Link headers and sitemap markup from your browser.',
	tool_hreflang_title: 'Hreflang Generator — Create hreflang tags for multilingual sites',
	tool_hreflang_description:
		'Without hreflang, Google may treat your translated pages as duplicates and show the wrong language version in search. Turn a set of language URLs into hreflang markup in three forms: <link> tags, HTTP Link header and sitemap <xhtml:link>. Steps: paste each language URL with its code, choose a form, copy the generated snippet. Every URL gets its own self-referencing hreflang, and an optional x-default fallback can be added. Runs entirely on your device—nothing is uploaded. Example: en, es and ja versions of one page.',
	tool_hreflang_input_label: 'Language URL list',
	tool_hreflang_input_ph:
		'One pair per line: lang code + URL. Example:\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'Each line is "language-code URL" or "URL language-code". Codes use the BCP 47 form such as en, en-US or zh-Hans.',
	tool_hreflang_xdefault_label: 'x-default fallback URL',
	tool_hreflang_xdefault_none: '— do not add x-default —',
	tool_hreflang_xdefault_hint:
		'Optional. x-default tells Google which version to show when no language matches, useful for a root or English homepage.',
	tool_hreflang_generate: 'Generate',
	tool_hreflang_sample: 'Load sample',
	tool_hreflang_clear: 'Clear',
	tool_hreflang_copy: 'Copy',
	tool_hreflang_copied: 'Copied',
	tool_hreflang_error_prefix: 'Error: ',
	tool_hreflang_url_protocol: 'A URL had no protocol — https:// was added automatically.',
	tool_hreflang_lang_invalid: 'Invalid language code: {lang}. Use BCP 47 forms such as en, en-US or zh-Hans.',
	tool_hreflang_no_valid_rows: 'No valid rows. Add at least one language code and URL.',
	tool_hreflang_output_label: 'Generated markup',
	tool_hreflang_tab_link: '<link> tags',
	tool_hreflang_tab_http: 'HTTP Link header',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'How it works',
	tool_hreflang_how_body:
		'The generator parses each line into a language code and a URL, then renders the same set of relationships in three forms. The <link> form goes into the <head> of each page. The HTTP Link header form is set on the server response. The sitemap form embeds <xhtml:link> inside each <url> block. Every URL gets a self-referencing hreflang so each language version points back to itself, and the optional x-default entry covers visitors whose language is not listed.',
	tool_hreflang_rules_title: 'Rules used by the generator',
	tool_hreflang_rules_body:
		'These rules come from Google Search Central and the BCP 47 language tag standard.',
	tool_hreflang_rules_item_1:
		'Each language version must include a self-referencing hreflang that points back to its own URL. Skipping it weakens the signal.',
	tool_hreflang_rules_item_2:
		'Every URL must be listed from every language version: the full set of alternates appears on each page, not just one direction.',
	tool_hreflang_rules_item_3:
		'Language codes use BCP 47: a two-letter language, optionally a region (en-US) and optionally a script (zh-Hans). x-default is the special fallback code.',
	tool_hreflang_rules_item_4:
		'x-default points to the page shown when no listed language matches, for example an English root page. Google may use it as a fallback for all undetected languages.',
	tool_hreflang_rules_item_5:
		'Choose one delivery form per set: the <link> tags in HTML, the HTTP Link header, or sitemap xhtml:link. Do not mix forms for the same page set, or signals can contradict.',
	tool_hreflang_example_title: 'Example',
	tool_hreflang_example:
		'The sample lists three versions of one page: https://example.com/ (en), https://example.com/es/ (es) and https://example.com/ja/ (ja). The generated <link> tags include self-references for each language plus an optional x-default pointing to the English root.',
	tool_hreflang_usecases_title: 'Good use cases',
	tool_hreflang_usecase_1:
		'Launching a multilingual site: generate the <link> tags for each template once and verify every language version lists the full set.',
	tool_hreflang_usecase_2:
		'After a site restructure, regenerate the markup so the URL mapping stays consistent across languages instead of drifting.',
	tool_hreflang_usecase_3:
		'When search results show the wrong language, check that self-references and x-default exist and that the URLs point to canonical pages.',
	tool_hreflang_faq_q1: 'Which of the three forms should I use?',
	tool_hreflang_faq_a1:
		'Use the <link> tags when you can edit the page HTML. Use the HTTP Link header when pages are served by a server you control and HTML is hard to change. Use the sitemap form when you prefer keeping it in the XML sitemap.',
	tool_hreflang_faq_q2: 'When should I add x-default?',
	tool_hreflang_faq_a2:
		'x-default tells Google which version to show when the visitor language does not match any listed code. Add it when you have a root or fallback page, usually English.',
	tool_hreflang_faq_q3: 'Does every URL need a self-referencing hreflang?',
	tool_hreflang_faq_a3:
		'Yes. Each language version must include its own URL in the set, with a self-referencing hreflang pointing back to itself. Google uses the complete set to pick the right page per language.',
	tool_hreflang_faq_q4: 'What language code format is valid?',
	tool_hreflang_faq_a4:
		'BCP 47 codes: a two- or three-letter language, optionally a region (en-US) and optionally a script (zh-Hans). Lowercase the language, and do not invent codes such as "en-us-en".',
	tool_hreflang_faq_q5: 'Should hreflang go in <head> or in the sitemap?',
	tool_hreflang_faq_a5:
		'Either works, but use one consistent form per page set. The <link> tags live in <head>, the HTTP Link header is sent with the response, and the sitemap uses xhtml:link blocks.',
	tool_hreflang_faq_q6: 'Are my URLs uploaded anywhere?',
	tool_hreflang_faq_a6: 'No. The generator runs entirely in your browser and nothing is uploaded.',
	tool_hreflang_references: 'Google Search Central — Localized versions (hreflang); BCP 47 language tags.',
	tool_hreflang_ref_searchcentral_label: 'Search Central — Localized versions (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — Tags for identifying languages',
};

export default en;
