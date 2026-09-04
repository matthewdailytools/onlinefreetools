/**
 * i18n tool shard (check-robots-txt-url-blocked / en master).
 * Scene: paste a page URL → Worker fetches /robots.txt → report allowed/blocked + matched rule.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'Robots.txt URL checker',
	tool_check_robots_txt_url_blocked_home_desc:
		'Paste a page URL and see if robots.txt blocks it for Googlebot or other crawlers.',
	tool_check_robots_txt_url_blocked_desc:
		'Paste a page URL and see if robots.txt blocks it for Googlebot or other crawlers.',
	tool_check_robots_txt_url_blocked_title: 'Check if a URL is blocked by robots.txt',
	tool_check_robots_txt_url_blocked_description:
		'Paste a page URL to test whether robots.txt blocks that path for Googlebot, *, Bingbot, or GPTBot. Edge fetch shows matched Allow/Disallow. Sample: /admin Process steps and an example are shown on this page.',
	tool_check_robots_txt_url_blocked_url_label: 'Page URL',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'User-agent',
	tool_check_robots_txt_url_blocked_check: 'Check',
	tool_check_robots_txt_url_blocked_sample: 'Load sample',
	tool_check_robots_txt_url_blocked_clear: 'Clear',
	tool_check_robots_txt_url_blocked_running: 'Fetching robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: 'Enter a valid http(s) URL including the path you care about.',
	tool_check_robots_txt_url_blocked_error_prefix: 'Error: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'Could not fetch robots.txt. The host may be offline, block bots, or reject the request.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'The URL and hostname are sent to our Worker so it can fetch /robots.txt. We do not keep them as a product database.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'Allowed',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'Blocked',
	tool_check_robots_txt_url_blocked_result_matched: 'Matched rule',
	tool_check_robots_txt_url_blocked_result_matched_none: 'No matching Allow/Disallow (treated as allow)',
	tool_check_robots_txt_url_blocked_result_http_status: 'robots.txt HTTP status',
	tool_check_robots_txt_url_blocked_result_path: 'Path evaluated',
	tool_check_robots_txt_url_blocked_result_ua: 'User-agent used',
	tool_check_robots_txt_url_blocked_result_robots_url: 'robots.txt URL',
	tool_check_robots_txt_url_blocked_result_group: 'Matched user-agent group',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'No robots.txt body (missing or HTML error page). Treated as allow-all.',
	tool_check_robots_txt_url_blocked_result_preview: 'robots.txt preview',
	tool_check_robots_txt_url_blocked_how_title: 'How it works',
	tool_check_robots_txt_url_blocked_how_body:
		'This checker answers one question: for a chosen crawler, does the site’s robots.txt allow or block that page path? It fetches only /robots.txt — not the page body.',
	tool_check_robots_txt_url_blocked_how_item_1:
		'Paste the full page URL you care about (the path matters, not only the domain).',
	tool_check_robots_txt_url_blocked_how_item_2:
		'Pick a user-agent (default Googlebot; also * , Bingbot, or GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3:
		'Click Check and wait for the Worker to fetch origin /robots.txt.',
	tool_check_robots_txt_url_blocked_how_item_4:
		'Read Allowed or Blocked, the matched rule line, and the fetch HTTP status.',
	tool_check_robots_txt_url_blocked_how_item_5:
		'Skim the robots.txt preview if you need to confirm which group applied.',
	tool_check_robots_txt_url_blocked_formula_title: 'Matching rules we apply',
	tool_check_robots_txt_url_blocked_formula_body:
		'Evaluation follows common crawler practice aligned with Google’s robots.txt docs and RFC 9309 (longest match; Allow vs Disallow at equal length).',
	tool_check_robots_txt_url_blocked_formula_item_1:
		'Pick the group whose User-agent matches the selected crawler; if none, fall back to the * group.',
	tool_check_robots_txt_url_blocked_formula_item_2:
		'Among Allow/Disallow lines that match the path, the longest prefix wins.',
	tool_check_robots_txt_url_blocked_formula_item_3:
		'At equal length, Allow beats Disallow (Google’s documented preference).',
	tool_check_robots_txt_url_blocked_formula_item_4:
		'Missing robots.txt or empty groups are treated as allow-all; the HTTP status is still shown.',
	tool_check_robots_txt_url_blocked_formula_item_5:
		'Only /robots.txt is fetched. Private hosts are rejected. This is not Google Search Console’s official tester.',
	tool_check_robots_txt_url_blocked_example_title: 'Example',
	tool_check_robots_txt_url_blocked_example:
		'Sample input https://www.bing.com/search with Googlebot. The Worker fetches https://www.bing.com/robots.txt, evaluates path /search, and reports Allowed or Blocked with the matched Disallow/Allow line when present.',
	tool_check_robots_txt_url_blocked_usecases_title: 'When this helps',
	tool_check_robots_txt_url_blocked_usecase_1:
		'Launch check: confirm a new /admin or /staging path is blocked before go-live while public pages stay crawlable.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'robots.txt tester / validator pass: verify a Disallow change actually hits the URL you intended, without writing a new file.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'AI crawler rules: switch UA to GPTBot (or keep *) and see whether training crawlers are blocked on sensitive paths.',
	tool_check_robots_txt_url_blocked_faq_q1: 'Does this generate a robots.txt file?',
	tool_check_robots_txt_url_blocked_faq_a1:
		'No — this page only checks whether a URL is blocked. Use the robots.txt generator if you need to write Allow/Disallow groups.',
	tool_check_robots_txt_url_blocked_faq_q2: 'Why test Googlebot and * separately?',
	tool_check_robots_txt_url_blocked_faq_a2:
		'Googlebot uses its own group when present; many other crawlers fall back to *. Checking both avoids assuming one rule covers every bot.',
	tool_check_robots_txt_url_blocked_faq_q3: 'What if robots.txt is missing or returns 404?',
	tool_check_robots_txt_url_blocked_faq_a3:
		'Common crawler practice treats a missing file as allow-all. The tool still shows the HTTP status so you can see a 404 or redirect.',
	tool_check_robots_txt_url_blocked_faq_q4: 'Can I test AI crawlers like GPTBot?',
	tool_check_robots_txt_url_blocked_faq_a4:
		'Yes — pick GPTBot in the user-agent list. Matching still follows RFC 9309 path rules; results are an edge evaluation, not an official crawler verdict.',
	tool_check_robots_txt_url_blocked_faq_q5: 'Is my URL uploaded or stored?',
	tool_check_robots_txt_url_blocked_faq_a5:
		'The URL/hostname must reach our Worker so it can fetch /robots.txt. We do not store checks as a lasting product database. This is an edge tool, not “no upload”.',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt; RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default en;
