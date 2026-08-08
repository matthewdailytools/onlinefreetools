/**
 * i18n tool shard (domain-lookup / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
	tool_domain_lookup_article:
		'Look up a domain’s live DNS records and registration data in one place. Queries run through our edge to DNS-over-HTTPS and RDAP; results may be privacy-redacted and can differ from your local resolver.',
	tool_domain_lookup_clear: 'Clear',
	tool_domain_lookup_col_data: 'Data',
	tool_domain_lookup_col_name: 'Name',
	tool_domain_lookup_col_ttl: 'TTL',
	tool_domain_lookup_col_type: 'Type',
	tool_domain_lookup_copied: 'Copied',
	tool_domain_lookup_copy: 'Copy summary',
	tool_domain_lookup_desc:
		'Check DNS records and registration (WHOIS/RDAP) for a domain — A/MX/NS and registrar/expiry in one view.',
	tool_domain_lookup_description:
		'Domain lookup: check live DNS records and registration data (WHOIS-style via RDAP) online. Process: enter a domain such as example.com, query DNS-over-HTTPS and RDAP in parallel, then review A/AAAA/MX/NS/TXT plus registrar, status, and expiry events. Contact fields are often redacted; lookups go through our edge and are not stored as a history product.',
	tool_domain_lookup_domain_label: 'Domain',
	tool_domain_lookup_domain_placeholder: 'example.com',
	tool_domain_lookup_dns_empty: 'No DNS answers for the queried types.',
	tool_domain_lookup_dns_fail: 'DNS lookup failed.',
	tool_domain_lookup_dns_heading: 'DNS records',
	tool_domain_lookup_err_empty: 'Enter a domain name.',
	tool_domain_lookup_domain_normalized: 'Normalized to {domain}.',
	tool_domain_lookup_err_format: 'That does not look like a valid domain name. Use a host like example.com (URLs are auto-corrected).',
	tool_domain_lookup_err_need_one: 'Select DNS, registration, or both.',
	tool_domain_lookup_captcha_label: 'Security check',
	tool_domain_lookup_err_captcha: 'Complete the security check before looking up.',
	tool_domain_lookup_err_captcha_fail: 'Security check failed. Please try again.',
	tool_domain_lookup_events: 'Events',
	tool_domain_lookup_example:
		'Example: look up example.com → DNS may show public A/AAAA/NS answers from DoH; Registration may list registrar, status codes, and expiration/registration events from RDAP (fields can be redacted).',
	tool_domain_lookup_example_title: 'Example',
	tool_domain_lookup_faq_a1:
		'People still say WHOIS. For most gTLDs, registries publish the same kind of data over RDAP (JSON over HTTPS). This tool uses RDAP; some ccTLDs may have no RDAP service.',
	tool_domain_lookup_faq_a2:
		'After privacy rules, registrant emails and phones are often redacted. Registrar name, status, and dates usually remain. We show what the RDAP server returns.',
	tool_domain_lookup_faq_a3:
		'DNS answers come from a public resolver view (DoH). RDAP nameservers are what the registry has on file. Propagation delays or recent changes can make them differ.',
	tool_domain_lookup_faq_a4:
		'Your browser calls our edge API; the worker queries DoH and RDAP upstream. We do not offer a domain-history product; treat results as ephemeral.',
	tool_domain_lookup_faq_a5:
		'Unsupported TLDs, timeouts, or NXDOMAIN-style empty DNS answers are shown per section so one failure does not hide the other.',
	tool_domain_lookup_faq_q1: 'Is this a WHOIS lookup?',
	tool_domain_lookup_faq_q2: 'Why is the owner contact blank?',
	tool_domain_lookup_faq_q3: 'Why can DNS NS differ from registration NS?',
	tool_domain_lookup_faq_q4: 'Do you store the domains I look up?',
	tool_domain_lookup_faq_q5: 'What if DNS or RDAP fails?',
	tool_domain_lookup_how_body:
		'Enter a domain and choose DNS, registration, or both. Our edge worker queries Cloudflare DNS-over-HTTPS for common record types and the TLD’s RDAP server (via IANA bootstrap) for registrar, status, events, and registry nameservers. Each section can succeed or fail on its own.',
	tool_domain_lookup_how_title: 'How it works',
	tool_domain_lookup_loading: 'Looking up…',
	tool_domain_lookup_lookup: 'Lookup',
	tool_domain_lookup_ns_mismatch:
		'Note: DNS NS answers differ from RDAP nameservers — often propagation or a recent change.',
	tool_domain_lookup_opt_dns: 'DNS',
	tool_domain_lookup_opt_rdap: 'Registration',
	tool_domain_lookup_rdap_fail: 'Registration (RDAP) lookup failed.',
	tool_domain_lookup_rdap_heading: 'Registration (RDAP)',
	tool_domain_lookup_rdap_link: 'RDAP URL',
	tool_domain_lookup_rdap_ns: 'Registry nameservers',
	tool_domain_lookup_rdap_ok: 'Registration data from RDAP.',
	tool_domain_lookup_ref_doh_label: 'Cloudflare — DNS over HTTPS API',
	tool_domain_lookup_ref_icann_label: 'ICANN Lookup (RDAP)',
	tool_domain_lookup_ref_rfc1035_label: 'RFC 1035 — Domain names',
	tool_domain_lookup_ref_rfc8484_label: 'RFC 8484 — DNS over HTTPS',
	tool_domain_lookup_registrar: 'Registrar',
	tool_domain_lookup_rules_body:
		'Use this page to inspect resolver DNS and registry registration data. Limits and meanings:',
	tool_domain_lookup_rules_item_1:
		'DNS types queried: A, AAAA, CNAME, MX, NS, TXT, SOA (public DoH view).',
	tool_domain_lookup_rules_item_2:
		'Registration data comes from RDAP, the structured successor to classic WHOIS for most gTLDs.',
	tool_domain_lookup_rules_item_3:
		'Contact fields may be redacted; do not assume full owner details.',
	tool_domain_lookup_rules_item_4:
		'DNS answers and RDAP nameservers can disagree during propagation.',
	tool_domain_lookup_rules_item_5:
		'Lookups go through our edge to upstream servers; we do not change your DNS or registration.',
	tool_domain_lookup_rules_title: 'What you get',
	tool_domain_lookup_sample: 'Load sample',
	tool_domain_lookup_status: 'Status',
	tool_domain_lookup_title: 'Domain Lookup — Check DNS Records & Registration Online',
	tool_domain_lookup_usecase_1:
		'Before go-live: confirm A/AAAA/CNAME answers match the host you expect.',
	tool_domain_lookup_usecase_2:
		'Renewal or handoff: check registrar, status, and expiration events (contacts may be redacted).',
	tool_domain_lookup_usecase_3:
		'Mail setup: inspect MX and related TXT snippets (not a full deliverability audit).',
	tool_domain_lookup_usecases_title: 'When to use it',
};
export default en;
