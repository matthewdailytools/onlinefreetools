/**
 * i18n tool shard (spf-dkim-dmarc-checker / en master).
 * Scene: enter domain + DKIM selector → DoH TXT for SPF / DMARC / DKIM with plain-language policy.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_spf_dkim_dmarc_checker_title: 'SPF DKIM DMARC checker',
	tool_spf_dkim_dmarc_checker_desc:
		'Check SPF, DKIM, and DMARC DNS for a domain; read ~all/-all and p= policy in plain language.',
	tool_spf_dkim_dmarc_checker_description:
		'Enter a sending domain and optional DKIM selector (default google). DoH looks up SPF, _dmarc, and selector._domainkey, then explains ~all/-all and DMARC p=. Sample: google.com Process steps and an example are shown on this page.',
	tool_spf_dkim_dmarc_checker_domain_label: 'Domain',
	tool_spf_dkim_dmarc_checker_domain_ph: 'google.com',
	tool_spf_dkim_dmarc_checker_selector_label: 'DKIM selector',
	tool_spf_dkim_dmarc_checker_selector_ph: 'google',
	tool_spf_dkim_dmarc_checker_check: 'Check',
	tool_spf_dkim_dmarc_checker_sample: 'Load sample',
	tool_spf_dkim_dmarc_checker_clear: 'Clear',
	tool_spf_dkim_dmarc_checker_running: 'Looking up SPF, DKIM, and DMARC via DNS…',
	tool_spf_dkim_dmarc_checker_domain_error: 'Enter a valid domain name (host only, or paste a full URL).',
	tool_spf_dkim_dmarc_checker_error_prefix: 'Error: ',
	tool_spf_dkim_dmarc_checker_fetch_failed:
		'DNS lookup failed. The resolver may be unreachable, or the name may be blocked.',
	tool_spf_dkim_dmarc_checker_privacy_note:
		'The domain and DKIM selector are sent to our Worker for DNS-over-HTTPS lookup. We do not keep them as a product database.',
	tool_spf_dkim_dmarc_checker_result_found_yes: 'Found',
	tool_spf_dkim_dmarc_checker_result_found_no: 'Not found',
	tool_spf_dkim_dmarc_checker_result_record: 'Record',
	tool_spf_dkim_dmarc_checker_result_explain: 'Explain',
	tool_spf_dkim_dmarc_checker_result_none: '—',
	tool_spf_dkim_dmarc_checker_panel_spf: 'SPF',
	tool_spf_dkim_dmarc_checker_panel_dmarc: 'DMARC',
	tool_spf_dkim_dmarc_checker_panel_dkim: 'DKIM',
	tool_spf_dkim_dmarc_checker_result_all: 'all qualifier',
	tool_spf_dkim_dmarc_checker_result_policy: 'DMARC policy (p=)',
	tool_spf_dkim_dmarc_checker_result_pct: 'pct',
	tool_spf_dkim_dmarc_checker_result_selector: 'Selector',
	tool_spf_dkim_dmarc_checker_result_pubkey: 'Public key (p=)',
	tool_spf_dkim_dmarc_checker_result_pubkey_yes: 'Present',
	tool_spf_dkim_dmarc_checker_result_pubkey_no: 'Missing or empty',
	tool_spf_dkim_dmarc_checker_how_title: 'How it works',
	tool_spf_dkim_dmarc_checker_how_body:
		'Deliverability checks usually need SPF, DKIM, and DMARC together. Enter the sending domain, optionally change the DKIM selector, then read each TXT plus a short policy summary.',
	tool_spf_dkim_dmarc_checker_how_item_1:
		'Enter the sending domain and optional DKIM selector (default google).',
	tool_spf_dkim_dmarc_checker_how_item_2:
		'Click Check; the Worker queries DNS TXT via DoH for SPF, _dmarc, and selector._domainkey.',
	tool_spf_dkim_dmarc_checker_how_item_3:
		'Read each record plus plain-language SPF mechanisms (~all / -all) and DMARC p= policy.',
	tool_spf_dkim_dmarc_checker_how_item_4:
		'Fix DNS at your provider, then re-check — this page does not rewrite your zone.',
	tool_spf_dkim_dmarc_checker_formula_title: 'What we look up',
	tool_spf_dkim_dmarc_checker_formula_body:
		'Queries follow public DNS TXT shapes from RFC 7208 (SPF), RFC 6376 (DKIM), and RFC 7489 (DMARC). We summarize policy fields; we do not send mail or probe mailboxes.',
	tool_spf_dkim_dmarc_checker_formula_item_1:
		'SPF: TXT on the domain itself starting with v=spf1; we surface the trailing all qualifier (~all soft fail, -all hard fail).',
	tool_spf_dkim_dmarc_checker_formula_item_2:
		'DMARC: TXT on _dmarc.domain starting with v=DMARC1; we highlight p= (none / quarantine / reject) and optional pct.',
	tool_spf_dkim_dmarc_checker_formula_item_3:
		'DKIM: TXT on {selector}._domainkey.domain; we check whether a non-empty public key (p=) is present.',
	tool_spf_dkim_dmarc_checker_formula_item_4:
		'Missing records are reported honestly. DoH failures surface as errors — this is not your ESP’s live signing test.',
	tool_spf_dkim_dmarc_checker_formula_item_5:
		'No SMTP RCPT probing and no zone edits. An “email address exists” checker is out of scope.',
	tool_spf_dkim_dmarc_checker_example_title: 'Example',
	tool_spf_dkim_dmarc_checker_example:
		'Sample input google.com with DKIM selector google. The Worker looks up SPF on google.com, DMARC on _dmarc.google.com, and DKIM at google._domainkey.google.com, then shows found/record/explain for each.',
	tool_spf_dkim_dmarc_checker_usecases_title: 'When this helps',
	tool_spf_dkim_dmarc_checker_usecase_1:
		'Before go-live: confirm SPF, DKIM, and DMARC TXT exist for the sending domain after you publish ESP DNS.',
	tool_spf_dkim_dmarc_checker_usecase_2:
		'DMARC record checker pass: read p=none vs quarantine/reject in plain language without only dumping raw TXT.',
	tool_spf_dkim_dmarc_checker_usecase_3:
		'SPF lookup when mail goes to spam: see whether ~all or -all is set, then align DKIM selector with your ESP.',
	tool_spf_dkim_dmarc_checker_faq_q1: 'Why check SPF, DKIM, and DMARC on one page?',
	tool_spf_dkim_dmarc_checker_faq_a1:
		'Inbox providers usually evaluate all three. A dmarc record checker alone can miss a broken SPF or the wrong DKIM selector.',
	tool_spf_dkim_dmarc_checker_faq_q2: 'What is the default DKIM selector?',
	tool_spf_dkim_dmarc_checker_faq_a2:
		'google — common for Google Workspace. Change it if your ESP publishes another selector (for example s1 or k1).',
	tool_spf_dkim_dmarc_checker_faq_q3: 'Is this an email address validator?',
	tool_spf_dkim_dmarc_checker_faq_a3:
		'No. This is domain authentication DNS only (SPF lookup, DKIM key, DMARC policy). Mailbox existence checks are out of scope.',
	tool_spf_dkim_dmarc_checker_faq_q4: 'Do you only show raw TXT?',
	tool_spf_dkim_dmarc_checker_faq_a4:
		'No. Results include the record plus an explain line for SPF all mechanisms and DMARC p= policy, not a dump-only view.',
	tool_spf_dkim_dmarc_checker_faq_q5: 'Is my domain stored?',
	tool_spf_dkim_dmarc_checker_faq_a5:
		'The domain and selector must reach our Worker for DNS-over-HTTPS. We do not store checks as a lasting product database. This is an edge DNS tool, not “no upload”.',
	tool_spf_dkim_dmarc_checker_references:
		'RFC 7208 SPF; RFC 6376 DKIM; RFC 7489 DMARC.',
	tool_spf_dkim_dmarc_checker_ref_spf_label: 'RFC 7208 — Sender Policy Framework (SPF)',
	tool_spf_dkim_dmarc_checker_ref_dkim_label: 'RFC 6376 — DomainKeys Identified Mail (DKIM)',
	tool_spf_dkim_dmarc_checker_ref_dmarc_label: 'RFC 7489 — Domain-based Message Authentication (DMARC)',
};

export default en;
