/**
 * i18n tool shard (aws-vpc-cidr-planner / zh)。
 * 当地主词「AWS VPC CIDR 规划器」；VPC 网段 / 可用区 落 desc。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_aws_vpc_cidr_planner_title: 'AWS VPC CIDR 规划器 — 按可用区切开公有和私有子网',
	tool_aws_vpc_cidr_planner_desc:
		'AWS VPC CIDR 规划：粘贴 10.0.0.0/16，选 3 个可用区，得到公有/私有子网。浏览器内计算，不上传服务器。',
	tool_aws_vpc_cidr_planner_description:
		'AWS VPC CIDR 规划器：粘贴一条 VPC CIDR（示例 10.0.0.0/16），选择 2 或 3 个可用区，得到不重叠的公有和私有子网。遵守 AWS /16–/28 限制，每子网扣除 5 个保留地址，并在与 172.17.0.0/16（Docker 默认桥）重叠时警告。可选 Azure 风格保留说明。地址留在本机，不上传服务器。',
	tool_aws_vpc_cidr_planner_article:
		'把一条 VPC 网段按可用区切成可粘贴的子网 CIDR。不需要 AWS 账号，只做前缀算术。',
	tool_aws_vpc_cidr_planner_plan: '规划',
	tool_aws_vpc_cidr_planner_sample: '加载示例',
	tool_aws_vpc_cidr_planner_clear: '清空',
	tool_aws_vpc_cidr_planner_copy: '复制表格',
	tool_aws_vpc_cidr_planner_copy_done: '已复制',
	tool_aws_vpc_cidr_planner_input_label: 'VPC CIDR',
	tool_aws_vpc_cidr_planner_input_ph: '10.0.0.0/16',
	tool_aws_vpc_cidr_planner_az_label: '可用区数量',
	tool_aws_vpc_cidr_planner_az_2: '2 个可用区',
	tool_aws_vpc_cidr_planner_az_3: '3 个可用区',
	tool_aws_vpc_cidr_planner_plat_label: '保留地址规则',
	tool_aws_vpc_cidr_planner_plat_aws: 'AWS（每子网 5 个地址）',
	tool_aws_vpc_cidr_planner_plat_azure: 'Azure 风格（前四个 + 最后一个）',
	tool_aws_vpc_cidr_planner_result_label: '子网方案',
	tool_aws_vpc_cidr_planner_col_role: '角色',
	tool_aws_vpc_cidr_planner_col_cidr: 'CIDR',
	tool_aws_vpc_cidr_planner_col_usable: '可用 IP',
	tool_aws_vpc_cidr_planner_role_pub: '可用区 {n} 公有',
	tool_aws_vpc_cidr_planner_role_priv: '可用区 {n} 私有',
	tool_aws_vpc_cidr_planner_warn_docker:
		'这块 VPC 与 172.17.0.0/16 重叠，那是 Docker 默认桥。同一主机跑 Docker 时经常出现路由冲突。',
	tool_aws_vpc_cidr_planner_reserved_aws:
		'AWS 每子网保留 5 个地址：网络、+1 VPC 路由器、+2 DNS、+3 预留、广播。',
	tool_aws_vpc_cidr_planner_reserved_azure:
		'Azure 风格计数保留前四个地址和最后一个（同样是 5 个）。',
	tool_aws_vpc_cidr_planner_err_empty: '请输入 VPC CIDR，例如 10.0.0.0/16。',
	tool_aws_vpc_cidr_planner_err_parse: '无法解析为 IPv4 CIDR。',
	tool_aws_vpc_cidr_planner_err_vpc: 'AWS VPC 的 IPv4 CIDR 必须在 /16 到 /28（含）。',
	tool_aws_vpc_cidr_planner_err_fit: '这条 VPC 装不下 {slots} 条且不超过 /28 的等长子网。请缩短前缀或减少可用区。',
	tool_aws_vpc_cidr_planner_err_ipv6: '本规划器只处理 IPv4 VPC CIDR。',
	tool_aws_vpc_cidr_planner_how_title: '怎么规划',
	tool_aws_vpc_cidr_planner_how_body:
		'AWS VPC CIDR 规划器把一条 VPC 前缀按可用区切成公有/私有子网。你带走的是能贴进模板的 CIDR，不是控制台登录。',
	tool_aws_vpc_cidr_planner_how_item_1: '先确认任务是切 VPC 网段，不是在 AWS 里真的建 VPC。',
	tool_aws_vpc_cidr_planner_how_item_2: '粘贴如 10.0.0.0/16，选择 2 或 3 个可用区（或加载示例）。',
	tool_aws_vpc_cidr_planner_how_item_3: '阅读每条公有/私有 CIDR，以及扣掉保留地址后的可用 IP。',
	tool_aws_vpc_cidr_planner_how_item_4: '若出现 172.17.0.0/16 警告，同一主机跑 Docker 时请换一块 VPC。',
	tool_aws_vpc_cidr_planner_how_item_5: '要对其中一块做 Terraform cidrsubnet() 求值，请用相关 Terraform 工具。',
	tool_aws_vpc_cidr_planner_formula_title: '计算公式',
	tool_aws_vpc_cidr_planner_formula_body:
		'需要 2×可用区 条等长子网。额外位数 = ceil(log2(2×AZ))。子网前缀 = VPC 前缀 + 额外位（须 ≤28）。从 VPC 网络地址顺序切开。可用 IP = 2^(32−子网前缀) − 5。',
	tool_aws_vpc_cidr_planner_formula_item_1: '拒绝 /16–/28 之外的 VPC 前缀，拒绝 IPv6。',
	tool_aws_vpc_cidr_planner_formula_item_2: '前 AZ 条为公有，后 AZ 条为私有，可用区序号 1…N。',
	tool_aws_vpc_cidr_planner_formula_item_3: 'AWS 保留网络、路由器、DNS、预留、广播。Azure 风格数量相同、名称不同。',
	tool_aws_vpc_cidr_planner_formula_item_4: '与 172.17.0.0/16 重叠只警告，不阻止出表。',
	tool_aws_vpc_cidr_planner_example_title: '示例',
	tool_aws_vpc_cidr_planner_example:
		'输入：10.0.0.0/16，3 个可用区，AWS 规则。输出六条 /19：10.0.0.0/19 可用区1 公有，10.0.32.0/19 可用区2 公有，10.0.64.0/19 可用区3 公有，10.0.96.0/19 可用区1 私有，10.0.128.0/19 可用区2 私有，10.0.160.0/19 可用区3 私有。每条可用 IP 8192−5 = 8187。',
	tool_aws_vpc_cidr_planner_usecases_title: '什么时候用得上',
	tool_aws_vpc_cidr_planner_usecase_1: '新账户把 10.0.0.0/16 切成三个可用区，再写 Terraform。',
	tool_aws_vpc_cidr_planner_usecase_2: '发现方案落在 172.17.0.0/16 上，避免和 Docker 抢网段。',
	tool_aws_vpc_cidr_planner_usecase_3: '把打印出的 /19 和 cidrsubnet(prefix, 3, netnum) 手算对照。',
	tool_aws_vpc_cidr_planner_faq_q1: 'AWS 允许哪些 VPC CIDR 大小？',
	tool_aws_vpc_cidr_planner_faq_a1: 'IPv4 VPC CIDR 是 /16 到 /28。本规划器里的子网也不会长于 /28（地址更少）。这与 AWS 文档一致。',
	tool_aws_vpc_cidr_planner_faq_q2: '为什么每个子网少 5 个地址？',
	tool_aws_vpc_cidr_planner_faq_a2: 'AWS 保留网络、VPC 路由器（+1）、DNS（+2）、预留（+3）和广播（最后一个）。可用主机 = 总数减 5。Azure 风格也是减 5（前四 + 最后）。',
	tool_aws_vpc_cidr_planner_faq_q3: '为什么警告 172.17.0.0/16？',
	tool_aws_vpc_cidr_planner_faq_a3: 'Docker 默认桥用这块。VPC 若重叠，同一主机上的容器经常访问不到 VPC 资源。本页仍出表，并加警告。',
	tool_aws_vpc_cidr_planner_faq_q4: '和 Terraform cidrsubnet 有什么不同？',
	tool_aws_vpc_cidr_planner_faq_a4: '本页给出整套公有/私有布局。cidrsubnet() 只求值一次函数。已经知道 newbits 和 netnum 时用相关 Terraform 工具。',
	tool_aws_vpc_cidr_planner_faq_q5: 'Azure 开关会创建 Azure VNet 吗？',
	tool_aws_vpc_cidr_planner_faq_a5: '不会。它只改保留地址说明。H1 仍是 AWS VPC CIDR 规划器。不调用 Azure 或 AWS API。',
	tool_aws_vpc_cidr_planner_faq_q6: '需要 AWS 账号吗？CIDR 会上传吗？',
	tool_aws_vpc_cidr_planner_faq_a6: '不需要账号。前缀留在你这台设备的浏览器标签页里，不会上传到服务器。',
	tool_aws_vpc_cidr_planner_ref_vpc_label: 'AWS 文档 — VPC CIDR 块',
	tool_aws_vpc_cidr_planner_ref_subnet_label: 'AWS 文档 — 子网规模',
	tool_aws_vpc_cidr_planner_disclaimer:
		'数字遵循已公布的 AWS IPv4 VPC/子网规模（含保留地址）。这不是 AWS 官方架构建议；上线前请对照现行文档。',
};

export default zh;
