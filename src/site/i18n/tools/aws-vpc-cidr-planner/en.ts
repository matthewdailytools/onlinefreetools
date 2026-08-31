/**
 * i18n tool shard (aws-vpc-cidr-planner / en).
 * Master: H1 = AWS VPC CIDR planner; vpc cidr block / 172.17 land in desc + FAQ.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_aws_vpc_cidr_planner_title: 'AWS VPC CIDR planner — Split a VPC into AZ subnets',
	tool_aws_vpc_cidr_planner_desc:
		'AWS VPC CIDR planner: paste 10.0.0.0/16 and pick 3 AZs for public/private subnet CIDRs. Runs on your device.',
	tool_aws_vpc_cidr_planner_description:
		'AWS VPC CIDR planner: paste a VPC CIDR (example 10.0.0.0/16) and choose 2 or 3 AZs to get public and private subnet CIDRs. Enforces AWS /16–/28 limits, subtracts five reserved addresses per subnet, and warns if the block overlaps 172.17.0.0/16 (Docker’s default bridge). Optional Azure reserved-address notes. Runs on your device, not uploaded to a server.',
	tool_aws_vpc_cidr_planner_article:
		'Turn a VPC CIDR into non-overlapping public and private subnets per Availability Zone. No AWS account is required; this is prefix arithmetic only.',
	tool_aws_vpc_cidr_planner_plan: 'Plan',
	tool_aws_vpc_cidr_planner_sample: 'Load sample',
	tool_aws_vpc_cidr_planner_clear: 'Clear',
	tool_aws_vpc_cidr_planner_copy: 'Copy table',
	tool_aws_vpc_cidr_planner_copy_done: 'Copied',
	tool_aws_vpc_cidr_planner_input_label: 'VPC CIDR',
	tool_aws_vpc_cidr_planner_input_ph: '10.0.0.0/16',
	tool_aws_vpc_cidr_planner_az_label: 'Availability Zones',
	tool_aws_vpc_cidr_planner_az_2: '2 AZs',
	tool_aws_vpc_cidr_planner_az_3: '3 AZs',
	tool_aws_vpc_cidr_planner_plat_label: 'Reserved-address rules',
	tool_aws_vpc_cidr_planner_plat_aws: 'AWS (five addresses per subnet)',
	tool_aws_vpc_cidr_planner_plat_azure: 'Azure-style (first four + last)',
	tool_aws_vpc_cidr_planner_result_label: 'Subnet plan',
	tool_aws_vpc_cidr_planner_col_role: 'Role',
	tool_aws_vpc_cidr_planner_col_cidr: 'CIDR',
	tool_aws_vpc_cidr_planner_col_usable: 'Usable IPs',
	tool_aws_vpc_cidr_planner_role_pub: 'AZ {n} public',
	tool_aws_vpc_cidr_planner_role_priv: 'AZ {n} private',
	tool_aws_vpc_cidr_planner_warn_docker:
		'This VPC overlaps 172.17.0.0/16, Docker’s default bridge. Hosts that also run Docker often see routing clashes.',
	tool_aws_vpc_cidr_planner_reserved_aws:
		'AWS reserves five addresses per subnet: network, +1 VPC router, +2 DNS, +3 future, and broadcast.',
	tool_aws_vpc_cidr_planner_reserved_azure:
		'Azure-style counting reserves the first four addresses and the last address in each subnet (still five).',
	tool_aws_vpc_cidr_planner_err_empty: 'Enter a VPC CIDR such as 10.0.0.0/16.',
	tool_aws_vpc_cidr_planner_err_parse: 'Could not parse that as an IPv4 CIDR.',
	tool_aws_vpc_cidr_planner_err_vpc: 'AWS VPC IPv4 CIDRs must be between /16 and /28 inclusive.',
	tool_aws_vpc_cidr_planner_err_fit:
		'This VPC is too small for {slots} equal subnets that stay within /28. Use a shorter VPC prefix or fewer AZs.',
	tool_aws_vpc_cidr_planner_err_ipv6: 'This planner is IPv4 VPC CIDRs only.',
	tool_aws_vpc_cidr_planner_how_title: 'How it works',
	tool_aws_vpc_cidr_planner_how_body:
		'An AWS VPC CIDR planner splits one VPC prefix into public and private subnets per AZ. You leave with CIDRs you can paste into a template—not a console login.',
	tool_aws_vpc_cidr_planner_how_item_1:
		'Know you are splitting a VPC CIDR into AZ subnets (not creating a real VPC in AWS).',
	tool_aws_vpc_cidr_planner_how_item_2: 'Paste a VPC CIDR such as 10.0.0.0/16 and choose 2 or 3 AZs (or Load sample).',
	tool_aws_vpc_cidr_planner_how_item_3: 'Read each public/private CIDR and the usable IP count after reserved addresses.',
	tool_aws_vpc_cidr_planner_how_item_4: 'If the 172.17.0.0/16 warning appears, pick a different VPC block when Docker runs on the same hosts.',
	tool_aws_vpc_cidr_planner_how_item_5:
		'To evaluate Terraform cidrsubnet() on one of those blocks, use the related Terraform cidrsubnet tool.',
	tool_aws_vpc_cidr_planner_formula_title: 'Formula',
	tool_aws_vpc_cidr_planner_formula_body:
		'Need 2×AZ equal subnets. Extra bits = ceil(log2(2×AZ)). Subnet prefix = VPC prefix + extra bits (must stay ≤28). Carve sequentially from the VPC network address. Usable IPs = 2^(32−subnetPrefix) − 5.',
	tool_aws_vpc_cidr_planner_formula_item_1: 'Reject VPC prefixes outside /16–/28 and reject IPv6.',
	tool_aws_vpc_cidr_planner_formula_item_2: 'First AZ-count blocks are public; the next AZ-count blocks are private, AZ order 1…N.',
	tool_aws_vpc_cidr_planner_formula_item_3: 'AWS reserved: network, router, DNS, future, broadcast. Azure-style uses the same count with different names.',
	tool_aws_vpc_cidr_planner_formula_item_4: 'Overlap with 172.17.0.0/16 is a warning, not a hard fail.',
	tool_aws_vpc_cidr_planner_example_title: 'Example',
	tool_aws_vpc_cidr_planner_example:
		'Input: 10.0.0.0/16, 3 AZs, AWS rules. Output six /19 subnets: 10.0.0.0/19 AZ1 public, 10.0.32.0/19 AZ2 public, 10.0.64.0/19 AZ3 public, 10.0.96.0/19 AZ1 private, 10.0.128.0/19 AZ2 private, 10.0.160.0/19 AZ3 private. Each has 8192−5 = 8187 usable IPs.',
	tool_aws_vpc_cidr_planner_usecases_title: 'When this helps',
	tool_aws_vpc_cidr_planner_usecase_1: 'Green-field account: carve 10.0.0.0/16 into three AZs before writing Terraform.',
	tool_aws_vpc_cidr_planner_usecase_2: 'Catch a plan that sits on 172.17.0.0/16 before Docker hosts fight the VPC router.',
	tool_aws_vpc_cidr_planner_usecase_3: 'Compare the printed /19s with a cidrsubnet(prefix, 3, netnum) hand check.',
	tool_aws_vpc_cidr_planner_faq_q1: 'Which VPC CIDR sizes does AWS allow?',
	tool_aws_vpc_cidr_planner_faq_a1:
		'IPv4 VPC CIDRs are /16 through /28. Subnets in this planner also stay at /28 or shorter (more addresses). That matches AWS documentation for IPv4 VPC CIDR blocks.',
	tool_aws_vpc_cidr_planner_faq_q2: 'Why are five addresses missing in each subnet?',
	tool_aws_vpc_cidr_planner_faq_a2:
		'AWS keeps the network address, the VPC router (+1), DNS (+2), a future use address (+3), and broadcast (last). Usable hosts are total minus five. Azure-style counting also subtracts five (first four + last).',
	tool_aws_vpc_cidr_planner_faq_q3: 'Why warn about 172.17.0.0/16?',
	tool_aws_vpc_cidr_planner_faq_a3:
		'Docker’s default bridge uses 172.17.0.0/16. If the VPC (or a subnet) overlaps that space, containers on the same host often cannot reach VPC resources. The planner still shows the table and adds a warning.',
	tool_aws_vpc_cidr_planner_faq_q4: 'How is this different from Terraform cidrsubnet?',
	tool_aws_vpc_cidr_planner_faq_a4:
		'This page allocates a whole public/private layout. cidrsubnet() evaluates one function call (prefix, newbits, netnum). Use the related Terraform tool when you already know newbits and netnum.',
	tool_aws_vpc_cidr_planner_faq_q5: 'Does the Azure switch create an Azure VNet?',
	tool_aws_vpc_cidr_planner_faq_a5:
		'No. It only changes the reserved-address explanation. The H1 stays AWS VPC CIDR planner. It does not call Azure or AWS APIs.',
	tool_aws_vpc_cidr_planner_faq_q6: 'Do I need an AWS account? Are CIDRs uploaded?',
	tool_aws_vpc_cidr_planner_faq_a6:
		'No account. Prefixes stay on your device in this browser tab and are not uploaded to a server.',
	tool_aws_vpc_cidr_planner_ref_vpc_label: 'AWS Docs — VPC CIDR blocks',
	tool_aws_vpc_cidr_planner_ref_subnet_label: 'AWS Docs — Subnet sizing',
	tool_aws_vpc_cidr_planner_disclaimer:
		'Figures follow published AWS IPv4 VPC/subnet sizing (reserved addresses). This is not official AWS architecture advice; confirm against current documentation before production.',
};

export default en;
