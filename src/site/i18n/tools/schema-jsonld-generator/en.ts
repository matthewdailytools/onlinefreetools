/**
 * i18n tool shard (schema-jsonld-generator / en).
 * English master locale — UI, Rules, Example, Use cases, FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_schema_home_title: 'JSON-LD Schema Generator',
	tool_schema_home_desc:
		'Generate Schema.org JSON-LD in your browser: FAQ, Article, Breadcrumb, Organization — paste-ready markup so search engines can understand your page.',
	tool_schema_title: 'JSON-LD Schema Generator — Schema.org Markup Online',
	tool_schema_description:
		'JSON-LD schema generator for Schema.org markup: pick a type, fill fields, copy paste-ready JSON-LD in your browser. Steps: choose FAQ, Article, Breadcrumb or Organization → fill required fields → Generate. Example: two-question FAQ → mainEntity with Question nodes. Helps machines understand the page; no rich-result guarantee.',
	tool_schema_generate: 'Generate',
	tool_schema_sample: 'Load sample',
	tool_schema_clear: 'Clear',
	tool_schema_copy: 'Copy',
	tool_schema_copied: 'Copied',
	tool_schema_download: 'Download',
	tool_schema_type_label: 'Schema type',
	tool_schema_required: 'Required',
	tool_schema_optional: 'Optional',
	tool_schema_fields_label: 'Fields',
	tool_schema_output_label: 'JSON-LD output',
	tool_schema_wrap_script: 'Wrap in <script type="application/ld+json">',
	tool_schema_missing_required: 'Missing required field: {field}',
	tool_schema_err_no_fields: 'Fill the required fields, then generate.',
	tool_schema_breadcrumb_min: 'Breadcrumb lists need at least two levels.',
	tool_schema_type_faq: 'FAQ',
	tool_schema_type_article: 'Article',
	tool_schema_type_breadcrumb: 'Breadcrumb',
	tool_schema_type_organization: 'Organization',
	tool_schema_faq_question: 'Question {n}',
	tool_schema_faq_answer: 'Answer {n}',
	tool_schema_faq_add: 'Add question',
	tool_schema_faq_remove: 'Remove',
	tool_schema_article_headline: 'Headline',
	tool_schema_article_description: 'Description',
	tool_schema_article_author: 'Author name',
	tool_schema_article_date_published: 'Date published (YYYY-MM-DD)',
	tool_schema_article_date_modified: 'Date modified (YYYY-MM-DD)',
	tool_schema_article_image: 'Image URL (optional)',
	tool_schema_article_url: 'Page URL',
	tool_schema_breadcrumb_name: 'Name {n}',
	tool_schema_breadcrumb_url: 'URL {n}',
	tool_schema_breadcrumb_add: 'Add level',
	tool_schema_org_name: 'Organization name',
	tool_schema_org_url: 'Website URL',
	tool_schema_org_logo: 'Logo URL (optional)',
	tool_schema_org_description: 'Short description (optional)',
	tool_schema_how_title: 'How it works',
	tool_schema_how_body:
		'Pick a schema type, fill the form fields, and press Generate. The page builds a Schema.org JSON-LD object, checks that required fields are present, and shows the pretty-printed result wrapped in a script tag so you can paste it into your page head. A syntax check runs before the output renders; missing required fields are listed instead of silently producing broken markup.',
	tool_schema_rules_title: 'What the generator checks',
	tool_schema_rules_body:
		'Each type has a minimal valid shape. The generator validates the JSON is well-formed and flags required fields that are empty, but it cannot tell whether the markup matches your visible page content.',
	tool_schema_rules_item_1:
		'FAQ: mainEntity holds an array of Question nodes; every item needs a name and an acceptedAnswer.text.',
	tool_schema_rules_item_2:
		'Article: headline and author are required; datePublished, dateModified, image and description are optional but recommended.',
	tool_schema_rules_item_3:
		'Breadcrumb: itemListElement is an ordered list where each position must be sequential (1, 2, 3…).',
	tool_schema_rules_item_4:
		'Consistency: Google compares structured data with the visible page. Markup for content that is not on the page is against the spam policies.',
	tool_schema_example_title: 'Example',
	tool_schema_example:
		'FAQ sample with two questions: “How do I install the SDK?” and “Is the data processed locally?” → the output has a mainEntity array with two Question objects, each containing acceptedAnswer.text, ready to paste into your page head.',
	tool_schema_usecases_title: 'Good fits',
	tool_schema_usecase_1:
		'FAQ pages: add a Question list as structured data so search engines can better understand the questions and answers on the page.',
	tool_schema_usecase_2:
		'Articles and docs: attach Article markup with author and dates for content sites and knowledge bases.',
	tool_schema_usecase_3:
		'Product and site structure: use Breadcrumb markup to describe navigation paths, and Organization markup for brand name and logo.',
	tool_schema_faq_q1: 'Who is JSON-LD structured data for?',
	tool_schema_faq_a1:
		'Search engines and other consumers that read Schema.org markup. It is embedded in your HTML so machines can understand entities, relations, and facts — it is not user-visible content.',
	tool_schema_faq_q2: 'Does adding FAQ schema guarantee a rich result?',
	tool_schema_faq_a2:
		'No. FAQ rich results stopped displaying sitewide in May 2026, and HowTo earlier. Google may still parse the markup to understand the page, but there is no SERP rich-result guarantee, so treat schema as clarity for understanding, not a ranking or rich-result KPI.',
	tool_schema_faq_q3: 'Which fields are required for the generated markup?',
	tool_schema_faq_a3:
		'FAQ needs question + answer per item; Article needs headline and author; Breadcrumb needs at least two levels with name and URL; Organization needs name and URL. The page marks required fields and lists anything missing.',
	tool_schema_faq_q4: 'Why must the markup match the visible content?',
	tool_schema_faq_a4:
		'Google treats structured data that does not reflect the visible page as deceptive. For example, an FAQ question that is not actually answered on the page can be seen as markup abuse even when the JSON itself is valid.',
	tool_schema_references: 'Schema.org; Google Search Central — Structured data basics.',
	tool_schema_ref_schema_label: 'Schema.org',
	tool_schema_ref_google_label: 'Search Central — Structured data basics',
};

export default en;
