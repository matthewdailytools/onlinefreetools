/**
 * i18n tool shard (cidr-cheat-sheet / en).
 * Master: H1 = CIDR cheat sheet; chart / comptia / what-is land in desc + FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_cidr_cheat_sheet_title: 'CIDR cheat sheet — Click a prefix to see mask and hosts',
	tool_cidr_cheat_sheet_desc:
		'CIDR cheat sheet: click /8–/32 for mask, wildcard, and host count. Same table as a CIDR chart. Stays on your device.',
	tool_cidr_cheat_sheet_description:
		'CIDR cheat sheet: click any prefix from /8 to /32 for subnet mask, wildcard, and usable host count. Example: /24 → 255.255.255.0 and 254 usable hosts. Includes a CompTIA-oriented column and /31 /32 footnotes. Same table people mean by a CIDR chart or CIDR notation chart. To expand a specific block, use CIDR to IP range. Runs in your browser, not uploaded to a server.',
	tool_cidr_cheat_sheet_article:
		'A clickable IPv4 prefix table: mask, wildcard, and hosts. CompTIA-style rows are marked. This is a cheat sheet, not a calculator for an arbitrary host address.',
	tool_cidr_cheat_sheet_sample: 'Load sample',
	tool_cidr_cheat_sheet_clear: 'Clear highlight',
	tool_cidr_cheat_sheet_jump: 'Show',
	tool_cidr_cheat_sheet_jump_label: 'Jump to prefix',
	tool_cidr_cheat_sheet_jump_ph: '24',
	tool_cidr_cheat_sheet_result_label: 'Selected prefix',
	tool_cidr_cheat_sheet_col_prefix: 'Prefix',
	tool_cidr_cheat_sheet_col_mask: 'Subnet mask',
	tool_cidr_cheat_sheet_col_wild: 'Wildcard',
	tool_cidr_cheat_sheet_col_hosts: 'Usable hosts',
	tool_cidr_cheat_sheet_col_comptia: 'CompTIA',
	tool_cidr_cheat_sheet_comptia_yes: 'Often on Network+ style charts',
	tool_cidr_cheat_sheet_comptia_no: '—',
	tool_cidr_cheat_sheet_lbl_total: 'Total addresses',
	tool_cidr_cheat_sheet_note_31: '/31: both addresses are usable (RFC 3021 point-to-point). There is no unused network/broadcast pair.',
	tool_cidr_cheat_sheet_note_32: '/32: a single host. Network equals that address; no classic broadcast.',
	tool_cidr_cheat_sheet_err_jump: 'Enter an integer prefix from 8 to 32.',
	tool_cidr_cheat_sheet_how_title: 'How it works',
	tool_cidr_cheat_sheet_how_body:
		'A CIDR cheat sheet (the same job as a CIDR chart) lets you look up slash length against dotted mask and host count. Click a row instead of scanning a PDF.',
	tool_cidr_cheat_sheet_how_item_1:
		'Know you are looking up a CIDR prefix against mask and host count—not expanding an arbitrary IP.',
	tool_cidr_cheat_sheet_how_item_2: 'Click a table row from /8 to /32, or type a prefix and press Show (or Load sample for /24).',
	tool_cidr_cheat_sheet_how_item_3: 'Read subnet mask, wildcard, usable hosts, and whether the row is often on CompTIA-style charts.',
	tool_cidr_cheat_sheet_how_item_4: 'For /31 and /32, read the footnote: usable counts do not follow the classic “minus two” rule.',
	tool_cidr_cheat_sheet_how_item_5:
		'To expand a concrete block such as 192.168.1.0/24 into network and broadcast, use the related CIDR to IP range tool.',
	tool_cidr_cheat_sheet_formula_title: 'Rules',
	tool_cidr_cheat_sheet_formula_body:
		'Mask bits = 2^32 − 2^(32−n). Wildcard is the bitwise NOT of the mask. Usable hosts: /32 → 1; /31 → 2 (RFC 3021); otherwise 2^(32−n) − 2. Total addresses = 2^(32−n).',
	tool_cidr_cheat_sheet_formula_item_1: 'This table covers IPv4 prefixes /8 through /32 only.',
	tool_cidr_cheat_sheet_formula_item_2: 'CompTIA marks common exam prefixes; it is not an official exam outline.',
	tool_cidr_cheat_sheet_formula_item_3: '/31 and /32 footnotes override the classic unused network/broadcast pair.',
	tool_cidr_cheat_sheet_formula_item_4: 'CIDR stands for Classless Inter-Domain Routing (see FAQ). Veterinary CIDR is a different word.',
	tool_cidr_cheat_sheet_example_title: 'Example',
	tool_cidr_cheat_sheet_example:
		'Select /24. Output: mask 255.255.255.0, wildcard 0.0.0.255, usable hosts 254, total addresses 256. CompTIA column marked. Same numbers as the default sample.',
	tool_cidr_cheat_sheet_usecases_title: 'When this helps',
	tool_cidr_cheat_sheet_usecase_1:
		'Scan /24 /25 /26 before a Network+ style chart question without opening a static PDF.',
	tool_cidr_cheat_sheet_usecase_2: 'Check how many usable hosts a /28 firewall object actually has before writing the ACL.',
	tool_cidr_cheat_sheet_usecase_3: 'Explain to a colleague that “slash 24” means 256 addresses and mask 255.255.255.0.',
	tool_cidr_cheat_sheet_faq_q1: 'What does CIDR stand for?',
	tool_cidr_cheat_sheet_faq_a1:
		'Classless Inter-Domain Routing. The slash (for example /24) is the prefix length. This page is a cheat sheet of those lengths, not a “what is networking” course.',
	tool_cidr_cheat_sheet_faq_q2: 'Which prefixes matter for CompTIA-style charts?',
	tool_cidr_cheat_sheet_faq_a2:
		'Common Network+ style tables highlight /8, /16, /24 and nearby lengths such as /25–/28 and /30. The CompTIA column marks those rows. It is not an official CompTIA outline.',
	tool_cidr_cheat_sheet_faq_q3: 'How are /31 and /32 host counts calculated?',
	tool_cidr_cheat_sheet_faq_a3:
		'/32 is one host. /31 follows RFC 3021: both addresses are usable on a point-to-point link. Other lengths subtract two for network and broadcast.',
	tool_cidr_cheat_sheet_faq_q4: 'Is this the veterinary CIDR implant?',
	tool_cidr_cheat_sheet_faq_a4:
		'No. In farming, CIDR can mean a hormone implant for cattle. This page is only the networking cheat sheet (slash prefixes and masks).',
	tool_cidr_cheat_sheet_faq_q5: 'Can I expand 192.168.1.37/24 into a broadcast address here?',
	tool_cidr_cheat_sheet_faq_a5:
		'Not on this table. Use the related CIDR to IP range calculator for a specific block. This cheat sheet only looks up /n → mask and host count.',
	tool_cidr_cheat_sheet_faq_q6: 'Are lookups uploaded?',
	tool_cidr_cheat_sheet_faq_a6:
		'No. Clicks stay on your device in this browser tab and are not uploaded to a server.',
	tool_cidr_cheat_sheet_ref_rfc4632_label: 'RFC 4632 — Classless Inter-domain Routing',
	tool_cidr_cheat_sheet_ref_rfc3021_label: 'RFC 3021 — Using 31-Bit Prefixes on IPv4 Point-to-Point Links',
	tool_cidr_cheat_sheet_disclaimer:
		'Figures follow common IPv4 CIDR arithmetic (including RFC 3021 for /31). The CompTIA column is a study hint, not an official exam outline. This is not a routing advisor.',
};

export default en;
