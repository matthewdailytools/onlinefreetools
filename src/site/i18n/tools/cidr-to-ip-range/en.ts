/**
 * i18n tool shard (cidr-to-ip-range / en).
 * Master: H1 = CIDR to IP range; notation calculator / mask / expand land in desc + FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_cidr_to_ip_range_title: 'CIDR to IP range — Expand a prefix into usable addresses',
	tool_cidr_to_ip_range_desc:
		'CIDR to IP range: paste 192.168.1.0/24 for network, broadcast, usable hosts, and mask. Runs on your device.',
	tool_cidr_to_ip_range_description:
		'CIDR to IP range: paste an IPv4 CIDR (example 192.168.1.0/24) to calculate network, broadcast, usable hosts, host count, and subnet mask. Also convert mask ↔ prefix, check if an IP is in the block, and expand addresses with a safe row limit. Same job as a CIDR notation calculator—runs on your device, not uploaded to a server.',
	tool_cidr_to_ip_range_article:
		'Paste an IPv4 CIDR to see network address, broadcast, usable first/last hosts, host count, subnet mask, and wildcard. Optional modes convert mask ↔ prefix, test contains/overlap, or expand addresses up to a safe limit.',
	tool_cidr_to_ip_range_calculate: 'Calculate',
	tool_cidr_to_ip_range_sample: 'Load sample',
	tool_cidr_to_ip_range_clear: 'Clear',
	tool_cidr_to_ip_range_copy: 'Copy fields',
	tool_cidr_to_ip_range_copy_done: 'Copied',
	tool_cidr_to_ip_range_mode_label: 'Mode',
	tool_cidr_to_ip_range_mode_range: 'Prefix → range',
	tool_cidr_to_ip_range_mode_mask: 'Mask ↔ prefix',
	tool_cidr_to_ip_range_mode_check: 'Contains / overlap',
	tool_cidr_to_ip_range_mode_expand: 'Expand (capped)',
	tool_cidr_to_ip_range_input_label: 'IPv4 CIDR',
	tool_cidr_to_ip_range_input_ph: '192.168.1.0/24',
	tool_cidr_to_ip_range_mask_label: 'Subnet mask (dotted)',
	tool_cidr_to_ip_range_mask_ph: '255.255.255.0',
	tool_cidr_to_ip_range_second_label: 'IP or second CIDR',
	tool_cidr_to_ip_range_second_ph: '192.168.1.50 or 192.168.1.128/25',
	tool_cidr_to_ip_range_result_label: 'Result',
	tool_cidr_to_ip_range_lbl_network: 'Network',
	tool_cidr_to_ip_range_lbl_broadcast: 'Broadcast',
	tool_cidr_to_ip_range_lbl_first: 'First usable',
	tool_cidr_to_ip_range_lbl_last: 'Last usable',
	tool_cidr_to_ip_range_lbl_hosts: 'Host count',
	tool_cidr_to_ip_range_lbl_mask: 'Subnet mask',
	tool_cidr_to_ip_range_lbl_wildcard: 'Wildcard mask',
	tool_cidr_to_ip_range_lbl_prefix: 'Prefix length',
	tool_cidr_to_ip_range_lbl_normalized: 'Normalized CIDR',
	tool_cidr_to_ip_range_norm_hint: 'Host bits were non-zero; shown values use the network address.',
	tool_cidr_to_ip_range_expand_limit:
		'Expand stopped at the safety limit ({limit} rows). Use a longer prefix or raise the limit later.',
	tool_cidr_to_ip_range_check_in: 'Address is inside the CIDR.',
	tool_cidr_to_ip_range_check_out: 'Address is outside the CIDR.',
	tool_cidr_to_ip_range_overlap_equal: 'Blocks are identical.',
	tool_cidr_to_ip_range_overlap_contain: 'First CIDR contains the second.',
	tool_cidr_to_ip_range_overlap_inside: 'First CIDR is inside the second.',
	tool_cidr_to_ip_range_overlap_overlap: 'Blocks overlap partially.',
	tool_cidr_to_ip_range_overlap_disjoint: 'Blocks are disjoint.',
	tool_cidr_to_ip_range_mask_to_prefix: 'Prefix from mask: /{n}',
	tool_cidr_to_ip_range_prefix_to_mask: 'Mask from prefix: {mask}',
	tool_cidr_to_ip_range_err_empty: 'Enter an IPv4 CIDR such as 192.168.1.0/24.',
	tool_cidr_to_ip_range_err_parse: 'Could not parse that as an IPv4 address or CIDR.',
	tool_cidr_to_ip_range_err_prefix: 'Prefix length must be an integer from 0 to 32.',
	tool_cidr_to_ip_range_err_ipv6: 'This page is IPv4 only. Use an IPv6 CIDR tool for IPv6 prefixes.',
	tool_cidr_to_ip_range_err_mask: 'That dotted mask is not a contiguous IPv4 subnet mask.',
	tool_cidr_to_ip_range_err_second: 'Enter a second IPv4 address or CIDR for contains/overlap.',
	tool_cidr_to_ip_range_how_title: 'How it works',
	tool_cidr_to_ip_range_how_body:
		'Turn a CIDR prefix into an IP range: network, broadcast, usable hosts, and mask. That is the same job people mean by a CIDR notation calculator.',
	tool_cidr_to_ip_range_how_item_1:
		'Know you are turning a CIDR prefix into an IP range (network, broadcast, usable hosts)—the same job as a CIDR notation calculator.',
	tool_cidr_to_ip_range_how_item_2: 'Paste an IPv4 CIDR such as 192.168.1.0/24 (or use Load sample).',
	tool_cidr_to_ip_range_how_item_3:
		'Read network, broadcast, usable first/last, host count, and subnet mask; copy what you need.',
	tool_cidr_to_ip_range_how_item_4: 'Optionally switch to mask conversion, contains/overlap, or capped expand.',
	tool_cidr_to_ip_range_how_item_5:
		'For start–end → CIDR, use the related IP range to CIDR tool; for IPv6 use a dedicated IPv6 CIDR page when available.',
	tool_cidr_to_ip_range_formula_title: 'Formula',
	tool_cidr_to_ip_range_formula_body:
		'Mask = 2^32 − 2^(32−prefix). Network = address AND mask. Broadcast = network OR NOT mask. Usable hosts follow /31 (RFC 3021) and /32 special cases.',
	tool_cidr_to_ip_range_formula_item_1: 'Parse a.b.c.d/nn; reject IPv6 and prefixes outside 0–32.',
	tool_cidr_to_ip_range_formula_item_2: 'Compute mask bits, then network and broadcast with bitwise AND/OR.',
	tool_cidr_to_ip_range_formula_item_3:
		'Usable: /32 → single host; /31 → both addresses (RFC 3021); else first=network+1, last=broadcast−1.',
	tool_cidr_to_ip_range_formula_item_4: 'If host bits were set in the input, normalize to the network address and show a hint.',
	tool_cidr_to_ip_range_example_title: 'Example',
	tool_cidr_to_ip_range_example:
		'Input: 192.168.1.0/24. Output: network 192.168.1.0, broadcast 192.168.1.255, usable 192.168.1.1–192.168.1.254, mask 255.255.255.0, hosts 254. Input 192.168.1.37/24 normalizes to 192.168.1.0/24.',
	tool_cidr_to_ip_range_usecases_title: 'When this helps',
	tool_cidr_to_ip_range_usecase_1:
		'Expand a security-group CIDR into first/last addresses before writing an ACL that still uses ranges.',
	tool_cidr_to_ip_range_usecase_2:
		'Hand a colleague the dotted mask and usable host count from a /24 without opening a spreadsheet.',
	tool_cidr_to_ip_range_usecase_3:
		'Check a Proxmox or bridge plan: confirm network and broadcast for the CIDR you intend to assign.',
	tool_cidr_to_ip_range_faq_q1: 'How are /31 and /32 usable hosts counted?',
	tool_cidr_to_ip_range_faq_a1:
		'/32 is a single host (network equals that address; no classic broadcast). /31 follows RFC 3021: both addresses are usable for point-to-point; there is no unused network/broadcast pair.',
	tool_cidr_to_ip_range_faq_q2: 'What if I paste 192.168.1.37/24?',
	tool_cidr_to_ip_range_faq_a2:
		'The tool normalizes to 192.168.1.0/24, shows a short hint that host bits were ignored, and still prints network, broadcast, and usable range for that block.',
	tool_cidr_to_ip_range_faq_q3: 'Is this the same as a CIDR notation calculator?',
	tool_cidr_to_ip_range_faq_a3:
		'Yes for the common task: turn CIDR notation into network/broadcast/usable hosts and mask. The page title uses “CIDR to IP range” because that describes the result; calculator-style searches land on the same tool.',
	tool_cidr_to_ip_range_faq_q4: 'Can I expand every IP in a large block?',
	tool_cidr_to_ip_range_faq_a4:
		'Use Expand mode. Listing stops at a safety limit (1024 rows) so a /8 cannot freeze the tab. Narrow the prefix or use the summary fields instead.',
	tool_cidr_to_ip_range_faq_q5: 'Where do I convert start–end into CIDR?',
	tool_cidr_to_ip_range_faq_a5:
		'That reverse job is on the related IP range to CIDR tool. This page only expands a prefix into range fields (and optional capped lists).',
	tool_cidr_to_ip_range_faq_q6: 'Are my addresses uploaded?',
	tool_cidr_to_ip_range_faq_a6:
		'No. Addresses stay on your device in this browser tab and are not uploaded to a server.',
	tool_cidr_to_ip_range_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_to_ip_range_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_to_ip_range_disclaimer:
		'Results follow common IPv4 CIDR arithmetic (including RFC 3021 for /31). This is not a routing or firewall policy advisor; verify critical changes in your own lab.',
};

export default en;
