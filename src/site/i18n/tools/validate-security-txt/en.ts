/**
 * i18n tool shard (validate-security-txt / en master).
 * Scene: enter domain/URL → fetch security.txt → RFC 9116 field checklist.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_validate_security_txt_home_title: 'Validate security.txt',
	tool_validate_security_txt_home_desc:
		'Check whether a site publishes a valid security.txt with Contact and Expires fields.',
	tool_validate_security_txt_desc:
		'Check whether a site publishes a valid security.txt with Contact and Expires fields.',
	tool_validate_security_txt_title: 'Validate security.txt',
	tool_validate_security_txt_description:
		'Enter a domain or URL to run a security.txt checker: fetch /.well-known/security.txt (fallback /security.txt), parse Contact and Expires, and flag missing required fields. Sample: google.com Process steps and an example are shown on this page.',
	tool_validate_security_txt_url_label: 'Domain or URL',
	tool_validate_security_txt_url_ph: 'https://www.google.com/ or example.com',
	tool_validate_security_txt_check: 'Validate',
	tool_validate_security_txt_sample: 'Load sample',
	tool_validate_security_txt_clear: 'Clear',
	tool_validate_security_txt_running: 'Fetching security.txt…',
	tool_validate_security_txt_url_error: 'Enter a domain or http(s) URL.',
	tool_validate_security_txt_error_prefix: 'Error: ',
	tool_validate_security_txt_fetch_failed:
		'Could not fetch security.txt. The host may be offline, block bots, or reject the request.',
	tool_validate_security_txt_privacy_note:
		'The URL and hostname are sent to our Worker so it can fetch security.txt. We do not keep them as a product database.',
	tool_validate_security_txt_result_found_yes: 'security.txt found',
	tool_validate_security_txt_result_found_no: 'security.txt not found',
	tool_validate_security_txt_result_contact: 'Contact',
	tool_validate_security_txt_result_expires: 'Expires',
	tool_validate_security_txt_result_missing: 'Missing required',
	tool_validate_security_txt_result_missing_none: 'Required fields present',
	tool_validate_security_txt_result_expired_yes: 'Expires is in the past',
	tool_validate_security_txt_result_expired_no: 'Expires still valid (or not parsed)',
	tool_validate_security_txt_result_file_url: 'Fetched URL',
	tool_validate_security_txt_result_http_status: 'HTTP status',
	tool_validate_security_txt_result_preferred: 'Preferred-Languages',
	tool_validate_security_txt_result_canonical: 'Canonical',
	tool_validate_security_txt_result_preview: 'security.txt preview',
	tool_validate_security_txt_result_none: '(none)',
	tool_validate_security_txt_how_title: 'How it works',
	tool_validate_security_txt_how_body:
		'This security.txt validator answers one job: does the site publish a discovery file with the fields you need (especially Contact), and is Expires still usable?',
	tool_validate_security_txt_how_item_1: 'Enter a domain or HTTPS URL.',
	tool_validate_security_txt_how_item_2:
		'Click Validate; the Worker fetches /.well-known/security.txt, then falls back to /security.txt.',
	tool_validate_security_txt_how_item_3:
		'Review parsed fields: Contact, Expires, Preferred-Languages, Canonical, and extras in the preview.',
	tool_validate_security_txt_how_item_4:
		'Fix missing required fields before publishing your own security.txt.',
	tool_validate_security_txt_formula_title: 'RFC 9116 field rules we check',
	tool_validate_security_txt_formula_body:
		'Aligned with RFC 9116 (A File Format to Aid in Security Vulnerability Disclosure) and common securitytxt.org practice.',
	tool_validate_security_txt_formula_item_1:
		'Discovery order: https://host/.well-known/security.txt first, then https://host/security.txt.',
	tool_validate_security_txt_formula_item_2:
		'Contact is required; we list every Contact value and flag when it is missing.',
	tool_validate_security_txt_formula_item_3:
		'Expires is strongly expected; missing or past Expires is reported as a gap.',
	tool_validate_security_txt_formula_item_4:
		'Preferred-Languages and Canonical are shown when present; they are not required to pass the checklist.',
	tool_validate_security_txt_formula_item_5:
		'This is a fetch-and-parse checker only — not a vulnerability mailbox and not a full pentest.',
	tool_validate_security_txt_example_title: 'Example',
	tool_validate_security_txt_example:
		'Sample input https://www.google.com/. The Worker tries /.well-known/security.txt then /security.txt, then shows found status, Contact, Expires, missingRequired, expired, and a text preview.',
	tool_validate_security_txt_usecases_title: 'When this helps',
	tool_validate_security_txt_usecase_1:
		'security.txt checker before launch: confirm /.well-known/security.txt is reachable and Contact is present.',
	tool_validate_security_txt_usecase_2:
		'security.txt validator pass after editing Expires: verify the date still parses and is not already expired.',
	tool_validate_security_txt_usecase_3:
		'Vendor disclosure prep: confirm a third-party domain publishes a discovery file before you look up their Contact URI.',
	tool_validate_security_txt_faq_q1: 'Where should security.txt live?',
	tool_validate_security_txt_faq_a1:
		'Prefer https://host/.well-known/security.txt. /security.txt on the same host is the documented fallback.',
	tool_validate_security_txt_faq_q2: 'What fields are required?',
	tool_validate_security_txt_faq_a2:
		'At least Contact. Expires is strongly expected in RFC 9116 practice — this tool flags missing or expired values.',
	tool_validate_security_txt_faq_q3: 'Is RFC 9116 the page title?',
	tool_validate_security_txt_faq_a3:
		'No. The H1 is Validate security.txt. RFC 9116 belongs in Rules and References — this page is a checker, not a standards reader.',
	tool_validate_security_txt_faq_q4: 'Do you store vulnerability reports?',
	tool_validate_security_txt_faq_a4:
		'No. We only fetch and parse the published file via the Worker. We are not a disclosure mailbox.',
	tool_validate_security_txt_faq_q5: 'Is my URL stored?',
	tool_validate_security_txt_faq_a5:
		'The URL/hostname must reach our Worker so it can fetch security.txt. We do not store checks as a lasting product database. This is an edge tool, not “no upload”.',
	tool_validate_security_txt_references: 'RFC 9116; securitytxt.org.',
	tool_validate_security_txt_ref_rfc_label: 'RFC 9116 — security.txt',
	tool_validate_security_txt_ref_org_label: 'securitytxt.org',
};

export default en;
