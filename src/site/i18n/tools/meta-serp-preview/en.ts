/**
 * i18n tool shard (meta-serp-preview / en).
 * English master locale — UI, Rules, Example, Use cases, FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_serp_home_title: 'Google SERP Preview',
	tool_serp_home_desc: 'Titles that get cut off cost clicks in search — check the truncation before you publish.',
	tool_serp_title: 'Google SERP Preview — Check title & description snippets',
	tool_serp_description:
		'A title or description that gets cut off in the results can quietly cost you clicks from Google. Paste a title and description to preview Google search result truncation on desktop and mobile. Enter title, description, and optional URL; see character counts, estimated pixel widths, and snippet cut points; compare two titles side by side. Everything runs in your browser—nothing is uploaded. Example: a 60-char ASCII title and a 30-char CJK title can reach the pixel limit at different counts.',
	tool_serp_preview: 'Preview',
	tool_serp_sample: 'Load sample',
	tool_serp_clear: 'Clear',
	tool_serp_copy: 'Copy',
	tool_serp_copied: 'Copied',
	tool_serp_title_label: 'Title',
	tool_serp_title_ph: 'The page title that shows in search results',
	tool_serp_desc_label: 'Meta description',
	tool_serp_desc_ph: 'The snippet text under the result title',
	tool_serp_url_label: 'URL (optional)',
	tool_serp_url_ph: 'e.g. https://example.com/page',
	tool_serp_compare_label: 'Compare with a second title',
	tool_serp_title_b_label: 'Title B',
	tool_serp_title_b_ph: 'Paste an alternative title to compare',
	tool_serp_desktop: 'Desktop preview',
	tool_serp_mobile: 'Mobile preview',
	tool_serp_char_count: '{n} chars',
	tool_serp_px_width: '~{n}px',
	tool_serp_cut_warning: 'Truncated — this line exceeds the ~{limit}px viewport',
	tool_serp_fit: 'Fits within the viewport',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'Enter a title to preview.',
	tool_serp_how_title: 'How it works',
	tool_serp_how_body:
		'Type or paste the title, description, and optional URL. The tool estimates how many characters and approximate pixels each line occupies using a browser font-metric approximation (wide CJK glyphs count more than narrow ASCII letters), then draws a desktop and a mobile Google-style snippet. Lines wider than the estimated viewport get a truncation marker.',
	tool_serp_rules_title: 'What the preview shows',
	tool_serp_rules_body:
		'Pixel limits are approximate. Google measures rendered width, not character count, so dense languages and wide glyphs truncate at fewer characters.',
	tool_serp_rules_item_1:
		'Desktop title limit is estimated at about 600px; mobile at about 460px. A line wider than that is shown with a cut marker.',
	tool_serp_rules_item_2:
		'Descriptions are estimated at about two lines (desktop ~600px, mobile ~460px per line).',
	tool_serp_rules_item_3:
		'Glyph width is estimated: ASCII letters and digits roughly half an em, CJK characters close to one em, and emoji wider still.',
	tool_serp_rules_item_4:
		'These are estimates for planning. Google may re-write titles or descriptions, and real rendering depends on the searcher’s font and viewport.',
	tool_serp_example_title: 'Example',
	tool_serp_example:
		'Sample: title “Meta SERP Preview — How to Preview Google Title & Description Truncation Online”, description about two lines of text, URL example.com/page → desktop shows the title cut near the 57th character with “…”, and mobile truncates earlier; the description stays within two lines.',
	tool_serp_usecases_title: 'Good fits',
	tool_serp_usecase_1:
		'Before publishing: paste the final title and description to see whether key words survive the pixel cut.',
	tool_serp_usecase_2:
		'Compare two candidate titles side by side and pick the one that keeps the primary keyword visible on mobile.',
	tool_serp_usecase_3:
		'CJK pages: check how many Chinese characters fit before truncation, since wide glyphs reach the pixel limit at lower counts.',
	tool_serp_faq_q1: 'Why does a 30-character CJK title truncate before a 60-character English one?',
	tool_serp_faq_a1:
		'Search results cut by rendered pixel width, not character count. CJK glyphs are roughly one em wide while ASCII letters average about half an em, so fewer characters can fill the same viewport.',
	tool_serp_faq_q2: 'Are the pixel limits exact?',
	tool_serp_faq_a2:
		'No. Desktop and mobile viewports vary by device and font. This tool uses the commonly cited ~600px desktop and ~460px mobile title limits as an estimate for planning, not a guarantee of how Google will render your page.',
	tool_serp_faq_q3: 'Does this match the mobile preview in Search Console?',
	tool_serp_faq_a3:
		'It is a local estimate in the same direction. For the final look, open your live page in Search Console URL inspection or the Rich Results test, which render against Google’s real environment.',
	tool_serp_faq_q4: 'Is my title uploaded anywhere?',
	tool_serp_faq_a4:
		'No. All text stays in your browser tab and is never sent to a server. Close the tab and everything is gone.',
	tool_serp_references: 'Google Search Central — Control your title links in search results; Google Search Central — Control your snippets.',
	tool_serp_ref_title_label: 'Search Central — Control your title links',
	tool_serp_ref_snippet_label: 'Search Central — Control your snippets',
};

export default en;
