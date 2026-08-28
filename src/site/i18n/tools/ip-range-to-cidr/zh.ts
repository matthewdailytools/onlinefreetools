/**
 * i18n tool shard (ip-range-to-cidr / zh)。
 * 当地主词「IP 段转 CIDR」；次词落 desc/FAQ；非 en 直搬。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_ip_range_to_cidr_title: 'IP 段转 CIDR — 把起止地址收成前缀列表',
	tool_ip_range_to_cidr_desc:
		'IP 段转 CIDR：把起止地址收成覆盖前缀。示例：192.168.1.0–192.168.1.255 → 192.168.1.0/24。浏览器内计算，不上传服务器。',
	tool_ip_range_to_cidr_description:
		'把 IP 范围转成 CIDR：粘贴起止地址（或一行一段）得到覆盖前缀。示例：192.168.1.0–192.168.1.255 → 192.168.1.0/24。对不齐边界会拆成多条；多行可做 CIDR 汇总。地址留在本机浏览器内处理，不上传服务器。',
	tool_ip_range_to_cidr_article:
		'把防火墙或工单里常见的「起始–结束」地址，收成可写入规则的 CIDR 前缀。边界未对齐时会给出多条前缀，而不是硬套一个过大掩码。支持 IPv4 / IPv6，同批不要混族。',
	tool_ip_range_to_cidr_convert: '转换',
	tool_ip_range_to_cidr_sample: '加载示例',
	tool_ip_range_to_cidr_clear: '清空',
	tool_ip_range_to_cidr_copy: '复制 CIDR',
	tool_ip_range_to_cidr_copy_done: '已复制',
	tool_ip_range_to_cidr_input_label: 'IP 段（每行一段）',
	tool_ip_range_to_cidr_input_ph: '192.168.1.0 - 192.168.1.255',
	tool_ip_range_to_cidr_result_label: 'CIDR 前缀',
	tool_ip_range_to_cidr_meta_label: '摘要',
	tool_ip_range_to_cidr_meta_tpl: '{n} 条前缀 · {family}',
	tool_ip_range_to_cidr_swap_hint: '起始地址大于结束地址，已自动对调后再转换。',
	tool_ip_range_to_cidr_err_empty: '请至少输入一段 IP 范围（起始 - 结束），每行一段。',
	tool_ip_range_to_cidr_err_parse: '这一行无法识别为 IP 或起止范围。',
	tool_ip_range_to_cidr_err_mixed: '同一次转换不要混用 IPv4 与 IPv6。',
	tool_ip_range_to_cidr_err_limit: '生成的 CIDR 条数超过安全上限，请缩小范围后再试。',
	tool_ip_range_to_cidr_how_title: '怎么用',
	tool_ip_range_to_cidr_how_body:
		'目标是得到能盖住闭区间每一个地址的 CIDR 列表，方便贴进 ACL、安全组。按供应商导出的写法粘贴起止即可。',
	tool_ip_range_to_cidr_how_item_1: '先弄清：结果是覆盖前缀列表；对不齐时会有多条，不是猜一个「大概的」掩码。',
	tool_ip_range_to_cidr_how_item_2: '按「A - B」粘贴起止，或一行一段做汇总。',
	tool_ip_range_to_cidr_how_item_3: '点转换，核对列表后一键复制。',
	tool_ip_range_to_cidr_how_item_4: '若起止写反会看到对调提示；混族则改成同一协议族再转。',
	tool_ip_range_to_cidr_formula_title: '规则',
	tool_ip_range_to_cidr_formula_body:
		'从当前地址走到终点：每次取「对齐允许」且「不越出剩余跨度」的最大 2 的幂块，输出地址/前缀长度，再前进。',
	tool_ip_range_to_cidr_formula_item_1: '端点解析为整数（IPv4 32 位，IPv6 128 位），且必须同族。',
	tool_ip_range_to_cidr_formula_item_2: '若起始大于结束，先交换并给出提示。',
	tool_ip_range_to_cidr_formula_item_3: '可用主机位数 = 当前地址尾零位数 ∩ 剩余长度的 2 的幂上限。',
	tool_ip_range_to_cidr_formula_item_4: '写出 network/prefix，前进 2^主机位，直到盖住终点。',
	tool_ip_range_to_cidr_example_title: '示例',
	tool_ip_range_to_cidr_example:
		'输入：192.168.1.0 - 192.168.1.255。输出：192.168.1.0/24。对不齐时如 10.0.0.10 - 10.0.0.20，会得到 10.0.0.10/31、10.0.0.12/30、10.0.0.16/30、10.0.0.20/32。',
	tool_ip_range_to_cidr_usecases_title: '适合什么场景',
	tool_ip_range_to_cidr_usecase_1: '厂商 ACL 导出只有起止，防火墙却要求 CIDR 时，直接收成可粘贴规则。',
	tool_ip_range_to_cidr_usecase_2: '云安全组只收 CIDR，把控制台里的起止段转过去，避免手填过大网段。',
	tool_ip_range_to_cidr_usecase_3: '工单里多段私网（一行一段）做 CIDR 汇总，再写进自动化变量。',
	tool_ip_range_to_cidr_faq_q1: '起止写反了怎么办？',
	tool_ip_range_to_cidr_faq_a1: '页面会自动对调并提示，无需你手工改顺序。',
	tool_ip_range_to_cidr_faq_q2: '为什么有的范围会得到多条 CIDR？',
	tool_ip_range_to_cidr_faq_a2: '起止若不在整齐块边界上，单条前缀无法精确覆盖。工具会拆成多条对齐前缀，合起来正好盖住区间。',
	tool_ip_range_to_cidr_faq_q3: '能不能 IPv4 和 IPv6 混在一起转？',
	tool_ip_range_to_cidr_faq_a3: '不能。同批必须同一族，分开转换，避免静默丢掉某一族。',
	tool_ip_range_to_cidr_faq_q4: '多行汇总怎么理解？',
	tool_ip_range_to_cidr_faq_a4: '每行各自转换；结果按行顺序列出。行与行之间的空隙不会硬合并。',
	tool_ip_range_to_cidr_faq_q5: '地址会上传吗？',
	tool_ip_range_to_cidr_faq_a5: '不会。地址留在你这台设备的浏览器标签页里，不上传服务器。',
	tool_ip_range_to_cidr_faq_q6: '「CIDR 转 IP 段」在哪？',
	tool_ip_range_to_cidr_faq_a6: '本页只做范围→前缀。把 CIDR 展开成起止（或主机列表）是反向工具，另页提供。',
	tool_ip_range_to_cidr_ref_rfc4632_label: 'RFC 4632 — 无类域间路由（CIDR）',
	tool_ip_range_to_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6 寻址体系',
	tool_ip_range_to_cidr_disclaimer:
		'输出前缀覆盖你输入的闭区间。这不是路由协议仿真；关键 ACL 请在自己的环境复核。',
};

export default zh;
