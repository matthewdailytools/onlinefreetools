/**
 * i18n tool shard (ipv6-cidr / en).
 * Master: H1 = IPv6 CIDR calculator; notation / nibble / /64 land in desc + FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_ipv6_cidr_title: 'IPv6 CIDR calculator — Expand a prefix into its address range',
	tool_ipv6_cidr_desc:
		'IPv6 CIDR calculator: paste 2001:db8:1::/64 for network, last address, and compressed form. Runs on your device.',
	tool_ipv6_cidr_description:
		'IPv6 CIDR calculator: paste a prefix (example 2001:db8:1::/64) to get the network address, last address, address count, and RFC 5952 compressed/expanded forms. Warns when the prefix is not nibble-aligned. Covers /64 LAN, /127 point-to-point, and /128 host. Runs on your device, not uploaded to a server.',
	tool_ipv6_cidr_article:
		'Turn an IPv6 CIDR into network and last addresses, plus compressed and expanded text. The page also flags prefixes that are not on a nibble (4-bit) boundary, which matters for reverse DNS and many allocation habits.',
	tool_ipv6_cidr_calculate: 'Calculate',
	tool_ipv6_cidr_sample: 'Load sample',
	tool_ipv6_cidr_clear: 'Clear',
	tool_ipv6_cidr_copy: 'Copy fields',
	tool_ipv6_cidr_copy_done: 'Copied',
	tool_ipv6_cidr_input_label: 'IPv6 CIDR',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: 'Result',
	tool_ipv6_cidr_lbl_network: 'Network (compressed)',
	tool_ipv6_cidr_lbl_network_exp: 'Network (expanded)',
	tool_ipv6_cidr_lbl_last: 'Last address (compressed)',
	tool_ipv6_cidr_lbl_last_exp: 'Last address (expanded)',
	tool_ipv6_cidr_lbl_prefix: 'Prefix length',
	tool_ipv6_cidr_lbl_count: 'Address count',
	tool_ipv6_cidr_lbl_nibble: 'Nibble-aligned',
	tool_ipv6_cidr_nibble_yes: 'Yes — prefix length is a multiple of 4.',
	tool_ipv6_cidr_nibble_no:
		'No — this prefix is not on a 4-bit (nibble) boundary. Reverse DNS (ip6.arpa) and many ISP allocations expect /4, /8, … /64, /68 steps.',
	tool_ipv6_cidr_note_64: '/64 is the usual LAN prefix (SLAAC and most host subnets).',
	tool_ipv6_cidr_note_127: '/127 is the point-to-point prefix (RFC 6164): two addresses, no unused pair.',
	tool_ipv6_cidr_note_128: '/128 is a single host.',
	tool_ipv6_cidr_err_empty: 'Enter an IPv6 CIDR such as 2001:db8:1::/64.',
	tool_ipv6_cidr_err_parse: 'Could not parse that as an IPv6 address or CIDR.',
	tool_ipv6_cidr_err_prefix: 'Prefix length must be an integer from 0 to 128.',
	tool_ipv6_cidr_err_ipv4: 'This page is IPv6 only. Use the CIDR to IP range tool for IPv4 prefixes.',
	tool_ipv6_cidr_how_title: 'How it works',
	tool_ipv6_cidr_how_body:
		'An IPv6 CIDR calculator turns a prefix into a network range: first address, last address, size, and RFC 5952 text. That is the same job as looking up IPv6 CIDR notation for a block you already have.',
	tool_ipv6_cidr_how_item_1:
		'Know you are turning an IPv6 CIDR prefix into a network range (not an IPv6 connectivity test).',
	tool_ipv6_cidr_how_item_2: 'Paste an IPv6 CIDR such as 2001:db8:1::/64 (or use Load sample).',
	tool_ipv6_cidr_how_item_3:
		'Read the compressed and expanded network, last address, and address count; copy what you need.',
	tool_ipv6_cidr_how_item_4:
		'If the prefix is not a multiple of 4, read the nibble warning (reverse DNS and allocation habits).',
	tool_ipv6_cidr_how_item_5:
		'For IPv4 prefixes use CIDR to IP range; to fold start–end addresses into CIDRs use IP range to CIDR.',
	tool_ipv6_cidr_formula_title: 'Formula',
	tool_ipv6_cidr_formula_body:
		'Parse the IPv6 text (one “::” compression). Mask = 2^128 − 2^(128−prefix). Network = address AND mask. Last = network OR NOT mask. Compress with RFC 5952 (longest zero run, lowercase). Address count is 2^(128−prefix).',
	tool_ipv6_cidr_formula_item_1: 'Reject IPv4 literals and prefixes outside 0–128.',
	tool_ipv6_cidr_formula_item_2: 'AND/OR the 128-bit values to get network and last addresses.',
	tool_ipv6_cidr_formula_item_3:
		'Special sizes: /128 → 1 address; /127 → 2 addresses (RFC 6164); /64 → 2^64 (typical LAN).',
	tool_ipv6_cidr_formula_item_4:
		'Nibble alignment: prefix modulo 4 equals 0. Other lengths still calculate, but show a warning.',
	tool_ipv6_cidr_example_title: 'Example',
	tool_ipv6_cidr_example:
		'Input: 2001:db8:1::/64. Output: network 2001:db8:1:: (expanded 2001:0db8:0001:0000:0000:0000:0000:0000), last 2001:db8:1:0:ffff:ffff:ffff:ffff, count 2^64, nibble-aligned yes.',
	tool_ipv6_cidr_usecases_title: 'When this helps',
	tool_ipv6_cidr_usecase_1:
		'Plan an office LAN as a /64 and copy the compressed network address into router config.',
	tool_ipv6_cidr_usecase_2:
		'Check a router point-to-point link that should be /127 (RFC 6164) so you only expect two addresses.',
	tool_ipv6_cidr_usecase_3:
		'Normalize documentation prefixes such as 2001:db8::/32 into RFC 5952 compressed form before a screenshot.',
	tool_ipv6_cidr_faq_q1: 'What does “not nibble-aligned” mean?',
	tool_ipv6_cidr_faq_a1:
		'IPv6 reverse DNS and many allocations step in 4-bit (nibble) units: /4, /8, … /64, /68. A prefix such as /67 still has a valid network range, but ip6.arpa zones and some ISP tools expect nibble steps. This calculator still shows the range and adds a warning.',
	tool_ipv6_cidr_faq_q2: 'How do /64, /127, and /128 differ?',
	tool_ipv6_cidr_faq_a2:
		'/64 is the usual LAN size. /127 is the two-address point-to-point prefix (RFC 6164). /128 is a single host. The result panel notes these sizes when you paste them.',
	tool_ipv6_cidr_faq_q3: 'Is this the same as IPv6 CIDR notation lookup?',
	tool_ipv6_cidr_faq_a3:
		'Yes for the common task: turn IPv6 CIDR notation into network/last addresses and canonical text. A separate “IPv6 CIDR chart” of every prefix is not on this page; use this calculator for one block, and the IPv4 CIDR cheat sheet for dotted-mask tables.',
	tool_ipv6_cidr_faq_q4: 'Where do I expand an IPv4 CIDR?',
	tool_ipv6_cidr_faq_a4:
		'Use the related CIDR to IP range tool. This page rejects IPv4 literals on purpose so a search for IPv6 CIDR does not land on IPv4 fields.',
	tool_ipv6_cidr_faq_q5: 'Does this test whether IPv6 works on my network?',
	tool_ipv6_cidr_faq_a5:
		'No. Connectivity testers (such as test-ipv6 style pages) answer a different job. This tool only does prefix arithmetic in the browser.',
	tool_ipv6_cidr_faq_q6: 'Are my addresses uploaded?',
	tool_ipv6_cidr_faq_a6:
		'No. Addresses stay on your device in this browser tab and are not uploaded to a server.',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6 Addressing Architecture',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — A Recommendation for IPv6 Address Text Representation',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — Using 127-Bit IPv6 Prefixes on Inter-Router Links',
	tool_ipv6_cidr_disclaimer:
		'Results follow common IPv6 CIDR arithmetic (RFC 4291, RFC 5952, RFC 6164). This is not a routing or ISP allocation advisor; verify critical changes in your own lab.',
};

export default en;
