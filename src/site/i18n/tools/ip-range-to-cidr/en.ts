/**
 * i18n tool shard (ip-range-to-cidr / en).
 * Master locale: H1 keeps “IP range to CIDR”; convert / aggregation / IPv6 land in desc, FAQ, Use cases.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'IP range to CIDR — Turn start–end addresses into prefix lists',
	tool_ip_range_to_cidr_desc:
		'IP range to CIDR: turn start–end addresses into covering prefixes. Sample: 192.168.1.0–192.168.1.255 → 192.168.1.0/24.',
	tool_ip_range_to_cidr_description:
		'Convert IP range to CIDR: paste start–end (or multiple lines) and get covering prefixes. Example: 192.168.1.0–192.168.1.255 → 192.168.1.0/24. Non-aligned spans become several prefixes; use multi-line input for CIDR aggregation. Addresses stay on your device and are not uploaded to a server.',
	tool_ip_range_to_cidr_article:
		'Paste start and end addresses (or one range per line) to get the smallest list of CIDR prefixes that cover every address in the closed interval. Non-aligned ends produce multiple prefixes. IPv4 and IPv6 are supported, but not mixed in one batch.',
	tool_ip_range_to_cidr_convert: 'Convert',
	tool_ip_range_to_cidr_sample: 'Load sample',
	tool_ip_range_to_cidr_clear: 'Clear',
	tool_ip_range_to_cidr_copy: 'Copy CIDRs',
	tool_ip_range_to_cidr_copy_done: 'Copied',
	tool_ip_range_to_cidr_input_label: 'IP ranges (one per line)',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'CIDR prefixes',
	tool_ip_range_to_cidr_meta_label: 'Summary',
	tool_ip_range_to_cidr_meta_tpl: '{n} prefix(es) · {family}',
	tool_ip_range_to_cidr_swap_hint: 'Start and end were swapped because the first address was higher.',
	tool_ip_range_to_cidr_err_empty: 'Enter at least one IP range (start - end), one range per line.',
	tool_ip_range_to_cidr_err_parse: 'Could not parse that line as an IP or start–end range.',
	tool_ip_range_to_cidr_err_mixed: 'Do not mix IPv4 and IPv6 in the same conversion.',
	tool_ip_range_to_cidr_err_limit: 'Too many CIDR prefixes (over the safety limit). Narrow the ranges and try again.',
	tool_ip_range_to_cidr_how_title: 'How it works',
	tool_ip_range_to_cidr_how_body:
		'The output is a list of CIDR prefixes that together cover every address from start through end. Fill ranges the way ACL exports write them, then copy the prefixes into firewall or security-group rules.',
	tool_ip_range_to_cidr_how_item_1:
		'Understand that the result covers the closed interval with one or more prefixes — not a single “guessed” mask when the ends are unaligned.',
	tool_ip_range_to_cidr_how_item_2: 'Paste start and end as “A - B” (or one range per line for aggregation).',
	tool_ip_range_to_cidr_how_item_3: 'Convert and read the CIDR list; copy all prefixes when they look right.',
	tool_ip_range_to_cidr_how_item_4: 'If start and end were reversed, read the swap hint; if IPv4 and IPv6 are mixed, fix the family and retry.',
	tool_ip_range_to_cidr_formula_title: 'Formula',
	tool_ip_range_to_cidr_formula_body:
		'Walk from the current address to the end. At each step take the largest power-of-two block that is aligned on the current address and still fits inside the remaining span, emit address/prefix-length, then advance.',
	tool_ip_range_to_cidr_formula_item_1: 'Parse each endpoint to an integer (IPv4 32-bit, IPv6 128-bit). Same family only.',
	tool_ip_range_to_cidr_formula_item_2: 'If start > end, swap them and note the swap.',
	tool_ip_range_to_cidr_formula_item_3:
		'Host bits allowed = trailing zero bits of the current address ∩ floor(log2 of remaining length).',
	tool_ip_range_to_cidr_formula_item_4: 'Emit network/prefix, advance by 2^host_bits, repeat until the end is covered.',
	tool_ip_range_to_cidr_example_title: 'Example',
	tool_ip_range_to_cidr_example:
		'Input: 192.168.1.0 - 192.168.1.255. Output: 192.168.1.0/24. Non-aligned input 10.0.0.10 - 10.0.0.20 yields 10.0.0.10/31, 10.0.0.12/30, 10.0.0.16/30, and 10.0.0.20/32.',
	tool_ip_range_to_cidr_usecases_title: 'When this helps',
	tool_ip_range_to_cidr_usecase_1:
		'Turn a vendor ACL export written as start–end into CIDR rules your firewall will accept.',
	tool_ip_range_to_cidr_usecase_2:
		'Paste cloud console ranges that only allow CIDR notation into security groups without guessing a single oversized block.',
	tool_ip_range_to_cidr_usecase_3:
		'Aggregate several private ranges from a ticket (one line each) into a compact prefix list for Ansible or Terraform variables.',
	tool_ip_range_to_cidr_faq_q1: 'Why do some ranges return more than one CIDR?',
	tool_ip_range_to_cidr_faq_a1:
		'If start or end is not on a clean block boundary, no single prefix covers exactly that interval. The tool emits several aligned prefixes that together cover every address and nothing outside the span.',
	tool_ip_range_to_cidr_faq_q2: 'What if I paste the higher address first?',
	tool_ip_range_to_cidr_faq_a2:
		'The page swaps start and end, shows a short hint, and still converts. You do not need to re-order by hand.',
	tool_ip_range_to_cidr_faq_q3: 'Can I mix IPv4 and IPv6?',
	tool_ip_range_to_cidr_faq_a3:
		'No. One conversion batch must be a single family. Convert IPv4 lines and IPv6 lines separately so a typo cannot silently drop a family.',
	tool_ip_range_to_cidr_faq_q4: 'How does multi-line CIDR aggregation work?',
	tool_ip_range_to_cidr_faq_a4:
		'Each non-empty line is a range (or a single IP). Every line is converted; results are listed in order. Lines are not merged across gaps — only contiguous coverage inside each range.',
	tool_ip_range_to_cidr_faq_q5: 'Are my addresses uploaded?',
	tool_ip_range_to_cidr_faq_a5:
		'No. Addresses stay on your device in this browser tab and are not uploaded to a server.',
	tool_ip_range_to_cidr_faq_q6: 'Where is “CIDR to IP range”?',
	tool_ip_range_to_cidr_faq_a6:
		'This page only converts ranges into prefixes. Expanding a CIDR into first/last (or a host list) is the reverse job and belongs on a separate tool when it ships.',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6 Addressing Architecture',
	tool_ip_range_to_cidr_disclaimer:
		'Output prefixes cover the closed IP interval you entered. This is not a routing-protocol simulator; verify critical ACL changes in your own lab.',
};

export default en;
