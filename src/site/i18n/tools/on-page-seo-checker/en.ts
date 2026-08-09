/**
 * i18n tool shard (on-page-seo-checker / en).
 * English master locale — UI, Rules, Example, Use cases, FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_onpage_home_title: 'On-Page SEO Checker',
	tool_onpage_home_desc:
		'Catch the tag issues that hold your page back in search: audit title, H1, meta description, canonical, Open Graph and JSON-LD in your browser.',
	tool_onpage_title: 'On-Page SEO Checker — Find and fix page tag issues',
	tool_onpage_description:
		'Weak titles, missing meta descriptions, duplicate H1s and broken canonicals quietly cost rankings and clicks. Paste a URL or HTML to audit title, H1, meta description, canonical, Open Graph, JSON-LD, mixed content and render-blocking, each with a fix suggestion. Paste mode runs on your device; URL mode fetches the page once without storing it. Example: a sample page with a duplicate H1 and one http:// image.',
	tool_onpage_url_tab: 'Fetch URL',
	tool_onpage_html_tab: 'Paste HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'Check URL',
	tool_onpage_html_ph:
		'Paste the <head> (and body snippet) HTML here…',
	tool_onpage_check: 'Check page',
	tool_onpage_sample: 'Load sample',
	tool_onpage_clear: 'Clear',
	tool_onpage_copy: 'Copy',
	tool_onpage_copied: 'Copied',
	tool_onpage_running: 'Checking…',
	tool_onpage_error_prefix: 'Error: ',
	tool_onpage_url_error: 'Enter a valid http(s) URL.',
	tool_onpage_fetch_failed: 'Could not fetch the URL. It may be offline, block bots, or return non-HTML content.',
	tool_onpage_no_html: 'Paste some HTML first, or fetch a URL.',
	tool_onpage_no_results: 'No checks to show yet.',
	tool_onpage_summary_title: 'Check summary',
	tool_onpage_summary_n_ok: '{n} passed',
	tool_onpage_summary_n_warn: '{n} warnings',
	tool_onpage_summary_n_err: '{n} issues',
	tool_onpage_status_ok: 'OK',
	tool_onpage_status_warn: 'Warning',
	tool_onpage_status_err: 'Issue',
	tool_onpage_title_check: 'Title',
	tool_onpage_title_missing: 'No <title> tag found. Add one under <head>.',
	tool_onpage_title_ok: 'Title found at {n} characters. Keep it close to 50–60 characters for search snippets.',
	tool_onpage_title_long: 'Title is {n} characters — likely to be truncated in search results. Aim for about 50–60 characters.',
	tool_onpage_title_short: 'Title is only {n} characters. Add a specific page focus to make it more informative.',
	tool_onpage_desc_check: 'Meta description',
	tool_onpage_desc_missing: 'No meta description found. Write a 140–160 character summary that matches the page content.',
	tool_onpage_desc_ok: 'Description found at {n} characters. The 140–160 character range shows well in most snippets.',
	tool_onpage_desc_long: 'Description is {n} characters — snippets usually cut around 160 characters.',
	tool_onpage_desc_short: 'Description is only {n} characters. Use the space to summarize what the page offers.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'No H1 found. Use exactly one H1 that states the page topic.',
	tool_onpage_h1_multiple: '{n} H1 tags found. Keep a single H1 per page and use H2–H6 for sections.',
	tool_onpage_h1_ok: 'One H1 found and it is inside <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'No canonical URL set. Add <link rel="canonical"> when the same content is reachable at several URLs.',
	tool_onpage_canonical_ok: 'Self-referencing canonical found.',
	tool_onpage_canonical_other: 'Canonical points to a different URL. Use a self-referencing canonical unless the page is a copy of the target.',
	tool_onpage_robots_check: 'Robots meta',
	tool_onpage_robots_missing: 'No robots meta. Default is index,follow, which is fine for most public pages.',
	tool_onpage_robots_noindex: 'The page sets noindex — it will not appear in Google Search. Remove it when the page should be indexed.',
	tool_onpage_robots_ok: 'Robots meta allows indexing and following.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'No og: tags found. Add og:title, og:description and og:image for social sharing previews.',
	tool_onpage_og_partial: 'Missing {n} required og: field(s). Make sure og:title, og:description and og:image are present.',
	tool_onpage_og_ok: 'og:title, og:description and og:image are present.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'No JSON-LD structured data found. Consider adding schema.org markup when it describes visible content.',
	tool_onpage_jsonld_invalid: 'A JSON-LD block could not be parsed as JSON. Check for syntax errors.',
	tool_onpage_jsonld_ok: '{n} JSON-LD block(s) found. Keep the structured data consistent with what visitors see.',
	tool_onpage_mixed_check: 'Mixed content',
	tool_onpage_mixed_none: 'No http:// resource references found in an https context.',
	tool_onpage_mixed_found: '{n} http:// reference(s) found. Browsers block mixed content; serve these resources over https instead.',
	tool_onpage_render_check: 'Render-blocking',
	tool_onpage_render_none: 'No obvious render-blocking stylesheets or scripts detected.',
	tool_onpage_render_found: '{n} <link rel="stylesheet"> without media in <head>. Inline critical CSS or defer loading to improve LCP.',
	tool_onpage_unknown: 'Could not determine: {label}',
	tool_onpage_how_title: 'How it works',
	tool_onpage_how_body:
		'The checker parses the markup you paste (or the HTML fetched from a URL) and evaluates a fixed list of on-page SEO checks. Each check reads a single kind of tag: the title, the meta description, H1 tags, the canonical link, robots meta, Open Graph fields, JSON-LD blocks, mixed content and render-blocking resources. Paste mode runs entirely in your browser; URL mode fetches the page once through our worker and does not store it.',
	tool_onpage_rules_title: 'Rules the checks follow',
	tool_onpage_rules_body:
		'These are the standards each check compares against. They come from Google Search Central and the HTML specification.',
	tool_onpage_rules_item_1:
		'Title: a page should have one descriptive <title>. Google may rewrite it, but a concise title near 50–60 characters usually displays well.',
	tool_onpage_rules_item_2:
		'H1: use exactly one H1 that states the page topic. Additional headings should be H2–H6 and form a logical outline.',
	tool_onpage_rules_item_3:
		'Canonical: a self-referencing canonical tells Google which URL is the preferred one when duplicates exist. Link rel="canonical" goes in <head>.',
	tool_onpage_rules_item_4:
		'Mixed content: an https page referencing http:// resources is blocked by browsers. This check lists those references as warnings.',
	tool_onpage_rules_item_5:
		'Render-blocking: a stylesheet in <head> without a media attribute blocks rendering. This check is heuristic and does not measure real load time.',
	tool_onpage_example_title: 'Example',
	tool_onpage_example:
		'Sample input is a page with a 71-character title, no meta description, two H1 tags, a canonical to another URL, one og:image, a valid JSON-LD block and one http:// image. The checker reports the title as likely truncated, H1 as a warning, canonical as non-self-referencing, and mixed content as a warning, matching what the tool shows when you load the sample.',
	tool_onpage_usecases_title: 'Good fits',
	tool_onpage_usecase_1:
		'Before a redesign or relaunch: run the same page through the checker and fix the reported issues in one pass.',
	tool_onpage_usecase_2:
		'Template handoff: when you receive HTML from an agency or a page builder, verify the head tags instead of trusting the export.',
	tool_onpage_usecase_3:
		'Content updates: after a CMS edit, confirm the title, description and canonical still match the new page.',
	tool_onpage_faq_q1: 'What does an on-page SEO checker look for?',
	tool_onpage_faq_a1:
		'It checks the tags a page controls itself: the title, meta description, H1, canonical, robots meta, Open Graph fields, JSON-LD structured data, mixed content and render-blocking resources. It does not measure rankings or backlinks.',
	tool_onpage_faq_q2: 'Why should a page have exactly one H1?',
	tool_onpage_faq_a2:
		'A single H1 states the topic of the page clearly for both readers and search engines. Multiple H1s blur the outline; use one H1 and structure the rest with H2–H6.',
	tool_onpage_faq_q3: 'Does canonical have to point to itself?',
	tool_onpage_faq_a3:
		'For the page that should rank, yes — a self-referencing canonical is the clearest signal. Pointing canonical at another URL tells Google that page is a duplicate, which is useful only when that is true.',
	tool_onpage_faq_q4: 'Why does the checker flag http:// resources as mixed content?',
	tool_onpage_faq_a4:
		'When a page is served over https and references http:// images, scripts or styles, browsers block the request by default. This check lists those references as warnings so you can switch them to https.',
	tool_onpage_faq_q5: 'Does the JSON-LD check test validation?',
	tool_onpage_faq_a5:
		'It verifies the blocks parse as valid JSON and reminds you to keep structured data consistent with visible content. It does not run a full schema.org validator.',
	tool_onpage_faq_q6: 'Is my HTML uploaded anywhere?',
	tool_onpage_faq_a6:
		'No. When you paste HTML, parsing happens on your device and nothing is sent to a server. URL mode fetches the page once through our worker and does not store it.',
	tool_onpage_references: 'Google Search Central — meta tags; Google Search Central — canonical; MDN Web Docs — <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — Meta tags that Google understands',
	tool_onpage_ref_canonical_label: 'Search Central — Canonical URLs',
	tool_onpage_ref_mdn_label: 'MDN — <meta>: The metadata element',
};

export default en;
