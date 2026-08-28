/**
 * i18n tool shard (private-cidr-ranges / en).
 * Master: H1 = Private CIDR ranges; private IP / Tailscale / RFC1918 land in desc, FAQ, table.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_private_cidr_ranges_title:
		'Private CIDR ranges — Check if an IP or prefix is private or special-use',
	tool_private_cidr_ranges_desc:
		'Private CIDR ranges: check RFC1918, CGNAT, and ULA blocks. Sample: 100.64.1.10 → shared address space.',
	tool_private_cidr_ranges_description:
		'Private CIDR ranges: paste an IP or CIDR to see RFC1918 private IP ranges, CGNAT (100.64/10), IPv6 ULA, and documentation blocks. Example: 100.64.1.10 → shared address space (RFC 6598). Browse the reference table, including Tailscale’s use of CGNAT space. Checks stay on your device and are not uploaded to a server.',
	tool_private_cidr_ranges_article:
		'Paste an address or CIDR to match built-in private and special-use prefixes (RFC1918, CGNAT, link-local, loopback, documentation, IPv6 ULA). Click a table row to load that prefix. This page does not expand host lists.',
	tool_private_cidr_ranges_check: 'Check',
	tool_private_cidr_ranges_sample: 'Load sample',
	tool_private_cidr_ranges_clear: 'Clear',
	tool_private_cidr_ranges_copy: 'Copy summary',
	tool_private_cidr_ranges_copy_done: 'Copied',
	tool_private_cidr_ranges_input_label: 'IP address or CIDR',
	tool_private_cidr_ranges_input_ph: '100.64.1.10 or 10.0.0.0/8',
	tool_private_cidr_ranges_filter_all: 'All',
	tool_private_cidr_ranges_filter_v4: 'IPv4 table',
	tool_private_cidr_ranges_filter_v6: 'IPv6 table',
	tool_private_cidr_ranges_result_label: 'Matches',
	tool_private_cidr_ranges_table_title: 'Reference table (click a row)',
	tool_private_cidr_ranges_col_cidr: 'CIDR',
	tool_private_cidr_ranges_col_name: 'Name',
	tool_private_cidr_ranges_col_family: 'Family',
	tool_private_cidr_ranges_col_spec: 'Spec',
	tool_private_cidr_ranges_no_match:
		'Not in the built-in private/special-use list (may be global unicast or another space).',
	tool_private_cidr_ranges_tailscale_tip:
		'Tailscale and other products often use this CGNAT space (100.64.0.0/10).',
	tool_private_cidr_ranges_err_empty: 'Enter an IPv4/IPv6 address or CIDR.',
	tool_private_cidr_ranges_err_parse: 'Could not parse that as an IP address or CIDR.',
	tool_private_cidr_ranges_name_rfc1918_10: 'RFC1918 private',
	tool_private_cidr_ranges_name_rfc1918_172: 'RFC1918 private',
	tool_private_cidr_ranges_name_rfc1918_192: 'RFC1918 private',
	tool_private_cidr_ranges_name_cgnat: 'CGNAT shared address space',
	tool_private_cidr_ranges_name_loopback: 'Loopback',
	tool_private_cidr_ranges_name_linklocal_v4: 'Link-local',
	tool_private_cidr_ranges_name_doc_testnet1: 'Documentation (TEST-NET-1)',
	tool_private_cidr_ranges_name_doc_testnet2: 'Documentation (TEST-NET-2)',
	tool_private_cidr_ranges_name_doc_testnet3: 'Documentation (TEST-NET-3)',
	tool_private_cidr_ranges_name_ula: 'IPv6 ULA',
	tool_private_cidr_ranges_name_linklocal_v6: 'IPv6 link-local',
	tool_private_cidr_ranges_name_doc_v6: 'IPv6 documentation',
	tool_private_cidr_ranges_note_rfc1918_10: 'Private use — 10.0.0.0/8 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_172: 'Private use — 172.16.0.0/12 (RFC 1918).',
	tool_private_cidr_ranges_note_rfc1918_192: 'Private use — 192.168.0.0/16 (RFC 1918).',
	tool_private_cidr_ranges_note_cgnat: 'Shared address space for carrier-grade NAT (RFC 6598). Not RFC1918.',
	tool_private_cidr_ranges_note_loopback: 'Host loopback — 127.0.0.0/8.',
	tool_private_cidr_ranges_note_linklocal_v4: 'Link-local APIPA — 169.254.0.0/16.',
	tool_private_cidr_ranges_note_doc_testnet1: 'Documentation only — do not use in production (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet2: 'Documentation only — do not use in production (RFC 5737).',
	tool_private_cidr_ranges_note_doc_testnet3: 'Documentation only — do not use in production (RFC 5737).',
	tool_private_cidr_ranges_note_ula: 'Unique local addresses — fc00::/7 (RFC 4193).',
	tool_private_cidr_ranges_note_linklocal_v6: 'IPv6 link-local — fe80::/10.',
	tool_private_cidr_ranges_note_doc_v6: 'Documentation prefix — 2001:db8::/32.',
	tool_private_cidr_ranges_how_title: 'How it works',
	tool_private_cidr_ranges_how_body:
		'You are checking whether an address sits in a private or special-use CIDR (RFC1918, CGNAT, ULA, documentation…), not counting hosts. Paste an address, read the match, or click the reference table.',
	tool_private_cidr_ranges_how_item_1:
		'Know you are classifying private/special-use blocks — not expanding a host list.',
	tool_private_cidr_ranges_how_item_2: 'Paste an IPv4/IPv6 address or CIDR (example 100.64.1.10).',
	tool_private_cidr_ranges_how_item_3:
		'Read the matched category, CIDR, and RFC note (and the Tailscale tip when CGNAT matches).',
	tool_private_cidr_ranges_how_item_4: 'Optionally click a row in the reference table to check that prefix.',
	tool_private_cidr_ranges_how_item_5:
		'If nothing matches, treat it as outside this private/special list — verify before calling it “private.”',
	tool_private_cidr_ranges_formula_title: 'Rules',
	tool_private_cidr_ranges_formula_body:
		'Parse the input as an address or prefix, then test membership against the built-in table. Longer (more specific) matches are listed first.',
	tool_private_cidr_ranges_formula_item_1: 'IPv4 uses 32-bit integers; IPv6 uses 128-bit values. Families never mix.',
	tool_private_cidr_ranges_formula_item_2:
		'For a bare address: match every table CIDR that contains it.',
	tool_private_cidr_ranges_formula_item_3:
		'For a CIDR input: match table entries that fully contain that prefix (subset test).',
	tool_private_cidr_ranges_formula_item_4:
		'Sort hits by prefix length descending so the most specific block appears first.',
	tool_private_cidr_ranges_example_title: 'Example',
	tool_private_cidr_ranges_example:
		'Input: 100.64.1.10. Output: CGNAT shared address space 100.64.0.0/10 (RFC 6598), with a note that Tailscale and similar products often use this space. Input 10.0.0.5 matches RFC1918 10.0.0.0/8.',
	tool_private_cidr_ranges_usecases_title: 'When this helps',
	tool_private_cidr_ranges_usecase_1:
		'Pick a VPC or lab block and confirm it is real RFC1918 private space before opening firewall holes.',
	tool_private_cidr_ranges_usecase_2:
		'See 100.x addresses and separate CGNAT / Tailscale space from RFC1918 private ranges.',
	tool_private_cidr_ranges_usecase_3:
		'Check an IPv6 ULA or 2001:db8 documentation address before treating it as production routing.',
	tool_private_cidr_ranges_faq_q1: 'What are the three RFC1918 private CIDR ranges?',
	tool_private_cidr_ranges_faq_a1:
		'10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. They are the classic private IP ranges written in CIDR form.',
	tool_private_cidr_ranges_faq_q2: 'Is 100.64.0.0/10 “private”? How does Tailscale relate?',
	tool_private_cidr_ranges_faq_a2:
		'It is shared address space for carrier-grade NAT (RFC 6598), not RFC1918. Tailscale and other overlays often use this CGNAT CIDR; this page only labels the space — it is not a Tailscale console.',
	tool_private_cidr_ranges_faq_q3: 'What is IPv6 ULA (fc00::/7)?',
	tool_private_cidr_ranges_faq_a3:
		'Unique local addresses for local networks. They are not global Internet unicast; do not expect them to route on the public Internet.',
	tool_private_cidr_ranges_faq_q4: 'Why flag documentation prefixes?',
	tool_private_cidr_ranges_faq_a4:
		'Blocks such as 192.0.2.0/24 and 2001:db8::/32 are reserved for examples and docs. Using them in production breaks connectivity expectations.',
	tool_private_cidr_ranges_faq_q5: 'Does this expand hosts or upload my addresses?',
	tool_private_cidr_ranges_faq_a5:
		'No host list or broadcast expansion here — that belongs on a CIDR-to-range tool. Checks stay on your device and are not uploaded to a server.',
	tool_private_cidr_ranges_ref_rfc1918_label: 'RFC 1918 — Address Allocation for Private Internets',
	tool_private_cidr_ranges_ref_rfc6598_label: 'RFC 6598 — IANA-Reserved IPv4 Prefix for Shared Address Space',
	tool_private_cidr_ranges_ref_rfc4193_label: 'RFC 4193 — Unique Local IPv6 Unicast Addresses',
	tool_private_cidr_ranges_ref_rfc5737_label: 'RFC 5737 — IPv4 Address Blocks Reserved for Documentation',
	tool_private_cidr_ranges_disclaimer:
		'Matches follow published RFCs for private and special-use space. This is not routing or firewall policy advice; verify critical changes in your own lab.',
};

export default en;
