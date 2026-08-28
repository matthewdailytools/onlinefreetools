/**
 * i18n tool shard (terraform-cidrsubnet / zh)。
 * 当地检索：terraform cidrsubnet、cidrsubnet 计算、terraform 子网；H1 保留函数名。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_terraform_cidrsubnet_title: 'Terraform cidrsubnet — 算出 Terraform 会返回的子网 CIDR',
	tool_terraform_cidrsubnet_desc:
		'Terraform cidrsubnet 计算子网 CIDR。示例：10.1.2.0/24、4、15 → 10.1.2.240/28。浏览器内完成、不上服务器。',
	tool_terraform_cidrsubnet_description:
		'Terraform cidrsubnet 计算：填入父前缀、newbits、netnum，立刻得到子网 CIDR。示例：cidrsubnet("10.1.2.0/24", 4, 15) → 10.1.2.240/28。同页可算 cidrhost 与 cidrnetmask。数字留在本机浏览器，不上传服务器。',
	tool_terraform_cidrsubnet_article:
		'cidrsubnet 从父网段切出一块子网前缀，不是主机地址。newbits 是多借几位，不是「切成 4 个网」；netnum 从 0 起选第几块。cidrhost 才给出主机 IP；cidrnetmask 只对 IPv4 给出点分掩码。本页在浏览器里按 HashiCorp 规则求值，不是 terraform console，也不封装 Registry 模块。',
	tool_terraform_cidrsubnet_evaluate: '求值',
	tool_terraform_cidrsubnet_sample: '加载示例',
	tool_terraform_cidrsubnet_clear: '清空',
	tool_terraform_cidrsubnet_copy_cidr: '复制 CIDR',
	tool_terraform_cidrsubnet_copy_hcl: '复制 HCL',
	tool_terraform_cidrsubnet_copy_ip: '复制地址',
	tool_terraform_cidrsubnet_copy_done: '已复制',
	tool_terraform_cidrsubnet_prefix_label: '父前缀',
	tool_terraform_cidrsubnet_prefix_ph: '10.1.2.0/24',
	tool_terraform_cidrsubnet_newbits_label: 'newbits',
	tool_terraform_cidrsubnet_netnum_label: 'netnum',
	tool_terraform_cidrsubnet_result_cidr_label: '子网 CIDR',
	tool_terraform_cidrsubnet_result_hcl_label: 'HCL 调用',
	tool_terraform_cidrsubnet_result_len_label: '新前缀长度',
	tool_terraform_cidrsubnet_result_range_label: '合法 netnum',
	tool_terraform_cidrsubnet_result_bits_label: '位怎么拆',
	tool_terraform_cidrsubnet_table_title: '当前 newbits 下的全部 netnum',
	tool_terraform_cidrsubnet_table_col_netnum: 'netnum',
	tool_terraform_cidrsubnet_table_col_cidr: 'CIDR',
	tool_terraform_cidrsubnet_related_heading: '相关函数',
	tool_terraform_cidrsubnet_host_prefix_label: 'cidrhost 前缀',
	tool_terraform_cidrsubnet_hostnum_label: 'hostnum',
	tool_terraform_cidrsubnet_host_evaluate: '求值 cidrhost',
	tool_terraform_cidrsubnet_host_result_label: '主机地址',
	tool_terraform_cidrsubnet_netmask_prefix_label: 'cidrnetmask 前缀（仅 IPv4）',
	tool_terraform_cidrsubnet_netmask_evaluate: '求值 cidrnetmask',
	tool_terraform_cidrsubnet_netmask_result_label: '子网掩码',
	tool_terraform_cidrsubnet_err_empty: '请填写 CIDR 前缀，以及整数 newbits、netnum。',
	tool_terraform_cidrsubnet_err_prefix: '这不是合法 CIDR（需要 地址/长度，IPv4 或 IPv6）。',
	tool_terraform_cidrsubnet_err_newbits:
		'newbits 须为 ≥0 的整数，且「原前缀长度 + newbits」不能超过 32（IPv4）或 128（IPv6）。',
	tool_terraform_cidrsubnet_err_netnum:
		'newbits={nb} 只能放下 netnum 0–{max}；{nn} 装不下——Terraform 同样会拒绝。',
	tool_terraform_cidrsubnet_err_hostnum: 'hostnum 超出该前缀剩下的主机位。',
	tool_terraform_cidrsubnet_err_netmask_v6: 'cidrnetmask 只支持 IPv4。IPv6 请用 cidrsubnet 或 cidrhost。',
	tool_terraform_cidrsubnet_range_tpl: '0 – {max}',
	tool_terraform_cidrsubnet_bits_tpl:
		'父前缀 /{old} 再借 {nb} 位 → /{neu}。netnum {nn} 写入多借的位；剩下主机位 {hb}。',
	tool_terraform_cidrsubnet_how_title: '怎么用',
	tool_terraform_cidrsubnet_how_body:
		'先弄清你要的是子网前缀还是主机 IP，再把 HCL 里那三项填进来对照结果。',
	tool_terraform_cidrsubnet_how_item_1: '分清：cidrsubnet 给出子网前缀；要主机地址请用下面的 cidrhost。',
	tool_terraform_cidrsubnet_how_item_2: '粘贴 Terraform 变量里的父 CIDR（例如 10.1.2.0/24）。',
	tool_terraform_cidrsubnet_how_item_3: '填 newbits（多借几位）和 netnum（从 0 起的第几块）。',
	tool_terraform_cidrsubnet_how_item_4: '看子网 CIDR，复制 HCL，或拿去和 terraform console 对照。',
	tool_terraform_cidrsubnet_how_item_5: '若 netnum 装不进 newbits，页面会报错——Terraform 也会拒绝，不要抄错误结果。',
	tool_terraform_cidrsubnet_formula_title: '计算规则',
	tool_terraform_cidrsubnet_formula_body:
		'先把父地址规范成网络地址，再把 netnum 写入多借出的前缀位。IPv4 八位组若有前导零，按十进制读（与 HashiCorp 文档一致）。',
	tool_terraform_cidrsubnet_formula_item_1: '新长度 = 原长度 + newbits（IPv4 ≤32，IPv6 ≤128）。',
	tool_terraform_cidrsubnet_formula_item_2: 'netnum 必须满足 0 ≤ netnum < 2^newbits。',
	tool_terraform_cidrsubnet_formula_item_3: '网络地址 OR（netnum 左移剩余主机位数）。',
	tool_terraform_cidrsubnet_formula_item_4:
		'cidrhost 把 hostnum 写入主机位（负数从末尾倒数）。cidrnetmask 把 IPv4 前缀写成点分掩码。',
	tool_terraform_cidrsubnet_example_title: '示例',
	tool_terraform_cidrsubnet_example:
		'输入：前缀 10.1.2.0/24，newbits 4，netnum 15。输出：10.1.2.240/28。多借 4 位只能选 0–15；15 正好占满最后一字节的高 4 位，得到 240。',
	tool_terraform_cidrsubnet_usecases_title: '适合什么时候',
	tool_terraform_cidrsubnet_usecase_1:
		'写 VPC 子网前先预览：cidrsubnet(var.vpc_cidr, 8, count.index)，AZ0 对应 netnum 0。',
	tool_terraform_cidrsubnet_usecase_2:
		'对照官方手算 10.1.2.0/24 + 4 + 15 → 10.1.2.240/28，再用 cidrhost 取该 /28 的 1 号和 14 号主机。',
	tool_terraform_cidrsubnet_usecase_3:
		'切 IPv6 ULA：cidrsubnet("fd00:fd12:3456:7890::/56", 16, 162) → fd00:fd12:3456:7800:a200::/72。',
	tool_terraform_cidrsubnet_faq_q1: '为什么 netnum 填 16、newbits 是 4 会失败？',
	tool_terraform_cidrsubnet_faq_a1:
		'4 位只能表示 0–15。Terraform 不会绕回 0，而是直接报错。本页同样拒绝，避免你把永远 apply 不上的 CIDR 抄进 HCL。',
	tool_terraform_cidrsubnet_faq_q2: 'newbits=4 是不是切成 4 个子网？',
	tool_terraform_cidrsubnet_faq_a2:
		'不是。newbits 是多借的前缀位数。借 4 位会得到 16 个可选 netnum，子网比原来长 4 位（/24 变成 /28）。',
	tool_terraform_cidrsubnet_faq_q3: 'cidrhost 和 cidrsubnet 差在哪？',
	tool_terraform_cidrsubnet_faq_a3:
		'cidrsubnet 返回带长度的前缀；cidrhost 返回前缀里的一个主机地址。hostnum 为 0 是网络地址；负数从末尾数（cidrhost("10.0.0.0/8", -2) → 10.255.255.254）。',
	tool_terraform_cidrsubnet_faq_q4: 'cidrnetmask 为什么不接 IPv6？',
	tool_terraform_cidrsubnet_faq_a4:
		'HashiCorp 的 cidrnetmask 只支持 IPv4，返回 255.255.255.0 这种点分掩码。IPv6 请保留前缀长度，改用 cidrsubnet 或 cidrhost。',
	tool_terraform_cidrsubnet_faq_q5: '能算 cidrsubnets 或 hashicorp/subnets/cidr 模块吗？',
	tool_terraform_cidrsubnet_faq_a5:
		'不能。复数 cidrsubnets 会从 0 起连续分配多块；Registry 模块是另一套包装。本页一次只求值一个 cidrsubnet / cidrhost / cidrnetmask 调用。',
	tool_terraform_cidrsubnet_faq_q6: '前缀会上传吗？',
	tool_terraform_cidrsubnet_faq_a6:
		'不会。前缀和数字留在你的设备、当前浏览器标签页里，不上传服务器。若必须对齐某一版 CLI，仍以 terraform console 为准。',
	tool_terraform_cidrsubnet_ref_cidrsubnet_label: 'HashiCorp — cidrsubnet 函数',
	tool_terraform_cidrsubnet_ref_cidrhost_label: 'HashiCorp — cidrhost 函数',
	tool_terraform_cidrsubnet_ref_cidrnetmask_label: 'HashiCorp — cidrnetmask 函数',
	tool_terraform_cidrsubnet_ref_rfc_label: 'RFC 4632 — CIDR 前缀记法',
	tool_terraform_cidrsubnet_disclaimer:
		'结果目标对齐 HashiCorp 的 cidrsubnet / cidrhost / cidrnetmask。这不是 terraform console；若版本行为不一致，以官方文档为准。',
};

export default zh;
