/**
 * i18n tool shard (find-and-validate-xml-sitemap / en master).
 * Scene: enter site URL → discover sitemap → validate XML + count locs (not generate).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'Find & validate XML sitemap',
	tool_find_and_validate_xml_sitemap_home_desc:
		'Discover a site’s sitemap from robots.txt or /sitemap.xml and check XML structure, type, and sample locs.',
	tool_find_and_validate_xml_sitemap_desc:
		'Discover a site’s sitemap from robots.txt or /sitemap.xml and check XML structure, type, and sample locs.',
	tool_find_and_validate_xml_sitemap_title: 'Find and validate XML sitemap',
	tool_find_and_validate_xml_sitemap_description:
		'Enter a site URL to find its XML sitemap via robots.txt Sitemap: lines or /sitemap.xml, then validate structure, count locs, and flag urlset vs sitemapindex. Not a generator. Sample: sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'Site URL',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'Find & validate',
	tool_find_and_validate_xml_sitemap_sample: 'Load sample',
	tool_find_and_validate_xml_sitemap_clear: 'Clear',
	tool_find_and_validate_xml_sitemap_running: 'Discovering and validating sitemaps…',
	tool_find_and_validate_xml_sitemap_url_error: 'Enter a valid http(s) site URL (origin or homepage).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'Error: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'Could not fetch sitemap candidates. The host may be offline, block bots, or reject the request.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'The URL and hostname are sent to our Worker so it can fetch robots.txt and sitemap files. We do not keep them as a product database.',
	tool_find_and_validate_xml_sitemap_result_site: 'Site origin',
	tool_find_and_validate_xml_sitemap_result_candidates: 'Candidates tried',
	tool_find_and_validate_xml_sitemap_result_primary: 'Primary finding',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'No valid sitemap structure found among candidates',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'HTTP status',
	tool_find_and_validate_xml_sitemap_col_kind: 'Kind',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'loc count',
	tool_find_and_validate_xml_sitemap_col_valid: 'Valid structure',
	tool_find_and_validate_xml_sitemap_col_samples: 'Sample locs',
	tool_find_and_validate_xml_sitemap_valid_yes: 'Yes',
	tool_find_and_validate_xml_sitemap_valid_no: 'No',
	tool_find_and_validate_xml_sitemap_empty_findings: 'No findings returned for this site.',
	tool_find_and_validate_xml_sitemap_how_title: 'How it works',
	tool_find_and_validate_xml_sitemap_how_body:
		'This tool answers one job: find a site’s XML sitemap and check whether it looks like a valid urlset or sitemapindex — it does not generate a new file.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'Enter the site origin or homepage URL.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'Click Find & validate; the Worker reads robots.txt Sitemap: lines, then tries /sitemap.xml and common index paths.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'Review root type (urlset vs sitemapindex), URL count, and sample <loc> values in the findings table.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'Fix XML or discovery issues flagged here before submitting IndexNow or Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'Discovery and validation rules',
	tool_find_and_validate_xml_sitemap_formula_body:
		'Aligned with the sitemaps.org protocol: well-formed XML with a urlset or sitemapindex root, and countable <loc> entries.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'Discovery order: robots.txt Sitemap: directives first, then /sitemap.xml, /sitemap_index.xml, /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'A candidate is “valid structure” when the response looks like sitemap XML and HTTP status is OK.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'Root kind: sitemapindex lists child sitemaps; urlset lists page locs — both are reported.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'We count <loc> tags and show up to 10 samples; we do not crawl every listed URL.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'Gzip, oversized bodies, redirects, and non-XML responses may fail validation. Private hosts are rejected.',
	tool_find_and_validate_xml_sitemap_example_title: 'Example',
	tool_find_and_validate_xml_sitemap_example:
		'Sample input https://www.sitemaps.org/. The Worker checks robots.txt Sitemap: lines and common paths, then reports each finding’s HTTP status, kind (urlset/sitemapindex), loc count, sample locs, and validStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'When this helps',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'Sitemap finder: confirm where a site publishes its sitemap after a CMS migrate or CDN cutover.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'XML sitemap checker / validator pass: verify the file is well-formed and see whether it is an index or a urlset before Search Console submit.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'Quick loc sanity check: skim sample <loc> values after regenerating a large sitemap, without downloading the whole file.',
	tool_find_and_validate_xml_sitemap_faq_q1: 'Is this a sitemap generator?',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'No — this page only finds and validates existing sitemaps. Use the XML Sitemap Generator if you need to build a file from a URL list.',
	tool_find_and_validate_xml_sitemap_faq_q2: 'Where do you look for the sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'First robots.txt Sitemap: lines, then common fallbacks like /sitemap.xml and sitemap index paths on the same host.',
	tool_find_and_validate_xml_sitemap_faq_q3: 'What is sitemapindex vs urlset?',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'A sitemapindex lists child sitemap URLs; a urlset lists page locs. Both are valid sitemap protocol roots — the table shows which kind each candidate is.',
	tool_find_and_validate_xml_sitemap_faq_q4: 'Do you crawl every URL in the sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'No. We count <loc> entries, show a small sample, and check structure only — not live page status for every URL.',
	tool_find_and_validate_xml_sitemap_faq_q5: 'Is my URL uploaded or stored?',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'The URL/hostname must reach our Worker so it can fetch robots.txt and sitemap files. We do not store checks as a lasting product database. This is an edge tool, not “no upload”.',
	tool_find_and_validate_xml_sitemap_references:
		'sitemaps.org protocol; Google Search Central — sitemaps overview.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — Protocol',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — Sitemaps overview',
};

export default en;
