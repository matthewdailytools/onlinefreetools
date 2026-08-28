/**
 * i18n tool shard (terraform-cidrsubnet / en).
 * Master locale: H1 keeps “Terraform cidrsubnet”; cidrhost / cidrnetmask land in desc, FAQ, and the below-fold form.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — Get the child CIDR Terraform would return',
	tool_terraform_cidrsubnet_desc:
		'Terraform cidrsubnet: get the child CIDR from a parent prefix. Example: 10.1.2.0/24, 4, 15 → 10.1.2.240/28.',
	tool_terraform_cidrsubnet_description:
		'Terraform cidrsubnet: enter a parent prefix, newbits, and netnum to calculate the child CIDR. Example: cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28. Also evaluate cidrhost and cidrnetmask. Numbers stay on your device and are not uploaded to a server.',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet takes a parent CIDR and returns one child prefix. newbits is how many extra prefix bits you borrow; netnum picks which subnet, starting at 0. cidrhost returns a host address in a prefix; cidrnetmask returns an IPv4 dotted mask. This page matches HashiCorp function rules in the browser — it is not terraform console and does not wrap the hashicorp/subnets/cidr module.',
	tool_terraform_cidrsubnet_evaluate: 'Evaluate',
	tool_terraform_cidrsubnet_sample: 'Load sample',
	tool_terraform_cidrsubnet_clear: 'Clear',
	tool_terraform_cidrsubnet_copy_cidr: 'Copy CIDR',
	tool_terraform_cidrsubnet_copy_hcl: 'Copy HCL',
	tool_terraform_cidrsubnet_copy_ip: 'Copy address',
	tool_terraform_cidrsubnet_copy_done: 'Copied',
	tool_terraform_cidrsubnet_prefix_label: 'Parent prefix',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: 'Child CIDR',
	tool_terraform_cidrsubnet_result_hcl_label: 'HCL call',
	tool_terraform_cidrsubnet_result_len_label: 'New prefix length',
	tool_terraform_cidrsubnet_result_range_label: 'Allowed netnum',
	tool_terraform_cidrsubnet_result_bits_label: 'Bit split',
	tool_terraform_cidrsubnet_table_title: 'All netnums for this newbits',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: 'Related functions',
	tool_terraform_cidrsubnet_host_prefix_label: 'cidrhost prefix',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: 'Evaluate cidrhost',
	tool_terraform_cidrsubnet_host_result_label: 'Host address',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'cidrnetmask prefix (IPv4)',
	tool_terraform_cidrsubnet_netmask_evaluate: 'Evaluate cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: 'Netmask',
	tool_terraform_cidrsubnet_err_empty: 'Enter a CIDR prefix and integer newbits and netnum.',
	tool_terraform_cidrsubnet_err_prefix: 'That is not a CIDR prefix (need address/length, IPv4 or IPv6).',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits must be a whole number ≥ 0, and prefix length plus newbits cannot exceed 32 (IPv4) or 128 (IPv6).',
	tool_terraform_cidrsubnet_err_netnum:
		'newbits={nb} only holds netnum 0–{max}; {nn} does not fit — Terraform would reject this too.',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum does not fit in the remaining host bits of that prefix.',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask is IPv4-only. Use cidrsubnet or cidrhost for IPv6.',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'Parent /{old} plus {nb} bits → /{neu}. netnum {nn} fills the extra bits; remaining host bits: {hb}.',
	tool_terraform_cidrsubnet_how_title: 'How it works',
	tool_terraform_cidrsubnet_how_body:
		'cidrsubnet returns a child network prefix, not a host IP. Fill the same three arguments you would pass in HCL, then read the CIDR Terraform would return.',
	tool_terraform_cidrsubnet_how_item_1:
		'Understand that cidrsubnet returns a child network prefix — cidrhost is the function that returns a host IP.',
	tool_terraform_cidrsubnet_how_item_2: 'Paste the parent CIDR from your Terraform variable (example 10.1.2.0/24).',
	tool_terraform_cidrsubnet_how_item_3: 'Set newbits (extra prefix bits) and netnum (which subnet, starting at 0).',
	tool_terraform_cidrsubnet_how_item_4: 'Read the child CIDR, copy the HCL call, or compare with terraform console.',
	tool_terraform_cidrsubnet_how_item_5:
		'If newbits cannot hold netnum, read the error — Terraform would reject the same values.',
	tool_terraform_cidrsubnet_formula_title: 'Formula',
	tool_terraform_cidrsubnet_formula_body:
		'Zero the host bits of the parent, then write netnum into the extra prefix bits. Leading zeros in IPv4 octets are read as decimal, matching HashiCorp’s documented historical behavior.',
	tool_terraform_cidrsubnet_formula_item_1: 'new_prefix_length = parent_prefix_length + newbits (IPv4 ≤ 32, IPv6 ≤ 128).',
	tool_terraform_cidrsubnet_formula_item_2: 'netnum must satisfy 0 ≤ netnum < 2^newbits (integer).',
	tool_terraform_cidrsubnet_formula_item_3:
		'Canonicalize the parent to its network address, then OR netnum shifted by the remaining host bits.',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost ORs a host number into the host bits (negative hostnum counts from the end). cidrnetmask is the IPv4 prefix written as a dotted mask.',
	tool_terraform_cidrsubnet_example_title: 'Example',
	tool_terraform_cidrsubnet_example:
		'Input: prefix 10.1.2.0/24, newbits 4, netnum 15. Output: 10.1.2.240/28. Same as HashiCorp’s docs: four extra bits hold 0–15, and 15 becomes the high nibble of the last octet (240).',
	tool_terraform_cidrsubnet_usecases_title: 'When this helps',
	tool_terraform_cidrsubnet_usecase_1:
		'Preview AWS or GCP VPC subnets from cidrsubnet(var.vpc_cidr, 8, count.index) before you apply — AZ0 is netnum 0, AZ1 is 1.',
	tool_terraform_cidrsubnet_usecase_2:
		'Check the official worked example 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28, then use cidrhost on that /28 for hosts 1 and 14.',
	tool_terraform_cidrsubnet_usecase_3:
		'Slice an IPv6 ULA the same way: cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72.',
	tool_terraform_cidrsubnet_faq_q1: 'Does newbits=4 mean “split into four subnets”?',
	tool_terraform_cidrsubnet_faq_a1:
		'No. newbits is how many extra prefix bits you borrow. 4 extra bits make 2^4 = 16 possible netnums (0–15), and the child is four bits longer (a /24 becomes /28).',
	tool_terraform_cidrsubnet_faq_q2: 'Why does netnum 16 fail when newbits is 4?',
	tool_terraform_cidrsubnet_faq_a2:
		'Four bits only store 0–15. Terraform errors instead of wrapping. This page does the same so you do not copy a CIDR that would never apply.',
	tool_terraform_cidrsubnet_faq_q3: 'How is cidrhost different from cidrsubnet?',
	tool_terraform_cidrsubnet_faq_a3:
		'cidrsubnet returns a prefix (network + length). cidrhost returns one host address inside a prefix. hostnum 0 is the network address; a negative hostnum counts from the end (cidrhost("10.0.0.0/8", -2) → 10.255.255.254).',
	tool_terraform_cidrsubnet_faq_q4: 'Why does cidrnetmask reject IPv6?',
	tool_terraform_cidrsubnet_faq_a4:
		'HashiCorp’s cidrnetmask is IPv4-only and returns a dotted mask such as 255.255.255.0. For IPv6 keep the prefix length (/64) and use cidrsubnet or cidrhost.',
	tool_terraform_cidrsubnet_faq_q5: 'Do you evaluate cidrsubnets or the hashicorp/subnets/cidr module?',
	tool_terraform_cidrsubnet_faq_a5:
		'No. cidrsubnets (plural) allocates several consecutive prefixes automatically from zero. The Registry module is a different helper. This page evaluates one cidrsubnet / cidrhost / cidrnetmask call at a time.',
	tool_terraform_cidrsubnet_faq_q6: 'Are my prefixes uploaded?',
	tool_terraform_cidrsubnet_faq_a6:
		'No. Prefixes and numbers stay on your device in this browser tab and are not uploaded to a server. This is not a substitute for terraform console if you need a specific CLI version.',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — cidrsubnet function',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — cidrhost function',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — cidrnetmask function',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — CIDR prefix notation',
	tool_terraform_cidrsubnet_disclaimer:
		'Results aim to match HashiCorp cidrsubnet, cidrhost, and cidrnetmask semantics. This is not terraform console; check official docs when versions disagree.',
};

export default en;
