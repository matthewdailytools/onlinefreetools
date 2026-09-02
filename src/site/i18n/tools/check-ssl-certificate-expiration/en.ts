/**
 * i18n tool shard (check-ssl-certificate-expiration / en master).
 * Scene: hostname → crt.sh CT → newest cert notAfter / issuer / daysLeft (not live handshake).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_check_ssl_certificate_expiration_home_title: 'Check SSL certificate expiration',
	tool_check_ssl_certificate_expiration_home_desc:
		'See when a hostname’s newest Certificate Transparency cert expires (crt.sh — not a live handshake).',
	tool_check_ssl_certificate_expiration_desc:
		'See when a hostname’s newest Certificate Transparency cert expires (crt.sh — not a live handshake).',
	tool_check_ssl_certificate_expiration_title: 'Check SSL certificate expiration',
	tool_check_ssl_certificate_expiration_description:
		'Enter a hostname for an SSL certificate expiry checker: query Certificate Transparency via crt.sh, then show notBefore, notAfter, issuer, and days left for the newest match. Not a live TLS handshake. Sample: example.com.',
	tool_check_ssl_certificate_expiration_host_label: 'Hostname',
	tool_check_ssl_certificate_expiration_host_ph: 'example.com',
	tool_check_ssl_certificate_expiration_check: 'Check',
	tool_check_ssl_certificate_expiration_sample: 'Load sample',
	tool_check_ssl_certificate_expiration_clear: 'Clear',
	tool_check_ssl_certificate_expiration_running: 'Querying Certificate Transparency…',
	tool_check_ssl_certificate_expiration_host_error: 'Enter a hostname (or paste an https URL).',
	tool_check_ssl_certificate_expiration_error_prefix: 'Error: ',
	tool_check_ssl_certificate_expiration_fetch_failed:
		'Could not query crt.sh. The service may be rate-limiting or unreachable.',
	tool_check_ssl_certificate_expiration_privacy_note:
		'The hostname is sent to our Worker so it can query crt.sh. We do not keep it as a product database.',
	tool_check_ssl_certificate_expiration_result_found_yes: 'CT certificate found',
	tool_check_ssl_certificate_expiration_result_found_no: 'No CT rows for this host',
	tool_check_ssl_certificate_expiration_result_host: 'Hostname',
	tool_check_ssl_certificate_expiration_result_cn: 'Common name',
	tool_check_ssl_certificate_expiration_result_issuer: 'Issuer',
	tool_check_ssl_certificate_expiration_result_not_before: 'notBefore',
	tool_check_ssl_certificate_expiration_result_not_after: 'notAfter (expiry)',
	tool_check_ssl_certificate_expiration_result_days_left: 'Days left',
	tool_check_ssl_certificate_expiration_result_expired_yes: 'Expired (by CT notAfter)',
	tool_check_ssl_certificate_expiration_result_expired_no: 'Not expired (by CT notAfter)',
	tool_check_ssl_certificate_expiration_result_source: 'Source',
	tool_check_ssl_certificate_expiration_result_row_count: 'CT rows returned',
	tool_check_ssl_certificate_expiration_result_disclaimer:
		'CT log lag — not a live TLS handshake peer certificate. Dates can lag behind issuance or renewal.',
	tool_check_ssl_certificate_expiration_result_none: '(none)',
	tool_check_ssl_certificate_expiration_how_title: 'How it works',
	tool_check_ssl_certificate_expiration_how_body:
		'This page answers one job: when does the newest Certificate Transparency match for this hostname expire? It is not a live SSL handshake auditor.',
	tool_check_ssl_certificate_expiration_how_item_1: 'Enter a hostname (no path required).',
	tool_check_ssl_certificate_expiration_how_item_2:
		'Click Check; the Worker queries crt.sh JSON for matching certificates.',
	tool_check_ssl_certificate_expiration_how_item_3:
		'Read notBefore, notAfter, issuer, and days left for the newest match.',
	tool_check_ssl_certificate_expiration_how_item_4:
		'Treat dates as CT-published — confirm with a live handshake if timing-critical.',
	tool_check_ssl_certificate_expiration_formula_title: 'CT query rules (not live TLS)',
	tool_check_ssl_certificate_expiration_formula_body:
		'Cloudflare Workers cannot read the peer certificate from fetch. We use public Certificate Transparency data via crt.sh instead.',
	tool_check_ssl_certificate_expiration_formula_item_1:
		'Query crt.sh with the hostname and parse the JSON certificate list.',
	tool_check_ssl_certificate_expiration_formula_item_2:
		'Sort by notBefore descending and take the newest row as the primary match.',
	tool_check_ssl_certificate_expiration_formula_item_3:
		'Show notBefore, notAfter, issuer, daysLeft, and expired derived from notAfter vs now.',
	tool_check_ssl_certificate_expiration_formula_item_4:
		'CT logs can lag behind live issuance or renewal — never treat this as a handshake verdict.',
	tool_check_ssl_certificate_expiration_formula_item_5:
		'Private or blocked hosts are rejected. This is not a full chain walker or CA order tool.',
	tool_check_ssl_certificate_expiration_example_title: 'Example',
	tool_check_ssl_certificate_expiration_example:
		'Sample input example.com. The Worker queries crt.sh, picks the newest matching certificate, and shows notBefore, notAfter, issuer, daysLeft, and an expired flag — with a CT-lag disclaimer.',
	tool_check_ssl_certificate_expiration_usecases_title: 'When this helps',
	tool_check_ssl_certificate_expiration_usecase_1:
		'SSL certificate expiry checker before renewals: see how many days remain on the newest CT leaf.',
	tool_check_ssl_certificate_expiration_usecase_2:
		'SSL expiry date checker after a CDN cutover: confirm CT shows a new notAfter for the hostname.',
	tool_check_ssl_certificate_expiration_usecase_3:
		'Quick inventory pass across vendor domains when you only need expiration dates, not a full chain audit.',
	tool_check_ssl_certificate_expiration_faq_q1: 'Is this a live SSL handshake?',
	tool_check_ssl_certificate_expiration_faq_a1:
		'No. Cloudflare Workers cannot read the peer certificate from fetch. We query Certificate Transparency (crt.sh) instead.',
	tool_check_ssl_certificate_expiration_faq_q2: 'Why might dates lag?',
	tool_check_ssl_certificate_expiration_faq_a2:
		'CT logs can lag behind issuance or renewal. If timing is critical, confirm with a live handshake tool on your machine.',
	tool_check_ssl_certificate_expiration_faq_q3: 'Do you check the full certificate chain?',
	tool_check_ssl_certificate_expiration_faq_a3:
		'Focus is expiration of the newest matching cert. A full chain-only checker is a secondary need — not this page’s H1.',
	tool_check_ssl_certificate_expiration_faq_q4: 'Is “SSL certificate checker” the title?',
	tool_check_ssl_certificate_expiration_faq_a4:
		'No. The H1 is Check SSL certificate expiration. Broader “SSL certificate checker” head intent is intentionally not the sole title.',
	tool_check_ssl_certificate_expiration_faq_q5: 'What about private IP hosts?',
	tool_check_ssl_certificate_expiration_faq_a5:
		'Private or blocked hosts are rejected. Use the private CIDR ranges tool for private-space context.',
	tool_check_ssl_certificate_expiration_references:
		'crt.sh Certificate Search; Certificate Transparency project.',
	tool_check_ssl_certificate_expiration_ref_crt_label: 'crt.sh — Certificate Search',
	tool_check_ssl_certificate_expiration_ref_ct_label: 'Certificate Transparency',
};

export default en;
