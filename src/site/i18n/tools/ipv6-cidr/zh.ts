/**
 * i18n tool shard (ipv6-cidr / zh)。
 * 当地主词「IPv6 CIDR 计算器」；次词落 desc/FAQ；非 en 直搬。
 */
import type { SiteLangDict } from '../../../types';

const zh: SiteLangDict = {
	tool_ipv6_cidr_title: 'IPv6 CIDR 计算器 — 把前缀展开成可用网段'
	tool_ipv6_cidr_desc:
		'IPv6 CIDR 计算器：粘贴 2001:db8:1::/64，得到网段、末地址和压缩写法。浏览器内计算，不上传服务器。',
	tool_ipv6_cidr_description:
		'IPv6 CIDR 计算器：粘贴一条 IPv6 前缀（示例 2001:db8:1::/64），立刻得到网段地址、末地址、地址数量，以及 RFC 5952 压缩/展开写法。前缀不是 4 的倍数时会提示 nibble 边界。覆盖 /64 局域网、/127 点对点、/128 单主机。地址留在本机，不上传服务器。',
	tool_ipv6_cidr_article:
		'把已经写好的 IPv6 CIDR 变成可复制的网段和末地址，并给出规范压缩文本。半字节（nibble）不对齐时只警告，不算错。',
	tool_ipv6_cidr_calculate: '计算',
	tool_ipv6_cidr_sample: '加载示例',
	tool_ipv6_cidr_clear: '清空',
	tool_ipv6_cidr_copy: '复制结果',
	tool_ipv6_cidr_copy_done: '已复制',
	tool_ipv6_cidr_input_label: 'IPv6 CIDR',
	tool_ipv6_cidr_input_ph: '2001:db8:1::/64',
	tool_ipv6_cidr_result_label: '结果',
	tool_ipv6_cidr_lbl_network: '网段（压缩）',
	tool_ipv6_cidr_lbl_network_exp: '网段（展开）',
	tool_ipv6_cidr_lbl_last: '末地址（压缩）',
	tool_ipv6_cidr_lbl_last_exp: '末地址（展开）',
	tool_ipv6_cidr_lbl_prefix: '前缀长度',
	tool_ipv6_cidr_lbl_count: '地址数量',
	tool_ipv6_cidr_lbl_nibble: '半字节对齐',
	tool_ipv6_cidr_nibble_yes: '是 — 前缀长度是 4 的倍数。',
	tool_ipv6_cidr_nibble_no:
		'否 — 此前缀不在 4 位（nibble）边界上。反向 DNS（ip6.arpa）和不少运营商分配习惯按 /4、/8…/64、/68 步进。',
	tool_ipv6_cidr_note_64: '/64 是常见局域网前缀（SLAAC 与多数主机子网）。',
	tool_ipv6_cidr_note_127: '/127 是点对点前缀（RFC 6164）：一共两个地址，没有闲置的网络/广播对。',
	tool_ipv6_cidr_note_128: '/128 是单主机。',
	tool_ipv6_cidr_err_empty: '请输入 IPv6 CIDR，例如 2001:db8:1::/64。',
	tool_ipv6_cidr_err_parse: '无法把这段文字解析成 IPv6 地址或 CIDR。',
	tool_ipv6_cidr_err_prefix: '前缀长度必须是 0 到 128 的整数。',
	tool_ipv6_cidr_err_ipv4: '本页只处理 IPv6。IPv4 前缀请用「CIDR 转 IP 范围」工具。',
	tool_ipv6_cidr_how_title: '怎么算',
	tool_ipv6_cidr_how_body:
		'IPv6 CIDR 计算器做的事很具体：把一条 IPv6 前缀展开成网段和末地址，并给出压缩记法。这和查 IPv6 CIDR 记法是同一件事，不是测你能不能上 IPv6。',
	tool_ipv6_cidr_how_item_1: '先确认任务是算 IPv6 网段，不是做 IPv6 连通性测试。',
	tool_ipv6_cidr_how_item_2: '粘贴如 2001:db8:1::/64 的 IPv6 CIDR（或点「加载示例」）。',
	tool_ipv6_cidr_how_item_3: '查看压缩/展开后的网段、末地址和地址数量，按需复制。',
	tool_ipv6_cidr_how_item_4: '若前缀不是 4 的倍数，阅读半字节警告（反向解析和分配习惯）。',
	tool_ipv6_cidr_how_item_5: 'IPv4 前缀去「CIDR 转 IP 范围」；起止地址收成前缀去「IP 段转 CIDR」。',
	tool_ipv6_cidr_formula_title: '计算公式',
	tool_ipv6_cidr_formula_body:
		'解析 IPv6 文本（只允许一次「::」）。掩码 = 2^128 − 2^(128−前缀)。网段 = 地址 AND 掩码。末地址 = 网段 OR NOT 掩码。按 RFC 5952 压缩（最长连续 0 段、小写）。地址数是 2^(128−前缀)。',
	tool_ipv6_cidr_formula_item_1: '拒绝 IPv4 字面量和超出 0–128 的前缀。',
	tool_ipv6_cidr_formula_item_2: '对 128 位做 AND/OR，得到网段和末地址。',
	tool_ipv6_cidr_formula_item_3: '特殊长度：/128 → 1 个地址；/127 → 2 个（RFC 6164）；/64 → 2^64（常见局域网）。',
	tool_ipv6_cidr_formula_item_4: '半字节对齐：前缀对 4 取余为 0。其他长度仍计算，但给出警告。',
	tool_ipv6_cidr_example_title: '示例',
	tool_ipv6_cidr_example:
		'输入：2001:db8:1::/64。输出：网段 2001:db8:1::（展开 2001:0db8:0001:0000:0000:0000:0000:0000），末地址 2001:db8:1:0:ffff:ffff:ffff:ffff，数量 2^64，半字节对齐：是。',
	tool_ipv6_cidr_usecases_title: '什么时候用得上',
	tool_ipv6_cidr_usecase_1: '给办公网划 /64，把压缩后的网段地址贴进路由器配置。',
	tool_ipv6_cidr_usecase_2: '核对接力链路是否该写成 /127（RFC 6164），确认只有两个地址。',
	tool_ipv6_cidr_usecase_3: '把教材里的 2001:db8::/32 整理成 RFC 5952 压缩写法再截图。',
	tool_ipv6_cidr_faq_q1: '「半字节不对齐」是什么意思？',
	tool_ipv6_cidr_faq_a1:
		'IPv6 反向解析和不少分配按 4 位一步：/4、/8…/64、/68。/67 这类前缀网段仍然合法，但 ip6.arpa 和部分运营商工具更习惯半字节步进。本页仍给出范围，并加一句警告。',
	tool_ipv6_cidr_faq_q2: '/64、/127、/128 有什么差别？',
	tool_ipv6_cidr_faq_a2:
		'/64 是常见局域网。/127 是点对点两条地址（RFC 6164）。/128 是单主机。粘贴这些长度时，结果区会多一行说明。',
	tool_ipv6_cidr_faq_q3: '这和查 IPv6 CIDR 记法是一回事吗？',
	tool_ipv6_cidr_faq_a3:
		'对「手里已有一条前缀、要网段和规范写法」来说是。本页不做 IPv4 掩码总表；IPv4 对照请用 CIDR 速查表，单块 IPv4 展开请用 CIDR 转 IP 范围。',
	tool_ipv6_cidr_faq_q4: 'IPv4 的 CIDR 去哪算？',
	tool_ipv6_cidr_faq_a4: '用相关工具「CIDR 转 IP 范围」。本页会拒绝 IPv4 字面量，避免搜 IPv6 却落到 IPv4 字段。',
	tool_ipv6_cidr_faq_q5: '能测我能不能用 IPv6 上网吗？',
	tool_ipv6_cidr_faq_a5: '不能。连通性测试是另一件事。这里只在浏览器里做前缀算术。',
	tool_ipv6_cidr_faq_q6: '地址会上传吗？',
	tool_ipv6_cidr_faq_a6: '不会。地址留在你这台设备的浏览器标签页里，不会上传到服务器。',
	tool_ipv6_cidr_ref_rfc4291_label: 'RFC 4291 — IPv6 寻址架构',
	tool_ipv6_cidr_ref_rfc5952_label: 'RFC 5952 — IPv6 地址文本表示建议',
	tool_ipv6_cidr_ref_rfc6164_label: 'RFC 6164 — 路由器间链路使用 127 位前缀',
	tool_ipv6_cidr_disclaimer:
		'结果遵循常见 IPv6 CIDR 算术（RFC 4291、5952、6164）。这不是路由或运营商分配建议；关键变更请在自己的环境核对。',
};

export default zh;
