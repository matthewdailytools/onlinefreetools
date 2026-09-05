/**
 * i18n tool shard (meta-tag-generator / en master).
 * Content direction: fill in head fields to generate ready-to-paste <head> meta tags.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_meta_home_title: 'Meta Tag Generator',
	tool_meta_home_desc:
		'Write the title, description, canonical and Open Graph tags that earn clicks in search — generate the complete page head from your browser.',
	tool_meta_title: 'Meta Tag Generator — Generate complete page head tags',
	tool_meta_description:
		'Title and meta description shape your search snippet; canonical picks the URL among duplicates. Fill fields for paste-ready head tags and length hints. Example: canonical + og.',
	tool_meta_title_label: 'Meta title',
	tool_meta_title_ph: 'Meta Tag Generator — Generate complete page head tags',
	tool_meta_title_hint: 'Keep it around 60 characters. Search engines may rewrite longer titles.',
	tool_meta_desc_label: 'Meta description',
	tool_meta_desc_ph: 'Generate ready-to-paste head meta tags with length hints, robots values and OG fields.',
	tool_meta_desc_hint: 'Keep it around 155–160 characters. Longer text may be truncated in the SERP.',
	tool_meta_canonical_label: 'Canonical URL',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'The preferred URL for this page. Add the full URL including the protocol.',
	tool_meta_robots_label: 'Robots meta',
	tool_meta_robots_none: '— do not add a robots meta —',
	tool_meta_robots_index_follow: 'index, follow (default, let search engines index)',
	tool_meta_robots_noindex_follow: 'noindex, follow (hide from results, keep following links)',
	tool_meta_robots_index_nofollow: 'index, nofollow (allow index, do not follow links)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (hide page and do not follow links)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (full URL)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'Generate',
	tool_meta_sample: 'Load sample',
	tool_meta_clear: 'Clear',
	tool_meta_copy: 'Copy',
	tool_meta_copied: 'Copied',
	tool_meta_error_prefix: 'Error: ',
	tool_meta_canonical_protocol: 'The canonical URL has no protocol — add https:// or http:// for search engines to read it.',
	tool_meta_title_len: 'Title: {n} characters',
	tool_meta_title_len_warn: 'Title: {n} characters — over 60, consider shortening.',
	tool_meta_desc_len: 'Description: {n} characters',
	tool_meta_desc_len_warn: 'Description: {n} characters — over 160, may be truncated.',
	tool_meta_output_label: 'Generated head snippet',
	tool_meta_how_title: 'How it works',
	tool_meta_how_body:
		'The generator takes your fields and builds the corresponding head tags. Empty optional fields are skipped, so the output contains only what you filled in. Every value is HTML-escaped: an ampersand becomes &amp; and a less-than sign becomes &lt;, keeping the tags valid inside your page. Length hints warn you when the title or description exceeds the commonly used limits, without cutting your text.',
	tool_meta_how_item_1: 'Fill title, description, and any optional fields you need.',
	tool_meta_how_item_2: 'Add canonical, robots, and Open Graph values when relevant.',
	tool_meta_how_item_3: 'Click Generate to build escaped head tags.',
	tool_meta_how_item_4: 'Copy the output and paste it into your page <head>.',
	tool_meta_rules_title: 'Rules used by the generator',
	tool_meta_rules_body:
		'These rules follow Google Search Central guidance on meta tags, title links and canonical URLs.',
	tool_meta_rules_item_1:
		'The meta title and description are suggestions, not directives: search engines may rewrite or truncate them, so keep the title around 60 characters and the description around 155–160.',
	tool_meta_rules_item_2:
		'All values are HTML-escaped: & < > " and \' become entities, so characters in your title or description cannot break the tag markup.',
	tool_meta_rules_item_3:
		'The canonical URL should be the full absolute URL with a protocol. A relative or protocol-less URL is not useful as a canonical target.',
	tool_meta_rules_item_4:
		'The robots meta uses the values index/noindex and follow/nofollow. When omitted, search engines use their own default, which is to index and follow.',
	tool_meta_rules_item_5:
		'Canonical and Open Graph tags can coexist on the same page: og:url should match the canonical URL so social shares point to the same address.',
	tool_meta_example_title: 'Example',
	tool_meta_example:
		'The sample fills the title, description, canonical, robots and three Open Graph fields. The generated snippet outputs a <title> tag, the meta description, the canonical link, the robots meta and the og: tags that were filled in.',
	tool_meta_usecases_title: 'Good use cases',
	tool_meta_usecase_1:
		'Building a new page template: generate the head block once, verify the length hints, and paste it into the template before shipping.',
	tool_meta_usecase_2:
		'Delivering work for a client: generate the exact head snippet with canonical and OG fields, then paste it into the CMS.',
	tool_meta_usecase_3:
		'Before publishing, generate the tags and check them against a search-result preview so the title and description match the visible page.',
	tool_meta_faq_q1: 'What do the robots meta values mean?',
	tool_meta_faq_a1:
		'index lets search engines include the page in results, while noindex keeps it out. follow allows crawling links on the page, and nofollow tells engines not to. When the tag is absent, the default is index, follow.',
	tool_meta_faq_q2: 'Will special characters in my values be escaped?',
	tool_meta_faq_a2:
		'Yes. The generator escapes & < > " and \', so an ampersand becomes &amp; and a less-than sign becomes &lt;. Your tags stay valid even if the value contains markup-like characters.',
	tool_meta_faq_q3: 'Can canonical and Open Graph tags coexist?',
	tool_meta_faq_a3:
		'Yes, they cover different systems. The canonical link tells search engines the preferred URL, while og: tags describe the page for social sharing. Keep og:url aligned with the canonical URL.',
	tool_meta_faq_q4: 'How long should the title and description be?',
	tool_meta_faq_a4:
		'Around 60 characters for the title and 155–160 for the description are common working limits. They are suggestions: search engines may rewrite or truncate longer values.',
	tool_meta_faq_q5: 'What happens to empty fields?',
	tool_meta_faq_a5:
		'Empty optional fields are skipped, so the generated snippet only contains the tags for the fields you filled in.',
	tool_meta_faq_q6: 'Is my data uploaded anywhere?',
	tool_meta_faq_a6: 'No. The generator runs entirely in your browser and nothing is uploaded.',
	tool_meta_references: 'Google Search Central — Meta tags that Google understands; Control title links; Canonical URLs.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — Meta tags that Google understands',
	tool_meta_ref_searchcentral_title_label: 'Search Central — Control your title links',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — Canonical URLs',
};

export default en;
