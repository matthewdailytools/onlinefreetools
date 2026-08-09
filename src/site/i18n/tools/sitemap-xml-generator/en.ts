/**
 * i18n tool shard (sitemap-xml-generator / en).
 * English master locale — UI, Rules, Example, Use cases, FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_sitemap_home_title: 'XML Sitemap Generator',
	tool_sitemap_home_desc:
		'Help Google discover and index every page you want ranked — turn a URL list into a valid sitemap.xml with lastmod, changefreq and priority in your browser.',
	tool_sitemap_title: 'XML Sitemap Generator — Create sitemap.xml From URLs',
	tool_sitemap_description:
		'A sitemap helps Google discover and index your pages faster, especially new pages or pages with few links. Turn a URL list into sitemap.xml in your browser. Steps: paste one https URL per line with optional lastmod / changefreq / priority, preview the generated XML with proper escaping, and copy it to your site root. Shows protocol rules and limits. Nothing is uploaded. Example: 3 URLs → urlset with three url entries.',
	tool_sitemap_generate: 'Generate',
	tool_sitemap_sample: 'Load sample',
	tool_sitemap_clear: 'Clear',
	tool_sitemap_copy: 'Copy',
	tool_sitemap_copied: 'Copied',
	tool_sitemap_download: 'Download',
	tool_sitemap_urls_label: 'URLs (one per line)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'Each line: URL, or URL | lastmod (yyyy-MM-dd), or URL | lastmod | changefreq | priority. Example: https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'Skipped non-http URL: {url}',
	tool_sitemap_warn_bad_lastmod: 'Invalid lastmod (use yyyy-MM-dd or W3C datetime): {url}',
	tool_sitemap_warn_too_many: 'More than 50,000 URLs — split into several sitemaps and link them with a sitemap index.',
	tool_sitemap_how_title: 'How it works',
	tool_sitemap_how_body:
		'Paste your URL list, one per line. You can add optional metadata after a pipe: lastmod (yyyy-MM-dd), changefreq and priority. The page parses each line, escapes reserved characters, checks that every URL starts with http(s), and builds a urlset following the sitemap protocol. Copy the XML to your site root, then reference it from robots.txt or submit it in Search Console.',
	tool_sitemap_rules_title: 'Protocol rules and limits',
	tool_sitemap_rules_body:
		'These are the rules from the sitemap protocol and Google that this generator follows.',
	tool_sitemap_rules_item_1:
		'Required: every <url> must contain a <loc> with the full URL. lastmod, changefreq and priority are optional.',
	tool_sitemap_rules_item_2:
		'lastmod format: a W3C date (yyyy-MM-dd) or full datetime such as 2026-08-01T12:00:00+00:00. Other formats are ignored or rejected.',
	tool_sitemap_rules_item_3:
		'changefreq is a hint, not a signal. Google ignores it, so filling it does not change how often your pages are crawled.',
	tool_sitemap_rules_item_4:
		'Limits: one sitemap can hold at most 50,000 URLs and 50MB after compression. Beyond that, split and use a sitemap index.',
	tool_sitemap_example_title: 'Example',
	tool_sitemap_example:
		'Sample input: https://example.com/ and https://example.com/products with lastmod 2026-08-01, plus https://example.com/about — the output is a urlset with three url entries, the middle one carrying a lastmod element.',
	tool_sitemap_usecases_title: 'Good fits',
	tool_sitemap_usecase_1:
		'New sites: generate a first sitemap.xml from your URL list and submit it in Search Console.',
	tool_sitemap_usecase_2:
		'Updated content: add lastmod for pages that changed recently so crawlers can pick up the freshness signal.',
	tool_sitemap_usecase_3:
		'Discovery: point robots.txt at your sitemap URL so crawlers find it without waiting for a submission.',
	tool_sitemap_faq_q1: 'What is the URL limit for one sitemap?',
	tool_sitemap_faq_a1:
		'50,000 URLs or 50MB (uncompressed). The generator warns you when your list exceeds 50,000 so you can split it and use a sitemap index file that points to each part.',
	tool_sitemap_faq_q2: 'What lastmod format is required?',
	tool_sitemap_faq_a2:
		'A W3C date (yyyy-MM-dd) or a full datetime like 2026-08-01T12:00:00+00:00. The generator flags lines whose lastmod does not match so you can fix them before saving.',
	tool_sitemap_faq_q3: 'Does changefreq affect crawling?',
	tool_sitemap_faq_a3:
		'No. Google ignores changefreq; it is a hint for other consumers. Priority is also ignored by Google. lastmod is the metadata worth keeping accurate.',
	tool_sitemap_faq_q4: 'How is this different from IndexNow?',
	tool_sitemap_faq_a4:
		'IndexNow pings participating search engines about a URL change right away, while a sitemap is a standing list that crawlers poll. Use both: IndexNow for immediate notification, sitemap for ongoing discovery.',
	tool_sitemap_references: 'sitemaps.org — sitemap protocol; Google Search Central — Build and submit a sitemap.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — protocol',
	tool_sitemap_ref_google_label: 'Search Central — Build and submit a sitemap',
};

export default en;
